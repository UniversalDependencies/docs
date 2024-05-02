---
layout: base
title:  'Statistics of dislocated in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `dislocated`

This relation is universal.

18 nodes (0%) are attached to their parents as `dislocated`.

18 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.94444444444444.

The following 6 pairs of parts of speech are connected with `dislocated`: <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (12; 67% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-SCONJ.html">SCONJ</a></tt> (1; 6% instances), <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dislocated	color:blue
1	А	а	CCONJ	_	_	7	cc	_	before=<se><line_meter="Я4м"/>
2	странный	странный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	странник	странник	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	dislocated	_	_
4	--	--	PUNCT	_	_	3	punct	_	_
5	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
6	при	при	ADP	_	_	7	case	_	_
7	чем	что	PRON	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|PronType=Int	0	root	_	before=<rhyme-zone/>|SpaceAfter=No
8	?	?	PUNCT	_	_	7	punct	_	</se>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 dislocated	color:blue
1	Дар	дар	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	dislocated	_	before=<p_class="verse"><line_meter="Х4ж"/><se>
2	прекрасный	прекрасный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	дар	дар	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	conj	_	_
5	широкий	широкий	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	before=<rhyme-zone/>
6	--	--	PUNCT	_	_	1	punct	_	<br/>
7	Крепостные	крепостной	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	9	nsubj:pass	_	before=<line_meter="Х4м"/>
8	мне	я	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	9	iobj	_	_
9	даны	дать	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	before=<rhyme-zone/>|SpaceAfter=No
10	!	!	PUNCT	_	_	9	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated	color:blue
1	Что	что	SCONJ	_	_	4	dislocated	_	before=<p_class="verse"><line_meter="Ан3ж"/><se>
2	она	она	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
3	--	--	PUNCT	_	_	4	punct	_	_
4	весела	веселый	ADJ	_	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	0	root	_	_
5	иль	иль	CCONJ	_	_	6	cc	_	_
6	уныла	унылый	ADJ	_	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	4	conj	_	before=<rhyme-zone/>|SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	<br/>
8	Иль	иль	CCONJ	_	_	11	cc	_	before=<line_meter="Ан3ж"/>
9	меня	я	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	11	obj	_	_
10	равнодушно	равнодушно	ADV	_	Degree=Pos	11	advmod	_	_
11	забыла	забыть	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	before=<rhyme-zone/>|SpaceAfter=No
12	?..	?..	PUNCT	_	_	4	punct	_	</se></p><p_class="date"><noindex>&lt;1844&gt;</noindex></p>

~~~


