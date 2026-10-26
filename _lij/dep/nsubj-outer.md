---
layout: relation
title: 'nsubj:outer'
shortdef: 'outer nominal subject'
udver: '2'
---

The `nsubj:outer` relation is used for the nominal subject of a copular clause whose predicate is itself a clause, distinguishing it from any subject internal to the predicate clause.

~~~ conllu
1	l’	o	DET	_	_	2	det	_	Gloss=the|SpaceAfter=No
2	obiettivo	obiettivo	NOUN	_	_	7	nsubj:outer	_	Gloss=goal
3	o	o	PRON	_	_	7	expl	_	Gloss=it
4	l’	l'	PART	_	_	7	dep	_	SpaceAfter=No
5	é	ëse	AUX	_	_	7	cop	_	Gloss=is
6	de	de	ADP	_	_	7	mark	_	Gloss=to
7	passâ	passâ	VERB	_	_	0	root	_	Gloss=exceed
8	i	o	DET	_	_	10	det	_	Gloss=the
9	120mia	120mia	NUM	_	_	10	nummod	_	Gloss=120,000
10	vixitatoî	vixitatô	NOUN	_	_	7	obj	_	Gloss=visitors

~~~

When an infinitival clause instead functions as the subject of a nominal copular predicate, the nominal predicate is the head and the infinitival clause takes plain [csubj]().
