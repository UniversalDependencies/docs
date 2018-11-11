---
layout: base
title:  'Statistics of aux:pass in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-aux.html">aux</a></tt>.

129 nodes (1%) are attached to their parents as `aux:pass`.

129 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13953488372093.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (129; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
1	Зимняя	зимний	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Long	2	amod	_	Proper=True
2	Универсиада	универсиада	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
3	2019	2019	NUM	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	4	amod	_	Proper=True
4	года	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	будет	быть	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut	6	aux:pass	_	_
6	проводиться	проводиться	VERB	VB	Aspect=Imp	0	root	_	_
7	в	в	ADP	IN	_	8	case	_	_
8	Красноярске	Красноярск	PROPN	NNP	Animacy=Inan|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


