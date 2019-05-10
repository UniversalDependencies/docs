---
layout: base
title:  'Statistics of dep in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `dep`

This relation is universal.

42 nodes (0%) are attached to their parents as `dep`.

25 instances of `dep` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.02380952380952.

The following 13 pairs of parts of speech are connected with `dep`: <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-SYM.html">SYM</a></tt> (12; 29% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (7; 17% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-SYM.html">SYM</a></tt> (7; 17% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (3; 7% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-ADP.html">ADP</a></tt> (2; 5% instances), <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_gsd-pos-SYM.html">SYM</a></tt> (2; 5% instances), <tt><a href="ru_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_gsd-pos-SYM.html">SYM</a></tt> (2; 5% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-ADP.html">ADP</a></tt> (2; 5% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="ru_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-SYM.html">SYM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	Близкие	близкий	ADJ	JJL	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	уравнения	уравнение	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	11	nsubj:pass	_	_
3	вида	вид	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
4	Y	y	NOUN	SYM	_	3	appos	_	_
5	=	=	SYM	SYM	_	4	dep	_	_
6	AFe	AFe	NOUN	SYM	_	4	nmod	_	_
7	+	+	SYM	SYM	_	8	cc	_	_
8	2	2	NUM	CD	Animacy=Inan|Case=Acc|Gender=Masc|NumType=Card	6	conj	_	_
9	+	+	SYM	SYM	_	10	cc	_	_
10	B	B	NOUN	SYM	_	6	conj	_	_
11	получены	получить	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
12	и	и	PART	UH	_	15	advmod	_	_
13	для	для	ADP	IN	_	15	case	_	_
14	других	другой	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	15	amod	_	_
15	элементов	элемент	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	11	obl	_	SpaceAfter=No
16	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	Дивовой	Дивова	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	3	dep	_	_
2	и	и	CCONJ	CC	_	3	cc	_	_
3	уехала	уехать	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	за	за	ADP	IN	_	5	case	_	_
5	границу	граница	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 dep	color:blue
1	Файлы	файл	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	9	nsubj:pass	_	_
2	генерируемые	генерировать	VERB	VBNL	Animacy=Inan|Aspect=Imp|Case=Nom|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Pass	1	acl	_	_
3	при	при	ADP	IN	_	4	case	_	_
4	использовании	использование	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	2	obl	_	_
5	``	``	PUNCT	``	_	7	punct	_	SpaceAfter=No
6	тестового	тестовый	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	режима	режим	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
8	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	7	punct	_	_
9	сохраняются	сохраняться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
10	в	в	ADP	IN	_	12	case	_	_
11	/	/	SYM	SYM	_	12	dep	_	_
12	var	var	X	FW	Foreign=Yes	9	obl	_	_
13	/	/	SYM	SYM	_	12	goeswith	_	_
14	log	log	X	FW	Foreign=Yes	12	goeswith	_	_
15	/	/	SYM	SYM	_	12	goeswith	_	_
16	zypper.	zypper.	X	FW	Foreign=Yes	12	goeswith	_	_
17	solverTestCase	solverTestCase	X	FW	Foreign=Yes	12	goeswith	_	SpaceAfter=No
18	.	.	PUNCT	.	_	9	punct	_	_

~~~


