---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a predicative or clausal complement without its own subject. The reference of the subject is necessarily determined by an argument external to the xcomp

~~~ conllu
# visual-style 3 4 xcomp	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	Devers	_	ADP	PRE	_	2	case	_	_
2	Ardene	_	PROPN	NOMpro	_	3	obl	_	_
3	vit	_	VERB	VERcjg	_	0	root	_	_
4	venir	_	VERB	VERinf	_	3	xcomp	_	_
5	uns	_	DET	DETndf	_	6	det	_	_
6	leuparz	_	NOUN	NOMcom	_	3	obj	_	_

~~~

~~~ conllu
# visual-style 3 5 xcomp	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	En	_	ADP	PRE	_	2	case	_	_
2	France	_	PROPN	NOMpro	_	3	obl	_	_
3	irat	_	VERB	VERcjg	_	0	root	_	_
4	Carlemagne	_	PROPN	NOMpro	_	5	obj	_	_
5	querant	_	VERB	VERppa	_	3	xcomp	_	_

~~~

The xcomp relation is also used in constructions that are known as secondary predicates or predicatives.

~~~ conllu
# visual-style 2 3 xcomp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	Sin	_	PRON	ADVgen.PROper	_	2	advmod	_	_
2	getat	_	VERB	VERcjg	_	0	root	_	_
3	mort	_	VERB	VERppe	_	2	xcomp	_	_
4	Malpalin	_	PROPN	NOMpro	_	2	obj	_	_
5	de	_	ADP	PRE	_	4	flat	_	_
6	Nerbone	_	PROPN	NOMpro	_	4	flat	_	_

~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:23 CEST 2021 -->
