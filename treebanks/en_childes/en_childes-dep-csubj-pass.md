---
layout: base
title:  'Statistics of csubj:pass in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_childes-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj:pass	color:blue
1	Being	be	AUX	VBG	_	2	aux:pass	2:aux:pass	_
2	stirred	stir	VERB	VBN	_	5	csubj:pass	5:csubj:pass	_
3	doesn	do	AUX	VBZ	_	5	aux	5:aux	_
4	't	not	PART	RB	_	5	advmod	5:advmod	_
5	make	make	VERB	VB	_	0	root	0:root	_
6	you	you	PRON	PRP	_	5	obj	5:obj|7:nsubj:xsubj|8:nsubj:xsubj|10:nsubj:xsubj	_
7	big	big	ADJ	JJ	_	5	xcomp	5:xcomp	_
8	strong	strong	ADJ	JJ	_	7	conj	5:xcomp|7:conj:and	_
9	and	and	CCONJ	CC	_	10	cc	10:cc	_
10	healthy	health	ADJ	JJ	_	7	conj	5:xcomp|7:conj:and	SpaceAfter=No
11	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


