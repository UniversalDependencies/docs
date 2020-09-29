---
layout: relation
title: 'orphan'
redirect_from: "fro/dep/remnant.html"
shortdef: 'remnant in ellipsis'
udver: '2'
---

The `orphan` relation is used in cases of head ellipsis where simple promotion would result in unnatural and misleading dependency relation. The typical case is predicate ellipsis where one of the core arguments have to be promoted to clausal head.

~~~ conllu
# visual-style 15 16 orphan	color:blue
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
1	Il	_	PRON	PROimp	_	2	expl	_	_
2	avint	_	VERB	VERcjg	_	0	root	_	_
3	en	_	ADP	PRE	_	5	case	_	_
4	ichel	_	DET	DETdem	_	5	det	_	_
5	tans	_	NOUN	NOMcom	_	2	obl	_	_
6	que	_	PRON	PROrel	_	11	mark	_	_
7	li	_	DET	DETdef	_	8	det	_	_
8	papes	_	NOUN	NOMcom	_	11	nsubj	_	_
9	Innocens	_	PROPN	NOMpro	_	8	flat	_	_
10	estoit	_	VERB	VERcjg	_	11	cop	_	_
11	apostoiles	_	NOUN	NOMcom	_	2	advcl	_	_
12	de	_	ADP	PRE	_	13	case	_	_
13	Roume	_	PROPN	NOMpro	_	11	nmod	_	_
14	et	_	CCONJ	CONcoo	_	15	cc	_	_
15	Phelippes	_	PROPN	NOMpro	_	11	conj	_	_
16	rois	_	NOUN	NOMcom	_	15	orphan	_	_
17	de	_	ADP	PRE	_	18	case	_	_
18	Franche	_	PROPN	NOMpro	_	16	nmod	_	_

~~~
<!-- Interlanguage links updated Út zář 29 18:41:33 CEST 2020 -->
