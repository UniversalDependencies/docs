---
layout: base
title:  'Statistics of ccomp in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `ccomp`

This relation is universal.

61 nodes (0%) are attached to their parents as `ccomp`.

59 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.29508196721311.

The following 6 pairs of parts of speech are connected with `ccomp`: [-pos/VERB]()-[-pos/VERB]() (53; 87% instances), [-pos/VERB]()-[-pos/ADJ]() (4; 7% instances), [-pos/NOUN]()-[-pos/ADJ]() (1; 2% instances), [-pos/NOUN]()-[-pos/VERB]() (1; 2% instances), [-pos/PRON]()-[-pos/VERB]() (1; 2% instances), [-pos/VERB]()-[-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	Ostatní	ostatní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	_
2	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	4	nsubj	_	_
4	stanoví	stanovit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	zda	zda	SCONJ	J,-------------	_	8	mark	_	_
7	budou	být	AUX	VB-P---3F-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	8	aux	_	_
8	účtovat	účtovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	ccomp	_	_
9	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=o-1
10	odložené	odložený	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	_	_
11	dani	daň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	8	obj	_	_
12	a	a	CCONJ	J^-------------	_	13	cc	_	LId=a-1
13	vykazovat	vykazovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	8	conj	_	_
14	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	_	SpaceAfter=No|LId=on-1
15	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	LId=účetní-1
2	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	_	_
3	zjišťuje	zjišťovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	8	punct	_	_
5	zda	zda	SCONJ	J,-------------	_	8	mark	_	_
6	zajištění	zajištění	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	8	nsubj	_	_
7	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	efektivní	efektivní	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	3	ccomp	_	_
9	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=na-1
10	počátku	počátek	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	8	obl	_	_
11	zajištění	zajištění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	10	nmod	_	_
12	a	a	CCONJ	J^-------------	_	16	cc	_	LId=a-1
13	dále	dále	ADV	Db------------1	_	16	cc	_	LId=dále-3
14	nejméně	málo	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	16	advmod:emph	_	LId=málo-3
15	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	16	case	_	LId=k-1
16	okamžiku	okamžik	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	10	conj	_	_
17	sestavení	sestavení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	16	nmod	_	_
18	účetní	účetní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	19	amod	_	LId=účetní-1
19	závěrky	závěrka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	17	nmod	_	SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 13 ccomp	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	22	punct	_	_
2	Zjistí-li	Zjistí-li	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	22	obl	_	_
3	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	LId=účetní-1
4	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	2	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	13	punct	_	_
6	že	že	SCONJ	J,-------------	_	13	mark	_	_
7	některé	některý	DET	PZIP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	9	det	_	_
8	účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	9	amod	_	LId=účetní-1
9	záznamy	záznam	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	13	nsubj	_	_
10	jejího	jeho	DET	PSZS2FS3-------	Case=Gen|Gender=Masc,Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	11	det	_	_
11	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	9	nmod	_	_
12	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
13	neúplné	úplný	ADJ	AAFP1----1N----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Neg	2	ccomp	_	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	15	punct	_	_
15	neprůkazné	průkazný	ADJ	AAFP1----1N----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Neg	13	conj	_	SpaceAfter=No
16	,	,	PUNCT	Z:-------------	_	17	punct	_	_
17	nesprávné	správný	ADJ	AAFP1----1N----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Neg	13	conj	_	_
18	nebo	nebo	CCONJ	J^-------------	_	19	cc	_	_
19	nesrozumitelné	srozumitelný	ADJ	AAFP1----1N----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Neg	13	conj	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	2	punct	_	_
21	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	22	cop	_	_
22	povinna	povinný	ADJ	ACQW------A----	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	0	root	_	_
23	provést	provést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	22	xcomp	_	_
24	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	26	case	_	LId=bez-1
25	zbytečného	zbytečný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	26	amod	_	_
26	odkladu	odklad	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	23	obl	_	_
27	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	28	det	_	_
28	opravu	oprava	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	23	obj	_	_
29	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	23	obl	_	_
30	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	31	case	_	LId=podle-2
31	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	29	nmod	_	_
32	3	3	NUM	C}-------------	NumForm=Roman|NumType=Card	31	nummod	_	SpaceAfter=No
33	.	.	PUNCT	Z:-------------	_	22	punct	_	_

~~~


