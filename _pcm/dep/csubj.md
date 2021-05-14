---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

The `csubj` relation is used when the subject of a clause is a clause in itself. The governor need not be a verb, it can also be an adjective.

~~~ conllu
# visual-style 6 3 csubj	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	na	na	PART	PART	_	2	cop	_	_
2	why	why	ADV	ADV	_	0	root	_	_
3	drink	drink	VERB	VERB	_	6	csubj	_	_
4	drive	drive	VERB	VERB	_	3	compound:svc	_	_
5	no	not	PART	PART	_	6	advmod	_	_
6	good	good	ADJ	ADJ	_	2	ccomp:cleft	_	_


1	be	_	_	_	_	0	_	_	_
2	why	_	_	_	_	0	_	_	_
3	drink	_	_	_	_	0	_	_	_
4	drive	_	_	_	_	0	_	_	_
5	not	_	_	_	_	0	_	_	_
6	good	_	_	_	_	0	_	_	_

1	That	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	why	_	_	_	_	0	_	_	_
4	drunk	_	_	_	_	0	_	_	_
5	driving	_	_	_	_	0	_	_	_
6	is	_	_	_	_	0	_	_	_
7	not	_	_	_	_	0	_	_	_
8	good	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:59 CEST 2021 -->
