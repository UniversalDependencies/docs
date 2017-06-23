---
layout: relation
title: 'obj'
shortdef: 'object'
udver: '2'
---

The object (`obj`) of a verb is the second most core argument of a verb after the subject. 

(See [ccomp]() for when the object is clausal.)

~~~ conllu
# visual-style 4 2 obj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	La	_	DET	DETdef	_	2	det	_	_
2	main	_	NOUN	NOMcom	_	4	obj	_	_
3	destre	_	ADJ	ADJqua	_	2	amod	_	_
4	leva	_	VERB	VERcjg	_	0	root	_	_
5	adonques	_	ADV	ADVgen	_	4	advmod	_	_
6	La	_	DET	DETdef	_	7	det	_	_
7	dame	_	NOUN	NOMcom	_	4	nsubj	_	_

~~~
