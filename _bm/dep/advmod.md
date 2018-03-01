---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

The `advmod` relation is used between an adverbial phrase and its governor.

~~~ conllu
# visual-style 2 3 advmod	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white

1	dò	dɔ́	PRON	_	_	2	nsubj	_	_
2	bè	bɛ́	VERB	_	_	0	root	_	_
3	yen	yèn	ADV	_	_	3	advmod	_	_

'There is something (someone) here'.
~~~

It is also used with particles.
~~~ conllu
# visual-style 5 6 advmod	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white

1	jelikè	jèlikɛ	NOUN	_	_	5	nsubj	_	_
2	dò	dɔ́	DET	_	_	1	det	_	_
3	ye	ye	AUX	_	_	5	aux	_	_
4	a	à	PRON	_	_	5	obj	_	_
5	mèn	mɛ́n	VERB	_	_	0	root	_	_
6	sa	sá	PART	_	_	5	advmod	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

'Finally, a griot heard this'.
~~~
