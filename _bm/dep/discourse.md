---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

The`discourse` relation is used for interjections and other discourse particles elements.

~~~ conllu
# visual-style 7 3 discourse	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white

1	a	à	PRON	_	_	2	nsubj	_	_
2	ko	kó	VERB	_	_	0	root	_	_
3	ayiwa	áyiwa	INTJ _	_	7	discourse	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	ko	kó	SCONJ	_	_	7	mark	_	_
6	baasi	báasi	NOUN	_	_	7	nsubj	_	_
7	tè	tɛ́	VERB	_	_	2	parataxis:obj	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

'He said: "So, there is no problem"'.
~~~
