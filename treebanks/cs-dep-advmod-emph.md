---
layout: base
title:  'Statistics of advmod:emph in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `advmod:emph`

This relation is a language-specific subtype of [advmod]().

23576 nodes (2%) are attached to their parents as `advmod:emph`.

23362 instances of `advmod:emph` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85239226331863.

The following 44 pairs of parts of speech are connected with `advmod:emph`: [-pos/NOUN]()-[-pos/ADV]() (6575; 28% instances), [-pos/NOUN]()-[-pos/CCONJ]() (4491; 19% instances), [-pos/NOUN]()-[-pos/PART]() (2756; 12% instances), [-pos/ADV]()-[-pos/ADV]() (1189; 5% instances), [-pos/NUM]()-[-pos/ADV]() (1059; 4% instances), [-pos/VERB]()-[-pos/ADV]() (998; 4% instances), [-pos/NUM]()-[-pos/PART]() (886; 4% instances), [-pos/ADJ]()-[-pos/ADV]() (789; 3% instances), [-pos/ADV]()-[-pos/PART]() (620; 3% instances), [-pos/PROPN]()-[-pos/ADV]() (574; 2% instances), [-pos/PROPN]()-[-pos/CCONJ]() (505; 2% instances), [-pos/ADV]()-[-pos/CCONJ]() (456; 2% instances), [-pos/DET]()-[-pos/ADV]() (352; 1% instances), [-pos/VERB]()-[-pos/PART]() (351; 1% instances), [-pos/ADJ]()-[-pos/PART]() (277; 1% instances), [-pos/DET]()-[-pos/CCONJ]() (253; 1% instances), [-pos/VERB]()-[-pos/CCONJ]() (243; 1% instances), [-pos/ADJ]()-[-pos/CCONJ]() (224; 1% instances), [-pos/DET]()-[-pos/PART]() (199; 1% instances), [-pos/PRON]()-[-pos/CCONJ]() (167; 1% instances), [-pos/PRON]()-[-pos/ADV]() (165; 1% instances), [-pos/PROPN]()-[-pos/PART]() (152; 1% instances), [-pos/NUM]()-[-pos/CCONJ]() (82; 0% instances), [-pos/PRON]()-[-pos/PART]() (64; 0% instances), [-pos/CCONJ]()-[-pos/ADV]() (39; 0% instances), [-pos/PART]()-[-pos/ADV]() (27; 0% instances), [-pos/CCONJ]()-[-pos/CCONJ]() (18; 0% instances), [-pos/CCONJ]()-[-pos/PART]() (16; 0% instances), [-pos/SYM]()-[-pos/ADV]() (12; 0% instances), [-pos/SYM]()-[-pos/PART]() (11; 0% instances), [-pos/PART]()-[-pos/CCONJ]() (6; 0% instances), [-pos/NOUN]()-[-pos/ADJ]() (3; 0% instances), [-pos/NOUN]()-[-pos/NUM]() (3; 0% instances), [-pos/NOUN]()-[-pos/NOUN]() (2; 0% instances), [-pos/NOUN]()-[-pos/SCONJ]() (2; 0% instances), [-pos/PART]()-[-pos/PART]() (2; 0% instances), [-pos/ADJ]()-[-pos/SCONJ]() (1; 0% instances), [-pos/ADP]()-[-pos/ADV]() (1; 0% instances), [-pos/ADV]()-[-pos/NUM]() (1; 0% instances), [-pos/DET]()-[-pos/NOUN]() (1; 0% instances), [-pos/NUM]()-[-pos/NOUN]() (1; 0% instances), [-pos/PROPN]()-[-pos/ADJ]() (1; 0% instances), [-pos/PROPN]()-[-pos/NUM]() (1; 0% instances), [-pos/SYM]()-[-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advmod:emph	color:blue
1	(	(	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
2	Velmi	velmi	ADV	Db-------------	_	3	advmod	_	_
3	jemné	jemný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
4	pouze	pouze	ADV	Db-------------	_	6	advmod:emph	_	_
5	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=na-1
6	příjmu	příjem	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	dep	_	SpaceAfter=No
7	)	)	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:emph	color:blue
1	Poplatek	poplatek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	_	_
2	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
3	sobě	se	PRON	P6-X6----------	Case=Loc|PronType=Prs|Reflex=Yes	4	obl	_	LGloss=(zvr._zájmeno/částice)
4	zahrnuje	zahrnovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	i	i	CCONJ	J^-------------	_	6	advmod:emph	_	LId=i-1
6	obědy	oběd	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	4	obj	_	_
7	a	a	CCONJ	J^-------------	_	9	cc	_	LId=a-1
8	společenský	společenský	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	_	_
9	koktejl	koktejl	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:emph	color:blue
1	Zdůraznil	zdůraznit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	6	punct	_	_
3	že	že	SCONJ	J,-------------	_	6	mark	_	_
4	banka	banka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	_	_
5	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux	_	_
6	půjčovat	půjčovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	1	ccomp	_	_
7	ne	ne	PART	TT-------------	_	8	advmod:emph	_	_
8	firmě	firma	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	11	punct	_	_
10	ale	ale	CCONJ	J^-------------	_	11	cc	_	_
11	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	8	conj	_	_
12	osobně	osobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	11	advmod	_	SpaceAfter=No|LDeriv=osobní
13	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


