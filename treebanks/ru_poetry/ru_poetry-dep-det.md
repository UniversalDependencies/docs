---
layout: base
title:  'Statistics of det in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `det`

This relation is universal.

1541 nodes (2%) are attached to their parents as `det`.

1146 instances of `det` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34458144062297.

The following 11 pairs of parts of speech are connected with `det`: <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (1407; 91% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (49; 3% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (44; 3% instances), <tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (16; 1% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (10; 1% instances), <tt><a href="ru_poetry-pos-DET.html">DET</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ru_poetry-pos-X.html">X</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Просмотреть	просмотреть	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	6	csubj	_	before=<p_class="verse"><line_meter="Х4ж"/><se>
2	такую	такой	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	скуку	скука	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	1	obj	_	before=<rhyme-zone/>
4	--	--	PUNCT	_	_	6	punct	_	<br/>
5	Не	не	PART	_	Polarity=Neg	6	advmod	_	before=<line_meter="Х4м"/>
6	последняя	последний	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
7	из	из	ADP	_	_	8	case	_	_
8	мук	мука	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	6	nmod	_	before=<rhyme-zone/>|SpaceAfter=No
9	...	...	PUNCT	_	_	6	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Гой	гой	INTJ	_	_	0	root	_	before=<p_class="verse"><line_meter="Х3ж"/><se>
2	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	1	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	ветер	ветер	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	vocative	_	_
5	буйный	буйный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	before=<rhyme-zone/>|SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	<br/>
7	Мой	мой	DET	_	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	before=<line_meter="Х3ж"/>
8	могучий	могучий	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	вольный	вольный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	conj	_	before=<rhyme-zone/>|SpaceAfter=No
11	!	!	PUNCT	_	_	1	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 det	color:blue
1	Много	много	NUM	_	Case=Nom|NumForm=Word|NumType=Card	0	root	_	before=<se><line_meter="Х4м"/>
2	нас	мы	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	1	nsubj	_	_
3	--	--	PUNCT	_	_	4	punct	_	_
4	таких	такой	DET	_	Case=Gen|Number=Plur|PronType=Dem	2	det	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	как	как	SCONJ	_	_	7	case	_	_
7	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	obl	_	before=<rhyme-zone/>|SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	</se><br/>

~~~


