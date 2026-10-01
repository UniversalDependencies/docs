---
layout: relation
title: 'expl:pv'
shortdef: 'reflexive clitic in a pronominal construction'
udver: '2'
---

The `expl:pv` relation is used for a reflexive clitic that forms part of an inherently reflexive or pronominal verb and does not have a separate argument role.

~~~ conllu
1	mæ	mæ	DET	_	_	2	det	_	Gloss=my
2	moæ	moæ	NOUN	_	_	5	nsubj	_	Gloss=mother
3	a	o	PRON	_	_	5	expl	_	Gloss=she
4	s’	se	PRON	_	_	5	expl:pv	_	Gloss=REFL|SpaceAfter=No
5	avvexiña	avvexinâ	VERB	_	_	0	root	_	Gloss=approaches

~~~

With verbs of eating and drinking, `expl:pv` also marks reflexive clitics that emphasise the action or its completion. In _me l’ò bevuo_ “I drank it up”, _me_ takes `expl:pv` and _l’_ is the object.

~~~ conllu
1	me	me	PRON	_	_	4	expl:pv	_	Gloss=REFL
2	l’	ô	PRON	_	_	4	obj	_	Gloss=it|SpaceAfter=No
3	ò	avei	AUX	_	_	4	aux	_	Gloss=I-have
4	bevuo	beive	VERB	_	_	0	root	_	Gloss=drunk-up

~~~

A clitic expressing an actual beneficiary, by contrast, takes [iobj]():

~~~ conllu
1	m’	me	PRON	_	_	3	iobj	_	Gloss=for-myself|SpaceAfter=No
2	ea	ëse	AUX	_	_	3	aux	_	Gloss=I-had
3	accattou	accattâ	VERB	_	_	0	root	_	Gloss=bought
4	un	un	DET	_	_	6	det	_	Gloss=an
5	vegio	vegio	ADJ	_	_	6	amod	_	Gloss=old
6	giachê	giachê	NOUN	_	_	3	obj	_	Gloss=jacket

~~~

This relation is limited to reflexive clitics. Other clitics in lexicalised pronominal verbs are analysed according to their syntactic function; a non-reflexive clitic with no separate syntactic function takes [expl]().
