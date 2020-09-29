---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used between a dislocated phrase and its head. A constituent (argument or adjunct) is dislocated when it is found outside the boundaries of the clause it belongs to.

~~~ conllu
# visual-style 5 2 dislocated	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5 fgColor:white
1	one	one	DET	DET	_	2	det	_	_
2	man	man	NOUN	NOUN	_	5	dislocated	_	_
3	im	he	PRON	PRON	_	5	nsubj	_	_
4	dey	dey	AUX	AUX	_	5	aux	_	_
5	drive	drive	VERB	VERB	_	0	root	_	_

1	one	_	_	_	_	0	_	_	_
2	man	_	_	_	_	0	_	_	_
3	he	_	_	_	_	0	_	_	_
4	be	_	_	_	_	0	_	_	_	
5	drive	_	_	_	_	0	_	_	_

1	one	_	_	_	_	0	_	_	_
2	man	_	_	_	_	0	_	_	_
3	he	_	_	_	_	0	_	_	_
4	was	_	_	_	_	0	_	_	_	
5	driving	_	_	_	_	0	_	_	_
~~~


The dislocated constituent is replicated by the _am_ pronoun. The pronominalized constituent plays the role of object for the verb cause:

~~~ conllu
# visual-style 12 3 dislocated	color:blue
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3 fgColor:white
1	fifty	fifty	NUM	NUM	_	2	compound	_	_
2	eight	eight	NUM	NUM	_	3	nummod	_	_
3	percent	percent	NOUN	NOUN	_	12	dislocated	_	_
4	of	of	ADP	ADP	_	5	case	_	_
5	accident	accident	NOUN	NOUN	_	3	nmod	_	_
6	wey	where	SCONJ	SCONJ	_	8	mark	_	_
7	im	he	PRON	PRON	_	8	nsubj	_	_
8	happen	happen	VERB	VERB	_	5	acl:relcl	_	_
9	for	for	ADP	ADP	_	10	case	_	_
10	road	road	NOUN	NOUN	_	8	obl:ad	_	_
11	na	na	PART	PART	_	12	cop	_	_
12	overspeeding	overspeeding	NOUN	NOUN	_	0	root	_	_
13	naim	naim	ADV	ADV	_	15	mark	_	_
14	dey	be	AUX	AUX	_	15	aux	_	_
15	cause	cause	VERB	VERB	_	12	acl:cleft	_	_
16	am	he	PRON	PRON	_	15	obj	_	_

1	fifty	_	_	_	_	0	_	_	_
2	eight	_	_	_	_	0	_	_	_
3	percent	_	_	_	_	0	_	_	_
4	of	_	_	_	_	0	_	_	_	
5	accident	_	_	_	_	0	_	_	_
6	that	_	_	_	_	0	_	_	_
7	it	_	_	_	_	0	_	_	_
8	happen	_	_	_	_	0	_	_	_
9	on	_	_	_	_	0	_	_	_	
10	road	_	_	_	_	0	_	_	_
11	be	_	_	_	_	0	_	_	_
12	overspeeding	_	_	_	_	0	_	_	_
13	naim	_	_	_	_	0	_	_	_
14	be	_	_	_	_	0	_	_	_	
15	cause	_	_	_	_	0	_	_	_
16	it	_	_	_	_	0	_	_	_

1	And	_	_	_	_	0	_	_	_
2	we	_	_	_	_	0	_	_	_
3	have	_	_	_	_	0	_	_	_
4	discovered	_	_	_	_	0	_	_	_	
5	that	_	_	_	_	0	_	_	_
6	fifty	_	_	_	_	0	_	_	_
7	eight	_	_	_	_	0	_	_	_
8	percent	_	_	_	_	0	_	_	_
9	of	_	_	_	_	0	_	_	_	
10	all	_	_	_	_	0	_	_	_
11	the	_	_	_	_	0	_	_	_
12	accidents	_	_	_	_	0	_	_	_
13	that	_	_	_	_	0	_	_	_
14	happen	_	_	_	_	0	_	_	_	
15	on	_	_	_	_	0	_	_	_
16	the	_	_	_	_	0	_	_	_
17	road	_	_	_	_	0	_	_	_
18	is	_	_	_	_	0	_	_	_
19	caused	_	_	_	_	0	_	_	_
20	by	_	_	_	_	0	_	_	_
21	overspeeding	_	_	_	_	0	_	_	_	
~~~

Note that in Naija the [parataxis:dislocated]() relation was introduced for pre-nucleus clauses that function like dislocations.  
<!-- Interlanguage links updated Út zář 29 20:23:30 CEST 2020 -->
