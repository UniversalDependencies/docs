---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The relation determiner (`det`) holds between a nominal head and its [determiner](DET).
This relation is used for pronominal adjectival modifiers of noun phrases; the `det` modifier has the POS tag `DET` and vice versa.
Non-pronominal adjectives are tagged [ADJ]() and the relation is labeled [amod]().

Note, that possessive determiners like _իր_ “his” is currently given the POS tag `DET` and the relation [det:poss]().

~~~ conllu
# visual-style 2 3 det color:blue
# visual-style 2 4 det color:blue
1	Եւ	եւ	CCONJ	_	_	5	cc	_	_
2	ազգ	ազգ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	_
3	մի	մի	DET	_	PronType=Art	2	det	_	_
4	այլ	այլ	DET	_	PronType=Ind	2	det	_	_
5	կայ	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	8	nsubj	_	_
8	ասի	ասիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	2	acl:relcl	_	_
9	ատօրօս	ատօրօս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	8	xcomp	_	_
~~~

~~~ conllu
# visual-style 2 1 det color:blue
1	այլ	այլ	DET	_	PronType=Ind	2	det	_	_
2	դատաւորքն	դատաւոր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	0	root	_	_
~~~

Pronominal quantifiers are also tagged DET and their relation to their head is a det relation.

~~~ conllu
# visual-style 2 1 det color:blue
1	քանի	քանի	DET	_	PronType=Exc	2	det	_	_
2	տարով	տարի	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	0	root	_	_
3	յառաջ	յառաջ	ADV	_	Style=Arch	2	case	_	_
~~~

See [nummod]() for a broader discussion of the various situations with quantifiers.
<!-- Interlanguage links updated Út 30. června 2026, 11:00:01 CEST -->
