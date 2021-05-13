---
layout: base
title:  'Statistics of orphan in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `orphan`

This relation is universal.

10 nodes (0%) are attached to their parents as `orphan`.

9 instances of `orphan` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 6 pairs of parts of speech are connected with `orphan`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (4; 40% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (2; 20% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 orphan	color:blue
1	Imíonn	imigh	VERB	VI	Mood=Ind|Tense=Pres	0	root	_	_
2	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	suas	suas	ADV	Dir	_	1	advmod	_	_
4	chuig	chuig	ADP	Simp	_	6	case	_	_
5	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	staighre	staighre	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	obl	_	_
7	agus	agus	CCONJ	Coord	_	8	cc	_	_
8	fuadar	fuadar	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	orphan	_	_
9	fútha	faoi	ADP	_	Number=Plur|Person=3	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 106	bgColor:blue
# visual-style 106	fgColor:white
# visual-style 105	bgColor:blue
# visual-style 105	fgColor:white
# visual-style 105 106 orphan	color:blue
1	(4)	(4)	NUM	Item	_	70	list	_	_
2	D'	de	ADP	Simp	_	3	case	_	SpaceAfter=No
3	fhonn	fonn	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	6	obj	_	_
4	amhras	amhras	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	obj	_	_
5	a	a	PART	Inf	PartType=Inf	6	mark	_	_
6	sheachaint	seachaint	NOUN	Noun	Form=Len|VerbForm=Inf	70	xcomp	_	SpaceAfter=No
7	,	,	PUNCT	Punct	_	9	punct	_	_
8	aon	aon	DET	Det	PronType=Ind	9	det	_	_
9	achtachán	achtachán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	70	advcl	_	_
10	a	a	PART	Vb	Form=Indirect|PartType=Vb|PronType=Rel	11	mark:prt	_	_
11	ndéantar	déan	VERB	VTI	Form=Ecl|Mood=Ind|Person=0|Tense=Pres	9	acl:relcl	_	_
12	leasú	leasú	NOUN	Noun	VerbForm=Inf	11	xcomp	_	_
13	air	ar	ADP	Prep	Gender=Masc|Number=Sing|Person=3	11	obl:prep	_	_
14	le	le	ADP	Simp	_	15	case	_	_
15	halt	alt	NOUN	Noun	Case=NomAcc|Form=HPref|Gender=Masc|Number=Sing	11	obl	_	_
16	den	de	ADP	Art	Number=Sing|PronType=Art	17	case	_	_
17	Acht	acht	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	15	nmod	_	_
18	seo	seo	DET	Det	PronType=Dem	17	det	_	_
19	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	20	nsubj	_	_
20	scoireann	scoir	VERB	VTI	Mood=Ind|Tense=Pres	15	acl:relcl	_	_
21	de	de	ADP	Simp	_	22	case	_	_
22	bheith	bheith	NOUN	Noun	Form=Len|VerbForm=Inf	20	xcomp	_	_
23	i	i	ADP	Simp	_	24	case	_	_
24	ngníomh	gníomh	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	22	xcomp:pred	_	_
25	amhail	amhail	SCONJ	Subord	_	32	mark	_	_
26	ar	ar	ADP	Simp	_	30	case	_	_
27	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	30	det	_	_
28	agus	agus	CCONJ	Coord	_	30	cc	_	_
29	ón	ó	ADP	Art	Number=Sing|PronType=Art	26	conj	_	_
30	lá	lá	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	20	obl	_	_
31	dá	do	PART	Vb	Form=Indirect|PartType=Vb|PronType=Rel	32	obl	_	_
32	dtagraítear	tagair	VERB	VTI	Form=Ecl|Mood=Ind|Person=0|Tense=Pres	30	acl:relcl	_	_
33	i	i	ADP	Simp	_	34	case	_	_
34	bhfo-alt	fo-alt	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Ecl|Gender=Masc|Number=Sing	32	obl	_	_
35	(1)	(1)	NUM	Item	_	34	nmod	_	_
36	nó	nó	CCONJ	Coord	_	48	cc	_	SpaceAfter=No
37	,	,	PUNCT	Punct	_	38	punct	_	_
38	de	de	SCONJ	Subord	_	42	mark	_	_
39	réir	réir	SCONJ	Subord	_	38	fixed	_	_
40	mar	mar	SCONJ	Subord	_	42	mark	_	_
41	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	42	mark:prt	_	_
42	bheidh	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Fut	32	advcl	_	SpaceAfter=No
43	,	,	PUNCT	Punct	_	44	punct	_	_
44	amhail	amhail	SCONJ	Subord	_	48	mark	_	_
45	ar	ar	ADP	Simp	_	48	case	_	_
46	agus	agus	CCONJ	Coord	_	47	cc	_	_
47	ó	ó	ADP	Simp	_	48	orphan	_	_
48	dháta	dáta	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	30	conj	_	_
49	éagtha	éag	NOUN	Noun	Case=Gen|VerbForm=Inf	48	nmod	_	_
50	na	an	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	51	det	_	_
51	tréimhse	tréimhse	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	48	nmod	_	_
52	ar	is	AUX	Cop	Tense=Pres|VerbForm=Cop	53	cop	_	_
53	lena	le	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	48	acl:relcl	_	_
54	linn	linn	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	53	nmod	_	_
55	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	56	mark:prt	_	_
56	choimeádfar	coimeád	VERB	VTI	Form=Len|Mood=Ind|Person=0|Tense=Fut	53	csubj:cleft	_	_
57	i	i	ADP	Simp	_	58	case	_	_
58	ngníomh	gníomh	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	56	obl	_	_
59	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	56	obj	_	_
60	faoi	faoi	ADP	Simp	_	61	case	_	_
61	fho-alt	fo-alt	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	56	obl	_	_
62	(2)	(2)	NUM	Item	_	61	nmod	_	_
63	(	(	PUNCT	Punct	_	66	punct	_	SpaceAfter=No
64	'	'	PUNCT	Punct	_	66	punct	_	_
65	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	66	det	_	_
66	t-éag	éag	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	61	nmod	_	_
67	'	'	PUNCT	Punct	_	66	punct	_	SpaceAfter=No
68	)	)	PUNCT	Punct	_	66	punct	_	SpaceAfter=No
69	,	,	PUNCT	Punct	_	66	punct	_	_
70	beidh	bí	VERB	VI	Mood=Ind|Tense=Fut	0	root	_	_
71	feidhm	feidhm	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	70	nsubj	_	_
72	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	70	obl:prep	_	_
73	agus	agus	CCONJ	Coord	_	74	cc	_	_
74	beidh	bí	VERB	VI	Mood=Ind|Tense=Fut	70	conj	_	_
75	éifeacht	éifeacht	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	74	nsubj	_	_
76	leis	le	ADP	Prep	Gender=Masc|Number=Sing|Person=3	74	obl:prep	_	_
77	amhail	amhail	SCONJ	Subord	_	70	mark	_	_
78	ar	ar	ADP	Simp	_	82	case	_	_
79	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	82	det	_	_
80	agus	agus	CCONJ	Coord	_	81	cc	_	_
81	ón	ó	ADP	Art	Number=Sing|PronType=Art	78	conj	_	_
82	lá	lá	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	70	obl	_	_
83	sin	sin	DET	Det	PronType=Dem	82	det	_	_
84	nó	nó	CCONJ	Coord	_	86	cc	_	SpaceAfter=No
85	,	,	PUNCT	Punct	_	84	punct	_	_
86	de	de	SCONJ	Subord	_	77	conj	_	_
87	réir	réir	SCONJ	Subord	_	86	fixed	_	_
88	mar	mar	SCONJ	Subord	_	90	mark	_	_
89	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	90	mark:prt	_	_
90	bheidh	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Fut	86	advcl	_	SpaceAfter=No
91	,	,	PUNCT	Punct	_	92	punct	_	_
92	amhail	amhail	SCONJ	Subord	_	90	mark	_	_
93	ar	ar	ADP	Simp	_	97	case	_	_
94	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	97	det	_	_
95	agus	agus	CCONJ	Coord	_	96	cc	_	_
96	ón	ó	ADP	Art	Number=Sing|PronType=Art	93	conj	_	_
97	éag	éag	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	90	obl	_	SpaceAfter=No
98	,	,	PUNCT	Punct	_	99	punct	_	_
99	mar	mar	SCONJ	Subord	_	101	mark	_	_
100	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	101	mark:prt	_	_
101	bhí	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Past	90	advcl	_	_
102	feidhm	feidhm	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	101	nsubj	_	_
103	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	101	obl:prep	_	_
104	agus	agus	CCONJ	Coord	_	103	cc	_	_
105	éifeacht	éifeacht	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	103	conj	_	_
106	leis	le	ADP	Prep	Gender=Masc|Number=Sing|Person=3	105	orphan	_	_
107	díreach	díreach	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	101	obl:tmod	_	_
108	roimh	roimh	ADP	Simp	_	114	case	_	_
109	dháta	dáta	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	114	obj	_	_
110	an	an	DET	Art	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	111	det	_	_
111	Achta	acht	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	109	nmod	_	_
112	seo	seo	DET	Det	PronType=Dem	111	det	_	_
113	a	a	PART	Inf	PartType=Inf	114	mark	_	_
114	rith	rith	NOUN	Noun	VerbForm=Inf	101	xcomp	_	_
115	ach	ach	SCONJ	Subord	_	116	mark	_	_
116	sin	sin	PRON	Dem	PronType=Dem	101	ccomp	_	_
117	faoi	faoi	ADP	Cmpd	PrepForm=Cmpd	120	case	_	_
118	réir	réir	NOUN	Cmpd	Case=NomAcc|Gender=Fem|Number=Sing|PrepForm=Cmpd	117	fixed	_	_
119	aon	aon	DET	Det	PronType=Ind	120	det	_	_
120	leasuithe	leasú	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Strong|Number=Plur	116	xcomp:pred	_	_
121	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	122	obj	_	_
122	dhéanfar	déan	VERB	VTI	Form=Len|Mood=Ind|Person=0|Tense=Fut	120	acl:relcl	_	_
123	le	le	ADP	Simp	_	125	case	_	_
124	haon	aon	DET	Det	Form=HPref|PronType=Ind	125	det	_	_
125	Acht	acht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	122	obl	_	_
126	eile	eile	DET	Det	PronType=Dem	125	det	_	_
127	den	de	ADP	Art	Number=Sing|PronType=Art	128	case	_	_
128	Oireachtas	oireachtas	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	125	nmod	_	_
129	tar	tar	ADP	Cmpd	PrepForm=Cmpd	132	case	_	_
130	éis	éis	NOUN	Cmpd	Case=NomAcc|Number=Sing|PrepForm=Cmpd	129	fixed	_	_
131	an	an	DET	Art	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	132	det	_	_
132	dáta	dáta	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	122	obl	_	_
133	rite	rite	ADJ	Adj	VerbForm=Part	132	amod	_	_
134	sin	sin	DET	Det	PronType=Dem	132	det	_	SpaceAfter=No
135	.	.	PUNCT	.	_	70	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 31 orphan	color:blue
1	"	"	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	3	cop	_	_
3	maith	maith	ADJ	Adj	Degree=Pos	0	root	_	_
4	liom	le	ADP	Prep	Number=Sing|Person=1	3	obl:prep	_	_
5	go	go	PART	Ad	PartType=Ad	6	mark:prt	_	_
6	mór	mór	ADJ	Adj	Degree=Pos	3	advmod	_	_
7	bhur	bhur	DET	Det	Number=Plur|Person=2|Poss=Yes	8	nmod:poss	_	_
8	dtaispeántais	taispeántas	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Ecl|Gender=Masc|Number=Plur	3	nsubj	_	_
9	mar	mar	SCONJ	Subord	_	10	mark	_	_
10	tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	3	advcl	_	_
11	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	10	nsubj	_	_
12	níos	níos	PART	Cmp	PartType=Comp	13	mark:prt	_	_
13	éasca	éasca	ADJ	Adj	Degree=Cmp,Sup	10	xcomp:pred	_	_
14	leabhair	leabhar	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	16	obj	_	_
15	a	a	PART	Inf	PartType=Inf	16	mark	_	_
16	bhrabhsáil	brabhsáil	NOUN	Noun	Form=Len|VerbForm=Inf	10	xcomp	_	_
17	agus	agus	CCONJ	Coord	_	19	cc	_	_
18	a	ag	ADP	Simp	_	19	case	_	_
19	phiocadh	piocadh	NOUN	Noun	Form=Len|VerbForm=Vnoun	16	conj	_	_
20	suas	suas	ADV	Dir	_	19	advmod	_	_
21	de	de	ADP	Cmpd	PrepForm=Cmpd	25	case	_	_
22	réir	réir	NOUN	Cmpd	Case=NomAcc|Gender=Fem|Number=Sing|PrepForm=Cmpd	21	fixed	_	_
23	mar	mar	SCONJ	Subord	_	25	mark	_	_
24	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	25	mark:prt	_	_
25	bhuaileas	buail	VERB	VTI	Form=Len|Mood=Ind|Number=Sing|Person=1|Tense=Past	10	advcl	_	_
26	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	27	det	_	_
27	spadhar	spadhar	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	25	nsubj	_	_
28	mé	mé	PRON	Pers	Number=Sing|Person=1	25	obj	_	SpaceAfter=No
29	"	"	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
30	,	,	PUNCT	Punct	_	31	punct	_	_
31	Úsáideoir	úsáideoir	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	3	orphan	_	_
32	Lárleabharlainne	lárleabharlann	PROPN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	31	nmod	_	SpaceAfter=No
33	.	.	PUNCT	.	_	3	punct	_	_

~~~


