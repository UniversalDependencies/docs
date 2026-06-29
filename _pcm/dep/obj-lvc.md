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

~~~
'They don’t take note of all the mistakes they were making.'
<!-- Interlanguage links updated Po 29. června 2026, 18:12:54 CEST -->
