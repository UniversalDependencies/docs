---
layout: relation
title: 'obl:periph'
shortdef: 'peripheric oblique'
udver: '2'
---

The `obl:periph` relation is used for peripheric oblique, i.e obliques which are not governed by their heads. When the oblique element is governed however, we use the [obl:comp]() relation for arguments and the [obl:ad]() relation for adjuncts.


~~~ conllu
# visual-style 11 2 obl:periph	color:blue
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	any	any	DET	DET	_	2	det	_	_
2	time	time	NOUN	NOUN	_	11	obl:periph	_	_
3	wey	where	SCONJ	SCONJ	_	5	mark	_	_
4	rain	rain	NOUN	NOUN	_	5	nsubj	_	_
5	fall	fall	VERB	VERB	_	2	acl:relcl	_	_
6	like	like	ADP	ADP	_	7	case	_	_
7	dis	this	DET	DET	_	5	obl:ad	_	_
8	everywhere	everywhere	ADV	ADV	_	11	nsubj	_	_
9	go	will	AUX	AUX	_	11	aux	_	_
10	just	just	ADV	ADV	_	11	advmod	_	_
11	cool	cool	ADJ	ADJ	_	0	root	_	_
~~~
