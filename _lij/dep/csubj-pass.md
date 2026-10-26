---
layout: relation
title: 'csubj:pass'
shortdef: 'clausal passive subject'
udver: '2'
---

The `csubj:pass` relation is used for a clause that functions as the syntactic subject of a passive predicate.

~~~ conllu
1	l’	l'	PART	_	_	4	dep	_	SpaceAfter=No
2	é	ëse	AUX	_	_	4	aux	_	Gloss=has
3	stæto	ëse	AUX	_	_	4	aux:pass	_	Gloss=been
4	deçiso	deçidde	VERB	_	_	0	root	_	Gloss=decided
5	de	de	ADP	_	_	6	mark	_	Gloss=to
6	serrâ	serrâ	VERB	_	_	4	csubj:pass	_	Gloss=close
7	a	o	DET	_	_	8	det	_	Gloss=the
8	stradda	stradda	NOUN	_	_	6	obj	_	Gloss=road

~~~

A clausal subject of a non-passive predicate takes the plain [csubj]() relation.
