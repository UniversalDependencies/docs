---
layout: base
title:  'Statistics of appos in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `appos`

This relation is universal.

17 nodes (1%) are attached to their parents as `appos`.

17 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.70588235294118.

The following 5 pairs of parts of speech are connected with `appos`: <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (13; 76% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="eo_prago-pos-PRON.html">PRON</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 appos	color:blue
1	(	(	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Adreso	adreso	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
3	:	:	PUNCT	_	_	4	punct	_	_
4	Centra	centra	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	5	amod	_	_
5	Oficejo	oficejo	NOUN	_	Case=Nom|Number=Sing	2	appos	_	_
6	de	de	ADP	_	_	7	case	_	_
7	HOMARO	HOMARO	NOUN	_	Case=Nom|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	Chemin	Chemin	NOUN	_	Case=Nom|Number=Sing	2	appos	_	_
10	de	de	ADP	_	_	11	case	_	_
11	Malley	Malley	NOUN	_	Case=Nom|Number=Sing	9	nmod	_	_
12	20	20	NUM	_	_	9	nmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	_
14	Lausanne	Lausanne	NOUN	_	Case=Nom|Number=Sing	9	nmod	_	_
15	(	(	PUNCT	_	_	16	punct	_	SpaceAfter=No
16	Svislando	Svislando	NOUN	_	Case=Nom|Number=Sing	14	nmod	_	SpaceAfter=No
17	)	)	PUNCT	_	_	16	punct	_	SpaceAfter=No
18	)	)	PUNCT	_	_	17	punct	_	SpaceAfter=No
19	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 129	bgColor:blue
# visual-style 129	fgColor:white
# visual-style 127	bgColor:blue
# visual-style 127	fgColor:white
# visual-style 127 129 appos	color:blue
1	Kiam	kiam	ADV	_	_	5	advmod	_	_
2	en	en	ADP	_	_	4	case	_	_
3	mia	mia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	loĝloko	loĝloko	NOUN	_	Case=Nom|Number=Sing	5	nmod	_	_
5	ekzistos	ekzisti	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	63	advcl	_	_
6	komuninterkonsente	komuninterkonsente	ADV	_	_	7	advmod	_	_
7	aranĝita	aranĝi	VERB	_	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	14	amod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	plenforme	plenforme	ADV	_	_	10	advmod	_	_
10	organizita	organizi	VERB	_	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	conj	_	_
11	sengenta	sengenta	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	14	amod	_	_
12	kaj	kaj	CCONJ	_	_	13	cc	_	_
13	sendoktrina	sendoktrina	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	11	conj	_	_
14	komunumo	komunumo	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
15	de	de	ADP	_	_	16	case	_	_
16	liberkredanoj	liberkredanoj	NOUN	_	Case=Nom|Number=Plur	14	nmod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	22	punct	_	_
18	al	al	ADP	_	_	19	case	_	_
19	kiu	kiu	PRON	_	Case=Nom|Number=Sing|PronType=Rel	22	nmod	_	_
20	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	22	nsubj	_	_
21	povos	povi	AUX	_	Mood=Ind|Tense=Fut|VerbForm=Fin	22	aux	_	_
22	aliĝi	aliĝi	VERB	_	VerbForm=Inf	14	acl:relcl	_	_
23	kun	kun	ADP	_	_	25	case	_	_
24	plena	plena	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	25	amod	_	_
25	kontenteco	kontenteco	NOUN	_	Case=Nom|Number=Sing	22	nmod	_	_
26	por	por	ADP	_	_	28	case	_	_
27	mia	mia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	28	nmod:poss	_	_
28	konscienco	konscienco	NOUN	_	Case=Nom|Number=Sing	25	nmod	_	_
29	kaj	kaj	CCONJ	_	_	32	cc	_	_
30	por	por	ADP	_	_	32	case	_	_
31	la	la	DET	_	Definite=Def	32	det	_	_
32	bezonoj	bezonoj	NOUN	_	Case=Nom|Number=Plur	28	conj	_	_
33	de	de	ADP	_	_	35	case	_	_
34	mia	mia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	35	nmod:poss	_	_
35	koro	koro	NOUN	_	Case=Nom|Number=Sing	32	nmod	_	SpaceAfter=No
36	,	,	PUNCT	_	_	63	punct	_	_
37	tiam	tiam	ADV	_	_	63	advmod	_	SpaceAfter=No
38	—	-	PUNCT	_	_	40	punct	_	SpaceAfter=No
39	por	por	ADP	_	_	40	case	_	_
40	fiksi	fiksi	VERB	_	VerbForm=Inf	63	advcl	_	_
41	fortike	fortike	ADV	_	_	40	advmod	_	_
42	kaj	kaj	CCONJ	_	_	43	cc	_	_
43	precize	precize	ADV	_	_	41	conj	_	_
44	mian	mia	PRON	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	46	nmod:poss	_	_
45	religian	religia	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	46	amod	_	_
46	neŭtralecon	neŭtraleco	NOUN	_	Case=Acc|Number=Sing	40	obj	_	_
47	kaj	kaj	CCONJ	_	_	48	cc	_	_
48	savi	savi	VERB	_	VerbForm=Inf	40	conj	_	_
49	mian	mia	PRON	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	50	nmod:poss	_	_
50	posteularon	posteularo	NOUN	_	Case=Acc|Number=Sing	48	obj	_	_
51	kontraŭ	kontraŭ	ADP	_	_	52	case	_	_
52	senprogrameco	senprogrameco	NOUN	_	Case=Nom|Number=Sing	48	nmod	_	_
53	kaj	kaj	CCONJ	_	_	56	cc	_	_
54	konsekvence	konsekvence	ADV	_	_	56	advmod	_	_
55	kontraŭ	kontraŭ	ADP	_	_	56	case	_	_
56	refalo	refalo	NOUN	_	Case=Nom|Number=Sing	52	conj	_	_
57	en	en	ADP	_	_	59	case	_	_
58	gente-religian	gente-religia	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	59	amod	_	_
59	ŝovinismon	ŝovinismo	NOUN	_	Case=Acc|Number=Sing	56	obj	_	SpaceAfter=No
60	—	-	PUNCT	_	_	40	punct	_	SpaceAfter=No
61	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	63	nsubj	_	_
62	devas	devi	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	63	aux	_	_
63	aliĝi	aliĝi	VERB	_	VerbForm=Inf	0	root	_	_
64	al	al	ADP	_	_	67	case	_	_
65	tiu	tiu	DET	_	Case=Nom|Number=Sing|PronType=Dem	63	nmod	_	_
66	liberkreda	liberkreda	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	67	amod	_	_
67	komunumo	komunumo	NOUN	_	Case=Nom|Number=Sing	63	nmod	_	_
68	tute	tute	ADV	_	_	69	advmod	_	_
69	oficiale	oficiale	ADV	_	_	63	advmod	_	_
70	kaj	kaj	CCONJ	_	_	71	cc	_	_
71	heredigeble	heredigeble	ADV	_	_	69	advmod	_	_
72	kaj	kaj	CCONJ	_	_	73	cc	_	_
73	akcepti	akcepti	VERB	_	VerbForm=Inf	63	conj	_	_
74	por	por	ADP	_	_	75	case	_	_
75	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	73	nmod	_	_
76	ĝian	ĝia	PRON	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	78	nmod:poss	_	_
77	neŭtralan	neŭtrala	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	78	amod	_	_
78	nomon	nomo	NOUN	_	Case=Acc|Number=Sing	73	obj	_	SpaceAfter=No
79	,	,	PUNCT	_	_	82	punct	_	_
80	ĝiajn	ĝia	PRON	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	82	nmod:poss	_	_
81	komunumajn	komunuma	ADJ	_	Case=Acc|Degree=Pos|Number=Plur	82	amod	_	_
82	aranĝojn	aranĝo	NOUN	_	Case=Acc|Number=Plur	78	conj	_	SpaceAfter=No
83	,	_	PUNCT	_	_	87	punct	_	_
84	ĝiajn	ĝia	PRON	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	87	nmod:poss	_	_
85	nedevigajn	nedeviga	ADJ	_	Case=Acc|Degree=Pos|Number=Plur	87	amod	_	_
86	neŭtrale-homajn	neŭtrale-homa	ADJ	_	Case=Acc|Degree=Pos|Number=Plur	87	amod	_	_
87	festojn	festo	NOUN	_	Case=Acc|Number=Plur	82	conj	_	_
88	kaj	kaj	CCONJ	_	_	89	cc	_	_
89	morojn	moro	NOUN	_	Case=Acc|Number=Plur	87	conj	_	SpaceAfter=No
90	,	,	PUNCT	_	_	93	punct	_	_
91	ĝian	ĝia	PRON	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	93	nmod:poss	_	_
92	neŭtrale-homan	neŭtrale-homa	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	93	amod	_	_
93	kalendaron	kalendaro	NOUN	_	Case=Acc|Number=Sing	87	conj	_	_
94	k	kaj	CCONJ	_	_	98	cc	_	SpaceAfter=No
95	.	.	PUNCT	_	_	96	punct	_	SpaceAfter=No
96	t	tiel	ADV	_	_	98	advmod	_	SpaceAfter=No
97	.	.	PUNCT	_	_	98	punct	_	SpaceAfter=No
98	p	pli	ADV	_	_	93	advmod	_	SpaceAfter=No
99	.	.	PUNCT	_	_	98	punct	_	SpaceAfter=No
100	;	_	PUNCT	_	_	106	punct	_	_
101	ĝis	ĝis	ADP	_	_	103	case	_	_
102	tiu	tiu	DET	_	Case=Nom|Number=Sing|PronType=Dem	103	det	_	_
103	tempo	tempo	NOUN	_	Case=Nom|Number=Sing	106	nmod	_	_
104	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	106	nsubj	_	_
105	povas	povi	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	106	aux	_	_
106	resti	resti	VERB	_	VerbForm=Inf	63	advcl	_	_
107	oficiale	oficiale	ADV	_	_	108	advmod	_	_
108	alskribita	alskribita	VERB	_	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	106	xcomp	_	_
109	al	al	ADP	_	_	111	case	_	_
110	tiu	tiu	DET	_	Case=Nom|Number=Sing|PronType=Dem	111	det	_	_
111	religio	religio	NOUN	_	Case=Nom|Number=Sing	108	nmod	_	SpaceAfter=No
112	,	,	PUNCT	_	_	116	punct	_	_
113	en	en	ADP	_	_	114	case	_	_
114	kiu	kiu	PRON	_	Case=Nom|Number=Sing|PronType=Rel	116	nmod	_	_
115	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	116	nsubj	_	_
116	naskiĝis	naskiĝi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	111	acl:relcl	_	SpaceAfter=No
117	,	,	PUNCT	_	_	122	punct	_	_
118	sed	sed	SCONJ	_	_	122	mark	_	_
119	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	122	nsubj	_	_
120	devas	devi	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	122	aux	_	_
121	ĉiam	ĉiam	ADV	_	_	122	advmod	_	_
122	aldoni	aldoni	VERB	_	VerbForm=Inf	106	advcl	_	_
123	al	al	ADP	_	_	125	case	_	_
124	ĝia	ĝia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	125	amod	_	_
125	nomo	nomo	NOUN	_	Case=Nom|Number=Sing	122	nmod	_	_
126	la	la	DET	_	Definite=Def	127	det	_	_
127	vorton	vorto	NOUN	_	Case=Acc|Number=Sing	122	obj	_	_
128	«	«	PUNCT	_	_	129	punct	_	SpaceAfter=No
129	liberkreda	liberkreda	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	127	appos	_	SpaceAfter=No
130	»	»	PUNCT	_	_	129	punct	_	SpaceAfter=No
131	,	,	PUNCT	_	_	133	punct	_	_
132	por	por	ADP	_	_	133	case	_	_
133	montri	montri	VERB	_	VerbForm=Inf	122	advcl	_	SpaceAfter=No
134	,	,	PUNCT	_	_	137	punct	_	_
135	ke	ke	SCONJ	_	_	137	mark	_	_
136	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	137	nsubj	_	_
137	alkalkulas	alkalkuli	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	133	ccomp	_	_
138	min	mi	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	137	obj	_	_
139	al	al	ADP	_	_	140	case	_	_
140	ĝi	ĝi	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	137	nmod	_	_
141	nur	nur	ADV	_	_	142	advmod	_	_
142	provizore	provizore	ADV	_	_	137	advmod	_	SpaceAfter=No
143	,	,	PUNCT	_	_	144	punct	_	_
144	laŭmore	laŭmore	ADV	_	_	142	conj	_	_
145	kaj	kaj	PUNCT	_	_	146	punct	_	_
146	administre	administre	ADV	_	_	144	advmod	_	SpaceAfter=No
147	.	.	PUNCT	_	_	63	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 appos	color:blue
1	Manifesto	manifesto	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
2	de	de	ADP	_	_	3	case	_	_
3	Prago	Prago	PROPN	_	Case=Nom|Number=Sing	1	nmod	_	_
4	de	de	ADP	_	_	6	case	_	_
5	la	la	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	movado	movado	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	_
7	por	por	ADP	_	_	10	case	_	_
8	la	la	DET	_	Definite=Def|PronType=Art	10	det	_	_
9	internacia	internacia	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod	_	_
10	lingvo	lingvo	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
11	Esperanto	Esperanto	PROPN	_	Case=Nom|Number=Sing	10	appos	_	_

~~~


