---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---


The `fixed` relation is one of the relations used for multiword expressions (MWEs). It is used for certain fixed grammaticized expressions that behave like function words or short adverbials. Fixed MWEs are annotated in a flat structure, where all subsequent words in the expression are attached to the first one using the fixed label.


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
4	say	say	VERB	VERB	_	21	advcl	_	_
5	dat	that	DET	PRON	_	6	det	_	_
6	man	man	NOUN	NOUN	_	8	dislocated	_	_
7	im	he	PRON	PRON	_	8	nsubj	_	_
8	park	park	NOUN	NOUN	_	4	ccomp	_	_
9	maybe	maybe	ADV	ADV	_	14	advmod	_	_
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
