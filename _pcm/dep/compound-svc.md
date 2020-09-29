---
layout: relation
title: 'compound:svc'
shortdef: 'serial verb compounds'
udver: '2'
---
The relation `compound:svc` is used for serial verb constructions. In this type of construction, several verbs are combined to describe the same action. 

~~~ conllu
# visual-style 2 4 compound:svc	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	dem	them	PRON	PRON	_	2	nsubj	_
2	enter	enter	VERB	VERB	_	0	root	_	_
3	bus	bus	NOUN	NOUN	_	2	obj	_	_
4	go	go	VERB	VERB	_	2	compound:svc	_	_
5	work	work	NOUN	NOUN	_	4	obj	_	_

1	they	_	_	_	_	0	_	_	_
2	enter	_	_	_	_	0	_	_	_
3	bus	_	_	_	_	0	_	_	_
4	go	_	_	_	_	0	_	_	_
5	work	_	_	_	_	0	_	_	_

1	They	_	_	_	_	0	_	_	_
2	take	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	bus	_	_	_	_	0	_	_	_
5	to	_	_	_	_	0	_	_	_
6	work	_	_	_	_	0	_	_	_
~~~

The verbs in a serial verb construction share the same subject but not necessarily the same object.

~~~ conllu
# visual-style 4 7 compound:svc	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13 15 compound:svc	color:blue
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
1	so	so	ADV	SCONJ	_	4	advmod	_	_
2	we	we	PRON	PRON	_	4	nsubj	_	_
3	don	don	AUX	AUX	_	4	aux	_	_
4	carry	carry	VERB	VERB	_	0	root	_	_
5	di	the	DET	DET	_	6	det	_	_
6	matter	matter	NOUN	NOUN	_	4	obj	_	_
7	come	come	VERB	VERB	_	4	compound:svc	_	_
8	again	again	ADV	ADV	_	7	advmod	_	_
9	as	as	SCONJ	ADP	_	13	mark	_	_
10	we	we	PRON	PRON	_	13	nsubj	_	_
11	dey	be	AUX	AUX	_	13	aux	_	_
12	always	always	ADV	ADV	_	13	advmod	_	_
13	carry	carry	VERB	VERB	_	7	advcl	_	_
14	am	he	PRON	PRON	_	13	obj	_	_
15	come	come	VERB	VERB	_	13	compound:svc	_	_

1	so	_	_	_	_	0	_	_	_
2	we	_	_	_	_	0	_	_	_
3	have	_	_	_	_	0	_	_	_
4	carry	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	matter	_	_	_	_	0	_	_	_
7	come	_	_	_	_	0	_	_	_
8	again	_	_	_	_	0	_	_	_
9	as	_	_	_	_	0	_	_	_
10	we	_	_	_	_	0	_	_	_
11	be	_	_	_	_	0	_	_	_
12	always	_	_	_	_	0	_	_	_
13	carry	_	_	_	_	0	_	_	_
14	it	_	_	_	_	0	_	_	_
15	come	_	_	_	_	0	_	_	_

1	so	_	_	_	_	0	_	_	_
2	we	_	_	_	_	0	_	_	_
3	have	_	_	_	_	0	_	_	_
4	brought	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	issue	_	_	_	_	0	_	_	_
7	again	_	_	_	_	0	_	_	_
8	as	_	_	_	_	0	_	_	_
9	we	_	_	_	_	0	_	_	_
10	always	_	_	_	_	0	_	_	_
11	do	_	_	_	_	0	_	_	_
~~~

An adjective may be used in place of a verb in a serial verb construction.

~~~ conllu
# visual-style 3 4 compound:svc	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	di	the	DET	DET	_	2	det	_	_
2	guy	guy	NOUN	NOUN	_	3	nsubj	_	_
3	fine	fine	ADJ	ADJ	_	0	root	_	_
4	reach	arrive	VERB	VERB	_	3	compound:svc	_	_
5	me	I	PRON	PRON	_	4	obj	_	_

1	the	_	_	_	_	0	_	_	_
2	guy	_	_	_	_	0	_	_	_
3	fine	_	_	_	_	0	_	_	_
4	reach	_	_	_	_	0	_	_	_
5	me	_	_	_	_	0	_	_	_

1	Is	_	_	_	_	0	_	_	_
2	the	_	_	_	_	0	_	_	_
3	guy	_	_	_	_	0	_	_	_
4	as	_	_	_	_	0	_	_	_
5	handsome	_	_	_	_	0	_	_	_
6	as	_	_	_	_	0	_	_	_
7	I	_	_	_	_	0	_	_	_
8	am	_	_	_	_	0	_	_	_
~~~


### Comparatives

In Naija serial verbs constructions are also used for comparatives. In these constructions the adjective which is being used to draw the comparison is followed by the verb _pass_.

~~~ conllu
# visual-style 2 3 compound:svc	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	farmer	farmer	NOUN	NOUN	_	2	nsubj	_	_
2	happy	happy	ADJ	ADJ	_	0	root	_	_
3	pass	pass	VERB	VERB	_	2	compound:svc	
4	when	when	ADV	ADV	_	6	mark	_	_
5	rain	rain	NOUN	NOUN	_	6	nsubj	_	_
6	fall	fall	VERB	VERB	_	2	advcl	_	_
7	like	like	ADP	ADP	_	8	case	_	_
8	dis	this	DET	DET	_	6	obl	_	_

1	farmers	_	_	_	_	0	_	_	_
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
<!-- Interlanguage links updated Út zář 29 20:43:13 CEST 2020 -->
