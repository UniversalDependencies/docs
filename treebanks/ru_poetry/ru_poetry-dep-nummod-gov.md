---
layout: base
title:  'Statistics of nummod:gov in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-nummod.html">nummod</a></tt>.

111 nodes (0%) are attached to their parents as `nummod:gov`.

101 instances of `nummod:gov` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36036036036036.

The following 6 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (104; 94% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ru_poetry-pos-DET.html">DET</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod:gov	color:blue
1	Надпись	надпись	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	before=<p_class="h1"><se>
2	к	к	ADP	_	_	3	case	_	_
3	картине	картина	NOUN	_	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
4	(	(	PUNCT	_	_	6	punct	_	SpaceAfter=No
5	Ангел	ангел	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
6	спасает	спасать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
7	две	два	NUM	_	Animacy=Inan|Case=Acc|Gender=Fem|NumForm=Word|NumType=Card	8	nummod:gov	_	_
8	души	душа	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	obj	_	_
9	от	от	ADP	_	_	10	case	_	_
10	сатаны	сатана	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
11	)	)	PUNCT	_	_	6	punct	_	</se></p>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod:gov	color:blue
1	Пятеро	пятеро	NUM	_	Case=Nom|NumForm=Word|NumType=Sets	3	nummod:gov	_	before=<se><line_meter="Х3ж"/>
2	убитых	убить	VERB	_	Aspect=Perf|Case=Gen|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	3	amod	_	before=<rhyme-zone/>|after=<br/>
3	Сытых	сытый	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	before=<line_meter="Х1ж"/><rhyme-zone/>|SpaceAfter=No
4	!	!	PUNCT	_	_	3	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod:gov	color:blue
1	Где-то	где-то	ADV	_	Degree=Pos|PronType=Ind	2	advmod	_	before=<p_class="verse"><line_meter="Дк3ж 0*1*2*1"/><se>
2	были	быть	VERB	_	Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	печали	печаль	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	before=<rhyme-zone/>|SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	<br/>
5	Слезы	слеза	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubj	_	before=<line_meter="Дк3м 0*1*2*0"/>
6	ели	есть	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	_
7	глаза	глаз	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	6	obj	_	before=<rhyme-zone/>|SpaceAfter=No
8	;	;	PUNCT	_	_	11	punct	_	<br/>
9	Где-то	где-то	ADV	_	Degree=Pos|PronType=Ind	11	advmod	_	before=<line_meter="Дк3ж 0*1*2*1"/>
10	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	_
11	умирали	умирать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	before=<rhyme-zone/>|after=<br/>
12	Тысячу	тысяча	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	13	nummod:gov	_	before=<line_meter="Дк3м 0*2*1*0"/>
13	лет	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	11	obl:tmod	_	_
14	назад	назад	ADV	_	Degree=Pos	13	advmod	_	before=<rhyme-zone/>|SpaceAfter=No
15	.	.	PUNCT	_	_	2	punct	_	</se></p>

~~~


