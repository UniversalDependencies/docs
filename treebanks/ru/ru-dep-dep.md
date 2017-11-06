---
layout: base
title:  'Statistics of dep in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `dep`

This relation is universal.

11 nodes (0%) are attached to their parents as `dep`.

7 instances of `dep` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.36363636363636.

The following 5 pairs of parts of speech are connected with `dep`: <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (4; 36% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (3; 27% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-ADP.html">ADP</a></tt> (2; 18% instances), <tt><a href="ru-pos-ADP.html">ADP</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	Дивовой	ДИВОВА	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	3	dep	_	_
2	и	И	CCONJ	CC	_	3	cc:preconj	_	_
3	уехала	УЕХАТЬ	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
4	за	ЗА	ADP	IN	_	5	case	_	_
5	границу	ГРАНИЦА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	Тона	ТОН	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	2	dep	_	_
2	рисовальщиком	РИСОВАЛЬЩИК	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
3	в	В	ADP	IN	_	5	case	_	_
4	чертёжной	ЧЕРТЕЖНЫЙ	ADJ	JJL	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	5	amod	_	_
5	комиссии	КОМИССИЯ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	2	nmod	_	_
6	по	ПО	ADP	IN	_	7	case	_	_
7	построению	ПОСТРОЕНИЕ	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	5	nmod	_	_
8	Храма	ХРАМ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	Христа	ХРИСТОС	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
10	Спасителя	СПАСИТЕЛЬ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
11	в	В	ADP	IN	_	12	case	_	_
12	Москве	МОСКВА	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 dep	color:blue
1	С	С	ADP	IN	_	3	case	_	_
2	1	1	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	amod	_	_
3	июля	ИЮЛЬ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
4	1995	1995	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	amod	_	_
5	года	ГОД	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
6	Мари	МАРИ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
7	-	-	PUNCT	-	_	6	goeswith	_	_
8	Шанталь	ШАНТАЛЬ	ADV	AFX	_	6	goeswith	_	_
9	замужем	ЗАМУЖЕМ	ADV	RB	_	0	root	_	_
10	за	ЗА	ADP	IN	_	12	dep	_	_
11	(	(	PUNCT	(	_	12	punct	_	SpaceAfter=No
12	род.	РОД.	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	9	parataxis	_	_
13	1967	1967	ADJ	ORD	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	12	obl	_	SpaceAfter=No
14	)	)	PUNCT	)	_	12	punct	_	SpaceAfter=No
15	,	,	PUNCT	,	_	19	punct	_	_
16	с	С	ADP	IN	_	17	case	_	_
17	которым	КОТОРЫЙ	PRON	AWP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	19	obl	_	_
18	она	ОНА	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	19	nsubj	_	_
19	встречалась	ВСТРЕЧАТЬСЯ	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	12	orphan	_	_
20	3	3	NUM	CD	Animacy=Inan|Case=Acc|NumType=Card	21	nummod:gov	_	_
21	года	ГОД	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	19	obl	_	_
22	до	ДО	ADP	IN	_	24	case	_	_
23	их	ИХ	DET	PRP$	Person=3	24	det	_	_
24	свадьбы	СВАДЬБА	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	19	obl	_	SpaceAfter=No
25	.	.	PUNCT	.	_	9	punct	_	_

~~~


