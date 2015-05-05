---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

A nominal subject is a noun phrase which is the syntactic subject of a clause. 


~~~ sdparse
Rachaidh sí abhaile \n She will go home
nsubj(Rachaidh, sí)
~~~ 

In a copula construction, the `nsubj` is dependent on the predicate (in this case the noun _réitigh_ 'solution').

~~~ sdparse
Is réitigh sealadach iad \n They are temporary solutions
nsubj(réitigh, iad)
cop(réitigh, Is)
~~~

The head of an infinitive phrase can also be `nsubj' in a copula construction -- in Irish, the infinitive verb form is a verbal noun.

~~~ conllx
1	Ar	is	VERB	VERB	_	2	cop	_	_
2	mhaith	maith	ADJ	ADJ	_	0	root	_	_
3	leat	le	ADP	ADP	_	2	nmod:prep	_	_
4	teach	teach	NOUN	NOUN	_	6	dobj	_	_
5	a	a	PART	PART	_	6	mark	_	_
6	cheannach	ceannach	NOUN	NOUN	_	2	nsubj	_	_
7	.	.	PUNCT	PUNCT	_	2	punct	_	_
~~~
