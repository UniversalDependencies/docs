---
layout: base
title:  'Statistics of aux in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="orv_rnc-dep-aux-pass.html">aux:pass</a></tt>.

115 nodes (1%) are attached to their parents as `aux`.

77 instances of `aux` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.00869565217391.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (94; 82% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (11; 10% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (4; 3% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (4; 3% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	А	а	CCONJ	_	_	5	cc	_	_
2	гдѣ	гдѣ	ADV	_	Degree=Pos	5	advmod	_	_
3	бꙋдеш[ь]	быти	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	5	aux	_	_
4	хотѧ	хотѣти	PART	_	_	5	advmod	_	_
5	послал	послати	VERB	Analyt=Yes|Tense=Fut2	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Fut|VerbForm=PartRes	12	advcl	_	_
6	на	на	ADP	_	_	7	case	_	_
7	н[а]ше	нашъ	DET	_	Case=Acc|Gender=Neut|Number=Sing|Poss=Yes	5	obl	_	_
8	лихо	лихо	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	5	obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	5	punct	_	_
10	тамо	тамо	ADV	_	Degree=Pos	12	advmod	_	_
11	ти	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	12	iobj	_	_
12	ѡтослати	отослати	VERB	_	Aspect=Perf|VerbForm=Inf	0	root	_	SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	А	а	CCONJ	_	_	3	cc	_	SpaceAfter=Yes
2	за	за	ADP	_	_	3	case	_	SpaceAfter=Yes
3	лошадьми	лошадь	NOUN	OOV	Case=Ins|Gender=Fem|Number=Plur	7	obl	_	SpaceAfter=Yes
4	б	бъ	AUX	_	Analyt=Yes|Mood=Cnd	3	aux	_	SpaceAfter=Yes
5	тебе	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	7	iobj	_	SpaceAfter=Yes
6	самому	самъ	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	5	nmod	_	SpaceAfter=Yes
7	ехать	ехати	VERB	OOV	VerbForm=Inf|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 119	bgColor:blue
# visual-style 119	fgColor:white
# visual-style 120	bgColor:blue
# visual-style 120	fgColor:white
# visual-style 120 119 aux	color:blue
1	А	а	CCONJ	_	_	32	cc	_	_
2	въ	въ	ADP	_	_	9	case	_	_
3	прошлыхъ	прошлый	ADJ	OOV	Case=Loc|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	9	amod	_	_
4	во	въ	ADP	_	_	9	case	_	_
5	197	197	ADJ	OOV	NumForm=Digit	3	amod	_	_
6	да	да	CCONJ	_	_	8	cc	_	_
7	въ	въ	ADP	_	_	9	case	_	_
8	205	205	ADJ	OOV	NumForm=Digit	5	conj	_	_
9	годѣхъ	годъ	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Plur	32	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	15	punct	_	_
11	по	по	ADP	_	_	15	case	_	_
12	нашему	нашъ	DET	_	Case=Dat|Gender=Masc|Number=Sing|Poss=Yes	15	det	_	_
13	великого	великий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	14	amod	_	_
14	государя	государь	NOUN	Animacy[lex]=Anim	Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
15	указу	указъ	NOUN	Animacy[lex]=Inan	Case=Dat|Gender=Masc|Number=Sing	32	obl	_	SpaceAfter=No
16	,	,	PUNCT	_	_	19	punct	_	_
17	а	а	CCONJ	_	_	19	cc	_	_
18	по	по	ADP	_	_	19	case	_	_
19	челобитью	челобитье	NOUN	OOV|Animacy[lex]=Inan	Case=Dat|Gender=Neut|Number=Sing	15	conj	_	_
20	Устюга	Устюгъ	PROPN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Sing	25	nmod	_	_
21	Великого	великий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	20	amod	_	_
22	всѣхъ	весь	DET	_	Case=Gen|Gender=Masc|Number=Plur	25	det	_	_
23	уѣздныхъ	уѣздный	ADJ	OOV	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	25	amod	_	_
24	земскихъ	земский	ADJ	OOV	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	25	amod	_	_
25	старостъ	староста	NOUN	Animacy[lex]=Anim	Case=Gen|Gender=Masc|Number=Plur	19	nmod	_	_
26	и	и	CCONJ	_	_	30	cc	_	_
27	всего	весь	DET	_	Case=Gen|Gender=Masc|Number=Sing	29	det	_	_
28	Устюжского	устюжский	ADJ	OOV	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	29	amod	_	_
29	уѣзду	уѣздъ	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Sing	30	nmod	_	_
30	крестьянъ	крестьянинъ	NOUN	OOV|Animacy[lex]=Anim	Case=Gen|Gender=Masc|Number=Plur	25	conj	_	SpaceAfter=No
31	,	,	PUNCT	_	_	15	punct	_	_
32	посланы	послати	VERB	Transit=Tran	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
33	наши	нашъ	DET	_	Case=Nom|Gender=Fem|Number=Plur|Poss=Yes	36	det	_	_
34	великого	великий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	35	amod	_	_
35	государя	государь	NOUN	Animacy[lex]=Anim	Case=Gen|Gender=Masc|Number=Sing	36	nmod	_	_
36	грамоты	грамота	NOUN	Animacy[lex]=Inan	Case=Nom|Gender=Fem|Number=Plur	32	nsubj:pass	_	_
37	на	на	ADP	_	_	38	case	_	_
38	Устюгъ	Устюгъ	PROPN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Sing	32	obl	_	_
39	къ	къ	ADP	_	_	40	case	_	_
40	воеводамъ	воевода	NOUN	Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	32	obl	_	SpaceAfter=No
41	,	,	PUNCT	_	_	46	punct	_	_
42	а	а	CCONJ	_	_	46	cc	_	_
43	къ	къ	ADP	_	_	45	case	_	_
44	земскимъ	земский	ADJ	OOV	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	45	amod	_	_
45	старостамъ	староста	NOUN	Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	46	orphan	_	_
46	памяти	память	NOUN	Animacy[lex]=Inan	Case=Dat|Gender=Fem|Number=Sing	36	conj	_	_
47	велѣно	велѣти	VERB	Transit=Tran	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	32	parataxis	_	SpaceAfter=No
48	,	,	PUNCT	_	_	51	punct	_	_
49	съ	съ	ADP	_	_	51	case	_	_
50	посадскихъ	посадский	ADJ	OOV	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	51	amod	_	_
51	людей	человѣкъ	NOUN	Animacy[lex]=Anim	Case=Gen|Gender=Masc|Number=Plur	63	obl	_	_
52	и	и	CCONJ	_	_	55	cc	_	_
53	съ	съ	ADP	_	_	55	case	_	_
54	уѣздныхъ	уѣздный	ADJ	OOV	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	55	amod	_	_
55	крестьянъ	крестьянинъ	NOUN	OOV|Animacy[lex]=Anim	Case=Gen|Gender=Masc|Number=Plur	51	conj	_	SpaceAfter=No
56	,	,	PUNCT	_	_	51	punct	_	_
57	стрѣлецкіе	стрѣлецкий	ADJ	OOV	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Variant=Long	58	amod	_	_
58	денги	деньги	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Plur	63	obj	_	_
59	и	и	CCONJ	_	_	62	cc	_	_
60	иные	иной	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	62	amod	_	_
61	всякіе	всякий	DET	OOV	Case=Acc|Gender=Masc|Number=Plur|Variant=Long	62	det	_	_
62	доходы	доходъ	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Plur	58	conj	_	_
63	сбирать	сбирати	VERB	OOV|Transit=Tran	Aspect=Imp|VerbForm=Inf	47	xcomp	_	_
64	въ	въ	ADP	_	_	66	case	_	_
65	земской	земский	ADJ	OOV	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	66	amod	_	_
66	избѣ	изба	NOUN	Animacy[lex]=Inan	Case=Loc|Gender=Fem|Number=Sing	63	obl	_	SpaceAfter=No
67	,	,	PUNCT	_	_	69	punct	_	_
68	земскимъ	земский	ADJ	OOV	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	69	amod	_	_
69	старостамъ	староста	NOUN	Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	47	iobj	_	_
70	и	и	CCONJ	_	_	71	cc	_	_
71	цѣловалникомъ	цѣловалникъ	NOUN	OOV|Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	69	conj	_	SpaceAfter=No
72	,	,	PUNCT	_	_	81	punct	_	_
73	кого	кто	PRON	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Rel	81	obj	_	_
74	къ	къ	ADP	_	_	76	case	_	_
75	тому	тотъ	DET	_	Case=Dat|Gender=Masc|Number=Sing	76	det	_	_
76	сбору	сборъ	NOUN	OOV|Animacy[lex]=Inan	Case=Dat|Gender=Masc|Number=Sing	81	obl	_	_
77	мірскіе	мирской	ADJ	OOV	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	78	amod	_	_
78	люди	человѣкъ	NOUN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Plur	81	nsubj	_	_
79	межъ	межъ	ADP	_	_	80	case	_	_
80	себя	себя	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	81	obl	_	_
81	выберутъ	выбрати	VERB	OOV|Transit=Tran	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	69	acl:relcl	_	SpaceAfter=No
82	,	,	PUNCT	_	_	84	punct	_	_
83	и	и	CCONJ	_	_	84	cc	_	_
84	платить	платити	VERB	Transit=Tran	Aspect=Imp|VerbForm=Inf	63	conj	_	_
85	имъ	они	PRON	_	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	84	iobj	_	_
86	тѣ	тотъ	DET	_	Case=Acc|Gender=Fem|Number=Plur	87	det	_	_
87	денги	деньги	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Plur	84	obj	_	_
88	въ	въ	ADP	_	_	89	case	_	_
89	году	годъ	NOUN	Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	92	nmod	_	_
90	на	на	ADP	_	_	92	case	_	_
91	три	три	NUM	_	Case=Acc	92	nummod:gov	_	_
92	срока	срокъ	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Adnum	84	obl	_	SpaceAfter=No
93	,	,	PUNCT	_	_	95	punct	_	_
94	по	по	ADP	_	_	95	case	_	_
95	третямъ	треть	NOUN	OOV|Animacy[lex]=Inan	Case=Dat|Gender=Fem|Number=Plur	84	obl	_	SpaceAfter=No
96	:	:	PUNCT	_	_	98	punct	_	_
97	первую	первый	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	98	amod	_	_
98	треть	треть	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Sing	84	parataxis	_	_
99	въ	въ	ADP	_	_	100	case	_	_
100	сентябрѣ	сентябрь	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	98	orphan	_	SpaceAfter=No
101	,	,	PUNCT	_	_	102	punct	_	_
102	вторую	второй	ADJ	_	Case=Acc|Gender=Fem|Number=Sing	98	conj	_	_
103	въ	въ	ADP	_	_	104	case	_	_
104	декабрѣ	декабрь	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	102	orphan	_	SpaceAfter=No
105	,	,	PUNCT	_	_	106	punct	_	_
106	третью	третий	DET	OOV	Case=Ins|Gender=Fem|Number=Sing	98	conj	_	_
107	въ	въ	ADP	_	_	108	case	_	_
108	февралѣ	февраль	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	106	orphan	_	_
109	мѣсяцахъ	мѣсяцъ	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Plur	100	nmod	_	SpaceAfter=No
110	;	;	PUNCT	_	_	136	punct	_	_
111	а	а	CCONJ	_	_	120	cc	_	_
112	кто	кто	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	120	nsubj	_	_
113	изъ	изъ	ADP	_	_	114	case	_	_
114	нихъ	они	PRON	_	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	112	nmod	_	_
115	въ	въ	ADP	_	_	116	case	_	_
116	платежѣ	платежъ	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Plur	120	obl	_	_
117	тѣхъ	тотъ	DET	_	Case=Gen|Gender=Masc|Number=Plur	118	det	_	_
118	доходовъ	доходъ	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Plur	116	nmod	_	_
119	будутъ	быти	AUX	Transit=Intr	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	120	aux	_	_
120	ослушны	ослушный	ADJ	OOV	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Variant=Short	137	acl	_	SpaceAfter=No
121	,	,	PUNCT	_	_	129	punct	_	_
122	и	и	CCONJ	_	_	129	cc	_	_
123	на	на	ADP	_	_	125	case	_	_
124	тѣ	тотъ	DET	_	Case=Acc|Gender=Masc|Number=Plur	125	det	_	_
125	сроки	срокъ	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Plur	129	obl	_	_
126	собою	себя	PRON	_	Case=Ins|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	127	iobj	_	_
127	платить	платити	VERB	Transit=Tran|Tense=Fut1,129	Analyt=Yes|Aspect=Imp|Tense=Fut|VerbForm=Inf	129	xcomp	_	_
128	не	не	PART	_	Polarity=Neg	129	advmod	_	_
129	учнутъ	учати	VERB	OOV|Transit=Tran,127	Analyt=Yes|Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	120	conj	_	SpaceAfter=No
130	,	,	PUNCT	_	_	120	punct	_	_
131	и	и	CCONJ	_	_	136	cc	_	_
132	для	для	ADP	_	_	133	case	_	_
133	правежу	правежъ	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Sing	136	obl	_	_
134	тѣхъ	тотъ	DET	_	Case=Gen|Gender=Fem|Number=Plur	135	det	_	_
135	денегъ	деньги	NOUN	Animacy[lex]=Inan	Case=Gen|Gender=Fem|Number=Plur	133	nmod	_	_
136	посылать	посылати	VERB	OOV|Transit=Tran	Aspect=Imp|VerbForm=Inf	32	conj	_	_
137	имъ	они	PRON	_	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	136	iobj	_	_
138	изъ	изъ	ADP	_	_	140	case	_	_
139	земской	земский	ADJ	OOV	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	140	amod	_	_
140	избы	изба	NOUN	Animacy[lex]=Inan	Case=Gen|Gender=Fem|Number=Sing	136	obl	_	SpaceAfter=No
141	,	,	PUNCT	_	_	142	punct	_	_
142	имъ	они	PRON	_	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	137	conj	_	_
143	же	же	PART	_	_	142	advmod	_	_
144	земскимъ	земский	ADJ	OOV	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	145	amod	_	_
145	старостамъ	староста	NOUN	Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	142	appos	_	SpaceAfter=No
146	,	,	PUNCT	_	_	142	punct	_	_
147	своихъ	свой	DET	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Poss=Yes	148	det	_	_
148	розсылщиковъ	розсылщикъ	NOUN	OOV|Animacy[lex]=Anim	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	136	obj	_	SpaceAfter=No
149	,	,	PUNCT	_	_	153	punct	_	_
150	и	и	CCONJ	_	_	153	cc	_	_
151	тѣ	тотъ	DET	_	Case=Acc|Gender=Fem|Number=Plur	152	det	_	_
152	денги	деньги	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Plur	153	obj	_	_
153	сбирать	сбирати	VERB	OOV|Transit=Tran	Aspect=Imp|VerbForm=Inf	136	conj	_	_
154	имъ	они	PRON	_	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	153	iobj	_	_
155	по	по	ADP	_	_	156	case	_	_
156	окладу	окладъ	NOUN	OOV|Animacy[lex]=Inan	Case=Dat|Gender=Masc|Number=Sing	153	obl	_	_
157	сполна	сполна	ADV	_	Degree=Pos	153	advmod	_	SpaceAfter=No
158	,	,	PUNCT	_	_	162	punct	_	_
159	чтобъ	чтобъ	SCONJ	165	Analyt=Yes	162	mark	_	_
160	ничего	ничто	PRON	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Neg	162	nsubj	_	_
161	въ	въ	ADP	_	_	162	case	_	_
162	доимкѣ	доимка	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Fem|Number=Sing	153	advcl	_	_
163	отнюдъ	отнюдъ	ADV	OOV	Degree=Pos	162	advmod	_	_
164	не	не	PART	_	Polarity=Neg	162	advmod	_	_
165	было	быти	AUX	Transit=Intr,159	Analyt=Yes|Gender=Neut|Mood=Cnd|Number=Sing|Tense=Past|VerbForm=PartRes	162	aux	_	SpaceAfter=No
166	;	;	PUNCT	_	_	189	punct	_	_
167	а	а	CCONJ	_	_	189	cc	_	_
168	воеводамъ	воевода	NOUN	Animacy[lex]=Anim	Case=Dat|Gender=Masc|Number=Plur	189	iobj	_	SpaceAfter=No
169	,	,	PUNCT	_	_	172	punct	_	_
170	для	для	ADP	_	_	172	case	_	_
171	того	то	PRON	_	Case=Gen|Gender=Masc|Number=Sing	172	det	_	_
172	правежу	правежъ	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Sing	189	obl	_	SpaceAfter=No
173	,	,	PUNCT	_	_	172	punct	_	_
174	въ	въ	ADP	_	_	176	case	_	_
175	Устюжской	устюжский	ADJ	OOV	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	176	amod	_	_
176	уѣздъ	уѣздъ	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Sing	189	obl	_	SpaceAfter=No
177	,	,	PUNCT	_	_	176	punct	_	_
178	изъ	изъ	ADP	_	_	180	case	_	_
179	приказной	приказный	ADJ	OOV	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	180	amod	_	_
180	избы	изба	NOUN	Animacy[lex]=Inan	Case=Gen|Gender=Fem|Number=Sing	189	obl	_	_
181	подъячихъ	подьячий	NOUN	OOV|Animacy[lex]=Anim	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	189	obj	_	SpaceAfter=No
182	,	,	PUNCT	_	_	184	punct	_	_
183	и	и	CCONJ	_	_	184	cc	_	_
184	стрѣлцовъ	стрѣлецъ	NOUN	OOV|Animacy[lex]=Anim	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	181	conj	_	SpaceAfter=No
185	,	,	PUNCT	_	_	187	punct	_	_
186	и	и	CCONJ	_	_	187	cc	_	_
187	приставовъ	приставъ	NOUN	Animacy[lex]=Anim	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	181	conj	_	SpaceAfter=No
188	,	,	PUNCT	_	_	181	punct	_	_
189	посылать	посылати	VERB	OOV|Transit=Tran	Aspect=Imp|VerbForm=Inf	136	conj	_	_
190	и	и	CCONJ	_	_	203	cc	_	_
191	тѣмъ	тотъ	DET	_	Case=Dat|Gender=Masc|Number=Sing	200	iobj	_	_
192	въ	въ	ADP	_	_	193	case	_	_
193	подводахъ	подвода	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Fem|Number=Plur	199	nmod	_	_
194	и	и	CCONJ	_	_	197	cc	_	_
195	въ	въ	ADP	_	_	197	case	_	_
196	ѣздовыхъ	ѣздовой	ADJ	OOV	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur|Variant=Long	197	amod	_	_
197	денгахъ	деньги	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Fem|Number=Plur	193	conj	_	_
198	никакихъ	никакой	DET	OOV	Case=Gen|Gender=Masc|Number=Plur	199	det	_	_
199	убытковъ	убытокъ	NOUN	OOV|Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Plur	200	obj	_	_
200	чинить	чинити	VERB	Transit=Tran	Aspect=Imp|VerbForm=Inf	203	xcomp	_	_
201	отнюдъ	отнюдъ	ADV	OOV	Degree=Pos	203	advmod	_	_
202	не	не	PART	_	Polarity=Neg	203	advmod	_	_
203	велѣно	велѣти	VERB	Transit=Tran	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	189	conj	_	SpaceAfter=No
204	.	.	PUNCT	_	_	32	punct	_	_

~~~


