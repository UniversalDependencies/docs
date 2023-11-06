---
layout: base
title:  'Statistics of flat:name in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_poetry-dep-flat-foreign.html">flat:foreign</a></tt>.

86 nodes (0%) are attached to their parents as `flat:name`.

86 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30232558139535.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt> (85; 99% instances), <tt><a href="ru_poetry-pos-PART.html">PART</a></tt>-<tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	IMPROMPTU	IMPROMPTU	X	_	Foreign=Yes	0	root	_	before=<p_class="h1"><se>
2	НА	на	ADP	_	_	3	case	_	_
3	СМЕРТЬ	смерть	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	1	nmod	_	_
4	И.	И.	PROPN	_	Abbr=Yes|NameType=Giv	3	nmod	_	_
5	П.	П.	PROPN	_	Abbr=Yes|NameType=Pat	4	flat:name	_	_
6	ПНИНА	Пнин	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	4	flat:name	_	</se></p>

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Но	но	CCONJ	_	_	9	cc	_	before=<se><line_meter="Я4ж"/>
2	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	как	как	SCONJ	_	_	5	case	_	_
5	узники	узник	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	2	acl	_	_
6	Ван	ван	PART	_	Foreign=Yes	5	nmod	_	_
7	Гога	Гог	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	6	flat:name	_	before=<rhyme-zone/>|SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	<br/>
9	Пробродим	пробродить	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	before=<line_meter="Я4м"/>
10	наши	наш	DET	_	Animacy=Inan|Case=Acc|Number=Plur|Poss=Yes|PronType=Prs	11	det	_	_
11	полчаса	полчаса	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	9	obj	_	before=<rhyme-zone/>|after=<br/>
12	Сосредоточенно	сосредоточенно	ADV	_	Degree=Pos	9	advmod	_	before=<line_meter="Я4ж"/>
13	и	и	CCONJ	_	_	14	cc	_	_
14	строго	строго	ADV	_	Degree=Pos	12	conj	_	before=<rhyme-zone/>|SpaceAfter=No
15	.	.	PUNCT	_	_	9	punct	_	</se></p>

~~~


