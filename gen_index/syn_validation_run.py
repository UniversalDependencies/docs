import os.path
import glob
import traceback
import yaml
import sys
import codecs
import subprocess
import cStringIO
import re
import urllib
import itertools
import json
import datetime

THISDIR=os.path.dirname(os.path.abspath(__file__))

def read_conll(inp,maxsent):
    """ Read conll format file and yield one sentence at a time as a list of lists of columns. If inp is a string it will be interpreted as filename, otherwise as open file for reading in unicode"""
    if isinstance(inp,basestring):
        f=codecs.open(inp,u"rt",u"utf-8")
    else:
        f=codecs.getreader("utf-8")(inp) # read stdin
    count=0
    sent=[]
    comments=[]
    for line in f:
        line=line.strip()
        if not line:
            if sent:
                count+=1
                yield sent, comments
                if maxsent!=0 and count>=maxsent:
                    break
                sent=[]
                comments=[]
        elif line.startswith(u"#"):
            if sent:
                raise ValueError("Missing newline after sentence")
            comments.append(line)
            continue
        else:
            sent.append(line.split(u"\t"))
    else:
        if sent:
            yield sent, comments

    if isinstance(inp,basestring):
        f.close() #Close it if you opened it

langre=re.compile(ur"# db-name: /home/ginter/UD/.*?/UD_(.*?)/[^/]+.db$")
def get_lang(comments):
    """Given the conllu comments, get the lang name"""
    for c in comments:
        match=langre.match(c)
        if match:
            return match.group(1)
    return None

hitre=re.compile(ur"# visual-style\t([0-9]+)\tbgColor:lightgreen$")
def get_hit_indices(comments):
    results=[]
    for c in comments:
        match=hitre.match(c)
        if match:
            results.append(int(match.group(1))-1)
    return results
            
def searchurl(l,q):
    qstr=urllib.urlencode({"db":l+"-dev","search":q})
    return "http://bionlp-www.utu.fi/dep_search/query?%s"%qstr

def searchlink(l,q,txt):
    return '<a href="%s">%s</a>'%(searchurl(l,q),str(txt))

class LangStat:
    
    @classmethod
    def from_list(cls,data):
        """Makes a new LangStat from data which is loaded from json,
        which is basically a list of lang,hits,poshits"""
        lang,hits,poshits=data
        newLS=cls(lang)
        newLS.hits=hits
        newLS.poshits=poshits
        return newLS

    def to_list(self):
        return self.lang,self.hits,self.poshits

    def __init__(self,l):
        self.lang=l
        self.hits=0
        self.poshits={}

    def hit(self,pos):
        self.hits+=1
        self.poshits[pos]=self.poshits.get(pos,0)+1


def hit_table(langs,q):
    #langs: {lang -> stats} --- this is the value of stats_cache for a given test
    allpos=sorted(set(itertools.chain(*(stats.poshits.iterkeys() for stats in langs.itervalues()))))
    print >> out8, '<table>'
    print >> out8, u'<tr><th/>',u"".join(u"<th>"+p+u"</th>" for p in allpos), u"</tr>"
    for l in sorted(langs):
        if not any(langs[l].poshits.get(p) for p in allpos):
            continue
        print >> out8, u'<tr><td>%s</td>'%l
        for p in allpos:
            print >> out8, u'<td>%s</td>'%(searchlink(l,q.replace(u"_",p,1),langs[l].poshits.get(p,u"&nbsp;")))
        print >> out8, u'</tr>'
    print >> out8, '</table>'


ID,FORM,LEMMA,UPOS,XPOS,FEAT,HEAD,DEPREL,DEPS,MISC=range(10)
def run_test(lang,expr):
    global args
    """Runs one test on one language. Language is given with UD_ and
    is really a repo name. Returns a LangStat()"""
    cmd="python %s/query.py --max 10000000000 -d '%s/%s/*.db' '%s'"%(args.dep_search,os.path.abspath(args.ud_data),lang,expr)
    p=subprocess.Popen(cmd,stdin=None,stdout=subprocess.PIPE,stderr=subprocess.PIPE,shell=True)
    out,err=p.communicate()

    ls=LangStat(lang)
    for sent,comments in read_conll(cStringIO.StringIO(out),0):
        hits=get_hit_indices(comments)
        assert hits
        for h in hits:
            ls.hit(sent[h][UPOS])
    return ls


def load_test_cache(f_name):
    """Loads all test results from f_name (json) and returns
    a dictionary {expression -> {lang -> LangStat()}}"""
    if not os.path.exists(f_name):
        return {}
    try:
        with open(f_name,"r") as f:
            d_tmp=json.load(f)
            for test,langdict in d_tmp.iteritems():
                for lang in langdict.keys():
                    langdict[lang]=LangStat.from_list(langdict[lang])
        return d_tmp
    except:
        traceback.print_exc()
        return {}

def save_test_cache(d,f_name):
    """Opposite of load_test_cache"""
    newD={}
    for test,langdict in d.iteritems():
        newD[test]=dict(((lang,stats.to_list()) for lang,stats in langdict.iteritems()))
    with open(f_name,"w") as f:
        d=json.dump(newD,f)
    
def main(tests,test_cache,languages):
    """tests is the stuff you get from yaml
    test_cache is the test result dictionary"""

    for t in tests:
        #Make sure you have this test for every language
        for l in languages:
            if l not in test_cache.get(t["expr"],{}):
                test_cache.setdefault(t["expr"],{})[l]=run_test(l,t["expr"])
        #Forget languages you don't need
        todel=set(test_cache[t["expr"]])-set(languages)
        for l in todel:
            print >> sys.stderr, "Deleting", l
            del test_cache[t["expr"]][l]
        #remember: test_cache: {testexpression -> {language -> stats}}
        print >> out8, "#", t["name"]
        print >> out8
        print >> out8, t["desc"]
        print >> out8
        print >> out8, u"Search expression: `"+t["expr"]+u"`"

        if "pos_ex" in t:
            print >> out8
            print >> out8, u"Correct example:"
            print >> out8
            print >> out8, u"~~~ sdparse"
            print >> out8
            print >> out8, t["pos_ex"]
            print >> out8
            print >> out8, u"~~~"
            print >> out8

        if "neg_ex" in t:
            print >> out8
            print >> out8, u"Incorrect example:"
            print >> out8
            print >> out8, u"~~~ sdparse"
            print >> out8
            print >> out8, t["neg_ex"]
            print >> out8
            print >> out8, u"~~~"
            print >> out8

        print >> out8
        print >> out8, u"<a href=\"" + t["link"] + u"\">Link to documentation</a>"
        print >> out8
        print >> out8, u'<div id="accordion" class="jquery-ui-accordion">'
        print >> out8, u"<div>"
        print >> out8, u'<span class="doublewidespan" style="padding-left:3em">%s</span>'%u"Hit overview"
        print >> out8, u'<span class="widespan"> </span>'
        print >> out8, u"</div>"
        print >> out8, u'<div>'
        if t["expr"].startswith(u"_"):
            hit_table(test_cache[t["expr"]],t["expr"])
        elif "expr-pos" in t:
            hit_table(test_cache[t["expr"]],t["expr-pos"])
        else:
            print >> out8, u"Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links"
        print >> out8, u'</div>'
        for l in languages:
            if test_cache[t["expr"]][l].hits == 0:
                continue
            print >> out8, u"<div>"
            print >> out8, u'<span class="doublewidespan" style="padding-left:3em">%s</span>'%l
            print >> out8, u'<span class="widespan">%d hits</span>'%test_cache[t["expr"]][l].hits
            print >> out8, u"</div>"
            print >> out8, u"<div>"
            q=urllib.urlencode({"db":l,"search":t["expr"]})
            print >> out8, '<a href="http://bionlp-www.utu.fi/dep_search/query?%s-dev">Go to search</a><p/>'%q
            print >> out8, u"</div>"
        print >> out8, u"</div>"
        print >> out8
        print >> out8
#        break
    
if __name__=="__main__":
    import argparse
    parser = argparse.ArgumentParser(description='generates the syntactic validation tables')
    parser.add_argument('--ud-data', default="/home/ginter/UD/ud_dbs_12",help='Where is the UD data indexed by dep_search? (DIRECTORY)')
    parser.add_argument('--rerun',default=None,help='Comma-separated list of languages whose tests should be wiped and re-run')
    parser.add_argument('--test-cache',default="test_cache.json",help='Cache with test results. Will be created if not existing')
    parser.add_argument('--empty-test-cache',default=False,action="store_true",help='Rerun all tests')
    parser.add_argument('--dep-search', default="/home/ginter/dep_search",help='Where is the dep-search home? (DIRECTORY)')
    parser.add_argument('--tests', default=os.path.join(THISDIR,"stests.yaml"),help='Yaml file with the tests')
    args = parser.parse_args()

    out8=codecs.getwriter("utf-8")(sys.stdout)
    print >> out8, u"---"
    print >> out8, u"layout: base"
    print >> out8, u"title:  'Universal Dependencies --- Syntactic validation'"
    print >> out8, u"udver:  '2'"
    print >> out8, u"---"
    print >> out8
    print >> out8, u'Regenerated <time class="timeago" datetime="%(zulu)sZ">%(zulu)s zulu</time>'%{'zulu':datetime.datetime.utcnow().replace(microsecond=0).isoformat()}
    print >> out8


    try:
        languages=sorted(map(os.path.basename,glob.glob(os.path.join(args.ud_data,'UD_*'))))
        test_cache=load_test_cache(args.test_cache)
        if args.rerun is not None:
            langs_to_wipe=args.rerun.split(",")
        else:
            langs_to_wipe=[]
        all_langs=set(languages)
        langs_to_wipe=set(langs_to_wipe)
        #Now we want to forget cached tests for the --rerun languages
        for _,lang_results in test_cache.iteritems():
            to_wipe=(set(lang_results)-all_langs)|(langs_to_wipe&set(lang_results))
            for lw in to_wipe:
                del lang_results[lw]
        with codecs.open(args.tests,"r","utf-8") as t:
            tests=yaml.load(t)
            
        main(tests,test_cache,languages)
        save_test_cache(test_cache,args.test_cache)
    except:
        traceback.print_exc(file=sys.stdout)
