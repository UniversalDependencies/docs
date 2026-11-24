---
layout: base
title:  'Statistics of conj:contr in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `conj:contr`

This relation is a language-specific subtype of <tt><a href="fsl_stkautogramm-dep-conj.html">conj</a></tt>.
There are also 5 other language-specific subtypes of `conj`: <tt><a href="fsl_stkautogramm-dep-conj-chaining.html">conj:chaining</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-dbl.html">conj:dbl</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-illustrate.html">conj:illustrate</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-reform.html">conj:reform</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-zoom.html">conj:zoom</a></tt>.

7 nodes (1%) are attached to their parents as `conj:contr`.

7 instances of `conj:contr` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57142857142857.

The following 5 pairs of parts of speech are connected with `conj:contr`: <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (2; 29% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="fsl_stkautogramm-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 conj:contr	color:blue
1	[hep]	[hep]	INTJ	_	_	8	discourse	_	AlignBegin=119352|AlignEnd=119626|Gloss=[hep]|NMM=eyebrow-raise|Trs=Left
2	PNT[MOI]	PNT	PRON	_	Number=Sing|PronType=Prs	8	discourse:participant	_	AlignBegin=119630|AlignEnd=120600|Gloss=PNT[ME]|NMM=rightward-tilt+eyebrow-raise|Tgt=Prs1
3	[hep]	[hep]	INTJ	_	_	8	discourse	_	AlignBegin=120604|AlignEnd=121200|Exp=Neg|Gloss=[hep]|NMM=eyebrow-rf
4	PNT[lieu2]-[non]	PNT	ADV	_	_	8	obj	_	AlignBegin=121200|AlignEnd=122265|Exp=Neg|Gloss=PNT[place2]-[no]|NMM=eye-blink|Src=PSS3l|Tgt=PSSN
5	PNT[lieu3]	PNT	ADV	_	_	4	conj:contr	_	AlignBegin=122274|AlignEnd=122826|Gloss=PNT[place3]|NDHHeld=PNT-PSS3l|NMM=eyebrow-raise|Src=PSSN|Tgt=PSS3r
6	[TROISIÈME]	[TROISIÈME]	ADJ	_	_	5	advcl	_	AlignBegin=122826|AlignEnd=123287|Gloss=[THIRD]
7	PNT[lieu3]	PNT	ADV	_	_	5	conj:reform	_	AlignBegin=123296|AlignEnd=123904|Gloss=PNT[place3]|NMM=head-nod+eye-blink|Tgt=PSS3r
8	[ADORER2]	[ADORER2]	VERB	_	_	0	root	_	AlignBegin=123913|AlignEnd=124939|Gloss=[ADORE2]|Reported=Yes

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 conj:contr	color:blue
1	[AUSSI]	[AUSSI]	ADV	_	_	5	cc	_	AlignBegin=134500|AlignEnd=134960|Gloss=[ALSO]|NMM=eye-blink
2	PNT[là-bas-en-bas]	PNT	ADV	_	_	3	advmod	_	AlignBegin=134960|AlignEnd=135278|Gloss=PNT[down-there]|Tgt=PSSN
3	[EAU]	[EAU]	NOUN	_	_	5	obl:mod	_	AlignBegin=135278|AlignEnd=136174|Gloss=[WATER]|NMM=forward-tilt+eyebrow-raise+eye-blink
4	[SABLE]	[SABLE]	NOUN	_	_	5	nsubj	_	AlignBegin=136187|AlignEnd=136816|Gloss=[SAND]
5	[non]	[non]	ADV	_	_	0	root	_	AlignBegin=136187|AlignEnd=136816|DHHeld=[SABLE]|Exp[lex]=Neg|Gloss=[no]|ISMarker[CFoc]=Cxn-corel+NMM|NDHHeld=[SABLE]|NMM=eyebrow-raise
6	[ROCHER]	[ROCHER]	NOUN	_	_	5	conj:contr	_	AlignBegin=137317|AlignEnd=138026|Gloss=[ROCK]|ISRole=CFoc|NMM=forward-tilt+eyebrow-rf
7	[rocher]	[rocher]	NOUN	_	_	6	conj:illustrate	_	AlignBegin=138035|AlignEnd=139774|Exp=Intensité|Gloss=[rock]|NMM=eye-blink

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 conj:contr	color:blue
1	PNT[lieu3]	PNT	ADV	_	_	0	root	_	AlignBegin=124939|AlignEnd=125296|Exp=Int|Gloss=PNT[place3]|NDHHeld=[ADORER2]|NMM=forward-tilt+eyebrow-raise|Tgt=PSS3r
2	[QUOI]	[QUOI]	PRON	_	PronType=Int	3	nmod	_	AlignBegin=125300|AlignEnd=125913|Exp[lex]=Int|Gloss=[WHAT]|ISMarker[Foc]=Cxn-fq|NDHHeld=[ADORER2]|NMM=eye-blink
3	[MER]	[MER]	NOUN	_	_	1	obl:mod	_	AlignBegin=125913|AlignEnd=127078|Gloss=[SEA]|ISRole=Foc
4	[MAIS]	[MAIS]	CCONJ	_	_	5	cc	_	AlignBegin=127091|AlignEnd=127635|Gloss=[BUT]|NDHHeld=[MER]|NMM=eyebrow-raise
5	[PLAGE]	[PLAGE]	NOUN	_	_	6	nsubj	_	AlignBegin=127657|AlignEnd=128383|Gloss=[BEACH]
6	[DIFFÉRENT]	[DIFFÉRENT]	ADJ	_	_	3	conj	_	AlignBegin=128396|AlignEnd=128987|Gloss=[DIFFERENT]
7	[CALANQUE]	[CALANQUE]	NOUN	_	_	6	conj:contr	_	AlignBegin=129013|AlignEnd=130809|Gloss=[ROCKY-INLET]|ISMarker[CFoc]=Cxn-corel|ISRole=CFoc|NMM=eyebrow-rf
8	[ROCHER]	[ROCHER]	NOUN	_	_	9	nmod	_	AlignBegin=130817|AlignEnd=131152|Gloss=[ROCK]|NMM=eyebrow-rf
9	[rocher]	[rocher]	NOUN	_	_	7	conj:illustrate	_	AlignBegin=131170|AlignEnd=132813|Exp=Intensité|Gloss=[rock]|NMM=eyebrow-rf|TwoH=Yes

~~~


