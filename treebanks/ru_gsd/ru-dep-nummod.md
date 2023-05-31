---
layout: base
title:  'Statistics of nummod in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="ru-dep-nummod-gov.html">nummod:gov</a></tt>.

661 nodes (1%) are attached to their parents as `nummod`.

528 instances of `nummod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34039334341906.

The following 15 pairs of parts of speech are connected with `nummod`: <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (547; 83% instances), <tt><a href="ru-pos-SYM.html">SYM</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (35; 5% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (33; 5% instances), <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="ru-pos-NUM.html">NUM</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ru-pos-NUM.html">NUM</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="ru-pos-PRON.html">PRON</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Виновным	ВИНОВНЫЙ	ADJ	JJL	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	4	xcomp	_	_
2	себя	СЕБЯ	PRON	PRP	Case=Acc|Reflex=Yes	4	obj	_	_
3	не	НЕ	PART	NEG	Polarity=Neg	4	advmod	_	_
4	признал	ПРИЗНАТЬ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	приговорён	ПРИГОВОРИТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	1	parataxis	_	_
8	к	К	ADP	IN	_	10	case	_	_
9	пяти	ПЯТЬ	NUM	CD	Case=Dat|NumType=Card	10	nummod	_	_
10	годам	ГОД	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	7	obl	_	_
11	ссылки	ССЫЛКА	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Температура	ТЕМПЕРАТУРА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
2	ее	ЕЕ	DET	PRP$	Person=3	1	det	_	_
3	летом	ЛЕТО	NOUN	RB	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	5	obl	_	_
4	не	НЕ	PART	NEG	Polarity=Neg	5	advmod	_	_
5	превышает	ПРЕВЫШАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	+	+	SYM	SYM	_	7	punct	_	_
7	15	15	NUM	CD	Case=Gen|NumType=Card	8	nummod	_	_
8	°	°	SYM	SYM	_	5	obj	_	SpaceAfter=No
9	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	HD	HD	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	114762	114762	NUM	CD	Animacy=Inan|Case=Nom|Gender=Masc|NumType=Card	1	nummod	_	_
3	b	B	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	_
4	находится	НАХОДИТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
5	на	НА	ADP	IN	_	6	case	_	_
6	расстоянии	РАССТОЯНИЕ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	4	obl	_	_
7	132	132	NUM	CD	Animacy=Inan|Case=Gen|Gender=Masc|NumType=Card	9	nummod	_	_
8	световых	СВЕТОВОЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Number=Plur	9	amod	_	_
9	лет	ГОД	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	_
10	от	ОТ	ADP	IN	_	11	case	_	_
11	Солнца	СОЛНЦЕ	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	4	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


