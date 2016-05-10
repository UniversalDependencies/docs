

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

49 nodes (0%) are attached to their parents as `auxpass`.

48 instances of `auxpass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.69387755102041.

The following 1 pairs of parts of speech are connected with `auxpass`: [sv-pos/VERB]()-[sv-pos/AUX]() (49; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 auxpass	color:blue
1	Undra	undra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
2	på	på	ADP	PL	_	1	compound:prt	_	_
3	att	att	SCONJ	SN	_	7	mark	_	_
4	vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	7	nsubjpass	_	_
5	blev	bli	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	auxpass	_	_
6	lite	lite	ADV	AB|POS	Degree=Pos	7	advmod	_	_
7	undandragna	undandragen	VERB	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	1	ccomp	_	_
8	.	.	PUNCT	MAD	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

97 nodes (0%) are attached to their parents as `auxpass`.

97 instances of `auxpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37113402061856.

The following 3 pairs of parts of speech are connected with `auxpass`: [sv-pos/VERB]()-[sv-pos/AUX]() (95; 98% instances), [sv-pos/AUX]()-[sv-pos/AUX]() (1; 1% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 auxpass	color:blue
1	Den	_	PRON	PERS-P3SG	_	6	nsubjpass	_	_
2	är	_	AUX	PRES-AUX	_	6	auxpass	_	_
3	till	_	ADP	_	_	6	advmod	_	_
4	och	_	CONJ	_	_	3	cc	_	_
5	med	_	ADP	_	_	3	conj	_	_
6	utställd	_	VERB	AD-SG-IND	_	0	root	_	_
7	på	_	ADP	_	_	8	case	_	_
8	er	_	PRON	PERS-P2PL-ACC	_	6	nmod	_	_
9	.	_	PUNCT	Period	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 auxpass	color:blue
1	Kermit	_	PROPN	SG-NOM	_	6	nsubj	_	_
2	Roosevelt	_	PROPN	SG-NOM	_	1	name	_	_
3	från	_	ADP	_	_	4	case	_	_
4	CIA	_	PROPN	SG-NOM	_	1	nmod	_	_
5	"	_	PUNCT	Quote	_	6	punct	_	_
6	träffade	_	VERB	PAST-ACT	_	0	root	_	_
7	ett	_	DET	SG-IND	_	8	det	_	_
8	antal	_	NOUN	IND-NOM	_	9	det	_	_
9	officerare	_	NOUN	PL-IND-NOM	_	6	dobj	_	_
10	som	_	SCONJ	REL	_	11	mark	_	_
11	varit	_	VERB	SUP-AUX	_	12	auxpass	_	_
12	inblandade	_	VERB	AD-PL-IND	_	9	amod	_	_
13	i	_	ADP	_	_	15	case	_	_
14	den	_	DET	SG-DEF	_	15	det	_	_
15	sammansvärjning	_	NOUN	SG-IND-NOM	_	12	nmod	_	_
16	vilken	_	PRON	WH-REL-SG	_	17	nsubj	_	_
17	ledde	_	VERB	PAST-ACT	_	15	acl:relcl	_	_
18	till	_	ADP	_	_	19	case	_	_
19	statskuppen	_	NOUN	SG-DEF-NOM	_	17	nmod	_	_
20	den	_	DET	SG-DEF	_	22	det	_	_
21	22	_	ADJ	ORD	_	22	amod	_	_
22	juli	_	PROPN	SG-NOM	_	17	nmod	_	_
23	1952	_	NUM	ID	_	22	nummod	_	_
24	"	_	PUNCT	Quote	_	6	punct	_	_
25	.	_	PUNCT	Period	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 69	bgColor:blue
# visual-style 69	fgColor:white
# visual-style 70	bgColor:blue
# visual-style 70	fgColor:white
# visual-style 70 69 auxpass	color:blue
1	Från	_	ADP	_	_	2	case	_	_
2	toalettcisternen	_	NOUN	SG-DEF-NOM	_	13	nmod	_	_
3	,	_	PUNCT	Comma	_	13	punct	_	_
4	som	_	SCONJ	REL	_	7	mark	_	_
5	inte	_	PART	NEG	_	7	neg	_	_
6	kunde	_	AUX	PAST-AUX	_	7	aux	_	_
7	förmås	_	VERB	PAST-PASS	_	2	acl:relcl	_	_
8	att	_	PART	_	_	9	mark	_	_
9	spola	_	VERB	INF-ACT	_	7	xcomp	_	_
10	ur	_	ADV	_	_	9	advmod	_	_
11	ordentligt	_	ADV	_	_	9	advmod	_	_
12	,	_	PUNCT	Comma	_	13	punct	_	_
13	porlade	_	VERB	PAST-ACT	_	0	root	_	_
14	oavbrutet	_	ADV	_	_	13	advmod	_	_
15	en	_	DET	SG-IND	_	16	det	_	_
16	rännil	_	NOUN	SG-IND-NOM	_	13	nsubj	_	_
17	ner	_	ADV	_	_	19	advmod	_	_
18	i	_	ADP	_	_	19	case	_	_
19	skålen	_	NOUN	SG-DEF-NOM	_	13	nmod	_	_
20	,	_	PUNCT	Comma	_	13	punct	_	_
21	och	_	CONJ	_	_	13	cc	_	_
22	handdukarna	_	NOUN	PL-DEF-NOM	_	24	nsubj	_	_
23	var	_	VERB	PAST-ACT	_	24	cop	_	_
24	styva	_	ADJ	POS-PL-IND	_	13	conj	_	_
25	som	_	ADP	CMP	_	26	case	_	_
26	frackskjortor	_	NOUN	PL-IND-NOM	_	24	nmod	_	_
27	(	_	PUNCT	LeftParenthesis	_	30	punct	_	_
28	det	_	PRON	EX-P3SG	_	30	expl	_	_
29	hade	_	AUX	PAST-AUX	_	30	aux	_	_
30	tagit	_	VERB	SUP-ACT	_	24	appos	_	_
31	Olivia	_	PROPN	SG-NOM	_	30	iobj	_	_
32	åratal	_	NOUN	PL-IND-NOM	_	30	dobj	_	_
33	att	_	PART	_	_	34	mark	_	_
34	lära	_	VERB	INF-ACT	_	30	xcomp	_	_
35	folk	_	NOUN	IND-NOM	_	34	dobj	_	_
36	att	_	PART	_	_	37	mark	_	_
37	skölja	_	VERB	INF-ACT	_	34	xcomp	_	_
38	tvätten	_	NOUN	SG-DEF-NOM	_	37	dobj	_	_
39	ordentligt	_	ADV	_	_	37	advmod	_	_
40	)	_	PUNCT	RightParenthesis	_	30	punct	_	_
41	,	_	PUNCT	Comma	_	13	punct	_	_
42	men	_	CONJ	_	_	13	cc	_	_
43	en	_	DET	SG-IND	_	45	det	_	_
44	ålderstigen	_	ADJ	POS-SG-IND	_	45	amod	_	_
45	figur	_	NOUN	SG-IND-NOM	_	48	nsubj	_	_
46	i	_	ADP	_	_	47	case	_	_
47	kockmössa	_	NOUN	SG-IND-NOM	_	45	nmod	_	_
48	serverade	_	VERB	PAST-ACT	_	13	conj	_	_
49	te	_	NOUN	SG-IND-NOM	_	48	dobj	_	_
50	under	_	ADP	_	_	51	case	_	_
51	träden	_	NOUN	PL-DEF-NOM	_	48	nmod	_	_
52	åt	_	ADP	_	_	53	case	_	_
53	honom	_	PRON	PERS-P3SG-ACC	_	48	nmod	_	_
54	och	_	CONJ	_	_	13	cc	_	_
55	tog	_	VERB	PAST-ACT	_	13	conj	_	_
56	med	_	ADP	_	_	57	case	_	_
57	sig	_	PRON	RFL-ACC	_	55	nmod	_	_
58	hans	_	PRON	P3SG-GEN	_	60	nmod:poss	_	_
59	skrynkliga	_	ADJ	POS-DEF	_	60	amod	_	_
60	kostym	_	NOUN	SG-IND-NOM	_	55	dobj	_	_
61	för	_	ADP	_	_	63	case	_	_
62	att	_	PART	_	_	63	mark	_	_
63	få	_	AUX	INF-AUX	_	55	advcl	_	_
64	den	_	PRON	PERS-P3SG	_	63	dobj	_	_
65	pressad	_	VERB	AD-SG-IND	_	63	ccomp	_	_
66	--	_	PUNCT	Dash	_	30	punct	_	_
67	utan	_	ADP	_	_	70	case	_	_
68	att	_	PART	_	_	70	mark	_	_
69	vara	_	AUX	INF-AUX	_	70	auxpass	_	_
70	ombedd	_	AUX	AD-SG-IND	_	55	advcl	_	_
71	.	_	PUNCT	Period	_	13	punct	_	_

~~~


