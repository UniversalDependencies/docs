---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_valico-dep-nsubj.html">nsubj</a></tt>.

1 nodes (0%) are attached to their parents as `nsubj:pass`.

1 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 22 nsubj:pass	color:blue
1	Gli	gli	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
2	aveva	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	aux	_	_
3	cominciato	cominciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	a	a	ADP	E	_	5	mark	_	_
5	seguire	seguire	VERB	V	VerbForm=Inf	3	xcomp	_	_
6	fino	fino	ADV	B	_	9	case	_	_
7	a	a	ADP	E	_	6	fixed	_	_
8	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	fine	fine	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	_
10	di	di	ADP	E	_	12	case	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	parco	parco	NOUN	S	Gender=Masc|Number=Sing	9	nmod	_	_
13	dove	dove	PRON	PR	PronType=Rel	15	obl	_	_
14	aveva	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	aux	_	_
15	visto	vedere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	acl:relcl	_	_
16	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	bat	bat	NOUN	S	Gender=Masc|Number=Sing	15	obj	_	Foreign=Yes
18	di	di	ADP	E	_	19	case	_	_
19	base	baseball	NOUN	S	Gender=Fem|Number=Sing	17	nmod	_	_
20	ball	_	X	_	_	19	goeswith	_	_
21	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	quale	quale	PRON	PR	Number=Sing|PronType=Rel	24	nsubj:pass	_	_
23	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	24	aux:pass	_	_
24	portato	portare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	17	acl:relcl	_	_
25	da	da	ADP	E	_	27	case	_	_
26	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	bambino	bambino	NOUN	S	Gender=Masc|Number=Sing	24	obl:agent	_	_
28	felice	felice	ADJ	A	Number=Sing	27	amod	_	SpaceAfter=No
29	,	,	PUNCT	FF	_	3	punct	_	_
30	lui	lui	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	33	nsubj	_	_
31	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	33	expl	_	_
32	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	33	aux	_	_
33	avvicinato	avvicinare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	conj	_	_
34	a	a	ADP	E	_	36	case	_	_
35	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	36	det	_	_
36	bambino	bambino	NOUN	S	Gender=Masc|Number=Sing	33	obl	_	_
37	e	e	CCONJ	CC	_	40	cc	_	_
38	l'	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	40	obj	_	SpaceAfter=No
39	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	40	aux	_	_
40	rubato	rubare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	conj	_	_
41	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	43	det	_	_
42	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	43	det:poss	_	_
43	bat	bat	NOUN	S	Gender=Masc|Number=Sing	40	obj	_	Foreign=Yes|SpaceAfter=No
44	,	,	PUNCT	FF	_	47	punct	_	_
45	povero	povero	ADJ	A	Gender=Masc|Number=Sing	46	amod	_	_
46	bambino	bambino	NOUN	S	Gender=Masc|Number=Sing	47	vocative	_	_
47	pianggiava	pianggiare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	33	conj	_	_
48	molto	molto	ADV	B	_	47	advmod	_	SpaceAfter=No
49	,	,	PUNCT	FF	_	47	punct	_	_
50	non	non	ADV	BN	PronType=Neg	52	advmod	_	_
51	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	52	expl:impers	_	_
52	sapeva	sapere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	47	conj	_	_
53	se	se	SCONJ	CS	_	54	mark	_	_
54	pianggiava	pianggiare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	52	ccomp	_	_
55	una	una	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	56	det	_	_
56	bambina	bambino	NOUN	S	Gender=Fem|Number=Sing	54	nsubj	_	_
57	o	o	CCONJ	CC	_	59	cc	_	_
58	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	59	det	_	_
59	bambino	bambino	NOUN	S	Gender=Masc|Number=Sing	56	conj	_	SpaceAfter=No
60	,	,	PUNCT	FF	_	54	punct	_	_
61	subito	subito	ADV	B	_	62	advmod	_	_
62	dopo	dopo	ADV	B	_	80	advmod	_	_
63	indietro	indietro	ADV	B	_	66	advmod	_	_
64	a	a	ADP	E	_	66	case	_	_
65	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	66	det	_	_
66	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	80	obl	_	_
67	robusto	robusto	ADJ	A	Gender=Masc|Number=Sing	66	amod	_	_
68	Giulio	Giulio	PROPN	SP	_	80	nsubj	_	_
69	con	con	ADP	E	_	71	case	_	_
70	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	71	det	_	_
71	bat	bat	NOUN	S	Gender=Masc|Number=Sing	68	nmod	_	Foreign=Yes
72	e	e	CCONJ	CC	_	73	cc	_	_
73	aiutato	aiutare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	71	conj	_	_
74	da	da	ADP	E	_	76	case	_	_
75	una	una	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	76	det	_	_
76	forza	forza	NOUN	S	Gender=Fem|Number=Sing	73	obl	_	_
77	terribile	terribile	ADJ	A	Number=Sing	76	amod	_	_
78	gli	gli	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	80	obj	_	_
79	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	80	aux	_	_
80	attaccato	attaccare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	conj	_	_
81	a	a	SCONJ	CS	_	88	mark	_	_
82	tal	tale	SCONJ	CS	_	81	fixed	_	_
83	punto	punto	SCONJ	CS	_	81	fixed	_	_
84	che	che	SCONJ	CS	_	81	fixed	_	_
85	l'	lo	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	86	det	_	SpaceAfter=No
86	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	88	nsubj	_	_
87	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	88	aux	_	_
88	caduto	cadere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	80	advcl	_	_
89	a	a	ADP	E	_	90	case	_	_
90	piombo	piombo	NOUN	S	Gender=Masc|Number=Sing	88	obl	_	_
91	su	su	ADP	E	_	93	case	_	_
92	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	93	det	_	_
93	suolo	suolo	NOUN	S	Gender=Masc|Number=Sing	88	obl	_	_
94	pavimentato	pavimentato	ADJ	A	Gender=Masc|Number=Sing	93	amod	_	_
95	auuch	auch	INTJ	I	_	88	discourse	_	Foreign=Yes|SpaceAfter=No
96	!	!	PUNCT	FS	_	80	punct	_	SpacesAfter=\n

~~~


