---
layout: base
title:  'Statistics of conj:illustrate in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `conj:illustrate`

This relation is a language-specific subtype of <tt><a href="fsl_stkautogramm-dep-conj.html">conj</a></tt>.
There are also 5 other language-specific subtypes of `conj`: <tt><a href="fsl_stkautogramm-dep-conj-chaining.html">conj:chaining</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-contr.html">conj:contr</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-dbl.html">conj:dbl</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-reform.html">conj:reform</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-zoom.html">conj:zoom</a></tt>.

16 nodes (3%) are attached to their parents as `conj:illustrate`.

16 instances of `conj:illustrate` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5625.

The following 8 pairs of parts of speech are connected with `conj:illustrate`: <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (6; 38% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (4; 25% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 conj:illustrate	color:blue
1	[AUSSI]	[AUSSI]	ADV	_	_	5	cc	_	AlignBegin=134500|AlignEnd=134960|Gloss=[ALSO]|NMM=eye-blink
2	PNT[là-bas-en-bas]	PNT	ADV	_	_	3	advmod	_	AlignBegin=134960|AlignEnd=135278|Gloss=PNT[down-there]|Tgt=PSSN
3	[EAU]	[EAU]	NOUN	_	_	5	obl:mod	_	AlignBegin=135278|AlignEnd=136174|Gloss=[WATER]|NMM=forward-tilt+eyebrow-raise+eye-blink
4	[SABLE]	[SABLE]	NOUN	_	_	5	nsubj	_	AlignBegin=136187|AlignEnd=136816|Gloss=[SAND]
5	[non]	[non]	ADV	_	_	0	root	_	AlignBegin=136187|AlignEnd=136816|DHHeld=[SABLE]|Exp[lex]=Neg|Gloss=[no]|ISMarker[CFoc]=Cxn-corel+NMM|NDHHeld=[SABLE]|NMM=eyebrow-raise
6	[ROCHER]	[ROCHER]	NOUN	_	_	5	conj:contr	_	AlignBegin=137317|AlignEnd=138026|Gloss=[ROCK]|ISRole=CFoc|NMM=forward-tilt+eyebrow-rf
7	[rocher]	[rocher]	NOUN	_	_	6	conj:illustrate	_	AlignBegin=138035|AlignEnd=139774|Exp=Intensité|Gloss=[rock]|NMM=eye-blink

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 conj:illustrate	color:blue
1	[REGARDER]	[REGARDER]	VERB	_	_	0	root	_	AlignBegin=116743|AlignEnd=117130|Gloss=[LOOK]|Tgt=PSS3
2	[écouter-en-regardant]	[écouter-en-regardant]	VERB	_	_	1	conj:illustrate	_	AlignBegin=117139|AlignEnd=117970|Gloss=[listen-looking]
3	[INTÉRESSANT]	[INTÉRESSANT]	ADJ	_	_	2	parataxis	_	AlignBegin=117974|AlignEnd=118648|Gloss=[INTERESTING]|Reported=Yes
4	PNT[sujet]	PNT	PRON	_	PronType=Prs	3	nsubj	_	AlignBegin=118648|AlignEnd=119326|Gloss=PNT[topic]|ISMarker[Top]=Dlxn+NMM|ISRole=Top|NMM=head-nod+eye-blink|Tgt=PSSN

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 conj:illustrate	color:blue
1	[PERSONNE]	[PERSONNE]	NOUN	_	_	2	nsubj	_	AlignBegin=105470|AlignEnd=105978|Gloss=[PERSON]|NMM=eyebrow-rf
2	[PEU]	[PEU]	ADV	_	_	0	root	_	AlignBegin=105991|AlignEnd=106787|Exp[lex]=Intensité|Gloss=[LITTLE]|NMM=eyebrow-rf
3	PRF[PERSONNE]	PRF	NOUN	_	_	2	conj:illustrate	_	AlignBegin=106791|AlignEnd=108683|Exp=Intensité|Gloss=PRF[PERSON]|NMM=eyebrow-rf|Rep=4|TwoH=Yes

~~~


