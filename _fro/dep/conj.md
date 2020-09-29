---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A `conj` is the relation between two elements connected by a coordinating conjunction.
The head of the relation is the first conjunct and all the other conjuncts depend on it via the conj relation.

~~~ conllu
# visual-style 5 7 conj	color:blue
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	car	_	CCONJ	CONcoo	_	3	cc:nc	_	_
2	ilec	_	ADV	ADVgen	_	3	advmod	_	_
3	avré	_	VERB	VERcjg	_	0	root	_	_
4	je	_	PRON	PROper	_	3	nsubj	_	_
5	armes	_	NOUN	NOMcom	_	3	obj	_	_
6	et	_	CCONJ	CONcoo	_	7	cc	_	_
7	cheval	_	NOUN	NOMcom	_	5	conj	_	_

~~~

<!-- Interlanguage links updated Út zář 29 20:31:47 CEST 2020 -->
