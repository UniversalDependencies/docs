---
layout: base
title:  'Statistics of flat in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="ru_gsd-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="ru_gsd-dep-flat-name.html">flat:name</a></tt>.

374 nodes (0%) are attached to their parents as `flat`.

374 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.00267379679144.

The following 3 pairs of parts of speech are connected with `flat`: <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (372; 99% instances), <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Виктора	Виктор	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	4	obj	_	_
2	Позднова	Позднов	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	flat:name	_	_
3	не	не	PART	NEG	Polarity=Neg	4	advmod	_	_
4	стало	стать	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	в	в	ADP	IN	_	6	case	_	_
6	11	11	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	4	obl	_	_
7	октября	октябрь	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	flat	_	_
8	2010	2010	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	года	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	Луи	Луи	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	27	nsubj	_	_
2	де	Де	PART	UH	_	1	flat:name	_	_
3	Гиренго	Гиренго	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	flat:name	_	_
4	(	(	PUNCT	(	_	1	punct	_	SpaceAfter=No
5	)	)	PUNCT	)	_	1	punct	_	SpaceAfter=No
6	,	,	PUNCT	,	_	1	punct	_	_
7	(	(	PUNCT	(	_	8	punct	_	SpaceAfter=No
8	12	12	NUM	CD	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|NumType=Card	1	appos	_	_
9	октября	октябрь	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	flat	_	_
10	1911	1911	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
11	,	,	PUNCT	,	_	8	punct	_	_
12	Лимож	Лимож	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	list	_	SpaceAfter=No
13	,	,	PUNCT	,	_	12	punct	_	_
14	Франция	Франция	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	12	list	_	_
15	--	--	PUNCT	--	_	16	punct	_	_
16	15	15	ADJ	ORD	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	8	nmod	_	_
17	апреля	апрель	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	16	flat	_	_
18	1982	1982	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	17	nmod	_	SpaceAfter=No
19	,	,	PUNCT	,	_	16	punct	_	_
20	Кастельсарразен	Кастельсарразен	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	16	list	_	SpaceAfter=No
21	,	,	PUNCT	,	_	20	punct	_	_
22	Франция	Франция	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	20	list	_	SpaceAfter=No
23	)	)	PUNCT	)	_	8	punct	_	_
24	--	--	PUNCT	--	_	27	punct	_	_
25	французский	французский	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	27	amod	_	_
26	политический	политический	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	27	amod	_	_
27	деятель	деятель	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
28	и	и	CCONJ	CC	_	29	cc	_	_
29	дипломат	дипломат	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	27	conj	_	SpaceAfter=No
30	,	,	PUNCT	,	_	31	punct	_	_
31	министр	министр	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	27	conj	_	_
32	иностранных	иностранный	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	33	amod	_	_
33	дел	дело	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	31	nmod	_	_
34	в	в	ADP	IN	_	35	case	_	_
35	кабинете	кабинет	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	31	nmod	_	_
36	Раймона	Раймон	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	35	nmod	_	_
37	Барра	Барр	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	36	flat:name	_	_
38	с	с	ADP	IN	_	39	case	_	_
39	27	27	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	31	nmod	_	_
40	августа	август	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	39	flat	_	_
41	1976	1976	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	40	nmod	_	_
42	по	по	ADP	IN	_	44	case	_	_
43	29	29	ADJ	ORD	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	31	nmod	_	_
44	ноября	ноябрь	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	43	flat	_	_
45	1978	1978	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	44	nmod	_	SpaceAfter=No
46	.	.	PUNCT	.	_	27	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 flat	color:blue
1	На	на	ADP	IN	_	3	case	_	_
2	противоположной	противоположный	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	стороне	сторона	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	также	также	PART	IN	_	10	advmod	_	_
6	на	на	ADP	IN	_	8	case	_	_
7	высокой	высокий	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	горе	гора	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	8	punct	_	_
10	располагалось	располагаться	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
11	старинное	старинный	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	12	amod	_	_
12	село	село	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
13	Соколово	соколово	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	12	appos	_	SpaceAfter=No
14	-	-	PUNCT	-	_	15	punct	_	SpaceAfter=No
15	Мещерское	Мещерское	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	13	flat	_	SpaceAfter=No
16	,	,	PUNCT	,	_	13	punct	_	_
17	проехать	проехать	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	20	xcomp	_	_
18	к	к	ADP	IN	_	19	case	_	_
19	которому	который	PRON	AWP	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	17	obl	_	_
20	можно	можно	VERB	PRED	_	12	acl:relcl	_	_
21	было	быть	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	20	aux	_	_
22	только	только	PART	UH	_	24	advmod	_	_
23	через	через	ADP	IN	_	24	case	_	_
24	Куркино	Куркино	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	20	obl	_	SpaceAfter=No
25	.	.	PUNCT	.	_	10	punct	_	_

~~~


