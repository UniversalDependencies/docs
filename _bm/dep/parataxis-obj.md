---
layout: relation
title: 'parataxis:obj'
shortdef: 'direct speech'
udver: '2'
---

In Bamana, the relation `parataxis:obj` is used for a direct speech.

~~~ conllu
# visual-style 2 4 parataxis:obj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	a	à	PRON	_	_	2	nsubj	_	_
2	ko	kó	VERB	_	_	0	root	_	_
3	baasi	báasi	NOUN	_	_	4	nsubj	_	_
4	tè	tɛ́	VERB	_	_	2	parataxis:obj	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~
'He said: "There is no problem"'.

For indirect speech, we use the [ccomp]() relation between the verb introducing the speech and the governor of the reported speech.
<!-- Interlanguage links updated St lis 3 20:59:08 CET 2021 -->
