---
layout: relation
title: 'obl:mod'
shortdef: 'oblique modifier'
udver: '2'
---

The `obl:mod` relation is used nominal or prepositional groups which act as a modifier.

~~~ conllu
# visual-style 8 10 obl:mod	color:blue
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	#	#	X	_	_	3	dep	_	_
2	de	dem	PRON	_	_
3	born	born	VERB	_	_	0	root	_	_
4	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obj	_	_
5	for	for	ADP	_	_	6	case	_	_
6	Warri	Warri	PROPN	_	_	3	obl:mod	_	_

1	#	_	_	_	_	0	_	_	_
2	they	_	_	_	_	0	_	_	_
3	bear	_	_	_	_	0	_	_	_
4	me	_	_	_	_	0	_	_	_
5	in	_	_	_	_	0	_	_	_
6	Warri	_	_	_	_	0	_	_	_

1	they	_	_	_	_	0	_	_	_
2	had	_	_	_	_	0	_	_	_
3	me	_	_	_	_	0	_	_	_
4	in	_	_	_	_	0	_	_	_
5	Warri	_	_	_	_	0	_	_	_
~~~

~~~ conllu
# visual-style 8 10 obl:mod	color:blue
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	so	so	ADV	_	_	7	discourse	_	_
2	all	all	DET	_	_	4	dep	_	_
3	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	4	nmod:poss	_	_
4	life	life	NOUN	_	_	7	obl:mod	_	_
5	<	<	X	_	_	4	dep	_	_
6	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	live	live	VERB	_	_	0	root	_	_
8	for	for	ADP	_	_	9	case	_	_
9	Delta	Delta	PROPN	_	_	7	obl:arg	_	_
10	State	state	NOUN	_	_	9	flat	_	_

1	so	_	_	_	_	0	_	_	_
2	all	_	_	_	_	0	_	_	_
3	my	_	_	_	_	0	_	_	_
4	life	_	_	_	_	0	_	_	_
5	<	_	_	_	_	0	_	_	_
6	I	_	_	_	_	0	_	_	_
7	live	_	_	_	_	0	_	_	_
8	in	_	_	_	_	0	_	_	_
9	Delta	_	_	_	_	0	_	_	_
10	State	_	_	_	_	0	_	_	_

1	so	_	_	_	_	0	_	_	_
2	all	_	_	_	_	0	_	_	_
3	my	_	_	_	_	0	_	_	_
4	life	_	_	_	_	0	_	_	_
5	<	_	_	_	_	0	_	_	_
6	I	_	_	_	_	0	_	_	_
7	have	_	_	_	_	0	_	_	_
8	lived	_	_	_	_	0	_	_	_
9	in	_	_	_	_	0	_	_	_
10	Delta	_	_	_	_	0	_	_	_
11	State	_	_	_	_	0	_	_	_
~~~
