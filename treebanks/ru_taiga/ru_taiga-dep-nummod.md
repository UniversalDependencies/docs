---
layout: base
title:  'Statistics of nummod in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nummod`

This relation is universal.
There are 2 language-specific subtypes of `nummod`: <tt><a href="ru_taiga-dep-nummod-entity.html">nummod:entity</a></tt>, <tt><a href="ru_taiga-dep-nummod-gov.html">nummod:gov</a></tt>.

211 nodes (0%) are attached to their parents as `nummod`.

206 instances of `nummod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29383886255924.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (192; 91% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (12; 6% instances), <tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Этому	этот	DET	_	Case=Dat|Gender=Masc|Number=Sing	2	det	_	_
2	моторчику	моторчик	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	5	iobj	_	_
3	сегодня	сегодня	ADV	_	Degree=Pos	5	advmod	_	_
4	1	1	NUM	_	NumForm=Digit	5	nummod	_	_
5	год	год	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	и	и	CCONJ	_	_	8	cc	_	_
7	6	6	NUM	_	NumForm=Digit	8	nummod:gov	_	_
8	месяцев	месяц	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	conj	_	SpaceAfter=No
9	🥰	🥰	SYM	_	_	5	discourse	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	В	в	ADP	_	_	2	case	_	_
2	Кизляре	Кизляр	PROPN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	_	_
3	преступники	преступник	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
4	захватили	захватить	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	в	в	ADP	_	_	6	case	_	_
6	заложники	заложник	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	obl	_	_
7	более	более	ADV	_	Degree=Cmp	9	advmod	_	_
8	трех	три	NUM	_	Case=Gen	9	nummod	_	_
9	тысяч	тысяча	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	10	nummod	_	_
10	человек	человек	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	4	obj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nummod	color:blue
1	RT	rt	NOUN	_	Foreign=Yes	0	root	_	_
2	@xxxxxx	@xxxxxx	PROPN	_	_	1	flat:foreign	_	SpaceAfter=No
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
14	2	2	NUM	_	NumForm=Digit	15	nummod	_	SpaceAfter=No
15	%	%	SYM	_	_	18	obl	_	_
16	далеко	далеко	ADV	_	Degree=Pos	18	advmod	_	_
17	не	не	PART	_	Polarity=Neg	18	advmod	_	_
18	уедешь	уехать	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	8	parataxis	_	SpaceAfter=No
19	...	...	PUNCT	_	_	1	punct	_	_

~~~


