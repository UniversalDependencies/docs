---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

The `xcomp` relation is used for clausal complements of verbs which function like objects, but unlike [ccomp]() lack an explicit subject. The reference of the subject is determined by an argument external to the xcomp clause, which means that the clause inherits its subject from  higher up in the tree. It is used in infinitive constructions with a predicative marker kà.


~~~ conllu
# visual-style 2 5 xcomp	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white


1	syèdennin	syɛdennin	NOUN	_	_	2	nsubj	_ _
2	yèlènna	yɛlɛnna	VERB	_	_	0	root	_	_
3	ka	kà	AUX	_	_	5	aux	_	_
4	lenburusun	lenburusun	NOUN	_	_	5	obj	_	_
5	yuguyugu	yúguyugu	VERB	_	_	2	xcomp	_	_
6	.	.	PUNCT	_	_	2	punct	_	_

'A chicken climbed a lemon tree and shacked it'
~~~
