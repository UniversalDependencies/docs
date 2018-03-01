---
layout: relation
title: 'obj'
shortdef: 'object'
udver: '2'
---

+ Firstly, the `obj` is a link used for a direct object.



~~~ conllu
# visual-style 4 3 obj	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white


1	a	à	PRON	_	_	4	nsubj	_	_
2	ye	ye	AUX	_	_	4	aux	_	_
3	ji	jí	NOUN	_	_	4	obj	_	_
4	kè	kɛ́	VERB	_	_	0	root	_	_
5	buguri	bùguri	NOUN	_	_	4	obl	_	_
6	nin	nìn	DET	_	_	5	det	_	_
7	na	ná	ADP	_	_	5	case	_	_
8	.	.	PUNCT	_	_	4	punct	_	_.

'He made a water of this dust'.
~~~

+ Secondly, it is used to mark an argument, if it is not a complete sentence, of a copula like verb kó. Other dependencies which are used with kó are [parataxis:obj]() and [ccomp]().

~~~ conllu
# visual-style 2 3 obj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white


1	a	à	PRON	_	_	2	nsubj	_	_
2	ko	kó	VERB	_	_	0	root	_	_
3	ayi	àyi	INTJ	_	_	2	obj	_	_
4	!	!	PUNCT	_	_	2	punct	_	_

'He said: "No!"'
~~~
