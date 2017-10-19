---
layout: base
title:  'Statistics of obj in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `obj`

This relation is universal.

80746 nodes (5%) are attached to their parents as `obj`.

55629 instances of `obj` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.74626606890744.

The following 52 pairs of parts of speech are connected with `obj`: [-pos/VERB]()-[-pos/NOUN]() (54837; 68% instances), [-pos/VERB]()-[-pos/PRON]() (7970; 10% instances), [-pos/VERB]()-[-pos/DET]() (5695; 7% instances), [-pos/ADJ]()-[-pos/NOUN]() (5117; 6% instances), [-pos/VERB]()-[-pos/PROPN]() (2276; 3% instances), [-pos/VERB]()-[-pos/ADJ]() (1875; 2% instances), [-pos/VERB]()-[-pos/NUM]() (825; 1% instances), [-pos/VERB]()-[-pos/ADV]() (549; 1% instances), [-pos/ADJ]()-[-pos/PRON]() (420; 1% instances), [-pos/ADJ]()-[-pos/PROPN]() (398; 0% instances), [-pos/ADJ]()-[-pos/DET]() (235; 0% instances), [-pos/NOUN]()-[-pos/NOUN]() (111; 0% instances), [-pos/ADJ]()-[-pos/ADJ]() (100; 0% instances), [-pos/SYM]()-[-pos/NUM]() (68; 0% instances), [-pos/ADV]()-[-pos/NOUN]() (44; 0% instances), [-pos/ADJ]()-[-pos/NUM]() (30; 0% instances), [-pos/VERB]()-[-pos/PART]() (25; 0% instances), [-pos/VERB]()-[-pos/SYM]() (18; 0% instances), [-pos/SYM]()-[-pos/NOUN]() (14; 0% instances), [-pos/NOUN]()-[-pos/PROPN]() (13; 0% instances), [-pos/PUNCT]()-[-pos/NOUN]() (13; 0% instances), [-pos/NOUN]()-[-pos/PRON]() (12; 0% instances), [-pos/NUM]()-[-pos/NOUN]() (11; 0% instances), [-pos/PUNCT]()-[-pos/NUM]() (10; 0% instances), [-pos/ADJ]()-[-pos/ADV]() (9; 0% instances), [-pos/NUM]()-[-pos/PRON]() (8; 0% instances), [-pos/ADV]()-[-pos/PRON]() (7; 0% instances), [-pos/NOUN]()-[-pos/ADJ]() (7; 0% instances), [-pos/NOUN]()-[-pos/NUM]() (7; 0% instances), [-pos/PROPN]()-[-pos/NOUN]() (7; 0% instances), [-pos/ADV]()-[-pos/PROPN]() (4; 0% instances), [-pos/NOUN]()-[-pos/DET]() (4; 0% instances), [-pos/DET]()-[-pos/NOUN]() (3; 0% instances), [-pos/ADP]()-[-pos/NOUN]() (2; 0% instances), [-pos/DET]()-[-pos/ADJ]() (2; 0% instances), [-pos/PROPN]()-[-pos/PROPN]() (2; 0% instances), [-pos/VERB]()-[-pos/ADP]() (2; 0% instances), [-pos/VERB]()-[-pos/INTJ]() (2; 0% instances), [-pos/ADJ]()-[-pos/PART]() (1; 0% instances), [-pos/ADJ]()-[-pos/SYM]() (1; 0% instances), [-pos/ADV]()-[-pos/DET]() (1; 0% instances), [-pos/DET]()-[-pos/DET]() (1; 0% instances), [-pos/NOUN]()-[-pos/ADV]() (1; 0% instances), [-pos/NOUN]()-[-pos/CCONJ]() (1; 0% instances), [-pos/NUM]()-[-pos/ADV]() (1; 0% instances), [-pos/PART]()-[-pos/ADV]() (1; 0% instances), [-pos/PART]()-[-pos/PART]() (1; 0% instances), [-pos/PRON]()-[-pos/DET]() (1; 0% instances), [-pos/PRON]()-[-pos/NOUN]() (1; 0% instances), [-pos/PROPN]()-[-pos/NUM]() (1; 0% instances), [-pos/SYM]()-[-pos/CCONJ]() (1; 0% instances), [-pos/VERB]()-[-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Zvedněte	zvednout	VERB	Vi-P---2--A----	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_
2	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	1	obj	_	_
3	a	a	CCONJ	J^-------------	_	4	cc	_	LId=a-1
4	zavolejte	zavolat	VERB	Vi-P---2--A----	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	1	conj	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obj	color:blue
1	Změny	změna	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	_	_
2	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	citelné	citelný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	6	punct	_	_
5	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	třeba	třeba	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	3	conj	_	LId=třeba-1
7	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	9	obj	_	LId=on-1|LGloss=(oni/ono)
8	lépe	dobře	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	9	advmod	_	_
9	prezentovat	prezentovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obj	color:blue
1	Prodej	prodej	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj:pass	_	LGloss=(akt_prodeje_zboží)
2	či	či	CCONJ	J^-------------	_	3	cc	_	_
3	pronájem	pronájem	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	conj	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	_	LGloss=(zvr._zájmeno/částice)
5	tedy	tedy	ADV	Db-------------	_	6	advmod	_	_
6	uskuteční	uskutečnit	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	dejme	dát	VERB	Vi-P---1--A----	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|VerbForm=Fin	6	dep	_	_
8	tomu	ten	DET	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	7	obj	_	_
9	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	12	case	_	LId=k-1
10	1	1	NUM	C=-------------	NumForm=Digit|NumType=Card	12	compound	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	10	punct	_	_
12	3	3	NUM	C=-------------	NumForm=Digit|NumType=Card	6	obl	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	12	punct	_	_
14	1994	1994	NUM	C=-------------	NumForm=Digit|NumType=Card	12	compound	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


