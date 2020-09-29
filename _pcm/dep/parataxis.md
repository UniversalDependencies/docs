---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

Naija does not uses `parataxis` as such, but splits it into six subrelations:

+ [parataxis:conj]() : juxtaposed clauses

~~~ conllu
# visual-style 3 9 parataxis:conj	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
1	im	he	PRON	PRON	_	3	nsubj	_	_
2	fit	can	AUX	AUX	_	3	aux	_	_
3	make	let	VERB	VERB	_	0	root	_	_
4	you	you	PRON	PRON	_	3	obj	_	_
5	loose	loose	VERB	VERB	_	3	xcomp	_	_
6	control	control	NOUN	NOUN	_	5	obj	_	_
7	im	he	PRON	PRON	_	9	nsubj	_	_
8	fit	can	AUX	AUX	_	9	aux	_	_
9	scatter	scatter	VERB	VERB	_	3	parataxis:conj	_	_
10	your	your	PRON	PRON	_	11	nmod:poss	_	_
11	mind	mind	NOUN	NOUN	_	9	obj	_	_

1	it	_	_	_	_	0	_	_	_
2	can	_	_	_	_	0	_	_	_
3	make	_	_	_	_	0	_	_	_
4	you	_	_	_	_	0	_	_	_
5	loose	_	_	_	_	0	_	_	_
6	control	_	_	_	_	0	_	_	_
7	it	_	_	_	_	0	_	_	_
8	can	_	_	_	_	0	_	_	_
9	scatter	_	_	_	_	0	_	_	_
10	your	_	_	_	_	0	_	_	_
11	mind	_	_	_	_	0	_	_	_

1	It	_	_	_	_	0	_	_	_
2	may	_	_	_	_	0	_	_	_
3	make	_	_	_	_	0	_	_	_
4	you	_	_	_	_	0	_	_	_
5	loose	_	_	_	_	0	_	_	_
6	control	_	_	_	_	0	_	_	_
7	.	_	_	_	_	0	_	_	_
8	It	_	_	_	_	0	_	_	_
9	can	_	_	_	_	0	_	_	_
10	scatter	_	_	_	_	0	_	_	_
11	your	_	_	_	_	0	_	_	_
12	mind	_	_	_	_	0	_	_	_
~~~

+ [parataxis:discourse]() : for clausal discourse markers


~~~ conllu
# visual-style 3 8 parataxis:discourse	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8 fgColor:white
1	life	life	NOUN	NOUN	_	3	nsubj	_	_
2	fit	can	AUX	AUX	_	3	aux	_	_
3	follow	follow	VERB	VERB	_	0	root	_	_
4	am	he	PRON	PRON	_	3	obj	_	_
5	at	at	ADP	ADP	_	6	case	_	_
6	time	time	NOUN	NOUN	_	3	obl:ad	_	_
7	God	God	PROPN	PROPN	_	8	nsubj	_	_
8	forbid	forbid	VERB	VERB	_	3	parataxis:discourse	_	
~~~

+ [parataxis:dislocated]() : for clauses that function like dislocations


~~~ conllu
# visual-style 9 2 parataxis:dislocated	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
1	you	you	PRON	PRON	_	2	nsubj	_	_
2	wake	wake	VERB	VERB	_	9	parataxis:dislocated	_	_
3	up	up	ADP	ADP	_	2	compound:prt	_	_
4	di	the	DET	DET	_	6	det	_	_
5	next	next	ADJ	ADJ	_	6	amod	_	_
6	morning	morning	NOUN	NOUN	_	2	obl:ad	_	_
7	come	come	AUX	VERB	_	9	aux	_	_
8	dey	be	AUX	AUX	_	9	aux	_	_
9	ask	ask	VERB	VERB	_	0	root	_	_
10	yourself	yourself	PRON	PRON	_	9	iobj	_	_
11	sey	that	SCONJ	SCONJ	_	14	mark	_	_
12	how	how	ADV	ADV	_	14	advmod	_	_
13	I	I	PRON	PRON	_	14	nsubj	_	_
14	take	take	VERB	VERB	_	9	parataxis:obj	_	_
15	reach	arrive	VERB	VERB	_	14	compound:svc	_	_
16	house	house	NOUN	NOUN	_	15	obj	_	_


1	you	_	_	_	_	0	_	_	_
2	wake 	_	_	_	_	0	_	_	_
3	up	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_	
5	next	_	_	_	_	0	_	_	_
6	morning	_	_	_	_	0	_	_	_
7	REAL	_	_	_	_	0	_	_	_	
8	CONT	_	_	_	_	0	_	_	_	
9	ask	_	_	_	_	0	_	_	_	
10	yourself	_	_	_	_	0	_	_	_	
11	how	_	_	_	_	0	_	_	_	
12	I	_	_	_	_	0	_	_	_	
13	take	_	_	_	_	0	_	_	_	
14	reach	_	_	_	_	0	_	_	_	
15	house	_	_	_	_	0	_	_	_	

1	you	_	_	_	_	0	_	_	_
2	wake	_	_	_	_	0	_	_	_
3	up	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_	
5	next	_	_	_	_	0	_	_	_
6	morning	_	_	_	_	0	_	_	_
7	asking	_	_	_	_	0	_	_	_	
8	yourself	_	_	_	_	0	_	_	_	
9	"	_	_	_	_	0	_	_	_	
10	how	_	_	_	_	0	_	_	_	
11	did	_	_	_	_	0	_	_	_	
12	I	_	_	_	_	0	_	_	_	
13	get	_	_	_	_	0	_	_	_	
14	home	_	_	_	_	0	_	_	_	
15	"	_	_	_	_	0	_	_	_
16	?	_	_	_	_	0	_	_	_

~~~

+ [parataxis:insert]() :  inserts
+ [parataxis:obj]() :  direct speech

~~~ conllu
# visual-style 2 6 parataxis:obj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	dem	they	PRON	PRON	_	2	nsubj	_	_
2	say	say	VERB	VERB	_	0	root	_	_
3	"ah"	"ah"	INTJ	INTJ	_	6	discourse	_	_
4	"ah"	"ah"	INTJ	INTJ	_	3	goeswith	_	_
5	who	who	PRON	PRON	_	6	nsubj	_	_
6	kill	kill	VERB	VERB	_	2	parataxis:obj	_	_
7	dis	this	DET	DET	_	8	det	_	_
8	animal	animal	NOUN	NOUN	_	6	obj	_	_


1	They	_	_	_	_	0	_	_	_
2	say	_	_	_	_	0	_	_	_
3	ah	_	_	_	_	0	_	_	_
4	ah	_	_	_	_	0	_	_	_
5	who	_	_	_	_	0	_	_	_
6	kill	_	_	_	_	0	_	_	_
7	this	_	_	_	_	0	_	_	_
8	animal	_	_	_	_	0	_	_	_

1	They	_	_	_	_	0	_	_	_
2	say	_	_	_	_	0	_	_	_
3	"ah"	_	_	_	_	0	_	_	_
4	"ah"	_	_	_	_	0	_	_	_
5	who	_	_	_	_	0	_	_	_
6	killed	_	_	_	_	0	_	_	_
7	this	_	_	_	_	0	_	_	_
8	animal	_	_	_	_	0	_	_	_

~~~

+ [parataxis:parenth]() : parentheticals

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


<!-- Interlanguage links updated Út zář 29 20:23:42 CEST 2020 -->
