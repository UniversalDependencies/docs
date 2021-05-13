---
layout: base
title:  'Statistics of det in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="akk_riao-dep-det-poss.html">det:poss</a></tt>.

59 nodes (0%) are attached to their parents as `det`.

59 instances of `det` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `det`: <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (50; 85% instances), <tt><a href="akk_riao-pos-ADP.html">ADP</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (7; 12% instances), <tt><a href="akk_riao-pos-DET.html">DET</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det	color:blue
1	ina	ina	ADP	PRP	_	2	case	2:case	ina
2	ūme	ūmu	NOUN	N	Case=Gen|Gender=Masc|NounBase=Suffixal|Number=Sing	13	obl	13:obl	UD.MEŠ-šu-ma
3	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	2	det	2:det	_
4	ma	_	PART	_	_	2	dep	2:dep	_
5	ina	ina	ADP	PRP	_	6	case	6:case	ina
6	pî	pû	NOUN	N	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	13	obl	13:obl	pi-i
7	ilāni	ilu	NOUN	N	Gender=Masc|Number=Plur	6	nmod:poss	6:nmod:poss	DINGIR.MEŠ
8	rabûti	rabû	ADJ	AJ	Gender=Masc|Number=Plur	7	amod	7:amod	GAL.MEŠ
9	šarrūt	_	NOUN	_	Gender=Fem|NounBase=Suffixal|Number=Sing	13	nsubj	13:nsubj	_
10	ī	_	PRON	_	Number=Sing|Person=1	9	det:poss	9:det:poss	_
11	bēlūt	_	NOUN	_	Gender=Fem|NounBase=Suffixal|Number=Sing	9	conj	9:conj	_
12	ī	_	PRON	_	Number=Sing|Person=1	11	det:poss	11:det:poss	_
13	ūṣâ	waṣû	VERB	V	Gender=Fem|Mood=Ind|Number=Plur|Person=3|Tense=Past|Ventive=Yes|VerbForm=Fin|VerbStem=G	0	root	0:root	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 det	color:blue
1	battubatte	battubattu/e	ADP	PRP	_	4	obl	4:obl	bat-tu-bat-te-ši-na
2	šina	_	PRON	_	Gender=Fem|Number=Plur|Person=3	1	det	1:det	_
3	būrāti	būrtu	NOUN	N	Gender=Fem|NounBase=Free|Number=Plur	4	obj	4:obj	_
4	uhtappiʾū	_	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|VerbStem=D	0	root	0:root	_

~~~


~~~ conllu
# visual-style 110	bgColor:blue
# visual-style 110	fgColor:white
# visual-style 109	bgColor:blue
# visual-style 109	fgColor:white
# visual-style 109 110 det	color:blue
1	ēkal	ēkallu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	0	root	0:root	E₂.GAL
2	Aššur-naṣir-apli	Aššur-naṣir-apli_II	PROPN	RN	Gender=Masc	1	nmod:poss	1:nmod:poss	{m}aš-šur-PAP-A
3	iššak	iššiakku	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	2:appos	ŠID
4	Aššur	Aššur	PROPN	DN	Gender=Masc	3	nmod:poss	3:nmod:poss	aš-šur
5	nišīt	nišītu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	2	appos	2:appos	ni-šit
6	Enlil	Enlil	PROPN	DN	Gender=Masc	5	nmod:poss	5:nmod:poss	{d}BAD
7	u	u	CCONJ	CNJ	_	8	cc	8:cc	u
8	Ninurta	Ninurta	PROPN	DN	Gender=Masc	6	conj	6:conj	{d}MAŠ
9	narām	narāmu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	2:appos	na-ra-am
10	Anim	Anu	PROPN	DN	Case=Gen|Gender=Masc	9	nmod:poss	9:nmod:poss	{d}a-nim
11	u	u	CCONJ	CNJ	_	12	cc	12:cc	u₃
12	Dagan	Dagan	PROPN	DN	Gender=Masc	10	conj	10:conj	{d}da-gan
13	kašūš	kašūšu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	2:appos	ka-šu-uš
14	ilāni	ilu	NOUN	N	Gender=Masc|Number=Plur	13	nmod:poss	13:nmod:poss	DINGIR.MEŠ
15	rabûti	rabû	ADJ	AJ	Gender=Masc|Number=Plur	14	amod	14:amod	GAL.MEŠ
16	šarru	šarru	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	2:appos	MAN
17	dannu	dannu	ADJ	AJ	Case=Nom|Gender=Masc|Number=Sing	16	amod	16:amod	dan-nu
18	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	2:appos	MAN
19	kiššati	kiššatu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Free|Number=Sing	18	nmod:poss	18:nmod:poss	ŠU₂
20	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	2:appos	MAN
21	māt	mātu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	20	nmod:poss	20:nmod:poss	KUR
22	Aššur	Aššur	PROPN	GN	Gender=Masc	21	nmod:poss	21:nmod:poss	aš-šur
23	mār	māru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	2:appos	DUMU
24	Tukulti-Ninurta	Tukulti-Ninurta_II	PROPN	RN	Gender=Masc	23	nmod:poss	23:nmod:poss	GISKIM-{d}nin-urta
25	šarri	šarru	NOUN	N	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	24	appos	24:appos	MAN
26	rabê	rabû	ADJ	AJ	Case=Gen|Gender=Masc|Number=Sing	25	amod	25:amod	GAL-e
27	šarri	šarru	NOUN	N	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	24	appos	24:appos	MAN
28	danni	dannu	ADJ	AJ	Case=Gen|Gender=Masc|Number=Sing	27	amod	27:amod	dan-ni
29	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	24	appos	24:appos	MAN
30	kiššati	kiššatu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Free|Number=Sing	29	nmod:poss	29:nmod:poss	ŠU₂
31	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	24	appos	24:appos	MAN
32	māt	mātu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	31	nmod:poss	31:nmod:poss	KUR
33	Aššur	Aššur	PROPN	GN	Gender=Masc	32	nmod:poss	32:nmod:poss	aš-šur
34	mār	māru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	24	appos	24:appos	DUMU
35	Adad-nerari	Adad-narari_II	PROPN	RN	Gender=Masc	34	nmod:poss	34:nmod:poss	10-ERIM.TAH₂
36	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	35	appos	35:appos	MAN
37	kiššati	kiššatu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Free|Number=Sing	36	nmod:poss	36:nmod:poss	ŠU₂
38	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	35	appos	35:appos	MAN
39	māt	mātu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	38	nmod:poss	38:nmod:poss	KUR
40	Aššur	Aššur	PROPN	GN	Gender=Masc	39	nmod:poss	39:nmod:poss	aš-šur-ma
41	ma	_	PART	_	_	40	dep	40:dep	_
42	eṭlu	eṭlu	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	2:appos	eṭ-lu
43	qardu	qardu	ADJ	AJ	Case=Nom|Gender=Masc|Number=Sing	42	amod	42:amod	qar-du
44	ša	ša	PRON	REL	_	50	nsubj	50:nsubj	ša₂
45	ina	ina	ADP	PRP	_	46	case	46:case	ina
46	tukulti	tukultu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Bound|Number=Sing	50	obl	50:obl	{GIŠ}tukul-ti
47	Aššur	Aššur	PROPN	DN	Gender=Masc	46	nmod:poss	46:nmod:poss	aš-šur
48	bēli	bēlu	NOUN	N	Case=Gen|Gender=Masc|NounBase=Suffixal|Number=Sing	47	appos	47:appos	EN-šu₂
49	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	48	det:poss	48:det:poss	_
50	ittallaku	_	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=Gtn	42	acl:relcl	42:acl:relcl	_
51	ma	_	CCONJ	_	_	60	cc	60:cc	_
52	ina	ina	ADP	PRP	_	53	case	53:case	ina
53	malkī	malku	NOUN	N	Gender=Masc|Number=Plur	60	obl	60:obl	mal-ki.MEŠ
54	ša	ša	ADP	REL	_	55	case	55:case	ša₂
55	kibrāt	kibru	NOUN	N	Gender=Fem|NounBase=Bound|Number=Plur	53	nmod	53:nmod	kib-rat
56	erbetta	erbe	NUM	NU	Gender=Fem	55	nummod	55:nummod	4-ta
57	šānin	šāninu	NOUN	N	Gender=Masc|NounBase=Suffixal|Number=Sing	60	obj	60:obj	ša₂-nin-šu₂
58	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	57	det:poss	57:det:poss	_
59	lā	lā	PART	MOD	_	60	advmod	60:advmod	la-a
60	īšû	išû	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=G	50	conj	50:conj	_
61	rēʾû	rēʾû	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	2:appos	{LU₂}SIPA
62	tabrâte	tabrītu	NOUN	N	Gender=Fem|NounBase=Free|Number=Plur	61	nmod:poss	61:nmod:poss	tab-ra-te
63	lā ādiru	lā|ādiru	ADJ	MOD|N	Case=Nom|Gender=Masc|Number=Sing	2	amod	2:amod	la|a-di-ru
64	tuqumti	tuqumtu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Free|Number=Sing	63	nmod:poss	63:nmod:poss	{GIŠ}LAL
65	edû	edû	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	2:appos	e-du-u₂
66	gapšu	gapšu	ADJ	AJ	Case=Nom|Gender=Masc|Number=Sing	65	amod	65:amod	gap-šu₂
67	ša	ša	PRON	DET	_	70	nsubj	70:nsubj	ša₂
68	māhira	māhiru	NOUN	N	Case=Acc|Gender=Masc|NounBase=Free|Number=Sing	70	obj	70:obj	ma-hi-ra
69	lā	lā	PART	MOD	_	70	advmod	70:advmod	la-a
70	īšû	išû	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=G	65	acl:relcl	65:acl:relcl	_
71	šar	šarru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	2:appos	MAN
72	mušakniš	mušaknišu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	71	nmod:poss	71:nmod:poss	mu-šak-niš
73	lā kanšūte	lā|kanšu	NOUN	MOD|N	Gender=Masc|NounBase=Suffixal|Number=Plur	72	nmod:poss	72:nmod:poss	la|kan-šu-te-šu₂
74	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	73	det:poss	73:det:poss	_
75	ša	ša	PRON	DET	_	79	nsubj	79:nsubj	ša₂
76	naphar	napharu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	79	obj	79:obj	nap-har
77	kiššat	kiššatu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	76	nmod:poss	76:nmod:poss	kiš-šat
78	nišī	nišu	NOUN	N	Gender=Fem|Number=Plur	77	nmod:poss	77:nmod:poss	UN.MEŠ
79	ipēlu	bêlu	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=G	71	acl:relcl	71:acl:relcl	i-pe-lu
80	zikaru	zikaru	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	2:appos	_
81	dannu	dannu	ADJ	AJ	Case=Nom|Gender=Masc|Number=Sing	80	amod	80:amod	dan-nu
82	mukabbis	mukabbisu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	2:appos	mu-kab-bi-is
83	kišād	kišādu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	82	nmod:poss	82:nmod:poss	GU₂
84	ayyābī	ayyābu	NOUN	N	Gender=Masc|NounBase=Suffixal|Number=Plur	83	nmod:poss	83:nmod:poss	a-a-bi-šu₂
85	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	84	det:poss	84:det:poss	_
86	dāʾiš	dāʾišu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	2:appos	da-a-iš
87	kullat	kullatu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	86	nmod:poss	86:nmod:poss	kul-lat
88	nakirē	nakru	NOUN	N	Gender=Masc|Number=Plur	87	nmod:poss	87:nmod:poss	KUR₂.MEŠ
89	muparriru	muparriru	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	2:appos	mu-pa-ri-ru
90	kiṣir	kiṣru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	89	nmod:poss	89:nmod:poss	ki-iṣ-ri
91	multarhī	muštarhu	NOUN	N	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	90	nmod:poss	90:nmod:poss	mul-tar-hi
92	šarru	šarru	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	appos	2:appos	MAN
93	ša	ša	PRON	REL	_	100	nsubj	100:nsubj	ša₂
94	ina	ina	ADP	PRP	_	95	case	95:case	ina
95	tukulti	tukultu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Bound|Number=Sing	100	obl	100:obl	{GIŠ}tukul-ti
96	ilāni	ilu	NOUN	N	Gender=Masc|Number=Plur	95	nmod:poss	95:nmod:poss	DINGIR.MEŠ
97	rabûti	rabû	ADJ	AJ	Gender=Masc|Number=Plur	96	amod	96:amod	GAL.MEŠ
98	bēlē	_	NOUN	_	Gender=Masc|NounBase=Suffixal|Number=Plur	96	appos	96:appos	_
99	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	98	det:poss	98:det:poss	_
100	ittallaku	_	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=Gtn	92	acl:relcl	92:acl:relcl	_
101	ma	_	CCONJ	_	_	107	cc	107:cc	_
102	mātāti	mātu	NOUN	N	Gender=Fem|NounBase=Free|Number=Plur	107	obj	107:obj	KUR.KUR.MEŠ
103	kalî	kalû	DET	N	_	102	amod	102:amod	DU₃-ši-na
104	šina	_	PRON	_	Gender=Fem|Number=Plur|Person=3	103	det:poss	103:det:poss	_
105	qās	qātu	NOUN	N	Gender=Fem|NounBase=Suffixal|Number=Sing	107	nsubj	107:nsubj	ŠU-su
106	su	_	PRON	_	Gender=Masc|Number=Sing|Person=3	105	det:poss	105:det:poss	_
107	ikšud	kašādu	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|VerbStem=G	100	conj	100:conj	_
108	huršānī	huršānu	NOUN	N	Gender=Masc|Number=Plur	111	obj	111:obj	hur-ša₂-ni
109	kalû	kalû	DET	N	_	108	amod	108:amod	DU₃-šu-nu
110	šunu	_	PRON	_	Gender=Masc|Number=Plur|Person=3	109	det	109:det	_
111	ipēlu	bêlu	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=G	100	conj	100:conj	i-pe-lu-ma
112	ma	_	CCONJ	_	_	115	cc	115:cc	_
113	bilat	biltu	NOUN	N	Gender=Fem|NounBase=Suffixal|Number=Sing	115	obj	115:obj	bi-lat-su-nu
114	sunu	_	PRON	_	Gender=Masc|Number=Plur|Person=3	113	det:poss	113:det:poss	_
115	imhuru	mahāru	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=G	111	conj	111:conj	_
116	ṣābit	ṣābitu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	92	appos	92:appos	ṣa-bit
117	līṭē	līṭu	NOUN	N	Gender=Masc|Number=Plur	116	nmod:poss	116:nmod:poss	li-i-ṭi₂
118	šākin	šākinu	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	92	appos	92:appos	ša₂-kin₂
119	līte	lītu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Free|Number=Sing	118	nmod:poss	118:nmod:poss	_

~~~


