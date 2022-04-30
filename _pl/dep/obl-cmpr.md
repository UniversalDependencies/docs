---
layout: relation
title: 'obl:cmpr'
shortdef: 'comparative phrase'
udver: '2'
---

The `obl:cmpr` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for comparative expressions realised as phrases. Comparative expressions can also be realised as clauses ([advcl:cmpr](https://universaldependencies.org/pl/dep/advcl-cmpr.html)) in Polish. Comparative expressions are preceded by a comparative conjunction either _niż_ ("than") in comparatives of inequality or e.g. _jak_ ("like") in comparatives of equality. 


~~~ conllu
# visual-style 9 12 obl:cmpr color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	2	case	6:case	Case=Loc
2	krajach	kraj	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	7	obl	_	_
3	Europy	Europa	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	Zachodniej	Zachodni	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	3	amod:flat	_	_
5	i	i	CCONJ	conj	_	6	cc	_	_
6	USA	USA	PROPN	subst:pl:loc:n:pt	Case=Loc|Gender=Neut|Number=Ptan	2	conj	7:obl	_
7	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	kilkakrotnie	kilkakrotnie	ADV	adv:pos	Degree=Pos	13	advmod	_	_
9	więcej	więcej	DET	num:pl:nom:m1:rec	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	13	det:numgov	_	_
10	niż	niż	SCONJ	comp	ConjType=Cmpr	12	mark	_	_
11	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	12	case	_	Case=Loc
12	Polsce	Polska	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	9	obl:cmpr	_	_
13	adwokatów	adwokat	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	7	nsubj	_	_
14	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	17	case	_	Case=Loc
15	stosunku	stosunek	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	14	fixed	_	_
16	do	do	ADP	prep:gen	AdpType=Prep	14	fixed	_	Case=Gen
17	liczby	liczba	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	_
18	ludności	ludność	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	17	nmod:arg	_	SpaceAfter=No
19	.	.	PUNCT	interp	PunctType=Peri	7	punct	_	_
~~~

~~~ conllu
1	Western	_	_	_	_	_	_	_	_
2	Europe	_	_	_	_	_	_	_	_
3	and	_	_	_	_	_	_	_	_
4	USA	_	_	_	_	_	_	_	_
5	have	_	_	_	_	_	_	_	_
6	several	_	_	_	_	_	_	_	_
7	times	_	_	_	_	_	_	_	_
8	more	_	_	_	_	_	_	_	_
9	lawyers	_	_	_	_	_	_	_	_
10	per	_	_	_	_	_	_	_	_
11	capita	_	_	_	_	_	_	_	_
12	than	_	_	_	_	_	_	_	_
13	Poland	_	_	_	_	_	_	_	_
14	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated St lis 3 20:59:05 CET 2021 -->
