---
layout: base
title:  'Statistics of ccomp in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `ccomp`

This relation is universal.

11 nodes (2%) are attached to their parents as `ccomp`.

11 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36363636363636.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (9; 82% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (2; 18% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 ccomp	color:blue
1	[MOUILLER]	[MOUILLER]	VERB	_	_	0	root	_	AlignBegin=1142054|AlignEnd=1142374|Gloss=[WET]|NMM=leftward-tilt
2	[NON]	[NON]	ADV	_	_	1	advmod	_	AlignBegin=1142374|AlignEnd=1142859|Gloss=[NO]|ISMarker[CFoc]=Cxn-corel
3	[LAISSER]	[LAISSER]	VERB	_	_	1	conj	_	AlignBegin=1142859|AlignEnd=1143214|Gloss=[LET]|ISRole=Foc+CFoc
4	[SÉCHER]	[SÉCHER]	VERB	_	_	3	ccomp	_	AlignBegin=1143214|AlignEnd=1143659|Gloss=[DRY]|NMM=eyebrow-raise+head-nod
5	[LAISSER]	[LAISSER]	VERB	_	_	3	conj:dbl	_	AlignBegin=1143659|AlignEnd=1144339|Gloss=[LET]|ISMarker[Foc]=Cxn-dbl|NMM=head-nod+eye-blink
6	position-neutre	position-neutre	PUNCT	_	_	1	punct	_	AlignBegin=1144339|AlignEnd=1144859|Gloss=neutral-position

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 ccomp	color:blue
1	[MONTER-dans-véhicule]	[MONTER]	VERB	_	_	0	root	_	AlignBegin=28669|AlignEnd=29630|Gloss=[SIT-in-vehicule]|Obj=ST|ST=train|STReal=PRF(DH)[ANIMÉ]+PRF(NDH)[train]|Subj=PRF(DH)[ANIMÉ]
2	[JUSQUE]	[JUSQUE]	ADV	_	_	1	advmod	_	AlignBegin=29638|AlignEnd=29992|Gloss=[UNTIL]|NMM=eyebrow-raise
3	[DESCENDRE]	[DESCENDRE]	VERB	_	_	2	ccomp	_	AlignBegin=30008|AlignEnd=30528|Gloss=[GET-OUT]
4	[CHANGER]	[CHANGER]	VERB	_	_	3	conj	_	AlignBegin=30543|AlignEnd=30835|Gloss=[CHANGE]
5	[[LIEU]]	FingerSpelling	PROPN	_	_	4	obl:mod	_	AlignBegin=30843|AlignEnd=32268|Gloss=[[PLACE]]|NMM=eyebrow-frown|Scrap=Yes|toBlur=Yes
6	[OUBLIER]	[OUBLIER]	VERB	_	_	1	discourse	_	AlignBegin=32276|AlignEnd=32654|Gloss=[FORGOT]

~~~


