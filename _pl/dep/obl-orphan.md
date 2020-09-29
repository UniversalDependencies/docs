---
layout: relation
title: 'obl:orphan'
shortdef: 'adpositional dependent with the elided noun'
udver: '2'
---

The `obl:orphan` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) treebank for adpositional phrases realised as a preposition with the elided noun. Such constructions are rather rare in Polish.

~~~ conllu
# visual-style 2 3 obl:orphan color:blue
1	O	o	ADP	prep:loc	AdpType=Prep	2	case	_	Case=Loc
2	wpół	wpół	ADV	adv	_	4	advmod	_	_
3	do	do	ADP	prep:gen	AdpType=Prep	2	obl:orphan	_	Case=Gen
4-5	przyłapałem	_	_	_	_	_	_	_	_
4	przyłapał	przyłapać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	4	aux:clitic	_	_
6	się	się	PRON	part	PronType=Prs|Reflex=Yes	4	expl:pv	_	_
7	na	na	ADP	prep:loc	AdpType=Prep	8	case	_	Case=Loc
8	tym	to	PRON	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	4	obl:arg	_	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	12	punct	_	_
10	że	że	SCONJ	comp	_	12	mark	_	_
11	nerwowo	nerwowo	ADV	adv:pos	Degree=Pos	12	advmod	_	_
12	oblizuję	oblizywać	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	ccomp:cleft	_	_
13	wargi	warga	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	4	punct	_	_
~~~

~~~ conllu
1	At	_	_	_	_	_	_	_	_
2	half	_	_	_	_	_	_	_	_
3	past [elided hour]	_	_	_	_	_	_	_	_
4	I	_	_	_	_	_	_	_	_
5	found	_	_	_	_	_	_	_	_
6	myself	_	_	_	_	_	_	_	_
7	licking	_	_	_	_	_	_	_	_
8	my	_	_	_	_	_	_	_	_
9	lips	_	_	_	_	_	_	_	_
10	nervously	_	_	_	_	_	_	_	_
11	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Út zář 29 18:41:33 CEST 2020 -->
