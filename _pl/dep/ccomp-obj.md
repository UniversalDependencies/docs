---
layout: relation
title: 'ccomp:obj'
shortdef: 'clausal objects of verbs'
udver: '2'
---

The `ccomp:obj` relation is used in the Polish treebanks for clausal syntactic objects subcategorised by a sentence predicate.

~~~ conllu
# visual-style 1 8 ccomp:obj color:blue
1	Mówi	mówić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	8	punct	_	_
3	że	że	SCONJ	comp	_	8	mark	_	_
4	dobrze	dobrze	ADV	adv:pos	Degree=Pos	8	advmod	_	_
5	się	się	PRON	part	PronType=Prs|Reflex=Yes	8	expl:pv	_	_
6	na	na	ADP	prep:loc	AdpType=Prep	7	case	_	Case=Loc
7	nich	on	PRON	ppron3:pl:loc:m3:ter:akc:praep	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	8	obl	_	_
8	bawi	bawić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp:obj	_	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	1	punct	_	_
~~~

~~~ conllu
1	He	_	_	_	_	_	_	_	_
2	says	_	_	_	_	_	_	_	_
3	he	_	_	_	_	_	_	_	_
4	is	_	_	_	_	_	_	_	_
5	having	_	_	_	_	_	_	_	_
6	fun	_	_	_	_	_	_	_	_
7	on	_	_	_	_	_	_	_	_
8	those	_	_	_	_	_	_	_	_
9	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:55 CEST 2021 -->
