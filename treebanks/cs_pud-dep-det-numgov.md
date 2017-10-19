---
layout: base
title:  'Statistics of det:numgov in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `det:numgov`

This relation is a language-specific subtype of [det]().
There are also 1 other language-specific subtypes of `det`: [det:nummod]().

43 nodes (0%) are attached to their parents as `det:numgov`.

42 instances of `det:numgov` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53488372093023.

The following 4 pairs of parts of speech are connected with `det:numgov`: [-pos/NOUN]()-[-pos/DET]() (27; 63% instances), [-pos/NOUN]()-[-pos/ADV]() (13; 30% instances), [-pos/PRON]()-[-pos/DET]() (2; 5% instances), [-pos/ADJ]()-[-pos/DET]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det:numgov	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=v-1
2	achaimenovské	achaimenovský	ADJ	AUFS6M---------	Case=Loc|Gender=Fem|Gender[psor]=Masc|NameType=Sur|Number=Sing|Poss=Yes	4	amod	_	_
3	multietnické	multietnický	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
4	armádě	armáda	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	_
5	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	cop	_	_
6	mnoho	mnoho	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	7	det:numgov	_	LId=mnoho-1
7	mužů	muž	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	4	nsubj	_	_
8	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	LId=z-1
9	Balkánu	Balkán	PROPN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det:numgov	color:blue
1	Nové	nový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
2	směrnice	směrnice	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	_	_
3	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=pro-1
4	železo	železo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	2	nmod	_	_
5	znamenají	znamenat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	9	punct	_	_
7	že	že	SCONJ	J,-------------	_	9	mark	_	LId=že-1
8	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	třeba	třeba	ADV	Db-------------	_	5	ccomp	_	LId=třeba-2
10	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	11	det:numgov	_	LId=hodně-2
11	dárců	dárce	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:numgov	color:blue
1	Několik	několik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	3	det:numgov	_	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	jich	on	PRON	PPXP2--3-------	Case=Gen|Number=Plur|Person=3|PronType=Prs	4	obj	_	LId=on-1
4	našel	najít	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


