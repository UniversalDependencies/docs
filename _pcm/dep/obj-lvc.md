---
layout: relation
title: 'obj:lvc'
shortdef: 'light verb construction object'
udver: '2'
---

The `obj:lvc` relation is used for objects complements within light verb constructions.

~~~ conllu
# visual-style 8 10 obj:lvc	color:blue
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	#	#	X	_	_	5	dep	_	_
2	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
3	no	no	PART	_	Polarity=Neg	5	advmod	_	_
4	dey	dey	AUX	_	Aspect=Imp	5	aux	_	_
5	take	take	VERB	_	_	0	root	_	_
6	note	note	NOUN	_	_	5	obj:lvc	_	_
7	of	of	ADP	_	_	10	case	_	_
8	all	all	DET	_	_	10	dep	_	_
9	di	di	DET	_	Definite=Def|PronType=Art	10	det	_	_
10	mistake	mistake	NOUN	_	_	5	obl:arg	_	_
11	wey	wey	SCONJ	_	_	14	mark	_	_
12	dem	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	_
13	dey	dey	AUX	_	Aspect=Imp	14	aux	_	_
14	make	make	VERB	_	_	10	acl:relcl	_	_

1	#	_	_	_	_	0	_	_	_
2	they	_	_	_	_	0	_	_	_
3	no	_	_	_	_	0	_	_	_
4	be	_	_	_	_	0	_	_	_
5	take	_	_	_	_	0	_	_	_
6	note	_	_	_	_	0	_	_	_
7	of	_	_	_	_	0	_	_	_
8	all	_	_	_	_	0	_	_	_
9	the	_	_	_	_	0	_	_	_
10	mistake  _	_	_	_	0	_	_	_
11	that _	_	_	_	0	_	_	_
12	they _	_	_	_	0	_	_	_
13	be _	_	_	_	0	_	_	_
14	make _ _ _ _ 0 _ _ _

1	they	_	_	_	_	0	_	_	_
2	are	_	_	_	_	0	_	_	_
3	not	_	_	_	_	0	_	_	_
4	taking	_	_	_	_	0	_	_	_
5	note	_	_	_	_	0	_	_	_
6	of	_	_	_	_	0	_	_	_
7	all	_	_	_	_	0	_	_	_
8	the	_	_	_	_	0	_	_	_
9	mistakes _	_	_	_	0	_	_	_
10	they _	_	_	_	0	_	_	_
11	make _	_	_	_	0	_	_	_
~~~
<!-- Interlanguage links updated St lis 3 20:59:04 CET 2021 -->
