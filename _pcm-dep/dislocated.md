---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The dislocated relation is used between a dislocated clause or phrase and its head.

~~~ conllu
# visual-style 2 5 dislocated	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5 fgColor:white
1	one	_	DET	_	_	2	det	_	_
2	man	_	NOUN	_	_	5	dislocated	_	_
3	im	_	PRON	_	_	5	nsubj	_	_
4	dey	_	AUX	_	_	5	aux	_	_
5	drive	_	VERB	_	_	0	root	_	_

1	one	_	_	_	_	0	_	_	_
2	man	_	_	_	_	0	_	_	_
3	he	_	_	_	_	0	_	_	_
4	was	_	_	_	_	0	_	_	_	
5	driving	_	_	_	_	0	_	_	_

~~~
