---
layout: relation
title: 'name'
shortdef: 'name'
---

The `name` relation is used with compounding proper nouns, typically for
names of people, places, organisations and so on.

In Irish, this not only includes surnames, but also surname particles such as Mac, Mc, Ó, de, Uí, Ní etc.


~~~ sdparse
Is mian linn ár mbuíochas a chur in iúl go háirithe do Sheán Ó Gallchóir \n We want to express our thanks in particular to John Gallagher
nparticle(Sheán,Ó)
nparticle(Sheán,Gallchóir)
~~~ 

~~~ conllx

1	Is	is	VERB	VERB	_	2	cop	_	_
2	mian	mian	NOUN	NOUN	_	0	root	_	_
3	linn	le	ADP	ADP	_	2	nmod:prep	_	_
4	ár	ár	DET	DET	_	5	nmod:poss	_	_
5	mbuíochas	buíochas	NOUN	NOUN	_	7	dobj	_	_
6	a	a	PART	PART	_	7	mark	_	_
7	chur	cur	NOUN	NOUN	_	2	nsubj	_	_
8	in	i	ADP	ADP	_	9	case	_	_
9	iúl	iúl	NOUN	NOUN	_	7	nmod	_	_
10	go	go	PART	PART	_	11	mark:prt	_	_
11	háirithe	áirithe	ADJ	ADJ	_	7	advmod	_	_
12	do	do	ADP	ADP	_	13	case	_	_
13	Sheán	Seán	PROPN	PROPN	_	7	nmod	_	_
14	Ó	ó	PART	PART	_	13	name	_	_
15	Gallchóir	Gallchóir	PROPN	PROPN	_	13	name	_	_

~~~
