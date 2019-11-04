---
layout: relation
title: 'aux:clitic'
shortdef: 'mobile inflection auxiliary'
udver: '2'
---

The `aux:clitic` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for mobile inflections. Even if it can be attached not only to verb forms (pseudo particles), but also to conditional particles, subordinating conjunctions, etc., it should depend on a verb form in a dependency tree.

~~~ conllu
# visual-style 2 1 aux:clitic color:blue
1-2	Widziałam	_	_	_	_	_	_	_	SpaceAfter=No
1	Widziała	widzieć	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Short	1	aux:clitic	1:aux:clitic	_
3	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
4	jak	jak	SCONJ	comp	_	6	mark	6:mark	_
5	cichaczem	cichacz	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	6	obl	6:obl	_
6-7	wróciłeś	_	_	_	_	_	_	_	SpaceAfter=No
6	wrócił	wrócić	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp	1:ccomp	_
7	eś	być	AUX	aglt:sg:sec:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=2|Variant=Long	6	aux:clitic	6:aux:clitic	_
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_
~~~

~~~ conllu
1	I	_	_	_	_	_	_	_	_
2	saw	_	_	_	_	_	_	_	_
3	you	_	_	_	_	_	_	_	_
4	quietly	_	_	_	_	_	_	_	_
5	come	_	_	_	_	_	_	_	_
6	back	_	_	_	_	_	_	_	_
7	.	_	_	_	_	_	_	_	_
~~~
