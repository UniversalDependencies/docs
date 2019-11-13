---
layout: base
title:  'Statistics of goeswith in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `goeswith`

This relation is universal.

23 nodes (0%) are attached to their parents as `goeswith`.

23 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.47826086956522.

The following 13 pairs of parts of speech are connected with `goeswith`: <tt><a href="ru_gsd-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_gsd-pos-PART.html">PART</a></tt> (4; 17% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (4; 17% instances), <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (3; 13% instances), <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (2; 9% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-SYM.html">SYM</a></tt> (2; 9% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-PART.html">PART</a></tt> (1; 4% instances), <tt><a href="ru_gsd-pos-DET.html">DET</a></tt>-<tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (1; 4% instances), <tt><a href="ru_gsd-pos-PART.html">PART</a></tt>-<tt><a href="ru_gsd-pos-PART.html">PART</a></tt> (1; 4% instances), <tt><a href="ru_gsd-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_gsd-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Так	так	CCONJ	CC	_	3	cc	_	_
2	же	же	PART	UH	_	1	goeswith	_	_
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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 goeswith	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	Официальный	официальный	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	код	код	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	--	--	PUNCT	--	_	4	punct	_	_
4	13	13	NUM	CD	Case=Nom|NumType=Card	0	root	_	_
5	0	0	NUM	CD	Case=Nom|NumType=Card	4	goeswith	_	_
6	58091	58091	NUM	CD	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|NumType=Card	4	goeswith	_	SpaceAfter=No
7	.	.	PUNCT	.	_	4	punct	_	_

~~~


