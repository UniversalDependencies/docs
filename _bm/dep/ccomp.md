---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

The `ccomp` link is used for clausal dependents which are core arguments, when the subject is not controlled. However, when the subject is controlled, we use the [xcomp]() link. It is used with copula like verb kó while it introduces indirect speech. If kó introduces direct speech, we use [parataxis:obj]() or [obj]().

~~~ conllu
# visual-style 2 7 ccomp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white


1	masakè	màsakɛ	NOUN	_	_	2	nsubj	_ _
2	ko	kó	VERB	_	_	0	root	_	_
3	ko	kó	SCONJ	_	_	7	mark	_	_
4	muso	mùso	NOUN	_	_	7	nsubj	_	_
5	bèè	bɛ́ɛ	DET	_	_	4	det	_	_
6	ka	ka	AUX	_	_	7	aux	_	_
7	na	nà	VERB	_	_	2	ccomp	_	_
8	ni	ni	ADP	_	_	11	case	_	_
9	u	ù	PRON	_	_	11	nmod:poss	_	_
10	ka	ka	ADP	_	_	18	case	_	_
11	buguri	bùguri	NOUN	_	_	7	obl	_	_
12	ye	yé	ADP	_	_	11	case	_	_
13	!	!	PUNCT	_	_	7	punct	_	_

'A king says that all women must come with their dust'.
~~~
