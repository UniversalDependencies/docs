---
layout: relation
title: 'nsubj:quasi'
shortdef: 'quasi subject'
udver: '2'
---

The `expl` relation is not used in Naija. The [nsubj:expl]() relation is used instead for impersonal constructions. To annotate the quasi-subject which is the other dependent of the predicate we use the `nsubj:quasi` relation. 

~~~ conllu
# visual-style 2 4 nsubj:quasi	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	im	it	PRON	PRON	_	2	nsubj:expl	_	_
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
3	a	_	_	_	_	0	_	_	_
4	man	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_
6	come	_	_	_	_	0	_	_	_
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
<!-- Interlanguage links updated Út zář 29 20:43:23 CEST 2020 -->
