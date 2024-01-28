---
layout: base
title:  'Statistics of nummod in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="ru_poetry-dep-nummod-gov.html">nummod:gov</a></tt>.

34 nodes (0%) are attached to their parents as `nummod`.

30 instances of `nummod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38235294117647.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (32; 94% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 3% instances).


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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Двух	два	NUM	_	Animacy=Anim|Case=Acc|Gender=Masc|NumForm=Word|NumType=Card	2	nummod	_	before=<p_class="verse"><line_meter="Я6ж"/><se>
2	Александров	Александр	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Plur	5	obj	_	_
3	нам	мы	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	5	iobj	_	_
4	история	история	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
5	являет	являть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	before=<rhyme-zone/>|SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	<br/>
7	Которых	который	DET	_	Animacy=Anim|Case=Acc|Number=Plur|PronType=Rel	8	det	_	before=<line_meter="Я6ж"/>
8	подвиги	подвиг	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	10	obj	_	_
9	различно	различно	ADV	_	Degree=Pos	10	advmod	_	_
10	величает	величать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl	_	before=<rhyme-zone/>|SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	</se><br/>

~~~


