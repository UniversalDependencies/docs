---
layout: base
title:  'Statistics of goeswith in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `goeswith`

This relation is universal.

12 nodes (0%) are attached to their parents as `goeswith`.

12 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 8 pairs of parts of speech are connected with `goeswith`: <tt><a href="ru_gsd-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (4; 33% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (2; 17% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (1; 8% instances), <tt><a href="ru_gsd-pos-DET.html">DET</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (1; 8% instances), <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (1; 8% instances), <tt><a href="ru_gsd-pos-PART.html">PART</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (1; 8% instances), <tt><a href="ru_gsd-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (1; 8% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Так	также	CCONJ	CC	Typo=Yes	3	cc	_	_
2	же	_	X	UH	_	1	goeswith	_	_
3	существуют	существовать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	специальные	специальный	ADJ	JJL	Case=Nom|Degree=Pos|Number=Plur	5	amod	_	_
5	программы	программа	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	,	_	7	punct	_	_
7	созданные	создать	VERB	VBNL	Animacy=Inan|Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	5	acl	_	_
8	для	для	ADP	IN	_	9	case	_	_
9	запутывания	запутывание	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	obl	_	_
10	кода	код	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
11	,	,	PUNCT	,	_	5	punct	_	_
12	обфускаторы	обфускатор	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	appos	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	``	``	PUNCT	``	_	2	punct	_	SpaceAfter=No
2	Агентура.	агентура.	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Typo=Yes	5	nsubj	_	_
3	ru	_	X	FW	_	2	goeswith	_	SpaceAfter=No
4	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	2	punct	_	_
5	ведет	вести	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	совместные	совместный	ADJ	JJL	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	7	amod	_	_
7	проекты	проект	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	5	obj	_	_
8	с	с	ADP	IN	_	12	case	_	_
9	российскими	российский	ADJ	JJL	Case=Ins|Degree=Pos|Number=Plur	12	amod	_	_
10	и	и	CCONJ	CC	_	11	cc	_	_
11	зарубежными	зарубежный	ADJ	JJL	Case=Ins|Degree=Pos|Number=Plur	9	conj	_	_
12	изданиями	издание	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Plur	7	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 goeswith	color:blue
1	SS	SS	X	FW	Foreign=Yes	3	nsubj	_	_
2	Heminge	Heminge	X	FW	Foreign=Yes	1	flat:foreign	_	_
3	являлся	являться	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
4	частью	часть	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	3	xcomp	_	_
5	конвоя	конвой	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	,	_	9	punct	_	_
7	так	также	ADV	RB	Degree=Pos|Typo=Yes	9	advmod	_	_
8	же	_	X	UH	_	7	goeswith	_	_
9	направлявшегося	направляться	VERB	VBNL	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	5	acl	_	_
10	из	из	ADP	IN	_	11	case	_	_
11	Ливерпуля	Ливерпуль	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	obl	_	_
12	в	в	ADP	IN	_	14	case	_	_
13	Северную	северный	ADJ	JJL	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	_
14	Америку	Америка	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	obl	_	SpaceAfter=No
15	.	.	PUNCT	.	_	3	punct	_	_

~~~


