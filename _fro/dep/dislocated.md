---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used for fronted or postposed elements. 
The dislocated elements are attached to the same governor as the dependent that they double for. 

~~~ conllu
# visual-style 7 2 dislocated	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	Li	_	DET	DETdef	_	2	det	_	_
2	quens	_	NOUN	NOMcom	_	7	dislocated	_	_
3	Rollant	_	PROPN	NOMpro	_	2	flat	_	_
4	il	_	PRON	PROper	_	7	nsubj	_	_
5	est	_	VERB	VERcjg	_	7	cop	_	_
6	mult	_	ADV	ADVgen	_	7	advmod	_	_
7	irascut	_	VERB	VERppe	_	0	root	_	_

~~~

~~~ conllu
# visual-style 4 6 dislocated	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	Ceste	_	DET	DETdem	_	2	det	_	_
2	parole	_	NOUN	NOMcom	_	4	obj	_	_
3	ot	_	VERB	VERcjg	_	4	aux	_	_
4	escoutee	_	VERB	VERppe	_	0	root	_	_
5	Li	_	DET	DETdef	_	6	det	_	_
6	seneschax	_	NOUN	NOMcom	_	4	dislocated	_	_
7	il	_	PRON	PROper	_	4	nsubj	_	_
8	et	_	CCONJ	CONcoo	_	10	cc	_	_
9	ses	_	DET	DETpos	_	10	det	_	_
10	frere	_	NOUN	NOMcom	_	7	conj	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:43:17 CEST 2020 -->
