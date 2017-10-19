---
layout: base
title:  'Statistics of punct in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `punct`

This relation is universal.

2624 nodes (14%) are attached to their parents as `punct`.

1489 instances of `punct` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.94016768292683.

The following 11 pairs of parts of speech are connected with `punct`: [-pos/VERB]()-[-pos/PUNCT]() (1541; 59% instances), [-pos/NOUN]()-[-pos/PUNCT]() (444; 17% instances), [-pos/ADJ]()-[-pos/PUNCT]() (374; 14% instances), [-pos/PROPN]()-[-pos/PUNCT]() (88; 3% instances), [-pos/NUM]()-[-pos/PUNCT]() (86; 3% instances), [-pos/ADV]()-[-pos/PUNCT]() (41; 2% instances), [-pos/DET]()-[-pos/PUNCT]() (27; 1% instances), [-pos/ADP]()-[-pos/PUNCT]() (11; 0% instances), [-pos/PRON]()-[-pos/PUNCT]() (7; 0% instances), [-pos/PART]()-[-pos/PUNCT]() (3; 0% instances), [-pos/AUX]()-[-pos/PUNCT]() (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 punct	color:blue
1	Nové	nový	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	_	_
2	výdaje	výdaj	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	nsubj	_	_
3	pocházejí	pocházet	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	_	LId=z-1
5	bohatých	bohatý	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
6	bankovních	bankovní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
7	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	3	obl	_	_
8	Clintonové	Clintonová	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Sur|Number=Sing|Polarity=Pos	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 punct	color:blue
1	Maximální	maximální	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	_	_
2	množství	množství	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
3	:	:	PUNCT	Z:-------------	_	5	punct	_	_
4	5000	5000	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod:gov	_	_
5	dolarů	dolar	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	2	appos	_	_
6	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	_	LId=na-1
7	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 9 punct	color:blue
1	Co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	2	obj	_	LId=co-1
2	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl	_	_
3	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
4	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	5	obj	_	LId=co-1
5	dělá	dělat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	2	punct	_	_
7	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	nsubj	_	_
8	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	–	-	PUNCT	Z:-------------	_	14	punct	_	_
10	no	no	PART	TT-------------	_	14	discourse	_	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	14	punct	_	_
12	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	_	_
13	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	14	nsubj	_	_
14	neuvěřitelné	uvěřitelný	ADJ	AANS1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	8	conj	_	SpaceAfter=No|LDeriv=uvěřit
15	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


