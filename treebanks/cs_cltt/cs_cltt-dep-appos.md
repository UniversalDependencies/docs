---
layout: base
title:  'Statistics of appos in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `appos`

This relation is universal.

79 nodes (0%) are attached to their parents as `appos`.

78 instances of `appos` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.94936708860759.

The following 9 pairs of parts of speech are connected with `appos`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (67; 85% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	OBSAHOVÉ	obsahový	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	2:amod	_
2	VYMEZENÍ	vymezení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	_
3	NĚKTERÝCH	některý	DET	PZXP2----------	Case=Gen|Number=Plur|PronType=Ind	4	det	4:det	_
4	POLOŽEK	položka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	2	nmod	2:nmod	_
5	ROZVAHY	rozvaha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	4	nmod	4:nmod	_
6	(	(	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
7	BILANCE	bilance	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	appos	5:appos	SpaceAfter=No
8	)	)	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 appos	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	6	punct	6:punct	_
2	Položka	položka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	6	nsubj	6:nsubj	_
3	"	"	PUNCT	Z:-------------	_	4	punct	4:punct	_
4	B.II.9._Oceňovací_rozdíl_k_nabytému_majetku	"B.II.9._Oceňovací_rozdíl_k_nabytému_majetku"	X	X@-------------	_	2	nmod	2:nmod	_
5	"	"	PUNCT	Z:-------------	_	4	punct	4:punct	_
6	obsahuje	obsahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	též	též	ADV	Db-------------	_	9	advmod:emph	9:advmod:emph	_
8	opravnou	opravný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	9:amod	_
9	položku	položka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	6	obj	6:obj	_
10	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	12	case	12:case	LId=k-1
11	nabytému	nabytý	ADJ	AAIS3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	12	amod	12:amod	_
12	majetku	majetek	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	9	nmod	9:nmod	_
13	stanovenou	stanovený	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	9:amod	_
14	(	(	PUNCT	Z:-------------	_	15	punct	15:punct	SpaceAfter=No
15	vytvořenou	vytvořený	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	appos	13:appos	SpaceAfter=No
16	)	)	PUNCT	Z:-------------	_	15	punct	15:punct	_
17	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	18	case	18:case	LId=před-1
18	nabytím	nabytí	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	13	obl	13:obl	_
19	účinnosti	účinnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	18	nmod	18:nmod	_
20	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	21	det	21:det	_
21	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	19	nmod	19:nmod	SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 55	bgColor:blue
# visual-style 55	fgColor:white
# visual-style 53	bgColor:blue
# visual-style 53	fgColor:white
# visual-style 53 55 appos	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	4	punct	4:punct	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	4	nsubj	4:nsubj	_
4	účtují	účtovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
6	pokud	pokud	SCONJ	J,-------------	_	9	mark	9:mark	_
7	tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	8	det	8:det	_
8	zákon	zákon	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	9	nsubj	9:nsubj	_
9	nestanoví	stanovit	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	4	advcl	4:advcl	_
10	jinak	jinak	ADV	Db-------------	_	9	advmod	9:advmod	SpaceAfter=No
11	:	:	PUNCT	Z:-------------	_	41	punct	41:punct|58:punct|73:punct	_
12	a)	a)	X	X@-------------	_	41	nmod	41:nmod|58:nmod|73:nmod	_
13	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	12:case	LId=v-1
14	deníku	deník	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	12	obl	12:obl	_
15	(	(	PUNCT	Z:-------------	_	16	punct	16:punct	SpaceAfter=No
16	denících	deník	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	14	conj	12:obl|14:conj	SpaceAfter=No
17	)	)	PUNCT	Z:-------------	_	14	punct	14:punct|16:punct	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	23	punct	23:punct|32:punct	_
19	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	20	case	20:case	LId=v-1
20	němž	jenž	PRON	P9ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PrepCase=Pre|PronType=Rel	23	obl	23:obl	_
21	účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	22	amod	22:amod	LId=účetní-1
22	zápisy	zápis	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	23	obj	23:obj	_
23	uspořádají	uspořádat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl	14:acl|16:acl	_
24	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	26	case	26:case	LId=z-1
25	hlediska	hledisko	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	24	fixed	24:fixed	_
26	časového	časový	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	23	obl	23:obl	_
27	(	(	PUNCT	Z:-------------	_	28	punct	28:punct	SpaceAfter=No
28	chronologicky	chronologicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	26	appos	26:appos	SpaceAfter=No
29	)	)	PUNCT	Z:-------------	_	28	punct	28:punct	_
30	a	a	CCONJ	J^-------------	_	32	cc	32:cc	LId=a-1
31	jímž	jenž	PRON	PJZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PrepCase=Npr|PronType=Rel	32	obj	32:obj	_
32	prokazují	prokazovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	23	conj	14:acl|16:acl|23:conj	_
33	zaúčtování	zaúčtování	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	32	obj	32:obj	_
34	všech	všechen	DET	PLXP2----------	Case=Gen|Number=Plur|PronType=Tot	36	det	36:det	_
35	účetních	účetní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	36	amod	36:amod	LId=účetní-1
36	případů	případ	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	33	nmod	33:nmod	_
37	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	39	case	39:case	LId=v-1
38	účetním	účetní	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	39	amod	39:amod	LId=účetní-1
39	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	33	nmod	33:nmod	SpaceAfter=No
40	,	,	PUNCT	Z:-------------	_	41	punct	41:punct|58:punct|73:punct	_
41	b)	b)	X	X@-------------	_	9	nmod	9:nmod	_
42	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	41	case	41:case	LId=v-1
43	hlavní	hlavní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	44	amod	44:amod	_
44	knize	kniha	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	41	obl	41:obl	SpaceAfter=No
45	,	,	PUNCT	Z:-------------	_	50	punct	50:punct	_
46	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	47	case	47:case	LId=v-1
47	níž	jenž	PRON	P9FS6----------	Case=Loc|Gender=Fem|Number=Sing|PrepCase=Pre|PronType=Rel	50	obl	50:obl	_
48	účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	49	amod	49:amod	LId=účetní-1
49	zápisy	zápis	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	50	obj	50:obj	_
50	uspořádají	uspořádat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	44	acl	44:acl	_
51	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	53	case	53:case	LId=z-1
52	hlediska	hledisko	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	51	fixed	51:fixed	_
53	věcného	věcný	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	50	obl	50:obl	_
54	(	(	PUNCT	Z:-------------	_	55	punct	55:punct	SpaceAfter=No
55	systematicky	systematicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	53	appos	53:appos	SpaceAfter=No
56	)	)	PUNCT	Z:-------------	_	55	punct	55:punct	SpaceAfter=No
57	,	,	PUNCT	Z:-------------	_	58	punct	58:punct	_
58	c)	c)	X	X@-------------	_	41	conj	9:nmod|41:conj	_
59	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	58	case	58:case	LId=v-1
60	knihách	kniha	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	58	obl	58:obl	_
61	analytických	analytický	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	62	amod	62:amod	_
62	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	60	nmod	60:nmod	SpaceAfter=No
63	,	,	PUNCT	Z:-------------	_	67	punct	67:punct	_
64	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	65	case	65:case	LId=v-1
65	nichž	jenž	PRON	P9XP6----------	Case=Loc|Number=Plur|PrepCase=Pre|PronType=Rel	67	obl	67:obl	_
66	podrobně	podrobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	67	advmod	67:advmod	_
67	rozvádějí	rozvádět	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	60	acl	60:acl	_
68	účetní	účetní	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	69	amod	69:amod	LId=účetní-1
69	zápisy	zápis	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	67	obj	67:obj	_
70	hlavní	hlavní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	71	amod	71:amod	_
71	knihy	kniha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	69	nmod	69:nmod	SpaceAfter=No
72	,	,	PUNCT	Z:-------------	_	73	punct	73:punct	_
73	d)	d)	X	X@-------------	_	41	conj	9:nmod|41:conj	_
74	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	73	case	73:case	LId=v-1
75	knihách	kniha	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	73	obl	73:obl	_
76	podrozvahových	podrozvahový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	77	amod	77:amod	_
77	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	75	nmod	75:nmod	SpaceAfter=No
78	,	,	PUNCT	Z:-------------	_	82	punct	82:punct	_
79	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	80	case	80:case	LId=v-1
80	kterých	který	DET	P4XP6----------	Case=Loc|Number=Plur|PronType=Int,Rel	82	obl	82:obl	_
81	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	82	expl:pass	82:expl:pass	_
82	uvádějí	uvádět	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	75	acl	75:acl	_
83	účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	84	amod	84:amod	LId=účetní-1
84	zápisy	zápis	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	82	nsubj:pass	82:nsubj:pass	SpaceAfter=No
85	,	,	PUNCT	Z:-------------	_	88	punct	88:punct	_
86	které	který	DET	P4IP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	88	nsubj:pass	88:nsubj:pass	_
87	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	88	expl:pass	88:expl:pass	_
88	neprovádějí	provádět	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	84	acl	84:acl	_
89	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	91	case	91:case	LId=v-1
90	účetních	účetní	ADJ	AAFP6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	91	amod	91:amod	LId=účetní-1
91	knihách	kniha	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	88	obl	88:obl	_
92	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	93	case	93:case	LId=podle-2
93	písmen	písmeno	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	88	obl	88:obl	_
94	a)_a_b)	a)_a_b)	X	X@-------------	_	93	nmod	93:nmod	SpaceAfter=No
95	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


