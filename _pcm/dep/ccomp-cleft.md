---
layout: relation
title: 'ccomp:cleft'
shortdef: 'ccomp:cleft'
udver: '2'
---

The `ccomp:cleft` relation is used between a clefted clause or adverb and its head. When the clefted element is nominal however, we use the [acl:cleft]() relation. In Naija clefts are used for focalization.

Clefted elements can often be identified by the presence of the copulative particle _na_ which is described in more details on the [PART]() page. On the other hand _naim_ , which is described on the [ADV]() page, is often used as a marker in the second part of the cleft. 

~~~ conllu
# visual-style 2 6 ccomp:cleft	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	na	be	PART	PART	_	2	cop	_	_
2	so	how	ADV	ADV	_	0	root	_	_
3	di	the	DET	DET	_	4	det	_	_
4	bleed	bleeding	NOUN	NOUN	_	6	nsubj	_	_
5	go	will	AUX	AUX	_	6	aux	_	_
6	continue	continue	VERB	VERB	_	2	ccomp:cleft	_	_
7	till	till	SCONJ	SCONJ	_	11	mark	_	_
8	di	the	DET	DET	_	9	det	_	_
9	person	person	NOUN	NOUN	_	11	nsubj	_	_
10	go	will	AUX	AUX	_	11	aux	_	_
11	die	die	VERB	VERB	_	6	advcl	_	_


1	be	_	_	_	_	0	_	_	_
2	how 	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	bleeding	_	_	_	_	0	_	_	_	
5	will	_	_	_	_	0	_	_	_
6	continue	_	_	_	_	0	_	_	_
7	till	_	_	_	_	0	_	_	_	
8	the	_	_	_	_	0	_	_	_	
9	person	_	_	_	_	0	_	_	_	
10	will	_	_	_	_	0	_	_	_	
11	die	_	_	_	_	0	_	_	_	

1	That	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	how	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_	
5	bleeding	_	_	_	_	0	_	_	_
6	will	_	_	_	_	0	_	_	_
7	continue	_	_	_	_	0	_	_	_	
8	till	_	_	_	_	0	_	_	_	
9	the	_	_	_	_	0	_	_	_	
10	person	_	_	_	_	0	_	_	_	
11	dies	_	_	_	_	0	_	_	_	

~~~


<!-- Interlanguage links updated St lis 3 20:58:44 CET 2021 -->
