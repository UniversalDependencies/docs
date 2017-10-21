---
layout: base
title:  'Statistics of det in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="cs_cltt-dep-det-nummod.html">det:nummod</a></tt>.

647 nodes (2%) are attached to their parents as `det`.

641 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25502318392581.

The following 4 pairs of parts of speech are connected with `det`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (644; 100% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Termín	termín	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	obj	_	_
2	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	inventarizace	inventarizace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	_	_
4	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	5	obj	_	_
5	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	sama	sám	DET	PLFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Emp	8	xcomp	_	_
7	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	_	LId=účetní-1
8	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 72	bgColor:blue
# visual-style 72	fgColor:white
# visual-style 70	bgColor:blue
# visual-style 70	fgColor:white
# visual-style 70 72 det	color:blue
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
16	,	,	PUNCT	Z:-------------	_	24	punct	_	_
17	kromě	kromě	ADP	RR--2----------	AdpType=Prep|Case=Gen	21	case	_	_
18	oblasti	oblast	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	14	fixed	_	_
19	činnosti	činnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	15	nmod	_	_
20	které	který	DET	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	24	nsubj	_	_
21	informací	informace	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	13	obl	_	_
22	výzkumu	výzkum	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	10	nmod	_	_
23	účetní	účetní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	_	LId=účetní-1
24	nastaly	nastat	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	12	acl	_	_
25	nezbytných	zbytný	ADJ	AAIP2----1N----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Neg	21	amod	_	_
26	a	a	CCONJ	J^-------------	_	30	cc	_	LId=a-1
27	jednotky	jednotka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	19	nmod	_	SpaceAfter=No
28	až	až	PART	TT-------------	_	36	advmod:emph	_	LId=až-3
29	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	33	case	_	LId=pro-1
30	vývoje	vývoj	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	22	conj	_	SpaceAfter=No
31	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	36	case	_	LId=po-1
32	,	,	PUNCT	Z:-------------	_	56	punct	_	_
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
59	,	,	PUNCT	Z:-------------	_	70	punct	_	_
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


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 det	color:blue
1	Právnické	právnický	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
2	osoby	osoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	23	nsubj	_	_
3	založené	založený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
4	za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	_	LId=za-1
5	účelem	účel	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	3	obl	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	_	_
7	aby	aby	SCONJ	J,-------------	_	10	mark	_	_
8	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	10	aux	_	_
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	_	_
10	staly	stát	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	acl	_	LId=stát-2
11	vlastníkem	vlastník	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	10	obj	_	_
12	domu	dům	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	11	nmod	_	_
13	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	14	case	_	LId=s-1
14	byty	byt	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	12	nmod	_	_
15	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	16	case	_	LId=v-1
16	nájmu	nájem	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	14	nmod	_	_
17	společníků	společník	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	16	nmod	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	19	punct	_	_
19	členů	člen	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	17	conj	_	_
20	nebo	nebo	CCONJ	J^-------------	_	21	cc	_	_
21	zakladatelů	zakladatel	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	17	conj	_	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	10	punct	_	_
23	nemusí	muset	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
24	tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	25	det	_	_
25	dlouhodobý	dlouhodobý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	29	amod	_	_
26	nehmotný	hmotný	ADJ	AAIS4----1N----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Neg	29	amod	_	_
27	a	a	CCONJ	J^-------------	_	28	cc	_	LId=a-1
28	hmotný	hmotný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	26	conj	_	_
29	majetek	majetek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	30	obj	_	_
30	odpisovat	odpisovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	23	xcomp	_	SpaceAfter=No
31	,	,	PUNCT	Z:-------------	_	33	punct	_	_
32	pokud	pokud	SCONJ	J,-------------	_	33	mark	_	_
33	neslouží	sloužit	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	23	advcl	_	_
34	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	35	case	_	LId=k-1
35	podnikání	podnikání	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	33	obl	_	SpaceAfter=No
36	.	.	PUNCT	Z:-------------	_	23	punct	_	_

~~~


