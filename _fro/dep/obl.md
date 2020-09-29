---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---
The `obl` relation is used for a nominal dependent (noun, pronoun, noun phrase) of a verb (or main predicate). 
This concerns different cases of prepositional groups, and more generally, it corresponds to an adverbial attaching to a verb, adjective or other adverb.

~~~ conllu
# visual-style 1 5 obl	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
1	Vint	_	VERB	VERcjg	_	0	root	_	_
2	s'	_	PRON	PROper	_	1	expl	_	_
3	en	_	ADV	PROadv	_	1	advmod	_	_
4	al	_	ADP	PRE.DETdef	_	5	case	_	_
5	tabernacle	_	NOUN	NOMcom	_	1	obl	_	_

~~~


This relation is used when the dependent is a core argument of the verb, in the case of double object construction.

~~~ conllu
# visual-style 3 5 obl	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	et	_	CCONJ	CONcoo	_	3	cc:nc	_	_
2	ele	_	PRON	PROper	_	3	nsubj	_	_
3	dunet	_	VERB	VERcjg	_	0	root	_	_
4	a	_	ADP	PRE	_	5	case	_	_
5	hume	_	NOUN	NOMcom	_	3	obl	_	_
6	ki	_	PRON	PROrel	_	8	nsubj	_	_
7	la	_	PRON	PROper	_	8	obj	_	_
8	portet	_	VERB	VERcjg	_	5	acl:relcl	_	_
9	sur	_	ADP	PRE	_	10	case	_	_
10	sei	_	PRON	PROper	_	8	obl	_	_
11	force	_	NOUN	NOMcom	_	3	obj	_	_
12	et	_	CCONJ	CONcoo	_	13	cc	_	_
13	vertut	_	NOUN	NOMcom	_	11	conj	_	_

~~~


It can also be used for temporal and locational nominal modifiers:

~~~ conllu
# visual-style 3 7 obl	color:blue
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	si	_	ADV	ADVgen	_	3	advmod	_	_
2	la	_	PRON	PROper	_	3	obj	_	_
3	trovet	_	VERB	VERcjg	_	0	root	_	_
4	l'	_	DET	DETdef	_	5	det	_	_
5	um	_	PRON	PROind	_	3	nsubj	_	_
6	en	_	ADP	PRE	_	7	case	_	_
7	Indie	_	PROPN	NOMpro	_	3	obl	_	_

~~~

<!-- Interlanguage links updated Út zář 29 20:23:40 CEST 2020 -->
