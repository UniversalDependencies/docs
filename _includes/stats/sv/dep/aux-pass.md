

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is a language-specific subtype of [aux]().

39 nodes (0%) are attached to their parents as `aux:pass`.

38 instances of `aux:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61538461538462.

The following 1 pairs of parts of speech are connected with `aux:pass`: [sv-pos/VERB]()-[sv-pos/AUX]() (39; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:pass	color:blue
1	Undra	undra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
2	på	på	ADP	PL	_	1	compound:prt	_	_
3	att	att	SCONJ	SN	_	7	mark	_	_
4	vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	7	nsubj:pass	_	_
5	blev	bli	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	aux:pass	_	_
6	lite	lite	ADV	AB|POS	Degree=Pos	7	advmod	_	_
7	undandragna	undandragen	VERB	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	1	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	MAD	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is a language-specific subtype of [aux]().

84 nodes (0%) are attached to their parents as `aux:pass`.

84 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36904761904762.

The following 2 pairs of parts of speech are connected with `aux:pass`: [sv-pos/VERB]()-[sv-pos/AUX]() (83; 99% instances), [sv-pos/AUX]()-[sv-pos/AUX]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux:pass	color:blue
1	Den	_	PRON	PERS-P3SG	_	6	nsubj	_	_
2	är	_	AUX	PRES-AUX	_	6	aux:pass	_	_
3	till	_	ADV	_	_	6	advmod	_	_
4	och	_	CCONJ	_	_	3	fixed	_	_
5	med	_	ADV	_	_	3	fixed	_	_
6	utställd	_	VERB	AD-SG-IND	_	0	root	_	_
7	på	_	ADP	_	_	8	case	_	_
8	er	_	PRON	PERS-P2PL-ACC	_	6	obl	_	SpaceAfter=No
9	.	_	PUNCT	Period	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 69	bgColor:blue
# visual-style 69	fgColor:white
# visual-style 70	bgColor:blue
# visual-style 70	fgColor:white
# visual-style 70 69 aux:pass	color:blue
1	Från	_	ADP	_	_	2	case	_	_
2	toalettcisternen	_	NOUN	SG-DEF-NOM	_	13	obl	_	SpaceAfter=No
3	,	_	PUNCT	Comma	_	13	punct	_	_
4	som	_	SCONJ	REL	_	7	mark	_	_
5	inte	_	PART	NEG	_	7	advmod	_	_
6	kunde	_	AUX	PAST-AUX	_	7	aux	_	_
7	förmås	_	VERB	PAST-PASS	_	2	acl:relcl	_	_
8	att	_	PART	_	_	9	mark	_	_
9	spola	_	VERB	INF-ACT	_	7	xcomp	_	_
10	ur	_	ADV	_	_	9	advmod	_	_
11	ordentligt	_	ADV	_	_	9	advmod	_	SpaceAfter=No
12	,	_	PUNCT	Comma	_	13	punct	_	_
13	porlade	_	VERB	PAST-ACT	_	0	root	_	_
14	oavbrutet	_	ADV	_	_	13	advmod	_	_
15	en	_	DET	SG-IND	_	16	det	_	_
16	rännil	_	NOUN	SG-IND-NOM	_	13	nsubj	_	_
17	ner	_	ADV	_	_	19	advmod	_	_
18	i	_	ADP	_	_	19	case	_	_
19	skålen	_	NOUN	SG-DEF-NOM	_	13	obl	_	SpaceAfter=No
20	,	_	PUNCT	Comma	_	13	punct	_	_
21	och	_	CCONJ	_	_	24	cc	_	_
22	handdukarna	_	NOUN	PL-DEF-NOM	_	24	nsubj	_	_
23	var	_	AUX	PAST-ACT	_	24	cop	_	_
24	styva	_	ADJ	POS-PL-IND	_	13	conj	_	_
25	som	_	ADP	CMP	_	26	case	_	_
26	frackskjortor	_	NOUN	PL-IND-NOM	_	24	nmod	_	_
27	(	_	PUNCT	LeftParenthesis	_	30	punct	_	SpaceAfter=No
28	det	_	PRON	EX-P3SG	_	30	expl	_	_
29	hade	_	AUX	PAST-AUX	_	30	aux	_	_
30	tagit	_	VERB	SUP-ACT	_	24	appos	_	_
31	Olivia	_	PROPN	SG-NOM	_	30	iobj	_	_
32	åratal	_	NOUN	PL-IND-NOM	_	30	obj	_	_
33	att	_	PART	_	_	34	mark	_	_
34	lära	_	VERB	INF-ACT	_	30	xcomp	_	_
35	folk	_	NOUN	IND-NOM	_	34	obj	_	_
36	att	_	PART	_	_	37	mark	_	_
37	skölja	_	VERB	INF-ACT	_	34	xcomp	_	_
38	tvätten	_	NOUN	SG-DEF-NOM	_	37	obj	_	_
39	ordentligt	_	ADV	_	_	37	advmod	_	SpaceAfter=No
40	)	_	PUNCT	RightParenthesis	_	30	punct	_	SpaceAfter=No
41	,	_	PUNCT	Comma	_	13	punct	_	_
42	men	_	CCONJ	_	_	48	cc	_	_
43	en	_	DET	SG-IND	_	45	det	_	_
44	ålderstigen	_	ADJ	POS-SG-IND	_	45	amod	_	_
45	figur	_	NOUN	SG-IND-NOM	_	48	nsubj	_	_
46	i	_	ADP	_	_	47	case	_	_
47	kockmössa	_	NOUN	SG-IND-NOM	_	45	nmod	_	_
48	serverade	_	VERB	PAST-ACT	_	13	conj	_	_
49	te	_	NOUN	SG-IND-NOM	_	48	obj	_	_
50	under	_	ADP	_	_	51	case	_	_
51	träden	_	NOUN	PL-DEF-NOM	_	48	obl	_	_
52	åt	_	ADP	_	_	53	case	_	_
53	honom	_	PRON	PERS-P3SG-ACC	_	48	obl	_	_
54	och	_	CCONJ	_	_	55	cc	_	_
55	tog	_	VERB	PAST-ACT	_	13	conj	_	_
56	med	_	ADP	_	_	57	case	_	_
57	sig	_	PRON	RFL-ACC	_	55	obl	_	_
58	hans	_	PRON	P3SG-GEN	_	60	nmod:poss	_	_
59	skrynkliga	_	ADJ	POS-DEF	_	60	amod	_	_
60	kostym	_	NOUN	SG-IND-NOM	_	55	obj	_	_
61	för	_	ADP	_	_	63	case	_	_
62	att	_	PART	_	_	63	mark	_	_
63	få	_	AUX	INF-AUX	_	55	advcl	_	_
64	den	_	PRON	PERS-P3SG	_	63	obj	_	_
65	pressad	_	ADJ	POS-SG-IND	_	63	xcomp	_	_
66	--	_	PUNCT	Dash	_	30	punct	_	_
67	utan	_	ADP	_	_	70	case	_	_
68	att	_	PART	_	_	70	mark	_	_
69	vara	_	AUX	INF-AUX	_	70	aux:pass	_	_
70	ombedd	_	AUX	AD-SG-IND	_	55	advcl	_	SpaceAfter=No
71	.	_	PUNCT	Period	_	13	punct	_	_

~~~


