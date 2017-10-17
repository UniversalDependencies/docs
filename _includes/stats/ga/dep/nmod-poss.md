

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [nmod]().

118 nodes (1%) are attached to their parents as `nmod:poss`.

118 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02542372881356.

The following 3 pairs of parts of speech are connected with `nmod:poss`: [ga-pos/NOUN]()-[ga-pos/DET]() (116; 98% instances), [ga-pos/ADJ]()-[ga-pos/DET]() (1; 1% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
2	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	fhios	fios	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	nsubj	_	_
4	sin	sin	PRON	Dem	PronType=Dem	3	det	_	_
5	agat	ag	ADP	Prep	Number=Sing|Person=2	1	obl:prep	_	_
6	anois	anois	ADV	Gn	_	1	advmod	_	SpaceAfter=No
7	,	,	PUNCT	Punct	_	9	punct	_	_
8	ar	ar	ADP	Simp	_	9	case	_	_
9	ndóigh	dóigh	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Beidh	bí	VERB	FutInd	Mood=Ind|Tense=Fut	0	root	_	_
2	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	chomhionann	ionann	ADJ	Adj	Degree=Pos|Form=Len	1	nsubj	_	_
4	le	le	ADP	Simp	_	5	case	_	_
5	déanamh	déananh	NOUN	Noun	Form=Len|VerbForm=Inf	1	xcomp	_	_
6	le	le	ADP	Simp	_	7	case	_	_
7	fuaimniú	fuaimniú	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	5	nmod	_	_
8	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	teanga	teanga	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	compound	_	_
10	agus	agus	CCONJ	Coord	_	12	cc	_	_
11	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	12	cop	_	_
12	mithid	mithid	ADJ	Adj	Degree=Pos	1	conj	_	_
13	sin	sin	PRON	Dem	PronType=Dem	12	nsubj	_	_
14	le	le	ADP	Simp	_	15	case	_	_
15	freastal	freastal	NOUN	Noun	VerbForm=Inf	12	xcomp	_	_
16	ar	ar	ADP	Simp	_	17	case	_	_
17	mhúinteoirí	múinteoir	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Plur	15	nmod	_	SpaceAfter=No
18	,	,	PUNCT	Punct	_	19	punct	_	_
19	agus	agus	CCONJ	Coord	_	20	cc	_	_
20	orthu	ar	ADP	Prep	Number=Plur|Person=3	17	conj	_	_
21	sin	sin	PRON	Dem	PronType=Dem	20	det	_	_
22	a	a	PART	Vb	PartType=Vb|PronType=Rel	23	nsubj	_	_
23	bhíonn	bí	VERB	PresImp	Form=Len	20	acl:relcl	_	_
24	ag	ag	ADP	Simp	_	25	case	_	_
25	plé	plé	NOUN	Noun	VerbForm=Vnoun	23	xcomp	_	_
26	le	le	ADP	Simp	_	27	case	_	_
27	scrúduithe	scrúdú	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	25	nmod	_	_
28	agus	agus	CCONJ	Coord	_	30	cc	_	_
29	le	le	ADP	Simp	_	28	case	_	_
30	trialacha	triail	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	27	conj	_	_
31	cainte	caint	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	30	compound	_	_
32	agus	agus	CCONJ	Coord	_	33	cc	_	_
33	éisteachta	éisteacht	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	31	conj	_	SpaceAfter=No
34	,	,	PUNCT	Punct	_	35	punct	_	_
35	agus	agus	CCONJ	Coord	_	39	cc	_	_
36	go	go	PART	Ad	PartType=Ad	37	mark:prt	_	_
37	háirithe	áirithe	ADJ	Adj	Degree=Pos	35	advmod	_	_
38	le	le	ADP	Simp	_	39	case	_	_
39	cuidiú	cuidiú	NOUN	Noun	VerbForm=Inf	15	conj	_	_
40	le	le	ADP	Simp	_	41	case	_	_
41	lucht	lucht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	39	nmod	_	_
42	raidió	raidió	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	41	compound	_	_
43	agus	agus	CCONJ	Coord	_	44	cc	_	_
44	teilifíse	teilifís	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	42	conj	_	_
45	uirlis	uirlis	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	44	compound	_	_
46	chumhachtach	cumhachtach	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	45	amod	_	_
47	chumarsáide	cumarsáid	NOUN	Noun	Case=Gen|Form=Len|Gender=Fem|Number=Sing	45	compound	_	SpaceAfter=No
48	,	,	PUNCT	Punct	_	50	punct	_	_
49	a	a	PART	Vb	PartType=Vb|PronType=Rel	50	nsubj	_	_
50	dhéanfadh	déan	VERB	VTI	Form=Len|Mood=Cnd	45	acl:relcl	_	_
51	freastal	freastal	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	50	obj	_	_
52	ar	ar	ADP	Simp	_	53	case	_	_
53	phobal	pobal	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	50	obl	_	_
54	leathan	leathan	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	53	amod	_	_
55	ilbhéascnach	ilbhéascnach	ADJ	Adj	_	53	amod	_	SpaceAfter=No
56	,	,	PUNCT	Punct	_	58	punct	_	_
57	a	a	PART	Inf	PartType=Inf	58	mark	_	_
58	chothú	cothú	NOUN	Noun	Form=Len|VerbForm=Inf	38	xcomp	_	_
59	agus	agus	CCONJ	Coord	_	61	cc	_	_
60	a	a	PART	Inf	PartType=Inf	61	mark	_	_
61	bhuanú	buanú	NOUN	Noun	Form=Len|VerbForm=Inf	58	conj	_	SpaceAfter=No
62	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 nmod:poss	color:blue
1	(4)	(4)	X	Item	_	2	nummod	_	_
2	Breithneoidh	breithnigh	VERB	VT	Mood=Ind|Tense=Fut	0	root	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	Ard-Chomhairle	Ard-Chomhairle	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	2	nsubj	_	_
5	gach	gach	DET	Det	Definite=Def	6	det	_	_
6	aithris	aithris	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	2	obj	_	_
7	chúise	cúis	NOUN	Noun	Case=Gen|Form=Len|Gender=Fem|Number=Sing	6	compound	_	_
8	agus	agus	CCONJ	Coord	_	10	cc	_	_
9	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	nótaí	nóta	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	6	conj	_	_
11	(	(	PUNCT	Punct	_	12	punct	_	SpaceAfter=No
12	más	má	AUX	Subord	VerbForm=Cop	13	cop	_	_
13	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	10	xcomp:pred	_	_
14	dóibh	do	ADP	Prep	Number=Plur|Person=3	12	nsubj	_	SpaceAfter=No
15	)	)	PUNCT	Punct	_	12	punct	_	_
16	ina	i	ADP	Poss	Gender=Fem|Number=Sing|Person=3|Poss=Yes	17	case	_	_
17	taobh	taobh	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	10	nmod	_	_
18	a	a	PART	Vb	PartType=Vb|PronType=Rel	19	obj	_	_
19	leagfar	leag	VERB	VTI	Mood=Ind|Tense=Fut|Voice=Auto	6	acl:relcl	_	_
20	fé	faoi	ADP	Simp	_	22	case	_	_
21	n-a	n-a	PART	Vb	PartType=Vb|PronType=Rel	22	nmod:poss	_	_
22	bráid	bráid	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	19	obl	_	_
23	fén	faoi	ADP	Art	Number=Sing|PronType=Art	24	case	_	_
24	alt	alt	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	19	obl	_	_
25	so	seo	X	CM	Dialect=Munster|PronType=Dem	24	det	_	_
26	agus	agus	CCONJ	Coord	_	102	cc	_	_
27	más	má	SCONJ	Subord	VerbForm=Cop	102	mark	_	_
28	deimhin	deimhin	ADJ	Adj	Degree=Pos	27	xcomp:pred	_	_
29	léi	le	ADP	Prep	Gender=Fem|Number=Sing|Person=3	28	obl:prep	_	_
30	tar	tar	ADP	Cmpd	PrepForm=Cmpd	33	case	_	_
31	éis	éis	ADP	Cmpd	_	30	fixed	_	_
32	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	33	det	_	_
33	bhreithnithe	breithniú	NOUN	Noun	Case=Gen|Form=Len|VerbForm=Inf	27	nmod	_	_
34	sin	sin	DET	Det	PronType=Dem	33	det	_	_
35	go	go	PART	Vb	PartType=Cmpl	36	mark:prt	_	_
36	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	27	csubj:cop	_	_
37	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	38	det	_	_
38	cúrsa	cúrsa	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	36	nsubj	_	_
39	stuidéir	staidéar	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	38	compound	_	_
40	agus	agus	CCONJ	Coord	_	42	cc	_	_
41	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	42	det	_	_
42	scrúduithe	scrúdú	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	38	conj	_	_
43	le	le	ADP	Simp	_	44	case	_	_
44	n-a	a	PART	Vb	PartType=Vb|PronType=Rel	45	obl	_	_
45	mbaineann	bain	VERB	VTI	Form=Ecl|Mood=Ind|Tense=Pres	38	acl:relcl	_	_
46	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	47	det	_	_
47	aithris	aithris	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	45	nsubj	_	_
48	chúise	cúis	NOUN	Noun	Case=Gen|Form=Len|Gender=Fem|Number=Sing	47	compound	_	_
49	sin	sin	DET	Det	PronType=Dem	47	det	_	_
50	gan	gan	ADP	Simp	_	51	case	_	_
51	bheith	bheith	NOUN	Noun	Form=Len|VerbForm=Inf	36	xcomp:pred	_	_
52	de	de	ADP	Simp	_	53	case	_	_
53	shaghas	saghas	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	51	nmod	_	_
54	a	a	PART	Vb	PartType=Vb|PronType=Rel	55	nsubj	_	_
55	chuireann	cuir	VERB	VTI	Form=Len|Mood=Ind|Tense=Pres	53	acl:relcl	_	_
56	in	i	ADP	Simp	_	57	case	_	_
57	áirithe	áirithe	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	55	obl	_	_
58	go	go	PART	Vb	PartType=Cmpl	59	mark:prt	_	_
59	mbeidh	bí	VERB	FutInd	Form=Ecl|Mood=Ind|Tense=Fut	55	xcomp	_	_
60	ag	ag	ADP	Simp	_	61	case	_	_
61	daoine	duine	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	59	obl	_	SpaceAfter=No
62	,	,	PUNCT	Punct	_	63	punct	_	_
63	a	a	PART	Vb	PartType=Vb|PronType=Rel	64	nsubj	_	_
64	gheobhaidh	faigh	VERB	VT	Mood=Ind|Tense=Fut	61	acl:relcl	_	_
65	teisteas	teastas	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	64	obj	_	_
66	tástála	tástáil	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	65	compound	_	_
67	ón	ó	ADP	Art	Number=Sing|PronType=Art	68	case	_	_
68	gcoláiste	coláiste	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	64	obl	_	_
69	no	nó	CCONJ	Coord	_	71	cc	_	_
70	ón	ó	ADP	Art	Number=Sing|PronType=Art	71	case	_	_
71	gcólucht	gcólucht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	68	conj	_	_
72	a	a	PART	Vb	PartType=Vb|PronType=Rel	73	nsubj	_	_
73	cheangalann	cheangalann	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	71	acl:relcl	_	_
74	ar	ar	ADP	Simp	_	75	case	_	_
75	dhaoine	duine	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Plur	73	nmod	_	_
76	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	77	det	_	_
77	cúrsa	cúrsa	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	73	obj	_	_
78	stuidéir	staidéar	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	77	compound	_	_
79	agus	agus	CCONJ	Coord	_	81	cc	_	_
80	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	81	det	_	_
81	scrúduithe	scrúdú	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	77	conj	_	_
82	sin	sin	DET	Det	PronType=Dem	81	det	_	_
83	do	do	ADP	Simp	_	84	case	_	_
84	chur	cur	NOUN	Noun	Form=Len|VerbForm=Inf	81	xcomp	_	_
85	díobh	de	ADP	Prep	Number=Plur|Person=3	84	obl:prep	_	SpaceAfter=No
86	,	,	PUNCT	Punct	_	88	punct	_	_
87	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	88	det	_	_
88	oilteacht	oilteacht	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	59	nsubj	_	_
89	agus	agus	CCONJ	Coord	_	91	cc	_	_
90	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	91	det	_	_
91	t-eolas	eolas	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	88	conj	_	_
92	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	93	cop	_	_
93	gá	gá	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	88	acl:relcl	_	_
94	chun	chun	ADP	Simp	_	98	case	_	_
95	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	96	nmod:poss	_	_
96	ngairm	gairm	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	98	obj	_	_
97	do	do	ADP	Simp	_	98	mark:prt	_	_
98	chleachta	cleachta	NOUN	Noun	Case=Gen|Form=Len|VerbForm=Inf	93	xcomp	_	_
99	go	go	PART	Ad	PartType=Ad	100	mark:prt	_	_
100	héifeachtúil	éifeachtúil	ADJ	Adj	Degree=Pos|Form=HPref	98	advmod	_	SpaceAfter=No
101	,	,	PUNCT	Punct	_	102	punct	_	_
102	féadfidh	féad	VERB	FutInd	Mood=Ind|Tense=Fut	2	conj	_	_
103	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	104	det	_	_
104	Ard-Chomhairle	Ard-Chomhairle	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	102	nsubj	_	SpaceAfter=No
105	,	,	PUNCT	Punct	_	107	punct	_	_
106	le	le	ADP	Simp	_	107	case	_	_
107	hordú	ordú	NOUN	Noun	Case=NomAcc|Form=HPref|Gender=Masc|Number=Sing	102	obl	_	SpaceAfter=No
108	,	,	PUNCT	Punct	_	110	punct	_	_
109	a	a	PART	Inf	PartType=Inf	110	mark	_	_
110	fhaisnéis	faisnéis	NOUN	Noun	Form=Len|VerbForm=Inf	102	xcomp	_	_
111	ná	ná	SCONJ	Subord	_	112	mark	_	_
112	déanfidh	déan	VERB	FutInd	Mood=Ind|Tense=Fut	102	advcl	_	_
113	aon	aon	DET	Det	PronType=Ind	114	det	_	_
114	teisteas	teastas	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	112	nsubj	_	_
115	tástála	tástáil	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	114	compound	_	_
116	a	a	PART	Vb	PartType=Vb|PronType=Rel	117	obj	_	_
117	dheonfidh	deonaigh	VERB	FutInd	Form=Len|Mood=Ind|Tense=Fut	114	acl:relcl	_	_
118	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	119	det	_	_
119	coláiste	coláiste	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	117	nsubj	_	_
120	no	no	CCONJ	Coord	_	122	cc	_	_
121	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	122	det	_	_
122	cólucht	cólucht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	119	conj	_	_
123	san	sin	X	CM	Dialect=Munster|PronType=Dem	122	det	_	_
124	d'	do	ADP	Simp	_	125	case	_	SpaceAfter=No
125	éinne	duine	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	117	obl	_	_
126	ar	ar	ADP	Simp	_	128	case	_	_
127	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	128	det	_	_
128	dáta	dáta	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	117	obl	_	_
129	no	no	CCONJ	Coord	_	133	cc	_	_
130	tar	tar	ADP	Cmpd	PrepForm=Cmpd	133	case	_	_
131	éis	éis	ADP	Cmpd	_	130	fixed	_	_
132	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	133	det	_	_
133	dáta	dáta	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	128	conj	_	_
134	a	a	PART	Vb	PartType=Vb|PronType=Rel	135	obj	_	_
135	luadhfar	luaigh	VERB	FutInd	Mood=Ind|Tense=Fut|Voice=Auto	133	acl:relcl	_	_
136	chuige	chuig	ADP	Prep	Gender=Masc|Number=Sing|Person=3	137	case	_	_
137	sin	sin	PRON	Dem	PronType=Dem	135	obl	_	_
138	san	i	ADP	Art	Number=Sing|PronType=Art	139	case	_	_
139	ordú	ordú	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	135	obl	_	_
140	san	sin	X	CM	Dialect=Munster|PronType=Dem	139	det	_	_
141	ceart	ceart	NOUN	Noun	Degree=Pos	148	obj	_	_
142	chun	chun	ADP	Simp	_	144	case	_	_
143	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	144	nmod:poss	_	_
144	chláruithe	clárú	NOUN	Noun	Case=Gen|Form=Len|Gender=Masc|Number=Sing	141	nmod	_	_
145	sa	i	ADP	Art	Number=Sing|PronType=Art	146	case	_	_
146	chlár	clár	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	144	nmod	_	_
147	do	do	ADP	Simp	_	148	mark	_	_
148	bhronna	bronnadh	NOUN	Noun	Form=Len|VerbForm=Inf	112	xcomp	_	_
149	ar	ar	ADP	Simp	_	151	case	_	_
150	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	151	det	_	_
151	duine	duine	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	148	nmod	_	_
152	sin	sin	DET	Det	PronType=Dem	151	det	_	SpaceAfter=No
153	.	.	PUNCT	.	_	2	punct	_	_

~~~


