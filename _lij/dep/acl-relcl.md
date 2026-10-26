---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause'
udver: '2'
---

The `acl:relcl` relation is used for a relative clause that modifies a noun. The modified noun has a role within the relative clause, usually represented by a relative word.

~~~ conllu
1	o	o	DET	_	_	2	det	_	Gloss=the
2	libbro	libbro	NOUN	_	_	0	root	_	Gloss=book
3	ch’	che	PRON	_	_	5	obj	_	Gloss=that|SpaceAfter=No
4	ò	avei	AUX	_	_	5	aux	_	Gloss=I-have
5	accattou	accattâ	VERB	_	_	2	acl:relcl	_	Gloss=bought

~~~

Infinitival noun modifiers introduced by _da_ or _pe_ without an overt relative expression, and verbal participial modifiers, take plain [acl](). Adjectival modifiers take [amod]().
