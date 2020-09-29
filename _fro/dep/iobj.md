---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object (`iobj`) of a verb is any nominal phrase that is a core argument of the verb but is not its subject or direct object. 

~~~ conllu
# visual-style 5 4 iobj	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	De	_	ADP	PRE	_	2	case	_	_
2	Sarraguce	_	PROPN	NOMpro	_	7	nmod	_	_
3	ci	_	ADV	ADVgen	_	5	advmod	_	_
4	vos	_	PRON	PROper	_	5	iobj	_	_
5	aport	_	VERB	VERcjg	_	0	root	_	_
6	les	_	DET	DETdef	_	7	det	_	_
7	clefs	_	NOUN	NOMcom	_	5	obj	_	_

~~~


For nominal dependents of verbs, adjectives, and adverbs, it gets analyzed with the `obl` relation:

~~~ conllu
# visual-style 2 4 obl	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	Il	_	PRON	PROper	_	2	nsubj	_	_
2	dist	_	VERB	VERcjg	_	0	root	_	_
3	al	_	ADP	PRE.DETdef	_	4	case	_	_
4	rei	_	NOUN	NOMcom	_	2	obl	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:31:54 CEST 2020 -->
