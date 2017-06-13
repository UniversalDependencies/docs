---
layout: relation
title: 'obl:ad'
shortdef: 'oblique adjunct'
udver: '2'
---

The `obl:ad` relation is used for nominal adjuncts. On the other hand, when the nominal element is an argument we use [obj]() if it's a direct object, or [obl:comp]() if the argument is introduced by a preposition.

~~~ conllu
# visual-style 6 8 obl:ad	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	farmer	farmer	NOUN	NOUN	_	2	nsubj	_	_
2	happy	happy	ADJ	ADJ	_	0	root	_	_
3	pass	pass	VERB	VERB	_	2	compound:svc	_	_
4	when	when	ADV	ADV	_	6	mark	_	_
5	rain	rain	NOUN	NOUN	_	6	nsubj	_	_
6	fall	fall	VERB	VERB	_	2	advcl	_	_
7	like	like	ADP	ADP	_	8	case	_	_
8	dis	this	DET	DET	_	6	obl:ad	_	_


1	farmer	_	_	_	_	0	_	_	_
2	happy	_	_	_	_	0	_	_	_
3	COMP	_	_	_	_	0	_	_	_
4	when	_	_	_	_	0	_	_	_
5	rain	_	_	_	_	0	_	_	_
6	fall	_	_	_	_	0	_	_	_
7	like	_	_	_	_	0	_	_	_
8	this	_	_	_	_	0	_	_	_

1	Farmers	_	_	_	_	0	_	_	_
2	become	_	_	_	_	0	_	_	_
3	happier	_	_	_	_	0	_	_	_
4	when	_	_	_	_	0	_	_	_
5	rain	_	_	_	_	0	_	_	_
6	falls	_	_	_	_	0	_	_	_
7	like	_	_	_	_	0	_	_	_
8	this	_	_	_	_	0	_	_	_
~~~


~~~ conllu
# visual-style 3 9 obl:ad	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
1	you	you	PRON	PRON	_	3	nsubj	_	_
2	dey	dey	AUX	AUX	_	3	aux	_	_
3	do	do	VERB	VERB	_	0	root	_	_
4	two	two	NUM	NUM	_	5	nummod	_	_
5	thing	thing	NOUN	NOUN	_	3	obj	_	_
6	at	at	ADP	ADP	_	9	case	_	_
7	di	the	DET	DET	_	9	det	_	_
8	same	same	ADJ	ADJ	_	9	amod	_	_
9	time	time	NOUN	NOUN	_	3	obl:ad	_	_


1	you	_	_	_	_	0	_	_	_
2	CONT	_	_	_	_	0	_	_	_
3	do	_	_	_	_	0	_	_	_
4	two	_	_	_	_	0	_	_	_
5	thing	_	_	_	_	0	_	_	_
6	at	_	_	_	_	0	_	_	_
7	the	_	_	_	_	0	_	_	_
8	same	_	_	_	_	0	_	_	_
9	time	_	_	_	_	0	_	_	_

1	You	_	_	_	_	0	_	_	_
2	are	_	_	_	_	0	_	_	_
3	doing	_	_	_	_	0	_	_	_
4	two	_	_	_	_	0	_	_	_
5	things	_	_	_	_	0	_	_	_
6	at	_	_	_	_	0	_	_	_
7	the	_	_	_	_	0	_	_	_
8	same	_	_	_	_	0	_	_	_
9	time	_	_	_	_	0	_	_	_
~~~

