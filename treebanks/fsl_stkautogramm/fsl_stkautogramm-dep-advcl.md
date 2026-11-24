---
layout: base
title:  'Statistics of advcl in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `advcl`

This relation is universal.

9 nodes (1%) are attached to their parents as `advcl`.

6 instances of `advcl` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 4 pairs of parts of speech are connected with `advcl`: <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (5; 56% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (2; 22% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt> (1; 11% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advcl	color:blue
1	PNT[TOI]	PNT	PRON	_	Number=Sing|PronType=Prs	2	nmod	_	AlignBegin=9099|AlignEnd=9344|Gloss=PNT[YOU]|Tgt=Prs2
2	[TRAJET]	[TRAJET]	NOUN	_	_	4	obj	_	AlignBegin=9358|AlignEnd=10033|Gloss=[ROUTE]
3	[POUVOIR]	[POUVOIR]	VERB	_	_	0	root	_	AlignBegin=10047|AlignEnd=10467|Gloss=[CAN]
4	[EXPLIQUER]	[EXPLIQUER]	VERB	_	_	3	ccomp	_	AlignBegin=10476|AlignEnd=10939|Gloss=[EXPLAIN]|Obj=Tgt|Src=Prs2|Subj=Src|Tgt=Prs1
5	[PRÉCIS]	[PRÉCIS]	ADJ	_	_	4	advcl	_	AlignBegin=10953|AlignEnd=11425|Gloss=[PRECISE]

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 advcl	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advcl	color:blue
1	PNT[MOI]	PNT	PRON	_	Number=Sing|PronType=Prs	2	nsubj	_	AlignBegin=57174|AlignEnd=57413|Gloss=PNT[ME]|Tgt=Prs1
2	[BARCELONE]	[BARCELONE]	PROPN	_	_	5	advcl	_	AlignBegin=57413|AlignEnd=57959|Gloss=[BARCELONA]|ISMarker[CTop]=Spatial|ISRole=CTop|Loc=PSS3l
3	[FRANCE]	[FRANCE]	PROPN	_	_	5	obl:mod	_	AlignBegin=57965|AlignEnd=58413|Gloss=[FRANCE]|Loc=PSSLr
4	[QUI]	[QUI]	PRON	_	PronType=Int	5	obl	_	AlignBegin=58419|AlignEnd=58721|Gloss=[WHO]|Loc=PSSLr
5	[ÉLÉCTION]	[ÉLÉCTION]	VERB	_	_	0	root	_	AlignBegin=58727|AlignEnd=59424|Gloss=[ELECTED]
6	[OUI]	[OUI]	INTJ	_	_	5	discourse	_	AlignBegin=59430|AlignEnd=59919|Gloss=[YES]|NMM=forward-tilt
7	[DRÔLE]	[DRÔLE]	ADJ	_	_	5	discourse	_	AlignBegin=59930|AlignEnd=60715|Gloss=[FUNNY]|NMM=eye-blink

~~~


