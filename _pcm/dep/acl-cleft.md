---
layout: relation
title: 'acl:cleft'
shortdef: 'clefted phrase modifier'
udver: '2'
---

The acl:cleft relation is used between a clefted phrase and its nominal head. When the clefted element is a clause or an adverb, we use the [ccomp:cleft]() relation instead.

Clefted elements can often be identified by the presence of the copulative particle _na_ which is described in more details on the [PART]() page. On the other hand _naim_ , which is described on the [ADV]() page, is often used as a marker in the second part of the cleft. 


~~~ conllu
# visual-style 3 7 acl:cleft	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	na	_	PART	_	_	3	cop	_	_
2	di	_	DET	_	_	3	det	_	_
3	danger	_	NOUN	_	_	0	root	_	_
4	wen	_	SCONJ	_	_	5	mark	_	_
5	dey	_	VERB	_	_	3	advcl	_
6	alcohol	_	NOUN	_	_	5	obj	_
7	be	_	VERB	_	_	3	acl:cleft	_
8	dat	_	PRON	_	_	7	nsubj	_

1	be	_	_	_	_	0	_	_	_
2	the	_	_	_	_	0	_	_	_
3	danger	_	_	_	_	0	_	_	_
4	when	_	_	_	_	0	_	_	_	
5	exist	_	_	_	_	0	_	_	_
6	alcohol	_	_	_	_	0	_	_	_	
7	be	_	_	_	_	0	_	_	_
8	that	_	_	_	_	0	_	_	_	

1	Those	_	_	_	_	0	_	_	_
2	are	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	dangers	_	_	_	_	0	_	_	_	
5	of	_	_	_	_	0	_	_	_
6	alcohol	_	_	_	_	0	_	_	_	
~~~


~~~ conllu
# visual-style 4 7 acl:cleft	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	na	na	PART	PART	_	4	cop	_	_
2	only	only	ADV	ADV	_	4	advmod	_	_
3	di	the	DET	DET	_	4	det	_	_
4	living	living	NOUN	NOUN	_	0	root	_	_
5	naim	naim	ADV	ADV	_	7	mark	_
6	dey	be	AUX	AUX	_	7	aux	_
7	celebrate	celebrate	VERB	VERB	_	4	acl:cleft	_

1	na	_	_	_	_	0	_	_	_
2	only	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	living	_	_	_	_	0	_	_	_	
5	naim	_	_	_	_	0	_	_	_
6	be	_	_	_	_	0	_	_	_	
7	celebrate	_	_	_	_	0	_	_	_

1	It	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	only	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_	
5	living	_	_	_	_	0	_	_	_
6	that	_	_	_	_	0	_	_	_	
7	can	_	_	_	_	0	_	_	_	
8	celebrate	_	_	_	_	0	_	_	_	
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:09 CET 2020 -->
