---
layout: base
title:  'Statistics of flat in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="cs_cac-dep-flat-foreign.html">flat:foreign</a></tt>.

855 nodes (0%) are attached to their parents as `flat`.

855 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14152046783626.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt> (845; 99% instances), <tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_cac-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Václav	Václav	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	0	root	0:root	_
2	Koranda	Koranda	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	1	flat	1:flat	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
4	ekonomický	ekonomický	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	5:amod	_
5	náměstek	náměstek	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	appos	1:appos	_
6	podnikového	podnikový	ADJ	AAMS2----1A----	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	7	amod	7:amod	_
7	ředitele	ředitel	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	5:nmod	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 flat	color:blue
1	Svým	svůj	DET	P8ZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	2	det	2:det	LId=svůj-1
2	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	5:obl	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	5:expl:pv	LGloss=(zvr._zájmeno/částice)
4	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	5:nsubj	_
5	týká	týkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	i	i	CCONJ	J^-------------	_	8	advmod:emph	8:advmod:emph	LId=i-1
7	jazykovědného	jazykovědný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	8:amod	_
8	strukturalismu	strukturalizmus	NOUN	NNIS2-----A---1	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	obj	5:obj	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
10	který	který	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	12	nsubj	12:nsubj	_
11	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pv	12:expl:pv	LGloss=(zvr._zájmeno/částice)
12	opírá	opírat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl	8:acl	_
13	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	14	case	14:case	LId=o-1
14	koncepci	koncepce	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	12	obl:arg	12:obl:arg	_
15	Ferdinanda	Ferdinand	PROPN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	14	nmod	14:nmod	_
16	de	de	ADP	RR--1----------	AdpType=Prep|Case=Nom|Foreign=Yes	15	flat	15:flat	LGloss=(z_franc._de,_zejm._ve_jménech)
17	Saussura	Saussure	PROPN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	15	flat	15:flat	SpaceAfter=No
18	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 flat	color:blue
1	Slavnou	slavný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	2:amod	_
2	lvici	lvice	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	8	obj	8:obj	_
3	Elsu	Elsa	PROPN	NNFS4-----A----	Case=Acc|Gender=Fem|NameType=Giv|Number=Sing|Polarity=Pos	2	nmod	2:nmod	_
4	George	George	PROPN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	7	nmod	7:nmod	_
5	a	a	CCONJ	J^-------------	_	6	cc	6:cc	LId=a-1
6	Joy	Joy	PROPN	NNFXX-----A----	Gender=Fem|NameType=Giv,Sur|Polarity=Pos	4	conj	4:conj|7:nmod	_
7	Adamsonových	Adamsonův	ADJ	AUMP2M---------	Animacy=Anim|Case=Gen|Gender=Masc|Gender[psor]=Masc|NameType=Sur|Number=Plur|Poss=Yes	3	flat	3:flat	LDeriv=Adamson
8	zahubil	zahubit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
9	krevní	krevní	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	10:amod	_
10	parasit	parazit	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	nsubj	8:nsubj	_
11	Babesia	Babesia	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	10	nmod	10:nmod	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


