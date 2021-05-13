---
layout: base
title:  'Statistics of aux:q in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-aux.html">aux</a></tt>.

1 nodes (0%) are attached to their parents as `aux:q`.

1 instances of `aux:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `aux:q`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 aux:q	color:blue
1	Dünyanın	dünya	NOUN	NN	Case=Gen|Number=Sing	3	nmod:poss	_	_
2	en	en	ADV	RB	_	3	advmod	_	_
3	iyisi	iyi	NOUN	NN	Number=Sing	7	acl	_	_
4	olmaya	ol	AUX	VN	Aspect=Perf|Case=Dat|Mood=Ind|Tense=Pres|VerbForm=Vnoun	3	cop	_	_
5	ilişkin	ilişkin	ADP	IN	_	3	case	_	_
6	kutsal	kutsal	ADJ	JJ	Number=Sing	7	amod	_	_
7	hakları	hak	NOUN	NN	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	_
8	artık	artık	ADV	RB	_	9	advmod	_	_
9	garanti	garanti	NOUN	NN	Number=Sing	0	root	_	_
10	değil	değil	AUX	NOMP	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	9	aux	_	_
11	miydi	mi	AUX	AUX	Number=Sing|Person=3|Tense=Past	9	aux:q	_	SpaceAfter=No
12	?	?	PUNCT	.	_	9	punct	_	_

~~~


