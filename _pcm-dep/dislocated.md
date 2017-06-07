---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used between a dislocated clause or phrase and its head. In Naija dislocations are used for topicalization. 

~~~ conllu
# visual-style 5 2 dislocated	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5 fgColor:white
1	one	one	DET	DET	_	2	det	_	_
2	man	man	NOUN	NOUN	_	5	dislocated	_	_
3	im	he	PRON	PRON	_	5	nsubj	_	_
4	dey	dey	AUX	AUX	_	5	aux	_	_
5	drive	drive	VERB	VERB	_	0	root	_	_


1	one	_	_	_	_	0	_	_	_
2	man	_	_	_	_	0	_	_	_
3	he	_	_	_	_	0	_	_	_
4	CONT	_	_	_	_	0	_	_	_	
5	drive	_	_	_	_	0	_	_	_

1	one	_	_	_	_	0	_	_	_
2	man	_	_	_	_	0	_	_	_
3	he	_	_	_	_	0	_	_	_
4	was	_	_	_	_	0	_	_	_	
5	driving	_	_	_	_	0	_	_	_

~~~
