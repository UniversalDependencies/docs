---
layout: base
title:  'Statistics of csubj in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `csubj`

This relation is universal.

17 nodes (0%) are attached to their parents as `csubj`.

17 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58823529411765.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (10; 59% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (6; 35% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	Эти	этот	DET	DT	Animacy=Inan|Case=Acc|Number=Plur	2	det	_	_
2	явления	явление	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	4	obj	_	_
3	можно	можно	VERB	PRED	_	0	root	_	_
4	наблюдать	наблюдать	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	3	csubj	_	_
5	с	с	ADP	IN	_	8	case	_	_
6	помощью	помощь	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	5	fixed	_	_
7	электронной	электронный	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	спектроскопии	спектроскопия	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj	color:blue
1	Мне	я	PRON	PRP	Case=Dat|Number=Sing|Person=1	5	iobj	_	_
2	иногда	иногда	ADV	RB	Degree=Pos	5	advmod	_	_
3	даже	даже	PART	UH	_	4	advmod	_	_
4	сексом	секс	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	6	obj	_	_
5	сложно	сложный	ADJ	PRED	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	_
6	заниматься	заниматься	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Mid	5	csubj	_	SpaceAfter=No
7	:	:	PUNCT	:	_	10	punct	_	_
8	столько	столько	NUM	RB	Animacy=Inan|Case=Gen|NumType=Card	9	nummod:gov	_	_
9	всего	всё	PRON	DT	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	10	nsubj	_	_
10	творится	твориться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	6	parataxis	_	_
11	в	в	ADP	IN	_	12	case	_	_
12	голове	голова	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
13	...	...	PUNCT	.	_	5	punct	_	SpaceAfter=No
14	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 69	bgColor:blue
# visual-style 69	fgColor:white
# visual-style 68	bgColor:blue
# visual-style 68	fgColor:white
# visual-style 68 69 csubj	color:blue
1	Геологи	геолог	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
2	собрали	собрать	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	,	_	4	punct	_	_
4	обобщили	обобщить	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
5	и	и	CCONJ	CC	_	6	cc	_	_
6	проанализировали	проанализировать	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
7	огромное	огромный	ADJ	JJL	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	8	amod	_	_
8	количество	количество	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	2	obj	_	_
9	данных	данные	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	8	nmod	_	_
10	по	по	ADP	IN	_	11	case	_	_
11	стратиграфии	стратиграфия	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	9	nmod	_	_
12	и	и	CCONJ	CC	_	13	cc	_	_
13	палеонтологии	палеонтология	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	11	conj	_	SpaceAfter=No
14	,	,	PUNCT	,	_	18	punct	_	_
15	в	в	ADP	IN	_	16	case	_	_
16	частности	частность	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	18	nmod	_	_
17	по	по	ADP	IN	_	18	case	_	_
18	радиоляриям	радиолярия	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Plur	11	conj	_	SpaceAfter=No
19	,	,	PUNCT	,	_	18	punct	_	_
20	и	и	CCONJ	CC	_	21	cc	_	_
21	показали	показать	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No
22	,	,	PUNCT	,	_	34	punct	_	_
23	что	что	SCONJ	IN	_	34	mark	_	_
24	большая	больший	ADJ	JJRL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	25	amod	_	_
25	часть	часть	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	34	nsubj:pass	_	_
26	Кордильер	Кордильеры	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	25	nmod	_	SpaceAfter=No
27	,	,	PUNCT	,	_	32	punct	_	_
28	особенно	особенно	ADV	RB	Degree=Pos	32	advmod	_	_
29	их	их	DET	PRP$	_	32	det	_	_
30	внешняя	внешний	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	32	amod	_	_
31	западная	западный	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	32	amod	_	_
32	окраина	окраина	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	25	appos	_	SpaceAfter=No
33	,	,	PUNCT	,	_	32	punct	_	_
34	сложена	сложить	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	21	ccomp	_	_
35	блоками	блок	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	34	iobj	_	_
36	и	и	CCONJ	CC	_	38	cc	_	_
37	отколовшимися	отколоться	VERB	VBNL	Animacy=Inan|Aspect=Perf|Case=Ins|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	38	acl	_	_
38	участками	участок	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	35	conj	_	_
39	(	(	PUNCT	(	_	40	punct	_	SpaceAfter=No
40	террейнами	террейн	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	38	appos	_	SpaceAfter=No
41	)	)	PUNCT	)	_	40	punct	_	_
42	размером	размер	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	38	nmod	_	_
43	от	от	ADP	IN	_	44	case	_	_
44	десятков	десяток	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	42	nmod	_	_
45	метров	метр	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	44	nmod	_	_
46	до	до	ADP	IN	_	47	case	_	_
47	десятков	десяток	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	42	nmod	_	_
48	километров	километр	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	47	nmod	_	SpaceAfter=No
49	,	,	PUNCT	,	_	68	punct	_	_
50	и	и	CCONJ	CC	_	68	cc	_	_
51	что	что	SCONJ	IN	_	68	mark	_	_
52	их	их	DET	PRP$	_	54	det	_	_
53	исходное	исходный	ADJ	JJL	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	54	amod	_	_
54	положение	положение	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	69	obj	_	_
55	по	по	ADP	IN	_	56	case	_	_
56	отношению	отношение	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	54	nmod	_	_
57	друг	друг	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	56	nmod	_	_
58	к	к	ADP	IN	_	57	fixed	_	_
59	другу	друг	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	57	fixed	_	_
60	и	и	CCONJ	CC	_	63	cc	_	_
61	к	к	ADP	IN	_	63	case	_	_
62	Североамериканскому	североамериканский	ADJ	JJL	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	63	amod	_	_
63	кратону	кратон	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	57	conj	_	SpaceAfter=No
64	,	,	PUNCT	,	_	54	punct	_	_
65	до	до	ADP	IN	_	67	case	_	_
66	сих	сей	DET	DT	Case=Gen|Number=Plur	67	det	_	_
67	пор	пора	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	68	obl	_	_
68	трудно	трудно	ADV	RB	Degree=Pos	34	conj	_	_
69	интерпретировать	интерпретировать	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	68	csubj	_	SpaceAfter=No
70	,	,	PUNCT	,	_	76	punct	_	_
71	хотя	хотя	SCONJ	IN	_	76	mark	_	_
72	для	для	ADP	IN	_	74	case	_	_
73	отдельных	отдельный	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	74	amod	_	_
74	террейнов	террейн	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	76	obl	_	_
75	это	это	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	76	nsubj	_	_
76	возможно	возможный	ADJ	JJH	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	69	advcl	_	SpaceAfter=No
77	.	.	PUNCT	.	_	2	punct	_	_

~~~


