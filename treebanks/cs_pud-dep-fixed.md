---
layout: base
title:  'Statistics of fixed in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `fixed`

This relation is universal.

73 nodes (0%) are attached to their parents as `fixed`.

73 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15068493150685.

The following 11 pairs of parts of speech are connected with `fixed`: [-pos/ADP]()-[-pos/NOUN]() (31; 42% instances), [-pos/ADV]()-[-pos/SCONJ]() (13; 18% instances), [-pos/ADP]()-[-pos/ADP]() (11; 15% instances), [-pos/ADV]()-[-pos/ADP]() (4; 5% instances), [-pos/CCONJ]()-[-pos/ADV]() (4; 5% instances), [-pos/CCONJ]()-[-pos/DET]() (3; 4% instances), [-pos/ADP]()-[-pos/PRON]() (2; 3% instances), [-pos/CCONJ]()-[-pos/SCONJ]() (2; 3% instances), [-pos/ADP]()-[-pos/ADJ]() (1; 1% instances), [-pos/PRON]()-[-pos/ADV]() (1; 1% instances), [-pos/PRON]()-[-pos/DET]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Klášter	klášter	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj:pass	_	_
2	Disibodenberg	Disibodenberg	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	1	nmod	_	_
3	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	aux:pass	_	_
4	rozpuštěn	rozpuštěný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
5	a	a	CCONJ	J^-------------	_	9	cc	_	LId=a-1
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	LId=v-1
7	důsledku	důsledek	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	fixed	_	_
8	reformace	reformace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	_	_
9	chátral	chátrat	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Naše	můj	DET	PSIP1-P1-------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	2	det	_	LGloss=(přivlast.)
2	mobily	mobil	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	nsubj	_	_
3	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	dnes	dnes	ADV	Db-------------	_	3	advmod	_	_
5	mnohem	mnohem	ADV	Db-------------	_	6	advmod	_	_
6	víc	hodně	ADV	Dg-------2A---1	Degree=Cmp|Polarity=Pos	8	advmod:emph	_	LId=hodně-2
7	než	než	SCONJ	J,-------------	_	6	fixed	_	LId=než-2
8	telefony	telefon	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	obj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 fixed	color:blue
1	Divoch	divoch	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	xcomp	_	_
2	mu	on	PRON	PHZS3--3-------	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	3	obj	_	LId=on-1
3	neříkám	říkat	VERB	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	jen	jen	PART	TT-------------	_	5	advmod:emph	_	LId=jen-1
5	tak	tak	ADV	Db-------------	PronType=Dem	3	advmod	_	LId=tak-3
6	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	advmod	_	LId=pro-1
7	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	6	fixed	_	_
8	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	fixed	_	_
9	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	6	fixed	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


