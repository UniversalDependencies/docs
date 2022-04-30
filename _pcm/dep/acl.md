---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

The `acl` relation is used for clauses that modify a noun or an adjective. Adjectives can also have clausal complements with their own subject, in that case we use the [ccomp]() relation instead.

~~~ conllu
# visual-style 8 10 acl	color:blue
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	I	I	PRON	PRON	_	2	nsubj	_	_
2	happy	happy	ADJ	ADJ	_	0	root	_	_
3	sey	that	SCONJ	SCONJ	_	5	mark	_	_
4	una	you	PRON	PRON	_	5	nsubj	_	_
5	give	give	VERB	VERB	_	2	advcl	_	_
6	me	I	PRON	PRON	_	5	iobj	_	_
7	dis	this	DET	DET	_	8	det	_	_
8	opportunity	opportunity	NOUN	NOUN	_	5	obj	_	_
9	to	to	PART	ADP	_	10	mark	_	_
10	talk	talk	VERB	VERB	_	8	acl	_	_

1	I	_	_	_	_	0	_	_	_
2	happy	_	_	_	_	0	_	_	_
3	that	_	_	_	_	0	_	_	_
4	you	_	_	_	_	0	_	_	_
5	give	_	_	_	_	0	_	_	_
6	me	_	_	_	_	0	_	_	_
7	this	_	_	_	_	0	_	_	_
8	opportunity	_	_	_	_	0	_	_	_
9	to	_	_	_	_	0	_	_	_
10	talk	_	_	_	_	0	_	_	_

1	I	_	_	_	_	0	_	_	_
2	am	_	_	_	_	0	_	_	_
3	happy	_	_	_	_	0	_	_	_
4	that	_	_	_	_	0	_	_	_
5	you	_	_	_	_	0	_	_	_
6	all	_	_	_	_	0	_	_	_
7	have	_	_	_	_	0	_	_	_
8	given	_	_	_	_	0	_	_	_
9	me	_	_	_	_	0	_	_	_
10	this	_	_	_	_	0	_	_	_
11	opportunity	_	_	_	_	0	_	_	_
12	to	_	_	_	_	0	_	_	_
13	talk	_	_	_	_	0	_	_	_
~~~ 


See [acl:cleft]() for clefted modifiers and [acl:relcl]() for relative clauses.

<!-- Interlanguage links updated St lis 3 20:58:33 CET 2021 -->
