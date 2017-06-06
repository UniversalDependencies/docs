---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
---

The acl:relcl relation is used between a relative clause and its head.

~~~ conllu
# visual-style 1 4 acl:relcl	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	wetin	_	PRON	_	_	0	root	_	_
2	we	_	PRON	_	_	4	nsubj	_	_
3	dey	_	AUX	_	_	4	aux	_	_
4	call	_	VERB	_	_	1	acl:cleft	_	_
5	speed	_	NOUN	_	_	6	nmod	_
6	limiting	_	ADJ	_	_	7	amod	_
7	device	_	NOUN	_	_	4	obj	_

1	what	_	_	_	_	0	_	_	_
2	we	_	_	_	_	0	_	_	_
3	CONT	_	_	_	_	0	_	_	_
4	call	_	_	_	_	0	_	_	_	
5	speed	_	_	_	_	0	_	_	_
6	limiting	_	_	_	_	0	_	_	_
7	device	_	_	_	_	0	_	_	_

1	what	_	_	_	_	0	_	_	_
2	we	_	_	_	_	0	_	_	_
3	call	_	_	_	_	0	_	_	_
4	speed	_	_	_	_	0	_	_	_	
5	limiting	_	_	_	_	0	_	_	_
6	device	_	_	_	_	0	_	_	_	
~~~
