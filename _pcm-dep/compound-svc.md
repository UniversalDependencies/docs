---
layout: relation
title: 'compound:svc'
shortdef: 'serial verbs compound'
udver: '2'
---
The relation `compound:svc` is used for serial verb constructions. In this type of construction, several verbs are combined to describe the same action. The verbs in a serial verb construction share the same subject but not necessarily the same object.



In Naija serial verbs constructions are also used for comparatives.

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

1	Farmers	_	_	_	_	0	_	_	_
2	become	_	_	_	_	0	_	_	_
3	happier	_	_	_	_	0	_	_	_
4	when	_	_	_	_	0	_	_	_
5	rain	_	_	_	_	0	_	_	_
6	falls	_	_	_	_	0	_	_	_
7	like	_	_	_	_	0	_	_	_
8	this	_	_	_	_	0	_	_	_
~~~
