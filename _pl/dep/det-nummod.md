---
layout: relation
title: 'det:nummod'
shortdef: 'agreeing pronominal quantifiers'
udver: '2'
---

The `det:nummod` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for pronominal quantifiers that are attached as children of the quantified noun and agree with its case.

~~~ conllu
# visual-style 5 3 det:nummod color:blue
1	Byli	być	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	5	case	_	Case=Loc
3	wielu	wiele	DET	num:pl:loc:m3:congr	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	5	det:nummod	_	_
4	innych	inny	ADJ	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur	5	amod	_	_
5	związkach	związek	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	1	obl:arg	_	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	10	punct	_	_
7	które	który	DET	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	10	nsubj	_	_
8	się	się	PRON	part	PronType=Prs|Reflex=Yes	10	expl:pv	_	_
9	jednak	jednak	PART	part	_	10	advmod:emph	_	_
10	rozsypały	rozsypać	VERB	praet:pl:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	_	_
~~~

~~~ conllu
1	They	_	_	_	_	_	_	_	_
2	were	_	_	_	_	_	_	_	_
3	in	_	_	_	_	_	_	_	_
4	many	_	_	_	_	_	_	_	_
5	other	_	_	_	_	_	_	_	_
6	relationships	_	_	_	_	_	_	_	_
7	that	_	_	_	_	_	_	_	_
8	broke	_	_	_	_	_	_	_	_
9	up	_	_	_	_	_	_	_	_
10	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated St lis 3 20:58:51 CET 2021 -->
