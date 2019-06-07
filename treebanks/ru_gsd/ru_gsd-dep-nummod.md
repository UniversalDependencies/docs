---
layout: base
title:  'Statistics of nummod in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `nummod`

This relation is universal.
There are 2 language-specific subtypes of `nummod`: <tt><a href="ru_gsd-dep-nummod-entity.html">nummod:entity</a></tt>, <tt><a href="ru_gsd-dep-nummod-gov.html">nummod:gov</a></tt>.

556 nodes (1%) are attached to their parents as `nummod`.

514 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31474820143885.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (483; 87% instances), <tt><a href="ru_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (32; 6% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (10; 2% instances), <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Виновным	виновный	ADJ	JJL	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	4	xcomp	_	_
2	себя	себя	PRON	PRP	Case=Acc|Reflex=Yes	4	obj	_	_
3	не	не	PART	NEG	Polarity=Neg	4	advmod	_	_
4	признал	признать	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	приговорён	приговорить	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	1	parataxis	_	_
8	к	к	ADP	IN	_	10	case	_	_
9	пяти	пять	NUM	CD	Case=Dat|NumType=Card	10	nummod	_	_
10	годам	год	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	7	obl	_	_
11	ссылки	ссылка	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Выдерживает	выдерживать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	понижения	понижение	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	1	obj	_	_
3	температуры	температура	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	до	до	ADP	IN	_	7	case	_	_
5	−	−	SYM	SYM	_	7	dep	_	_
6	37	37	NUM	CD	Case=Gen|NumType=Card	7	nummod	_	_
7	°	°	SYM	SYM	_	1	obl	_	_
8	С	с	NOUN	SYM	_	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	140	140	NUM	CD	_	3	nummod	_	SpaceAfter=No
2	-	-	PUNCT	-	_	1	punct	_	SpaceAfter=No
3	мм	мм	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	6	amod	_	_
4	/	/	SYM	SYM	_	5	case	_	_
5	50	50	NUM	CD	Case=Acc|NumType=Card	3	nmod	_	_
6	орудие	орудие	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	12	nsubj	_	_
7	Тип	тип	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nmod	_	_
8	3	3	NUM	CD	Animacy=Inan|Case=Nom|NumType=Card	7	nummod:entity	_	_
9	--	--	PUNCT	--	_	12	punct	_	_
10	японское	японский	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	12	amod	_	_
11	морское	морской	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	12	amod	_	_
12	орудие	орудие	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
13	1920х	1920й	ADJ	ORD	Case=Gen|Degree=Pos|Number=Plur	16	amod	_	SpaceAfter=No
14	,	,	PUNCT	,	_	15	punct	_	_
15	1940х	1940й	ADJ	ORD	Case=Gen|Degree=Pos|Number=Plur	13	list	_	_
16	годов	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	12	nmod	_	SpaceAfter=No
17	.	.	PUNCT	.	_	12	punct	_	_

~~~


