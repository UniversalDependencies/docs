---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

The `ccomp` link is used for clausal dependents which are core arguments, when the subject is not controlled. When the subject is controlled, we use the [xcomp]() link. 

~~~ conllu
# visual-style 4 7 ccomp        color:blue
# visual-style 4        bgColor:blue
# visual-style 4        fgColor:white
# visual-style 7        bgColor:blue
# visual-style 7        fgColor:white
1	ale	_	PRON	_	_	4	nsubj	_	_
2	ye	_	AUX	_	_	4	aux	_	_
3	a	_	PRON	_	_	4	obj	_	_
4	mèn	_	VERB	_	_	0	root	_	_
5	,	_	PUNCT	_	_	4	punct	_	_
6	kòròkè	_	NOUN	_	_	7	nsubj	_	_
7	kèra	_	VERB	_	_	4	ccomp	_	_
8	jòn	_	NOUN	_	_	7	obl	_	_
9	ye	_	ADP	_	_	8	case	_	_
10	.	_	PUNCT	_	_	4	punct	_	_

~~~
'He heared that an older brother became a slave'. 

This  is also used with copula like verb _kó_ while it introduces indirect speech. If _kó_ introduces direct speech, we use [parataxis:obj](). In fact, borders between (in)direct speech in Mande languages are often vague. Still, we decided to annotate the difference when it is possible.

~~~ conllu
# visual-style 2 7 ccomp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	masakè	màsakɛ	NOUN	_	_	2	nsubj	_	_
2	ko	kó	VERB	_	_	0	root	_	_
3	ko	kó	PART	_	_	7	discourse	_	_
4	muso	mùso	NOUN	_	_	7	nsubj	_	_
5	bèè	bɛ́ɛ	DET	_	_	4	det	_	_
6	ka	ka	AUX	_	_	7	aux	_	_
7	na	nà	VERB	_	_	2	ccomp	_	_
8	yen	yèn	ADV	_	_	7	obl	_	_
9	!	!	PUNCT	_	_	7	punct	_	_

~~~
'A king says that all women must come with their dust'.
<!-- Interlanguage links updated Út zář 29 20:43:11 CEST 2020 -->
