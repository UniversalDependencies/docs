---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---


The relation determiner (`det`) holds between a nominal head and its determiner.


In case of complex determiner, there are two `det` relations

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
3	en	_	ADV	PROadv	_	4	advmod	_	_
4	reluist	_	VERB	VERcjg	_	0	root	_	_

~~~
