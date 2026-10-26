---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The `iobj` relation is reserved for dative clitic arguments in Ligurian.

~~~ conllu
1	ghe	ghe	PRON	_	_	2	iobj	_	Gloss=to-her
2	daggo	dâ	VERB	_	_	0	root	_	Gloss=I-give
3	quarcösa	quarcösa	PRON	_	_	2	obj	_	Gloss=something

~~~

A recipient expressed by a full prepositional phrase, by contrast, takes [obl:arg](). The scope of `iobj` is therefore narrower than the traditional notion of indirect object (_complemento di termine_).

~~~ conllu
1	daggo	dâ	VERB	_	_	0	root	_	Gloss=I-give
2	quarcösa	quarcösa	PRON	_	_	1	obj	_	Gloss=something
3	à	à	ADP	_	_	5	case	_	Gloss=to
4	mæ	mæ	DET	_	_	5	det	_	Gloss=my
5	moæ	moæ	NOUN	_	_	1	obl:arg	_	Gloss=mother

~~~
