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
title:  'English grammatical relations'
---
"""

footer=""

### {\emph{advcl}: adverbial clause modifier}
relRe=re.compile(r"\{\\emph\{(.*?)\}:\s+(.*)\}\\\\$") #matches "advcl" and "adverb....ier" as two groups

### tabbing fig text
### \> ``Sam took out  a 3 million dollar loan'' \> \> \emph{amod}(loan, dollar)\\
tabFigLine=re.compile(r"\\> +``(.*?)'' +\\> *\\> +\\emph\{(.*?)\}\((.*?), ?(.*?)\) *\\\\")


class Relation:
    """I hold everything related to one relation in here, in case I want to
    reorder them somehow, etc..."""

    def __init__(self,name,definition):
        self.name=name
        self.definition=definition
        self.text=depRelHeader%(name,definition)

    def readDepFig(self,textIn):
        while True:
            line=textIn.next().strip()
            if line==r"\end{dependency}":
                break

    def readTabbingFig(self,textIn):
        while True:
            line=textIn.next().strip()
            if line.startswith(r"\hspace"):
                continue
            match=tabFigLine.match(line)
            if match:
                self.text+=oneDepFig%tuple(match.groups())
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

print header
for r in sorted(relations):
    print relations[r].getText()
print footer

