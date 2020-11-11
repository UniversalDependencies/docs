---
layout: base
title:  'Statistics of csubj in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fr_sequoia-dep-csubj-pass.html">csubj:pass</a></tt>.

33 nodes (0%) are attached to their parents as `csubj`.

33 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.87878787878788.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (23; 70% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (8; 24% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	3	expl:subj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	nécessaire	nécessaire	ADJ	_	Number=Sing	0	root	_	_
4	d'	de	ADP	_	_	5	mark	_	SpaceAfter=No
5	augmenter	augmenter	VERB	_	VerbForm=Inf	3	csubj	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	dotation	dotation	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	_
8	et	et	CCONJ	_	_	10	cc	_	_
9	de	de	ADP	_	_	10	mark	_	_
10	créer	créer	VERB	_	VerbForm=Inf	5	conj	_	_
11	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	poste	poste	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	_
13	budgétaire	budgétaire	ADJ	_	Number=Sing	12	amod	_	_
14	;	;	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 csubj	color:blue
1	Monsieur	monsieur	NOUN	_	Gender=Masc|Number=Sing	18	vocative	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Président	président	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	chers	cher	ADJ	_	Gender=Masc|Number=Plur	6	amod	_	_
6	collègues	collègue	NOUN	_	Number=Plur	1	conj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	Madame	monsieur	NOUN	_	Gender=Fem|Number=Sing	1	conj	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	rapporteur	rapporteur	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	18	punct	_	_
12	comme	comme	SCONJ	_	_	13	mark	_	_
13	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	advcl	_	_
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	proverbe	proverbe	NOUN	_	Gender=Masc|Number=Sing	13	nsubj	_	_
16	:	:	PUNCT	_	_	13	punct	_	_
17	mieux	mieux	ADV	_	_	18	advmod	_	_
18	vaut	valoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
19	prévenir	prévenir	VERB	_	VerbForm=Inf	18	csubj	_	_
20	que	que	SCONJ	_	_	21	mark	_	_
21	guérir	guérir	VERB	_	VerbForm=Inf	18	advcl	_	SpaceAfter=No
22	.	.	PUNCT	_	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 121	bgColor:blue
# visual-style 121	fgColor:white
# visual-style 115	bgColor:blue
# visual-style 115	fgColor:white
# visual-style 115 121 csubj	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	fonctionnaires	fonctionnaire	NOUN	_	Number=Plur	4	nsubj	_	_
3	n'	ne	ADV	_	Polarity=Neg	4	advmod	_	SpaceAfter=No
4	ayant	avoir	VERB	_	Tense=Pres|VerbForm=Part	79	advcl	_	_
5	pas	pas	ADV	_	Polarity=Neg	4	advmod	_	_
6	à	à	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	époque	époque	NOUN	_	Gender=Fem|Number=Sing	4	obl:mod	_	_
9	de	un	DET	_	Definite=Ind|Number=Sing|PronType=Art	10	det	_	_
10	statut	statut	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	_
11	protecteur	protecteur	ADJ	_	Gender=Masc|Number=Sing	10	amod	_	_
12	et	et	CCONJ	_	_	14	cc	_	_
13	étant	être	AUX	_	Tense=Pres|VerbForm=Part	14	aux:pass	_	_
14	considérés	considérer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	4	conj	_	_
15	comme	comme	ADP	_	_	17	case	_	_
16	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	17	det	_	_
17	agents	agent	NOUN	_	Number=Plur	14	xcomp	_	_
18	de	de	ADP	_	_	20	case	_	_
19	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	gouvernement	gouvernement	NOUN	_	Gender=Masc|Number=Sing	17	nmod	_	_
21	d'	de	ADP	_	_	23	case	_	SpaceAfter=No
22	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	part	part	NOUN	_	Number=Sing	14	obl:mod	_	SpaceAfter=No
24	,	,	PUNCT	_	_	79	punct	_	_
25	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	26	det	_	_
26	militaires	militaire	NOUN	_	Gender=Masc|Number=Plur	27	nsubj	_	_
27	ayant	avoir	VERB	_	Tense=Pres|VerbForm=Part	79	advcl	_	_
28	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	rôle	rôle	NOUN	_	Gender=Masc|Number=Sing	27	obj	_	_
30	et	et	CCONJ	_	_	32	cc	_	_
31	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
32	statut	statut	NOUN	_	Gender=Masc|Number=Sing	29	conj	_	_
33	très	très	ADV	_	_	34	advmod	_	_
34	particulier	particulier	ADJ	_	Gender=Masc|Number=Sing	32	amod	_	_
35	sous	sous	ADP	_	_	38	case	_	_
36	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	38	det	_	_
37	Troisième	troisième	ADJ	_	Number=Sing|NumType=Ord	38	amod	_	_
38	République	république	NOUN	_	Gender=Fem|Number=Sing	27	obl:mod	_	_
39	d'	de	ADP	_	_	41	case	_	SpaceAfter=No
40	autre	autre	ADJ	_	Number=Sing	41	amod	_	_
41	part	part	NOUN	_	Number=Sing	27	obl:mod	_	_
42	(	(	PUNCT	_	_	45	punct	_	SpaceAfter=No
43	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3	45	nsubj	_	_
44	ne	ne	ADV	_	Polarity=Neg	45	advmod	_	_
45	votent	voter	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	32	parataxis	_	_
46	pas	pas	ADV	_	Polarity=Neg	45	advmod	_	_
47	et	et	CCONJ	_	_	49	cc	_	_
48	n'	ne	ADV	_	Polarity=Neg	49	advmod	_	SpaceAfter=No
49	ont	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	45	conj	_	_
50	pas	pas	ADV	_	Polarity=Neg	49	advmod	_	_
51	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	52	det	_	_
52	droit	droit	NOUN	_	Gender=Masc|Number=Sing	49	obj	_	_
53	d'	de	ADP	_	_	54	mark	_	SpaceAfter=No
54	exprimer	exprimer	VERB	_	VerbForm=Inf	52	acl	_	_
55	publiquement	publiquement	ADV	_	_	54	advmod	_	_
56	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	57	det	_	_
57	opinions	opinion	NOUN	_	Gender=Fem|Number=Plur	54	obj	_	_
58	politiques	politique	ADJ	_	Number=Plur	57	amod	_	_
59	-	-	PUNCT	_	_	54	punct	_	SpaceAfter=No
60	de	de	ADP	_	_	66	advmod	_	ExtPos=ADV
61	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	60	fixed	_	_
62	moins	moins	ADV	_	_	60	fixed	_	_
63	pas	pas	ADV	_	_	66	advmod	_	_
64	à	à	ADP	_	_	66	case	_	_
65	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	66	det	_	_
66	sens	sens	NOUN	_	Gender=Masc|Number=Sing	54	obl:mod	_	_
67	de	de	ADP	_	_	68	case	_	_
68	factions	faction	NOUN	_	Gender=Fem|Number=Plur	66	nmod	_	SpaceAfter=No
69	-	-	PUNCT	_	_	54	punct	_	_
70	durant	durant	ADP	_	_	72	case	_	_
71	leur	son	DET	_	Number=Sing|Poss=Yes	72	det	_	_
72	service	service	NOUN	_	Gender=Masc|Number=Sing	54	obl:mod	_	_
73	actif	actif	ADJ	_	Gender=Masc|Number=Sing	72	amod	_	SpaceAfter=No
74	)	)	PUNCT	_	_	45	punct	_	SpaceAfter=No
75	,	,	PUNCT	_	_	79	punct	_	_
76	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	77	det	_	_
77	général	général	NOUN	_	Gender=Masc|Number=Sing	79	nsubj	_	_
78	André	André	PROPN	_	Gender=Masc|Number=Sing	77	flat:name	_	_
79	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
80	paradoxalement	paradoxalement	ADV	_	_	79	advmod	_	_
81	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	82	det	_	_
82	droit	droit	NOUN	_	Gender=Masc|Number=Sing	79	obj	_	_
83	-	-	PUNCT	_	_	82	punct	_	SpaceAfter=No
84	de	de	ADP	_	_	89	advmod	_	ExtPos=ADV
85	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	84	fixed	_	_
86	moins	moins	ADV	_	_	84	fixed	_	_
87	dans	dans	ADP	_	_	89	case	_	_
88	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	89	det	_	SpaceAfter=No
89	idée	idée	NOUN	_	Gender=Fem|Number=Sing	82	nmod	_	_
90	de	de	ADP	_	_	92	case	_	_
91	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	92	det	_	_
92	prérogatives	prérogative	NOUN	_	Gender=Fem|Number=Plur	89	nmod	_	_
93	politiques	politique	ADJ	_	Number=Plur	92	amod	_	_
94	de	de	ADP	_	_	96	case	_	_
95	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	96	det	_	SpaceAfter=No
96	époque	époque	NOUN	_	Gender=Fem|Number=Sing	92	nmod	_	SpaceAfter=No
97	-	-	PUNCT	_	_	82	punct	_	_
98	de	de	ADP	_	_	100	case	_	_
99	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	100	det	_	_
100	gouvernement	gouvernement	NOUN	_	Gender=Masc|Number=Sing	82	nmod	_	_
101	sur	sur	ADP	_	_	103	case	_	_
102	ses	son	DET	_	Number=Plur|Poss=Yes	103	det	_	_
103	agents	agent	NOUN	_	Number=Plur	82	nmod	_	SpaceAfter=No
104	,	,	PUNCT	_	_	79	punct	_	_
105	bien	bien	ADV	_	_	115	mark	_	ExtPos=SCONJ
106	qu'	que	SCONJ	_	_	105	fixed	_	SpaceAfter=No
107	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	115	expl:subj	_	_
108	soit	être	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	115	cop	_	_
109	ici	ici	ADV	_	_	115	advmod	_	_
110	tout	tout	ADV	_	_	115	advmod	_	ExtPos=ADV
111	de	de	ADP	_	_	110	fixed	_	_
112	même	même	ADV	_	_	110	fixed	_	_
113	à	à	ADP	_	_	115	case	_	_
114	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	115	det	_	_
115	limites	limite	NOUN	_	Gender=Fem|Number=Plur	79	advcl	_	_
116	de	de	ADP	_	_	118	case	_	_
117	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	118	det	_	_
118	légalité	légalité	NOUN	_	Gender=Fem|Number=Sing	115	nmod	_	_
119	de	de	ADP	_	_	121	mark	_	_
120	faire	faire	AUX	_	VerbForm=Inf	121	aux:caus	_	_
121	surveiller	surveiller	VERB	_	VerbForm=Inf	115	csubj	_	_
122	ses	son	DET	_	Number=Plur|Poss=Yes	123	det	_	_
123	officiers	officier	NOUN	_	Number=Plur	121	obj	_	SpaceAfter=No
124	,	,	PUNCT	_	_	121	punct	_	_
125	y	y	PRON	_	Person=3	129	case	_	ExtPos=ADP
126	compris	compris	ADJ	_	Gender=Masc	125	fixed	_	_
127	dans	dans	ADP	_	_	129	case	_	_
128	leur	son	DET	_	Number=Sing|Poss=Yes	129	det	_	_
129	vie	vie	NOUN	_	Gender=Fem|Number=Sing	121	obl:mod	_	_
130	privée	privé	ADJ	_	Gender=Fem|Number=Sing	129	amod	_	SpaceAfter=No
131	,	,	PUNCT	_	_	121	punct	_	_
132	à	à	ADP	_	_	134	case	_	_
133	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	134	det	_	_
134	nom	nom	NOUN	_	Gender=Masc|Number=Sing	121	obl:mod	_	_
135	de	de	ADP	_	_	137	case	_	_
136	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	137	det	_	SpaceAfter=No
137	intérêt	intérêt	NOUN	_	Gender=Masc|Number=Sing	134	nmod	_	_
138	supérieur	supérieur	ADJ	_	Gender=Masc|Number=Sing	137	amod	_	_
139	de	de	ADP	_	_	141	case	_	_
140	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	141	det	_	SpaceAfter=No
141	État	état	NOUN	_	Gender=Masc|Number=Sing	137	nmod	_	SpaceAfter=No
142	.	.	PUNCT	_	_	79	punct	_	_

~~~


