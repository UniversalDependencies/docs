---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---
The `nsubj` relation links a subject to its predicate, and this subject must be nominal. (If the syntactic subject is a clause, the relation [csubj]() is used.)

~~~ conllu
# visual-style 3 1 nsubj	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	佢	_	PRON	_	_	3	nsubj	_	3SG
2	即刻	_	ADV	_	_	3	advmod	_	immediately
3	走	_	VERB	_	_	0	root	_	go/leave
4	咗	_	AUX	_	_	3	aux	_	PERF

1	"He	_	_	_	_	0	_	_	_
2	left	_	_	_	_	0	_	_	_
3	immediately."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:37 CEST 2020 -->
