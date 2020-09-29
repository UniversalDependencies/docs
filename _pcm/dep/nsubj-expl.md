---
layout: relation
title: 'nsubj:expl'
shortdef: 'expletive subject'
udver: '2'
---

The `expl` relation is not used in Naija. Instead, we use the `nsubj:expl` subrelation for impersonal constructions:


~~~ conllu
# visual-style 2 1 nsubj:expl	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	im	he	PRON	PRON	_	2	nsubj:expl	_	_
2	get	get	VERB	VERB	_	0	root	_	_
3	one	one	DET	DET	_	4	det	_	_
4	man	man	NOUN	NOUN	_	2	nsubj:quasi	_	_
5	wey	where	SCONJ	SCONJ	_	6	mark	_	_
6	come	come	VERB	VERB	_	4	acl:cleft	_	_
7	for	for	ADP	ADP	_	9	case	_	_
8	our	our	PRON	PRON	_	9	nmod:poss	_	_
9	house	house	NOUN	NOUN	_	6	obl:comp	_	_

1	it	_	_	_	_	0	_	_	_
2	get	_	_	_	_	0	_	_	_
3	one	_	_	_	_	0	_	_	_
4	man	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_
6	came	_	_	_	_	0	_	_	_
7	to	_	_	_	_	0	_	_	_
8	our	_	_	_	_	0	_	_	_
9	house	_	_	_	_	0	_	_	_

1	There	_	_	_	_	0	_	_	_
2	was	_	_	_	_	0	_	_	_
3	a	_	_	_	_	0	_	_	_
4	man	_	_	_	_	0	_	_	_
5	who	_	_	_	_	0	_	_	_
6	came	_	_	_	_	0	_	_	_
7	to	_	_	_	_	0	_	_	_
8	our	_	_	_	_	0	_	_	_
9	house	_	_	_	_	0	_	_	_
~~~

Note : not all _im get_ constructions use expletive subjects. When the pronoun has an antecedent, the `nsubj` relation is used as usual.

+ _sey <b>person wey neva see money take chop now</b> na im you come say make im come go start. <b>im</b> get money start better business._
<!-- Interlanguage links updated Út zář 29 18:41:29 CEST 2020 -->
