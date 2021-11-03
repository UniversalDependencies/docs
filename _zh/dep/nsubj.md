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
1	我	_	PRON	_	_	3	nsubj	_	1SG
2	馬上	_	ADV	_	_	3	advmod	_	immediately
3	開車	_	VERB	_	_	0	root	_	drive

1	"I	_	_	_	_	0	_	_	_
2	will	_	_	_	_	0	_	_	_
3	drive	_	_	_	_	0	_	_	_
4	at once	_	_	_	_	0	_	_	_
5	."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated St lis 3 20:59:00 CET 2021 -->
