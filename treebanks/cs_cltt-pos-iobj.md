

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

38 nodes (0%) are attached to their parents as `iobj`.

25 instances of `iobj` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.02631578947368.

The following 3 pairs of parts of speech are connected with `iobj`: [-pos/VERB]()-[-pos/NOUN]() (29; 76% instances), [-pos/VERB]()-[-pos/PRON]() (8; 21% instances), [-pos/VERB]()-[-pos/ADJ]() (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	4	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	4	nsubj	_	_
4	mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	pověřit	pověřit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	xcomp	_	_
6	vedením	vedení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	5	iobj	_	_
7	svého	svůj	DET	P8ZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	8	det	_	LId=svůj-1
8	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	6	nmod	_	_
9	i	i	CCONJ	J^-------------	_	14	advmod:emph	_	LId=i-1
10	jinou	jiný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	_	_
11	právnickou	právnický	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	_	_
12	nebo	nebo	CCONJ	J^-------------	_	13	cc	_	_
13	fyzickou	fyzický	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	conj	_	_
14	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	5	obj	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 20 iobj	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	12	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	12	nsubj	_	_
4	uvedené	uvedený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=v-1
6	§	§	X	X@-------------	_	4	advmod	_	_
7	20	20	X	X@-------------	_	6	flat	_	_
8	odst.	odst.	X	X@-------------	_	6	flat	_	_
9	1	1	X	X@-------------	_	6	flat	_	_
10	písm.	písm.	X	X@-------------	_	6	flat	_	_
11	e)	e)	X	X@-------------	_	6	flat	_	_
12	vyhotovují	vyhotovovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
13	výroční	výroční	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	_	_
14	zprávu	zpráva	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	12	obj	_	_
15	nebo	nebo	CCONJ	J^-------------	_	17	cc	_	_
16	obdobný	obdobný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	17	amod	_	_
17	dokument	dokument	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	14	conj	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	23	punct	_	_
19	pokud	pokud	SCONJ	J,-------------	_	23	mark	_	_
20	jim	on	PRON	PPXP3--3-------	Case=Dat|Number=Plur|Person=3|PronType=Prs	23	iobj	_	LId=on-1
21	tuto	tuto	ADV	Db-------------	_	22	advmod	_	_
22	povinnost	povinnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	23	obj	_	_
23	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	_
24	zvláštní	zvláštní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	26	amod	_	_
25	právní	právní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	26	amod	_	_
26	předpis	předpis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	23	nsubj	_	SpaceAfter=No
27	.	.	PUNCT	Z:-------------	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 23 iobj	color:blue
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


