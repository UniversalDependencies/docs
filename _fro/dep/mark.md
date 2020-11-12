---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---
A marker, `mark`, is the word introducing a finite clause subordinate to another clause,  the mark is a dependent of the subordinate clause head.


~~~ conllu
# visual-style 7 4 mark	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	Jo	_	PRON	PROper	_	3	nsubj	_	_
2	vos	_	PRON	PROper	_	3	iobj	_	_
3	cumant	_	VERB	VERcjg	_	0	root	_	_
4	qu'	_	SCONJ	CONsub	_	7	mark	_	_
5	en	_	ADP	PRE	_	6	case	_	_
6	Sarraguce	_	PROPN	NOMpro	_	7	obl	_	_
7	algez	_	VERB	VERcjg	_	3	ccomp	_	_

~~~

If the word introducing a non finite clause is a preposition, this word is `mark`, and not `case`.

~~~ conllu
# visual-style 7 4 mark	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	si	_	ADV	ADVgen	_	2	advmod	_	_
2	cumencet	_	VERB	VERcjg	_	0	root	_	_
3	a	_	ADP	PRE	_	4	mark	_	_
4	penser	_	VERB	VERinf	_	2	xcomp	_	_

~~~
<!-- Interlanguage links updated Čt lis 12 09:43:29 CET 2020 -->
