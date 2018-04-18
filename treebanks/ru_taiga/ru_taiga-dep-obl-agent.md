---
layout: base
title:  'Statistics of obl:agent in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-obl.html">obl</a></tt>.

13 nodes (0%) are attached to their parents as `obl:agent`.

11 instances of `obl:agent` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.53846153846154.

The following 4 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (8; 62% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (3; 23% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Колонны	колонна	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	_
2	шли	идти	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	разделенные	разделить	VERB	_	Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	1	acl	_	_
5	изрядными	изрядный	ADJ	_	Case=Ins|Degree=Pos|Number=Plur	6	amod	_	_
6	интервалами	интервал	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	4	obl:agent	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	метров	метр	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	_
9	по	по	ADP	_	_	8	case	_	_
10	150	150	NUM	_	_	8	nummod:gov	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:agent	color:blue
1	Приведенные	привести	VERB	_	Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	4	acl	_	_
2	нами	мы	PRON	_	Case=Ins|Number=Plur|Person=1	1	obl:agent	_	_
3	артикуляционные	артикуляционный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	4	amod	_	_
4	упражнения	упражнение	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	5	nsubj:pass	_	_
5	используются	использовать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
6	логопедами	логопед	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	5	obl:agent	_	_
7	для	для	ADP	_	_	8	case	_	_
8	стимуляции	стимуляция	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	obl	_	_
9	речевой	речевой	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	_
10	активности	активность	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
11	детей	ребенок	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 23 obl:agent	color:blue
1	Эта	этот	DET	_	Case=Nom|Gender=Fem|Number=Sing	2	det	_	_
2	концовка	концовка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
3	НИКАК	никак	ADV	_	Degree=Pos	6	advmod	_	_
4	не	не	PART	_	Polarity=Neg	6	advmod	_	_
5	была	быть	AUX	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
6	увязана	увязать	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	с	с	ADP	_	_	8	case	_	_
8	содержанием	содержание	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	6	obl	_	_
9	романа	роман	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	его	его	DET	_	_	12	det	_	_
12	фабулой	фабула	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	8	conj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	_
14	смыслом	смысл	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	12	conj	_	SpaceAfter=No
15	,	,	PUNCT	_	_	19	punct	_	_
16	она	она	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3	19	nsubj	_	_
17	была	быть	AUX	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	19	cop	_	_
18	абсолютно	абсолютно	ADV	_	Degree=Pos	19	advmod	_	_
19	ненужной	ненужный	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	6	conj	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	никчемушной	никчемушный	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	19	conj	_	SpaceAfter=No
22	,	,	PUNCT	_	_	25	punct	_	_
23	ничем	ничто	PRON	_	Case=Ins	25	obl:agent	_	_
24	не	не	PART	_	Polarity=Neg	25	advmod	_	_
25	оправданной	оправданный	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	19	conj	_	SpaceAfter=No
26	,	,	PUNCT	_	_	25	punct	_	_
27	-	-	PUNCT	_	_	29	punct	_	_
28	что	что	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	29	nsubj	_	_
29	называется	называться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	33	parataxis	_	SpaceAfter=No
30	,	,	PUNCT	_	_	29	punct	_	_
31	ни	ни	CCONJ	_	Polarity=Neg	33	cc	_	_
32	в	в	ADP	_	_	33	case	_	_
33	тын	тын	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	parataxis	_	SpaceAfter=No
34	,	,	PUNCT	_	_	38	punct	_	_
35	ни	ни	CCONJ	_	Polarity=Neg	38	cc	_	_
36	в	в	ADP	_	_	38	case	_	_
37	Красную	красный	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	38	amod	_	_
38	армию	армия	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	33	conj	_	SpaceAfter=No
39	,	,	PUNCT	_	_	40	punct	_	_
40	пришей	пришить	VERB	_	Aspect=Perf|Case=Gen|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	33	conj	_	_
41	кобыле	кобыла	NOUN	_	Animacy=Anim|Case=Dat|Gender=Fem|Number=Sing	40	iobj	_	_
42	хвост	хвост	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	40	obj	_	SpaceAfter=No
43	.	.	PUNCT	_	_	6	punct	_	_

~~~


