---
layout: relation
title: 'obj'
shortdef: 'object'
udver: '2'
---

The object (`obj`) of a verb is the second most core argument of a verb before or after the subject. This argument is nominal (noun or pronoun).
(See [ccomp]() for when the object is clausal.)

~~~ conllu
# visual-style 4 2 obj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	La	_	DET	DETdef	_	2	det	_	_
2	main	_	NOUN	NOMcom	_	4	obj	_	_
3	destre	_	ADJ	ADJqua	_	2	amod	_	_
4	leva	_	VERB	VERcjg	_	0	root	_	_
5	adonques	_	ADV	ADVgen	_	4	advmod	_	_
6	La	_	DET	DETdef	_	7	det	_	_
7	dame	_	NOUN	NOMcom	_	4	nsubj	_	_

~~~

~~~ conllu
# visual-style 9 2 obj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
1	Se	_	ADV	ADVgen	_	9	advmod	_	_
2	l'	_	PRON	PROper	_	9	obj	_	_
3	eut	_	VERB	VERcjg	_	9	aux	_	_
4	en	_	ADP	PRE	_	6	case	_	_
5	l'	_	DET	DETdef	_	6	det	_	_
6	angle	_	NOUN	NOMcom	_	9	obl	_	_
7	a	_	ADP	PRE	_	8	case	_	_
8	force	_	NOUN	NOMcom	_	9	obl	_	_
9	mis	_	VERB	VERppe	_	0	root	_	_

~~~


Note that sometimes, a contraction (or portmanteau words) is produced by joining together object pronouns with adverbs of negation.


~~~ conllu
# visual-style 7 6 obj	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	Que	_	CCONJ	CONcoo	_	7	cc:nc	_	_
2	ja	_	ADV	ADVgen	_	7	advmod	_	_
3	par	_	ADP	PRE	_	4	case	_	_
4	moi	_	PRON	PROper	_	7	obl	_	_
5	nus	_	PRON	PROind	_	7	nsubj	_	_
6	nel	_	PRON	ADVneg.PROper	_	7	obj	_	_
7	savra	_	VERB	VERcjg	_	0	root	_	_

~~~
<!-- Interlanguage links updated St lis 3 20:59:03 CET 2021 -->
