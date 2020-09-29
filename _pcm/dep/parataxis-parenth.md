---
layout: relation
title: 'parataxis:parenth'
shortdef: 'parenthetical'
udver: '2'
---

The relation `parataxis:parenth` is used when there is an autonomous illocutionary unit present inside another one.


In the example below, "_I dey patrol_" could potentially form an autonomous unit, but is instead inserted inside another unit "_na ma team naim dem just call us sey im don happen_". Therefore, the `parataxis:parenth` relation is used between the root of the whole unit, and the root of the parenthetical :

~~~ conllu
# visual-style 3 6 parataxis:parenth	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	na	na	PART	PART	_	3	cop	_	_
2	ma	my	PRON	PRON	_	3	nmod:poss	_	_
3	team	team	NOUN	NOUN	_	10	dislocated	_	_
4	I	I	PRON	PRON	_	6	nsubj	_	_
5	dey	PROG	AUX	AUX	_	6	aux	_	_
6	patrol	patrol	VERB	VERB	_	3	parataxis:parenth	_	_
7	naim	naim	ADV	SCONJ	_	10	advmod	_	_
8	dem	they	PRON	PRON	_	10	nsubj	_	_
9	just	just	ADV	ADV	_	10	advmod	_	_
10	call	call	VERB	VERB	_	0	root	_	_
11	us	we	PRON	PRON	_	10	obj	_	_
12	sey	that	SCONJ	SCONJ	_	15	mark	_	_
13	im	he	PRON	PRON	_	15	nsubj	_	_
14	don	have	AUX	AUX	_	15	aux	_	_
15	happen	happen	VERB	VERB	_	10	ccomp	_	_

1	be	_	_	_	_	0	_	_	_
2	my	_	_	_	_	0	_	_	_
3	team	_	_	_	_	0	_	_	_
4	I	_	_	_	_	0	_	_	_
5	CONT	_	_	_	_	0	_	_	_
6	patrol	_	_	_	_	0	_	_	_
7	naim	_	_	_	_	0	_	_	_
8	they	_	_	_	_	0	_	_	_
9	just	_	_	_	_	0	_	_	_
10	call	_	_	_	_	0	_	_	_
11	us	_	_	_	_	0	_	_	_
12	that	_	_	_	_	0	_	_	_
13	it	_	_	_	_	0	_	_	_
14	PERF	_	_	_	_	0	_	_	_
15	happen	_	_	_	_	0	_	_	_

1	It	_	_	_	_	0	_	_	_
2	was	_	_	_	_	0	_	_	_
3	my	_	_	_	_	0	_	_	_
4	team	_	_	_	_	0	_	_	_
5	,	_	_	_	_	0	_	_	_
6	I	_	_	_	_	0	_	_	_
7	was	_	_	_	_	0	_	_	_
8	on	_	_	_	_	0	_	_	_
9	patrol	_	_	_	_	0	_	_	_
10	,	_	_	_	_	0	_	_	_
11	then	_	_	_	_	0	_	_	_
12	they	_	_	_	_	0	_	_	_
13	called	_	_	_	_	0	_	_	_
14	us	_	_	_	_	0	_	_	_
15	to	_	_	_	_	0	_	_	_
16	tell	_	_	_	_	0	_	_	_
17	us	_	_	_	_	0	_	_	_
18	that	_	_	_	_	0	_	_	_
19	it	_	_	_	_	0	_	_	_
20	had	_	_	_	_	0	_	_	_
21	happened	_	_	_	_	0	_	_	_
~~~
<!-- Interlanguage links updated Út zář 29 20:43:27 CEST 2020 -->
