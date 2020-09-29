---
layout: relation
title: 'amod:flat'
shortdef: 'adjectival part of a named entity'
udver: '2'
---

The `amod:flat` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for adjectival parts (`ADJ`) of named entities, e.g. organisation names with clear syntactic structure, dates. These adjectival parts of named entities are not proper names (`PROPN`). Their combinations with other words (`PROPN` and non-`PROPN`) build named entities.


~~~ conllu
# visual-style 8 7 amod:flat color:blue
# visual-style 8 9 amod:flat color:blue
1	Andrzej	Andrzej	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	Rościszewski	Rościszewski	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	1	flat	_	_
3	-	-	PUNCT	interp	PunctType=Hyph	1	punct	_	_
4	były	były	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
5	wieloletni	wieloletni	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
6	dziekan	dziekan	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	1	appos	_	_
7	Warszawskiej	warszawski	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod:flat	_	_
8	Rady	rada	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
9	Adwokackiej	adwokacki	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod:flat	_	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	_	_
~~~

~~~ conllu
1	Andrzej	_	_	_	_	_	_	_	_
2	Rościszewski	_	_	_	_	_	_	_	_
3	-	_	_	_	_	_	_	_	_
4	a	_	_	_	_	_	_	_	_
5	former	_	_	_	_	_	_	_	_
6	dean	_	_	_	_	_	_	_	_
7	of	_	_	_	_	_	_	_	_
8	the	_	_	_	_	_	_	_	_
9	Warsaw	_	_	_	_	_	_	_	_
10	Bar	_	_	_	_	_	_	_	_
11	Association	_	_	_	_	_	_	_	_
12	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Út zář 29 20:31:43 CEST 2020 -->
