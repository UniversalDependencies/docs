---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

The `xcomp` relation is used for clausal complements of verbs which function like objects, but unlike [ccomp]() lack an explicit subject. The clause inherits its subject from  higher up in the tree.


~~~ conllu
# visual-style 2 3 xcomp	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	I	I	PRON	PRON	_	2	nsubj	_	_
2	want	want	VERB	VERB	_	0	root	_	_
3	drive	drive	VERB	VERB	_	2	xcomp	_	_
4 dis this  DET DET _ 5 det _ _
5 car car NOUN  NOUN  _ 3 obj _ _

1	I	_	_	_	_	0	_	_	_
2	want	_	_	_	_	0	_	_	_
3	to	_	_	_	_	0	_	_	_
4	drive	_	_	_	_	0	_	_	_
5	this	_	_	_	_	0	_	_	_
6	car	_	_	_	_	0	_	_	_
~~~

