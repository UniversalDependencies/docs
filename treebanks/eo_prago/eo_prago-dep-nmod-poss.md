---
layout: base
title:  'Statistics of nmod:poss in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="eo_prago-dep-nmod.html">nmod</a></tt>.

76 nodes (2%) are attached to their parents as `nmod:poss`.

76 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27631578947368.

The following 4 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (72; 95% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-DET.html">DET</a></tt> (2; 3% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	1	1	NUM	_	_	6	nummod	_	SpaceAfter=No
2	.	.	PUNCT	_	_	6	punct	_	_
3	Mia	mia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	nomo	nomo	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
5	familia	familia	ADJ	_	_	4	amod	_	_
6	estas	esti	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	:	:	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	Mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	konscias	konscii	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	11	punct	_	_
4	ke	ke	SCONJ	_	_	11	mark	_	_
5	en	en	ADP	_	_	8	case	_	_
6	sia	sia	DET	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	8	nmod:poss	_	_
7	privata	privata	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	8	amod	_	_
8	vivo	vivo	NOUN	_	Case=Nom|Number=Sing	11	obl	_	_
9	ĉiu	ĉiu	DET	_	Case=Nom|Number=Sing|PronType=Tot	10	det	_	_
10	homo	homo	NOUN	_	Case=Nom|Number=Sing	11	nsubj	_	_
11	havas	havi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
12	plenan	plena	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	15	amod	_	_
13	kaj	kaj	CCONJ	_	_	14	cc	_	_
14	nedisputeblan	nedisputebla	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	12	conj	_	_
15	rajton	rajto	NOUN	_	Case=Acc|Number=Sing	11	obj	_	_
16	paroli	paroli	VERB	_	VerbForm=Inf	15	acl	_	_
17	tiun	tiu	DET	_	Case=Acc|Number=Sing|PronType=Dem	18	det	_	_
18	lingvon	lingvo	NOUN	_	Case=Acc|Number=Sing	16	obj	_	_
19	aŭ	aŭ	CCONJ	_	_	20	cc	_	_
20	dialekton	dialekto	NOUN	_	Case=Acc|Number=Sing	18	conj	_	SpaceAfter=No
21	,	,	PUNCT	_	_	27	punct	_	_
22	kiu	kiu	PRON	_	Case=Nom|Number=Sing|PronType=Rel	27	nsubj	_	_
23	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	27	aux	_	_
24	al	al	ADP	_	_	27	obl	_	_
25	pli	pli	ADV	_	_	26	advmod	_	_
26	plej	plej	ADV	_	_	27	advmod	_	_
27	agrabla	agrabla	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	20	acl:relcl	_	SpaceAfter=No
28	,	,	PUNCT	_	_	30	punct	_	_
29	kaj	kaj	CCONJ	_	_	30	cc	_	_
30	konfesi	konfesi	VERB	_	VerbForm=Inf	16	conj	_	_
31	tiun	tiu	DET	_	Case=Acc|Number=Sing|PronType=Dem	32	det	_	_
32	religion	religio	NOUN	_	Case=Acc|Number=Sing	30	obj	_	SpaceAfter=No
33	,	,	PUNCT	_	_	38	punct	_	_
34	kiu	kiu	PRON	_	Case=Nom|Number=Sing|PronType=Rel	38	nsubj	_	Rel=Yes
35	plej	plej	ADV	_	_	36	advmod	_	_
36	multe	multe	ADV	_	_	38	advmod	_	_
37	lin	li	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	38	obj	_	_
38	kontentigas	kontentigi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	32	acl:relcl	_	SpaceAfter=No
39	,	,	PUNCT	_	_	52	punct	_	_
40	sed	sed	CCONJ	_	_	52	cc	_	_
41	en	en	ADP	_	_	42	case	_	_
42	komunikiĝado	komunikiĝado	NOUN	_	Case=Nom|Number=Sing	52	obl	_	_
43	kun	kun	ADP	_	_	44	case	_	_
44	homoj	homo	NOUN	_	Case=Nom|Number=Plur	42	nmod	_	_
45	de	de	ADP	_	_	47	case	_	_
46	aliaj	alia	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	47	amod	_	_
47	lingvoj	lingvo	NOUN	_	Case=Nom|Number=Plur	44	nmod	_	_
48	aŭ	aŭ	CCONJ	_	_	49	cc	_	_
49	religioj	religio	NOUN	_	Case=Nom|Number=Plur	47	conj	_	_
50	li	li	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	52	nsubj	_	_
51	devas	devi	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	52	aux	_	_
52	peni	peni	VERB	_	VerbForm=Inf	11	conj	_	_
53	uzi	uzi	VERB	_	VerbForm=Inf	52	xcomp	_	_
54	lingvon	lingvo	NOUN	_	Case=Acc|Number=Sing	53	obj	_	_
55	neŭtralan	neŭtrala	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	54	amod	_	_
56	kaj	kaj	CCONJ	_	_	57	cc	_	_
57	vivi	vivi	VERB	_	VerbForm=Inf	52	conj	_	_
58	laŭ	laŭ	ADP	_	_	59	case	_	_
59	etiko	etiko	NOUN	_	Case=Nom|Number=Sing	57	obl	_	_
60	kaj	kaj	CCONJ	_	_	61	cc	_	_
61	moroj	moro	NOUN	_	Case=Nom|Number=Plur	59	conj	_	_
62	neŭtralaj	neŭtrala	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	61	amod	_	SpaceAfter=No
63	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 116	bgColor:blue
# visual-style 116	fgColor:white
# visual-style 117	bgColor:blue
# visual-style 117	fgColor:white
# visual-style 117 116 nmod:poss	color:blue
1	b	b	ADV	_	_	4	advmod	_	SpaceAfter=No
2	)	)	PUNCT	_	_	1	punct	_	_
3	Mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	konscias	konscii	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	14	punct	_	_
6	ke	ke	SCONJ	_	_	14	mark	_	_
7	la	la	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	esenco	esenco	NOUN	_	Case=Nom|Number=Sing	14	nsubj	_	_
9	de	de	ADP	_	_	13	case	_	_
10	la	la	DET	_	Definite=Def|PronType=Art	13	det	_	_
11	veraj	vera	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	13	amod	_	_
12	religiaj	religia	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	13	amod	_	_
13	ordonoj	ordono	NOUN	_	Case=Nom|Number=Sing	8	nmod	_	_
14	kuŝas	kuŝi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	ccomp	_	_
15	en	en	ADP	_	_	17	case	_	_
16	la	la	DET	_	Definite=Def|PronType=Art	17	det	_	_
17	koro	koro	NOUN	_	Case=Nom|Number=Sing	14	nmod	_	_
18	de	de	ADP	_	_	20	case	_	_
19	ĉiu	ĉiu	DET	_	Case=Nom|Number=Sing|PronType=Tot	20	det	_	_
20	homo	homo	NOUN	_	Case=Nom|Number=Sing	17	nmod	_	_
21	sub	sub	ADP	_	_	23	case	_	_
22	la	la	DET	_	Definite=Def|PronType=Art	23	det	_	_
23	formo	formo	NOUN	_	Case=Nom|Number=Sing	14	nmod	_	_
24	de	de	ADP	_	_	25	case	_	_
25	konscienco	konscienco	NOUN	_	Case=Nom|Number=Sing	23	nmod	_	_
26	kaj	kaj	CCONJ	_	_	41	cc	_	_
27	ke	ke	SCONJ	_	_	41	mark	_	_
28	la	la	DET	_	Definite=Def|PronType=Art	35	det	_	_
29	ĉefa	ĉefa	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	35	amod	_	SpaceAfter=No
30	,	,	PUNCT	_	_	34	punct	_	_
31	por	por	ADP	_	_	33	case	_	_
32	ĉiuj	ĉiu	DET	_	Case=Nom|Number=Plur|PronType=Tot	33	det	_	_
33	homoj	homo	NOUN	_	Case=Nom|Number=Plur	34	nmod	_	_
34	deviga	deviga	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	35	amod	_	_
35	principo	principo	NOUN	_	Case=Nom|Number=Sing	41	nsubj	_	_
36	de	de	ADP	_	_	38	case	_	_
37	tiuj	tiu	DET	_	Case=Nom|Number=Plur|PronType=Dem	38	det	_	_
38	ordonoj	ordono	NOUN	_	Case=Nom|Number=Plur	35	nmod	_	_
39	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	41	aux	_	SpaceAfter=No
40	:	:	PUNCT	_	_	41	punct	_	_
41	agu	agi	VERB	_	Mood=Imp|VerbForm=Fin	14	conj	_	_
42	kun	kun	ADP	_	_	43	case	_	_
43	aliuloj	aliulo	NOUN	_	Case=Nom|Number=Plur	41	nmod	_	_
44	tiel	tiel	ADV	_	_	41	advmod	_	SpaceAfter=No
45	,	,	PUNCT	_	_	48	punct	_	_
46	kiel	kiel	ADV	_	_	48	advmod	_	_
47	vi	vi	PRON	_	Case=Nom|Number=Plur|Person=2|PronType=Prs	48	nsubj	_	_
48	dezirus	deziri	VERB	_	Mood=Sub|VerbForm=Fin	44	advcl:relcl	_	SpaceAfter=No
49	,	,	PUNCT	_	_	52	punct	_	_
50	ke	ke	SCONJ	_	_	52	mark	_	_
51	aliuloj	aliulo	NOUN	_	Case=Nom|Number=Plur	52	nsubj	_	_
52	agu	agi	VERB	_	Mood=Imp|VerbForm=Fin	48	ccomp	_	_
53	kun	kun	ADP	_	_	54	case	_	_
54	vi	vi	PRON	_	Case=Nom|Number=Plur|Person=2|PronType=Prs	52	nmod	_	SpaceAfter=No
55	;	;	PUNCT	_	_	62	punct	_	_
56	ĉion	ĉio	PRON	_	Case=Acc|Number=Sing|PronType=Tot	62	obj	_	_
57	alian	alia	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	56	amod	_	_
58	en	en	ADP	_	_	60	case	_	_
59	la	la	DET	_	Definite=Def|PronType=Art	60	det	_	_
60	religio	religio	NOUN	_	Case=Nom|Number=Sing	56	nmod	_	_
61	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	62	nsubj	_	_
62	rigardas	rigardi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	14	parataxis	_	_
63	kiel	kiel	ADV	_	_	64	case	_	_
64	aldonojn	aldono	NOUN	_	Case=Acc|Number=Plur	62	obl	_	SpaceAfter=No
65	,	,	PUNCT	_	_	75	punct	_	_
66	kiujn	kiu	PRON	_	Case=Acc|Number=Plur|PronType=Rel	75	iobj	_	_
67	ĉiu	ĉiu	DET	_	Case=Nom|Number=Sing|PronType=Tot	68	det	_	_
68	homo	homo	NOUN	_	Case=Nom|Number=Sing	75	nsubj	_	SpaceAfter=No
69	,	,	PUNCT	_	_	70	punct	_	_
70	konforme	konforme_	ADV	_	_	75	advmod	_	_
71	al	al	ADP	_	_	73	case	_	_
72	sia	sia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	73	nmod:poss	_	_
73	kredo	kredo	NOUN	_	Case=Nom|Number=Sing	70	nmod	_	SpaceAfter=No
74	,	,	PUNCT	_	_	75	punct	_	_
75	havas	havi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	64	acl:relcl	_	_
76	la	la	DET	_	Definite=Def|PronType=Art	77	det	_	_
77	rajton	rajto	NOUN	_	Case=Acc|Number=Sing	75	obj	_	_
78	rigardi	rigardi	VERB	_	VerbForm=Inf	77	xcomp	_	_
79	aŭ	aŭ	CCONJ	_	_	84	cc	_	_
80	kiel	kiel	ADV	_	_	84	case	_	_
81	devigajn	deviga	ADJ	_	Case=Acc|Degree=Pos|Number=Plur	84	amod	_	_
82	por	por	ADP	_	_	83	case	_	_
83	li	li	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	81	nmod	_	_
84	dirojn	diro	NOUN	_	Case=Acc|Number=Plur	64	conj	_	_
85	de	de	ADP	_	_	86	case	_	_
86	Dio	dio	NOUN	_	Case=Nom|Number=Sing	84	nmod	_	SpaceAfter=No
87	,	,	PUNCT	_	_	90	punct	_	_
88	aŭ	aŭ	CCONJ	_	_	90	cc	_	_
89	kiel	kiel	ADV	_	_	90	advmod	_	_
90	komentariojn	komentario	NOUN	_	Case=Acc|Number=Plur	84	conj	_	SpaceAfter=No
91	,	,	PUNCT	_	_	96	punct	_	_
92	kiujn	kiu	PRON	_	Case=Acc|Number=Plur|PronType=Rel	96	obj	_	_
93	miksite	miksi	VERB	_	Tense=Past|VerbForm=Part|Voice=Pass	96	advcl	_	_
94	kun	kun	ADP	_	_	95	case	_	_
95	legendoj	legendo	NOUN	_	Case=Nom|Number=Plur	96	nmod	_	_
96	donis	doni	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	90	acl:relcl	_	_
97	al	al	ADP	_	_	98	case	_	_
98	ni	ni	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	96	obl	_	_
99	diversgentaj	diversgenta	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	101	amod	_	_
100	grandaj	granda	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	101	amod	_	_
101	instruintoj	instruinto	NOUN	_	Case=Nom|Number=Plur	96	nsubj	_	_
102	de	de	ADP	_	_	104	case	_	_
103	la	la	DET	_	Definite=Def|PronType=Art	104	det	_	_
104	homaro	homaro	NOUN	_	Case=Nom|Number=Sing	101	nmod	_	SpaceAfter=No
105	,	,	PUNCT	_	_	108	punct	_	_
106	kaj	kaj	CCONJ	_	_	108	cc	_	_
107	kiel	kiel	ADV	_	_	108	case	_	_
108	morojn	moro	NOUN	_	Case=Acc|Number=Plur	90	conj	_	SpaceAfter=No
109	,	,	PUNCT	_	_	112	punct	_	_
110	kiuj	kiu	PRON	_	Case=Nom|Number=Plur|PronType=Rel	112	nsubj	_	_
111	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	112	aux	_	_
112	starigitaj	starigi	VERB	_	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	108	acl:relcl	_	_
113	de	de	ADP	_	_	114	case	_	_
114	homoj	homo	NOUN	_	Case=Nom|Number=Plur	112	nmod	_	_
115	kaj	kaj	CCONJ	_	_	120	cc	_	_
116	kies	kies	ADJ	_	Poss=Yes|PronType=Rel	117	nmod:poss	_	_
117	plenumado	plenumado	NOUN	_	Case=Nom|Number=Sing	120	nsubj	_	_
118	aŭ	aŭ	CCONJ	_	_	119	cc	_	_
119	neplenumado	neplenumado	NOUN	_	Case=Nom|Number=Sing	117	conj	_	_
120	dependas	dependi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	108	acl:relcl	_	_
121	de	de	ADP	_	_	123	case	_	_
122	nia	nia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	123	nmod:poss	_	_
123	volo	volo	NOUN	_	Case=Nom|Number=Sing	120	nmod	_	SpaceAfter=No
124	.	.	PUNCT	_	_	4	punct	_	_

~~~


