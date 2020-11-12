---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

The `xcomp` relation is used for clausal complements of verbs which function like objects, but unlike [ccomp]() lack an explicit subject. The reference of the subject is determined by an argument external to the xcomp clause, which means that the clause inherits its subject from  higher up in the tree.


~~~ conllu
# visual-style 2 3 xcomp	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	I	I	PRON	PRON	_	2	nsubj	_	_
2	want	want	VERB	VERB	_	0	root	_	_
3	drive	drive	VERB	VERB	_	2	xcomp	_	_
4	dis	this	DET	DET	_	5	det	_	_
5	car	car	NOUN	NOUN	_	3	obj	_	_


1	I	_	_	_	_	0	_	_	_
2	want	_	_	_	_	0	_	_	_
3	drive	_	_	_	_	0	_	_	_
4	this	_	_	_	_	0	_	_	_
5	car	_	_	_	_	0	_	_	_

1	I	_	_	_	_	0	_	_	_
2	want	_	_	_	_	0	_	_	_
3	to	_	_	_	_	0	_	_	_
4	drive	_	_	_	_	0	_	_	_
5	this	_	_	_	_	0	_	_	_
6	car	_	_	_	_	0	_	_	_

~~~

### Secondary predicates

The xcomp relation is also used in constructions that are known as _secondary predicates_.
In this type of construction there are two predicates mixed in one clause, and each of the predicates constitutes a core argument.

The 2 predicates in the following example are:

- something is given a name
- this name is "hemorrage"

~~~ conllu
# visual-style 6 7 xcomp	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	dat	that	PRON	PRO	_	3	nsubj	_	_
2	na	is	VERB	VERB	_	3	cop	_	_
3	whetin	what	PRON	PRON	_	0	root	_	_
4	dem	they	PRON	PRON	_	6	nsubj	_	_
5	dey	dey	AUX	AUX	_	6	aux	_	_
6	call	call	VERB	VERB	_	3	acl:relcl	_	_
7	hemorrage	hemorrage	NOUN	NOUN	_	6	xcomp	_	_


1	that	_	_	_	_	0	_	_	_
2	be	_	_	_	_	0	_	_	_
3	what	_	_	_	_	0	_	_	_
4	they	_	_	_	_	0	_	_	_
5	CONT	_	_	_	_	0	_	_	_
6	call	_	_	_	_	0	_	_	_
7	hemorrage	_	_	_	_	0	_	_	_

1	This	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	what	_	_	_	_	0	_	_	_
4	we	_	_	_	_	0	_	_	_
5	call	_	_	_	_	0	_	_	_
6	a	_	_	_	_	0	_	_	_
7	hemorrage	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Čt lis 12 09:43:40 CET 2020 -->
