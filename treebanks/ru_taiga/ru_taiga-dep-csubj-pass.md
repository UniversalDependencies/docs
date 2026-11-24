---
layout: base
title:  'Statistics of csubj:pass in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ru_taiga-dep-csubj-outer.html">csubj:outer</a></tt>.

46 nodes (0%) are attached to their parents as `csubj:pass`.

31 instances of `csubj:pass` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.39130434782609.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (46; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj:pass	color:blue
1	Лица	лицо	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	obj	_	_
2	ее	ее	DET	_	Poss=Yes|PronType=Prs	1	det	_	_
3	увидеть	увидеть	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	5	csubj:pass	_	feat="Transit=Tran"|_
4	не	не	PART	_	Polarity=Neg	5	advmod	_	_
5	дано	дать	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	feat="Transit=Tran"|after='<br/>\n'
6	Ни	ни	CCONJ	_	Polarity=Neg	7	cc	_	_
7	людям	человек	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	5	iobj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	ни	ни	CCONJ	_	Polarity=Neg	10	cc	_	_
10	богам	бог	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	7	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


