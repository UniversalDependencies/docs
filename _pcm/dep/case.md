---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The `case` relation is used for case-marking elements. These elements are treated as dependents of the noun or clause they attach to or introduce.

~~~ conllu
# visual-style 12 11 case	color:blue
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	our	our	PRON	PRON	_	2	nmod:poss	_	_
2	work	work	NOUN	NOUN	_	3	nsubj	_	_
3	na	be	VERB	PART	_	0	root	_	_
4	to	to	ADP	ADP	_	5	mark	_	_
5	ensure	ensure	VERB	VERB	_	3	ccomp	_	_
6	sey	that	SCONJ	SCONJ	_	10	mark	_	_
7	accident	accident	NOUN	NOUN	_	10	nsubj	_	_
8	no	not	PART	PART	_	10	advmod	_	_
9	too	too	ADV	ADV	_	10	advmod	_	_
10	happen	happen	VERB	VERB	_	5	ccomp	_	_
11	for	for	ADP	ADP	_	12	case	_	_
12	road	road	NOUN	NOUN	_	10	obl:ad	_	_

1	our	_	_	_	_	0	_	_	_
2	work	_	_	_	_	0	_	_	_
3	be	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	ensure	_	_	_	_	0	_	_	_
6	that	_	_	_	_	0	_	_	_
7	accident	_	_	_	_	0	_	_	_
8	not	_	_	_	_	0	_	_	_
9	too	_	_	_	_	0	_	_	_
10	happen	_	_	_	_	0	_	_	_
11	on	_	_	_	_	0	_	_	_
12	road	_	_	_	_	0	_	_	_

1	our	_	_	_	_	0	_	_	_
2	work	_	_	_	_	0	_	_	_
3	is	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	ensure	_	_	_	_	0	_	_	_
6	that	_	_	_	_	0	_	_	_
7	accidents	_	_	_	_	0	_	_	_
8	do	_	_	_	_	0	_	_	_
9	not	_	_	_	_	0	_	_	_
10	frequently	_	_	_	_	0	_	_	_
11	happen	_	_	_	_	0	_	_	_
12	on	_	_	_	_	0	_	_	_
13	the	_	_	_	_	0	_	_	_
14	road	_	_	_	_	0	_	_	_
~~~

Naija also uses `case` for verbal predicates when the adposition plays the same role that it would play for a nominal head. In the example below, "_sey I no go dey around_" could be replaced by the noun "_wahala_" (_a problem_) without affecting the behavior of the adposition "_like_".

~~~ conllu
# visual-style 10 5 case	color:blue
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	but	but	CCONJ	CCONJ	_	4	cc	_	_
2	im	he	PRON	PRON	_	4	nsubj	_	_
3	come	come	AUX	VERB	_	4	aux	_	_
4	be	be	VERB	PART	_	0	root	_	_
5	like	like	ADP	ADP	_	10	case	_	_
6	sey	that	SCONJ	SCONJ	_	10	mark	_	_
7	I	I	PRON	PRON	_	10	nsubj	_	_
8	no	not	PART	PART	_	10	advmod	_	_
9	go	go	AUX	VERB	_	10	aux	_	_
10	dey	be	VERB	PART	_	4	parataxis:obj	_	_
11	around	around	ADV	ADV	_	10	advmod	_	_

1	but	_	_	_	_	0	_	_	_
2	it	_	_	_	_	0	_	_	_
3	REAL	_	_	_	_	0	_	_	_
4	be	_	_	_	_	0	_	_	_
5	like	_	_	_	_	0	_	_	_
6	that	_	_	_	_	0	_	_	_
7	I	_	_	_	_	0	_	_	_
8	not	_	_	_	_	0	_	_	_
9	PROSP	_	_	_	_	0	_	_	_
10	be	_	_	_	_	0	_	_	_
11	around	_	_	_	_	0	_	_	_

1	but	_	_	_	_	0	_	_	_
2	it	_	_	_	_	0	_	_	_
3	seems	_	_	_	_	0	_	_	_
4	like	_	_	_	_	0	_	_	_
5	I	_	_	_	_	0	_	_	_
6	won't	_	_	_	_	0	_	_	_
7	be	_	_	_	_	0	_	_	_
8	around	_	_	_	_	0	_	_	_
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:53 CEST 2021 -->
