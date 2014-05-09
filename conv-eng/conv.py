import re
import sys

depRelHeader="""\
## %s : %s
"""

oneDepFig="""

<div class="sd-parse">
%s
%s(%s, %s)
</div>

"""

header="""\
---
layout: base
title:  '%(relname)s'
shortdef : '%(shortdef)s'
---

"""

footer=""

### {\emph{advcl}: adverbial clause modifier}
relRe=re.compile(r"\{\\emph\{(.*?)\}:\s+(.*)\}\\\\$") #matches "advcl" and "adverb....ier" as two groups

### tabbing fig text
### \> ``Sam took out  a 3 million dollar loan'' \> \> \emph{amod}(loan, dollar)\\
tabFigLine=re.compile(r"\\> +``(.*?)'' +\\> *\\> +\\emph\{(.*?)\}\((.*?), ?(.*?)\) *\\\\")

### \begin{deptext}[column sep=0.2em] Sam \&, \& my \& brother \& , \& arrived \\ \end{deptext}
depTextRe=re.compile(r"\\begin\{deptext\}(\[.*?\])? *(.*?)\\end\{deptext\}")
#\depedge[edge unit distance=0.5ex]{1}{4}{appos}
depEdgeRe=re.compile(r"\\depedge(\[.*?\])?\{([0-9]+)\}\{([0-9]+)\}\{(.*?)\}")

punctRe=re.compile(r"([.,!?])(?=( |$))")


class Relation:
    """I hold everything related to one relation in here, in case I want to
    reorder them somehow, etc..."""

    def __init__(self,name,definition):
        self.name=name
        self.definition=definition
        self.text=depRelHeader%(name,definition)

    def readDepFig(self,textIn):
# \begin{dependency}
#    \begin{deptext}[column sep=0.2em]
#       Sam \&, \& my \& brother \& , \& arrived \\
#    \end{deptext}
#    \depedge[edge unit distance=0.5ex]{1}{4}{appos}
# \end{dependency}
        lines=""
        while True:
            line=textIn.next().strip()
            if line==r"\end{dependency}":
                break
            lines+=" "+line
        m=depTextRe.search(lines)
        tokens=[t.strip() for t in m.group(2).replace(r"\\","").strip().split(r"\&")]
        txt=" ".join(tokens)
        self.text+="""\n\n<div class="sd-parse">\n"""
        self.text+=txt+"\n"
        for m in depEdgeRe.finditer(lines):
            src=int(m.group(2))
            target=int(m.group(3))
            dType=m.group(4)
            self.text+=dType+"("+tokens[src-1]+"-"+str(src)+", "+tokens[target-1]+"-"+str(target)+")\n"
        self.text+="""</div>\n\n"""
        

    def readTabbingFig(self,textIn):
        while True:
            line=textIn.next().strip()
            if line.startswith(r"\hspace"):
                continue
            match=tabFigLine.match(line)
            if match:
                txt,dType,g,d=match.groups()
                print >> sys.stderr, txt
                txt=punctRe.sub(r" \1",txt).replace(r"\\","")
                g=g.replace("\\","")
                d=d.replace("\\","")
                print >> sys.stderr, txt
                print >> sys.stderr
                self.text+=oneDepFig%(txt,dType,g,d)
                continue
            if line==r"\end{tabbing}":
                return
            print >> sys.stderr, "Spurious line: >>>"+line+"<<<"

    def getText(self):
        t=self.text
        emphRe=re.compile(r"\\emph\{(.*?)\}")
        t=emphRe.sub(r"*\1*",t)
        quoteRe=re.compile(r"``(.*?)''")
        t=quoteRe.sub(r'"\1"',t)
        return t


relations={} #relType -> Relation()
currRel=None
while True:
    try:
        line=sys.stdin.next().strip()
    except StopIteration: #Done!
        break

    #New relation?
    match=relRe.search(line)
    if match: #new relation
        currRel=Relation(*match.groups())
        assert currRel.name not in relations
        relations[currRel.name]=currRel
        continue

    #Figure in tabbing?
    if line.startswith(r"\begin{tabbing}"):
        currRel.readTabbingFig(sys.stdin)
        continue

    if line.startswith(r"\begin{dependency}"):
        currRel.readDepFig(sys.stdin)
        continue

    if line.startswith("%ENDRELS"):
        break
    
    if line.startswith("%") or line.startswith(r"\begin") or line.startswith(r"\end"):
        continue

    if currRel:
        currRel.text+=line+" "

for r in sorted(relations):
    f=open("../_en/"+r+".md","wt")
    print >> f, header%{"relname":r,"shortdef":relations[r].definition}
    print >> f, relations[r].getText()
    print >> f, footer
    f.close()


