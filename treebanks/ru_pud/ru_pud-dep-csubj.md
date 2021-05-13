---
layout: base
title:  'Statistics of csubj in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `csubj`

This relation is universal.

47 nodes (0%) are attached to their parents as `csubj`.

44 instances of `csubj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.80851063829787.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (26; 55% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (18; 38% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	Сейчас	сейчас	ADV	RB	Degree=Pos	3	advmod	_	_
2	там	там	ADV	RB	Degree=Pos	3	advmod	_	_
3	можно	можно	VERB	PRED	_	0	root	_	_
4	увидеть	увидеть	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	3	csubj	_	_
5	только	только	PART	UH	_	6	advmod	_	_
6	руины	руины	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Однако	однако	CCONJ	CC	_	2	advmod	_	_
2	остается	оставаться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
3	неясным	неясный	ADJ	JJ	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	2	xcomp	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	почему	почему	ADV	WRB	Degree=Pos	7	advmod	_	_
6	видео	видео	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	7	nsubj	_	_
7	распространяется	распространяться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	3	csubj	_	_
8	в	в	ADP	IN	_	9	case	_	_
9	Германии	Германия	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Сложно	сложно	ADV	RB	Degree=Pos	0	root	_	_
2	представить	представить	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	1	csubj	_	SpaceAfter=No
3	,	,	PUNCT	,	_	9	punct	_	_
4	что	что	SCONJ	IN	_	9	mark	_	_
5	в	в	ADP	IN	_	6	case	_	_
6	Италии	Италия	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	9	obl	_	_
7	протяженность	протяженность	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	nsubj	_	_
8	метро	метро	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	nmod	_	_
9	меньше	маленький	ADJ	JJR	Degree=Cmp	2	ccomp	_	SpaceAfter=No
10	,	,	PUNCT	,	_	13	punct	_	_
11	чем	чем	SCONJ	IN	_	13	case	_	_
12	в	в	ADP	IN	_	13	case	_	_
13	Мадриде	Мадрид	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


