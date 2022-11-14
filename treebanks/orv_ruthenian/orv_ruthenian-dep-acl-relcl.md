---
layout: base
title:  'Statistics of acl:relcl in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-acl.html">acl</a></tt>.

31 nodes (1%) are attached to their parents as `acl:relcl`.

30 instances of `acl:relcl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.258064516129.

The following 7 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (17; 55% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (5; 16% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (3; 10% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (3; 10% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 29 acl:relcl	color:blue
1	И	_	CCONJ	CC	_	5	cc	_	_
2	то	_	PRON	IN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	_	_
3	ест	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	наша	_	DET	DT	Case=Nom|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	det	_	_
5	волност[ь]	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	,	_	PUNCT	PUNCT	_	14	punct	_	_
7	которою	_	PRON	WPA	Case=Ins|Gender=Fem|Number=Sing|PronType=Rel	14	iobj	_	_
8	се	_	PRON	PRP	Clitic=Yes|PronType=Prs|Reflex=Yes	14	expl	_	_
9	мы	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	14	nsubj	_	_
10	межи	_	ADP	IN	_	12	case	_	_
11	иншыми	_	DET	DT	Case=Ins|Number=Plur|PronType=Tot	12	det	_	_
12	народы	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	14	obl	_	_
13	хрестиянскими	_	ADJ	JJL	Case=Ins|Degree=Pos|Number=Plur	12	amod	_	_
14	хвалимъ	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	SpaceAfter=No
15	,	_	PUNCT	PUNCT	_	34	punct	_	_
16	же	_	SCONJ	IN	_	34	mark	_	_
17	пана	_	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	34	obj	_	SpaceAfter=No
18	,	_	PUNCT	PUNCT	_	29	punct	_	_
19	ижбы	_	SCONJ	IN	Mood=Cnd	29	mark	_	_
20	водле	_	ADP	IN	_	21	case	_	_
21	воли	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	29	obl	_	_
22	своее	_	DET	PRP$	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	21	det	_	SpaceAfter=No
23	,	_	PUNCT	PUNCT	_	27	punct	_	_
24	а	_	CCONJ	CC	_	27	cc	_	_
25	не	_	PART	NEG	Polarity=Neg	27	advmod	_	_
26	водле	_	ADP	IN	_	27	case	_	_
27	правъ	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	21	conj	_	_
28	наших	_	DET	DT	Case=Gen|Number=Plur|Poss=Yes|PronType=Prs	27	det	_	_
29	пановал	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	17	acl:relcl	_	SpaceAfter=No
30	,	_	PUNCT	PUNCT	_	29	punct	_	_
31	над	_	ADP	IN	_	32	case	_	_
32	собою	_	PRON	NN	Case=Ins|PronType=Prs|Reflex=Yes	34	obl	_	_
33	не	_	PART	NEG	Polarity=Neg	34	advmod	_	_
34	маем	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	14	ccomp	_	SpaceAfter=No
35	,	_	PUNCT	PUNCT	_	38	punct	_	_
36	а	_	CCONJ	CC	_	38	cc	_	_
37	яко	_	SCONJ	IN	_	38	cc	_	_
38	славы	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	46	obj	_	_
39	учстивое	_	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	38	amod	_	SpaceAfter=No
40	,	_	PUNCT	PUNCT	_	42	punct	_	_
41	такъ	_	CCONJ	CC	_	42	cc	_	_
42	живота	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	38	conj	_	_
43	и	_	CCONJ	CC	_	44	cc	_	_
44	маетности	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	42	conj	_	_
45	волно	_	ADV	RB	Degree=Pos	46	advmod	_	_
46	уживаем	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	34	conj	_	SpaceAfter=No
47	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 35 acl:relcl	color:blue
1	А	_	CCONJ	_	_	27	cc	_	_
2	гдѣ	_	ADV	_	Degree=Pos	6	advmod	_	_
3	бы	_	AUX	_	Mood=Cnd	6	aux	_	_
4	на	_	ADP	_	_	5	case	_	_
5	судство	_	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	6	obl	_	_
6	обрали	_	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	27	advcl	_	_
7	подсудка	_	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
8	або	_	CCONJ	_	_	9	cc	_	_
9	писара	_	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	7	conj	_	_
10	земского	_	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	SpaceAfter=No
11	;	_	PUNCT	_	_	6	punct	_	_
12	тогды	_	ADV	_	Degree=Pos	27	advmod	_	_
13	на	_	ADP	_	_	15	case	_	_
14	тое	_	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	15	det	_	_
15	мѣстце	_	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	23	obl	_	_
16	тамъ	_	ADV	_	Degree=Pos	23	advmod	_	_
17	же	_	PART	_	_	16	advmod	_	_
18	за	_	ADP	_	_	19	case	_	_
19	разомъ	_	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	23	obl	_	_
20	на	_	ADP	_	_	22	case	_	_
21	тотъ	_	DET	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	22	det	_	_
22	врядъ	_	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	23	obl	_	_
23	обобравшы	_	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	27	advcl	_	_
24	къ	_	ADP	_	_	25	case	_	_
25	намъ	_	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	26	obl	_	_
26	послати	_	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	27	xcomp	_	_
27	мають	_	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
28	;	_	PUNCT	_	_	43	punct	_	_
29	а	_	CCONJ	_	_	43	cc	_	_
30	тотъ	_	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	43	nsubj	_	SpaceAfter=No
31	,	_	PUNCT	_	_	35	punct	_	_
32	кому	_	PRON	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	35	iobj	_	_
33	тотъ	_	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	34	det	_	_
34	врядъ	_	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	35	nsubj:pass	_	_
35	дамо	_	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	30	acl:relcl	_	SpaceAfter=No
36	,	_	PUNCT	_	_	35	punct	_	_
37	потомъ	_	ADV	_	Degree=Pos	43	advmod	_	_
38	на	_	ADP	_	_	40	case	_	_
39	першыхъ	_	ADJ	_	Case=Loc|Number=Plur|NumForm=Word|NumType=Ord	40	amod	_	_
40	рокохъ	_	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	43	obl	_	_
41	судовыхъ	_	ADJ	_	Case=Loc|Degree=Pos|Number=Plur	40	amod	_	_
42	будеть	_	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	43	cop	_	_
43	повиненъ	_	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	27	conj	_	_
44	первей	_	ADV	_	Degree=Cmp	64	advmod	_	_
45	на	_	ADP	_	_	46	case	_	_
46	мѣстцу	_	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	64	obl	_	_
47	тамъ	_	ADV	_	Degree=Pos	64	advmod	_	_
48	передъ	_	ADP	_	_	50	case	_	_
49	тымъ	_	DET	_	Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	50	det	_	_
50	воеводою	_	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	64	obl	_	_
51	або	_	CCONJ	_	_	52	cc	_	_
52	кашталяномъ	_	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	50	conj	_	_
53	и	_	CCONJ	_	_	55	cc	_	_
54	передъ	_	ADP	_	_	55	case	_	_
55	старостою	_	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	50	conj	_	_
56	оного	_	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	57	det	_	_
57	суду	_	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	55	nmod	_	_
58	такъ	_	ADV	_	Degree=Pos	64	advmod	_	SpaceAfter=No
59	,	_	PUNCT	_	_	62	punct	_	_
60	яко	_	SCONJ	_	_	62	mark	_	_
61	вышей	_	ADV	_	Degree=Cmp	62	advmod	_	_
62	описано	_	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	58	advcl	_	SpaceAfter=No
63	,	_	PUNCT	_	_	62	punct	_	_
64	присегнути	_	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	43	xcomp	_	SpaceAfter=No
65	,	_	PUNCT	_	_	70	punct	_	_
66	тожъ	_	CCONJ	_	_	70	cc	_	_
67	потомъ	_	ADV	_	Degree=Pos	70	advmod	_	_
68	врядомъ	_	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	70	obj	_	_
69	своимъ	_	DET	_	Case=Ins|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	68	det	_	_
70	владнути	_	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	64	conj	_	_
71	и	_	CCONJ	_	_	72	cc	_	_
72	справавовати	_	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	70	conj	_	SpaceAfter=No
73	.	_	PUNCT	_	_	27	punct	_	SpacesAfter=\r\n

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 acl:relcl	color:blue
1	А	_	CCONJ	CC	_	49	cc	_	_
2	мы	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	49	nsubj	_	_
3	с	_	ADP	IN	_	5	case	_	_
4	тыхъ	_	DET	DT	Case=Gen|Number=Plur|PronType=Dem	5	det	_	_
5	чотырохъ	_	NUM	NN	Case=Gen|NumForm=Word|NumType=Card	16	obl	_	_
6	одного	_	NUM	CD	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	16	obj	_	SpaceAfter=No
7	,	_	PUNCT	PUNCT	_	11	punct	_	_
8	который	_	PRON	WPA	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	11	nsubj	_	_
9	се	_	PRON	VBC	Clitic=Yes|PronType=Prs|Reflex=Yes	11	expl	_	_
10	намъ	_	PRON	PRP	Case=Dat|Number=Plur|Person=1|PronType=Prs	11	iobj	_	_
11	видети	_	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	6	acl:relcl	_	_
12	и	_	CCONJ	CC	_	13	cc	_	_
13	подобати	_	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	11	conj	_	_
14	будеть	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	11	aux	_	SpaceAfter=No
15	,	_	PUNCT	PUNCT	_	11	punct	_	_
16	выбравши	_	VERB	VBC	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	24	advcl	_	SpaceAfter=No
17	,	_	PUNCT	PUNCT	_	16	punct	_	_
18	на	_	ADP	IN	_	19	case	_	_
19	местъцо	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	24	obl	_	_
20	того	_	DET	DT	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	22	det	_	_
21	змерълого	_	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	22	amod	_	_
22	врядника	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	19	nmod	_	_
23	неотволочне	_	ADV	RB	Degree=Pos	24	advmod	_	_
24	установити	_	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	49	xcomp	_	_
25	и	_	CCONJ	CC	_	47	cc	_	_
26	привильемъ	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	47	iobj	_	_
27	нашимъ	_	DET	DT	Case=Ins|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	26	det	_	_
28	на	_	ADP	IN	_	30	case	_	_
29	тотъ	_	DET	DT	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	30	det	_	_
30	вряд	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	47	obl	_	_
31	до	_	ADP	IN	_	32	case	_	_
32	живота	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	47	obl	_	_
33	его	_	DET	DT	Poss=Yes|PronType=Prs	32	det	_	_
34	альбо	_	CCONJ	CC	_	36	cc	_	_
35	до	_	ADP	IN	_	36	case	_	_
36	вывышенья	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	32	conj	_	_
37	з	_	ADP	IN	_	38	case	_	_
38	ласки	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	36	nmod	_	_
39	нашое	_	DET	DT	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	38	det	_	_
40	на	_	ADP	IN	_	44	case	_	_
41	инший	_	DET	DT	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	44	det	_	_
42	який	_	DET	WPA	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	44	det	_	_
43	вышъшый	_	ADJ	ORD	Animacy=Inan|Case=Acc|Degree=Sup|Gender=Masc|Number=Sing	44	amod	_	_
44	вряд	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	47	obl	_	_
45	або	_	CCONJ	CC	_	46	cc	_	_
46	достоеньство	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	44	conj	_	_
47	утвердити	_	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	24	conj	_	_
48	его	_	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	47	obj	_	_
49	маемъ	_	VERB	NN	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
50	.	_	PUNCT	PUNCT	_	49	punct	_	SpacesAfter=\r\n

~~~


