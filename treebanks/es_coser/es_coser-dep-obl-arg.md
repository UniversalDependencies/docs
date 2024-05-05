---
layout: base
title:  'Statistics of obl:arg in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="es_coser-dep-obl.html">obl</a></tt>.

94 nodes (1%) are attached to their parents as `obl:arg`.

76 instances of `obl:arg` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.69148936170213.

The following 6 pairs of parts of speech are connected with `obl:arg`: <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (81; 86% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (9; 10% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:arg	color:blue
1	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	5	punct	_	SpaceAfter=No
2	Que	que	SCONJ	pr0cn000	_	5	mark	_	_
3	te	tú	PRON	pc2cs000	Case=Dat|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	5	obl:arg	_	_
4	lo	él	PRON	pc3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	5	obj	_	_
5	quieres	querer	VERB	vmip2s0	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
6	comer	comer	VERB	vmn0000	VerbForm=Inf	5	xcomp	_	_
7	así	así	ADV	rg	_	6	advmod	_	SpaceAfter=No
8	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:arg	color:blue
1	Yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	le	él	PRON	pc3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	4	obl:arg	_	_
3	suelo	soler	AUX	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	decir	decir	VERB	vmn0000	VerbForm=Inf	0	root	_	_
5	a	a	ADP	fs	_	7	case	_	_
6	mi	mi	DET	dp1css	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det	_	_
7	hermano	hermano	NOUN	ncms000	Gender=Masc|Number=Sing	4	obl:arg	_	SpaceAfter=No
8	:	:	PUNCT	fd	PunctType=Colo	7	punct	_	_
9	Joe	Joe	PROPN	_	_	7	appos	_	SpaceAfter=No
10	,	,	PUNCT	fc	PunctType=Comm	11	punct	_	_
11	cuidao	cuidado	NOUN	i	Gender=Masc|Number=Sing	4	obj	_	Ortho=cuidado|SpaceAfter=No
12	,	,	PUNCT	fc	PunctType=Comm	13	punct	_	_
13	eh	eh	INTJ	i	_	11	discourse:filler	_	SpaceAfter=No
14	.	.	PUNCT	fp	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:arg	color:blue
1	No	no	ADV	rn	Polarity=Neg	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	3	punct	_	_
3	ahora	ahora	ADV	rg	_	6	advmod	_	SpaceAfter=No
4	,	,	PUNCT	fc	PunctType=Comm	3	punct	_	_
5	mi	mi	DET	dp1css	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	6	det	_	_
6	hijo	hijo	NOUN	ncms000	Gender=Masc|Number=Sing	18	parataxis	_	_
7	me	yo	PRON	pc1cs000	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	6	obl:arg	_	_
8	de	de	ADP	sps00	_	9	case	_	_
9	tú	tú	NOUN	pp2csn00	_	6	obl:arg	_	SpaceAfter=No
10	,	,	PUNCT	fc	PunctType=Comm	6	punct	_	_
11	claro	claro	INTJ	i	_	18	discourse	_	_
12	porque	porque	SCONJ	cs	_	18	mark	_	_
13	to	todo	DET	di0ms0	Gender=Masc|Number=Plur|PronType=Tot	15	reparandum	_	Ortho=todos|SpaceAfter=No
14	,	,	PUNCT	fc	PunctType=Comm	13	punct	_	_
15	todos	todo	PRON	pi0mp000	Gender=Masc|Number=Plur|PronType=Tot	17	reparandum	_	SpaceAfter=No
16	,	,	PUNCT	fc	PunctType=Comm	15	punct	_	_
17	todos	todo	PRON	pi0mp000	Gender=Masc|Number=Plur|PronType=Tot	18	nsubj	_	_
18	vamos	ir	VERB	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
19	igual	igual	ADV	rg	_	18	advmod	_	_
20	pos	pues	SCONJ	cs	_	18	discourse	_	Ortho=pues
21	todos	todo	PRON	pi0mp000	Gender=Masc|Number=Plur|PronType=Tot	22	nsubj	_	_
22	vamos	ir	VERB	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	18	advcl	_	_
23	igual	igual	ADV	rg	_	22	advcl	_	SpaceAfter=No
24	,	,	PUNCT	fc	PunctType=Comm	22	punct	_	_
25	entonces	entonces	ADV	rg	_	26	advmod	_	_
26	pasa	pasar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	advcl	_	_
27	eso	ese	PRON	pd0ns000	Number=Sing|PronType=Dem	26	nsubj	_	SpaceAfter=No
28	,	,	PUNCT	fc	PunctType=Comm	26	punct	_	_
29	yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	31	nsubj	_	_
30	le	él	PRON	pc3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	31	obl:arg	_	_
31	digo	decir	VERB	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	38	csubj	_	SpaceAfter=No
32	,	,	PUNCT	fc	PunctType=Comm	31	punct	_	_
33	yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	35	reparandum	_	_
34	a	a	ADP	spc00	_	35	case	_	_
35	mí	yo	PRON	pp1cso00	Case=Acc|Number=Sing|Person=1|PrepCase=Pre|PronType=Prs	38	obl:arg	_	_
36	no	no	ADV	rn	Polarity=Neg	38	advmod	_	_
37	me	yo	PRON	pc1cs000	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	38	obl:arg	_	_
38	gusta	gustar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	advcl	_	SpaceAfter=No
39	,	,	PUNCT	fc	PunctType=Comm	38	punct	_	_
40	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	41	cop	_	_
41	igual	igual	ADJ	rg	Number=Sing	26	advcl	_	_
42	aquí	aquí	ADV	rg	_	43	advmod	_	_
43	antes	antes	ADV	rg	_	41	advmod	_	_
44	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	46	reparandum	_	SpaceAfter=No
45	,	,	PUNCT	fc	PunctType=Comm	44	punct	_	_
46	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	47	det	_	_
47	costumbre	costumbre	NOUN	ncfs000	Gender=Fem|Number=Sing	41	nsubj	_	_
48	de	de	ADP	sps00	_	50	case	_	_
49	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	50	det	_	_
50	casa	casa	NOUN	ncfs000	Gender=Fem|Number=Sing	47	nmod	_	_
51	y	y	CCONJ	cc	_	54	cc	_	_
52	todo	todo	PRON	pi0ms000	Gender=Masc|Number=Sing|PronType=Tot	54	nsubj	_	_
53	era	ser	AUX	vsii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	54	cop	_	_
54	tía	tío	NOUN	ncfs000	Gender=Fem|Number=Sing	47	conj	_	_
55	esto	este	PRON	pd0ns000	Number=Sing|PronType=Dem	54	obj	_	SpaceAfter=No
56	,	,	PUNCT	fc	PunctType=Comm	54	punct	_	_
57	tía	tío	NOUN	ncfs000	Gender=Fem|Number=Sing	54	appos	_	_
58	lo	él	PRON	pc3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	57	obj	_	_
59	otro	otro	PRON	pi0ms000	Gender=Masc|Number=Sing|PronType=Ind	57	nsubj	_	SpaceAfter=No
60	,	,	PUNCT	fc	PunctType=Comm	57	punct	_	_
61	todo	todo	PRON	pi0ms000	Gender=Masc|Number=Sing|PronType=Tot	62	nsubj	_	_
62	era	ser	AUX	vsii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	64	reparandum	_	SpaceAfter=No
63	,	,	PUNCT	fc	PunctType=Comm	64	punct	_	_
64	todo	todo	PRON	pi0ms000	Gender=Masc|Number=Sing|PronType=Tot	66	reparandum	_	SpaceAfter=No
65	,	,	PUNCT	fc	PunctType=Comm	64	punct	_	_
66	todo	todo	PRON	pi0ms000	Gender=Masc|Number=Sing|PronType=Tot	68	nsubj	_	_
67	eran	ser	AUX	vsii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	68	cop	_	_
68	tías	tío	NOUN	ncfp000	Gender=Fem|Number=Plur	54	advcl	_	_
69	y	y	CCONJ	cc	_	70	cc	_	_
70	eso	ese	PRON	pd0ns000	Number=Sing|PronType=Dem	68	conj	_	SpaceAfter=No
71	,	,	PUNCT	fc	PunctType=Comm	70	punct	_	_
72	ahora	ahora	ADV	rg	_	78	advmod	_	_
73	pues	pues	SCONJ	cs	_	78	discourse	_	_
74	yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	75	nsubj	_	_
75	ni	ni	ADV	cc	_	77	reparandum	_	SpaceAfter=No
76	,	,	PUNCT	fc	PunctType=Comm	75	punct	_	_
77	ni	ni	ADV	cc	_	78	advmod	_	_
78	sabía	saber	VERB	vmii1s0	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	54	advcl	_	_
79	yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	78	nsubj	_	_
80	como	como	SCONJ	vmip1s0	_	82	mark	_	_
81	aquel	aquel	DET	pd0ms000	Gender=Masc|Number=Sing|PronType=Dem	82	nsubj	_	_
82	quería	querer	AUX	vmii1s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	78	advcl	_	_
83	hablar	hablar	VERB	vmip3s0	VerbForm=Inf	82	xcomp	_	SpaceAfter=No
84	,	,	PUNCT	fc	PunctType=Comm	82	punct	_	_
85	yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	89	nsubj	_	_
86	ahora	ahora	ADV	rg	_	89	advmod	_	_
87	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	89	det	_	_
88	otra	otro	DET	ac0fs0	Gender=Fem|Number=Sing|PronType=Ind	87	det	_	_
89	vez	vez	NOUN	ncfs000	Gender=Fem|Number=Sing	78	advcl	_	SpaceAfter=No
90	,	,	PUNCT	fc	PunctType=Comm	89	punct	_	_
91	señora	señor	NOUN	ncfs000	Gender=Fem|Number=Sing	89	obl	_	_
92	esto	este	PRON	pd0ns000	Number=Sing|PronType=Dem	91	nsubj	_	SpaceAfter=No
93	,	,	PUNCT	fc	PunctType=Comm	94	punct	_	_
94	señor	señor	NOUN	i	Gender=Masc|Number=Sing	89	obl	_	SpaceAfter=No
95	,	,	PUNCT	fc	PunctType=Comm	94	punct	_	_
96	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	98	cop	_	Ortho=son
97	unas	uno	DET	di0fp0	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	98	det	_	_
98	palabras	palabra	NOUN	ncfp000	Gender=Fem|Number=Plur	89	parataxis	_	_
99	buenas	buena	ADJ	aq0fp0	Gender=Fem|Number=Plur	98	amod	_	_
100	y	y	CCONJ	cc	_	102	cc	_	_
101	todo	todo	DET	pi0ms000	Gender=Masc|Number=Sing|PronType=Tot	102	det	_	_
102	eso	ese	PRON	pd0ns000	Number=Sing|PronType=Dem	98	conj	_	SpaceAfter=No
103	,	,	PUNCT	fc	PunctType=Comm	102	punct	_	_
104	ya	ya	ADV	rg	_	106	advmod	_	_
105	le	él	PRON	pc3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	106	obj	_	_
106	digo	decir	VERB	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	98	advcl	_	SpaceAfter=No
107	,	,	PUNCT	fc	PunctType=Comm	106	punct	_	_
108	por	por	ADP	sps00	_	112	case	_	_
109	eso	ese	PRON	pd0ns000	Number=Sing|PronType=Dem	112	obl	_	_
110	igual	igual	ADJ	rg	Number=Sing	112	mark	_	_
111	que	que	SCONJ	cs	_	110	fixed	_	_
112	todo	todo	PRON	pi0ms000	Gender=Masc|Number=Sing|PronType=Tot	106	advcl	_	_
113	y	y	CCONJ	cc	_	114	cc	_	_
114	vas	ir	VERB	vmip2s0	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	112	conj	_	_
115	a	a	ADP	spc00	_	116	case	_	_
116	misa	misa	NOUN	ncfs000	Gender=Fem|Number=Sing	114	obl	_	SpaceAfter=No
117	,	,	PUNCT	fc	PunctType=Comm	120	punct	_	_
118	igual	igual	ADV	rg	_	120	advmod	_	_
119	te	tú	PRON	pc2cs000	Case=Dat|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	120	obl:arg	_	_
120	enseñan	enseñar	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	114	advcl	_	_
121	todo	todo	PRON	pi0ms000	Gender=Masc|Number=Sing|PronType=Tot	120	nsubj	_	_
122	bien	bien	ADV	rg	_	120	advmod	_	SpaceAfter=No
123	,	,	PUNCT	fc	PunctType=Comm	120	punct	_	_
124	mal	mal	ADV	rg	_	127	advmod	_	_
125	no	no	ADV	rn	Polarity=Neg	127	advmod	_	_
126	te	tú	PRON	pc2cs000	Case=Dat|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	127	obl:arg	_	_
127	enseñan	enseñar	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	120	advcl	_	_
128	nada	nada	PRON	pi0cs000	Number=Sing|PronType=Neg	127	obj	_	_
129	¡	¡	PUNCT	faa	PunctSide=Ini|PunctType=Excl	128	punct	_	SpaceAfter=No
130	Hala	hala	INTJ	i	_	120	discourse	_	SpaceAfter=No
131	!	!	PUNCT	fat	PunctSide=Fin|PunctType=Excl	18	punct	_	_

~~~


