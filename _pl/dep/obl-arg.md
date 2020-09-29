---
layout: relation
title: 'obl:arg'
shortdef: 'adpositional argument of a verb'
udver: '2'
---

The `obl:arg` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for adpositional phrases subcategorised by verbs.

~~~ conllu
# visual-style 2 4 obl:arg color:blue
1	-	-	PUNCT	interp	PunctType=Hyph	2	punct	_	_
2	Chodzi	chodzić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	o	o	ADP	prep:acc	AdpType=Prep	4	case	_	Case=Acc
4	sieci	sieć	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	2	obl:arg	_	_
5	wewnętrzne	wewnętrzny	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	4	amod	_	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	2	punct	_	_
~~~

~~~ conllu
1	It	_	_	_	_	_	_	_	_
2	is	_	_	_	_	_	_	_	_
3	about	_	_	_	_	_	_	_	_
4	internal	_	_	_	_	_	_	_	_
5	networks	_	_	_	_	_	_	_	_
6	.	_	_	_	_	_	_	_	_
~~~

~~~ conllu
# visual-style 1 4 obl:arg color:blue
1	Skontaktuję	skontaktować	VERB	fin:sg:pri:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
2	się	się	PRON	part	PronType=Prs|Reflex=Yes	1	expl:pv	_	_
3	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	4	case	_	Case=Ins
4	mamą	mama	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	1	obl:arg	_	_
5	trojaczków	trojaczki	NOUN	subst:pl:gen:n:pt	Case=Gen|Gender=Neut|Number=Ptan	4	nmod	_	_
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	8	case	_	Case=Loc
7	najbliższych	bliski	ADJ	adj:pl:loc:m3:sup	Animacy=Inan|Case=Loc|Degree=Sup|Gender=Masc|Number=Plur	8	amod	_	_
8	dniach	dzień	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	1	obl	_	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	1	punct	_	_
~~~

~~~ conllu
1	I	_	_	_	_	_	_	_	_
2	will	_	_	_	_	_	_	_	_
3	contact	_	_	_	_	_	_	_	_
4	the	_	_	_	_	_	_	_	_
5	mother	_	_	_	_	_	_	_	_
6	of	_	_	_	_	_	_	_	_
7	triplets	_	_	_	_	_	_	_	_
8	in	_	_	_	_	_	_	_	_
9	the	_	_	_	_	_	_	_	_
10	coming	_	_	_	_	_	_	_	_
11	days	_	_	_	_	_	_	_	_
12	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Út zář 29 20:32:00 CEST 2020 -->
