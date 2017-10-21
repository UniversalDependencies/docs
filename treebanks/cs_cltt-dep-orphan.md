---
layout: base
title:  'Statistics of orphan in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `orphan`

This relation is universal.

22 nodes (0%) are attached to their parents as `orphan`.

22 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.63636363636364.

The following 8 pairs of parts of speech are connected with `orphan`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (12; 55% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (1; 5% instances).


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
6	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
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
3	zásobách	zásoba	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	5	obl:arg	_	_
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
# visual-style 50	bgColor:blue
# visual-style 50	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 50 orphan	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	14	punct	_	_
2	Povinnosti	povinnost	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	14	nsubj	_	_
3	spojené	spojený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
4	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	_	LId=s-1
5	uschováním	uschování	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	3	obl:arg	_	_
6	účetních	účetní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	LId=účetní-1
7	záznamů	záznam	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	11	punct	_	_
9	jakož	jakož	SCONJ	J,-------------	_	11	cc	_	_
10	i	i	CCONJ	J^-------------	_	11	cc	_	LId=i-1
11	povinnosti	povinnost	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	2	conj	_	_
12	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	13	case	_	LId=podle-2
13	§_33_odst._3	§_33_odst._3	X	X@-------------	_	11	nmod	_	_
14	přecházejí	přecházet	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
15	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	17	case	_	LId=u-1
16	účetních	účetní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	17	amod	_	LId=účetní-1
17	jednotek	jednotka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	14	obl	_	_
18	uvedených	uvedený	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	17	amod	_	_
19	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	20	case	_	LId=v-1
20	a)_§_1_odst._2_písm._a)_až_c)	a)_§_1_odst._2_písm._a)_až_c)	X	X@-------------	_	18	advmod	_	_
21	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	23	case	_	LId=na-1
22	právního	právní	ADJ	AAMS4----1A----	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	23	amod	_	_
23	nástupce	nástupce	NOUN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	14	obl:arg	_	_
24	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	26	det	_	_
25	účetní	účetní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	26	amod	_	LId=účetní-1
26	jednotky	jednotka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	23	nmod	_	SpaceAfter=No
27	,	,	PUNCT	Z:-------------	_	29	punct	_	_
28	a	a	CCONJ	J^-------------	_	29	cc	_	LId=a-1
29	není-li	není-li	X	X@-------------	_	23	dep	_	_
30	ho	on	PRON	PHZS4--3-------	Case=Acc|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	29	nsubj	_	SpaceAfter=No|LId=on-1
31	,	,	PUNCT	Z:-------------	_	29	punct	_	_
32	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	33	case	_	LId=na-1
33	likvidátora	likvidátor	NOUN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	23	conj	_	_
34	či	či	CCONJ	J^-------------	_	33	cc	_	_
35	insolvenčního	insolvenčního	X	X@-------------	_	36	nmod	_	_
36	správce	správec	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	33	conj	_	_
37	nebo	nebo	CCONJ	J^-------------	_	39	cc	_	_
38	jinou	jiný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	39	amod	_	_
39	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	33	conj	_	_
40	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	43	case	_	LId=podle-2
41	zvláštních	zvláštní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	43	amod	_	_
42	právních	právní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	43	amod	_	_
43	předpisů	předpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	14	obl	_	SpaceAfter=No
44	,	,	PUNCT	Z:-------------	_	45	punct	_	_
45	b)_§_1_odst._2_písm._d)_až_h)	b)_§_1_odst._2_písm._d)_až_h)	X	X@-------------	_	14	conj	_	_
46	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	48	case	_	LId=v-1
47	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	46	fixed	_	_
48	úmrtí	úmrtí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	45	orphan	_	_
49	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	50	case	_	LId=na-1
50	dědice	dědic	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	45	orphan	_	SpaceAfter=No
51	,	,	PUNCT	Z:-------------	_	52	punct	_	_
52	převezme-li	převezme-li	X	X@-------------	_	45	orphan	_	_
53	věci	věc	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	52	obj	_	SpaceAfter=No
54	,	,	PUNCT	Z:-------------	_	55	punct	_	_
55	práva	právo	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	53	conj	_	_
56	či	či	CCONJ	J^-------------	_	59	cc	_	_
57	jiné	jiný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	59	amod	_	_
58	majetkové	majetkový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	59	amod	_	_
59	hodnoty	hodnota	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	53	conj	_	SpaceAfter=No
60	,	,	PUNCT	Z:-------------	_	61	punct	_	_
61	náležející	náležející	ADJ	AGFP1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	53	amod	_	_
62	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	64	case	_	LId=k-1
63	účetní	účetní	ADJ	AAFS3----1A----	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	64	amod	_	LId=účetní-1
64	jednotce	jednotka	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	61	obl	_	SpaceAfter=No
65	;	;	PUNCT	Z:-------------	_	88	punct	_	_
66	připadne-li	připadne-li	X	X@-------------	_	88	advmod	_	_
67	dědictví	dědictví	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	66	nsubj	_	_
68	nebo	nebo	CCONJ	J^-------------	_	70	cc	_	_
69	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	70	det	_	_
70	část	část	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	67	conj	_	_
71	zahrnující	zahrnující	ADJ	AGFS1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	70	amod	_	_
72	věci	věc	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	71	obj	_	SpaceAfter=No
73	,	,	PUNCT	Z:-------------	_	74	punct	_	_
74	práva	právo	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	72	conj	_	_
75	či	či	CCONJ	J^-------------	_	78	cc	_	_
76	jiné	jiný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	78	amod	_	_
77	majetkové	majetkový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	78	amod	_	_
78	hodnoty	hodnota	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	72	conj	_	SpaceAfter=No
79	,	,	PUNCT	Z:-------------	_	81	punct	_	_
80	které	který	DET	P4FP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Int,Rel	81	obj	_	_
81	náleží	náležet	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	72	acl	_	_
82	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	84	case	_	LId=k-1
83	účetní	účetní	ADJ	AAFS3----1A----	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	84	amod	_	LId=účetní-1
84	jednotce	jednotka	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	81	obl	_	SpaceAfter=No
85	,	,	PUNCT	Z:-------------	_	86	punct	_	_
86	státu	stát	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	84	appos	_	SpaceAfter=No|LId=stát-1
87	,	,	PUNCT	Z:-------------	_	66	punct	_	_
88	přecházejí	přecházet	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	conj	_	_
89	uvedené	uvedený	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	90	amod	_	_
90	povinnosti	povinnost	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	88	nsubj	_	_
91	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	94	case	_	LId=na-1
92	příslušnou	příslušný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	94	amod	_	_
93	organizační	organizační	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	94	amod	_	_
94	složku	složka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	88	obl	_	_
95	státu	stát	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	94	nmod	_	SpaceAfter=No|LId=stát-1
96	,	,	PUNCT	Z:-------------	_	98	punct	_	_
97	která	který	DET	P4FS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Int,Rel	98	nsubj	_	_
98	vyrozumí	vyrozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	95	acl	_	_
99	státní	státní	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	100	amod	_	_
100	archiv	archiv	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	98	obj	_	SpaceAfter=No
101	.	.	PUNCT	Z:-------------	_	14	punct	_	_

~~~


