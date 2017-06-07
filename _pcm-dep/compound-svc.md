---
layout: relation
title: 'compound:svc'
shortdef: 'serial verb compounds'
udver: '2'
---
The relation `compound:svc` is used for serial verb constructions. In this type of construction, several verbs are combined to describe the same action. The verbs in a serial verb construction share the same subject but not necessarily the same object.

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
