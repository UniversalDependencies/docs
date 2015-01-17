---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---

An appositional modifier of an NP is an NP immediately to the right of the first NP that serves to define or modify that NP. It also includes parenthesized examples.


~~~sdparse
1	Tá	bí	VERB	VERB	_	0	root	_	_
2	gearán	gearán	NOUN	NOUN	_	1	nsubj	_	_
3	déanta	déanta	ADJ	ADJ	_	1	xcomp:pred	_	_
4	ag	ag	ADP	ADP	_	5	case	_	_
5	Unison	Unison	PROPN	PROPN	_	3	nmod	_	_
6	,	,	PUNCT	PUNCT	_	7	punct	_	_
7	ceardchumann	ceardchumann	NOUN	NOUN	_	5	appos	_	_
8	lucht	lucht	NOUN	NOUN	_	7	compound	_	_
9	na	na	DET	DET	_	10	det	_	_
10	mbónaí	bóna	NOUN	NOUN	_	8	compound	_	_
11	bána	bán	ADJ	ADJ	_	10	amod	_	_
12	,	,	PUNCT	PUNCT	_	3	punct	_	_
13	leis	le	ADP	ADP	_	15	case	_	_
14	an	an	DET	DET	_	15	det	_	_
15	gCoimisiún	gcoimisiún	NOUN	NOUN	_	12	nmod	_	_
\n There is a complain made by Unison, the white-collar trade union, to the Commission.
~~~
