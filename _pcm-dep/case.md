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
