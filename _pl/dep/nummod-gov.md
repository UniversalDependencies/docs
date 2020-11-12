---
layout: relation
title: 'nummod:gov'
shortdef: 'governing numeral'
udver: '2'
---

The `nummod:gov` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for numerals that are attached as children of the quantified noun but govern its case.

~~~ conllu
# visual-style 3 2 nummod:gov color:blue
1	Przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	3	case	_	Case=Acc
2	13	13	NUM	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	3	nummod:gov	_	_
3	lat	rok	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	_
4	był	być	AUX	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
5	maszynistą	maszynista	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
6	kolejowym	kolejowy	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	5	punct	_	_
~~~

~~~ conllu
1	He	_	_	_	_	_	_	_	_
2	was	_	_	_	_	_	_	_	_
3	an	_	_	_	_	_	_	_	_
4	engine	_	_	_	_	_	_	_	_
5	driver	_	_	_	_	_	_	_	_
6	for	_	_	_	_	_	_	_	_
7	13	_	_	_	_	_	_	_	_
8	years	_	_	_	_	_	_	_	_
9	.	_	_	_	_	_	_	_	_
~~~

~~~ conllu
# visual-style 7 6 nummod:gov color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	2	case	_	Case=Loc
2	Stanach	Stany	PROPN	subst:pl:loc:n:pt	Case=Loc|Gender=Neut|Number=Ptan	5	obl	_	_
3	Zjednoczonych	Zjednoczone	ADJ	adj:pl:loc:n:pos	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur	2	amod:flat	_	_
4	tabletka	tabletka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
5	kosztuje	kosztować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	dziesięć	dziesięć	NUM	num:pl:acc:m2:rec	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Plur|NumForm=Word	7	nummod:gov	_	_
7	dolarów	dolar	NOUN	subst:pl:gen:m2	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	5	iobj	_	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	5	punct	_	_
~~~

~~~ conllu
1	In	_	_	_	_	_	_	_	_
2	the	_	_	_	_	_	_	_	_
3	United	_	_	_	_	_	_	_	_
4	States	_	_	_	_	_	_	_	_
5	,	_	_	_	_	_	_	_	_
6	the	_	_	_	_	_	_	_	_
7	tablet	_	_	_	_	_	_	_	_
8	costs	_	_	_	_	_	_	_	_
9	ten	_	_	_	_	_	_	_	_
10	dollars	_	_	_	_	_	_	_	_
11	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:34 CET 2020 -->
