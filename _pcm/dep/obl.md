---
layout: relation
title: 'obl'
shortdef: 'oblique'
udver: '2'
---


In Naija three oblique relations are used instead of `obl`:

+ [obl:comp]() for oblique arguments

~~~ conllu
# visual-style 4 6 obl:comp	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	speed	speed	NOUN	NOUN	_	4	dislocated	_	_
2	im	he	PRON	PRON	_	4	nsubj	_	_
3	dey	be	AUX	AUX	_	4	aux	_	_
4	lead	lead	VERB	VERB	_	0	root	_	_
5	to	to	ADP	ADP	_	6	case	_	_
6	accident	accident	NOUN	NOUN	_	4	obl:comp	_	_

1	speed	_	_	_	_	0	_	_	_
2	it	_	_	_	_	0	_	_	_
3	be	_	_	_	_	0	_	_	_
4	lead	_	_	_	_	0	_	_	_
5	to	_	_	_	_	0	_	_	_
6	accident	_	_	_	_	0	_	_	_

1	speeding	_	_	_	_	0	_	_	_
2	it	_	_	_	_	0	_	_	_
3	leads	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	accidents	_	_	_	_	0	_	_	_
~~~


+ [obl:ad]() for oblique adjuncts

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

+ [obl:periph]() for peripheric obliques
<!-- Interlanguage links updated St lis 3 20:59:04 CET 2021 -->
