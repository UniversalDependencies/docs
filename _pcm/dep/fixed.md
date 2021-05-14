---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---


The `fixed` relation is one of the relations used for multiword expressions (MWEs). It is used for certain fixed grammaticized expressions that behave like function words or short adverbials. Fixed MWEs are annotated in a flat structure, where all subsequent words in the expression are attached to the first one using the fixed label.

~~~ conllu
# visual-style 1 2 fixed	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
1	so	so	SCONJ	SCONJ	_	6	mark	_	_
2	dat	that	SCONJ	PRON	_	1	fixed	_	_
3	you	you	PRON	PRON	_	6	nsubj	_	_
4	no	not	PART	PART	_	6	advmod	_	_
5	go	will	AUX	AUX	_	6	aux	_	_
6	enter	enter	VERB	VERB	_	0	root	_	_
7	mouth	mouth	NOUN	NOUN	_	6	obj	_	_
8	of	of	ADP	ADP	_	10	case	_	_
9	anoder	another	DET	DET	_	10	det	_	_
10	car	car	NOUN	NOUN	_	7	nmod	_	_

1	so	_	_	_	_	0	_	_	_
2	that	_	_	_	_	0	_	_	_
3	you	_	_	_	_	0	_	_	_
4	not	_	_	_	_	0	_	_	_
5	will	_	_	_	_	0	_	_	_
6	enter	_	_	_	_	0	_	_	_
7	mouth	_	_	_	_	0	_	_	_
8	of	_	_	_	_	0	_	_	_
9	another	_	_	_	_	0	_	_	_
10	car	_	_	_	_	0	_	_	_

1	so	_	_	_	_	0	_	_	_
2	that	_	_	_	_	0	_	_	_
3	you	_	_	_	_	0	_	_	_
4	won't	_	_	_	_	0	_	_	_
5	enter	_	_	_	_	0	_	_	_
6	the	_	_	_	_	0	_	_	_
7	way	_	_	_	_	0	_	_	_
8	of	_	_	_	_	0	_	_	_
9	another	_	_	_	_	0	_	_	_
10	car	_	_	_	_	0	_	_	_
~~~

Naija makes little use of the fixed relation and instead analyzes these expressions syntactically when possible. 


~~~ conllu
# visual-style 4 2 mark	color:blue
# visual-style 4 3 mark	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	but	but	CCONJ	CCONJ	_	21	cc	_	_
2	if	if	SCONJ	SCONJ	_	4	mark	_	_
3	to	to	PART	ADP	_	4	mark	_	_
4	say	say	VERB	VERB	_	13	advcl	_	_
5	dat	that	DET	PRON	_	6	det	_	_
6	man	man	NOUN	NOUN	_	8	dislocated	_	_
7	im	he	PRON	PRON	_	8	nsubj	_	_
8	park	park	NOUN	NOUN	_	4	ccomp	_	_
9	maybe	maybe	ADV	ADV	_	13	advmod	_	_
10	im	he	PRON	PRON	_	13	nsubj	_	_
11	for	for	AUX	ADP	_	13	aux	_	_
12	no	not	PART	PART	_	13	advmod	_	_
13	die	die	VERB	VERB	_	0	root	_	_

1	but	_	_	_	_	0	_	_	_
2	if	_	_	_	_	0	_	_	_
3	to	_	_	_	_	0	_	_	_
4	say	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_
6	man	_	_	_	_	0	_	_	_
7	he	_	_	_	_	0	_	_	_
8	park	_	_	_	_	0	_	_	_
9	maybe	_	_	_	_	0	_	_	_
10	he	_	_	_	_	0	_	_	_
11	would	_	_	_	_	0	_	_	_
12	not	_	_	_	_	0	_	_	_
13	die	_	_	_	_	0	_	_	_

1	But	_	_	_	_	0	_	_	_
2	if	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	man	_	_	_	_	0	_	_	_
5	had	_	_	_	_	0	_	_	_
6	parked	_	_	_	_	0	_	_	_
7	maybe	_	_	_	_	0	_	_	_
8	he	_	_	_	_	0	_	_	_
9	wouldn't	_	_	_	_	0	_	_	_
10	have	_	_	_	_	0	_	_	_
11	died	_	_	_	_	0	_	_	_
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:05 CEST 2021 -->
