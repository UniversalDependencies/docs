---
layout: relation
title: 'ccomp:obj'
shortdef: 'clausal objects of verbs'
udver: '2'
---

The `ccomp:obj` relation is used in the Polish treebanks for clausal syntactic objects subcategorised by a sentence predicate.

~~~ conllu
# visual-style 1 8 ccomp:obj color:blue
1	Mówi	mówić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
3	że	że	SCONJ	comp	_	8	mark	8:mark	_
4	dobrze	dobrze	ADV	adv:pos	Degree=Pos	8	advmod	8:advmod	_
5	się	się	PRON	part	PronType=Prs|Reflex=Yes	8	expl:pv	8:expl:pv	_
6	na	na	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	nich	on	PRON	ppron3:pl:loc:m3:ter:akc:praep	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	8	obl	8:obl	_
8	bawi	bawić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp:obj	1:ccomp:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_
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
