---
layout: relation
title: 'advcl:cmpr'
shortdef: 'comparative clause'
udver: '2'
---

The `advcl:cmpr` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) treebank for comparative expressions realised as clauses. Comparative expressions can also be realised as phrases ([obl:cmpr](https://universaldependencies.org/pl/dep/obl-cmpr.html)) in Polish. Comparative expressions are preceded by a comparative conjunction either _niż_ ("than") in comparatives of inequality or e.g. _jak_ ("like") in comparatives of equality. 

~~~ conllu
# visual-style 3 12 advcl:cmpr color:blue
1	9	9	X	dig	NumForm=Digit	3	list	3:list	SpaceAfter=No
2	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_
3	Wolę	woleć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	kreskówki	kreskówka	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	3	iobj	3:iobj	_
5	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	7	case	7:case|9:case	Case=Ins
6	"	"	PUNCT	interp	PunctType=Quot	7	punct	7:punct	SpaceAfter=No
7	Bolkiem	Bolek	PROPN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	4	nmod	4:nmod	_
8	i	i	CCONJ	conj	_	9	cc	9:cc	_
9	Lolkiem	Lolek	PROPN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	7	conj	4:nmod|7:conj	SpaceAfter=No
10	"	"	PUNCT	interp	PunctType=Quot	7	punct	7:punct	_
11	niż	niż	SCONJ	comp	ConjType=Cmpr	12	mark	12:mark	_
12	kochać	kochać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	3	advcl:cmpr	3:advcl:cmpr	_
13	się	się	PRON	part	PronType=Prs|Reflex=Yes	12	expl:pv	12:expl:pv	_
14	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	15	case	15:case	Case=Ins
15	tobą	ty	PRON	ppron12:sg:inst:f:sec	Case=Ins|Gender=Fem|Number=Sing|Person=2|PronType=Prs	12	obl:arg	12:obl:arg	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_
~~~

~~~ conllu
1	9
2	.
3	I
4	prefer
5	cartoons
6	with
7	"
8	Bolek
9	and
10	Lolek
11	"
12	than
13	make
14	love
15	with
16	you
17.
~~~