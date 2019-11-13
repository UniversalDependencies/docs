---
layout: base
title:  'Statistics of fixed in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `fixed`

This relation is universal.

11 nodes (0%) are attached to their parents as `fixed`.

11 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `fixed`: <tt><a href="orv_rnc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="orv_rnc-pos-CCONJ.html">CCONJ</a></tt> (5; 45% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (2; 18% instances), <tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="orv_rnc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (1; 9% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Да	да	CCONJ	_	_	6	cc	_	SpaceAfter=Yes
2	и	и	CCONJ	_	_	1	fixed	_	SpaceAfter=Yes
3	санников	санникъ	NOUN	OOV	Case=Acc|Gender=Masc|Number=Plur	6	obj	_	SpaceAfter=Yes
4	бы	бы	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	aux	_	SpaceAfter=Yes
5	тебе	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	6	iobj	_	SpaceAfter=Yes
6	пригнать	пригнати	VERB	OOV	VerbForm=Inf|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	12	punct	_	SpaceAfter=Yes
8	которые	который	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	12	nsubj	_	SpaceAfter=Yes
9	в	въ	ADP	_	_	11	case	_	SpaceAfter=Yes
10	людцких	людской	ADJ	OOV	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Variant=Long	11	amod	_	SpaceAfter=Yes
11	колымагах	колымага	NOUN	OOV	Case=Loc|Gender=Fem|Number=Plur	12	obl	_	SpaceAfter=Yes
12	ходят	ходити	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 97	bgColor:blue
# visual-style 97	fgColor:white
# visual-style 96	bgColor:blue
# visual-style 96	fgColor:white
# visual-style 96 97 fixed	color:blue
1	Да	да	CCONJ	_	_	19	cc	_	_
2	въ	въ	ADP	_	_	6	case	_	_
3	прошломъ	прошлый	ADJ	OOV	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	6	amod	_	_
4	въ	въ	ADP	_	_	6	case	_	_
5	202	202	ADJ	OOV	NumForm=Digit	6	amod	_	_
6	году	годъ	NOUN	Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	19	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	февраля	февраль	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
9	въ	въ	ADP	_	_	11	case	_	_
10	10	10	ADJ	_	NumForm=Digit	11	amod	_	_
11	день	день	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	6	punct	_	_
13	по	по	ADP	_	_	17	case	_	_
14	нашему	нашъ	DET	_	Case=Dat|Gender=Masc|Number=Sing|Poss=Yes	17	det	_	_
15	великого	великий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	16	amod	_	_
16	государя	государь	NOUN	Animacy[lex]=Anim	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	_
17	указу	указъ	NOUN	Animacy[lex]=Inan	Case=Dat|Gender=Masc|Number=Sing	19	obl	_	SpaceAfter=No
18	,	,	PUNCT	_	_	17	punct	_	_
19	велѣно	велѣти	VERB	Transit=Tran	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
20	:	:	PUNCT	_	_	31	punct	_	_
21	стрѣлецкіе	стрѣлецкий	ADJ	OOV	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Variant=Long	24	amod	_	_
22	и	и	CCONJ	_	_	23	cc	_	_
23	оброчные	оброчный	ADJ	OOV	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Variant=Long	21	conj	_	_
24	денги	деньги	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Plur	31	obj	_	_
25	съ	съ	ADP	_	_	27	case	_	_
26	Тотемского	тотемский	ADJ	OOV	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	27	amod	_	_
27	посаду	посадъ	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Sing	31	obl	_	_
28	и	и	CCONJ	_	_	30	cc	_	_
29	съ	съ	ADP	_	_	30	case	_	_
30	уѣзду	уѣздъ	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Sing	27	conj	_	_
31	сбирать	сбирати	VERB	OOV|Transit=Tran	Aspect=Imp|VerbForm=Inf	19	xcomp	_	SpaceAfter=No
32	,	,	PUNCT	_	_	36	punct	_	_
33	а	а	CCONJ	_	_	36	cc	_	_
34	на	на	ADP	_	_	35	case	_	_
35	ослушникахъ	ослушникъ	NOUN	OOV|Animacy[lex]=Anim	Case=Loc|Gender=Masc|Number=Plur	36	obl	_	_
36	править	правити	VERB	Transit=Tran	Aspect=Imp|VerbForm=Inf	31	conj	_	SpaceAfter=No
37	,	,	PUNCT	_	_	39	punct	_	_
38	съ	съ	ADP	_	_	39	case	_	_
39	посаду	посадъ	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Sing	31	obl	_	_
40	тотемскому	тотемский	ADJ	OOV	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	42	amod	_	_
41	земскому	земский	ADJ	OOV	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	42	amod	_	_
42	старостѣ	староста	NOUN	OOV|Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Sing	31	iobj	_	SpaceAfter=No
43	,	,	PUNCT	_	_	48	punct	_	_
44	а	а	CCONJ	_	_	48	cc	_	_
45	съ	съ	ADP	_	_	46	case	_	_
46	уѣзду	уѣздъ	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Sing	48	orphan	_	_
47	волостнымъ	волостной	ADJ	OOV	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	48	amod	_	_
48	судейкамъ	судейка	NOUN	OOV|Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	42	conj	_	_
49	и	и	CCONJ	_	_	50	cc	_	_
50	цѣловалникомъ	цѣловалникъ	NOUN	OOV|Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	48	conj	_	SpaceAfter=No
51	,	,	PUNCT	_	_	53	punct	_	_
52	на	на	ADP	_	_	53	case	_	_
53	Тотьмѣ	Тотьма	PROPN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Fem|Number=Sing	31	obl	_	_
54	въ	въ	ADP	_	_	56	case	_	_
55	земской	земский	ADJ	OOV	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	56	amod	_	_
56	избѣ	изба	NOUN	Animacy[lex]=Inan	Case=Loc|Gender=Fem|Number=Sing	31	obl	_	SpaceAfter=No
57	,	,	PUNCT	_	_	59	punct	_	_
58	и	и	CCONJ	_	_	59	cc	_	_
59	высылать	высылати	VERB	OOV|Transit=Tran	Aspect=Imp|VerbForm=Inf	31	conj	_	_
60	тѣ	тотъ	DET	_	Case=Acc|Gender=Fem|Number=Plur	61	det	_	_
61	денги	деньги	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Plur	59	obj	_	_
62	къ	къ	ADP	_	_	63	case	_	_
63	Москвѣ	Москва	PROPN	Animacy[lex]=Inan	Case=Dat|Gender=Fem|Number=Sing	59	obl	_	_
64	имъ	они	PRON	_	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	59	iobj	_	_
65	же	же	PART	_	_	64	advmod	_	_
66	старостамъ	староста	NOUN	Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	64	appos	_	_
67	и	и	CCONJ	_	_	68	cc	_	_
68	судейкамъ	судейка	NOUN	OOV|Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	66	conj	_	SpaceAfter=No
69	,	,	PUNCT	_	_	72	punct	_	_
70	съ	съ	ADP	_	_	72	case	_	_
71	своими	свой	DET	_	Case=Ins|Gender=Fem|Number=Plur|Poss=Yes	72	det	_	_
72	отписками	отписка	NOUN	OOV|Animacy[lex]=Inan	Case=Ins|Gender=Fem|Number=Plur	59	obl	_	_
73	и	и	CCONJ	_	_	75	cc	_	_
74	съ	съ	ADP	_	_	75	case	_	_
75	цѣловалники	цѣловалникъ	NOUN	OOV|Animacy[lex]=Anim	Case=Ins|Gender=Masc|Number=Plur	72	conj	_	_
76	и	и	CCONJ	_	_	78	cc	_	_
77	съ	съ	ADP	_	_	78	case	_	_
78	провожатыми	провожатый	ADJ	OOV|AdjType=Subst|	Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	72	conj	_	SpaceAfter=No
79	,	,	PUNCT	_	_	84	punct	_	_
80	въ	въ	ADP	_	_	81	case	_	_
81	году	годъ	NOUN	Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	84	nmod	_	_
82	на	на	ADP	_	_	84	case	_	_
83	два	два	NUM	_	Case=Acc|Gender=Masc	84	nummod:gov	_	_
84	срока	срокъ	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Adnum	59	obl	_	SpaceAfter=No
85	,	,	PUNCT	_	_	87	punct	_	_
86	въ	въ	ADP	_	_	87	case	_	_
87	декабрѣ	декабрь	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	84	appos	_	_
88	да	да	CCONJ	_	_	90	cc	_	_
89	въ	въ	ADP	_	_	90	case	_	_
90	мартѣ	мартъ	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	87	conj	_	_
91	мѣсяцахъ	мѣсяцъ	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Plur	87	nmod	_	_
92	въ	въ	ADP	_	_	94	case	_	_
93	среднихъ	средний	ADJ	OOV	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Variant=Long	94	amod	_	_
94	числѣхъ	число	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Neut|Number=Plur	87	nmod	_	SpaceAfter=No
95	,	,	PUNCT	_	_	107	punct	_	_
96	потому	потому	ADV	_	Degree=Pos	107	mark	_	_
97	что	что	SCONJ	_	_	96	fixed	_	_
98	они	они	PRON	_	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	107	nsubj	_	_
99	Тотемцы	тотемецъ	NOUN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Plur	98	appos	_	_
100	въ	въ	ADP	_	_	101	case	_	_
101	челобитьѣ	челобитье	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Neut|Number=Sing	107	obl	_	_
102	своемъ	свой	DET	_	Case=Loc|Gender=Neut|Number=Sing|Poss=Yes	101	det	_	_
103	также	также	CCONJ	_	Degree=Pos	106	cc	_	_
104	и	и	CCONJ	_	_	103	fixed	_	_
105	въ	въ	ADP	_	_	106	case	_	_
106	сказкахъ	сказка	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Fem|Number=Plur	101	conj	_	_
107	написали	написати	VERB	Transit=Tran	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes	59	advcl	_	SpaceAfter=No
108	,	,	PUNCT	_	_	118	punct	_	_
109	что	что	SCONJ	_	_	118	mark	_	_
110	тѣ	тотъ	DET	_	Case=Acc|Gender=Fem|Number=Plur	114	det	_	_
111	стрѣлецкіе	стрѣлецкий	ADJ	OOV	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Variant=Long	114	amod	_	_
112	и	и	CCONJ	_	_	113	cc	_	_
113	оброчные	оброчный	ADJ	OOV	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Variant=Long	111	conj	_	_
114	денги	деньги	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Plur	120	obj	_	_
115	по	по	ADP	_	_	117	case	_	_
116	вся	весь	DET	_	Case=Acc|Gender=Masc|Number=Plur	117	det	_	_
117	годы	годъ	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Plur	118	obl	_	_
118	станутъ	стати	VERB	Transit=Intr,120	Analyt=Yes|Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	107	ccomp	_	_
119	они	они	PRON	_	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	118	nsubj	_	_
120	платить	платити	VERB	Transit=Tran|Tense=Fut1,118	Analyt=Yes|Aspect=Imp|Tense=Fut|VerbForm=Inf	118	xcomp	_	_
121	безъ	безъ	ADP	_	_	122	case	_	_
122	доимки	доимка	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Fem|Number=Sing	120	obl	_	SpaceAfter=No
123	,	,	PUNCT	_	_	144	punct	_	_
124	а	а	CCONJ	_	_	144	cc	_	_
125	воеводамъ	воевода	NOUN	Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	144	iobj	_	_
126	и	и	CCONJ	_	_	128	cc	_	_
127	приказнымъ	приказный	ADJ	OOV	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	128	amod	_	_
128	людемъ	человѣкъ	NOUN	Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	125	conj	_	_
129	въ	въ	ADP	_	_	130	case	_	_
130	сборѣ	сборъ	NOUN	Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	140	obl	_	_
131	тѣхъ	тотъ	DET	_	Case=Gen|Gender=Fem|Number=Plur	132	det	_	_
132	денегъ	деньги	NOUN	Animacy[lex]=Inan	Case=Gen|Gender=Fem|Number=Plur	130	nmod	_	SpaceAfter=No
133	,	,	PUNCT	_	_	138	punct	_	_
134	и	и	CCONJ	_	_	138	cc	_	_
135	къ	къ	ADP	_	_	136	case	_	_
136	Москвѣ	Москва	PROPN	Animacy[lex]=Inan	Case=Dat|Gender=Fem|Number=Sing	138	nmod	_	_
137	въ	въ	ADP	_	_	138	case	_	_
138	высылку	высылка	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Sing	130	conj	_	_
139	отнюдъ	отнюдъ	ADV	OOV	Degree=Pos	144	advmod	_	_
140	вступаться	вступатися	VERB	OOV|Transit=Intr	Aspect=Imp|Reflex=Yes|VerbForm=Inf	144	xcomp	_	_
141	никоторыми	никоторый	DET	_	Case=Ins|Gender=Neut|Number=Plur	142	det	_	_
142	дѣлы	дѣло	NOUN	Animacy[lex]=Inan	Case=Ins|Gender=Neut|Number=Plur	140	obl	_	_
143	не	не	PART	_	Polarity=Neg	144	advmod	_	_
144	велѣно	велѣти	VERB	Transit=Tran	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	118	conj	_	_
145	и	и	CCONJ	_	_	166	cc	_	_
146	нашихъ	нашъ	DET	_	Case=Gen|Gender=Fem|Number=Plur|Poss=Yes	149	det	_	_
147	великого	великий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	148	amod	_	_
148	государя	государь	NOUN	Animacy[lex]=Anim	Case=Gen|Gender=Masc|Number=Sing	149	nmod	_	_
149	грамотъ	грамота	NOUN	Animacy[lex]=Inan	Case=Gen|Gender=Fem|Number=Plur	164	obj	_	_
150	къ	къ	ADP	_	_	151	case	_	_
151	воеводамъ	воевода	NOUN	Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	164	obl	_	SpaceAfter=No
152	,	,	PUNCT	_	_	154	punct	_	_
153	о	о	ADP	_	_	154	case	_	_
154	сборѣ	сборъ	NOUN	Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	149	nmod	_	_
155	и	и	CCONJ	_	_	157	cc	_	_
156	о	о	ADP	_	_	157	case	_	_
157	высылкѣ	высылка	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Fem|Number=Sing	154	conj	_	_
158	тѣхъ	тотъ	DET	_	Case=Gen|Gender=Fem|Number=Plur	159	det	_	_
159	денегъ	деньги	NOUN	Animacy[lex]=Inan	Case=Gen|Gender=Fem|Number=Plur	154	nmod	_	SpaceAfter=No
160	,	,	PUNCT	_	_	154	punct	_	_
161	съ	съ	ADP	_	_	163	case	_	_
162	203	203	ADJ	OOV	NumForm=Digit	163	amod	_	_
163	году	годъ	NOUN	Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Sing	164	obl	_	_
164	посылать	посылати	VERB	OOV|Transit=Tran	Aspect=Imp|VerbForm=Inf	166	xcomp	_	_
165	не	не	PART	_	Polarity=Neg	166	advmod	_	_
166	велѣно	велѣти	VERB	Transit=Tran	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	144	conj	_	SpaceAfter=No
167	,	,	PUNCT	_	_	169	punct	_	_
168	а	а	CCONJ	_	_	169	cc	_	_
169	велѣно	велѣти	VERB	Transit=Tran	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	144	conj	_	_
170	посылать	посылати	VERB	OOV|Transit=Tran	Aspect=Imp|VerbForm=Inf	169	xcomp	_	_
171	къ	къ	ADP	_	_	173	case	_	_
172	земскимъ	земский	ADJ	OOV	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	173	amod	_	_
173	старостамъ	староста	NOUN	Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	170	obl	_	_
174	и	и	CCONJ	_	_	176	cc	_	_
175	къ	къ	ADP	_	_	176	case	_	_
176	судейкамъ	судейка	NOUN	OOV|Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	173	conj	_	_
177	памяти	память	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Plur	170	obj	_	_
178	и	и	CCONJ	_	_	179	cc	_	_
179	учинить	учинити	VERB	OOV|Transit=Tran	Aspect=Perf|VerbForm=Inf	170	conj	_	_
180	заказъ	заказъ	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Sing	179	obj	_	_
181	крѣпкой	крѣпкий	ADJ	OOV	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	180	amod	_	SpaceAfter=No
182	,	,	PUNCT	_	_	201	punct	_	_
183	чтобъ	чтобъ	SCONJ	201,208	Analyt=Yes	201	mark	_	_
184	земскіе	земский	ADJ	OOV	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	185	amod	_	_
185	старосты	староста	NOUN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Plur	201	nsubj	_	_
186	и	и	CCONJ	_	_	187	cc	_	_
187	судейки	судейка	NOUN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Plur	185	conj	_	_
188	и	и	CCONJ	_	_	189	cc	_	_
189	цѣловалники	цѣловалникъ	NOUN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Plur	185	conj	_	_
190	тѣ	тотъ	DET	_	Case=Acc|Gender=Fem|Number=Plur	191	det	_	_
191	денги	деньги	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Plur	201	obj	_	SpaceAfter=No
192	,	,	PUNCT	_	_	194	punct	_	_
193	по	по	ADP	_	_	194	case	_	_
194	окладу	окладъ	NOUN	OOV|Animacy[lex]=Inan	Case=Dat|Gender=Masc|Number=Sing	201	obl	_	SpaceAfter=No
195	,	,	PUNCT	_	_	198	punct	_	_
196	по	по	ADP	_	_	198	case	_	_
197	вся	весь	DET	_	Case=Acc|Gender=Masc|Number=Plur	198	det	_	_
198	годы	годъ	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Plur	201	obl	_	SpaceAfter=No
199	,	,	PUNCT	_	_	200	punct	_	_
200	сполна	сполна	ADV	_	Degree=Pos	201	advmod	_	_
201	сбирали	сбирати	VERB	OOV|Transit=Tran,183	Analyt=Yes|Aspect=Imp|Mood=Cnd|Number=Plur|Tense=Past|VerbForm=PartRes	180	ccomp	_	_
202	и	и	CCONJ	_	_	208	cc	_	_
203	на	на	ADP	_	_	205	case	_	_
204	указные	указный	ADJ	OOV	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	205	amod	_	_
205	сроки	срокъ	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Plur	208	obl	_	_
206	къ	къ	ADP	_	_	207	case	_	_
207	Москвѣ	Москва	PROPN	Animacy[lex]=Inan	Case=Dat|Gender=Fem|Number=Sing	208	obl	_	_
208	высылали	высылати	VERB	OOV|Transit=Tran,183	Analyt=Yes|Aspect=Imp|Mood=Cnd|Number=Plur|Tense=Past|VerbForm=PartRes	201	conj	_	_
209	безъ	безъ	ADP	_	_	210	case	_	_
210	доимки	доимка	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Fem|Number=Sing	208	obl	_	SpaceAfter=No
211	;	;	PUNCT	_	_	234	punct	_	_
212	а	а	CCONJ	_	_	234	orphan	_	_
213	буде	буде	SCONJ	_	_	227	mark	_	_
214	они	они	PRON	_	Case=Nom|Gender=Masc|Number=Plur	227	nsubj	_	_
215	земскіе	земский	ADJ	OOV	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	216	amod	_	_
216	старосты	староста	NOUN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Plur	214	appos	_	SpaceAfter=No
217	,	,	PUNCT	_	_	219	punct	_	_
218	и	и	CCONJ	_	_	219	cc	_	_
219	судейки	судейка	NOUN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Plur	216	conj	_	SpaceAfter=No
220	,	,	PUNCT	_	_	222	punct	_	_
221	и	и	CCONJ	_	_	222	cc	_	_
222	цѣловалники	цѣловалникъ	NOUN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Plur	216	conj	_	SpaceAfter=No
223	,	,	PUNCT	_	_	216	punct	_	_
224	въ	въ	ADP	_	_	226	case	_	_
225	которомъ	который	PRON	OOV	Case=Loc|Gender=Masc|Number=Sing|PronType=Ind	226	det	_	_
226	году	годъ	NOUN	Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	227	obl	_	_
227	учинятъ	учинити	VERB	OOV|Transit=Tran	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	234	advcl	_	_
228	хотя	хотя	PART	_	_	229	advmod	_	_
229	малую	малый	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	230	amod	_	_
230	доимку	доимка	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Sing	227	obj	_	SpaceAfter=No
231	,	,	PUNCT	_	_	227	punct	_	_
232	и	и	CCONJ	_	_	234	cc	_	_
233	имъ	они	PRON	_	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	234	iobj	_	_
234	учинено	учинити	VERB	OOV|Transit=Tran	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	19	conj	_	_
235	будетъ	быти	AUX	Transit=Intr	Analyt=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	234	aux	_	_
236	жестокое	жестокий	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Long	237	amod	_	_
237	наказанье	наказание	NOUN	Animacy[lex]=Inan	Case=Nom|Gender=Neut|Number=Sing	234	nsubj:pass	_	_
238	безъ	безъ	ADP	_	_	239	case	_	_
239	пощады	пощада	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Fem|Number=Sing	237	nmod	_	_
240	и	и	CCONJ	_	_	241	cc	_	_
241	сосланы	сослати	VERB	OOV|Transit=Tran	Aspect=Perf|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	234	conj	_	_
242	будутъ	быти	AUX	Transit=Intr	Analyt=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	241	aux	_	_
243	въ	въ	ADP	_	_	244	case	_	_
244	ссылку	ссылка	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Sing	241	obl	_	_
245	въ	въ	ADP	_	_	248	case	_	_
246	далные	дальний	ADJ	OOV	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	248	amod	_	_
247	Сибирскіе	сибирский	ADJ	OOV	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	248	amod	_	_
248	городы	городъ	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Plur	241	obl	_	SpaceAfter=No
249	,	,	PUNCT	_	_	256	punct	_	_
250	а	а	CCONJ	_	_	256	cc	_	_
251	домы	домъ	NOUN	Animacy[lex]=Inan	Case=Nom|Gender=Masc|Number=Plur	256	nsubj:pass	_	_
252	ихъ	они	PRON	_	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	251	det	_	_
253	и	и	CCONJ	_	_	254	cc	_	_
254	животы	животъ	NOUN	Animacy[lex]=Inan	Case=Nom|Gender=Masc|Number=Plur	251	conj	_	_
255	будутъ	быти	AUX	Transit=Intr	Analyt=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	256	aux	_	_
256	взяты	взяти	VERB	OOV|Transit=Tran	Aspect=Perf|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	234	conj	_	_
257	на	на	ADP	_	_	258	case	_	_
258	насъ	мы	PRON	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	256	obl	_	_
259	же	же	PART	_	_	258	advmod	_	_
260	великого	великий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	261	amod	_	_
261	государя	государь	NOUN	Animacy[lex]=Anim	Case=Gen|Gender=Masc|Number=Sing	258	appos	_	SpaceAfter=No
262	.	.	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 69	bgColor:blue
# visual-style 69	fgColor:white
# visual-style 68	bgColor:blue
# visual-style 68	fgColor:white
# visual-style 68 69 fixed	color:blue
1	О	о	ADP	_	_	2	case	_	_
2	сем	сей	DET	_	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	6	obl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	чада	чадо	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	6	vocative	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	пишу	писати	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	вам	вы	PRON	_	Case=Dat|Number=Plur|Person=2|PronType=Prs	6	iobj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	_
9	что	что	SCONJ	_	_	13	mark	_	_
10	есте	быти	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	13	aux	_	_
11	божиею	божий	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	12	amod	_	_
12	милостию	милость	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	13	obl	_	_
13	въсприяли	восприяти	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes	6	ccomp	_	_
14	истинную	истинный	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	17	amod	_	_
15	православную	православный	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	17	amod	_	_
16	християнскую	христианский	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	17	amod	_	_
17	веру	вѣра	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	13	obj	_	_
18	греческаго	греческий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	19	amod	_	_
19	закона	законъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	_
20	и	и	CCONJ	_	_	21	cc	_	_
21	пришли	приити	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes	13	conj	_	_
22	есте	быти	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	21	aux	_	_
23	от	отъ	ADP	_	_	24	case	_	_
24	тмы	тьма	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	21	obl	_	_
25	на	на	ADP	_	_	26	case	_	_
26	свет	свѣтъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	21	obl	_	SpaceAfter=No
27	,	,	PUNCT	_	_	29	punct	_	_
28	от	отъ	ADP	_	_	29	case	_	_
29	неверия	невѣрие	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	21	obl	_	_
30	в	въ	ADP	_	_	31	case	_	_
31	веру	вѣра	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	21	obl	_	_
32	и	и	CCONJ	_	_	34	cc	_	_
33	от	отъ	ADP	_	_	34	case	_	_
34	идолослужения	идолослужение	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	21	obl	_	_
35	на	на	ADP	_	_	36	case	_	_
36	благочестие	благочестие	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	21	obl	_	SpaceAfter=No
37	,	,	PUNCT	_	_	39	punct	_	_
38	и	и	CCONJ	_	_	39	cc	_	_
39	познали	познати	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes	13	conj	_	_
40	есте	быти	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	39	aux	_	_
41	истиннаго	истинный	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	42	amod	_	_
42	бога	Богъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	39	obj	_	SpaceAfter=No
43	,	,	PUNCT	_	_	44	punct	_	_
44	творца	творецъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	42	conj	_	_
45	небу	небо	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	44	nmod	_	_
46	и	и	CCONJ	_	_	47	cc	_	_
47	земли	земля	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	45	conj	_	SpaceAfter=No
48	,	,	PUNCT	_	_	51	punct	_	_
49	и	и	CCONJ	_	_	51	cc	_	_
50	всей	весь	DET	_	Case=Dat|Gender=Fem|Number=Sing	51	det	_	_
51	твари	тварь	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	45	conj	_	SpaceAfter=No
52	,	,	PUNCT	_	_	56	punct	_	_
53	яже	иже	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Rel	56	nsubj	_	_
54	суть	быти	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	56	cop	_	_
55	на	на	ADP	_	_	56	case	_	_
56	небеси	небо	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	51	acl:relcl	_	_
57	и	и	CCONJ	_	_	59	cc	_	_
58	на	на	ADP	_	_	59	case	_	_
59	земли	земля	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	56	conj	_	SpaceAfter=No
60	,	,	PUNCT	_	_	62	punct	_	_
61	и	и	CCONJ	_	_	62	cc	_	_
62	породилися	породитися	VERB	_	Aspect=Perf|Number=Plur|Reflex=Yes|Tense=Past|VerbForm=PartRes	13	conj	_	_
63	есте	быти	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	62	aux	_	_
64	в	въ	ADP	_	_	65	case	_	_
65	купели	купѣль	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	62	obl	_	_
66	святым	святой	ADJ	_	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing|Variant=Long	67	amod	_	_
67	крещением	крещение	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	62	iobj	_	_
68	во	въ	ADP	_	_	70	case	_	_
69	имя	имя	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	68	fixed	_	_
70	отца	отецъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	62	obl	_	_
71	и	и	CCONJ	_	_	72	cc	_	_
72	сына	сынъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	70	conj	_	_
73	и	и	CCONJ	_	_	75	cc	_	_
74	святого	святой	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	75	amod	_	_
75	духа	духъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	70	conj	_	SpaceAfter=No
76	,	,	PUNCT	_	_	83	punct	_	_
77	и	и	CCONJ	_	_	83	cc	_	_
78	вы	вы	PRON	_	Case=Nom|Number=Plur|Person=2|PronType=Prs	83	nsubj	_	_
79	бы	бы	AUX	_	Analyt=Yes|Mood=Cnd	83	aux	_	SpaceAfter=No
80	,	,	PUNCT	_	_	81	punct	_	_
81	сынове	сынъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	83	vocative	_	SpaceAfter=No
82	,	,	PUNCT	_	_	81	punct	_	_
83	имели	имѣти	VERB	_	Aspect=Imp|Number=Plur|Tense=Past|VerbForm=PartRes	13	conj	_	_
84	велию	велий	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	85	amod	_	_
85	веру	вѣра	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	83	obj	_	_
86	к	къ	ADP	_	_	87	case	_	_
87	господу	господь	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	85	nmod	_	_
88	богу	Богъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	87	appos	_	SpaceAfter=No
89	,	,	PUNCT	_	_	90	punct	_	_
90	Спасу	спасъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	87	appos	_	_
91	нашему	нашъ	DET	_	Case=Dat|Gender=Masc|Number=Sing|Poss=Yes	90	det	_	_
92	Исусу	Исусъ	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	90	appos	_	_
93	Христу	Христосъ	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	92	flat:name	_	SpaceAfter=No
94	,	,	PUNCT	_	_	98	punct	_	_
95	и	и	CCONJ	_	_	98	cc	_	_
96	пречистой	пречистый	ADJ	_	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	98	amod	_	_
97	его	онъ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	98	det	_	_
98	богоматери	Богоматерь	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	87	conj	_	SpaceAfter=No
99	,	,	PUNCT	_	_	104	punct	_	_
100	да	да	CCONJ	_	_	104	cc	_	_
101	и	и	CCONJ	_	_	104	cc	_	_
102	ко	къ	ADP	_	_	104	case	_	_
103	всем	весь	DET	_	Case=Dat|Gender=Masc|Number=Plur	104	det	_	_
104	святым	святой	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	87	conj	_	SpaceAfter=No
105	,	,	PUNCT	_	_	108	punct	_	_
106	и	и	CCONJ	_	_	108	cc	_	_
107	к	къ	ADP	_	_	108	case	_	_
108	церквам	церковь	NOUN	_	Case=Dat|Gender=Fem|Number=Plur	87	conj	_	_
109	божиим	божий	ADJ	_	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur|Variant=Long	108	amod	_	SpaceAfter=No
110	.	.	PUNCT	_	_	6	punct	_	_

~~~


