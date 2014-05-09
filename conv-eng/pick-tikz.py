import sys
import re

### \begin{deptext}[column sep=0.2em] Sam \&, \& my \& brother \& , \& arrived \\ \end{deptext}
depTextRe=re.compile(r"\\begin\{deptext\}(\[.*?\])? *(.*?)\\end\{deptext\}")
#\depedge[edge unit distance=0.5ex]{1}{4}{appos}
depEdgeRe=re.compile(r"\\depedge(?:qlow)?(\[.*?\])?\{([0-9]+)\}\{([0-9]+)\}\{(.*?)\}")

junkRe=re.compile(r"\\(color)\{.*?\}|\[.*?\]")

emphRe=re.compile(r"(\\emph\{)(.*?)\}")

def wipe_emph(depText):
    while True:
        m=emphRe.search(depText)
        if not m:
            break
        b,e=m.span()
        depText=depText[:b]+(depText[m.span(2)[0]:m.span(2)[1]].replace(" ","_"))+depText[e+1:]
    return depText

def readDepFig(textIn):
# \begin{dependency}
#    \begin{deptext}[column sep=0.2em]
#       Sam \&, \& my \& brother \& , \& arrived \\
#    \end{deptext}
#    \depedge[edge unit distance=0.5ex]{1}{4}{appos}
# \end{dependency}
    lines=""
    while True:
        line=textIn.next().strip()
        if line.startswith(r"\end{dependency}"):
            break
        lines+=" "+line
    m=depTextRe.search(lines)
    depText=m.group(2)
    depText=junkRe.sub(" ",depText)
    depText=wipe_emph(depText)
    tokens=[t.strip() for t in depText.replace(r"\\","").strip().split(r"\&")]
    adjust=0
    if not tokens[0]:
        tokens.pop(0)
        adjust=-1
    txt=" ".join(tokens)
    text=""
    text+="""\n\n<div class="sd-parse">\n"""
    text+=txt+"\n"
    print 
    for m in depEdgeRe.finditer(lines):
        src=int(m.group(2))+adjust
        target=int(m.group(3))+adjust
        dType=m.group(4)
        text+=dType+"("+tokens[src-1]+"-"+str(src)+", "+tokens[target-1]+"-"+str(target)+")\n"
    text+="""</div>\n\n"""
    print text


print "---"
print "layout: base"
print "---"


while True:
    try:
        line=sys.stdin.next().strip()
    except StopIteration: #Done!
        break
    
    if line.startswith(r"\begin{dependency}"):
        readDepFig(sys.stdin)
        continue
