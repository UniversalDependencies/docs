---
layout: base
title:  'Statistics of fixed in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `fixed`

This relation is universal.

2324 nodes (0%) are attached to their parents as `fixed`.

2324 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17254733218589.

The following 24 pairs of parts of speech are connected with `fixed`: [-pos/ADP]()-[-pos/NOUN]() (1339; 58% instances), [-pos/ADP]()-[-pos/ADP]() (497; 21% instances), [-pos/CCONJ]()-[-pos/SCONJ]() (166; 7% instances), [-pos/PART]()-[-pos/ADP]() (129; 6% instances), [-pos/ADV]()-[-pos/ADP]() (114; 5% instances), [-pos/NOUN]()-[-pos/ADP]() (19; 1% instances), [-pos/ADV]()-[-pos/SCONJ]() (15; 1% instances), [-pos/SCONJ]()-[-pos/ADV]() (14; 1% instances), [-pos/SCONJ]()-[-pos/ADP]() (6; 0% instances), [-pos/CCONJ]()-[-pos/SYM]() (4; 0% instances), [-pos/PART]()-[-pos/ADV]() (4; 0% instances), [-pos/ADP]()-[-pos/SYM]() (3; 0% instances), [-pos/PART]()-[-pos/SCONJ]() (3; 0% instances), [-pos/ADP]()-[-pos/ADJ]() (1; 0% instances), [-pos/ADV]()-[-pos/ADV]() (1; 0% instances), [-pos/ADV]()-[-pos/PART]() (1; 0% instances), [-pos/CCONJ]()-[-pos/ADV]() (1; 0% instances), [-pos/CCONJ]()-[-pos/PART]() (1; 0% instances), [-pos/PART]()-[-pos/NOUN]() (1; 0% instances), [-pos/SCONJ]()-[-pos/CCONJ]() (1; 0% instances), [-pos/SCONJ]()-[-pos/PART]() (1; 0% instances), [-pos/SCONJ]()-[-pos/SCONJ]() (1; 0% instances), [-pos/SYM]()-[-pos/ADP]() (1; 0% instances), [-pos/SYM]()-[-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Úkol	úkol	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj:pass	_	_
2	rozpracován	rozpracovaný	ADJ	VsYS---XX-AP---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=v-1
4	rámci	rámec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	fixed	_	_
5	KRBu	KRB	PROPN	NNIS2-----A----	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|NameType=Com|Number=Sing|Polarity=Pos	2	obl	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	Ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	4	case	_	LId=v-1
2	spolupráci	spolupráce	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	1	fixed	_	_
3	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	1	fixed	_	LId=s-1
4	MZVŽ	MZVŽ	PROPN	NNNXX-----A---8	Abbr=Yes|Gender=Neut|NameType=Com|Polarity=Pos	11	obl	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	_	_
6	SMS	SMS	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	4	conj	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	8	punct	_	_
8	ÚVSH	ÚVSH	PROPN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|NameType=Com|Polarity=Pos	4	conj	_	_
9	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux:pass	_	_
10	úkoly	úkol	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	11	nsubj:pass	_	_
11	zabezpečovány	zabezpečovaný	ADJ	VsTP---XX-AP---	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	I	i	CCONJ	J^-------------	_	3	mark	_	LId=i-1
2	když	když	SCONJ	J,-------------	_	1	fixed	_	_
3	nejde	jít	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=o-1
5	čísla	číslo	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


