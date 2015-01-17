---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---

An appositional modifier of an NP is an NP immediately to the right of the first NP that serves to define or modify that NP. It also includes parenthesized examples.


~~~ sdparse
Tá gearán déanta ag Unison , ceardchumann lucht na mbónaí bána , leis an gCoimisiún
\n There is a complain made by Unison, the white-collar trade union, to the Commission.
nsubj(Tá, gearán)
xcomp:pred(Tá, déanta)
nmod(déanta, Unison)
case(Unison, ag)
punct(ceardchumann, ,)
appos(Unison, ceardchumann)
compound(ceardchumann, lucht)
compound(lucht, mbónaí)
amod(mbónaí, bána)
punct(leis, ,)
nmod(déanta, gCoimisiún)
det(gCoimisiún, an)
case(gCoimisiún, leis)
~~~

~~~ conllx
1	Chas	Cas	PROPN	PROPN	_	0	root	_	_
2	m'	mo	DET	DET	_	3	nmod:poss	_	_
3	athair	athair	NOUN	NOUN	_	1	nsubj	_	_
4	air	ar	ADP	ADP	_	1	nmod:prep	_	_
5	sa	i	ADP	ADP	_	6	case	_	_
6	tábhairne	tábhairne	NOUN	NOUN	_	1	nmod	_	_
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	O'	O'	PART	PART	_	9	name	_	_
9	Shea's	Shea's	PROPN	PROPN	_	6	appos	_	_
10	i	i	ADP	ADP	_	11	case	_	_
11	nDomhnach	Domhnach	NOUN	NOUN	_	9	nmod	_	_
12	Broc	Broc	PROPN	PROPN	_	11	compound	_	_
~~~
