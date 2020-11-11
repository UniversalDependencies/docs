---
layout: base
title:  'Statistics of appos in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `appos`

This relation is universal.

78 nodes (0%) are attached to their parents as `appos`.

78 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.88461538461539.

The following 9 pairs of parts of speech are connected with `appos`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (66; 85% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	OBSAHOVÉ	obsahový	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	_	_
2	VYMEZENÍ	vymezení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
3	NĚKTERÝCH	některý	DET	PZXP2----------	Case=Gen|Number=Plur|PronType=Ind	4	det	_	_
4	POLOŽEK	položka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	2	nmod	_	_
5	ROZVAHY	rozvaha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	4	nmod	_	_
6	(	(	PUNCT	Z:-------------	_	7	punct	_	SpaceAfter=No
7	BILANCE	bilance	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	appos	_	SpaceAfter=No
8	)	)	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 appos	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	11	punct	_	_
2	Položka	položka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	11	nsubj	_	_
3	„	"	PUNCT	Z:-------------	_	4	punct	_	SpaceAfter=No
4	B.II.9.	B.II.9.	X	X@-------------	_	2	nmod	_	LGloss=(from_multi_word_term)
5	Oceňovací	Oceňovací	X	X@-------------	_	4	nmod	_	LGloss=(from_multi_word_term)
6	rozdíl	rozdíl	X	X@-------------	_	4	nmod	_	LGloss=(from_multi_word_term)
7	k	k	X	X@-------------	_	4	nmod	_	LGloss=(from_multi_word_term)
8	nabytému	nabytému	X	X@-------------	_	4	nmod	_	LGloss=(from_multi_word_term)
9	majetku	majetku	X	X@-------------	_	4	nmod	_	SpaceAfter=No|LGloss=(from_multi_word_term)
10	“	"	PUNCT	Z:-------------	_	4	punct	_	_
11	obsahuje	obsahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
12	též	též	ADV	Db-------------	_	14	advmod:emph	_	_
13	opravnou	opravný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	_	_
14	položku	položka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	11	obj	_	_
15	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	17	case	_	LId=k-1
16	nabytému	nabytý	ADJ	AAIS3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	17	amod	_	_
17	majetku	majetek	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	14	nmod	_	_
18	stanovenou	stanovený	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	_	_
19	(	(	PUNCT	Z:-------------	_	20	punct	_	SpaceAfter=No
20	vytvořenou	vytvořený	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	18	appos	_	SpaceAfter=No
21	)	)	PUNCT	Z:-------------	_	20	punct	_	_
22	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	23	case	_	LId=před-1
23	nabytím	nabytí	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	18	obl	_	_
24	účinnosti	účinnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	23	nmod	_	_
25	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	26	det	_	_
26	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	24	nmod	_	SpaceAfter=No
27	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 55	bgColor:blue
# visual-style 55	fgColor:white
# visual-style 53	bgColor:blue
# visual-style 53	fgColor:white
# visual-style 53 55 appos	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	4	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	4	nsubj	_	_
4	účtují	účtovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	9	punct	_	_
6	pokud	pokud	SCONJ	J,-------------	_	9	mark	_	_
7	tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	zákon	zákon	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	9	nsubj	_	_
9	nestanoví	stanovit	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	4	advcl	_	_
10	jinak	jinak	ADV	Db-------------	_	9	advmod	_	SpaceAfter=No
11	:	:	PUNCT	Z:-------------	_	41	punct	_	_
12	a)	a)	X	X@-------------	_	41	nmod	_	_
13	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	_	LId=v-1
14	deníku	deník	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	12	obl	_	_
15	(	(	PUNCT	Z:-------------	_	16	punct	_	SpaceAfter=No
16	denících	deník	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	14	conj	_	SpaceAfter=No
17	)	)	PUNCT	Z:-------------	_	16	punct	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	23	punct	_	_
19	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	20	case	_	LId=v-1
20	němž	jenž	PRON	P9ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PrepCase=Pre|PronType=Rel	23	obl	_	_
21	účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	22	amod	_	LId=účetní-1
22	zápisy	zápis	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	23	obj	_	_
23	uspořádají	uspořádat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl:relcl	_	_
24	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	26	case	_	LId=z-1
25	hlediska	hledisko	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	24	fixed	_	_
26	časového	časový	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	23	obl	_	_
27	(	(	PUNCT	Z:-------------	_	28	punct	_	SpaceAfter=No
28	chronologicky	chronologicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	26	appos	_	SpaceAfter=No
29	)	)	PUNCT	Z:-------------	_	28	punct	_	_
30	a	a	CCONJ	J^-------------	_	32	cc	_	LId=a-1
31	jímž	jenž	PRON	PJZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PrepCase=Npr|PronType=Rel	32	obl:arg	_	_
32	prokazují	prokazovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	23	conj	_	_
33	zaúčtování	zaúčtování	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	32	obj	_	_
34	všech	všechen	DET	PLXP2----------	Case=Gen|Number=Plur|PronType=Tot	36	det	_	_
35	účetních	účetní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	36	amod	_	LId=účetní-1
36	případů	případ	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	33	nmod	_	_
37	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	39	case	_	LId=v-1
38	účetním	účetní	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	39	amod	_	LId=účetní-1
39	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	33	nmod	_	SpaceAfter=No
40	,	,	PUNCT	Z:-------------	_	41	punct	_	_
41	b)	b)	X	X@-------------	_	9	nmod	_	_
42	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	41	case	_	LId=v-1
43	hlavní	hlavní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	44	amod	_	_
44	knize	kniha	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	41	obl	_	SpaceAfter=No
45	,	,	PUNCT	Z:-------------	_	50	punct	_	_
46	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	47	case	_	LId=v-1
47	níž	jenž	PRON	P9FS6----------	Case=Loc|Gender=Fem|Number=Sing|PrepCase=Pre|PronType=Rel	50	obl	_	_
48	účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	49	amod	_	LId=účetní-1
49	zápisy	zápis	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	50	obj	_	_
50	uspořádají	uspořádat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	44	acl:relcl	_	_
51	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	53	case	_	LId=z-1
52	hlediska	hledisko	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	51	fixed	_	_
53	věcného	věcný	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	50	obl	_	_
54	(	(	PUNCT	Z:-------------	_	55	punct	_	SpaceAfter=No
55	systematicky	systematicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	53	appos	_	SpaceAfter=No
56	)	)	PUNCT	Z:-------------	_	55	punct	_	SpaceAfter=No
57	,	,	PUNCT	Z:-------------	_	58	punct	_	_
58	c)	c)	X	X@-------------	_	41	conj	_	_
59	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	58	case	_	LId=v-1
60	knihách	kniha	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	58	obl	_	_
61	analytických	analytický	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	62	amod	_	_
62	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	60	nmod	_	SpaceAfter=No
63	,	,	PUNCT	Z:-------------	_	67	punct	_	_
64	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	65	case	_	LId=v-1
65	nichž	jenž	PRON	P9XP6----------	Case=Loc|Number=Plur|PrepCase=Pre|PronType=Rel	67	obl	_	_
66	podrobně	podrobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	67	advmod	_	_
67	rozvádějí	rozvádět	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	60	acl:relcl	_	_
68	účetní	účetní	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	69	amod	_	LId=účetní-1
69	zápisy	zápis	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	67	obj	_	_
70	hlavní	hlavní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	71	amod	_	_
71	knihy	kniha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	69	nmod	_	SpaceAfter=No
72	,	,	PUNCT	Z:-------------	_	73	punct	_	_
73	d)	d)	X	X@-------------	_	41	conj	_	_
74	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	73	case	_	LId=v-1
75	knihách	kniha	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	73	obl	_	_
76	podrozvahových	podrozvahový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	77	amod	_	_
77	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	75	nmod	_	SpaceAfter=No
78	,	,	PUNCT	Z:-------------	_	82	punct	_	_
79	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	80	case	_	LId=v-1
80	kterých	který	DET	P4XP6----------	Case=Loc|Number=Plur|PronType=Int,Rel	82	obl	_	_
81	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	82	expl:pass	_	_
82	uvádějí	uvádět	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	75	acl:relcl	_	_
83	účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	84	amod	_	LId=účetní-1
84	zápisy	zápis	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	82	nsubj:pass	_	SpaceAfter=No
85	,	,	PUNCT	Z:-------------	_	88	punct	_	_
86	které	který	DET	P4IP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	88	nsubj:pass	_	_
87	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	88	expl:pass	_	_
88	neprovádějí	provádět	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	84	acl:relcl	_	_
89	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	91	case	_	LId=v-1
90	účetních	účetní	ADJ	AAFP6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	91	amod	_	LId=účetní-1
91	knihách	kniha	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	88	obl	_	_
92	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	93	case	_	LId=podle-2
93	písmen	písmeno	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	88	obl	_	_
94	a)_a_b)	a)_a_b)	X	X@-------------	_	93	nmod	_	SpaceAfter=No
95	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


