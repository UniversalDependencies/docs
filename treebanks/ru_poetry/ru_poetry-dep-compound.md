---
layout: base
title:  'Statistics of compound in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `compound`

This relation is universal.

3 nodes (0%) are attached to their parents as `compound`.

3 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (2; 67% instances), <tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Дали	дать	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	before=<se><line_meter="Х4ж"/>
2	восемьдесят	восемьдесят	NUM	_	Case=Acc|NumForm=Word|NumType=Card	3	compound	_	_
3	пятый	пятый	ADJ	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	1	obj	_	before=<rhyme-zone/>|after=<br/>
4	В	в	ADP	_	_	5	case	_	before=<line_meter="Х4м"/>
5	воздаяние	воздаяние	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	1	obl	_	_
6	заслуг	заслуга	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	before=<rhyme-zone/>|SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Сто	сто	NUM	_	Case=Nom|NumForm=Word|NumType=Card	2	compound	_	before=<se><line_meter="Я6ж"/>
2	двадцать	двадцать	NUM	_	Case=Nom|NumForm=Word|NumType=Card	5	nsubj	_	_
3	--	--	PUNCT	_	_	5	punct	_	_
4	в	в	ADP	_	_	5	case	_	_
5	рудники	рудник	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	на	на	ADP	_	_	9	case	_	_
8	каторжную	каторжный	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	муку	мука	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	conj	_	before=<rhyme-zone/>|SpaceAfter=No
10	!	!	PUNCT	_	_	5	punct	_	</se></p>

~~~


