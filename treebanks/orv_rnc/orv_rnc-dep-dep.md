---
layout: base
title:  'Statistics of dep in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `dep`

This relation is universal.

18 nodes (0%) are attached to their parents as `dep`.

16 instances of `dep` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.77777777777778.

The following 5 pairs of parts of speech are connected with `dep`: <tt><a href="orv_rnc-pos-X.html">X</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (14; 78% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (1; 6% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (1; 6% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (1; 6% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep	color:blue
1	{	{	PUNCT	OOV	_	2	punct	_	SpaceAfter=No
2	л.	_	X	_	_	5	parataxis	_	_
3	3	_	X	_	_	2	dep	_	SpaceAfter=No
4	}	}	PUNCT	OOV	_	2	punct	_	_
5	Написано	написати	VERB	OOV|Transit=Tran	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	в	въ	ADP	_	_	7	case	_	_
7	доклад	докладъ	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 57	bgColor:blue
# visual-style 57	fgColor:white
# visual-style 56	bgColor:blue
# visual-style 56	fgColor:white
# visual-style 56 57 dep	color:blue
1	И	и	CCONJ	_	_	7	cc	_	_
2	немчин	немчинъ	NOUN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
3	Петр	Петръ	PROPN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
4	Фальк	Фалькъ	PROPN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	3	flat:name	_	_
5	в	въ	ADP	_	_	6	case	_	_
6	роспросе	роспросъ	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	7	obl	_	_
7	сказал	сказати	VERB	Transit=Tran	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	0	root	_	_
8	через	черезъ	ADP	_	_	9	case	_	_
9	толмача	толмачь	NOUN	OOV|Animacy[lex]=Anim	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	а	а	CCONJ	_	_	12	cc	_	_
12	толмачил	толмачити	VERB	OOV|Transit=Tran	Aspect=Imp|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	7	conj	_	_
13	переводчик	переводчикъ	NOUN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
14	Яков	Яковъ	PROPN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	13	appos	_	_
15	Ниэнборх	Ниэнборхъ	PROPN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	14	flat:name	_	SpaceAfter=No
16	:	:	PUNCT	_	_	17	punct	_	_
17	пришол	приити	VERB	Transit=Intr	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	7	parataxis	_	_
18	де	де	PART	_	_	17	advmod	_	_
19	к	къ	ADP	_	_	20	case	_	_
20	нему	онъ	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	obl	_	_
21	на	на	ADP	_	_	22	case	_	_
22	двор	дворъ	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Sing	17	obl	_	_
23	тот	тотъ	DET	_	Case=Acc|Gender=Masc|Number=Sing	24	det	_	_
24	немчин	немчинъ	NOUN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	17	nsubj	_	_
25	Григорей	Григорей	PROPN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	24	appos	_	_
26	насилством	насилство	NOUN	OOV|Animacy[lex]=Inan	Case=Ins|Gender=Neut|Number=Sing	17	obl	_	SpaceAfter=No
27	,	,	PUNCT	_	_	29	punct	_	_
28	и	и	CCONJ	_	_	29	cc	_	_
29	учал	учати	VERB	Transit=Tran	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	17	conj	_	_
30	ево	онъ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	31	obj	_	_
31	бить	бити	VERB	Transit=Tran	Aspect=Imp|VerbForm=Inf	29	xcomp	_	_
32	по	по	ADP	_	_	33	case	_	_
33	щекам	щека	NOUN	OOV|Animacy[lex]=Inan	Case=Dat|Gender=Fem|Number=Plur	31	obl	_	SpaceAfter=No
34	,	,	PUNCT	_	_	38	punct	_	_
35	и	и	CCONJ	_	_	38	cc	_	_
36	жену	жена	NOUN	Animacy[lex]=Anim	Case=Acc|Gender=Fem|Number=Sing	38	obl	_	_
37	ево	онъ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	36	det	_	_
38	бранить	бранити	VERB	Transit=Tran	Aspect=Imp|VerbForm=Inf	31	conj	_	_
39	всякими	всякий	DET	OOV	Case=Ins|Gender=Fem|Number=Plur|Variant=Long	41	det	_	_
40	позорными	позорный	ADJ	OOV	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur|Variant=Long	41	amod	_	_
41	бранми	брань	NOUN	Animacy[lex]=Inan	Case=Ins|Gender=Fem|Number=Plur	38	iobj	_	_
42	{	{	PUNCT	OOV	_	43	punct	_	SpaceAfter=No
43	л.	_	X	_	_	41	parataxis	_	_
44	5	_	X	_	_	43	dep	_	SpaceAfter=No
45	}	}	PUNCT	OOV	_	43	punct	_	_
46	и	и	CCONJ	_	_	47	cc	_	_
47	учал	учати	VERB	Transit=Tran	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	17	conj	_	_
48	тово	тотъ	DET	_	Case=Gen|Gender=Masc|Number=Sing	49	det	_	_
49	Петра	Петръ	PROPN	Animacy[lex]=Anim	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	52	obj	_	_
50	тот	тотъ	DET	_	Case=Nom|Gender=Masc|Number=Sing	51	det	_	_
51	Григорей	Григорей	PROPN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	47	nsubj	_	_
52	звать	звати	VERB	OOV|Transit=Tran	Aspect=Imp|VerbForm=Inf	47	xcomp	_	_
53	на	на	ADP	_	_	54	case	_	_
54	поединок	поединокъ	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Sing	52	obl	_	SpaceAfter=No
55	,	,	PUNCT	_	_	56	punct	_	_
56	пьян	пьяный	ADJ	OOV	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	47	acl	_	_
57	же	же	PART	_	_	56	dep	_	SpaceAfter=No
58	,	,	PUNCT	_	_	82	punct	_	_
59	и	и	CCONJ	_	_	82	cc	_	_
60	он	онъ	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	82	nsubj	_	_
61	де	де	PART	_	_	60	advmod	_	_
62	Петр	Петръ	PROPN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	60	appos	_	_
63	вышед	выйти	VERB	Transit=Intr	Aspect=Perf|Tense=Past|VerbForm=Conv	82	advcl	_	_
64	из	изъ	ADP	_	_	65	case	_	_
65	двора	дворъ	NOUN	Animacy[lex]=Inan	Case=Gen|Gender=Masc|Number=Sing	63	obl	_	_
66	на	на	ADP	_	_	67	case	_	_
67	улицу	улица	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Sing	63	obl	_	_
68	в	въ	ADP	_	_	69	case	_	_
69	переулок	переулокъ	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Sing	63	obl	_	SpaceAfter=No
70	,	,	PUNCT	_	_	74	punct	_	_
71	что	что	PRON	_	_	74	nsubj	_	_
72	в	въ	ADP	_	_	74	case	_	_
73	Старых	старый	ADJ	OOV	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur|Variant=Long	74	amod	_	_
74	Полочах	Полочи	PROPN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Fem|Number=Plur	69	acl	_	SpaceAfter=No
75	,	,	PUNCT	_	_	78	punct	_	_
76	за	за	ADP	_	_	78	case	_	_
77	Тверскими	тверской	ADJ	OOV	Case=Ins|Degree=Pos|Gender=Neut|Number=Plur|Variant=Long	78	amod	_	_
78	вороты	ворота	NOUN	Animacy[lex]=Inan	Case=Ins|Gender=Neut|Number=Plur	74	nmod	_	SpaceAfter=No
79	,	,	PUNCT	_	_	82	punct	_	_
80	на	на	ADP	_	_	81	case	_	_
81	поединке	поединокъ	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	82	obl	_	_
82	поколол	поколоти	VERB	OOV|Transit=Tran	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	17	conj	_	_
83	ево	онъ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	82	obj	_	_
84	в	въ	ADP	_	_	85	case	_	_
85	груди	грудь	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Fem|Number=Sing	82	obl	_	_
86	против	противъ	ADP	_	_	87	case	_	_
87	сердца	сердце	NOUN	Animacy[lex]=Inan	Case=Gen|Gender=Neut|Number=Sing	82	obl	_	SpaceAfter=No
88	,	,	PUNCT	_	_	94	punct	_	_
89	и	и	CCONJ	_	_	94	cc	_	_
90	он	онъ	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	94	nsubj	_	_
91	от	отъ	ADP	_	_	93	case	_	_
92	тое	тый	DET	_	Case=Gen|Gender=Fem|Number=Sing	93	det	_	_
93	раны	рана	NOUN	Animacy[lex]=Inan	Case=Gen|Gender=Fem|Number=Sing	94	obl	_	_
94	умер	умерети	VERB	Transit=Intr	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	17	conj	_	SpaceAfter=No
95	,	,	PUNCT	_	_	97	punct	_	_
96	а	а	CCONJ	_	_	97	cc	_	_
97	заколол	заколоти	VERB	OOV|Transit=Tran	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	17	conj	_	_
98	ево	онъ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	97	obj	_	_
99	не	не	PART	_	Polarity=Neg	100	advmod	_	_
100	умышленьем	умышленье	NOUN	OOV|Animacy[lex]=Inan	Case=Ins|Gender=Neut|Number=Sing	97	iobj	_	SpaceAfter=No
101	,	,	PUNCT	_	_	103	punct	_	_
102	на	на	ADP	_	_	103	case	_	_
103	поединке	поединокъ	NOUN	OOV|Animacy[lex]=Inan	Case=Loc|Gender=Masc|Number=Sing	97	obl	_	_
104	со	съ	ADP	_	_	105	case	_	_
105	пьяна	пьяный	ADJ	OOV|Animacy[lex]=Inan	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	97	obl	_	SpaceAfter=No
106	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 dep	color:blue
1	А	а	CCONJ	_	_	6	cc	_	_
2	какова	каковъ	DET	_	Case=Nom|Gender=Fem|Number=Sing	3	det	_	_
3	челобитная	челобитная	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
4	у	у	ADP	_	_	5	case	_	_
5	неи	она	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
6	послана	послати	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	40	advcl	_	_
7	и	и	CCONJ	_	_	8	cc	_	_
8	дана	дати	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	6	conj	_	_
9	запись	запись	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	8	nsubj:pass	_	_
10	на	на	ADP	_	_	11	case	_	_
11	собя	себя	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	9	nmod	_	_
12	и	и	CCONJ	_	_	15	cc	_	_
13	с	съ	ADP	_	_	14	case	_	_
14	них	онѣ	PRON	_	Case=Gen|Gender=Fem|Number=Plur|Person=3|PronType=Prs	15	obl	_	_
15	посланы	послати	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	6	conj	_	_
16	списки	списокъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	15	nsubj:pass	_	_
17	к	къ	ADP	_	_	18	case	_	_
18	млсти	милость	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	15	obl	_	_
19	твоеи	твой	DET	_	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes	18	dep	_	_
20	і	и	CCONJ	_	_	22	cc	_	_
21	если	если	SCONJ	_	_	22	mark	_	_
22	возможно	возможный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	6	conj	_	_
23	что	что	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	24	obj	_	_
24	учинит	учинити	VERB	_	Aspect=Perf|VerbForm=Inf	22	csubj	_	_
25	приятель	приятель	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	22	vocative	_	_
26	мои	мой	DET	_	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes	25	det	_	_
27	чтобъ	чтобы	SCONJ	_	Mood=Cnd	28	mark	_	_
28	промыслит	промыслити	VERB	_	Aspect=Perf|VerbForm=Inf	24	ccomp	_	_
29	указ	указъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	28	obj	_	_
30	что	что	SCONJ	_	_	31	mark	_	_
31	жит	жити	VERB	_	Aspect=Imp|VerbForm=Inf	29	nmod	_	_
32	бы	бы	AUX	_	Analyt=Yes|Mood=Cnd	31	aux	_	_
33	мужику	мужикъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	31	iobj	_	_
34	с	съ	ADP	_	_	36	case	_	_
35	ннешнеи	нынѣшний	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	36	amod	_	_
36	женкои	женка	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	31	obl	_	_
37	і	и	CCONJ	_	_	40	cc	_	_
38	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	40	nsubj	_	_
39	бы	бы	AUX	_	Analyt=Yes|Mood=Cnd	40	aux	_	_
40	сталъ	стати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	0	root	_	_
41	і	и	CCONJ	_	_	43	cc	_	_
42	мужиком	мужикъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	43	obj	_	_
43	промышлять	промышляти	VERB	_	Aspect=Imp|VerbForm=Inf	40	xcomp	_	_

~~~


