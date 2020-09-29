---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase and functionally corresponds to an attribute, or genitive complement.
Nominal dependents of verbs, adjectives, and adverbs are covered by the [obl]() relation.

~~~ conllu
# visual-style 9 11 nmod	color:blue
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
1	É	_	CCONJ	CONcoo	_	2	cc:nc	_	_
2	vint	_	VERB	VERcjg	_	0	root	_	_
3	la	_	DET	DETdef	_	4	det	_	_
4	parole	_	NOUN	NOMcom	_	2	nsubj	_	_
5	Samuel	_	PROPN	NOMpro	_	4	nmod	_	_
6	par	_	ADP	PRE	_	9	case	_	_
7	tute	_	DET	DETind	_	9	det	_	_
8	la	_	DET	DETdef	_	9	det	_	_
9	terre	_	NOUN	NOMcom	_	2	obl	_	_
10	de	_	ADP	PRE	_	11	case	_	_
11	Israel	_	PROPN	NOMpro	_	9	nmod	_	_

~~~


In Old French, this relation is not always introduced by a preposition:

~~~ conllu
# visual-style 6 7 nmod	color:blue
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	et	_	CCONJ	CONcoo	_	2	cc:nc	_	_
2	retorne	_	VERB	VERcjg	_	0	root	_	_
3	a	_	ADP	PRE	_	4	case	_	_
4	Galaad	_	PROPN	NOMpro	_	2	obl	_	_
5	le	_	DET	DETdef	_	6	det	_	_
6	filz	_	NOUN	NOMcom	_	4	appos	_	_
7	Lancelot	_	PROPN	NOMpro	_	6	nmod	_	_
8	del	_	ADP	PRE.DETdef	_	7	flat	_	_
9	Lac	_	NOUN	NOMcom	_	7	flat	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:31:56 CEST 2020 -->
