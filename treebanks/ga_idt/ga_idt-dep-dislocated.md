---
layout: base
title:  'Statistics of dislocated in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `dislocated`

This relation is universal.

17 nodes (0%) are attached to their parents as `dislocated`.

11 instances of `dislocated` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.2941176470588.

The following 5 pairs of parts of speech are connected with `dislocated`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (10; 59% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (4; 24% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dislocated	color:blue
1	(	(	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Ag	ag	ADP	Simp	_	3	case	_	_
3	béicíl	béicíl	NOUN	Noun	VerbForm=Vnoun	5	dislocated	_	SpaceAfter=No
4	)	)	PUNCT	Punct	_	3	punct	_	_
5	Téigh	téigh	VERB	VTI	Mood=Imp|Number=Sing|Person=2	0	root	_	_
6	abhaile	abhaile	ADV	Dir	_	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	Punct	_	8	punct	_	_
8	a	a	PART	Voc	PartType=Voc	9	case:voc	_	_
9	bhithiúnaigh	bithiúnach	NOUN	Noun	Case=Voc|Form=Len|Gender=Masc|Number=Sing	5	vocative	_	SpaceAfter=No
10	!	!	PUNCT	!	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 dislocated	color:blue
1	Féach	féach	VERB	VTI	Mood=Imp|Number=Sing|Person=2	0	root	_	_
2	ar	ar	ADP	Simp	_	4	case	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	tábla	tábla	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	obl	_	_
5	i	i	ADP	Simp	_	6	case	_	_
6	bhFíor	fíor	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	1	obl	_	_
7	69.2	69.2	NUM	Num	_	6	nmod	_	_
8	Féach	féach	VERB	VTI	Mood=Imp|Number=Sing|Person=2	1	dislocated	_	_
9	ar	ar	ADP	Simp	_	10	case	_	_
10	Fhíoracha	fíor	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Plur	8	obl	_	_
11	37.3	37.3	NUM	Num	_	10	nmod	_	_
12	'	'	PUNCT	Punct	_	11	punct	_	SpaceAfter=No
13	Féach	féach	VERB	VTI	Mood=Imp|Number=Sing|Person=2	1	dislocated	_	_
14	liom	le	ADP	Prep	Number=Sing|Person=1	13	obl:prep	_	SpaceAfter=No
15	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 17 dislocated	color:blue
1	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	difríochtaí	difríocht	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Plur	0	root	_	_
3	ó	ó	ADP	Simp	_	4	case	_	_
4	thaobh	taobh	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	2	nmod	_	_
5	airíonna	airíonna	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	4	nmod	_	_
6	de	de	ADP	Prep	Gender=Masc|Number=Sing|Person=3	5	obl:prep	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	nsubj	_	_
8	tharlaíonn	tarlaigh	VERB	PresInd	Form=Len|Mood=Ind|Tense=Pres	5	acl:relcl	_	_
9	laistigh	laistigh	ADV	Dir	_	8	advmod	_	_
10	de	de	ADP	Simp	_	11	case	_	_
11	speiceas	speiceas	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	obl	_	_
12	áirithe	áirithe	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No
13	;	;	PUNCT	Punct	_	15	punct	_	_
14	mar	mar	ADP	Simp	_	15	case	_	_
15	shampla	sampla	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
16	,	,	PUNCT	Punct	_	17	punct	_	_
17	bíonn	bí	VERB	PresImp	_	2	dislocated	_	_
18	daoine	duine	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	17	nsubj	_	_
19	difriúil	difriúil	ADJ	Adj	Degree=Pos	18	amod	_	_
20	ó	ó	ADP	Simp	_	21	case	_	_
21	thaobh	taobh	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	19	obl	_	_
22	dath	dath	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	21	nmod	_	_
23	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	24	nmod:poss	_	_
24	gcuid	cuid	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	22	nmod	_	_
25	gruaige	gruaig	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	24	nmod	_	SpaceAfter=No
26	,	,	PUNCT	Punct	_	28	punct	_	_
27	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	28	nmod:poss	_	_
28	súl	súil	NOUN	Noun	Case=Gen|Gender=Fem|NounType=Weak|Number=Plur	24	conj	_	_
29	agus	agus	CCONJ	Coord	_	31	cc	_	_
30	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	31	nmod:poss	_	_
31	gcraicne	gcraicne	NOUN	Noun	Case=Gen|Gender=Masc|Number=Plur	24	conj	_	_
32	de	de	ADP	Simp	_	21	obl:prep	_	_
33	agus	agus	CCONJ	Coord	_	34	mark	_	_
34	bíonn	bí	VERB	PresImp	_	17	advcl	_	_
35	siad	siad	PRON	Pers	Number=Plur|Person=3	34	nsubj	_	_
36	difriúil	difriúil	ADJ	Adj	Degree=Pos	34	xcomp:pred	_	_
37	ó	ó	ADP	Simp	_	38	case	_	_
38	thaobh	taobh	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	36	obl	_	_
39	méid	méid	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	38	nmod	_	_
40	de	de	ADP	Simp	_	38	obl:prep	_	_
41	freisin	freisin	ADV	Gn	_	34	advmod	_	_
42	athrú	athrú	NOUN	Noun	VerbForm=Inf	39	nmod	_	_
43	gáis	gás	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	42	nmod	_	_
44	go	go	ADP	Simp	_	45	case	_	_
45	leacht	leacht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	43	nmod	_	_
46	de	de	ADP	Simp	_	47	case	_	_
47	thoradh	toradh	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	34	obl	_	_
48	fuaraithe	fuarú	NOUN	Noun	Case=Gen|VerbForm=Inf	47	nmod	_	SpaceAfter=No
49	:	:	PUNCT	Punct	_	51	punct	_	_
50	mar	mar	ADP	Simp	_	51	case	_	_
51	shampla	sampla	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
52	,	,	PUNCT	Punct	_	53	punct	_	_
53	athraíonn	athraigh	VERB	PresInd	Mood=Ind|Tense=Pres	2	parataxis	_	_
54	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	55	det	_	_
55	ghal	gal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	53	nsubj	_	_
56	ó	ó	ADP	Simp	_	57	case	_	_
57	chiteal	citeal	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	55	nmod	_	_
58	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	57	acl:relcl	_	_
59	ar	ar	ADP	Simp	_	60	case	_	_
60	fiuchadh	fiuchadh	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	58	xcomp:pred	_	_
61	ina	i	ADP	Poss	Poss=Yes	62	case	_	_
62	leacht	leacht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	58	obl	_	_
63	nuair	nuair	SCONJ	Subord	_	65	mark	_	_
64	a	a	PART	Vb	PartType=Vb|PronType=Rel	65	mark:prt	_	_
65	bhuaileann	buail	VERB	PresInd	Form=Len|Mood=Ind|Tense=Pres	53	advcl	_	_
66	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	65	nsubj	_	_
67	le	le	ADP	Simp	_	68	case	_	_
68	balla	balla	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	65	obl	_	_
69	fuar	fuar	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	68	amod	_	_
70	cistine	cistin	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	68	nmod	_	_
71	comhthionól	comhthionól	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Weak|Number=Plur	68	nmod	_	_
72	ball	ball	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	71	nmod	_	_
73	a	a	PART	Vb	PartType=Vb|PronType=Rel	74	nsubj	_	_
74	thiomáineann	tiomáin	VERB	PresInd	Form=Len|Mood=Ind|Tense=Pres	72	acl:relcl	_	_
75	fuil	fuil	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	74	nsubj	_	_
76	ar	ar	ADP	Cmpd	PrepForm=Cmpd	79	case	_	_
77	fud	fud	ADP	Cmpd	_	76	fixed	_	_
78	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	79	det	_	_
79	choirp	corp	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	74	obl	_	SpaceAfter=No
80	;	;	PUNCT	Punct	_	82	punct	_	_
81	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	82	cop	_	_
82	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	2	parataxis	_	_
83	ráta	ráta	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	82	nsubj	_	_
84	cuisle	cuisle	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	83	nmod	_	_
85	duine	duine	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	84	nmod	_	_
86	fhásta	fásta	ADJ	Adj	Case=Gen|Gender=Masc|Number=Sing	85	amod	_	_
87	ná	ná	CCONJ	Coord	_	88	mark	_	_
88	thart	thart	ADV	Dir	_	82	advmod	_	_
89	ar	ar	ADP	Simp	_	91	case	_	_
90	70	70	NUM	Num	_	91	nummod	_	_
91	buille	buille	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	88	obl	_	_
92	in	in	ADP	Cmpd	PrepForm=Cmpd	95	case	_	_
93	aghaidh	aghaidh	ADP	Cmpd	_	92	fixed	_	_
94	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	95	det	_	_
95	nóiméid	nóiméad	NOUN	Noun	Case=Gen|Form=Len|Gender=Masc|Number=Sing	91	nmod	_	SpaceAfter=No
96	,	,	PUNCT	Punct	_	97	punct	_	_
97	ach	ach	SCONJ	Subord	_	98	mark	_	_
98	bíonn	bí	VERB	PresImp	_	82	advcl	_	_
99	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	98	nsubj	_	_
100	i	i	ADP	Simp	_	101	case	_	_
101	bhfad	fad	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	98	obl	_	_
102	níos	níos	PART	Cmp	PartType=Comp	103	mark:prt	_	_
103	tapúla	tapúil	ADJ	Adj	Case=Gen|Gender=Fem|Number=Sing	98	xcomp:pred	_	_
104	ag	ag	ADP	Simp	_	105	case	_	_
105	leanbh	leanbh	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	98	obl	_	SpaceAfter=No
106	;	;	PUNCT	Punct	_	108	punct	_	_
107	trí	trí	ADP	Simp	_	108	case	_	_
108	ghréasán	gréasán	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	98	obl	_	_
109	d'	de	ADP	Simp	_	110	case	_	SpaceAfter=No
110	fhéitheanna	fhéitheanna	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	108	nmod	_	_
111	a	a	PART	Vb	PartType=Vb|PronType=Rel	112	mark:prt	_	_
112	ghluaiseann	gluais	VERB	PresInd	Form=Len|Mood=Ind|Tense=Pres	108	csubj:cleft	_	_
113	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	114	det	_	_
114	fhuil	fuil	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	112	obj	_	SpaceAfter=No
115	;	;	PUNCT	Punct	_	116	punct	_	_
116	fágann	fág	VERB	PresInd	Mood=Ind|Tense=Pres	2	parataxis	_	_
117	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	118	det	_	_
118	fhuil	fuil	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	116	nsubj	_	_
119	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	120	det	_	_
120	croí	croí	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	116	obj	_	_
121	trí	trí	ADP	Simp	_	122	case	_	_
122	artairí	artaire	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Plur	116	obl	_	_
123	agus	agus	CCONJ	Coord	_	124	cc	_	_
124	filleann	fill	VERB	PresInd	Mood=Ind|Tense=Pres	116	conj	_	_
125	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	124	nsubj	_	_
126	ar	ar	ADP	Simp	_	128	case	_	_
127	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	128	det	_	_
128	gcroí	croí	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	124	obl	_	_
129	trí	trí	ADP	Simp	_	130	case	_	_
130	fhéitheanna	fhéitheanna	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	124	obl	_	_
131	achar	achar	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	130	nmod	_	_
132	beag	beag	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	131	amod	_	SpaceAfter=No
133	,	,	PUNCT	Punct	_	134	punct	_	_
134	thart	thart	ADV	Dir	_	124	advmod	_	_
135	ar	ar	ADP	Simp	_	136	case	_	_
136	mhéadar	méadar	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	134	obl	_	_
137	cearnach	cearnach	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	136	amod	_	_
138	de	de	ADP	Simp	_	139	case	_	_
139	ghnáth	gnáth	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	134	obl	_	SpaceAfter=No
140	,	,	PUNCT	Punct	_	142	punct	_	_
141	a	a	PART	Vb	PartType=Vb|PronType=Rel	142	nsubj	_	_
142	léiríonn	léirigh	VERB	PresInd	Form=Len|Mood=Ind|Tense=Pres	116	acl:relcl	_	_
143	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	144	det	_	_
144	plandaí	planda	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	142	obj	_	_
145	go	go	ADP	Simp	_	146	case	_	_
146	léir	léir	ADJ	Adj	Degree=Pos	144	nmod	_	_
147	a	a	PART	Vb	PartType=Vb|PronType=Rel	148	mark:prt	_	_
148	fhásann	fás	VERB	PresInd	Form=Len|Mood=Ind|Tense=Pres	144	acl:relcl	_	_
149	sa	i	ADP	Art	Number=Sing|PronType=Art	150	case	_	_
150	réimse	réimse	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	148	obl	_	_
151	sin	sin	DET	Det	PronType=Dem	150	det	_	SpaceAfter=No
152	;	;	PUNCT	Punct	_	154	punct	_	_
153	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	154	cop	_	_
154	féidir	féidir	NOUN	Subst	Number=Sing	2	parataxis	_	_
155	ceann	ceann	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	157	obj	_	_
156	a	a	PART	Inf	PartType=Inf	157	mark	_	_
157	dhéanamh	déanamh	NOUN	Noun	Form=Len|VerbForm=Inf	154	csubj:cop	_	_
158	as	as	ADP	Simp	_	159	case	_	_
159	píosaí	píosa	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	157	obl	_	_
160	sreinge	sreinge	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	159	nmod	_	SpaceAfter=No
161	,	,	PUNCT	Punct	_	162	punct	_	_
162	corda	corda	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	160	conj	_	_
163	nó	nó	CCONJ	Coord	_	164	cc	_	_
164	adhmaid	adhmad	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	160	conj	_	_
165	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	166	det	_	_
166	ráta	ráta	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	164	nmod	_	_
167	ar	ar	ADP	Simp	_	169	case	_	_
168	a	a	PART	Vb	PartType=Vb|PronType=Rel	169	obl	_	_
169	gcuirtear	cuir	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres|Voice=Auto	166	acl:relcl	_	_
170	obair	obair	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	169	obj	_	_
171	i	i	ADP	Simp	_	172	case	_	_
172	gcrích	gcrích	NOUN	Noun	Case=Dat|Gender=Fem|Number=Sing	169	obl	_	SpaceAfter=No
173	,	,	PUNCT	Punct	_	176	punct	_	_
174	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	176	cop	_	_
175	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	176	nmod	_	_
176	sin	sin	PRON	Dem	PronType=Dem	2	parataxis	_	SpaceAfter=No
177	,	,	PUNCT	Punct	_	178	punct	_	_
178	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	179	det	_	_
179	méid	méid	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	176	nsubj	_	_
180	oibre	obair	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	179	nmod	_	_
181	a	a	PART	Vb	PartType=Vb|PronType=Rel	182	obj	_	_
182	dhéantar	déan	VERB	Imper	Form=Len|Mood=Imp|Voice=Auto	179	acl:relcl	_	_
183	in	in	ADP	Cmpd	PrepForm=Cmpd	186	case	_	_
184	aghaidh	aghaidh	ADP	Cmpd	_	183	fixed	_	_
185	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	186	det	_	_
186	tsecoind	tsecoind	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	182	obl	_	SpaceAfter=No
187	;	;	PUNCT	Punct	_	191	punct	_	_
188	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	191	cop	_	_
189	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	191	nmod	_	_
190	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	191	det	_	_
191	watt	watt	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	parataxis	_	_
192	(W)	(W)	NUM	Item	_	191	nmod	_	_
193	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	194	det	_	_
194	t-aonad	aonad	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	191	nsubj	_	_
195	cumhachta	cumhacht	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	194	nmod	_	_
196	rud	rud	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	195	nmod	_	_
197	ar	ar	ADP	Simp	_	195	nmod	_	_
198	bith	bith	NOUN	Subst	Number=Sing	197	fixed	_	_
199	a	a	PART	Vb	PartType=Vb|PronType=Rel	200	nsubj	_	_
200	ghlacann	glac	VERB	PresInd	Form=Len|Mood=Ind|Tense=Pres	194	acl:relcl	_	_
201	spás	spás	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	200	obj	_	_
202	agus	agus	CCONJ	Coord	_	204	cc	_	_
203	a	a	PART	Vb	PartType=Vb|PronType=Rel	204	obl	_	_
204	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	200	conj	_	_
205	mais	mais	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	204	nsubj	_	_
206	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	204	obl:prep	_	SpaceAfter=No
207	;	;	PUNCT	Punct	_	209	punct	_	_
208	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	209	cop	_	_
209	féidir	féidir	NOUN	Subst	Number=Sing	2	parataxis	_	_
210	mais	mais	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	212	obj	_	_
211	a	a	PART	Inf	PartType=Inf	212	mark	_	_
212	thabhairt	tabhairt	NOUN	Noun	Form=Len|VerbForm=Inf	209	csubj:cop	_	_
213	ar	ar	ADP	Simp	_	216	case	_	_
214	gach	gach	DET	Det	Definite=Def	215	det	_	_
215	uile	uile	DET	Det	PronType=Ind	216	det	_	_
216	shubstaint	substaint	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	212	obl	_	_
217	agus	agus	CCONJ	Coord	_	218	cc	_	_
218	ábhar	ábhar	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	216	conj	_	SpaceAfter=No
219	;	;	PUNCT	Punct	_	220	punct	_	_
220	úsáidtear	úsáid	VERB	PresInd	Mood=Ind|Tense=Pres|Voice=Auto	2	parataxis	_	_
221	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	222	det	_	_
222	téarmaí	téarma	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	220	obj	_	_
223	solad	solad	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	222	nmod	_	SpaceAfter=No
224	,	,	PUNCT	Punct	_	225	punct	_	_
225	leacht	leacht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	223	conj	_	_
226	agus	agus	CCONJ	Coord	_	227	cc	_	_
227	gás	gás	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	223	conj	_	_
228	chun	chun	ADP	Simp	_	229	case	_	_
229	cur	cur	NOUN	Noun	VerbForm=Inf	220	xcomp	_	_
230	síos	síos	ADV	Dir	_	229	advmod	_	_
231	ar	ar	ADP	Simp	_	233	case	_	_
232	thrí	trí	NUM	Num	Form=Len|NumType=Card	233	nummod	_	_
233	staid	staid	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	229	obl	_	_
234	ábhair	ábhar	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	233	nmod	_	SpaceAfter=No
235	;	;	PUNCT	Punct	_	237	punct	_	_
236	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	237	cop	_	_
237	féidir	féidir	NOUN	Subst	Number=Sing	2	parataxis	_	_
238	staid	staid	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	241	obj	_	_
239	amháin	amháin	ADJ	Adj	Degree=Pos	238	amod	_	_
240	a	a	PART	Inf	PartType=Inf	241	mark	_	_
241	thiontú	tiontú	NOUN	Noun	Form=Len|VerbForm=Inf	237	csubj:cop	_	_
242	go	go	ADP	Simp	_	243	case	_	_
243	staid	staid	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	241	nmod	_	_
244	eile	eile	DET	Det	PronType=Dem	243	det	_	_
245	trí	trí	ADP	Simp	_	246	case	_	_
246	théamh	téamh	NOUN	Noun	Form=Len|VerbForm=Inf	241	nmod	_	_
247	nó	nó	CCONJ	Coord	_	248	cc	_	_
248	fhuarú	fuarú	NOUN	Noun	Form=Len|VerbForm=Inf	246	conj	_	_
249	dath	dath	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	246	nmod	_	_
250	príomhúil	príomhúil	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	249	amod	_	_
251	is	is	AUX	Cop	PronType=Rel|Tense=Pres|VerbForm=Cop	237	cop	_	_
252	iad	iad	PRON	Pers	Number=Plur|Person=3	253	nmod	_	_
253	dathanna	dath	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	258	nsubj	_	_
254	príomhúla	príomhúil	ADJ	Adj	Case=NomAcc|NounType=NotSlender|Number=Plur	253	amod	_	_
255	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	256	det	_	_
256	tsolais	solas	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	253	nmod	_	_
257	ná	ná	SCONJ	Subord	_	258	mark:prt	_	_
258	dearg	dearg	ADJ	Adj	Degree=Pos	237	ccomp	_	SpaceAfter=No
259	,	,	PUNCT	Punct	_	260	punct	_	_
260	uaine	uaine	ADJ	Adj	Degree=Pos	258	conj	_	_
261	agus	agus	CCONJ	Coord	_	262	cc	_	_
262	gorm	gorm	ADJ	Adj	Degree=Pos	258	conj	_	SpaceAfter=No
263	;	;	PUNCT	Punct	_	264	punct	_	_
264	faightear	faigh	VERB	PresInd	Mood=Ind|Tense=Pres|Voice=Auto	2	parataxis	_	_
265	solas	solas	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	264	obj	_	_
266	geal	geal	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	265	amod	_	_
267	nuair	nuair	SCONJ	Subord	_	269	mark	_	_
268	a	a	PART	Vb	PartType=Vb|PronType=Rel	269	mark:prt	_	_
269	mheasctar	measc	VERB	PresInd	Form=Len|Mood=Ind|Tense=Pres|Voice=Auto	264	advcl	_	_
270	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	272	det	_	_
271	trí	trí	NUM	Num	NumType=Card	272	nummod	_	_
272	chineál	cineál	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	269	obj	_	_
273	le	le	ADP	Simp	_	274	case	_	_
274	chéile	céile	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	269	obl	_	_
275	go	go	ADP	Simp	_	276	case	_	_
276	cionchothrom	cionchothrom	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	269	obl	_	SpaceAfter=No
277	;	;	PUNCT	Punct	_	278	punct	_	_
278	nuair	nuair	SCONJ	Subord	_	280	mark	_	_
279	a	a	PART	Vb	PartType=Vb|PronType=Rel	280	mark:prt	_	_
280	mheasctar	measc	VERB	PresInd	Form=Len|Mood=Ind|Tense=Pres|Voice=Auto	286	advcl	_	_
281	dhá	dó	NUM	Num	NumType=Card	282	nummod	_	_
282	dhath	dath	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	280	obj	_	_
283	phríomhúla	príomhúil	ADJ	Adj	Case=NomAcc|NounType=Slender|Number=Plur	282	amod	_	_
284	le	le	ADP	Simp	_	285	case	_	_
285	chéile	céile	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	280	obl	_	_
286	faightear	faigh	VERB	PresInd	Mood=Ind|Tense=Pres|Voice=Auto	2	parataxis	_	_
287	ceann	ceann	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	286	obj	_	_
288	de	de	ADP	Simp	_	290	case	_	_
289	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	290	det	_	_
290	dathanna	dath	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	287	nmod	_	_
291	tánaisteacha	tánaisteach	ADJ	Adj	Case=NomAcc|NounType=NotSlender|Number=Plur	290	amod	_	SpaceAfter=No
292	,	,	PUNCT	Punct	_	293	punct	_	_
293	leithéidí	leithéid	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	290	nmod	_	_
294	buí	buí	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	293	nmod	_	SpaceAfter=No
295	,	,	PUNCT	Punct	_	296	punct	_	_
296	cian	cian	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	294	conj	_	_
297	agus	agus	CCONJ	Coord	_	298	cc	_	_
298	magenta	magen	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	294	conj	_	SpaceAfter=No
299	;	;	PUNCT	Punct	_	300	punct	_	_
300	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	306	cop	_	_
301	iad	iad	PRON	Pers	Number=Plur|Person=3	302	nmod	_	_
302	dathanna	dath	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	306	nsubj	_	_
303	príomhúla	príomhúil	ADJ	Adj	Case=NomAcc|NounType=NotSlender|Number=Plur	302	amod	_	_
304	péinte	péint	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	302	nmod	_	_
305	ná	ná	CCONJ	Coord	_	306	mark:prt	_	_
306	dearg	dearg	ADJ	Adj	Degree=Pos	2	parataxis	_	SpaceAfter=No
307	,	,	PUNCT	Punct	_	308	punct	_	_
308	buí	buí	ADJ	Adj	Degree=Pos	306	conj	_	_
309	agus	agus	CCONJ	Coord	_	310	cc	_	_
310	gorm	gorm	ADJ	Adj	Degree=Pos	306	conj	_	SpaceAfter=No
311	.	.	PUNCT	.	_	2	punct	_	_

~~~


