9---
layout: relation
title: 'ccomp:cleft'
shortdef: 'ccomp:cleft'
udver: '2'
---

The ccomp:cleft relation is used between a clefted clause or a clefted adverb and its head.


~~~ conllu
# visual-style 2 5 ccomp:cleft	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	na	_	PART	_	_	2	mark	_	_
2	so	_	ADV	_	_	0	root	_	_
3	di	_	DET	_	_	4	det	_	_
4	bleed	_	NOUN	_	_	6	nsubj	_	_
5	go	_	AUX	_	_	6	aux	_
6	continue	_	VERB	_	_	2	ccomp:cleft	_
7	till	_	ADP	_	_	11	mark	_
8	di	_	DET	_	_	9	det	_
9 person	_	NOUN	_	_	11	nsubj	_
10	go	_	AUX	_	_	11	aux	_
11	die	_	VERB	_	_	7	nsubj	_

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
11 dies	_	_	_	_	0	_	_	_	
~~~
