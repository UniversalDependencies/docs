---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject (`nsubj`) is a nominal phrase which is the syntactic subject of a clause. (See [csubj]() for when the subject is clausal.)
When there is an empty argument in a grammatical subject position (expletive), it is labeled as `expl`.

~~~ conllu
# visual-style 7 6 nsubj	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	Messe	_	NOUN	NOMcom	_	7	obj	_	_
2	e	_	CCONJ	CONcoo	_	3	cc	_	_
3	matines	_	NOUN	NOMcom	_	1	conj	_	_
4	ad	_	VERB	VERcjg	_	7	aux	_	_
5	li	_	DET	DETdef	_	6	det	_	_
6	reis	_	NOUN	NOMcom	_	7	nsubj	_	_
7	escultet	_	VERB	VERppe	_	0	root	_	_

~~~


The governor of the nsubj relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb, which can be an adjective or noun, including a noun marked by a preposition, as in the examples below.

~~~ conllu
# visual-style 3 1 nsubj	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	Nicolete	_	PROPN	NOMpro	_	3	nsubj	_	_
2	est	_	VERB	VERcjg	_	3	cop	_	_
3	cointe	_	ADJ	ADJqua	_	0	root	_	_
4	et	_	CCONJ	CONcoo	_	5	cc	_	_
5	gaie	_	ADJ	ADJqua	_	3	conj	_	_

~~~


Note that in Old French, `nsubj` is not always expressed.

~~~ conllu
1	Mais	_	CCONJ	CONcoo	_	2	cc:nc	_	_
2	prendés	_	VERB	VERcjg	_	0	root	_	_
3	le	_	DET	DETdef	_	4	det	_	_
4	fille	_	NOUN	NOMcom	_	2	obj	_	_
5	a	_	ADP	PRE	_	7	case	_	_
6	un	_	DET	DETndf	_	7	det	_	_
7	roi	_	NOUN	NOMcom	_	4	nmod	_	_
8	u	_	CCONJ	CONcoo	_	11	cc	_	_
9	a	_	ADP	PRE	_	11	case	_	_
10	un	_	DET	DETndf	_	11	det	_	_
11	conte	_	NOUN	NOMcom	_	7	conj	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:31:57 CEST 2020 -->
