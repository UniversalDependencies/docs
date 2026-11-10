---
layout: base
title:  'Statistics of advmod in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `advmod`

This relation is universal.

37 nodes (6%) are attached to their parents as `advmod`.

21 instances of `advmod` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83783783783784.

The following 3 pairs of parts of speech are connected with `advmod`: <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (20; 54% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (15; 41% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (2; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	PNT[là]	PNT	ADV	_	_	2	advmod	_	AlignBegin=108687|AlignEnd=109322|Gloss=PNT[here]|ISMarker[Top]=NMM|ISRole=Top|NMM=eyebrow-raise+eye-blink|Tgt=PSSN
2	[NAGER]	[NAGER]	NOUN	_	_	3	nsubj	_	AlignBegin=109352|AlignEnd=111017|Exp=Positif|Gloss=[SWIM]
3	[AGRÉABLE]	[AGRÉABLE]	ADJ	_	_	0	root	_	AlignBegin=111017|AlignEnd=111722|Exp[lex]=Positif|Gloss=[PLEASANT]|NMM=eye-blink

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod	color:blue
1	[MOUILLER]	[MOUILLER]	VERB	_	_	0	root	_	AlignBegin=1142054|AlignEnd=1142374|Gloss=[WET]|NMM=leftward-tilt
2	[NON]	[NON]	ADV	_	_	1	advmod	_	AlignBegin=1142374|AlignEnd=1142859|Gloss=[NO]|ISMarker[CFoc]=Cxn-corel
3	[LAISSER]	[LAISSER]	VERB	_	_	1	conj	_	AlignBegin=1142859|AlignEnd=1143214|Gloss=[LET]|ISRole=Foc+CFoc
4	[SÉCHER]	[SÉCHER]	VERB	_	_	3	ccomp	_	AlignBegin=1143214|AlignEnd=1143659|Gloss=[DRY]|NMM=eyebrow-raise+head-nod
5	[LAISSER]	[LAISSER]	VERB	_	_	3	conj:dbl	_	AlignBegin=1143659|AlignEnd=1144339|Gloss=[LET]|ISMarker[Foc]=Cxn-dbl|NMM=head-nod+eye-blink
6	position-neutre	position-neutre	PUNCT	_	_	1	punct	_	AlignBegin=1144339|AlignEnd=1144859|Gloss=neutral-position

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 advmod	color:blue
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


