---
layout: base
title:  'Statistics of goeswith in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `goeswith`

This relation is universal.

1 nodes (0%) are attached to their parents as `goeswith`.

1 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `goeswith`: <tt><a href="he_iahltwiki-pos-X.html">X</a></tt>-<tt><a href="he_iahltwiki-pos-X.html">X</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 46 goeswith	color:blue
1	יהודה	יהודה	PROPN	PROPN	_	59	nsubj	_	Entity=(LOC
2	ו	ו	CCONJ	CCONJ	_	3	cc	_	_
3	שומרון	שומרון	PROPN	PROPN	_	1	conj	_	Entity=LOC)
4	(	(	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
5	לפי	לפי	ADP	ADP	_	7	case	_	_
6	ה	ה	DET	DET	Definite=Def|PronType=Art	7	det	_	_
7	מינוח	מינוח	NOUN	NOUN	Gender=Masc|Number=Sing	1	nmod	_	_
8	ה	ה	DET	DET	Definite=Def|PronType=Art	9	det	_	_
9	ישראלי	ישראלי	ADJ	ADJ	Gender=Masc|Number=Sing	7	amod	_	_
10	;	;	PUNCT	PUNCT	_	12	punct	_	_
11	ב	ב	ADP	ADP	_	12	case	_	_
12	ראשי	ראש	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	15	nmod	_	_
13	תיבות	תיבה	NOUN	NOUN	Gender=Fem|Number=Plur	12	compound	_	SpaceAfter=No
14	:	:	PUNCT	PUNCT	_	12	punct	_	_
15	יוֹ"ש	יוֹ"ש	PROPN	PROPN	Abbr=Yes	1	appos	_	Entity=(LOC)
16	או	או	CCONJ	CCONJ	_	17	cc	_	_
17	אָיוֹ"ש	אָיוֹ"ש	PROPN	PROPN	Abbr=Yes	15	conj	_	Entity=(LOC)|SpaceAfter=No
18	)	)	PUNCT	PUNCT	_	15	punct	_	SpaceAfter=No
19	,	,	PUNCT	PUNCT	_	30	punct	_	_
20	ו	ו	CCONJ	CCONJ	_	30	cc	_	_
21	לפי	לפי	ADP	ADP	_	23	case	_	_
22	ה	ה	DET	DET	Definite=Def|PronType=Art	23	det	_	_
23	מינוח	מינוח	NOUN	NOUN	Gender=Masc|Number=Sing	30	nmod	_	_
24	ה	ה	SCONJ	SCONJ	_	25	mark	_	_
25	מקובל	התקבל	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	23	acl:relcl	_	_
26	ב	ב	ADP	ADP	Definite=Def|PronType=Art	27	case	_	_
27	עולם	עולם	NOUN	NOUN	Gender=Masc|Number=Sing	25	obl	_	_
28	:	:	PUNCT	PUNCT	_	23	punct	_	_
29	ה	ה	DET	DET	Definite=Def|PronType=Art	30	det	_	Entity=(LOC
30	גדה	גדה	PROPN	PROPN	_	1	conj	_	_
31	ה	ה	DET	DET	Definite=Def|PronType=Art	32	det	_	_
32	מערבית	מערבי	ADJ	ADJ	Gender=Fem|Number=Sing	30	amod	_	Entity=LOC)
33	(	(	PUNCT	PUNCT	_	37	punct	_	SpaceAfter=No
34	ב	ב	ADP	ADP	_	35	case	_	_
35	ערבית	ערבית	PROPN	PROPN	_	37	dep	_	Entity=(ANG)
36	:	:	PUNCT	PUNCT	_	35	punct	_	_
37	الضّفّة	الضّفّة	X	X	Foreign=Yes	30	parataxis	_	_
38	الغربيّة	الغربيّة	X	X	Foreign=Yes	37	flat	_	SpaceAfter=No
39	,	,	PUNCT	PUNCT	_	41	punct	_	_
40	ב	ב	ADP	ADP	_	41	case	_	_
41	תעתיק	תעתיק	NOUN	NOUN	Gender=Masc|Number=Sing	45	nmod	_	_
42	מדויק	מדויק	ADJ	ADJ	Gender=Masc|Number=Sing	41	amod	_	SpaceAfter=No
43	:	:	PUNCT	PUNCT	_	41	punct	_	_
44	"	"	PUNCT	PUNCT	_	45	punct	_	SpaceAfter=No
45	א	א(ל)-צ'פה	X	X	Foreign=Yes|Typo=Yes	37	parataxis	_	_
46	(ל)-צ'פה	_	X	X	_	45	goeswith	_	_
47	אלע'רביה	אלע'רביה	X	X	Foreign=Yes	45	flat	_	SpaceAfter=No
48	"	"	PUNCT	PUNCT	_	45	punct	_	SpaceAfter=No
49	,	,	PUNCT	PUNCT	_	53	punct	_	_
50	ב	ב	ADP	ADP	_	51	case	_	_
51	אנגלית	אנגלית	PROPN	PROPN	_	53	dep	_	Entity=(ANG)
52	:	:	PUNCT	PUNCT	_	51	punct	_	_
53	The	The	X	X	Foreign=Yes	37	parataxis	_	_
54	West	West	X	X	Foreign=Yes	53	flat	_	_
55	Bank	Bank	X	X	Foreign=Yes	53	flat	_	SpaceAfter=No
56	)	)	PUNCT	PUNCT	_	37	punct	_	SpaceAfter=No
57	,	,	PUNCT	PUNCT	_	30	punct	_	_
58	היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	59	cop	_	_
59	טריטוריה	טריטוריה	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
60	ש	ש	SCONJ	SCONJ	_	63	mark	_	_
61	בין	בין	ADP	ADP	_	63	case	_	_
62	ה	ה	DET	DET	Definite=Def|PronType=Art	63	det	_	Entity=(MISC
63	קו	קו	PROPN	PROPN	_	59	acl:relcl	_	_
64	ה	ה	DET	DET	Definite=Def|PronType=Art	65	det	_	_
65	ירוק	ירוק	ADJ	ADJ	Gender=Masc|Number=Sing	63	amod	_	Entity=MISC)
66	ל	ל	ADP	ADP	_	67	case	_	_
67	נהר	נהר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	63	conj	_	Entity=(LOC
68	ה	ה	DET	DET	Definite=Def|PronType=Art	69	det	_	_
69	ירדן	ירדן	PROPN	PROPN	_	67	compound	_	Entity=LOC)
70	,	,	PUNCT	PUNCT	_	72	punct	_	_
71	ה	ה	SCONJ	SCONJ	_	72	mark	_	_
72	מוחזקת	הוחזק	VERB	VERB	Gender=Fem|HebBinyan=HUFAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	59	acl:relcl	_	_
73	על	על	ADP	ADP	_	75	case	_	_
74	ידי	יד	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Plur	73	fixed	_	_
75	ישראל	ישראל	PROPN	PROPN	_	72	obl	_	Entity=(GPE)
76	ב	ב	ADP	ADP	_	77	case	_	_
77	מעמד	מעמד	NOUN	NOUN	Gender=Masc|Number=Sing	72	obl	_	_
78	של	של	ADP	ADP	Case=Gen	79	case	_	_
79	תפיסה	תפיסה	NOUN	NOUN	Gender=Fem|Number=Sing	77	nmod:poss	_	_
80	לוחמתית	לוחמתי	ADJ	ADJ	Gender=Fem|Number=Sing	79	amod	_	_
81	מאז	מאז	ADP	ADP	_	82	case	_	_
82	מלחמת	מלחמה	PROPN	PROPN	Definite=Cons	72	obl	_	Entity=(EVE
83	ששת	שש	NUM	NUM	Definite=Cons|Gender=Masc|NumType=Card	85	nummod	_	_
84	ה	ה	DET	DET	Definite=Def|PronType=Art	85	det	_	_
85	ימים	יום	PROPN	PROPN	_	82	compound	_	Entity=EVE)
86	(	(	PUNCT	PUNCT	_	87	punct	_	SpaceAfter=No
87	1967	1967	NUM	NUM	_	82	nmod:unmarked	_	Entity=(TIMEX)|SpaceAfter=No|TemporalNPAdjunct=Yes
88	)	)	PUNCT	PUNCT	_	87	punct	_	SpaceAfter=No
89	,	,	PUNCT	PUNCT	_	91	punct	_	_
90	עת	עת	SCONJ	SCONJ	_	91	mark	_	_
91	נכבשה	נכבש	VERB	VERB	Gender=Fem|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	82	acl:relcl	_	_
92	מידי	מידי	ADP	ADP	_	93	case	_	_
93	ירדן	ירדן	PROPN	PROPN	_	91	obl	_	Entity=(GPE)|SpaceAfter=No
94	,	,	PUNCT	PUNCT	_	96	punct	_	_
95	ש	ש	SCONJ	SCONJ	_	96	mark	_	_
96	שלטה	שלט	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	93	acl:relcl	_	_
97	ב	ב	ADP	ADP	_	98	case	_	_
98	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	96	obl	_	_
99	מאז	מאז	ADP	ADP	_	100	case	_	_
100	מלחמת	מלחמה	PROPN	PROPN	Definite=Cons	96	obl	_	Entity=(EVE
101	ה	ה	DET	DET	Definite=Def|PronType=Art	102	det	_	_
102	עצמאות	עצמאות	PROPN	PROPN	_	100	compound	_	Entity=EVE)
103	(	(	PUNCT	PUNCT	_	104	punct	_	SpaceAfter=No
104	1948	1948	NUM	NUM	_	100	nmod:unmarked	_	Entity=(TIMEX)|SpaceAfter=No|TemporalNPAdjunct=Yes
105	)	)	PUNCT	PUNCT	_	104	punct	_	SpaceAfter=No
106	.	.	PUNCT	PUNCT	_	59	punct	_	_

~~~


