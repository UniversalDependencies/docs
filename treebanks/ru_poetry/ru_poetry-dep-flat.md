---
layout: base
title:  'Statistics of flat in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="ru_poetry-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="ru_poetry-dep-flat-name.html">flat:name</a></tt>.

17 nodes (0%) are attached to their parents as `flat`.

17 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17647058823529.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (6; 35% instances), <tt><a href="ru_poetry-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_poetry-pos-SYM.html">SYM</a></tt> (6; 35% instances), <tt><a href="ru_poetry-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (4; 24% instances), <tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	19	19	ADJ	_	NumForm=Digit|NumType=Ord	0	root	_	before=<p_class="H1"><se>
2	ОКТЯБРЯ	октябрь	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	flat	_	_
3	1825	1825	ADJ	_	NumForm=Digit|NumType=Ord	1	nmod	_	</se></p>

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	*	*	SYM	_	_	0	root	_	before=<p><se>
2	*	*	SYM	_	_	1	flat	_	_
3	*	*	SYM	_	_	1	flat	_	after=</se></p>

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Эх	эх	INTJ	_	_	0	root	_	before=<p_class="verse"><line_meter="Х5ж"/><se>
2	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	родина	родина	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	vocative	_	_
5	моя	мой	DET	_	Case=Nom|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	4	det	_	_
6	Советов	совет	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	nmod	_	before=<rhyme-zone/>|SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	<br/>
8	Мать	мать	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	4	appos	_	before=<line_meter="Х5м"/>
9	моя	мой	DET	_	Case=Nom|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	_
10	--	--	PUNCT	_	_	12	punct	_	_
11	родимая	родимый	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	_
12	страна	страна	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	8	appos	_	before=<rhyme-zone/>|SpaceAfter=No
13	.	.	PUNCT	_	_	1	punct	_	</se><br/>

~~~


