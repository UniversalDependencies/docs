---
layout: base
title:  'Statistics of nummod in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="ru_poetry-dep-nummod-gov.html">nummod:gov</a></tt>.

35 nodes (0%) are attached to their parents as `nummod`.

31 instances of `nummod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37142857142857.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (32; 91% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	«	«	PUNCT	_	_	6	punct	_	before=<p_class="H1"><se>|SpaceAfter=No
2	Две	два	NUM	_	Case=Nom|Gender=Fem|NumForm=Word|NumType=Card	3	nummod:gov	_	_
3	ноги	нога	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	nsubj	_	_
4	на	на	ADP	_	_	6	case	_	_
5	трёх	три	NUM	_	Case=Loc|NumForm=Word|NumType=Card	6	nummod	_	_
6	ногах	нога	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
7	...	...	PUNCT	_	_	6	punct	_	SpaceAfter=No
8	»	»	PUNCT	_	_	6	punct	_	</se></p>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Милльоном	миллион	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Typo=Yes	2	nummod	_	before=<p_class="verse"><line_meter="Я5ж"/><se>
2	рук	рука	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	7	nmod	_	_
3	--	--	PUNCT	_	_	5	punct	_	_
4	и	и	CCONJ	_	_	5	cc	_	_
5	мусором	мусор	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	1	conj	_	_
6	развалин	развалины	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	before=<rhyme-zone/>|after=<br/>
7	Постройка	постройка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	before=<line_meter="Я2м"/>
8	дня	день	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	before=<rhyme-zone/>
9	--	--	PUNCT	_	_	10	punct	_	<br/>
10	Враз	враз	ADV	_	Degree=Pos	7	parataxis	_	before=<line_meter="Я5ж"/>
11	--	--	PUNCT	_	_	12	punct	_	_
12	взмах	взмах	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	parataxis	_	SpaceAfter=No
13	!	!	PUNCT	_	_	7	punct	_	</se>

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Сегодня	сегодня	ADV	_	Degree=Pos	2	advmod	_	before=<se><line_meter="Я5м"/>
2	снится	сниться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
3	нам	мы	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	2	iobj	_	_
4	обоим	оба	NUM	_	Case=Dat|Gender=Masc|NumForm=Word|NumType=Sets	3	nummod	_	_
5	ширь	ширь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	before=<rhyme-zone/>|after=<br/>
6	Лазури	лазурь	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	before=<line_meter="Я5ж"/>
7	и	и	CCONJ	_	_	9	cc	_	_
8	зеленая	зеленый	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	аллея	аллея	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	conj	_	before=<rhyme-zone/>|SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	</se><br/>

~~~


