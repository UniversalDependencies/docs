---
layout: relation
title: 'nsubj:pass'
shortdef: 'nominal passive subject'
udver: '2'
---

The `nsubj:pass` relation is used for the nominal subject of a passive predicate.

~~~ conllu
1	a	o	DET	_	_	2	det	_	Gloss=the
2	deçixon	deçixon	NOUN	_	_	7	nsubj:pass	_	Gloss=decision
3	a	o	PRON	_	_	7	expl	_	Gloss=it
4	l’	l'	PART	_	_	7	dep	_	SpaceAfter=No
5	é	ëse	AUX	_	_	7	aux	_	Gloss=has
6	stæta	ëse	AUX	_	_	7	aux:pass	_	Gloss=been
7	piggiâ	piggiâ	VERB	_	_	0	root	_	Gloss=taken

~~~

The same relation is used for the nominal subject of reflexive passive and mediopassive constructions whose clitic takes [expl:pass](). A clausal passive subject takes [csubj:pass]().
