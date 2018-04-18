---
layout: base
title:  'Statistics of nummod in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nummod`

This relation is universal.
There are 2 language-specific subtypes of `nummod`: <tt><a href="ru_taiga-dep-nummod-entity.html">nummod:entity</a></tt>, <tt><a href="ru_taiga-dep-nummod-gov.html">nummod:gov</a></tt>.

120 nodes (1%) are attached to their parents as `nummod`.

116 instances of `nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.275.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (114; 95% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nummod	color:blue
1	Это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	_
2	памятник	памятник	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
3	82	82	NUM	_	_	5	nummod	_	_
4	уничтоженным	уничтожить	VERB	_	Aspect=Perf|Case=Dat|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	5	amod	_	_
5	детям	ребенок	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	2	nmod	_	_
6	(	(	PUNCT	_	_	9	punct	_	SpaceAfter=No
7	в	в	ADP	_	_	9	case	_	_
8	натуральную	натуральный	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	величину	величина	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
10	.)	.)	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nummod	color:blue
1	Поголовье	поголовье	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	22	nsubj	_	_
2	коров	корова	NOUN	_	Animacy=Anim|Case=Gen|Gender=Fem|Number=Plur	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	после	после	ADP	_	_	5	case	_	_
5	сокращения	сокращение	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	22	obl	_	_
6	в	в	ADP	_	_	8	case	_	_
7	два	два	NUM	_	Animacy=Inan|Case=Acc|Gender=Masc	8	nummod:gov	_	_
8	раза	раз	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	13	punct	_	_
10	с	с	ADP	_	_	13	case	_	_
11	20	20	NUM	_	_	12	compound	_	_
12	млн.	миллион	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	13	nummod	_	_
13	голов	голова	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	18	punct	_	_
15	до	до	ADP	_	_	18	case	_	_
16	8	8	NUM	_	_	17	compound	_	_
17	млн.	миллион	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	18	nummod	_	_
18	голов	голова	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	SpaceAfter=No
19	,	,	PUNCT	_	_	5	punct	_	_
20	практически	практически	ADV	_	Degree=Pos	21	advmod	_	_
21	не	не	PART	_	Polarity=Neg	22	advmod	_	_
22	прирастает	прирастать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
23	.	.	PUNCT	_	_	22	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nummod	color:blue
1	RT	rt	NOUN	_	Foreign=Yes	0	root	_	_
2	@xxxxxx	@xxxxxx	X	_	_	1	flat:foreign	_	SpaceAfter=No
3	:	:	PUNCT	_	_	8	punct	_	_
4	Потому	потому	ADV	_	Degree=Pos	8	mark	_	_
5	что	что	SCONJ	_	_	4	fixed	_	_
6	протесты	протест	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	9	obj	_	_
7	не	не	PART	_	Polarity=Neg	8	advmod	_	_
8	может	мочь	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
9	организовать	организовать	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	8	xcomp	_	_
10	в	в	ADP	_	_	11	case	_	_
11	принципе	принцип	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	8	obl	_	_
12	-	-	PUNCT	_	_	18	punct	_	_
13	на	на	ADP	_	_	15	case	_	_
14	2	2	NUM	_	_	15	nummod	_	SpaceAfter=No
15	%	%	SYM	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	18	obl	_	_
16	далеко	далеко	ADV	_	Degree=Pos	18	advmod	_	_
17	не	не	PART	_	Polarity=Neg	18	advmod	_	_
18	уедешь	уехать	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	8	parataxis	_	SpaceAfter=No
19	...	...	PUNCT	_	_	1	punct	_	_

~~~


