---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---

An appositional modifier of an NP is an NP immediately to the right of the first NP that serves to define or modify that NP. It also includes parenthesized examples.

### Examples: 

_Tá gearán déanta ag Unison , <b>ceardchumann</b> lucht na mbónaí bána , leis an gCoimisiún_ 
 `There is a complain made by Unison, the white-collar <b>trade union</b>, to the Commission'

~~~ sdparse
nsubj(Tá, gearán)
xcomp:pred(Tá, déanta)
nmod(déanta, Unison)
case(Unison, ag)
punct(ceardchumann, ,-6)
appos(Unison, ceardchumann)
compound(ceardchumann, lucht)
compound(lucht, mbónaí)
det(mbónaí, na)
amod(mbónaí, bána)
punct(leis, ,-12)
nmod(déanta, gCoimisiún)
det(gCoimisiún, an)
case(gCoimisiún, leis)
~~~

_Chas m'athair air sa tábhairne, <b>O' Shea's</b> i nDomhnach Broc_ `My father met him in the pub, <b>O'Shea's</b> in Donnybrook'

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
