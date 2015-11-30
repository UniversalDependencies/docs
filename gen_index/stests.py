import yaml
import sys
import codecs
import subprocess
import cStringIO
import re
import urllib

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

out8=codecs.getwriter("utf-8")(sys.stdout)

print >> out8, u"---"
print >> out8, u"layout: base"
print >> out8, u"title:  'Universal Dependencies --- Syntactic validation'"
print >> out8, u"---"

for t in tests:
    cmd="python query.py --max 10000000000 -d '%s/*/*.db' '%s'"%(DATABASE_ROOT,t["expr"])
    p=subprocess.Popen(cmd,stdin=None,stdout=subprocess.PIPE,stderr=subprocess.PIPE,cwd=DSEARCH_PATH,shell=True)
    out,err=p.communicate()

    langs={}
    
    for sent,comments in read_conll(cStringIO.StringIO(out),0):
        l=get_lang(comments)
        langs.setdefault(l,[]).append((sent,comments))
    
    print >> out8, "#", t["name"]
    for l in sorted(langs.keys()):
        print >> out8, u'<div id="accordion" class="jquery-ui-accordion">'
        print >> out8, u"<div>"
        print >> out8, u'<span class="doublewidespan" style="padding-left:3em">%s</span>'%l
        print >> out8, u'<span class="widespan">%d hits</span>'%len(langs[l])
        print >> out8, u"</div>"
        print >> out8, u"<div>"
        q=urllib.urlencode({"db":l,"search":t["expr"]})
        print >> out8, '<a href="http://bionlp-www.utu.fi/dep_search/?%s">Go to search</a>'%q
        # for sent,comments in langs[l][:5]:
        #     print >> out8, '<div class="conllu-parse" tabs="yes">'
        #     print >> out8, u"\n".join(comments)
        #     print >> out8, u"\n".join(u"\t".join(l) for l in sent)
        #     print >> out8
        #     print >> out8, '</div>'
        print >> out8, u"...TODO... hits go here"
        
        print >> out8, u"</div>"
        print >> out8, u"</div>"
    print >> out8
    print >> out8
    
        
