---
layout: relation
title: 'advcl:cmpr'
shortdef: 'comparative clause'
udver: '2'
---

The `advcl:cmpr` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) treebank for comparative expressions realised as clauses. Comparative expressions can also be realised as phrases ([obl:cmpr](https://universaldependencies.org/pl/dep/obl-cmpr.html)) in Polish. Comparative expressions are preceded by a comparative conjunction either _niż_ ("than") in comparatives of inequality or e.g. _jak_ ("like") in comparatives of equality. 

~~~ conllu
# visual-style 1 10 advcl:cmpr color:blue
1	Wolę	woleć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	kreskówki	kreskówka	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	1	iobj	_	_
3	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Ins
4	"	"	PUNCT	interp	PunctType=Quot	5	punct	_	SpaceAfter=No
5	Bolkiem	Bolek	PROPN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	2	nmod	_	_
6	i	i	CCONJ	conj	_	7	cc	_	_
7	Lolkiem	Lolek	PROPN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	5	conj	2:nmod	SpaceAfter=No
8	"	"	PUNCT	interp	PunctType=Quot	5	punct	_	_
9	niż	niż	SCONJ	comp	ConjType=Cmpr	10	mark	_	_
10	kochać	kochać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	1	advcl:cmpr	_	_
11	się	się	PRON	part	PronType=Prs|Reflex=Yes	10	expl:pv	_	_
12	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	13	case	_	Case=Ins
13	tobą	ty	PRON	ppron12:sg:inst:f:sec	Case=Ins|Gender=Fem|Number=Sing|Person=2|PronType=Prs	10	obl:arg	_	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	1	punct	_	_
~~~

~~~ conllu
1	I
2	prefer
3	cartoons
4	with
5	"
6	Bolek
7	and
8	Lolek
9	"
10	than
11	make
12	love
13	with
14	you
15	.
~~~
<!-- Interlanguage links updated Út zář 29 20:31:41 CEST 2020 -->
