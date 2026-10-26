---
layout: base
title:  'Statistics of aux:pass in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="eo_cairo-dep-aux.html">aux</a></tt>.

2 nodes (1%) are attached to their parents as `aux:pass`.

2 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-AUX.html">AUX</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	Nek	nek	CCONJ	_	_	2	cc	_	_
2	Peter	Peter	PROPN	_	_	7	nsubj:pass	_	_
3	Smith	Smith	PROPN	_	_	2	appos	_	_
4	nek	nek	CCONJ	_	_	5	cc	_	_
5	Mary	Mary	PROPN	_	_	2	conj	_	_
6	Brown	Brown	PROPN	_	_	5	appos	_	_
7	povus	povi	VERB	_	Mood=Sub|VerbForm=Fin	0	root	_	_
8	esti	esti	AUX	_	VerbForm=Inf	9	aux:pass	_	_
9	elektitaj	elekti	VERB	_	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


