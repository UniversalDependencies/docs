---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---


The `fixed` relation is one of the relations used for multiword expressions (MWEs). It is used for certain fixed grammaticized expressions that behave like function words or short adverbials. Fixed MWEs are annotated in a flat structure, where all subsequent words in the expression are attached to the first one using the fixed label.


Naija makes little use of the fixed relation and instead analyzes these expressions syntactically when possible. 


~~~ conllu
# visual-style 2 4 mark	color:blue
# visual-style 3 4 mark	color:blue
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
6	man	man	NOUN	NOUN	_	9	dislocated	_	_
7	now	now	ADV	ADV	_	6	advmod	_	_
8	im	he	PRON	PRON	_	9	nsubj	_	_
9	pull	pull	VERB	VERB	_	4	ccomp	_	_
10	over	over	ADP	ADP	_	9	compound:prt	_	_
11	im	he	PRON	PRON	_	12	nsubj	_	_
12	park	park	NOUN	NOUN	_	9	conj:coord	_	_
13	answer	answer	VERB	VERB	_	9	conj:coord	_	_
14	di	the	DET	DET	_	15	det	_	_
15	call	call	NOUN	NOUN	_	13	obj	_	_
16	maybe	maybe	ADV	ADV	_	21	advmod	_	_
17	di	the	DET	DET	_	28	det	_	_
18	man	man	NOUN	NOUN	_	21	nsubj	_	_
19	for	for	AUX	ADP	_	12	aux	_	_
20	no	not	PART	PART	_	21	advmod	_	_
21	die	die	VERB	VERB	_	0	root	_	_
~~~
