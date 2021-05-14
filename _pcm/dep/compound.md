---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is one of three relations for multiword expressions (MWEs) (the other two being fixed and flat). It is used for :

- noun compounds:

~~~ conllu
# visual-style 2 1 compound	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
1	farm	farm	NOUN	NOUN	_	2	compound	_	_
2	work	work	NOUN	NOUN	_	0	root	_	_
~~~


- particle verbs (with the subtype [compound:prt]() ):

~~~ conllu
# visual-style 1 2 compound:prt	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
1	send	send	VERB	VERB	_	0	root	_	_
2	down	down	ADP	ADP	_	1	compound:prt	_	_
~~~


- reduplicated compounds (with the subtype [compound:redup]() ):

~~~ conllu
# visual-style 2 3 compound:redup	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	work	work	VERB	VERB	_	0	root	_	_
2	well	well	ADV	ADV	_	1	advmod	_	_
3	well	well	ADV	ADV	_	2	compound:redup	_	_
~~~


- serial verbs (with the subtype [compound:svc]() ):

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
<!-- Interlanguage links updated Pá kvě 14 11:08:56 CEST 2021 -->
