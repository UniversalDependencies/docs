---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

`ccomp`, is a clausal complement of a verb or adjective, and is a dependent clause which is a core argument. That is, it functions like an object of the verb, or adjective. Such clausal complements may be finite or nonfinite. 

~~~ conllu
# visual-style 3 6 ccomp	color:blue
# visual-style 6 13 ccomp	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	car	_	CCONJ	CONcoo	_	3	cc:nc	_	_
2	je	_	PRON	PROper	_	3	nsubj	_	_
3	voil	_	VERB	VERcjg	_	0	root	_	_
4	que	_	SCONJ	CONsub	_	6	mark	_	_
5	vos	_	PRON	PROper	_	6	nsubj	_	_
6	sachiez	_	VERB	VERcjg	_	3	ccomp	_	_
7	qu'	_	SCONJ	CONsub	_	13	mark	_	_
8	en	_	ADP	PRE	_	10	case	_	_
9	cest	_	DET	DETdem	_	10	det	_	_
10	jor	_	NOUN	NOMcom	_	13	obl	_	_
11	d'	_	ADP	PRE	_	12	case	_	_
12	ui	_	ADV	ADVgen	_	10	advmod	_	_
13	comenceront	_	VERB	VERcjg	_	6	ccomp	_	_
14	les	_	DET	DETdef	_	16	det	_	_
15	granz	_	ADJ	ADJqua	_	16	amod	_	_
16	aventures	_	NOUN	NOMcom	_	13	nsubj	_	_
17	et	_	CCONJ	CONcoo	_	20	cc	_	_
18	les	_	DET	DETdef	_	20	det	_	_
19	granz	_	ADJ	ADJqua	_	20	amod	_	_
20	merveilles	_	NOUN	NOMcom	_	16	conj	_	_
21	dou	_	ADP	PRE.DETdef	_	23	case:det	_	_
22	saint	_	ADJ	ADJqua	_	23	amod	_	_
23	Graal	_	PROPN	NOMpro	_	20	nmod	_	_

~~~

However, if the clausal complement has no subject, the appropriate relation is `xcomp`.
<!-- Interlanguage links updated St lis 3 20:58:43 CET 2021 -->
