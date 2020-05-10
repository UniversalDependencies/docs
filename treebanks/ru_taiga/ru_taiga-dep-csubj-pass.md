---
layout: base
title:  'Statistics of csubj:pass in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj:pass	color:blue
1	В	в	ADP	_	_	2	case	_	_
2	С-Петербурге	С-Петербург	PROPN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	_	_
3	решено	решить	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	устроить	устроить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	3	csubj:pass	_	_
5	на	на	ADP	_	_	6	case	_	_
6	9	9	NUM	_	NumForm=Digit	4	obl	_	_
7	мая	май	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	flat	_	_
8	акцию	акция	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
9	с	с	ADP	_	_	10	case	_	_
10	привлечение	привлечение	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	8	nmod	_	_
11	трёх	три	NUM	_	Case=Gen	12	nummod	_	_
12	сотен	сотня	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	10	nmod	_	_
13	ветеранов	ветеран	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


