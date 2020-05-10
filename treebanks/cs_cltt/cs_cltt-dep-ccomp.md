---
layout: base
title:  'Statistics of ccomp in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `ccomp`

This relation is universal.

21 nodes (0%) are attached to their parents as `ccomp`.

19 instances of `ccomp` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.52380952380952.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (13; 62% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (4; 19% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


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
11	dani	daň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	8	obl:arg	_	_
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
# visual-style 77	bgColor:blue
# visual-style 77	fgColor:white
# visual-style 72	bgColor:blue
# visual-style 72	fgColor:white
# visual-style 72 77 ccomp	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	13	punct	_	_
2	c)	c)	X	X@-------------	_	53	nmod	_	_
3	b)	b)	X	X@-------------	_	2	conj	_	_
4	a)	a)	X	X@-------------	_	2	conj	_	_
5	Výroční	výroční	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	_	_
6	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=o-1
7	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=o-1
8	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=o-1
9	zpráva	zpráva	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	13	nsubj	_	_
10	aktivitách	aktivita	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	2	nmod	_	_
11	předpokládaném	předpokládaný	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	15	amod	_	_
12	skutečnostech	skutečnost	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	4	nmod	_	SpaceAfter=No
13	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
14	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	22	case	_	LId=v-1
15	vývoji	vývoj	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	nmod	_	_
16	,	,	PUNCT	Z:-------------	_	15	punct	_	_
17	kromě	kromě	ADP	RR--2----------	AdpType=Prep|Case=Gen	21	case	_	_
18	oblasti	oblast	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	14	fixed	_	_
19	činnosti	činnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	15	nmod	_	_
20	které	který	DET	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	24	nsubj	_	_
21	informací	informace	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	13	obl	_	_
22	výzkumu	výzkum	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	10	nmod	_	_
23	účetní	účetní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	_	LId=účetní-1
24	nastaly	nastat	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	12	acl:relcl	_	_
25	nezbytných	zbytný	ADJ	AAIP2----1N----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Neg	21	amod	_	_
26	a	a	CCONJ	J^-------------	_	30	cc	_	LId=a-1
27	jednotky	jednotka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	19	nmod	_	SpaceAfter=No
28	až	až	PART	TT-------------	_	36	advmod:emph	_	LId=až-3
29	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	33	case	_	LId=pro-1
30	vývoje	vývoj	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	22	conj	_	SpaceAfter=No
31	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	36	case	_	LId=po-1
32	,	,	PUNCT	Z:-------------	_	33	punct	_	_
33	naplnění	naplnění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	25	obl	_	_
34	rozvahovém	rozvahový	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	36	amod	_	_
35	účelu	účel	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	33	nmod	_	_
36	dni	den	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	24	obl	_	_
37	výroční	výroční	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	39	amod	_	_
38	a	a	CCONJ	J^-------------	_	42	cc	_	LId=a-1
39	zprávy	zpráva	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	35	nmod	_	_
40	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	42	cop	_	_
41	dále	dále	ADV	Db------------1	_	43	advmod	_	LId=dále-3
42	významné	významný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	24	conj	_	_
43	obsahovat	obsahovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	13	xcomp	_	_
44	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	46	case	_	LId=pro-1
45	nejméně	málo	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	53	advmod:emph	_	LId=málo-3
46	naplnění	naplnění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	42	obl	_	_
47	finanční	finanční	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	53	amod	_	_
48	účelu	účel	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	46	nmod	_	_
49	a	a	CCONJ	J^-------------	_	51	cc	_	LId=a-1
50	výroční	výroční	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	52	amod	_	_
51	nefinanční	finanční	ADJ	AAFP4----1N----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Neg	47	conj	_	_
52	zprávy	zpráva	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	48	nmod	_	_
53	informace	informace	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	43	obj	_	_
54	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	55	case	_	LId=podle-2
55	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	46	nmod	_	_
56	d)	d)	X	X@-------------	_	2	conj	_	_
57	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	55	nummod	_	SpaceAfter=No
58	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	56	case	_	LId=o-1
59	,	,	PUNCT	Z:-------------	_	60	punct	_	_
60	aktivitách	aktivita	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	56	nmod	_	_
61	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	63	case	_	LId=v-1
62	oblasti	oblast	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	61	fixed	_	_
63	ochrany	ochrana	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	60	nmod	_	_
64	životního	životní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	65	amod	_	_
65	prostředí	prostředí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	63	nmod	_	_
66	a	a	CCONJ	J^-------------	_	68	cc	_	LId=a-1
67	pracovněprávních	pracovněprávní	ADJ	AAIP6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	68	amod	_	_
68	vztazích	vztah	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	60	conj	_	SpaceAfter=No
69	,	,	PUNCT	Z:-------------	_	70	punct	_	_
70	e)	e)	X	X@-------------	_	2	conj	_	_
71	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	70	case	_	LId=o-1
72	tom	ten	DET	PDZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Dem	70	det	_	SpaceAfter=No
73	,	,	PUNCT	Z:-------------	_	77	punct	_	_
74	zda	zda	SCONJ	J,-------------	_	77	mark	_	_
75	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	76	amod	_	LId=účetní-1
76	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	77	nsubj	_	_
77	má	mít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	72	ccomp	_	_
78	organizační	organizační	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	79	amod	_	_
79	složku	složka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	77	obj	_	_
80	podniku	podnik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	79	nmod	_	_
81	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	82	case	_	LId=v-1
82	zahraničí	zahraničí	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	77	obl	_	SpaceAfter=No
83	,	,	PUNCT	Z:-------------	_	85	punct	_	_
84	f)	f)	X	X@-------------	_	85	nmod	_	_
85	požadované	požadovaný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	conj	_	_
86	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	89	case	_	LId=podle-2
87	zvláštních	zvláštní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	89	amod	_	_
88	právních	právní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	89	amod	_	_
89	předpisů	předpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	85	obl	_	SpaceAfter=No
90	.	.	PUNCT	Z:-------------	_	13	punct	_	_

~~~


