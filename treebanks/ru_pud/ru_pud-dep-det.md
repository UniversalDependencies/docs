---
layout: base
title:  'Statistics of det in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `det`

This relation is universal.

417 nodes (2%) are attached to their parents as `det`.

416 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26378896882494.

The following 5 pairs of parts of speech are connected with `det`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (407; 98% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Эта	_	DET	DT	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	det	_	_
2	структура	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Person=3	3	nsubj	_	_
3	делает	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	деньги	_	NOUN	NN	Animacy=Inan|Case=Acc|Number=Plur|Person=3	3	obj	_	_
5	за	_	ADP	IN	_	6	case	_	_
6	счет	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	3	obl	_	_
7	спонсорства	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|Person=3	6	nmod	_	_
8	и	_	CCONJ	CC	_	9	cc	_	_
9	рекламы	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	7	conj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 det	color:blue
1	Уинстон	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	познакомился	_	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
3	со	_	ADP	IN	_	5	case	_	_
4	своей	_	DET	PRP$	Case=Ins|Gender=Fem|Number=Sing|Reflex=Yes	5	det	_	_
5	женой	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing|Person=3	2	obl	_	_
6	Элейн	_	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing|Person=3	5	flat	_	_
7	во	_	ADP	IN	_	8	case	_	_
8	время	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Person=3	2	obl	_	_
9	съемок	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur|Person=3	8	nmod	_	_
10	фильма	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Person=3	9	nmod	_	_
11	«	_	PUNCT	``	_	13	punct	_	SpaceAfter=No
12	Тем	_	DET	DT	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	13	det	_	Proper=True
13	летом	_	PROPN	NN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing|Person=3	10	nmod	_	SpaceAfter=No
14	»	_	PUNCT	''	_	13	punct	_	_
15	в	_	ADP	IN	_	17	case	_	_
16	1979	_	NUM	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	17	nummod	_	_
17	году	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Person=3	2	obl	_	SpaceAfter=No
18	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Чтобы	_	ADP	IN	_	2	mark	_	_
2	уйти	_	VERB	VB	Aspect=Perf	8	advcl	_	_
3	от	_	ADP	IN	_	5	case	_	_
4	всего	_	DET	DT	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	5	det	_	_
5	этого	_	DET	DT	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	obl	_	SpaceAfter=No
6	,	_	PUNCT	,	_	2	punct	_	_
7	Реми	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
8	жил	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
9	в	_	ADP	IN	_	10	case	_	_
10	Швейцарии	_	PROPN	NNP	Animacy=Inan|Gender=Fem|Number=Sing|Person=3	8	obl	_	_
11	большую	_	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Variant=Long	12	amod	_	_
12	часть	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Person=3	8	obl	_	_
13	лета	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|Person=3	12	nmod	_	_
14	1947	_	NUM	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	15	nummod	_	_
15	года	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Person=3	13	obl:tmod	_	SpaceAfter=No
16	.	_	PUNCT	.	_	8	punct	_	_

~~~


