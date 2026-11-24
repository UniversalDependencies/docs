---
layout: base
title:  'Statistics of nmod in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `nmod`

This relation is universal.

53 nodes (9%) are attached to their parents as `nmod`.

32 instances of `nmod` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20754716981132.

The following 7 pairs of parts of speech are connected with `nmod`: <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (32; 60% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt> (6; 11% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt> (6; 11% instances), <tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (4; 8% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-NUM.html">NUM</a></tt> (3; 6% instances), <tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod	color:blue
1	[RECETTE]	[RECETTE]	NOUN	_	_	0	root	_	AlignBegin=1098344|AlignEnd=1098939|Gloss=[RECIPE]
2	[CUISINE]	[CUISINE]	NOUN	_	_	1	nmod	_	AlignBegin=1098939|AlignEnd=1099659|Gloss=[COOKING]
3	position-neutre	position-neutre	PUNCT	_	_	1	punct	_	AlignBegin=1099659|AlignEnd=1102699|Gloss=neutral-position|NMM=eye-blink

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	PNT[TOI]	PNT	PRON	_	Number=Sing|PronType=Prs	2	nmod	_	AlignBegin=9099|AlignEnd=9344|Gloss=PNT[YOU]|Tgt=Prs2
2	[TRAJET]	[TRAJET]	NOUN	_	_	4	obj	_	AlignBegin=9358|AlignEnd=10033|Gloss=[ROUTE]
3	[POUVOIR]	[POUVOIR]	VERB	_	_	0	root	_	AlignBegin=10047|AlignEnd=10467|Gloss=[CAN]
4	[EXPLIQUER]	[EXPLIQUER]	VERB	_	_	3	ccomp	_	AlignBegin=10476|AlignEnd=10939|Gloss=[EXPLAIN]|Obj=Tgt|Src=Prs2|Subj=Src|Tgt=Prs1
5	[PRÉCIS]	[PRÉCIS]	ADJ	_	_	4	advcl	_	AlignBegin=10953|AlignEnd=11425|Gloss=[PRECISE]

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod	color:blue
1	[VENIR-DE]	[VENIR-DE]	VERB	_	_	0	root	_	AlignBegin=1108859|AlignEnd=1109259|Gloss=[COME-FROM]|NMM=rightward-tilt+eyebrow-raise|Tgt=PSS3l
2	[RECETTE]	[RECETTE]	NOUN	_	_	1	dislocated	_	AlignBegin=1109259|AlignEnd=1109579|Gloss=[RECIPE]|Loc=PSS3l
3	[VIÊT-NAM]~	[VIÊT-NAM]	PROPN	_	_	5	reparandum	_	AlignBegin=1109579|AlignEnd=1109659|Gloss=[VIÊT-NAM]~|Scrap=Yes
4	[MONTAGNE]	[MONTAGNE]	NOUN	_	_	1	obl:arg	_	AlignBegin=1109659|Gloss=[MOUNTAIN]
5	[VIÊT-NAM]	[VIÊT-NAM]	PROPN	_	_	4	nmod	_	AlignEnd=1110584|Gloss=[VIÊT-NAM]
6	POSS[LUI]	POSS	ADJ	_	_	5	amod	_	AlignBegin=1110584|AlignEnd=1112109|Gloss=POSS[IT]|NMM=rightward-tilt+head-nod+eye-blink|Tgt=PSS3l

~~~


