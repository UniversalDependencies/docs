---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---


The relation determiner (`det`) holds between a nominal head and its determiner.

~~~ conllu
# visual-style 3 2 det	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	dist	_	VERB	VERcjg	_	0	root	_	_
2	li	_	DET	DETdef	_	3	det	_	_
3	hermites	_	NOUN	NOMcom	_	1	nsubj	_	_

~~~

These determiners can be possessive or demonstrative.

~~~ conllu
# visual-style 2 1 det	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
1	Son	_	DET	DETpos	_	2	det	_	_
2	forestier	_	NOUN	NOMcom	_	3	obj	_	_
3	apele	_	VERB	VERcjg	_	0	root	_	_
4	en	_	ADP	PRE	_	5	case	_	_
5	erre	_	NOUN	NOMcom	_	3	obl	_	_

~~~

In case of complex determiner, there are two `det` relations.

~~~ conllu
# visual-style 3 2 det	color:blue
# visual-style 3 1 det	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	Tut	_	DET	DETind	_	3	det	_	_
2	li	_	DET	DETdef	_	3	det	_	_
3	païs	_	NOUN	NOMcom	_	4	nsubj	_	_
4	en	_	ADV	PROadv	_	4	advmod	_	_
5	reluist	_	VERB	VERcjg	_	0	root	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:43:16 CEST 2020 -->
