

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 ccomp	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	14	punct	_	_
2	Zjistí-li	Zjistí-li	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	14	obl	_	_
3	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	LId=účetní-1
4	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	2	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	_	_
6	že	že	SCONJ	J,-------------	_	10	mark	_	_
7	obsah	obsah	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	10	nsubj	_	_
8	účetního	účetní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	_	LId=účetní-1
9	záznamu	záznam	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	7	nmod	_	_
10	neodpovídá	odpovídat	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
11	skutečnosti	skutečnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	10	obj	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	10	punct	_	_
13	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	_	_
14	povinna	povinný	ADJ	ACQW------A----	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	0	root	_	_
15	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	17	case	_	LId=od-1
16	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	17	det	_	_
17	okamžiku	okamžik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	18	obl	_	_
18	považovat	považovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	14	xcomp	_	_
19	tento	tento	DET	PDIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	21	det	_	_
20	účetní	účetní	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	21	amod	_	LId=účetní-1
21	záznam	záznam	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	18	obj	_	_
22	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	23	case	_	LId=za-1
23	neprůkazný	průkazný	ADJ	AAIS4----1N----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Neg	18	iobj	_	SpaceAfter=No
24	,	,	PUNCT	Z:-------------	_	26	punct	_	_
25	byť	byť	SCONJ	J,-------------	_	26	mark	_	_
26	splňuje	splňovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	18	advcl	_	_
27	ustanovení	ustanovení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	26	obj	_	_
28	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	27	nmod	_	_
29	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	28	nummod	_	_
30	písm.	písm.	X	X@-------------	_	29	nmod	_	_
31	b)	b)	X	X@-------------	_	30	flat	_	_
32	a	a	X	X@-------------	_	30	flat	_	_
33	c)	c)	X	X@-------------	_	30	flat	_	SpaceAfter=No
34	.	.	PUNCT	Z:-------------	_	14	punct	_	_

~~~


