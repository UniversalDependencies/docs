---
layout: base
title:  'Statistics of expl:impers in UD_Ligurian-GLT'
udver: '2'
---

## Treebank Statistics: UD_Ligurian-GLT: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="lij_glt-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="lij_glt-dep-expl-pv.html">expl:pv</a></tt>.

23 nodes (0%) are attached to their parents as `expl:impers`.

22 instances of `expl:impers` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26086956521739.

The following 2 pairs of parts of speech are connected with `expl:impers`: <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (22; 96% instances), <tt><a href="lij_glt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl:impers	color:blue
1	Se	se	PRON	_	Person=3|PronType=Prs	2	expl:impers	_	_
2	vedde	vedde	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ch'	che	SCONJ	_	_	7	mark	_	SpaceAfter=No
4	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
5	l'	l'	PART	_	_	7	dep	_	SpaceAfter=No
6	à	avei	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	fæto	fâ	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	ccomp	_	_
8	e	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	_
9	sabbie	sabbia	NOUN	_	Gender=Fem|Number=Plur	7	obj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	eh	eh	INTJ	_	_	2	discourse	_	SpaceAfter=No
12	...	...	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 51	bgColor:blue
# visual-style 51	fgColor:white
# visual-style 54	bgColor:blue
# visual-style 54	fgColor:white
# visual-style 54 51 expl:impers	color:blue
1	Ciufito	ciufito	ADV	_	_	27	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	8	punct	_	_
3	de	de	ADP	_	_	8	mark	_	MWEPOS=SCONJ
4	za	za	ADV	_	_	3	fixed	_	_
5	che	che	SCONJ	_	_	3	fixed	_	_
6	me	me	PRON	_	Number=Sing|Person=1|PronType=Prs	8	iobj	_	_
7	ne	ne	PRON	_	PronType=Dem	8	obl	_	_
8	parlæ	parlâ	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	27	advcl	_	_
9	e	e	CCONJ	_	_	11	cc	_	_
10	che	che	SCONJ	_	_	11	mark	_	_
11	inscistî	inscistî	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	8	conj	_	_
12	pe	pe	ADP	_	_	13	mark	_	_
13	piggiâ	piggiâ	VERB	_	Tense=Pres|VerbForm=Inf	11	xcomp	_	_
14	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
15	mæ	mæ	DET	_	Poss=Yes|PronType=Prs	16	det	_	_
16	paei	paei	NOUN	_	Gender=Masc|Number=Sing	13	obj	_	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	quello	quello	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	27	nsubj	_	_
19	che	che	PRON	_	PronType=Rel	21	obj	_	_
20	ghe	ghe	PRON	_	PronType=Dem	21	expl:pv	_	_
21	tëgno	tegnî	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	18	acl:relcl	_	_
22	à	à	ADP	_	_	23	mark	_	_
23	dî	dî	VERB	_	Tense=Pres|VerbForm=Inf	21	xcomp	_	_
24	ve	ve	PRON	_	Number=Plur|Person=2|PronType=Prs	23	iobj	_	_
25	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	27	expl	_	_
26	l'	l'	PART	_	_	27	dep	_	SpaceAfter=No
27	é	ëse	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
28	che	che	SCONJ	_	_	38	mark	_	_
29	avanti	avanti	ADV	_	_	31	mark	_	MWEPOS=SCONJ
30	de	de	ADP	_	_	29	fixed	_	_
31	mandâ	mandâ	VERB	_	Tense=Pres|VerbForm=Inf	38	advcl	_	_
32	chì	chì	ADV	_	_	31	advmod	_	_
33	vòstra	vòstro	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	34	det	_	_
34	figgia	figgio	NOUN	_	Gender=Fem|Number=Sing	31	obj	_	SpaceAfter=No
35	,	,	PUNCT	_	_	31	punct	_	_
36	ve	ve	PRON	_	Number=Plur|Person=2|PronType=Prs	38	expl:pv	_	_
37	gh'	ghe	PRON	_	PronType=Dem	38	expl:pv	_	SpaceAfter=No
38	appensæ	appensâ	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	27	ccomp	_	_
39	doe	doî	NUM	_	Gender=Fem|NumType=Card	40	nummod	_	_
40	vòtte	vòtta	NOUN	_	Gender=Fem|Number=Plur	38	obl	_	SpaceAfter=No
41	:	:	PUNCT	_	_	48	punct	_	_
42	tutto	tutto	DET	_	Gender=Masc|Number=Sing|PronType=Tot	44	det	_	_
43	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	44	det	_	_
44	mondo	mondo	NOUN	_	Gender=Masc|Number=Sing	48	nsubj	_	_
45	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	48	expl	_	_
46	l'	l'	PART	_	_	48	dep	_	SpaceAfter=No
47	é	ëse	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	48	cop	_	_
48	paise	paise	NOUN	_	Gender=Masc|Number=Sing	27	parataxis	_	SpaceAfter=No
49	,	,	PUNCT	_	_	54	punct	_	_
50	e	e	CCONJ	_	_	54	cc	_	_
51	se	se	PRON	_	Person=3|PronType=Prs	54	expl:impers	_	_
52	peu	poei	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	54	aux	_	_
53	ëse	ëse	AUX	_	Tense=Pres|VerbForm=Inf	54	cop	_	_
54	onesti	onesto	ADJ	_	Gender=Masc|Number=Plur	48	conj	_	_
55	tanto	tanto	CCONJ	_	_	57	cc	_	_
56	à	à	ADP	_	_	57	case	_	_
57	Milan	Milan	PROPN	_	Gender=Fem|Number=Sing	54	obl	_	_
58	comme	comme	CCONJ	_	_	60	cc	_	_
59	à	à	ADP	_	_	60	case	_	_
60	Nervi	Nervi	PROPN	_	Gender=Fem|Number=Sing	57	conj	_	_
61	ò	ò	CCONJ	_	_	63	cc	_	_
62	à	à	ADP	_	_	63	case	_	_
63	Calcutta	Calcutta	PROPN	_	Gender=Fem|Number=Sing	57	conj	_	SpaceAfter=No
64	:	:	PUNCT	_	_	72	punct	_	_
65	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	66	det	_	_
66	Tëxinin	Texo	PROPN	_	Gender=Fem|Number=Sing	72	nsubj	_	_
67	a	o	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	72	expl	_	_
68	l'	l'	PART	_	_	72	dep	_	SpaceAfter=No
69	é	ëse	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	72	cop	_	_
70	unna	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	72	det	_	_
71	brava	bravo	ADJ	_	Gender=Fem|Number=Sing	72	amod	_	_
72	figgeua	figgeu	NOUN	_	Gender=Fem|Number=Sing	27	parataxis	_	SpaceAfter=No
73	,	,	PUNCT	_	_	75	punct	_	_
74	de	de	ADP	_	_	75	case	_	_
75	quelle	quello	PRON	_	Gender=Fem|Number=Plur|PronType=Dem	72	nmod	_	_
76	savie	savio	ADJ	_	Gender=Fem|Number=Plur	75	amod	_	SpaceAfter=No
77	,	,	PUNCT	_	_	75	punct	_	_
78	piña	pin	ADJ	_	Gender=Fem|Number=Sing	72	amod	_	_
79	de	de	ADP	_	_	80	case	_	_
80	sæximo	sæximo	NOUN	_	Gender=Masc|Number=Sing	78	obl	_	_
81	e	e	CCONJ	_	_	82	cc	_	_
82	timô	timô	NOUN	_	Gender=Masc|Number=Sing	80	conj	_	_
83	de	de	ADP	_	_	84	case	_	_
84	Dio	Dio	PROPN	_	Gender=Masc|Number=Sing	82	nmod	_	SpaceAfter=No
85	;	;	PUNCT	_	_	96	punct	_	_
86	ma	ma	CCONJ	_	_	96	cc	_	_
87	sensa	sensa	ADV	_	_	88	mark	_	_
88	stâ	stâ	VERB	_	Tense=Pres|VerbForm=Inf	96	advcl	_	_
89	à	à	ADP	_	_	90	mark	_	_
90	fâ	fâ	VERB	_	Tense=Pres|VerbForm=Inf	88	xcomp	_	_
91	ghe	ghe	PRON	_	Person=3|PronType=Prs	90	iobj	_	_
92	tòrto	tòrto	NOUN	_	Gender=Masc|Number=Sing	90	obj	_	SpaceAfter=No
93	,	,	PUNCT	_	_	96	punct	_	_
94	a	o	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	96	nsubj	_	_
95	l'	l'	PART	_	_	96	dep	_	SpaceAfter=No
96	à	avei	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	72	conj	_	_
97	unna	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	98	det	_	_
98	testetta	testa	NOUN	_	Gender=Fem|Number=Sing	96	obj	_	_
99	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	100	det	_	_
100	pittinin	pittin	NOUN	_	Gender=Masc|Number=Sing	102	obl	_	_
101	tròppo	tròppo	ADV	_	_	102	advmod	_	_
102	addescia	addescio	ADJ	_	Gender=Fem|Number=Sing	98	amod	_	SpaceAfter=No
103	,	,	PUNCT	_	_	107	punct	_	_
104	che	che	PRON	_	PronType=Rel	107	nsubj	_	_
105	l'	l'	PART	_	_	107	dep	_	SpaceAfter=No
106	é	ëse	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	107	cop	_	_
107	façile	façile	ADJ	_	Gender=Fem|Number=Sing	98	acl:relcl	_	_
108	dapeu	dapeu	ADV	_	_	107	advmod	_	_
109	ch'	che	SCONJ	_	_	111	mark	_	SpaceAfter=No
110	a	o	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	111	nsubj	_	_
111	pigge	piggiâ	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	107	ccomp	_	_
112	feugo	feugo	NOUN	_	Gender=Masc|Number=Sing	111	obj	_	SpaceAfter=No
113	.	.	PUNCT	_	_	27	punct	_	_

~~~


