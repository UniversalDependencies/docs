---
layout: base
title:  'Statistics of orphan in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `orphan`

This relation is universal.

5 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.4.

The following 3 pairs of parts of speech are connected with `orphan`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (2; 40% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 106	bgColor:blue
# visual-style 106	fgColor:white
# visual-style 105	bgColor:blue
# visual-style 105	fgColor:white
# visual-style 105 106 orphan	color:blue
1	(4)	(4)	NUM	Item	_	70	list	_	_
2	D'	de	ADP	Simp	_	3	case	_	SpaceAfter=No
3	fhonn	fonn	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	6	obj	_	_
4	amhras	amhras	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	nmod	_	_
5	a	a	PART	Inf	PartType=Inf	6	mark	_	_
6	sheachaint	seachaint	NOUN	Noun	Form=Len|VerbForm=Inf	70	xcomp	_	SpaceAfter=No
7	,	,	PUNCT	Punct	_	9	punct	_	_
8	aon	aon	DET	Det	PronType=Ind	9	det	_	_
9	achtachán	achtachán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	nmod	_	_
10	a	a	PART	Vb	PartType=Vb|PronType=Rel	11	obl	_	_
11	ndéantar	déan	VERB	VTI	Form=Ecl|Mood=Ind|Tense=Pres|Voice=Auto	9	acl:relcl	_	_
12	leasú	leasú	NOUN	Noun	VerbForm=Inf	11	xcomp	_	_
13	air	ar	ADP	Prep	Gender=Masc|Number=Sing|Person=3	11	obl:prep	_	_
14	le	le	ADP	Simp	_	15	case	_	_
15	halt	alt	NOUN	Noun	Case=NomAcc|Form=HPref|Gender=Masc|Number=Sing	11	obl	_	_
16	den	de	ADP	Art	Number=Sing|PronType=Art	17	case	_	_
17	Acht	acht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	15	nmod	_	_
18	seo	seo	DET	Det	PronType=Dem	17	det	_	_
19	a	a	PART	Vb	PartType=Vb|PronType=Rel	20	nsubj	_	_
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
30	lá	lá	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	22	nmod	_	_
31	dá	dá	PART	Vb	PartType=Vb|PronType=Rel	30	obl	_	_
32	dtagraítear	tagair	VERB	VTI	Form=Ecl|Mood=Ind|Tense=Pres|Voice=Auto	30	acl:relcl	_	_
33	i	i	ADP	Simp	_	34	case	_	_
34	bhfo-alt	alt	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	32	obl	_	_
35	(1)	(1)	NUM	Item	_	34	nmod	_	_
36	nó	nó	CCONJ	Coord	_	48	cc	_	SpaceAfter=No
37	,	,	PUNCT	Punct	_	38	punct	_	_
38	de	de	SCONJ	Subord	_	42	mark	_	_
39	réir	réir	SCONJ	Subord	_	38	fixed	_	_
40	mar	mar	SCONJ	Subord	_	42	mark	_	_
41	a	a	PART	Vb	PartType=Vb|PronType=Rel	42	mark:prt	_	_
42	bheidh	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Fut	32	advcl	_	SpaceAfter=No
43	,	,	PUNCT	Punct	_	44	punct	_	_
44	amhail	amhail	SCONJ	Subord	_	48	mark	_	_
45	ar	ar	ADP	Simp	_	48	case	_	_
46	agus	agus	CCONJ	Coord	_	47	cc	_	_
47	ó	ó	ADP	Simp	_	48	orphan	_	_
48	dháta	dáta	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	30	conj	_	_
49	éagtha	éag	NOUN	Noun	Case=Gen|VerbForm=Inf	48	nmod	_	_
50	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	51	det	_	_
51	tréimhse	tréimhse	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	48	nmod	_	_
52	ar	is	AUX	Cop	Tense=Pres|VerbForm=Cop	53	cop	_	_
53	lena	le	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	48	acl:relcl	_	_
54	linn	linn	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	53	nmod	_	_
55	a	a	PART	Vb	PartType=Vb|PronType=Rel	56	mark:prt	_	_
56	choimeádfar	coimeád	VERB	VTI	Form=Len|Mood=Ind|Tense=Fut|Voice=Auto	53	csubj:cleft	_	_
57	i	i	ADP	Simp	_	58	case	_	_
58	ngníomh	gníomh	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	56	obl	_	_
59	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	56	obj	_	_
60	faoi	faoi	ADP	Simp	_	61	case	_	_
61	fho-alt	alt	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	56	obl	_	_
62	(2)	(2)	NUM	Item	_	61	nmod	_	_
63	(	(	PUNCT	Punct	_	66	punct	_	SpaceAfter=No
64	'	'	PUNCT	Punct	_	66	punct	_	_
65	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	66	det	_	_
66	t-éag	éag	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	61	nmod	_	_
67	'	'	PUNCT	Punct	_	66	punct	_	SpaceAfter=No
68	)	)	PUNCT	Punct	_	66	punct	_	SpaceAfter=No
69	,	,	PUNCT	Punct	_	70	punct	_	_
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
82	lá	lá	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	70	obl	_	_
83	sin	sin	DET	Det	PronType=Dem	82	det	_	_
84	nó	nó	CCONJ	Coord	_	86	cc	_	SpaceAfter=No
85	,	,	PUNCT	Punct	_	86	punct	_	_
86	de	de	SCONJ	Subord	_	77	conj	_	_
87	réir	réir	SCONJ	Subord	_	86	fixed	_	_
88	mar	mar	SCONJ	Subord	_	90	mark	_	_
89	a	a	PART	Vb	PartType=Vb|PronType=Rel	90	mark:prt	_	_
90	bheidh	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Fut	86	advcl	_	SpaceAfter=No
91	,	,	PUNCT	Punct	_	92	punct	_	_
92	amhail	amhail	SCONJ	Subord	_	90	mark	_	_
93	ar	ar	ADP	Simp	_	97	case	_	_
94	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	97	det	_	_
95	agus	agus	CCONJ	Coord	_	96	cc	_	_
96	ón	ó	ADP	Art	Number=Sing|PronType=Art	93	conj	_	_
97	éag	éag	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	90	obl	_	SpaceAfter=No
98	,	,	PUNCT	Punct	_	99	punct	_	_
99	mar	mar	SCONJ	Subord	_	101	mark	_	_
100	a	a	PART	Vb	PartType=Vb|PronType=Rel	101	mark:prt	_	_
101	bhí	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Past	90	advcl	_	_
102	feidhm	feidhm	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	101	nsubj	_	_
103	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	101	obl:prep	_	_
104	agus	agus	CCONJ	Coord	_	103	cc	_	_
105	éifeacht	éifeacht	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	103	conj	_	_
106	leis	le	ADP	Prep	Gender=Masc|Number=Sing|Person=3	105	orphan	_	_
107	díreach	díreach	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	101	obl:tmod	_	_
108	roimh	roimh	ADP	Simp	_	114	case	_	_
109	dháta	dáta	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	114	obj	_	_
110	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	111	det	_	_
111	Achta	acht	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	109	nmod	_	_
112	seo	seo	DET	Det	PronType=Dem	111	det	_	_
113	a	a	PART	Inf	PartType=Inf	114	mark	_	_
114	rith	rith	NOUN	Noun	VerbForm=Inf	101	xcomp	_	_
115	ach	ach	SCONJ	Subord	_	116	mark	_	_
116	sin	sin	PRON	Dem	PronType=Dem	101	ccomp	_	_
117	faoi	faoi	ADP	Simp	_	118	case	_	_
118	réir	réir	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	116	xcomp:pred	_	_
119	aon	aon	DET	Det	PronType=Ind	120	det	_	_
120	leasuithe	leasú	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	118	nmod	_	_
121	a	a	PART	Vb	PartType=Vb|PronType=Rel	122	obj	_	_
122	dhéanfar	déan	VERB	VTI	Form=Len|Mood=Ind|Tense=Fut|Voice=Auto	120	acl:relcl	_	_
123	le	le	ADP	Simp	_	125	case	_	_
124	haon	aon	DET	Det	Form=HPref|PronType=Ind	125	det	_	_
125	Acht	acht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	122	obl	_	_
126	eile	eile	DET	Det	PronType=Dem	125	det	_	_
127	den	de	ADP	Art	Number=Sing|PronType=Art	128	case	_	_
128	Oireachtas	oireachtas	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	125	nmod	_	_
129	tar	tar	ADP	Cmpd	PrepForm=Cmpd	132	case	_	_
130	éis	éis	ADP	Cmpd	_	129	fixed	_	_
131	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	132	det	_	_
132	dáta	dáta	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	122	obl	_	_
133	rite	rite	ADJ	Adj	Degree=Pos	132	amod	_	_
134	sin	sin	DET	Det	PronType=Dem	132	det	_	SpaceAfter=No
135	.	.	PUNCT	.	_	70	punct	_	_

~~~


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
9	fútha	fútha	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 30 orphan	color:blue
1	An	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	2	det	_	_
2	tUachtarán	uachtarán	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
3	a	a	PART	Vb	PartType=Vb|PronType=Rel	4	nsubj	_	_
4	rinne	déan	VERB	VTI	Mood=Ind|Tense=Past	2	acl:relcl	_	_
5	sin	sin	PRON	Dem	PronType=Dem	4	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	Punct	_	7	punct	_	_
7	agus	agus	CCONJ	Coord	_	8	mark	_	_
8	tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	2	advcl	_	_
9	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
10	ráite	ráite	ADJ	Adj	VerbForm=Part	8	xcomp:pred	_	_
11	gur	gur	PART	Vb	PartType=Vb|Tense=Past	12	mark:prt	_	_
12	tháinig	tar	VERB	VI	Form=Len|Mood=Ind|Tense=Past	8	ccomp	_	_
13	leathadh	leathadh	NOUN	Noun	VerbForm=Inf	12	nsubj	_	_
14	súl	súil	NOUN	Noun	Case=Gen|Gender=Fem|NounType=Weak|Number=Plur	13	nmod	_	_
15	air	ar	ADP	Prep	Gender=Masc|Number=Sing|Person=3	12	obl:prep	_	_
16	nuair	nuair	SCONJ	Subord	_	18	mark	_	_
17	a	a	PART	Vb	PartType=Vb|PronType=Rel	18	mark:prt	_	_
18	chonaic	feic	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	12	advcl	_	_
19	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	18	nsubj	_	_
20	nach	is	AUX	Cop	Polarity=Neg|Tense=Pres|VerbForm=Cop	21	cop	_	_
21	Gaeilge	Gaeilge	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	18	ccomp	_	_
22	a	a	PART	Vb	PartType=Vb|PronType=Rel	23	mark:prt	_	_
23	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	21	csubj:cleft	_	_
24	sa	i	ADP	Art	Number=Sing|PronType=Art	25	case	_	_
25	scríbhinn	scríbhinn	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	23	xcomp:pred	_	_
26	uirthi	ar	ADP	Prep	Gender=Fem|Number=Sing|Person=3	23	obl:prep	_	SpaceAfter=No
27	,	,	PUNCT	Punct	_	28	punct	_	_
28	ná	ná	SCONJ	Coord	_	29	mark	_	_
29	fiú	fiú	NOUN	Subst	Number=Sing	30	nmod	_	_
30	Gaeilge	Gaeilge	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	21	orphan	_	_
31	agus	agus	CCONJ	Coord	_	32	cc	_	_
32	Béarla	béarla	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	30	conj	_	SpaceAfter=No
33	,	,	PUNCT	Punct	_	34	punct	_	_
34	ach	ach	SCONJ	Subord	_	35	mark:prt	_	_
35	Béarla	béarla	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	21	nmod	_	_
36	amháin	amháin	ADJ	Adj	Degree=Pos	35	amod	_	_
37	(	(	PUNCT	Punct	_	38	punct	_	SpaceAfter=No
38	cé	cé	SCONJ	Subord	_	21	parataxis	_	_
39	is	is	SCONJ	Subord	_	38	fixed	_	_
40	moite	moite	SCONJ	Subord	_	38	fixed	_	_
41	den	de	ADP	Art	Number=Sing|PronType=Art	42	case	_	_
42	leasainm	leasainm	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	38	nmod	_	_
43	nó	nó	CCONJ	Coord	_	44	cc	_	_
44	ainm	ainm	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	42	conj	_	_
45	cleite	cleite	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	44	compound	_	_
46	'	'	PUNCT	Punct	_	48	punct	_	SpaceAfter=No
47	An	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	48	det	_	_
48	Craoibhín	craobh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	38	nmod	_	_
49	Aoibhinn	aoibhinn	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	48	nmod	_	SpaceAfter=No
50	'	'	PUNCT	Punct	_	48	punct	_	SpaceAfter=No
51	)	)	PUNCT	Punct	_	38	punct	_	SpaceAfter=No
52	:	:	PUNCT	:	_	2	punct	_	_

~~~


