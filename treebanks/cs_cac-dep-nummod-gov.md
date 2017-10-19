---
layout: base
title:  'Statistics of nummod:gov in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `nummod:gov`

This relation is a language-specific subtype of [nummod]().

1189 nodes (0%) are attached to their parents as `nummod:gov`.

1156 instances of `nummod:gov` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31118587047939.

The following 3 pairs of parts of speech are connected with `nummod:gov`: [-pos/NOUN]()-[-pos/NUM]() (1157; 97% instances), [-pos/PRON]()-[-pos/NUM]() (31; 3% instances), [-pos/PROPN]()-[-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod:gov	color:blue
1	Za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	LId=za-1
2	čtrnáct	čtrnáct	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	3	nummod:gov	_	LNumValue=14
3	dní	den	NOUN	NNIP2-----A---1	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	0	root	_	LGloss=(jednotka_času)
4	šest	šest	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	5	nummod:gov	_	LNumValue=6
5	kilo	kilo	NOUN	NNNP2-----A---1	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	3	conj	_	_
6	dolů	dolů	ADV	Db-------------	_	5	orphan	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	5	punct	_	_
8	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
9	hned	hned	ADV	Db-------------	_	10	advmod	_	_
10	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	orphan	_	_
11	panděro	panděro	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	10	nsubj	_	_
12	pryč	pryč	ADV	Db-------------	_	10	advmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 nummod:gov	color:blue
1	A	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
2	já	já	PRON	PP-S1--1-------	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
3	už	už	ADV	Db-------------	_	5	advmod	_	_
4	jich	on	PRON	PPXP2--3-------	Case=Gen|Number=Plur|Person=3|PronType=Prs	5	obj	_	_
5	mám	mít	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	LId=v-1
7	sobě	se	PRON	P6-X6----------	Case=Loc|PronType=Prs|Reflex=Yes	5	obl	_	LGloss=(zvr._zájmeno/částice)
8	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	LId=od-1
9	rána	ráno	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	_	LId=ráno-1
10	nejmíň	málo	ADV	Dg-------3A---1	Degree=Sup|Polarity=Pos	11	advmod:emph	_	LId=málo-3
11	třicet	třicet	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	4	nummod:gov	_	SpaceAfter=No|LNumValue=30
12	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod:gov	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=v-1
2	celé	celý	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
3	autonomní	autonomní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
4	oblasti	oblast	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	5	obl	_	_
5	žije	žít	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	jen	jen	PART	TT-------------	_	7	advmod:emph	_	LId=jen-1|LGloss=(pouze)
7	#	&camount;	NUM	C=-------------	NumForm=Digit|NumType=Card	8	nummod:gov	_	_
8	Adygejců	Adygejec	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Nat|Number=Plur|Polarity=Pos	5	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


