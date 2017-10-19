

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

22 nodes (0%) are attached to their parents as `orphan`.

22 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.45454545454546.

The following 8 pairs of parts of speech are connected with `orphan`: [-pos/NOUN]()-[-pos/NOUN]() (12; 55% instances), [-pos/ADV]()-[-pos/NOUN]() (2; 9% instances), [-pos/PRON]()-[-pos/NOUN]() (2; 9% instances), [-pos/X]()-[-pos/NOUN]() (2; 9% instances), [-pos/ADV]()-[-pos/PRON]() (1; 5% instances), [-pos/NOUN]()-[-pos/NUM]() (1; 5% instances), [-pos/NOUN]()-[-pos/VERB]() (1; 5% instances), [-pos/X]()-[-pos/X]() (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 orphan	color:blue
1	Rezervní	rezervní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	_	_
2	fondy	fond	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	5	punct	_	_
4	nedělitelný	dělitelný	ADJ	AAIS1----1N----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Neg	5	amod	_	_
5	fond	fond	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	conj	_	_
6	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1|ToDo=cc-without-conj
7	ostatní	ostatní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	8	amod	_	_
8	fondy	fond	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	5	orphan	_	_
9	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	10	case	_	LId=z-1
10	zisku	zisk	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	8	nmod	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 orphan	color:blue
1	(7)	(7)	PUNCT	Z:-------------	_	5	punct	_	_
2	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=o-1
3	zásobách	zásoba	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	_	_
5	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	průběžně	průběžně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	_	_
7	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	_	_
8	A	a	CCONJ	J^-------------	_	7	nmod	_	LId=a-1
9	nebo	nebo	CCONJ	J^-------------	_	10	cc	_	_
10	periodicky	periodicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	conj	_	_
11	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	10	orphan	_	_
12	B.	B.	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	11	nmod	_	_
13	U	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	14	case	_	LId=u-1
14	způsobu	způsob	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	21	obl	_	_
15	A	a	CCONJ	J^-------------	_	14	nmod	_	LId=a-1
16	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	21	expl:pass	_	_
17	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	20	case	_	LId=v-1
18	průběhu	průběh	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	17	fixed	_	_
19	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	20	amod	_	LId=účetní-1
20	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	21	obl	_	_
21	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	_
22	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	23	case	_	LId=s-1
23	využitím	využití	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	21	obl	_	_
24	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	23	nmod	_	_
25	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	27	case	_	LId=v-1
26	účtové	účtový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	_	_
27	třídě	třída	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	24	nmod	_	_
28	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	27	nummod	_	_
29	Zásoby	zásoba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	27	nmod	_	SpaceAfter=No
30	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 69	bgColor:blue
# visual-style 69	fgColor:white
# visual-style 56	bgColor:blue
# visual-style 56	fgColor:white
# visual-style 56 69 orphan	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	17	punct	_	_
2	Povinnosti	povinnost	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	17	nsubj	_	_
3	spojené	spojený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
4	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	_	LId=s-1
5	uschováním	uschování	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	3	obj	_	_
6	účetních	účetní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	LId=účetní-1
7	záznamů	záznam	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	11	punct	_	_
9	jakož	jakož	SCONJ	J,-------------	_	11	cc	_	_
10	i	i	CCONJ	J^-------------	_	11	cc	_	LId=i-1
11	povinnosti	povinnost	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	2	conj	_	_
12	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	13	case	_	LId=podle-2
13	§	§	X	X@-------------	_	11	nmod	_	_
14	33	33	X	X@-------------	_	13	flat	_	_
15	odst.	odst.	X	X@-------------	_	13	flat	_	_
16	3	3	X	X@-------------	_	13	flat	_	_
17	přecházejí	přecházet	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
18	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	20	case	_	LId=u-1
19	účetních	účetní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	20	amod	_	LId=účetní-1
20	jednotek	jednotka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	17	obl	_	_
21	uvedených	uvedený	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	20	amod	_	_
22	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	23	case	_	LId=v-1
23	a)	a)	X	X@-------------	_	21	advmod	_	_
24	§	§	X	X@-------------	_	23	flat	_	_
25	1	1	X	X@-------------	_	23	flat	_	_
26	odst.	odst.	X	X@-------------	_	23	flat	_	_
27	2	2	X	X@-------------	_	23	flat	_	_
28	písm.	písm.	X	X@-------------	_	23	flat	_	_
29	a)	a)	X	X@-------------	_	23	flat	_	_
30	až	až	X	X@-------------	_	23	flat	_	_
31	c)	c)	X	X@-------------	_	23	flat	_	_
32	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	34	case	_	LId=na-1
33	právního	právní	ADJ	AAMS4----1A----	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	34	amod	_	_
34	nástupce	nástupce	NOUN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	17	obj	_	_
35	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	37	det	_	_
36	účetní	účetní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	37	amod	_	LId=účetní-1
37	jednotky	jednotka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	34	nmod	_	SpaceAfter=No
38	,	,	PUNCT	Z:-------------	_	40	punct	_	_
39	a	a	CCONJ	J^-------------	_	40	cc	_	LId=a-1
40	není-li	není-li	X	X@-------------	_	34	dep	_	_
41	ho	on	PRON	PHZS4--3-------	Case=Acc|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	40	nsubj	_	SpaceAfter=No|LId=on-1
42	,	,	PUNCT	Z:-------------	_	40	punct	_	_
43	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	44	case	_	LId=na-1
44	likvidátora	likvidátor	NOUN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	34	conj	_	_
45	či	či	CCONJ	J^-------------	_	47	cc	_	_
46	insolvenčního	insolvenčního	X	X@-------------	_	47	nmod	_	_
47	správce	správec	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	44	conj	_	_
48	nebo	nebo	CCONJ	J^-------------	_	50	cc	_	_
49	jinou	jiný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	50	amod	_	_
50	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	44	conj	_	_
51	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	54	case	_	LId=podle-2
52	zvláštních	zvláštní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	54	amod	_	_
53	právních	právní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	54	amod	_	_
54	předpisů	předpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	17	obl	_	SpaceAfter=No
55	,	,	PUNCT	Z:-------------	_	56	punct	_	_
56	b)	b)	X	X@-------------	_	17	conj	_	_
57	§	§	X	X@-------------	_	56	flat	_	_
58	1	1	X	X@-------------	_	56	flat	_	_
59	odst.	odst.	X	X@-------------	_	56	flat	_	_
60	2	2	X	X@-------------	_	56	flat	_	_
61	písm.	písm.	X	X@-------------	_	56	flat	_	_
62	d)	d)	X	X@-------------	_	56	flat	_	_
63	až	až	X	X@-------------	_	56	flat	_	_
64	h)	h)	X	X@-------------	_	56	flat	_	_
65	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	67	case	_	LId=v-1
66	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	65	fixed	_	_
67	úmrtí	úmrtí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	56	orphan	_	_
68	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	69	case	_	LId=na-1
69	dědice	dědic	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	56	orphan	_	SpaceAfter=No
70	,	,	PUNCT	Z:-------------	_	71	punct	_	_
71	převezme-li	převezme-li	X	X@-------------	_	56	orphan	_	_
72	věci	věc	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	71	obj	_	SpaceAfter=No
73	,	,	PUNCT	Z:-------------	_	74	punct	_	_
74	práva	právo	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	72	conj	_	_
75	či	či	CCONJ	J^-------------	_	78	cc	_	_
76	jiné	jiný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	78	amod	_	_
77	majetkové	majetkový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	78	amod	_	_
78	hodnoty	hodnota	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	72	conj	_	SpaceAfter=No
79	,	,	PUNCT	Z:-------------	_	80	punct	_	_
80	náležející	náležející	ADJ	AGFP1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	72	amod	_	_
81	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	83	case	_	LId=k-1
82	účetní	účetní	ADJ	AAFS3----1A----	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	83	amod	_	LId=účetní-1
83	jednotce	jednotka	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	80	obl	_	SpaceAfter=No
84	;	;	PUNCT	Z:-------------	_	107	punct	_	_
85	připadne-li	připadne-li	X	X@-------------	_	107	advmod	_	_
86	dědictví	dědictví	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	85	nsubj	_	_
87	nebo	nebo	CCONJ	J^-------------	_	89	cc	_	_
88	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	89	det	_	_
89	část	část	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	86	conj	_	_
90	zahrnující	zahrnující	ADJ	AGFS1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	89	amod	_	_
91	věci	věc	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	90	obj	_	SpaceAfter=No
92	,	,	PUNCT	Z:-------------	_	93	punct	_	_
93	práva	právo	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	91	conj	_	_
94	či	či	CCONJ	J^-------------	_	97	cc	_	_
95	jiné	jiný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	97	amod	_	_
96	majetkové	majetkový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	97	amod	_	_
97	hodnoty	hodnota	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	91	conj	_	SpaceAfter=No
98	,	,	PUNCT	Z:-------------	_	100	punct	_	_
99	které	který	PRON	P4FP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Int,Rel	100	obj	_	_
100	náleží	náležet	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	91	acl	_	_
101	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	103	case	_	LId=k-1
102	účetní	účetní	ADJ	AAFS3----1A----	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	103	amod	_	LId=účetní-1
103	jednotce	jednotka	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	100	obl	_	SpaceAfter=No
104	,	,	PUNCT	Z:-------------	_	105	punct	_	_
105	státu	stát	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	103	appos	_	SpaceAfter=No|LId=stát-1
106	,	,	PUNCT	Z:-------------	_	85	punct	_	_
107	přecházejí	přecházet	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	17	conj	_	_
108	uvedené	uvedený	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	109	amod	_	_
109	povinnosti	povinnost	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	107	nsubj	_	_
110	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	113	case	_	LId=na-1
111	příslušnou	příslušný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	113	amod	_	_
112	organizační	organizační	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	113	amod	_	_
113	složku	složka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	107	obl	_	_
114	státu	stát	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	113	nmod	_	SpaceAfter=No|LId=stát-1
115	,	,	PUNCT	Z:-------------	_	117	punct	_	_
116	která	který	PRON	P4FS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Int,Rel	117	nsubj	_	_
117	vyrozumí	vyrozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	114	acl	_	_
118	státní	státní	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	119	amod	_	_
119	archiv	archiv	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	117	obj	_	SpaceAfter=No
120	.	.	PUNCT	Z:-------------	_	17	punct	_	_

~~~


