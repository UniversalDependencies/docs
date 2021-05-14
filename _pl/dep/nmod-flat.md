---
layout: relation
title: 'nmod:flat'
shortdef: 'nominal part of a named entity'
udver: '2'
---

The `nmod:flat` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for nominal parts (`NOUN`) of named entities, e.g. organisation names with clear syntactic structure. These nominal parts of named entities are not proper names (`PROPN`). Their combinations with other words (`PROPN` and non-`PROPN`) build named entities.

~~~ conllu
# visual-style 7 8 nmod:flat color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	_	Case=Loc
2	tym	ten	DET	adj:sg:loc:n:pos	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	4	det	_	_
3	samym	sam	ADJ	adj:sg:loc:n:pos	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	2	fixed	_	_
4	miejscu	miejsce	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	5	obl	_	_
5	będzie	być	VERB	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
6	także	także	PART	part	_	7	advmod:emph	_	_
7	Urząd	urząd	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
8	Stanu	stan	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod:flat	_	_
9	Cywilnego	cywilny	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod:flat	_	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	5	punct	_	_
~~~

~~~ conllu
1	The	_	_	_	_	_	_	_	_
2	Registry	_	_	_	_	_	_	_	_
3	Office	_	_	_	_	_	_	_	_
4	will	_	_	_	_	_	_	_	_
5	also	_	_	_	_	_	_	_	_
6	be	_	_	_	_	_	_	_	_
7	in	_	_	_	_	_	_	_	_
8	the	_	_	_	_	_	_	_	_
9	same	_	_	_	_	_	_	_	_
10	place	_	_	_	_	_	_	_	_
11	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:10 CEST 2021 -->
