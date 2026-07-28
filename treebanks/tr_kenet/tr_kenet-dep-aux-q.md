---
layout: base
title:  'Statistics of aux:q in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="tr_kenet-dep-aux.html">aux</a></tt>.

1 nodes (0%) are attached to their parents as `aux:q`.

1 instances of `aux:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux:q`: <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:q	color:blue
1	Gırtlak	gırtlak	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	veremi	verem	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	advcl	_	_
3	midir	mi	AUX	_	Evident=Fh|Number=Sing|Person=3|PronType=Int|Tense=Pres	2	aux:q	_	_
4	nedir	ne	X	_	Number=Sing	9	parataxis	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	çehresinde	çehre	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obl	_	_
7	damla	damla	NOUN	_	Case=Nom|Number=Sing	8	amod	_	_
8	kan	kan	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
9	yok	yok	ADV	_	Polarity=Neg	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


