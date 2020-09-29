---
layout: relation
title: 'nummod:flat'
shortdef: 'numeral part of a named entity'
udver: '2'
---

The `nummod:flat` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for numeral parts (`NUM`) of named entities, e.g. organisation names, geographical names, titles with clear syntactic structure. These numeral parts of named entities are not proper names (`PROPN`). Their combinations with other words (`PROPN` and non-`PROPN`) build named entities.

~~~ conllu
# visual-style 9 8 nummod:flat color:blue
1	O	o	ADP	prep:loc	AdpType=Prep	2	case	_	Case=Loc
2	godzinie	godzina	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
3	17.00	17.00	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|NumForm=Digit|NumType=Ord	2	amod	_	_
4	na	na	ADP	prep:loc	AdpType=Prep	5	case	_	Case=Loc
5	scenie	scena	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
6	zagości	zagościć	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
7	zespół	zespół	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
8	Dwa	dwa	NUM	num:pl:nom:m2:congr	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	9	nummod:flat	_	_
9	Kamraty	kamrat	NOUN	depr:pl:nom:m2	Animacy=Nhum|Case=Nom|Gender=Masc|NounForm=Depr|Number=Plur	7	appos	_	SpaceAfter=No
10	,	,	PUNCT	interp	PunctType=Comm	11	punct	_	_
11	znany	znany	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
12	ze	z	ADP	prep:gen:wok	AdpType=Prep|Variant=Long	14	case	_	Case=Gen
13	śląskich	śląski	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	14	amod	_	_
14	rozgłośni	rozgłośnia	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	11	obl	_	_
15	radiowych	radiowy	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	14	amod	_	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	6	punct	_	_
~~~

~~~ conllu
1	The	_	_	_	_	_	_	_	_
2	band	_	_	_	_	_	_	_	_
3	Two	_	_	_	_	_	_	_	_
4	Kamraty	_	_	_	_	_	_	_	_
5	,	_	_	_	_	_	_	_	_
6	known	_	_	_	_	_	_	_	_
7	from	_	_	_	_	_	_	_	_
8	Silesian	_	_	_	_	_	_	_	_
9	radio	_	_	_	_	_	_	_	_
10	stations	_	_	_	_	_	_	_	_
11	,	_	_	_	_	_	_	_	_
12	will	_	_	_	_	_	_	_	_
13	appear	_	_	_	_	_	_	_	_
14	on	_	_	_	_	_	_	_	_
15	the	_	_	_	_	_	_	_	_
16	stage	_	_	_	_	_	_	_	_
17	at	_	_	_	_	_	_	_	_
18	17.00	_	_	_	_	_	_	_	_
19	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Út zář 29 18:41:31 CEST 2020 -->
