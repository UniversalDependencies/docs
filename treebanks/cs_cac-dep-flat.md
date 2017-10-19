---
layout: base
title:  'Statistics of flat in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: [flat:foreign]().

850 nodes (0%) are attached to their parents as `flat`.

850 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14235294117647.

The following 3 pairs of parts of speech are connected with `flat`: [-pos/PROPN]()-[-pos/PROPN]() (845; 99% instances), [-pos/PROPN]()-[-pos/ADJ]() (3; 0% instances), [-pos/ADJ]()-[-pos/PROPN]() (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Václav	Václav	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	0	root	_	_
2	Koranda	Koranda	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	5	punct	_	_
4	ekonomický	ekonomický	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	_	_
5	náměstek	náměstek	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	appos	_	_
6	podnikového	podnikový	ADJ	AAMS2----1A----	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	7	amod	_	_
7	ředitele	ředitel	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 flat	color:blue
1	Slavnou	slavný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	lvici	lvice	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	8	obj	_	_
3	Elsu	Elsa	PROPN	NNFS4-----A----	Case=Acc|Gender=Fem|NameType=Giv|Number=Sing|Polarity=Pos	2	nmod	_	_
4	George	George	PROPN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	7	nmod	_	_
5	a	a	CCONJ	J^-------------	_	6	cc	_	LId=a-1
6	Joy	Joy	PROPN	NNFXX-----A----	Gender=Fem|NameType=Giv,Sur|Polarity=Pos	4	conj	_	_
7	Adamsonových	Adamsonův	ADJ	AUMP2M---------	Animacy=Anim|Case=Gen|Gender=Masc|Gender[psor]=Masc|NameType=Sur|Number=Plur|Poss=Yes	3	flat	_	LDeriv=Adamson
8	zahubil	zahubit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
9	krevní	krevní	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	_	_
10	parasit	parazit	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	nsubj	_	_
11	Babesia	Babesia	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 flat	color:blue
1	Festival	festival	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj:pass	_	_
2	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	_	_
3	zahájen	zahájený	ADJ	VsYS---XX-AP---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=v-1
5	neděli	neděle	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obl	_	_
6	odpoledne	odpoledne	ADV	Db-------------	_	5	advmod	_	LId=odpoledne-1
7	slavnostní	slavnostní	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	_	_
8	premiérou	premiéra	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	3	obl	_	_
9	Dvořákovy	Dvořákův	ADJ	AUFS2M---------	Case=Gen|Gender=Fem|Gender[psor]=Masc|NameType=Sur|Number=Sing|Poss=Yes	8	nmod	_	LDeriv=Dvořák
10	Svaté	svatý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	_	_
11	Ludmily	Ludmila	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Giv|Number=Sing|Polarity=Pos	9	flat	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	14	punct	_	_
13	kde	kde	ADV	Db-------------	PronType=Int,Rel	14	advmod	_	_
14	účinkovalo	účinkovat	VERB	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	9	acl	_	_
15	#	&camount;	NUM	C=-------------	NumForm=Digit|NumType=Card	16	nummod:gov	_	_
16	pěvců	pěvec	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	14	nsubj	_	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


