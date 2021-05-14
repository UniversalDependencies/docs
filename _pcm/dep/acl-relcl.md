---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
---

The `acl:relcl` relation is used for relative clauses modifying nominal elements.

~~~ conllu
# visual-style 1 4 acl:relcl	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	wetin	what	PRON	PRON	_	0	root	_	_
2	we	we	PRON	PRON	_	4	nsubj	_	_
3	dey	be	AUX	AUX	_	4	aux	_	_
4	call	call	VERB	VERB	_	1	acl:relcl	_	_
5	speed	speed	NOUN	NOUN	_	6	nmod	_
6	limiting	limiting	ADJ	ADJ	_	7	amod	_
7	device	device	NOUN	NOUN	_	4	obj	_

1	what	_	_	_	_	0	_	_	_
2	we	_	_	_	_	0	_	_	_
3	be	_	_	_	_	0	_	_	_
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
<!-- Interlanguage links updated Pá kvě 14 11:08:45 CEST 2021 -->
