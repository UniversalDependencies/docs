---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

The `cop` relation is used exclusively for the word 係 / _hai6_ "be" primarily as a copula linked to the main predicate, which may often be a noun or adjective. 

~~~ conllu
# visual-style 4 2 cop	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	佢	_	PRON	_	_	4	nsubj	_	3SG
2	係	_	VERB	_	_	4	cop	_	be
3	我	_	PRON	_	_	4	nmod	_	1SG
4	男朋友	_	NOUN	_	_	0	root	_	boyfriend

1	"He	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	my	_	_	_	_	0	_	_	_
4	boyfriend."	_	_	_	_	0	_	_	_

~~~

If the complement of the copular verb is a clause, however, then the copular verb should be the head of the sentence with the clausal complement as a `ccomp` dependent.

~~~ conllu
1	原因	_	NOUN	_	_	2	nsubj	_	reason
2	係	_	VERB	_	_	0	root	_	be
3	佢	_	PRON	_	_	5	nsubj	_	3SG
4	冇	_	AUX	_	_	5	aux	_	NEG.PERF
5	嚟	_	VERB	_	_	2	ccomp	_	come

1	"The	_	_	_	_	0	_	_	_
2	reason	_	_	_	_	0	_	_	_
3	is	_	_	_	_	0	_	_	_
4	he	_	_	_	_	0	_	_	_
5	didn't	_	_	_	_	0	_	_	_
6	come."	_	_	_	_	0	_	_	_

~~~

For the cleft-like focus constructions with 係 and 係...(嚟)嘅, see [ccomp]().
<!-- Interlanguage links updated Út zář 29 20:23:26 CEST 2020 -->
