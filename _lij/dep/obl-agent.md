---
layout: relation
title: 'obl:agent'
shortdef: 'oblique agent in a passive construction'
udver: '2'
---

The `obl:agent` relation marks the agent of a passive predicate, usually introduced by _da_ “by”. This agent is the subject of the corresponding active clause.

~~~ conllu
1	a	_	DET	_	_	2	det	_	Gloss=the
2	deçixon	_	NOUN	_	_	7	nsubj:pass	_	Gloss=decision
3	a	_	PRON	_	_	7	expl	_	Gloss=it
4	l’	_	PART	_	_	7	dep	_	SpaceAfter=No
5	é	_	AUX	_	_	7	aux	_	Gloss=has
6	stæta	_	AUX	_	_	7	aux:pass	_	Gloss=been
7	piggiâ	_	VERB	_	_	0	root	_	Gloss=taken
8-9	da-o	_	_	_	_	_	_	_	_
8	da	_	ADP	_	_	10	case	_	Gloss=by
9	o	_	DET	_	_	10	det	_	Gloss=the
10	Conseggio	_	NOUN	_	_	7	obl:agent	_	Gloss=Council

~~~

In the corresponding active clause, _Conseggio_ is the subject and takes [nsubj](), while _deçixon_ is the object and takes [obj]():

~~~ conllu
1	o	o	DET	_	_	2	det	_	Gloss=the
2	Conseggio	conseggio	NOUN	_	_	6	nsubj	_	Gloss=Council
3	o	o	PRON	_	_	6	expl	_	Gloss=it
4	l’	_l'	PART	_	_	6	dep	_	SpaceAfter=No
5	à	avei	AUX	_	_	6	aux	_	Gloss=has
6	piggiou	piggiâ	VERB	_	_	0	root	_	Gloss=taken
7	a	a	DET	_	_	8	det	_	Gloss=the
8	deçixon	deçixon	NOUN	_	_	6	obj	_	Gloss=decision

~~~

<a id="passive-participle"></a>

The relation also occurs with passive participles modifying nouns.

~~~ conllu
1	muxica	muxica	NOUN	_	_	0	root	_	Gloss=music
2	compòsta	compoñe	VERB	_	_	1	acl	_	Gloss=composed
3-4	da-o	_	_	_	_	_	_	_	_
3	da	da	ADP	_	_	5	case	_	Gloss=by
4	o	o	DET	_	_	5	det	_	Gloss=the
5	Dria	Dria	PROPN	_	_	2	obl:agent	_	Gloss=Dria
6	Parödi	Parödi	PROPN	_	_	5	flat	_	Gloss=Parödi

~~~

Oblique complements of adjectives instead take [obl:arg](obl-arg.html#adjectival-complement).

Sources and instruments introduced by _da_ take [obl]() as modifiers or [obl:arg]() as selected arguments.

In non-passive causative or permissive constructions, an oblique causee takes [obl:arg](). In _a fa lavâ a machina da seu maio_ “she has her husband wash the car”, _lavâ_ takes [ccomp]() because its actor is expressed separately by _da seu maio_, which attaches to the infinitive with `obl:arg`.

~~~ conllu
1	a	o	PRON	_	_	2	nsubj	_	Gloss=she
2	fa	fâ	VERB	_	_	0	root	_	Gloss=has
3	lavâ	lavâ	VERB	_	_	2	ccomp	_	Gloss=wash
4	a	o	DET	_	_	5	det	_	Gloss=the
5	machina	machina	NOUN	_	_	3	obj	_	Gloss=car
6	da	da	ADP	_	_	8	case	_	Gloss=by
7	seu	seu	DET	_	_	8	det	_	Gloss=her
8	maio	maio	NOUN	_	_	3	obl:arg	_	Gloss=husband

~~~
