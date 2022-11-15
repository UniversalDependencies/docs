---
layout: base
title:  'Statistics of nmod in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `nmod`

This relation is universal.

99 nodes (3%) are attached to their parents as `nmod`.

85 instances of `nmod` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.43434343434343.

The following 12 pairs of parts of speech are connected with `nmod`: <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (79; 80% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (5; 5% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="orv_ruthenian-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod	color:blue
1	О	_	ADP	_	_	2	case	_	_
2	выбиранью	_	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	0	root	_	_
3	судей	_	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	_
4	въ	_	ADP	_	_	5	case	_	_
5	повѣтѣ	_	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
6	.	_	PUNCT	_	_	2	punct	_	SpacesAfter=\r\n\r\n

~~~


~~~ conllu
# visual-style 69	bgColor:blue
# visual-style 69	fgColor:white
# visual-style 68	bgColor:blue
# visual-style 68	fgColor:white
# visual-style 68 69 nmod	color:blue
1	А	_	CCONJ	CC	_	19	cc	_	_
2	кому	_	PRON	WP	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	9	iobj	_	_
3	с	_	ADP	IN	_	5	case	_	_
4	тых	_	DET	DT	Case=Gen|Number=Plur|PronType=Dem	5	det	_	_
5	обраныхъ	_	VERB	VBNL	Aspect=Perf|Case=Gen|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	2	nmod	_	_
6	тые	_	DET	DT	Animacy=Inan|Case=Acc|Number=Plur|PronType=Dem	7	det	_	_
7	вряды	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	9	obj	_	_
8	земъские	_	ADJ	JJL	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	7	amod	_	_
9	дадимъ	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	12	acl:relcl	_	SpaceAfter=No
10	,	_	PUNCT	PUNCT	_	9	punct	_	_
11	тые	_	DET	DT	Case=Nom|Number=Plur|PronType=Dem	12	det	_	_
12	врядники	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	19	nsubj	_	_
13	потомъ	_	ADV	RB	Degree=Pos	19	advmod	_	_
14	на	_	ADP	IN	_	16	case	_	_
15	перъших	_	ADJ	JJL	Case=Loc|Number=Plur|NumForm=Word|NumType=Ord	16	amod	_	_
16	рокохь	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	19	obl	_	_
17	судовыхъ	_	ADJ	JJL	Case=Loc|Degree=Pos|Number=Plur	16	amod	_	_
18	будуть	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	19	cop	_	_
19	повинъни	_	ADJ	NN	Degree=Pos|Number=Plur|Variant=Short	0	root	_	_
20	наперъвей	_	ADV	RBR	Degree=Cmp	84	advmod	_	_
21	тамъ	_	ADV	RB	Degree=Pos	84	advmod	_	_
22	на	_	ADP	IN	_	23	case	_	_
23	местъцу	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	21	nmod	_	_
24	судовомъ	_	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	23	nmod	_	_
25	передъ	_	ADP	IN	_	26	case	_	_
26	воеводою	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	84	iobj	_	_
27	або	_	CCONJ	CC	_	28	cc	_	_
28	кашталяномъ	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	26	conj	_	SpaceAfter=No
29	,	_	PUNCT	PUNCT	_	39	punct	_	_
30	а	_	CCONJ	CC	_	39	cc	_	_
31	гдѣ	_	ADV	RB	Degree=Pos	35	advmod	_	_
32	воеводы	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	35	nsubj	_	_
33	и	_	CCONJ	CC	_	34	cc	_	_
34	кашталяна	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	32	conj	_	_
35	нетъ	_	VERB	PRED	Polarity=Neg	39	advcl	_	SpaceAfter=No
36	,	_	PUNCT	PUNCT	_	35	punct	_	_
37	ино	_	SCONJ	IN	_	39	mark	_	_
38	передъ	_	ADP	IN	_	39	case	_	_
39	старостою	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	26	conj	_	_
40	судовымъ	_	ADJ	JJL	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	39	amod	_	_
41	и	_	CCONJ	CC	_	42	cc	_	_
42	маршалкомъ	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	39	conj	_	_
43	оного	_	DET	DT	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	44	det	_	_
44	повету	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	39	nmod	_	_
45	при	_	ADP	IN	_	46	case	_	_
46	собранью	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	39	conj	_	_
47	шляхты	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	46	nmod	_	SpaceAfter=No
48	,	_	PUNCT	PUNCT	_	68	punct	_	_
49	а	_	CCONJ	CC	_	68	cc	_	_
50	гдѣ	_	ADV	WRB	Degree=Pos	63	advmod	_	_
51	бы	_	AUX	RP	Mood=Cnd	63	aux	_	_
52	воевода	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	63	nsubj	_	SpaceAfter=No
53	,	_	PUNCT	PUNCT	_	55	punct	_	_
54	ани	_	CCONJ	CC	Polarity=Neg	55	cc	_	_
55	кашталянъ	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	52	conj	_	SpaceAfter=No
56	,	_	PUNCT	PUNCT	_	58	punct	_	_
57	ани	_	CCONJ	CC	Polarity=Neg	58	cc	_	_
58	староста	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	52	conj	_	SpaceAfter=No
59	,	_	PUNCT	PUNCT	_	61	punct	_	_
60	ани	_	CCONJ	CC	Polarity=Neg	61	cc	_	_
61	маръшалокъ	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	52	conj	_	_
62	не	_	PART	NEG	Polarity=Neg	63	advmod	_	_
63	прибылъ	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	68	advcl	_	SpaceAfter=No
64	,	_	PUNCT	PUNCT	_	63	punct	_	_
65	тогды	_	ADV	RB	Degree=Pos	68	advmod	_	_
66	при	_	ADP	IN	_	68	case	_	_
67	инъшыхъ	_	DET	DT	Case=Loc|Number=Plur|PronType=Tot	68	det	_	_
68	врядникох	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	26	conj	_	_
69	земъскихъ	_	ADJ	JJL	Case=Loc|Degree=Pos|Number=Plur	68	nmod	_	_
70	и	_	CCONJ	CC	_	72	cc	_	_
71	при	_	ADP	IN	_	72	case	_	_
72	собранью	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	68	conj	_	_
73	шляхты	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	72	nmod	_	SpaceAfter=No
74	,	_	PUNCT	PUNCT	_	82	punct	_	_
75	которые	_	PRON	WPA	Case=Nom|Number=Plur|PronType=Rel	82	nsubj	_	_
76	в	_	ADP	IN	_	78	case	_	_
77	онъ	_	DET	DT	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem|Variant=Short	78	det	_	_
78	часъ	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	82	obl	_	_
79	н[а]	_	ADP	IN	_	81	case	_	_
80	тыхъ	_	DET	DT	Case=Loc|Number=Plur|PronType=Dem	81	det	_	_
81	рокохъ	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	82	obl	_	_
82	будуть	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	73	acl:relcl	_	SpaceAfter=No
83	,	_	PUNCT	PUNCT	_	82	punct	_	_
84	присягу	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	89	obj	_	_
85	на	_	ADP	IN	_	87	case	_	_
86	тые	_	DET	DT	Animacy=Inan|Case=Acc|Number=Plur|PronType=Dem	87	det	_	_
87	вряды	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	84	nmod	_	_
88	свои	_	DET	PRP$	Animacy=Inan|Case=Acc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	87	det	_	_
89	учинити	_	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	19	xcomp	_	SpaceAfter=No
90	,	_	PUNCT	PUNCT	_	96	punct	_	_
91	то	_	SCONJ	IN	_	96	mark	_	_
92	ж	_	PART	UH	_	91	fixed	_	_
93	потомъ	_	ADV	NN	Degree=Pos	96	advmod	_	_
94	вряды	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	96	iobj	_	_
95	своими	_	DET	PRP$	Case=Ins|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	94	det	_	_
96	владнути	_	VERB	VBC	Aspect=Imp|VerbForm=Inf|Voice=Act	89	conj	_	_
97	и	_	CCONJ	CC	_	98	cc	_	_
98	шафовати	_	VERB	VBC	Aspect=Imp|VerbForm=Inf|Voice=Act	96	conj	_	SpaceAfter=No
99	.	_	PUNCT	PUNCT	_	19	punct	_	SpacesAfter=\r\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod	color:blue
1	А	_	CCONJ	CC	_	6	cc	_	_
2	за	_	ADP	IN	_	4	case	_	_
3	таким	_	DET	DT	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	4	det	_	_
4	даньем	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	6	obl	_	_
5	знать	_	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	4	nmod	_	_
6	маемъ	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	мы	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	SpaceAfter=No
8	,	_	PUNCT	PUNCT	_	9	punct	_	_
9	г[о]с[по]д[а]ръ	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	vocative	_	SpaceAfter=No
10	,	_	PUNCT	PUNCT	_	9	punct	_	_
11	через	_	ADP	IN	_	12	case	_	_
12	листъ	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	63	obl	_	_
13	нашъ	_	DET	DT	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	12	det	_	_
14	безъ	_	ADP	IN	_	16	case	_	_
15	жадное	_	DET	DT	Case=Gen|Gender=Fem|Number=Sing|PronType=Neg	16	amod	_	_
16	проволоки	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	63	obl	_	SpaceAfter=No
17	,	_	PUNCT	PUNCT	_	22	punct	_	_
18	а	_	CCONJ	CC	_	22	cc	_	_
19	в	_	ADP	IN	_	20	case	_	_
20	небытности	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	22	obl	_	_
21	нашой	_	DET	PRP$	Case=Loc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	20	det	_	_
22	маеть	_	VERB	NN	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
23	воевода	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	22	nsubj	_	_
24	або	_	CCONJ	CC	_	25	cc	_	_
25	кашталянъ	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	23	conj	_	_
26	через	_	ADP	IN	_	27	case	_	_
27	листы	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	29	dep	_	_
28	свои	_	DET	PRP$	Animacy=Inan|Case=Acc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	27	det	_	_
29	старосте	_	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	22	xcomp	_	_
30	поветовому	_	ADJ	JJL	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	29	amod	_	SpaceAfter=No
31	,	_	PUNCT	PUNCT	_	32	punct	_	_
32	врядникомъ	_	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	29	conj	_	_
33	земъскимъ	_	ADJ	JJL	Case=Dat|Degree=Pos|Number=Plur	32	amod	_	_
34	и	_	CCONJ	CC	_	35	cc	_	_
35	шляхте	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	29	conj	_	_
36	того	_	DET	DT	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	37	det	_	_
37	повету	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	35	nmod	_	SpaceAfter=No
38	,	_	PUNCT	PUNCT	_	40	punct	_	_
39	а	_	CCONJ	CC	_	40	cc	_	_
40	староста	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	conj	_	_
41	жомоитъский	_	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	40	amod	_	_
42	або	_	CCONJ	CC	_	44	cc	_	_
43	тежъ	_	PART	UH	_	44	advmod	_	_
44	кашталянъ	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	40	conj	_	_
45	-	_	PUNCT	PUNCT	_	46	punct	_	_
46	тивуномъ	_	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	40	orphan	_	SpaceAfter=No
47	,	_	PUNCT	PUNCT	_	48	punct	_	_
48	шляхте	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	46	conj	_	_
49	и	_	CCONJ	CC	_	55	cc	_	_
50	всякого	_	DET	DT	Case=Gen|Gender=Masc|Number=Sing|PronType=Tot	51	det	_	_
51	стану	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	55	nmod	_	_
52	оное	_	DET	DT	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	53	det	_	_
53	земли	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	55	nmod	_	_
54	Жомоитъское	_	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	53	amod	_	_
55	обывателемъ	_	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	46	conj	_	_
56	также	_	ADV	RB	Degree=Pos	58	advmod	_	_
57	через	_	ADP	IN	_	58	case	_	_
58	листъ	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	40	orphan	_	_
59	свой	_	DET	PRP$	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	58	det	_	_
60	часъ	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	63	obj	_	_
61	ку	_	ADP	IN	_	62	case	_	_
62	зъехан[ь]ю	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	63	obl	_	_
63	зложити	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	6	xcomp	_	SpaceAfter=No
64	,	_	PUNCT	PUNCT	_	65	punct	_	_
65	приславшы	_	VERB	VBG	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	63	advcl	_	_
66	такий	_	DET	DT	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	67	det	_	_
67	листъ	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	65	obj	_	_
68	в	_	ADP	IN	_	70	case	_	_
69	тотъ	_	DET	DT	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	70	det	_	_
70	поветъ	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	65	obl	_	_
71	до	_	ADP	IN	_	72	case	_	_
72	вряду	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	65	obl	_	_
73	кгродского	_	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	72	amod	_	_
74	передъ	_	ADP	IN	_	75	case	_	_
75	часом	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	83	nmod	_	SpaceAfter=No
76	,	_	PUNCT	PUNCT	_	79	punct	_	_
77	на	_	ADP	IN	_	78	case	_	_
78	то	_	PRON	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	79	obl	_	_
79	зложонымъ	_	VERB	JJL	Aspect=Perf|Case=Ins|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	75	acl	_	SpaceAfter=No
80	,	_	PUNCT	PUNCT	_	79	punct	_	_
81	за	_	ADP	IN	_	83	case	_	_
82	чотыри	_	NUM	NN	Case=Acc|NumForm=Word|NumType=Card	83	nummod:gov	_	_
83	недели	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	65	obl	_	SpaceAfter=No
84	.	_	PUNCT	PUNCT	_	6	punct	_	SpacesAfter=\r\n

~~~


