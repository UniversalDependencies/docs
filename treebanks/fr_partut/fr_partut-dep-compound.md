---
layout: base
title:  'Statistics of compound in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `compound`

This relation is universal.

71 nodes (0%) are attached to their parents as `compound`.

71 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14084507042254.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (70; 99% instances), <tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	états	état	NOUN	S	Gender=Masc|Number=Plur	0	root	_	_
3	membres	membre	NOUN	S	Gender=Masc|Number=Plur	2	compound	_	_
4	bénéficiant	bénéficier	VERB	V	Number=Sing|Tense=Pres|VerbForm=Part	3	acl	_	_
5	de	de	ADP	E	_	6	case	_	_
6	compétences	compétence	NOUN	S	Gender=Fem|Number=Plur	4	obl	_	_
7	accrues	accroir	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	6	acl	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 100	bgColor:blue
# visual-style 100	fgColor:white
# visual-style 99	bgColor:blue
# visual-style 99	fgColor:white
# visual-style 99 100 compound	color:blue
1	L'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	Assemblée	assemblée	NOUN	S	Gender=Fem|Number=Sing	4	nsubj	_	_
3	Générale	générale	ADJ	A	Gender=Fem|Number=Sing	2	amod	_	_
4	proclame	proclamer	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	présente	présent	ADJ	A	Gender=Fem|Number=Sing	7	amod	_	_
7	Déclaration	déclaration	NOUN	S	Gender=Fem|Number=Sing	4	obj	_	_
8	Universelle	universelle	ADJ	A	Gender=Fem|Number=Sing	7	amod	_	_
9	de	de	ADP	E	_	11	case	_	_
10	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	Droits	droit	NOUN	S	Gender=Masc|Number=Plur	7	nmod	_	_
12	de	de	ADP	E	_	14	case	_	_
13	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	14	det	_	SpaceAfter=No
14	Homme	homme	NOUN	S	Gender=Masc|Number=Sing	11	nmod	_	_
15	comme	comme	ADP	E	_	17	case	_	_
16	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	17	det	_	SpaceAfter=No
17	idéal	idéal	NOUN	S	Gender=Masc|Number=Sing	4	obl	_	_
18	commun	commun	ADJ	A	Gender=Masc|Number=Sing	17	amod	_	_
19	à	à	ADP	E	_	20	mark	_	_
20	atteindre	atteindre	VERB	V	VerbForm=Inf	17	acl	_	_
21	par	par	ADP	E	_	24	case	_	_
22	tous	tout	DET	T	Gender=Masc|Number=Plur|PronType=Tot	24	det	_	_
23	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	24	det	_	_
24	peuples	peuple	NOUN	S	Gender=Masc|Number=Plur	20	obl	_	_
25	et	et	CCONJ	CC	_	28	cc	_	_
26	toutes	tout	DET	T	Gender=Fem|Number=Plur|PronType=Tot	28	det	_	_
27	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	28	det	_	_
28	nations	nation	NOUN	S	Gender=Fem|Number=Plur	24	conj	_	_
29	afin	afin	ADP	E	_	51	mark	_	_
30	que	que	SCONJ	CS	_	29	fixed	_	_
31	tous	tout	DET	T	Gender=Masc|Number=Plur|PronType=Tot	33	det	_	_
32	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	33	det	_	_
33	individus	individu	NOUN	S	Gender=Masc|Number=Plur	51	nsubj	_	_
34	et	et	CCONJ	CC	_	37	cc	_	_
35	tous	tout	DET	T	Gender=Masc|Number=Plur|PronType=Tot	37	det	_	_
36	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	37	det	_	_
37	organes	organe	NOUN	S	Gender=Masc|Number=Plur	33	conj	_	_
38	de	de	ADP	E	_	40	case	_	_
39	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	40	det	_	_
40	société	société	NOUN	S	Gender=Fem|Number=Sing	37	nmod	_	SpaceAfter=No
41	,	,	PUNCT	FF	_	33	punct	_	_
42	ayant	avoir	VERB	V	VerbForm=Ger	51	advcl	_	_
43	cette	cette	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	44	det	_	_
44	déclaration	déclaration	NOUN	S	Gender=Fem|Number=Sing	42	obj	_	_
45	constamment	constamment	ADV	B	_	42	advmod	_	_
46	à	à	ADP	E	_	48	case	_	_
47	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	48	det	_	SpaceAfter=No
48	esprit	esprit	NOUN	S	Gender=Masc|Number=Sing	42	obl	_	SpaceAfter=No
49	,	,	PUNCT	FF	_	42	punct	_	_
50	s'	se	PRON	P	Person=3|PronType=Prs	51	obj	_	SpaceAfter=No
51	efforcent	efforcent	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	advcl	_	SpaceAfter=No
52	,	,	PUNCT	FF	_	51	punct	_	_
53	par	par	ADP	E	_	55	case	_	_
54	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	55	det	_	SpaceAfter=No
55	enseignement	enseignement	NOUN	S	Gender=Masc|Number=Sing	51	obl	_	_
56	et	et	CCONJ	CC	_	58	cc	_	_
57	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	58	det	_	SpaceAfter=No
58	éducation	éducation	NOUN	S	Gender=Fem|Number=Sing	55	conj	_	SpaceAfter=No
59	,	,	PUNCT	FF	_	51	punct	_	_
60	de	de	ADP	E	_	61	mark	_	_
61	développer	développer	VERB	V	VerbForm=Inf	51	xcomp	_	_
62	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	63	det	_	_
63	respect	respect	NOUN	S	Gender=Masc|Number=Sing	61	obj	_	_
64	de	de	ADP	E	_	66	case	_	_
65	ces	ces	DET	DD	Gender=Masc|Number=Plur|PronType=Dem	66	det	_	_
66	droits	droit	NOUN	S	Gender=Masc|Number=Plur	63	nmod	_	_
67	et	et	CCONJ	CC	_	68	cc	_	_
68	libertés	liberté	NOUN	S	Gender=Fem|Number=Plur	66	conj	_	_
69	et	et	CCONJ	CC	_	72	cc	_	_
70	d'	de	ADP	E	_	72	mark	_	SpaceAfter=No
71	en	en	PRON	PE	Person=3|PronType=Prs	85	nmod	_	_
72	assurer	assurer	VERB	V	VerbForm=Inf	61	conj	_	SpaceAfter=No
73	,	,	PUNCT	FF	_	72	punct	_	_
74	par	par	ADP	E	_	76	case	_	_
75	des	un	DET	RI	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	76	det	_	_
76	mesures	mesure	NOUN	S	Gender=Fem|Number=Plur	72	obl	_	_
77	progressives	progressif	ADJ	A	Gender=Fem|Number=Plur	76	amod	_	_
78	d'	de	ADP	E	_	79	case	_	SpaceAfter=No
79	ordre	ordre	NOUN	S	Gender=Masc|Number=Sing	76	nmod	_	_
80	national	national	ADJ	A	Gender=Masc|Number=Sing	79	amod	_	_
81	et	et	CCONJ	CC	_	82	cc	_	_
82	international	international	ADJ	A	Gender=Masc|Number=Sing	80	conj	_	SpaceAfter=No
83	,	,	PUNCT	FF	_	72	punct	_	_
84	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	85	det	_	_
85	reconnaissance	reconnaissance	NOUN	S	Gender=Fem|Number=Sing	72	obj	_	_
86	et	et	CCONJ	CC	_	88	cc	_	_
87	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	88	det	_	SpaceAfter=No
88	application	application	NOUN	S	Gender=Fem|Number=Sing	85	conj	_	_
89	universelles	universel	ADJ	A	Gender=Fem|Number=Plur	88	amod	_	_
90	et	et	CCONJ	CC	_	91	cc	_	_
91	effectives	effectif	ADJ	A	Gender=Fem|Number=Plur	89	conj	_	SpaceAfter=No
92	,	,	PUNCT	FF	_	72	punct	_	_
93	tant	tant	ADV	B	_	96	cc	_	_
94	parmi	parmi	ADP	E	_	96	case	_	_
95	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	96	det	_	_
96	populations	population	NOUN	S	Gender=Fem|Number=Plur	72	obl	_	_
97	de	de	ADP	E	_	99	case	_	_
98	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	99	det	_	_
99	Etats	Etats	PROPN	SP	_	96	nmod	_	_
100	membres	membre	NOUN	S	Gender=Masc|Number=Plur	99	compound	_	_
101	eux-mêmes	eux-mêmes	PRON	PE	Gender=Masc|Number=Plur|Person=3|PronType=Prs	99	nmod	_	_
102	que	que	SCONJ	CS	_	104	cc	_	_
103	parmi	parmi	ADP	E	_	104	case	_	_
104	celles	celles	PRON	PD	Gender=Fem|Number=Plur|PronType=Dem	96	conj	_	_
105	de	de	ADP	E	_	107	case	_	_
106	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	107	det	_	_
107	territoires	territoire	NOUN	S	Gender=Masc|Number=Plur	104	nmod	_	_
108	placés	placer	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	107	acl	_	_
109	sous	sous	ADP	E	_	111	case	_	_
110	leur	leur	DET	AP	Gender=Fem|Number=Sing|PronType=Prs	111	det	_	_
111	juridiction	juridiction	NOUN	S	Gender=Fem|Number=Sing	108	obl	_	SpaceAfter=No
112	.	.	PUNCT	FS	_	4	punct	_	_

~~~


