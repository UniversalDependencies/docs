---
layout: relation
title: 'expl:pass'
shortdef: 'reflexive passive marker'
udver: '2'
---

The `expl:pass` relation is used for _se_ when it functions as a passivising clitic in a reflexive passive or mediopassive construction. The clause has a passive subject, annotated [nsubj:pass]() or [csubj:pass]().

~~~ conllu
1	i	o	DET	_	_	2	det	_	Gloss=the
2	prexi	prexo	NOUN	_	Number=Plur	6	nsubj:pass	_	Gloss=prices
3	no	no	ADV	_	_	6	advmod	_	Gloss=not
4	se	se	PRON	_	_	6	expl:pass	_	Gloss=PASS
5	peuan	poei	AUX	_	Number=Plur|Person=3	6	aux	_	Gloss=can
6	stimmâ	stimmâ	VERB	_	_	0	root	_	Gloss=estimate

~~~

Impersonal _se_ takes [expl:impers](). An inherently reflexive clitic takes [expl:pv](), while a reflexive clitic that realises an argument takes [obj]() or [iobj]().
