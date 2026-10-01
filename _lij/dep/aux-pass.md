---
layout: relation
title: 'aux:pass'
shortdef: 'passive auxiliary'
udver: '2'
---

The `aux:pass` relation links an auxiliary marking the passive voice to the main participle. The participle is the head of the clause.

~~~ conllu
1	a	o	DET	_	_	2	det	_	Gloss=the
2	deçixon	deçixon	NOUN	_	_	7	nsubj:pass	_	Gloss=decision
3	a	o	PRON	_	_	7	expl	_	Gloss=it
4	l’	l'	PART	_	_	7	dep	_	SpaceAfter=No
5	é	ëse	AUX	_	_	7	aux	_	Gloss=has
6	stæta	ëse	AUX	_	_	7	aux:pass	_	Gloss=been
7	piggiâ	piggiâ	VERB	_	_	0	root	_	Gloss=taken

~~~

In an auxiliary chain, only the auxiliary marking the passive voice takes [aux:pass](); preceding tense, aspect or modal auxiliaries take plain [aux](). When the participle is an adjectival predicate, _ëse_ takes [cop]() instead.
