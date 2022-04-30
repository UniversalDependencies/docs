---
layout: base
title:  'Statistics of det in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="akk_riao-dep-det-poss.html">det:poss</a></tt>.

54 nodes (0%) are attached to their parents as `det`.

54 instances of `det` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `det`: <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (49; 91% instances), <tt><a href="akk_riao-pos-ADP.html">ADP</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (3; 6% instances), <tt><a href="akk_riao-pos-DET.html">DET</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det	color:blue
1	ina	ina	ADP	PRP	_	2	case	_	ina
2	ūme	ūmu	NOUN	N	Case=Gen|Gender=Masc|NounBase=Suffixal|Number=Sing	13	obl	_	UD.MEŠ-šu-ma
3	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	2	det	_	_
4	ma	_	PART	_	_	2	dep	_	_
5	ina	ina	ADP	PRP	_	6	case	_	ina
6	pî	pû	NOUN	N	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	13	obl	_	pi-i
7	ilāni	ilu	NOUN	N	Gender=Masc|Number=Plur	6	nmod:poss	_	DINGIR.MEŠ
8	rabûti	rabû	ADJ	AJ	Gender=Masc|Number=Plur	7	amod	_	GAL.MEŠ
9	šarrūt	_	NOUN	_	Gender=Fem|NounBase=Suffixal|Number=Sing	13	nsubj	_	_
10	ī	_	PRON	_	Number=Sing|Person=1	9	det:poss	_	_
11	bēlūt	_	NOUN	_	Gender=Fem|NounBase=Suffixal|Number=Sing	9	conj	_	_
12	ī	_	PRON	_	Number=Sing|Person=1	11	det:poss	_	_
13	ūṣâ	waṣû	VERB	V	Gender=Fem|Mood=Ind|Number=Plur|Person=3|Tense=Past|Ventive=Yes|VerbForm=Fin|VerbStem=G	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 det	color:blue
1	battubatte	battubattu/e	ADP	PRP	_	4	obl	_	bat-tu-bat-te-ši-na
2	šina	_	PRON	_	Gender=Fem|Number=Plur|Person=3	1	det	_	_
3	būrāti	būrtu	NOUN	N	Gender=Fem|NounBase=Free|Number=Plur	4	obj	_	_
4	uhtappiʾū	_	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|VerbStem=D	0	root	_	_

~~~


~~~ conllu
# visual-style 110	bgColor:blue
# visual-style 110	fgColor:white
# visual-style 109	bgColor:blue
# visual-style 109	fgColor:white
# visual-style 109 110 det	color:blue
1	ēkal	ēkallu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	0	root	_	E₂.GAL
2	Aššur-naṣir-apli	Aššur-naṣir-apli_II	PROPN	RN	Gender=Masc	1	nmod:poss	_	{m}aš-šur-PAP-A
3	iššak	iššiakku	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	_	ŠID
4	Aššur	Aššur	PROPN	DN	Gender=Masc	3	nmod:poss	_	aš-šur
5	nišīt	nišītu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	2	appos	_	ni-šit
6	Enlil	Enlil	PROPN	DN	Gender=Masc	5	nmod:poss	_	{d}BAD
7	u	u	CCONJ	CNJ	_	8	cc	_	u
8	Ninurta	Ninurta	PROPN	DN	Gender=Masc	6	conj	_	{d}MAŠ
9	narām	narāmu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	_	na-ra-am
10	Anim	Anu	PROPN	DN	Case=Gen|Gender=Masc	9	nmod:poss	_	{d}a-nim
11	u	u	CCONJ	CNJ	_	12	cc	_	u₃
12	Dagan	Dagan	PROPN	DN	Gender=Masc	10	conj	_	{d}da-gan
13	kašūš	kašūšu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	_	ka-šu-uš
14	ilāni	ilu	NOUN	N	Gender=Masc|Number=Plur	13	nmod:poss	_	DINGIR.MEŠ
15	rabûti	rabû	ADJ	AJ	Gender=Masc|Number=Plur	14	amod	_	GAL.MEŠ
16	šarru	šarru	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	_	MAN
17	dannu	dannu	ADJ	AJ	Case=Nom|Gender=Masc|Number=Sing	16	amod	_	dan-nu
18	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	_	MAN
19	kiššati	kiššatu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Free|Number=Sing	18	nmod:poss	_	ŠU₂
20	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	_	MAN
21	māt	mātu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	20	nmod:poss	_	KUR
22	Aššur	Aššur	PROPN	GN	Gender=Masc	21	nmod:poss	_	aš-šur
23	mār	māru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	_	DUMU
24	Tukulti-Ninurta	Tukulti-Ninurta_II	PROPN	RN	Gender=Masc	23	nmod:poss	_	GISKIM-{d}nin-urta
25	šarri	šarru	NOUN	N	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	24	appos	_	MAN
26	rabê	rabû	ADJ	AJ	Case=Gen|Gender=Masc|Number=Sing	25	amod	_	GAL-e
27	šarri	šarru	NOUN	N	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	24	appos	_	MAN
28	danni	dannu	ADJ	AJ	Case=Gen|Gender=Masc|Number=Sing	27	amod	_	dan-ni
29	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	24	appos	_	MAN
30	kiššati	kiššatu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Free|Number=Sing	29	nmod:poss	_	ŠU₂
31	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	24	appos	_	MAN
32	māt	mātu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	31	nmod:poss	_	KUR
33	Aššur	Aššur	PROPN	GN	Gender=Masc	32	nmod:poss	_	aš-šur
34	mār	māru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	24	appos	_	DUMU
35	Adad-nerari	Adad-narari_II	PROPN	RN	Gender=Masc	34	nmod:poss	_	10-ERIM.TAH₂
36	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	35	appos	_	MAN
37	kiššati	kiššatu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Free|Number=Sing	36	nmod:poss	_	ŠU₂
38	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	35	appos	_	MAN
39	māt	mātu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	38	nmod:poss	_	KUR
40	Aššur	Aššur	PROPN	GN	Gender=Masc	39	nmod:poss	_	aš-šur-ma
41	ma	_	PART	_	_	40	dep	_	_
42	eṭlu	eṭlu	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	_	eṭ-lu
43	qardu	qardu	ADJ	AJ	Case=Nom|Gender=Masc|Number=Sing	42	amod	_	qar-du
44	ša	ša	PRON	REL	_	50	nsubj	_	ša₂
45	ina	ina	ADP	PRP	_	46	case	_	ina
46	tukulti	tukultu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Bound|Number=Sing	50	obl	_	{GIŠ}tukul-ti
47	Aššur	Aššur	PROPN	DN	Gender=Masc	46	nmod:poss	_	aš-šur
48	bēli	bēlu	NOUN	N	Case=Gen|Gender=Masc|NounBase=Suffixal|Number=Sing	47	appos	_	EN-šu₂
49	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	48	det:poss	_	_
50	ittallaku	_	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=Gtn	42	acl:relcl	_	_
51	ma	_	CCONJ	_	_	60	cc	_	_
52	ina	ina	ADP	PRP	_	53	case	_	ina
53	malkī	malku	NOUN	N	Gender=Masc|Number=Plur	60	obl	_	mal-ki.MEŠ
54	ša	ša	ADP	REL	_	55	case	_	ša₂
55	kibrāt	kibru	NOUN	N	Gender=Fem|NounBase=Bound|Number=Plur	53	nmod	_	kib-rat
56	erbetta	erbe	NUM	NU	Gender=Fem	55	nummod	_	4-ta
57	šānin	šāninu	NOUN	N	Gender=Masc|NounBase=Suffixal|Number=Sing	60	obj	_	ša₂-nin-šu₂
58	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	57	det:poss	_	_
59	lā	lā	PART	MOD	_	60	advmod	_	la-a
60	īšû	išû	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=G	50	conj	_	_
61	rēʾû	rēʾû	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	_	{LU₂}SIPA
62	tabrâte	tabrītu	NOUN	N	Gender=Fem|NounBase=Free|Number=Plur	61	nmod:poss	_	tab-ra-te
63	lā ādiru	lā|ādiru	ADJ	MOD|N	Case=Nom|Gender=Masc|Number=Sing	2	amod	_	la|a-di-ru
64	tuqumti	tuqumtu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Free|Number=Sing	63	nmod:poss	_	{GIŠ}LAL
65	edû	edû	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	_	e-du-u₂
66	gapšu	gapšu	ADJ	AJ	Case=Nom|Gender=Masc|Number=Sing	65	amod	_	gap-šu₂
67	ša	ša	PRON	DET	_	70	nsubj	_	ša₂
68	māhira	māhiru	NOUN	N	Case=Acc|Gender=Masc|NounBase=Free|Number=Sing	70	obj	_	ma-hi-ra
69	lā	lā	PART	MOD	_	70	advmod	_	la-a
70	īšû	išû	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=G	65	acl:relcl	_	_
71	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	_	MAN
72	mušakniš	mušaknišu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	71	nmod:poss	_	mu-šak-niš
73	lā kanšūte	lā|kanšu	NOUN	MOD|N	Gender=Masc|NounBase=Suffixal|Number=Plur	72	nmod:poss	_	la|kan-šu-te-šu₂
74	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	73	det:poss	_	_
75	ša	ša	PRON	DET	_	79	nsubj	_	ša₂
76	naphar	napharu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	79	obj	_	nap-har
77	kiššat	kiššatu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	76	nmod:poss	_	kiš-šat
78	nišī	nišu	NOUN	N	Gender=Fem|Number=Plur	77	nmod:poss	_	UN.MEŠ
79	ipēlu	bêlu	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=G	71	acl:relcl	_	i-pe-lu
80	zikaru	zikaru	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	_	_
81	dannu	dannu	ADJ	AJ	Case=Nom|Gender=Masc|Number=Sing	80	amod	_	dan-nu
82	mukabbis	mukabbisu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	_	mu-kab-bi-is
83	kišād	kišādu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	82	nmod:poss	_	GU₂
84	ayyābī	ayyābu	NOUN	N	Gender=Masc|NounBase=Suffixal|Number=Plur	83	nmod:poss	_	a-a-bi-šu₂
85	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	84	det:poss	_	_
86	dāʾiš	dāʾišu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	_	da-a-iš
87	kullat	kullatu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	86	nmod:poss	_	kul-lat
88	nakirē	nakru	NOUN	N	Gender=Masc|Number=Plur	87	nmod:poss	_	KUR₂.MEŠ
89	muparriru	muparriru	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	_	mu-pa-ri-ru
90	kiṣir	kiṣru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	89	nmod:poss	_	ki-iṣ-ri
91	multarhī	muštarhu	NOUN	N	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	90	nmod:poss	_	mul-tar-hi
92	šarru	šarru	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	_	MAN
93	ša	ša	PRON	REL	_	100	nsubj	_	ša₂
94	ina	ina	ADP	PRP	_	95	case	_	ina
95	tukulti	tukultu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Bound|Number=Sing	100	obl	_	{GIŠ}tukul-ti
96	ilāni	ilu	NOUN	N	Gender=Masc|Number=Plur	95	nmod:poss	_	DINGIR.MEŠ
97	rabûti	rabû	ADJ	AJ	Gender=Masc|Number=Plur	96	amod	_	GAL.MEŠ
98	bēlē	_	NOUN	_	Gender=Masc|NounBase=Suffixal|Number=Plur	96	appos	_	_
99	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	98	det:poss	_	_
100	ittallaku	_	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=Gtn	92	acl:relcl	_	_
101	ma	_	CCONJ	_	_	107	cc	_	_
102	mātāti	mātu	NOUN	N	Gender=Fem|NounBase=Free|Number=Plur	107	obj	_	KUR.KUR.MEŠ
103	kalî	kalû	DET	N	_	102	amod	_	DU₃-ši-na
104	šina	_	PRON	_	Gender=Fem|Number=Plur|Person=3	103	det:poss	_	_
105	qās	qātu	NOUN	N	Gender=Fem|NounBase=Suffixal|Number=Sing	107	nsubj	_	ŠU-su
106	su	_	PRON	_	Gender=Masc|Number=Sing|Person=3	105	det:poss	_	_
107	ikšud	kašādu	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|VerbStem=G	100	conj	_	_
108	huršānī	huršānu	NOUN	N	Gender=Masc|Number=Plur	111	obj	_	hur-ša₂-ni
109	kalû	kalû	DET	N	_	108	amod	_	DU₃-šu-nu
110	šunu	_	PRON	_	Gender=Masc|Number=Plur|Person=3	109	det	_	_
111	ipēlu	bêlu	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=G	100	conj	_	i-pe-lu-ma
112	ma	_	CCONJ	_	_	115	cc	_	_
113	bilat	biltu	NOUN	N	Gender=Fem|NounBase=Suffixal|Number=Sing	115	obj	_	bi-lat-su-nu
114	sunu	_	PRON	_	Gender=Masc|Number=Plur|Person=3	113	det:poss	_	_
115	imhuru	mahāru	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=G	111	conj	_	_
116	ṣābit	ṣābitu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	92	appos	_	ṣa-bit
117	līṭē	līṭu	NOUN	N	Gender=Masc|Number=Plur	116	nmod:poss	_	li-i-ṭi₂
118	šākin	šākinu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	92	appos	_	ša₂-kin₂
119	līte	lītu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Free|Number=Sing	118	nmod:poss	_	_

~~~


