---
layout: base
title:  'Statistics of discourse:participant in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `discourse:participant`

This relation is a language-specific subtype of <tt><a href="fsl_stkautogramm-dep-discourse.html">discourse</a></tt>.

5 nodes (1%) are attached to their parents as `discourse:participant`.

5 instances of `discourse:participant` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.4.

The following 3 pairs of parts of speech are connected with `discourse:participant`: <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt> (2; 40% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse:participant	color:blue
1	[transition]	[transition]	ADV	_	_	5	discourse	_	AlignBegin=91802|AlignEnd=92264|Gloss=[transition]
2	[PAPA]	[PAPA]	NOUN	_	_	5	discourse:participant	_	AlignBegin=92346|AlignEnd=92868|Gloss=[DAD]|NMM=eyebrow-raise
3	[hep]	[hep]	INTJ	_	_	5	discourse	_	AlignBegin=92904|AlignEnd=93618|Gloss=[hep]|NMM=eye-blink
4	PNT[MOI]	PNT	PRON	_	Number=Sing|PronType=Prs	5	nsubj	_	AlignBegin=93669|AlignEnd=94029|Gloss=PNT[ME]|Tgt=Prs1
5	[ADORER]	[ADORER]	VERB	_	_	0	root	_	AlignBegin=94110|AlignEnd=94853|Gloss=[ADORE]|Reported=Yes
6	PNT[lieu1]	PNT	ADV	_	_	5	obj	_	AlignBegin=94868|AlignEnd=95109|Exp=Neg|Gloss=PNT[place1]|NMM=eyebrow-frown|Tgt=PSS3l|TwoH=Yes
7	[PREMIER]	[PREMIER]	ADJ	_	_	8	amod	_	AlignBegin=95109|AlignEnd=95529|Exp=Neg|Gloss=[FIRST]|NDHHeld=PNT-PSS3l|NMM=eyebrow-frown
8	[VILLE]	[VILLE]	NOUN	_	_	6	appos	_	AlignBegin=95544|AlignEnd=95765|Exp=Neg|Gloss=[CITY]|NDHHeld=PNT-PSS3l|NMM=eyebrow-frown
9	[NON]	[NON]	ADV	_	_	6	advmod	_	AlignBegin=95779|AlignEnd=96059|Exp[lex]=Neg|Gloss=[NO]|ISMarker[CFoc]=Cxn-corel?|NDHHeld=PNT-PSS3l|NMM=eyebrow-raise
10	PNT[lieu2]	PNT	ADV	_	_	6	conj:contr	_	AlignBegin=96088|AlignEnd=96728|Gloss=PNT[place2]|ISRole=CFoc|NDHHeld=PNT-PSS3l|NMM=eyebrow-raise|Tgt=PSSN
11	[DEUXIÈME]	[DEUXIÈME]	ADJ	_	_	10	advcl	_	AlignBegin=96765|AlignEnd=97154|Gloss=[SECOND]|NMM=eyebrow-raise

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 discourse:participant	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 discourse:participant	color:blue
1	[hep]	[hep]	INTJ	_	_	6	discourse	_	AlignBegin=157083|AlignEnd=157550|Gloss=[hep]|NMM=leftward-tilt+eyebrow-raise
2	[MAMAN]	[MAMAN]	NOUN	_	_	6	discourse:participant	_	AlignBegin=157550|AlignEnd=158014|Gloss=[MOM]
3	[OUI]	[OUI]	ADV	_	_	6	discourse	_	AlignBegin=158028|AlignEnd=159214|Gloss=[YES]|NMM=eyebrow-raise
4	[DIFFÉRENT]	[DIFFÉRENT]	ADJ	_	_	6	amod	_	AlignBegin=159228|AlignEnd=160186|Gloss=[DIFFERENT]|Rep=2
5	[DONNER]	[DONNER]	VERB	_	_	6	acl	_	AlignBegin=160207|AlignEnd=160862|Gloss=[GIVE]|NMM=eyebrow-raise
6	[DÉCOUVERTE]	[DÉCOUVERTE]	NOUN	_	_	0	root	_	AlignBegin=160897|AlignEnd=161621|Gloss=[DISCOVERY]|NMM=forward-tilt+eyebrow-frown|Reported=Yes
7	[DIFFÉRENT]	[DIFFÉRENT]	ADJ	_	_	6	amod	_	AlignBegin=161641|AlignEnd=162690|Gloss=[DIFFERENT]
8	[RICHE]	[RICHE]	ADJ	_	_	7	conj	_	AlignBegin=162724|AlignEnd=164179|Gloss=[RICH]|NMM=eyebrow-rf
9	[INTÉRESSANT]	[INTÉRESSANT]	ADJ	_	_	7	conj	_	AlignBegin=164207|AlignEnd=164966|Gloss=[INTERESTING]|NMM=head-nod

~~~


