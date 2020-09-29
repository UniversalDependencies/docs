---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An `appos` (appositional modifier) of a noun is a nominal following the first noun that serves to define, modify, name, or describe that noun.

~~~ conllu
# visual-style 2 4 appos	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	Sire	_	NOUN	NOMcom	_	6	vocative	_	_
2	Andromes	_	PROPN	NOMpro	_	6	nsubj	_	_
3	li	_	DET	DETdef	_	4	det	_	_
4	empereres	_	NOUN	NOMcom	_	2	appos	_	_
5	est	_	VERB	VERcjg	_	6	cop	_	_
6	muchiés	_	VERB	VERppe	_	0	root	_	_
7	chaiens	_	ADV	ADVgen	_	6	advmod	_	_

~~~

Titles/honorifics are analyzed using the `flat`, if a title is before a proper name :

~~~ conllu
# visual-style 3 4 flat	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	et	_	CCONJ	CONcoo	_	5	cc:nc	_	_
2	mes	_	DET	DETpos	_	3	det	_	_
3	sires	_	NOUN	NOMcom	_	5	nsubj	_	_
4	Keus	_	PROPN	NOMpro	_	3	flat	_	_
5	dist	_	VERB	VERcjg	_	0	root	_	_
6	au	_	ADP	PRE.DETdef	_	7	case:det	_	_
7	roi	_	NOUN	NOMcom	_	5	obl	_	_

~~~


Titles/honorifics are considered `appos`, if the title is a modifier of a proper name.


~~~ conllu
# visual-style 6 7 flat	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11 13 appos	color:blue
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
1	Adont	_	ADV	ADVgen	_	4	advmod	_	_
2	si	_	ADV	ADVgen	_	4	advmod	_	_
3	fu	_	VERB	VERcjg	_	4	cop	_	_
4	croisiés	_	VERB	VERppe	_	0	root	_	_
5	li	_	DET	DETdef	_	6	det	_	_
6	cuens	_	NOUN	NOMcom	_	4	nsubj	_	_
7	Thiebaus	_	PROPN	NOMpro	_	6	flat	_	_
8	de	_	ADP	PRE	_	7	flat	_	_
9	Champaingne	_	PROPN	NOMpro	_	7	flat	_	_
10	et	_	CCONJ	CONcoo	_	11	cc	_	_
11	Bauduins	_	PROPN	NOMpro	_	6	conj	_	_
12	li	_	DET	DETdef	_	13	det	_	_
13	cuens	_	NOUN	NOMcom	_	11	appos	_	_
14	de	_	ADP	PRE	_	15	case	_	_
15	Flandres	_	PROPN	NOMpro	_	13	nmod	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:18 CEST 2020 -->
