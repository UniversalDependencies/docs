---
layout: base
title:  'Statistics of orphan in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `orphan`

This relation is universal.

9 nodes (0%) are attached to their parents as `orphan`.

7 instances of `orphan` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 5 pairs of parts of speech are connected with `orphan`: <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (4; 44% instances), <tt><a href="pt_alienista-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (2; 22% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 25 orphan	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	padre	padre	NOUN	_	Gender=Masc|Number=Sing	10	nsubj:pass	_	_
3	Lopes	Lopes	PROPN	_	_	2	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	por	por	ADP	_	_	6	case	_	_
6	exemplo	exemplo	NOUN	_	Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	só	só	ADV	_	_	10	advmod	_	_
9	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	aux:pass	_	_
10	capturado	capturar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
11	trinta	trinta	NUM	_	NumType=Card	12	nummod	_	_
12	dias	dia	NOUN	_	Gender=Masc|Number=Plur	13	obl	_	_
13	depois	depois	ADV	_	_	10	advmod	_	_
14	de	de	ADP	_	_	16	case	_	_
15	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	postura	postura	NOUN	_	Gender=Fem|Number=Sing	13	obl	_	SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	_
18	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	mulher	mulher	NOUN	_	Gender=Fem|Number=Sing	10	conj	_	_
20	de	de	ADP	_	_	22	case	_	_
21	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	boticário	boticário	NOUN	_	Gender=Masc|Number=Sing	19	nmod	_	SpaceAfter=No
23	,	,	PUNCT	_	_	25	punct	_	_
24	quarenta	quarenta	NUM	_	NumType=Card	25	nummod	_	_
25	dias	dia	NOUN	_	Gender=Masc|Number=Plur	19	orphan	_	SpaceAfter=No
26	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 50	bgColor:blue
# visual-style 50	fgColor:white
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 46 50 orphan	color:blue
1	Outro	outro	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	8	nsubj	_	_
2	de	de	ADP	_	_	5	case	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	mesma	mesmo	DET	_	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	espécie	espécie	NOUN	_	Gender=Fem|Number=Sing	1	nmod	_	_
6	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
7	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	escrivão	escrivão	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	_
10	que	que	PRON	_	PronType=Rel	12	nsubj	_	_
11	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	12	obj	_	_
12	vendia	vender	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	acl:relcl	_	_
13	por	por	ADP	_	_	14	case	_	_
14	mordomo	mordomo	NOUN	_	Gender=Masc|Number=Sing	12	obl	_	_
15	de	de	ADP	_	_	17	case	_	_
16	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	rei	rei	NOUN	_	Gender=Masc|Number=Sing	14	nmod	_	SpaceAfter=No
18	;	;	PUNCT	_	_	22	punct	_	_
19	outro	outro	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	22	nsubj	_	_
20	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	22	cop	_	_
21	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	boiadeiro	boiadeiro	NOUN	_	Gender=Masc|Number=Sing	8	parataxis	_	_
23	de	de	ADP	_	_	24	case	_	_
24	Minas	Minas	PROPN	_	_	22	nmod	_	SpaceAfter=No
25	,	,	PUNCT	_	_	29	punct	_	_
26	cuja	cujo	DET	_	Gender=Fem|Number=Sing|PronType=Rel	27	det	_	_
27	mania	mania	NOUN	_	Gender=Fem|Number=Sing	29	nsubj	_	_
28	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	29	cop	_	_
29	distribuir	distribuir	VERB	_	VerbForm=Inf	22	acl:relcl	_	_
30	boiadas	boiada	NOUN	_	Gender=Fem|Number=Plur	29	obj	_	_
31	a	a	ADP	_	_	34	case	_	_
32	toda	todo	DET	_	Gender=Fem|Number=Sing|PronType=Ind	34	det	_	_
33	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	34	det	_	_
34	gente	gente	NOUN	_	Gender=Fem|Number=Sing	29	obl	_	SpaceAfter=No
35	,	,	PUNCT	_	_	36	punct	_	_
36	dava	dar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	29	parataxis	_	_
37	trezentas	trezentos	NUM	_	Gender=Fem|NumType=Card	38	nummod	_	_
38	cabeças	cabeça	NOUN	_	Gender=Fem|Number=Plur	36	obj	_	_
39	a	a	ADP	_	_	40	case	_	_
40	um	um	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	36	obl	_	SpaceAfter=No
41	,	,	PUNCT	_	_	42	punct	_	_
42	seiscentas	seiscentos	NUM	_	Gender=Fem|NumType=Card	36	conj	_	_
43	a	a	ADP	_	_	44	case	_	_
44	outro	outro	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	42	orphan	_	SpaceAfter=No
45	,	,	PUNCT	_	_	46	punct	_	_
46	mil	mil	NUM	_	NumType=Card	36	conj	_	_
47	e	e	CCONJ	_	_	48	cc	_	_
48	duzentas	duzentos	ADJ	_	Gender=Fem|Number=Plur	46	flat	_	_
49	a	a	ADP	_	_	50	case	_	_
50	outro	outro	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	46	orphan	_	SpaceAfter=No
51	,	,	PUNCT	_	_	54	punct	_	_
52	e	e	CCONJ	_	_	54	cc	_	_
53	não	não	ADV	_	_	54	advmod	_	_
54	acabava	acabar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	36	conj	_	_
55	mais	mais	ADV	_	_	54	advmod	_	SpaceAfter=No
56	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 49	bgColor:blue
# visual-style 49	fgColor:white
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 43 49 orphan	color:blue
1	Não	não	ADV	_	_	2	advmod	_	_
2	falo	falar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	de	de	ADP	_	_	5	case	_	_
4	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	casos	caso	NOUN	_	Gender=Masc|Number=Plur	2	obl	_	_
6	de	de	ADP	_	_	7	case	_	_
7	monomania	monomania	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	_
8	religiosa	religioso	ADJ	_	Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
9	;	;	PUNCT	_	_	11	punct	_	_
10	apenas	apenas	ADV	_	_	11	advmod	_	_
11	citarei	citar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	2	parataxis	_	_
12	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	sujeito	sujeito	NOUN	_	Gender=Masc|Number=Sing	11	obj	_	_
14	que	que	PRON	_	PronType=Rel	22	nsubj	_	SpaceAfter=No
15	,	,	PUNCT	_	_	16	punct	_	_
16	chamando	chamar	VERB	_	VerbForm=Ger	22	advcl	_	_
17	se	se	PRON	_	Case=Dat|Person=3|PronType=Prs	16	iobj	_	_
18	João	João	PROPN	_	_	16	xcomp	_	_
19	de	de	ADP	_	_	20	case	_	_
20	Deus	Deus	PROPN	_	_	18	obl	_	SpaceAfter=No
21	,	,	PUNCT	_	_	16	punct	_	_
22	dizia	dizer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	13	acl:relcl	_	_
23	agora	agora	ADV	_	_	22	advmod	_	_
24	ser	ser	AUX	_	VerbForm=Inf	26	cop	_	_
25	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	deus	deus	NOUN	_	Gender=Masc|Number=Sing	22	xcomp	_	_
27	João	João	PROPN	_	_	26	nmod	_	SpaceAfter=No
28	,	,	PUNCT	_	_	30	punct	_	_
29	e	e	CCONJ	_	_	30	cc	_	_
30	prometia	prometer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	22	conj	_	_
31	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
32	reino	reino	NOUN	_	Gender=Masc|Number=Sing	30	obj	_	_
33	de	de	ADP	_	_	35	case	_	_
34	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	35	det	_	_
35	céus	céu	NOUN	_	Gender=Masc|Number=Plur	32	nmod	_	_
36	a	a	ADP	_	_	37	case	_	_
37	quem	quem	PRON	_	PronType=Ind	30	obl	_	_
38	o	o	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	39	obj	_	_
39	adorasse	adorar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	37	acl:relcl	_	SpaceAfter=No
40	,	,	PUNCT	_	_	43	punct	_	_
41	e	e	CCONJ	_	_	43	cc	_	_
42	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	43	det	_	_
43	penas	pena	NOUN	_	Gender=Fem|Number=Plur	30	conj	_	_
44	de	de	ADP	_	_	46	case	_	_
45	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	46	det	_	_
46	inferno	inferno	NOUN	_	Gender=Masc|Number=Sing	43	nmod	_	_
47	a	a	ADP	_	_	49	case	_	_
48	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	49	det	_	_
49	outros	outro	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	43	orphan	_	SpaceAfter=No
50	;	;	PUNCT	_	_	57	punct	_	_
51	e	e	CCONJ	_	_	57	cc	_	_
52	depois	depois	ADV	_	_	57	advmod	_	_
53	de	de	ADP	_	_	54	case	_	_
54	esse	esse	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	52	obl	_	_
55	,	,	PUNCT	_	_	52	punct	_	_
56	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	57	det	_	_
57	licenciado	licenciado	NOUN	_	Gender=Masc|Number=Sing	13	conj	_	_
58	Garcia	Garcia	PROPN	_	_	57	nmod	_	SpaceAfter=No
59	,	,	PUNCT	_	_	62	punct	_	_
60	que	que	PRON	_	PronType=Rel	62	nsubj	_	_
61	não	não	ADV	_	_	62	advmod	_	_
62	dizia	dizer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	57	acl:relcl	_	_
63	nada	nada	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	62	obj	_	SpaceAfter=No
64	,	,	PUNCT	_	_	66	punct	_	_
65	porque	porque	SCONJ	_	_	66	mark	_	_
66	imaginava	imaginar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	62	advcl	_	_
67	que	que	SCONJ	_	_	84	mark	_	_
68	em	em	ADP	_	_	70	case	_	_
69	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	70	det	_	_
70	dia	dia	NOUN	_	Gender=Masc|Number=Sing	84	obl	_	_
71	em	em	ADP	_	_	72	case	_	_
72	que	que	PRON	_	PronType=Rel	73	obl	_	_
73	chegasse	chegar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	70	acl:relcl	_	_
74	a	a	ADP	_	_	75	mark	_	_
75	proferir	proferir	VERB	_	VerbForm=Inf	73	xcomp	_	_
76	uma	um	NUM	_	Gender=Fem|Number=Sing|NumType=Card	78	nummod	_	_
77	só	só	ADV	_	_	76	advmod	_	_
78	palavra	palavra	NOUN	_	Gender=Fem|Number=Sing	75	obj	_	SpaceAfter=No
79	,	,	PUNCT	_	_	70	punct	_	_
80	todas	todo	DET	_	Gender=Fem|Number=Plur|PronType=Ind	82	det	_	_
81	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	82	det	_	_
82	estrelas	estrela	NOUN	_	Gender=Fem|Number=Plur	84	nsubj	_	_
83	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	84	expl	_	_
84	despegariam	despegar	VERB	_	Mood=Cnd|Number=Plur|Person=3|VerbForm=Fin	66	ccomp	_	_
85	de	de	ADP	_	_	87	case	_	_
86	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	87	det	_	_
87	céu	céu	NOUN	_	Gender=Masc|Number=Sing	84	obl	_	_
88	e	e	CCONJ	_	_	89	cc	_	_
89	abrasariam	abrasar	VERB	_	Mood=Cnd|Number=Plur|Person=3|VerbForm=Fin	84	conj	_	_
90	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	91	det	_	_
91	terra	terra	NOUN	_	Gender=Fem|Number=Sing	89	obj	_	SpaceAfter=No
92	;	;	PUNCT	_	_	96	punct	_	_
93	tal	tal	PRON	_	Number=Sing|PronType=Dem	96	nsubj	_	_
94	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	96	cop	_	_
95	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	96	det	_	_
96	poder	poder	NOUN	_	Gender=Masc|Number=Sing	84	parataxis	_	_
97	que	que	PRON	_	PronType=Rel	98	obj	_	_
98	recebera	receber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	96	acl:relcl	_	_
99	de	de	ADP	_	_	100	case	_	_
100	Deus	Deus	PROPN	_	_	98	obl	_	SpaceAfter=No
101	.	.	PUNCT	_	_	2	punct	_	_

~~~


