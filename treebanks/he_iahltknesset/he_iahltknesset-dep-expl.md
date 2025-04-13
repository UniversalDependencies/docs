---
layout: base
title:  'Statistics of expl in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `expl`

This relation is universal.

4 nodes (0%) are attached to their parents as `expl`.

3 instances of `expl` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 3 pairs of parts of speech are connected with `expl`: <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (2; 50% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 expl	color:blue
1	מה	מה	PRON	PRON	PronType=Rel	7	nsubj:outer	_	_
2	ש	ש	SCONJ	SCONJ	_	3	mark	_	_
3	הסתייע	הסתייע	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=3|Tense=Past|Voice=Mid	1	acl:relcl	_	_
4	הפעם	הפעם	ADV	ADV	_	3	advmod	_	_
5	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	expl	_	_
6	כאשר	כאשר	SCONJ	SCONJ	_	7	mark	_	_
7	אירעו	אירע	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	_
8	אותן	אותו	PRON	PRON	Definite=Def|Gender=Fem|Number=Plur|Person=3|PronType=Prs	9	det	_	_
9	טרגדיות	טרגדיה	NOUN	NOUN	Gender=Fem|Number=Plur	7	nsubj	_	_
10	ו	ו	CCONJ	CCONJ	_	11	cc	_	_
11	התברר	התברר	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=3|Tense=Past|Voice=Mid	7	conj	_	_
12	ל	ל	ADP	ADP	Definite=Def|PronType=Art	13	case	_	_
13	אנשים	איש	NOUN	NOUN	Gender=Masc|Number=Plur	11	obl	_	_
14	ש	ש	SCONJ	SCONJ	_	20	mark	_	_
15	ה	ה	DET	DET	Definite=Def|PronType=Art	16	det	_	_
16	דבר	דבר	NOUN	NOUN	Gender=Masc|Number=Sing	20	nsubj	_	_
17	ה	ה	DET	DET	Definite=Def|PronType=Art	18	det	_	_
18	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	16	det	_	_
19	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	cop	_	_
20	נחוץ	נחוץ	ADJ	ADJ	Gender=Masc|Number=Sing	11	csubj	_	SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 27 expl	color:blue
1	גם	גם	ADV	ADV	_	2	advmod	_	_
2	הצלחת	הצלחה	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=2|Tense=Past|Voice=Act	0	root	_	_
3	תוך	תוך	ADP	ADP	_	5	case	_	_
4	כדי	כדי	ADP	ADP	_	3	fixed	_	_
5	עבודה	עבודה	NOUN	NOUN	Gender=Fem|Number=Sing	2	obl	_	_
6	לעשות	עשה	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	2	xcomp	_	_
7	את	את	ADP	ADP	Case=Acc	9	case	_	_
8	ה	ה	DET	DET	Definite=Def|PronType=Art	9	det	_	_
9	תואר	תואר	NOUN	NOUN	Gender=Masc|Number=Sing	6	obj	_	_
10	ה	ה	DET	DET	Definite=Def|PronType=Art	11	det	_	_
11	שני	שני	ADJ	ADJ	Gender=Masc|Number=Sing	9	amod	_	_
12	,	,	PUNCT	PUNCT	_	9	punct	_	_
13	לעשות	עשה	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	6	conj	_	_
14	את	את	ADP	ADP	Case=Acc	16	case	_	_
15	ה	ה	DET	DET	Definite=Def|PronType=Art	16	det	_	_
16	דוקטורט	דוקטורט	NOUN	NOUN	Gender=Masc|Number=Sing	13	obj	_	_
17	של	של	ADP	ADP	Case=Gen	18	case	_	_
18	ך	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=2|PronType=Prs	16	nmod:poss	_	_
19	ו	ו	CCONJ	CCONJ	_	20	cc	_	_
20	להצטיין	הצטיין	VERB	VERB	HebBinyan=HITPAEL|VerbForm=Inf|Voice=Act	13	conj	_	_
21	ב	ב	ADP	ADP	Definite=Def|PronType=Art	22	case	_	_
22	דוקטורט	דוקטורט	NOUN	NOUN	Gender=Masc|Number=Sing	20	obl	_	_
23	של	של	ADP	ADP	Case=Gen	24	case	_	_
24	ך	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=2|PronType=Prs	22	nmod:poss	_	_
25	,	,	PUNCT	PUNCT	_	22	punct	_	_
26	ו	ו	CCONJ	CCONJ	_	29	cc	_	_
27	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	29	expl	_	_
28	לא	לא	ADV	ADV	Polarity=Neg	29	advmod	_	_
29	דבר	דבר	NOUN	NOUN	Gender=Masc|Number=Sing	20	conj	_	_
30	של	של	ADP	ADP	Case=Gen	31	case	_	_
31	מה	מה	PRON	PRON	PronType=Int	29	nmod:poss	_	_
32	ב	ב	ADP	ADP	_	33	case	_	_
33	כך	כך	PRON	PRON	PronType=Dem	29	nmod	_	_
34	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 59	bgColor:blue
# visual-style 59	fgColor:white
# visual-style 56	bgColor:blue
# visual-style 56	fgColor:white
# visual-style 56 59 expl	color:blue
1	ו	ו	CCONJ	CCONJ	_	3	cc	_	_
2	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
3	מרגש	ריגש	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
4	אות	את	ADP	ADP	Case=Acc	5	case	_	_
5	י	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=1|PronType=Prs	3	obj	_	_
6	ש	ש	SCONJ	SCONJ	_	8	mark	_	_
7	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj:pass	_	_
8	נעשה	נעשה	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	3	ccomp	_	_
9	על	על	ADP	ADP	_	12	case	_	SpaceAfter=No
10	-	-	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
11	יד	יד	NOUN	NOUN	Gender=Fem|Number=Sing	9	fixed	_	_
12	ך	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=2|PronType=Prs	8	obl	_	_
13	ב	ב	ADP	ADP	Definite=Def|PronType=Art	14	case	_	_
14	אופן	אופן	NOUN	NOUN	Gender=Masc|Number=Sing	8	obl	_	_
15	ה	ה	DET	DET	Definite=Def|PronType=Art	16	det	_	_
16	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	det	_	_
17	,	,	PUNCT	PUNCT	_	20	punct	_	_
18	ש	ש	SCONJ	SCONJ	_	20	mark	_	_
19	גם	גם	ADV	ADV	_	20	advmod	_	_
20	השכלת	השכיל	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=2|Tense=Past|Voice=Act	14	acl:relcl	_	_
21	לשלב	שילב	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	20	xcomp	_	_
22	תרבות	תרבות	NOUN	NOUN	Gender=Fem|Number=Sing	21	obj	_	_
23	כללית	כללי	ADJ	ADJ	Gender=Fem|Number=Sing	22	amod	_	SpaceAfter=No
24	,	,	PUNCT	PUNCT	_	28	punct	_	_
25	את	את	ADP	ADP	Case=Acc	28	case	_	_
26	כל	כול	DET	DET	Definite=Cons|PronType=Tot	28	det	_	_
27	ה	ה	DET	DET	Definite=Def|PronType=Art	28	det	_	_
28	ידע	ידע	NOUN	NOUN	Gender=Masc|Number=Sing	21	obj	_	_
29	ה	ה	DET	DET	Definite=Def|PronType=Art	30	det	_	_
30	פילוסופי	פילוסופי	ADJ	ADJ	Gender=Masc|Number=Sing	28	amod	_	_
31	של	של	ADP	ADP	Case=Gen	32	case	_	_
32	ך	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=2|PronType=Prs	28	nmod:poss	_	_
33	,	,	PUNCT	PUNCT	_	35	punct	_	_
34	ה	ה	DET	DET	Definite=Def|PronType=Art	35	det	_	_
35	אקדמי	אקדמי	ADJ	ADJ	Gender=Masc|Number=Sing	28	amod	_	_
36	,	,	PUNCT	PUNCT	_	38	punct	_	_
37	ה	ה	DET	DET	Definite=Def|PronType=Art	38	det	_	_
38	ידע	ידע	NOUN	NOUN	Gender=Masc|Number=Sing	28	conj	_	_
39	ש	ש	SCONJ	SCONJ	_	40	mark	_	_
40	הבאת	הביא	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=2|Tense=Past|Voice=Act	38	acl:relcl	_	_
41	,	,	PUNCT	PUNCT	_	42	punct	_	_
42	מה	מה	PRON	PRON	PronType=Rel	38	parataxis	_	_
43	ש	ש	SCONJ	SCONJ	_	44	mark	_	_
44	נקרא	נקרא	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Mid	42	acl:relcl	_	_
45	מ	מ	ADP	ADP	_	47	case	_	_
46	ה	ה	DET	DET	Definite=Def|PronType=Art	47	det	_	_
47	מוסדות	מוסד	NOUN	NOUN	Gender=Masc|Number=Plur	44	obl	_	_
48	ה	ה	DET	DET	Definite=Def|PronType=Art	49	det	_	_
49	אקדמיים	אקדמי	ADJ	ADJ	Gender=Masc|Number=Plur	47	amod	_	_
50	,	,	PUNCT	PUNCT	_	54	punct	_	_
51	ביחד	ביחד	ADV	ADV	_	54	advmod	_	_
52	עם	עם	ADP	ADP	_	54	case	_	_
53	אותם	אותו	PRON	PRON	Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	54	det	_	_
54	מקורות	מקור	NOUN	NOUN	Gender=Masc|Number=Plur	44	obl	_	_
55	ש	ש	SCONJ	SCONJ	_	56	mark	_	_
56	אנחנו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1|PronType=Prs	54	acl:relcl	_	_
57	–	–	PUNCT	PUNCT	_	56	punct	_	_
58	לפחות	לפחות	ADV	ADV	_	59	advmod	_	_
59	אני	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=1|PronType=Prs	56	expl	_	SpaceAfter=No
60	,	,	PUNCT	PUNCT	_	59	punct	_	_
61	אני	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=1|PronType=Prs	62	nsubj	_	_
62	אומרת	אמר	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	59	reparandum	_	_
63	את	את	ADP	ADP	Case=Acc	64	case	_	_
64	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	62	obj	_	_
65	מ	מ	ADP	ADP	_	67	case	_	_
66	ה	ה	DET	DET	Definite=Def|PronType=Art	67	det	_	_
67	מקומות	מקום	NOUN	NOUN	Gender=Masc|Number=Plur	62	obl	_	_
68	ש	ש	SCONJ	SCONJ	_	70	mark	_	_
69	אני	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=1|PronType=Prs	70	nsubj	_	_
70	באה	בא	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	67	acl:relcl	_	_
71	מ	מ	ADP	ADP	_	72	case	_	_
72	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	70	obl	_	_
73	–	–	PUNCT	PUNCT	_	75	punct	_	_
74	אותם	אותו	PRON	PRON	Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	75	det	_	_
75	מקורות	מקור	NOUN	NOUN	Gender=Masc|Number=Plur	54	parataxis	_	_
76	ש	ש	SCONJ	SCONJ	_	87	mark	_	_
77	ה	ה	DET	DET	Definite=Def|PronType=Art	78	det	_	_
78	אופן	אופן	NOUN	NOUN	Gender=Masc|Number=Sing	87	nsubj	_	_
79	ש	ש	SCONJ	SCONJ	_	82	mark	_	_
80	ב	ב	ADP	ADP	_	81	case	_	_
81	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	82	obl	_	_
82	לימדו	לימד	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Plur|Person=3|Tense=Past|Voice=Act	78	acl:relcl	_	_
83	אות	את	ADP	ADP	Case=Acc	84	case	_	_
84	נו	הוא	PRON	PRON	Case=Acc|Gender=Fem,Masc|Number=Plur|Person=1|PronType=Prs	82	obj	_	_
85	אות	את	ADP	ADP	Case=Acc	86	case	_	_
86	ם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	82	obj	_	_
87	גרם	גרם	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	75	acl:relcl	_	_
88	ל	ל	ADP	ADP	_	89	case	_	_
89	נו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1|PronType=Prs	87	obl	_	_
90	ל	ל	ADP	ADP	_	91	case	_	_
91	ניכור	ניכור	NOUN	NOUN	Gender=Masc|Number=Sing	87	obl	_	_
92	,	,	PUNCT	PUNCT	_	93	punct	_	_
93	גרם	גרם	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	87	conj	_	_
94	ל	ל	ADP	ADP	_	95	case	_	_
95	נו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1|PronType=Prs	93	obl	_	_
96	ל	ל	ADP	ADP	_	97	case	_	_
97	חוסר	חוסר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	93	obl	_	_
98	רצון	רצון	NOUN	NOUN	Gender=Masc|Number=Sing	97	compound	_	_
99	להתעמק	התעמק	VERB	VERB	HebBinyan=HITPAEL|VerbForm=Inf|Voice=Act	98	acl	_	SpaceAfter=No
100	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


