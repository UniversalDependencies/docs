---
layout: relation
title: 'nmod:arg'
shortdef: 'required nominal dependent of a noun'
udver: '2'
---

The `nmod:arg` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for nominal dependents required by nouns. The governing nouns are often derived from verbs, but they are not gerunds, e.g. _zmiana_ ("a change") is derived from _zmieniać_ ("to change").

~~~ conllu
# visual-style 3 5 nmod:arg color:blue
1	Pierwsza	pierwszy	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
2	udana	udany	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	synteza	synteza	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
4	nowego	nowy	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	pierwiastka	pierwiastek	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod:arg	_	_
6	przeprowadzona	przeprowadzić	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
7	została	zostać	AUX	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	_	Case=Loc
9	1940	1940	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	10	amod:flat	_	_
10	roku	rok	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	_	_
~~~

~~~ conllu
1	The	_	_	_	_	_	_	_	_
2	first	_	_	_	_	_	_	_	_
3	successful	_	_	_	_	_	_	_	_
4	synthesis	_	_	_	_	_	_	_	_
5	of	_	_	_	_	_	_	_	_
6	the	_	_	_	_	_	_	_	_
7	new	_	_	_	_	_	_	_	_
8	element	_	_	_	_	_	_	_	_
9	was	_	_	_	_	_	_	_	_
10	carried	_	_	_	_	_	_	_	_
11	out	_	_	_	_	_	_	_	_
12	in	_	_	_	_	_	_	_	_
13	1940	_	_	_	_	_	_	_	_
14	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:31 CET 2020 -->
