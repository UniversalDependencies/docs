---
layout: relation
title: 'obl:ad'
shortdef: 'oblique adjunct'
udver: '2'
---

obl is split in three subrelations: [obl:ad](), [obl:comp](), and [obl:periph]().

The `obl:ad` relation is used for nominal adjuncts which are governed by their heads. For nominal adjuncts which are not governed we use [obl:periph]().

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
3	exceed	_	_	_	_	0	_	_	_
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
2	be	_	_	_	_	0	_	_	_
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

`obl:ad` is used regardless of the presence of a preposition before the adjunct :

~~~ conllu
# visual-style 5 6 obl:ad	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	I	I	PRON	PRON	_	5	nsubj	_	_
2	no	no	PART	PART	_	5	advmod	_	_
3	go	go	AUX	AUX	_	5	aux	_	_
4	dey	dey	AUX	AUX	_	5	aux	_	_
5	sleep	sleep	VERB	VERB	_	0	root	_	_
6	kitchen	kitchen	NOUN	NOUN	_	5	obl:ad	_	_

1	I	_	_	_	_	0	_	_	_
2	not	_	_	_	_	0	_	_	_
3	will	_	_	_	_	0	_	_	_
4	be	_	_	_	_	0	_	_	_
5	sleep	_	_	_	_	0	_	_	_
6	kitchen	_	_	_	_	0	_	_	_
	_

1	I	_	_	_	_	0	_	_	_
2	won't	_	_	_	_	0	_	_	_
3	be	_	_	_	_	0	_	_	_
4	sleeping	_	_	_	_	0	_	_	_
5	in	_	_	_	_	0	_	_	_
6	the	_	_	_	_	0	_	_	_
7	kitchen	_	_	_	_	0	_	_	_
~~~


On the other hand, when the nominal element is not an adjunct but an argument we use [obj]() if it's a direct object, or [obl:comp]() if the argument is introduced by a preposition.
<!-- Interlanguage links updated Út zář 29 20:43:25 CEST 2020 -->
