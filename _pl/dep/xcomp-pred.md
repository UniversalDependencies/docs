---
layout: relation
title: 'xcomp:pred'
shortdef: 'predicative dependent of non-copular verbs'
udver: '2'
---

The `xcomp:pred` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for predicative adjectives and nominals depending on verbs, e.g. _czuć się_ ('to feel'), _zostać_ ('to became'), _wydawać się_ ('to seem to be'), which are not considered copular verbs.


~~~ conllu
# visual-style 6 8 xcomp:pred color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	2	case	_	Case=Loc
2	depresjach	depresja	NOUN	subst:pl:loc:f	Case=Loc|Gender=Fem|Number=Plur	6	obl	_	_
3	organicznych	organiczny	ADJ	adj:pl:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	2	amod	_	_
4	chory	chory	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
5	często	często	ADV	adv:pos	Degree=Pos	6	advmod	_	_
6	czuje	czuć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	się	się	PRON	part	PronType=Prs|Reflex=Yes	6	expl:pv	_	_
8	zagubiony	zagubiony	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	xcomp:pred	_	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	10	punct	_	_
10	bezradny	bezradny	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	conj	6:xcomp:pred	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	12	punct	_	_
12	opuszczony	opuszczony	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	conj	6:xcomp:pred	_
13	i	i	CCONJ	conj	_	14	cc	_	_
14	samotny	samotny	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	conj	6:xcomp:pred	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	6	punct	_	_
~~~

~~~ conllu
1	In	_	_	_	_	_	_	_	_
2	organic	_	_	_	_	_	_	_	_
3	depression	_	_	_	_	_	_	_	_
4	,	_	_	_	_	_	_	_	_
5	the	_	_	_	_	_	_	_	_
6	patient	_	_	_	_	_	_	_	_
7	often	_	_	_	_	_	_	_	_
8	feels	_	_	_	_	_	_	_	_
9	lost	_	_	_	_	_	_	_	_
10	,	_	_	_	_	_	_	_	_
11	helpless	_	_	_	_	_	_	_	_
12	,	_	_	_	_	_	_	_	_
13	abandoned	_	_	_	_	_	_	_	_
14	and	_	_	_	_	_	_	_	_
15	lonely	_	_	_	_	_	_	_	_
16	.	_	_	_	_	_	_	_	_
~~~	

<!-- Interlanguage links updated Čt lis 12 09:43:41 CET 2020 -->
