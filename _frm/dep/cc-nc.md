---
layout: relation
title: 'cc:nc'
shortdef: 'coordinated conjunct : non coordonant'
udver: '2'
---
 
The `cc:nc` relation concerns coordinating conjunctions that do not actually have a coordinating job.

It is often the case at the beginning of the sentence, and for the first element of a polysyndeton.

~~~ conllu
# visual-style 3 1 nsubj	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	et	et	CCONJ	CONcoo	_	5	cc:nc	_	_
2	de	de	ADP	PRE	_	3	case	_	_
3	puis	puis	ADV	ADVgen	_	5	advmod	_	_
4	fu	être	AUX	VERcjg	VerbForm=Fin	5	cop	_	_
5	femme	femme	NOUN	NOMcom	_	0	root	_	_
6	du	de.le	ADP	PRE.DETdef	_	7	case:det	_	_
7	duc	duc1	NOUN	NOMcom	_	5	nmod	_	_
8	de	de	ADP	PRE	_	9	case	_	_
9	Bar	Bar	PROPN	NOMpro	_	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PONfrt	_	5	punct	_	_

~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:33 CET -->
