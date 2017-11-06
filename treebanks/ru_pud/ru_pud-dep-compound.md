---
layout: base
title:  'Statistics of compound in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `compound`

This relation is universal.

8 nodes (0%) are attached to their parents as `compound`.

7 instances of `compound` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (5; 63% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (1; 13% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 compound	color:blue
1	Особенный	_	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Variant=Long	2	amod	_	_
2	интерес	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	6	obj	_	_
3	для	_	ADP	IN	_	4	case	_	_
4	гостей	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Person=3	6	obl	_	_
5	выставки	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	4	nmod	_	_
6	представляют	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
7	обе	_	NUM	CD	Animacy=Inan|Case=Nom|Gender=Fem	8	nummod	_	_
8	картины	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur|Person=3	6	nsubj	_	_
9	Лукаса	_	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3	10	compound	_	_
10	Кранаха	_	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3	8	nmod	_	_
11	Старшего	_	ADJ	JJ	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	10	amod	_	Proper=True|SpaceAfter=No
12	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 compound	color:blue
1	Разумеется	_	ADV	RB	_	7	discourse	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	Китай	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
4	на	_	ADP	IN	_	6	case	_	_
5	этой	_	DET	DT	Animacy=Inan|Gender=Fem|Number=Sing	6	det	_	_
6	неделе	_	NOUN	NN	Animacy=Inan|Gender=Fem|Number=Sing|Person=3	7	obl	_	_
7	продемонстрирует	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	0	root	_	_
8	множество	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Person=3	7	obj	_	_
9	другой	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	11	amod	_	_
10	военной	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	11	amod	_	_
11	техники	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	8	nmod	_	_
12	от	_	ADP	IN	_	14	case	_	_
13	ударных	_	ADJ	JJ	Animacy=Inan|Case=Gen|Number=Plur|Variant=Long	14	amod	_	_
14	вертолетов	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3	11	nmod	_	_
15	до	_	ADP	IN	_	18	case	_	_
16	самолетов	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3	18	compound	_	SpaceAfter=No
17	-	_	PUNCT	-	_	16	punct	_	SpaceAfter=No
18	амфибий	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur|Person=3	11	nmod	_	SpaceAfter=No
19	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 compound	color:blue
1	Компания	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
2	сказала	_	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
3	BBC	_	PROPN	NNP	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Person=3	2	iobj	_	SpaceAfter=No
4	,	_	PUNCT	,	_	8	punct	_	_
5	что	_	ADP	IN	_	8	mark	_	_
6	каждой	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	7	amod	_	_
7	авиакомпании	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	8	nmod	_	_
8	нужно	_	VERB	PRED	_	2	ccomp	_	_
9	будет	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut	8	aux	_	_
10	решать	_	VERB	VB	Aspect=Imp	8	nsubj	_	_
11	самой	_	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing|Variant=Long	10	obl	_	SpaceAfter=No
12	,	_	PUNCT	,	_	13	punct	_	_
13	взимать	_	VERB	VB	Aspect=Imp	10	ccomp	_	_
14	ли	_	PART	RP	_	13	advmod	_	_
15	плату	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Person=3	13	obj	_	_
16	с	_	ADP	IN	_	17	case	_	_
17	пассажиров	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Person=3	13	obl	_	_
18	за	_	ADP	IN	_	19	case	_	_
19	доступ	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	15	nmod	_	_
20	к	_	ADP	IN	_	22	case	_	_
21	Wi-Fi	_	X	GW	_	22	compound	_	Proper=True
22	cети	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing|Person=3	19	nmod	_	SpaceAfter=No
23	.	_	PUNCT	.	_	2	punct	_	_

~~~


