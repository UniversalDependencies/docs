---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

The `nsubj` relation is used between a clause and its nominal subject.

~~~ conllu
# visual-style 2 1 nsubj	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	we	_	PRON	_	_	2	nsubj	_	_
2	see	_	VERB	_	_	0	root	_	_
3	di	_	DET	_	_	4	det	_	_
4	man	_	NOUN	_	_	2	obj	_	_


1	we	_	_	_	_	0	_	_	_
2	see	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	man	_	_	_	_	0	_	_	_

1	we	_	_	_	_	0	_	_	_
2	saw	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	man	_	_	_	_	0	_	_	_

~~~
