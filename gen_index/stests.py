import yaml
import sys
import codecs
import subprocess
import cStringIO
import re
import urllib
import itertools

DSEARCH_PATH="/home/ginter/dep_search"
DATABASE_ROOT="/home/ginter/UD/ud_dbs_12"
with codecs.open("stests.yaml","r","utf-8") as t:
    tests=yaml.load(t)

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
    qstr=urllib.urlencode({"db":l,"search":q})
    return "http://bionlp-www.utu.fi/dep_search/?%s"%qstr

def searchlink(l,q,txt):
    return '<a href="%s">%s</a>'%(searchurl(l,q),str(txt))

class LangStat:

    def __init__(self,l):
        self.lang=l
        self.hits=0
        self.poshits={}

    def hit(self,pos):
        self.hits+=1
        self.poshits[pos]=self.poshits.get(pos,0)+1

def hit_table(langs,q):
    allpos=sorted(set(itertools.chain(*(l.poshits.iterkeys() for l in langs.itervalues()))))
    print >> out8, '<table>'
    print >> out8, u'<tr><th/>',u"".join(u"<th>"+p+u"</th>" for p in allpos), u"</tr>"
    for l in sorted(langs):
        print >> out8, u'<tr><td>%s</td>'%l
        for p in allpos:
            print >> out8, u'<td>%s</td>'%(searchlink(l,q.replace(u"_",p,1),langs[l].poshits.get(p,0)))
        print >> out8, u'</tr>'
    print >> out8, '</table>'
    
        
    

ID,FORM,LEMMA,UPOS,XPOS,FEAT,HEAD,DEPREL,DEPS,MISC=range(10)

out8=codecs.getwriter("utf-8")(sys.stdout)

print >> out8, u"---"
print >> out8, u"layout: base"
print >> out8, u"title:  'Universal Dependencies --- Syntactic validation'"
print >> out8, u"---"

for t in tests:
    cmd="python query.py --max 10000000000 -d '%s/*/*.db' '%s'"%(DATABASE_ROOT,t["expr"])
    p=subprocess.Popen(cmd,stdin=None,stdout=subprocess.PIPE,stderr=subprocess.PIPE,cwd=DSEARCH_PATH,shell=True)
    out,err=p.communicate()

    langs={} #key: language  value: LangStat
    
    for sent,comments in read_conll(cStringIO.StringIO(out),0):
        l=get_lang(comments)
        if l not in langs:
            langs[l]=LangStat(l)
        hits=get_hit_indices(comments)
        assert hits
        for h in hits:
            langs[l].hit(sent[h][UPOS])
    

    print >> out8, "#", t["name"]
    print >> out8
    print >> out8, t["desc"]
    print >> out8
    print >> out8, u"Search expression: `"+t["expr"]+u"`"
    print >> out8
    print >> out8, u'<div id="accordion" class="jquery-ui-accordion">'
    print >> out8, u"<div>"
    print >> out8, u'<span class="doublewidespan" style="padding-left:3em">%s</span>'%u"Hit overview"
    print >> out8, u'<span class="widespan"> </span>'
    print >> out8, u"</div>"
    print >> out8, u'<div>'
    hit_table(langs,t["expr"])
    print >> out8, u'</div>'
    for l in sorted(langs.keys()):
        print >> out8, u"<div>"
        print >> out8, u'<span class="doublewidespan" style="padding-left:3em">%s</span>'%l
        print >> out8, u'<span class="widespan">%d hits</span>'%langs[l].hits
        print >> out8, u"</div>"
        print >> out8, u"<div>"
        q=urllib.urlencode({"db":l,"search":t["expr"]})
        print >> out8, '<a href="http://bionlp-www.utu.fi/dep_search/?%s">Go to search</a><p/>'%q
        print >> out8, u"</div>"
    print >> out8, u"</div>"
    print >> out8
    print >> out8
    
        
