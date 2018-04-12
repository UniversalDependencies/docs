---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

The `advcl` relation is used between an adverbial clause and the verb or other predicate it modifies.

~~~ conllu
# visual-style 12 4 advcl	color:blue
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white

1	ni	ní	SCONJ	_	_	4	mark	_	_
2	n	ń	PRON	_	_	4	nsubj	_	_
3	tè	tɛ	AUX	_	_	4	aux	_	_
4	se	sé	VERB	_	_	12	advcl	_	_
5	ka	kà	AUX	_	_	7	aux	_	_
6	a	à	PRON	_	_	7	obj	_	_
7	ci	cì	VERB	_	_	4	xcomp	_ _
8	,	,	PUNCT	_	_	4	punct	_	_
9	n	ń	PRON	_	_	12	nsubj	_	_
10	bè	bɛ	AUX	_	_	12	aux	_	_
11	a	à	PRON	_	_	12	obj	_	_
12	to	tó	VERB	_	_	0	root	_	_
13	yen	yèn	ADV	_	_	12	obl	_	_
14	.	.	PUNCT	_	_	12	punct	_	_

'If I can not break it, I leave it here'.
~~~
