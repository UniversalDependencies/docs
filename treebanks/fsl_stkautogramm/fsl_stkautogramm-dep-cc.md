---
layout: base
title:  'Statistics of cc in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `cc`

This relation is universal.

3 nodes (0%) are attached to their parents as `cc`.

3 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `cc`: <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-CCONJ.html">CCONJ</a></tt> (2; 67% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	[AUSSI]	[AUSSI]	ADV	_	_	5	cc	_	AlignBegin=134500|AlignEnd=134960|Gloss=[ALSO]|NMM=eye-blink
2	PNT[là-bas-en-bas]	PNT	ADV	_	_	3	advmod	_	AlignBegin=134960|AlignEnd=135278|Gloss=PNT[down-there]|Tgt=PSSN
3	[EAU]	[EAU]	NOUN	_	_	5	obl:mod	_	AlignBegin=135278|AlignEnd=136174|Gloss=[WATER]|NMM=forward-tilt+eyebrow-raise+eye-blink
4	[SABLE]	[SABLE]	NOUN	_	_	5	nsubj	_	AlignBegin=136187|AlignEnd=136816|Gloss=[SAND]
5	[non]	[non]	ADV	_	_	0	root	_	AlignBegin=136187|AlignEnd=136816|DHHeld=[SABLE]|Exp[lex]=Neg|Gloss=[no]|ISMarker[CFoc]=Cxn-corel+NMM|NDHHeld=[SABLE]|NMM=eyebrow-raise
6	[ROCHER]	[ROCHER]	NOUN	_	_	5	conj:contr	_	AlignBegin=137317|AlignEnd=138026|Gloss=[ROCK]|ISRole=CFoc|NMM=forward-tilt+eyebrow-rf
7	[rocher]	[rocher]	NOUN	_	_	6	conj:illustrate	_	AlignBegin=138035|AlignEnd=139774|Exp=Intensité|Gloss=[rock]|NMM=eye-blink

~~~


