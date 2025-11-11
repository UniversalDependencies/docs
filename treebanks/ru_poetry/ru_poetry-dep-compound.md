---
layout: base
title:  'Statistics of compound in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `compound`

This relation is universal.

4 nodes (0%) are attached to their parents as `compound`.

4 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (2; 50% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 25% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	before=<se><line_meter="Я4ж"/>
2	распустила	распустить	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	чудо	чудо	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	4	compound	_	_
4	косы	коса	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	obj	_	before=<rhyme-zone/>|after=<br/>
5	И	и	CCONJ	_	_	8	cc	_	before=<line_meter="Я4м"/>
6	взглядом	взгляд	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	8	iobj	_	_
7	ласковым	ласковый	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
8	ушла	уйти	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	before=<rhyme-zone/>|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	<br/>
10	Туда	туда	ADV	_	Degree=Pos|PronType=Dem	8	advmod	_	before=<line_meter="Я4ж"/>|SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	где	где	ADV	_	Degree=Pos|PronType=Rel	13	advmod	_	_
13	плачет	плакать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	acl:relcl	_	_
14	мальчик	мальчик	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
15	босый	босой	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	before=<rhyme-zone/>|after=<br/>
16	У	у	ADP	_	_	18	case	_	before=<line_meter="Я4м"/>
17	мелководного	мелководный	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	18	amod	_	_
18	русла	русло	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	13	obl	_	before=<rhyme-zone/>|SpaceAfter=No
19	.	.	PUNCT	_	_	2	punct	_	</se><br/>

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


