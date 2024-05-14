---
layout: base
title:  'Statistics of parataxis in UD_Maltese'
udver: '2'
---

## Treebank Statistics: UD_Maltese: Relations: `parataxis`

This relation is universal.

5 nodes (0%) are attached to their parents as `parataxis`.

5 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 16.6.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="mt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="mt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="mt-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 33 parataxis	color:blue
1	Nieħu	_	VERB	VV	_	0	root	_	_
2	l-	_	DET	DDC	Definite=Def|PronType=Art	3	det	_	SpaceAfter=No
3	okkażżjoniwkoll	_	NOUN	NN	_	1	obj	_	_
4	biex	_	SCONJ	CS	_	5	mark	_	_
5	inħeġġiġkom	_	VERB	VV	_	3	advcl	_	_
6	titolbu	_	VERB	VV	_	5	ccomp	_	_
7	għall-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	8	case	_	SpaceAfter=No
8	ordinandi	_	NOUN	NN	_	6	obl	_	_
9	tagħna	_	DET	PT	Poss=Yes|PronType=Prs	8	det:poss	_	_
10	fl-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	11	case	_	SpaceAfter=No
11	okkażżjonital-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	8	nmod	_	SpaceAfter=No
12	Ordinazzjoni	_	NOUN	NN	_	11	nmod	_	ToDo=nmod
13	Presbiterali	_	ADJ	MJ	_	12	amod	_	_
14	ta'	_	ADP	PRP	AdpType=Prep	16	case	_	_
15	żewġ	_	NUM	NC	NumType=Card	16	nummod	_	_
16	djakni	_	NOUN	NN	_	12	nmod	_	_
17	(	_	PUNCT	PUN	_	18	punct	_	_
18	nhar	_	NOUN	NN	_	16	parataxis	_	_
19	il-	_	DET	DDC	Definite=Def|PronType=Art	20	det	_	SpaceAfter=No
20	Ħadd	_	PROPN	NP	_	18	nmod	_	_
21	13	_	NUM	NC	NumType=Card	20	nummod	_	_
22	ta'	_	ADP	PRP	AdpType=Prep	23	case	_	_
23	Ġunju	_	NOUN	NN	_	21	nmod	_	_
24	)	_	PUNCT	PUN	_	18	punct	_	_
25	u	_	CCONJ	CC	_	27	cc	_	_
26	l-	_	DET	DDC	Definite=Def|PronType=Art	27	det	_	SpaceAfter=No
27	Ordinazzjoni	_	NOUN	NN	_	12	conj	_	_
28	Djakonali	_	ADJ	MJ	_	27	amod	_	_
29	ta'	_	ADP	PRP	AdpType=Prep	31	case	_	_
30	sitt	_	NUM	NC	NumType=Card	31	nummod	_	_
31	seminaristi	_	NOUN	NN	_	27	nmod	_	_
32	(	_	PUNCT	PUN	_	33	punct	_	_
33	nhar	_	NOUN	NN	_	31	parataxis	_	_
34	il-	_	DET	DDC	Definite=Def|PronType=Art	35	det	_	SpaceAfter=No
35	Ħadd	_	PROPN	NP	_	33	nmod	_	_
36	20	_	NUM	NC	NumType=Card	35	nummod	_	_
37	ta'	_	ADP	PRP	AdpType=Prep	38	case	_	_
38	Ġunju	_	NOUN	NN	_	36	nmod	_	_
39	)	_	PUNCT	PUN	_	33	punct	_	_
40	.	_	PUNCT	PUN	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 parataxis	color:blue
1	Qatta'	_	VERB	VV	_	0	root	_	_
2	t-	_	DET	DDC	Definite=Def|PronType=Art	3	det	_	SpaceAfter=No
3	tadam	_	NOUN	NN	_	1	obj	_	_
4	u	_	CCONJ	CC	_	6	cc	_	_
5	l-	_	DET	DDC	Definite=Def|PronType=Art	6	det	_	SpaceAfter=No
6	faqqiegħ	_	NOUN	NN	_	3	conj	_	_
7	irqiq	_	NOUN	NN	_	1	xcomp	_	_
8	u	_	CCONJ	CC	_	9	cc	_	_
9	qaxxar	_	VERB	VV	_	1	conj	_	_
10	it-	_	DET	DDC	Definite=Def|PronType=Art	11	det	_	SpaceAfter=No
11	tuffieħa	_	NOUN	NN	_	9	obj	_	_
12	;	_	PUNCT	PUN	_	1	punct	_	_
13	neħħilha	_	VERB	VV	_	1	parataxis	_	_
14	l-	_	DET	DDC	Definite=Def|PronType=Art	15	det	_	SpaceAfter=No
15	qalba	_	NOUN	NN	_	13	obj	_	_
16	u	_	CCONJ	CC	_	17	cc	_	_
17	qattagħha	_	ADP	PMP	AdpType=Preppron	15	conj	_	_
18	.	_	PUNCT	PUN	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 83	bgColor:blue
# visual-style 83	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 83 parataxis	color:blue
1	Permezz	_	ADV	MV	_	4	case	_	_
2	ta'	_	ADP	PRP	AdpType=Prep	1	fixed	_	_
3	l-	_	DET	DDC	Definite=Def|PronType=Art	4	det	_	SpaceAfter=No
4	emendi	_	NOUN	NN	_	20	nmod	_	_
5	għatt	_	ADJ	MJ	_	7	case	_	_
6	-	_	PUNCT	PUN	_	5	punct	_	SpaceAfter=No
7	trattati	_	NOUN	NN	_	4	nmod	_	_
8	tal-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	9	case	_	SpaceAfter=No
9	UE	_	PROPN	RA	Abbr=Yes	7	nmod	_	_
10	li	_	SCONJ	CMP	_	11	nsubj	_	_
11	saru	_	VERB	VV	_	4	advcl	_	_
12	bis-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	13	case	_	SpaceAfter=No
13	saħħa	_	NOUN	NN	_	11	obl	_	_
14	tat-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	15	case	_	SpaceAfter=No
15	Trattat	_	NOUN	NN	_	13	nmod	_	_
16	ta'	_	ADP	PRP	AdpType=Prep	17	case	_	_
17	Liżbona	_	PROPN	NP	_	15	nmod	_	_
18	,	_	PUNCT	PUN	_	4	punct	_	_
19	l-	_	DET	DDC	Definite=Def|PronType=Art	20	det	_	SpaceAfter=No
20	artiklu	_	NOUN	NN	_	30	nsubj	_	_
21	165	_	NUM	NCI	NumForm=Digit|NumType=Card	20	nummod	_	_
22	tat-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	23	case	_	SpaceAfter=No
23	Trattat	_	NOUN	NN	_	20	nmod	_	_
24	dwar	_	ADP	PRP	AdpType=Prep	26	case	_	_
25	il-	_	DET	DDC	Definite=Def|PronType=Art	26	det	_	SpaceAfter=No
26	Funzjonament	_	NOUN	NN	_	20	nmod	_	_
27	tal-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	28	case	_	SpaceAfter=No
28	UE	_	PROPN	RA	Abbr=Yes	26	nmod	_	_
29	issa	_	ADV	MV	_	30	advmod	_	_
30	jistipula	_	CCONJ	CR	_	0	root	_	_
31	li	_	SCONJ	CMP	_	35	mark	_	_
32	'	_	PUNCT	PUN	_	35	punct	_	_
33	L-	_	DET	DDC	Definite=Def|PronType=Art	34	det	_	SpaceAfter=No
34	Unjoni	_	NOUN	NN	_	35	nsubj	_	_
35	għandha	_	VERB	VG	_	30	ccomp	_	_
36	tikkontribwixxi	_	DET	DS	Number=Sing|PronType=Ind	35	xcomp	_	_
37	għat-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	38	case	_	SpaceAfter=No
38	tmexxija	_	NOUN	NN	_	36	nmod	_	_
39	l-	_	DET	DDC	Definite=Def|PronType=Art	40	det	_	SpaceAfter=No
40	quddiem	_	ADP	PRP	AdpType=Prep	38	nmod	_	_
41	tal-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	42	case	_	SpaceAfter=No
42	kwistjonijiet	_	NOUN	NN	_	40	nmod	_	ToDo=nmod
43	Ewropej	_	ADJ	MJ	_	42	amod	_	_
44	ta'	_	ADP	PRP	AdpType=Prep	46	case	_	_
45	l-	_	DET	DDC	Definite=Def|PronType=Art	46	det	_	SpaceAfter=No
46	Isports	_	NOUN	NN	_	42	nmod	_	_
47	,	_	PUNCT	PUN	_	50	punct	_	_
48	waqt	_	ADP	PRP	AdpType=Prep	50	case	_	_
49	li	_	SCONJ	CMP	_	50	mark	_	_
50	tieħu	_	VERB	VV	_	46	advcl	_	_
51	in	_	ADJ	MJ	_	52	case	_	_
52	kunsiderazzjoni	_	ADJ	MJ	_	50	iobj	_	_
53	n-	_	DET	DDC	Definite=Def|PronType=Art	54	det	_	SpaceAfter=No
54	natura	_	NOUN	NN	_	50	obj	_	_
55	speċifika	_	ADJ	MJ	_	54	amod	_	_
56	tiegħu	_	DET	PT	Poss=Yes|PronType=Prs	54	det:poss	_	_
57	,	_	PUNCT	PUN	_	54	punct	_	_
58	l-	_	DET	DDC	Definite=Def|PronType=Art	59	det	_	SpaceAfter=No
59	istrutturi	_	NOUN	NN	_	54	conj	_	_
60	tiegħu	_	DET	PT	Poss=Yes|PronType=Prs	59	det:poss	_	_
61	ibbażati	_	NOUN	NN	_	59	nmod	_	_
62	fuq	_	ADP	PRP	AdpType=Prep	64	case	_	_
63	il-	_	DET	DDC	Definite=Def|PronType=Art	64	det	_	SpaceAfter=No
64	volontarjat	_	NOUN	NN	_	61	nmod	_	_
65	u	_	CCONJ	CC	_	67	cc	_	_
66	l-	_	DET	DDC	Definite=Def|PronType=Art	67	det	_	SpaceAfter=No
67	funzjoni	_	NOUN	NN	_	54	conj	_	_
68	soċjali	_	ADJ	MJ	_	67	amod	_	_
69	u	_	CCONJ	CC	_	70	cc	_	_
70	edukattiva	_	ADJ	MJ	_	68	conj	_	_
71	tiegħu	_	DET	PT	Poss=Yes|PronType=Prs	67	advmod	_	_
72	.	_	PUNCT	PUN	_	35	punct	_	_
73	'	_	PUNCT	PUN	_	35	punct	_	_
74	B'	_	ADP	PRP	AdpType=Prep	75	case	_	_
75	hekk	_	ADV	MV	_	83	advmod	_	_
76	,	_	PUNCT	PUN	_	75	punct	_	_
77	l-	_	DET	DDC	Definite=Def|PronType=Art	78	det	_	SpaceAfter=No
78	azzjoni	_	NOUN	NN	_	83	nsubj	_	_
79	li	_	SCONJ	CMP	_	81	mark	_	_
80	ser	_	VERB	VV	_	81	aux	_	_
81	tibda'	_	VERB	VV	_	78	advcl	_	_
82	tittieħedsa	_	VERB	VV	_	81	advcl	_	_
83	twassal	_	VERB	VV	_	30	parataxis	_	_
84	sabiex	_	SCONJ	CS	_	85	mark	_	_
85	tinbena	_	VERB	VV	_	83	ccomp	_	_
86	identità	_	NOUN	NN	_	85	obj	_	_
87	Ewropea	_	ADJ	MJ	_	86	amod	_	_
88	fil-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	89	case	_	SpaceAfter=No
89	qasam	_	NOUN	NN	_	86	nmod	_	_
90	tal-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	91	case	_	SpaceAfter=No
91	isport	_	NOUN	NN	_	89	nmod	_	_
92	u	_	CCONJ	CC	_	83	cc	_	ToDo=cc-without-conj
93	għalhekk	_	SCONJ	CS	_	83	cc	_	ToDo=cc-without-conj
94	,	_	PUNCT	PUN	_	83	punct	_	_
95	ikun	_	AUX	VA	_	97	aux	_	_
96	hemm	_	ADV	EX	AdvType=Ex	97	expl	_	_
97	tisħiħta	_	NOUN	NN	_	83	obl	_	_
98	'	_	PUNCT	PUN	_	97	punct	_	_
99	valuri	_	NOUN	NN	_	97	obj	_	_
100	assoċjati	_	ADJ	MJ	_	99	amod	_	_
101	mal-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	102	case	_	SpaceAfter=No
102	isport	_	NOUN	NN	_	100	nmod	_	ToDo=nmod
103	.	_	PUNCT	PUN	_	83	punct	_	_

~~~


