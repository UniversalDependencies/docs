---
layout: base
title:  'Statistics of nsubj:outer in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ru_poetry-dep-nsubj-pass.html">nsubj:pass</a></tt>.

1 nodes (0%) are attached to their parents as `nsubj:outer`.

1 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj:outer	color:blue
1	А	а	CCONJ	_	_	13	cc	_	before=<se><line_meter="Я3д"/>
2	то	то	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	13	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	8	punct	_	_
4	что	что	SCONJ	_	_	8	mark	_	_
5	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	8	nsubj:outer	_	_
6	не	не	PART	_	Polarity=Neg	8	advmod	_	_
7	в	в	ADP	_	_	8	case	_	_
8	форменке	форменка	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	2	acl	_	before=<rhyme-zone/>|after=<br/>
9	Московский	московский	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	before=<line_meter="Я3м"/>
10	новосел	новосел	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	before=<rhyme-zone/>|SpaceAfter=No
11	,	,	PUNCT	_	_	2	punct	_	_
12	--	--	PUNCT	_	_	13	punct	_	<br/>
13	Неважно	неважный	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	_	before=<line_meter="Я3д"/>|SpaceAfter=No
14	,	,	PUNCT	_	_	19	punct	_	_
15	только	только	PART	_	_	19	cc	_	_
16	форменно	форменно	ADV	_	Degree=Pos	19	advmod	_	before=<rhyme-zone/>|after=<br/>
17	Веселый	веселый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	19	obl:depict	_	before=<line_meter="Я3м"/>
18	будь	быть	AUX	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	19	cop	_	_
19	весел	веселый	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	13	conj	_	before=<rhyme-zone/>|SpaceAfter=No
20	.	.	PUNCT	_	_	13	punct	_	</se></p><p_class="date"><noindex>&lt;1923&gt;</noindex></p>

~~~


