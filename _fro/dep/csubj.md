---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject (`csubj`) is a clausal syntactic subject of a clause, i.e., the subject is itself a clause. 
The governor of this relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb. The dependent is the main lexical verb or other predicate of the subject clause. 

~~~ conllu
# visual-style 10 7 csubj	color:blue
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
1	Ki	_	PRON	PROrel	_	7	nsubj	_	_
2	or	_	ADV	ADVgen	_	7	advmod	_	_
3	ne	_	ADV	ADVneg	_	7	advmod	_	_
4	voelt	_	VERB	VERcjg	_	7	aux	_	_
5	a	_	ADP	PRE	_	6	case	_	_
6	mei	_	PRON	PROper	_	7	iobj	_	_
7	venir	_	VERB	VERinf	_	10	csubj	_	_
8	s'	_	PRON	PROper	_	10	expl	_	_
9	en	_	ADV	PROadv	_	10	obl	_	_
10	alt	_	VERB	VERcjg	_	0	root	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:26 CEST 2020 -->
