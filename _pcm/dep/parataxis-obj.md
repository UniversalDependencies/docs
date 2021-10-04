---
layout: relation
title: 'parataxis:obj'
shortdef: 'direct speech'
udver: '2'
---

The relation `parataxis:obj` is used between a verb introducing direct speech and the governor of the direct speech.

~~~ conllu
# visual-style 2 6 parataxis:obj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	dem	they	PRON	PRON	_	2	nsubj	_	_
2	say	say	VERB	VERB	_	0	root	_	_
3	"ah"	"ah"	INTJ	INTJ	_	6	discourse	_	_
4	"ah"	"ah"	INTJ	INTJ	_	3	goeswith	_	_
5	who	who	PRON	PRON	_	6	nsubj	_	_
6	kill	kill	VERB	VERB	_	2	parataxis:obj	_	_
7	dis	this	DET	DET	_	8	det	_	_
8	animal	animal	NOUN	NOUN	_	6	obj	_	_

1	They	_	_	_	_	0	_	_	_
2	say	_	_	_	_	0	_	_	_
3	ah	_	_	_	_	0	_	_	_
4	ah	_	_	_	_	0	_	_	_
5	who	_	_	_	_	0	_	_	_
6	kill	_	_	_	_	0	_	_	_
7	this	_	_	_	_	0	_	_	_
8	animal	_	_	_	_	0	_	_	_

1	They	_	_	_	_	0	_	_	_
2	say	_	_	_	_	0	_	_	_
3	"ah"	_	_	_	_	0	_	_	_
4	"ah"	_	_	_	_	0	_	_	_
5	who	_	_	_	_	0	_	_	_
6	killed	_	_	_	_	0	_	_	_
7	this	_	_	_	_	0	_	_	_
8	animal	_	_	_	_	0	_	_	_

~~~

For indirect speech, we use the [ccomp]() relation between the verb introducing the speech and the governor of the reported speech.
<!-- Interlanguage links updated Pá kvě 14 11:09:20 CEST 2021 -->
