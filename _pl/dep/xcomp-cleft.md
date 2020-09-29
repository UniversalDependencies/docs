---
layout: relation
title: 'xcomp:cleft'
shortdef: 'required open dependent of the pronoun _to_'
udver: '2'
---

The `xcomp:cleft` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) treebank for a required open dependent (a non-finite clause) of the pronoun _to_ ('it').


~~~ conllu
# visual-style 3 7 xcomp:cleft color:blue
1	Chodzi	chodzić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	o	o	ADP	prep:acc	AdpType=Prep	3	case	_	Case=Acc
3	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	1	obl:arg	_	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	7	punct	_	_
5	by	by	SCONJ	comp	_	7	mark	_	_
6	dobrze	dobrze	ADV	adv:pos	Degree=Pos	7	advmod	_	_
7	rozumieć	rozumieć	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	3	xcomp:cleft	_	_
8	Chopina	Chopin	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	1	punct	_	_
~~~

~~~ conllu
1	The	_	_	_	_	_	_	_	_
2	point	_	_	_	_	_	_	_	_
3	is	_	_	_	_	_	_	_	_
4	to	_	_	_	_	_	_	_	_
5	understand	_	_	_	_	_	_	_	_
6	Chopin	_	_	_	_	_	_	_	_
7	well	_	_	_	_	_	_	_	_
8	.	_	_	_	_	_	_	_	_
~~~	
<!-- Interlanguage links updated Út zář 29 20:32:03 CEST 2020 -->
