---
layout: base
title:  'Statistics of appos in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `appos`

This relation is universal.

76 nodes (0%) are attached to their parents as `appos`.

76 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.34210526315789.

The following 9 pairs of parts of speech are connected with `appos`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (64; 84% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	OBSAHOVÉ	obsahový	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	2:amod	_
2	VYMEZENÍ	vymezení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	_
3	NĚKTERÝCH	některý	DET	PZXP2----------	Case=Gen|Number=Plur|PronType=Ind	4	det	4:det	_
4	POLOŽEK	položka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	2	nmod	2:nmod:gen	_
5	ROZVAHY	rozvaha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	4	nmod	4:nmod:gen	_
6	(	(	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
7	BILANCE	bilance	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	5	appos	5:appos	SpaceAfter=No
8	)	)	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 appos	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	11	punct	11:punct	_
2	Položka	položka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	11:nsubj	_
3	„	"	PUNCT	Z:-------------	_	4	punct	4:punct	SpaceAfter=No
4	B.II.9.	B.II.9.	X	X@-------------	_	2	nmod	2:nmod	LGloss=(from_multi_word_term)
5	Oceňovací	Oceňovací	X	X@-------------	_	4	nmod	4:nmod	LGloss=(from_multi_word_term)
6	rozdíl	rozdíl	X	X@-------------	_	4	nmod	4:nmod	LGloss=(from_multi_word_term)
7	k	k	X	X@-------------	_	4	nmod	4:nmod	LGloss=(from_multi_word_term)
8	nabytému	nabytému	X	X@-------------	_	4	nmod	4:nmod	LGloss=(from_multi_word_term)
9	majetku	majetku	X	X@-------------	_	4	nmod	4:nmod	SpaceAfter=No|LGloss=(from_multi_word_term)
10	“	"	PUNCT	Z:-------------	_	4	punct	4:punct	_
11	obsahuje	obsahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
12	též	též	ADV	Db-------------	_	14	advmod:emph	14:advmod:emph	_
13	opravnou	opravný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	14:amod	_
14	položku	položka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	11	obj	11:obj	_
15	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	17	case	17:case	LId=k-1
16	nabytému	nabytý	ADJ	AAIS3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	17	amod	17:amod	_
17	majetku	majetek	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	14	nmod	14:nmod:k:dat	_
18	stanovenou	stanovený	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	14:amod	_
19	(	(	PUNCT	Z:-------------	_	20	punct	20:punct	SpaceAfter=No
20	vytvořenou	vytvořený	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	18	appos	18:appos	SpaceAfter=No
21	)	)	PUNCT	Z:-------------	_	20	punct	20:punct	_
22	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	23	case	23:case	LId=před-1
23	nabytím	nabytí	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing	18	obl	18:obl:před:ins	_
24	účinnosti	účinnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	23	nmod	23:nmod:gen	_
25	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	26	det	26:det	_
26	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	24	nmod	24:nmod:gen	SpaceAfter=No
27	.	.	PUNCT	Z:-------------	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 55	bgColor:blue
# visual-style 55	fgColor:white
# visual-style 53	bgColor:blue
# visual-style 53	fgColor:white
# visual-style 53 55 appos	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	4	punct	4:punct	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	4	nsubj	4:nsubj	_
4	účtují	účtovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
6	pokud	pokud	SCONJ	J,-------------	_	9	mark	9:mark	_
7	tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	8	det	8:det	_
8	zákon	zákon	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	9:nsubj	_
9	nestanoví	stanovit	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	4	advcl	4:advcl:pokud	_
10	jinak	jinak	ADV	Db-------------	_	9	advmod	9:advmod	SpaceAfter=No
11	:	:	PUNCT	Z:-------------	_	44	punct	44:punct	_
12	a)	a)	X	X@-------------	_	14	obl	14:obl|16:obl	_
13	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	14	case	14:case|16:case	LId=v-1
14	deníku	deník	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	44	obl	23:obl:v:loc|32:obl:arg:ins|44:obl:v:loc|60:obl:v:loc|75:obl:v:loc	_
15	(	(	PUNCT	Z:-------------	_	16	punct	16:punct	SpaceAfter=No
16	denících	deník	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	14	conj	14:conj|23:obl:v:loc|32:obl:arg:ins|44:obl:v:loc|60:obl:v:loc|75:obl:v:loc	SpaceAfter=No
17	)	)	PUNCT	Z:-------------	_	16	punct	16:punct	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	23	punct	23:punct	_
19	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	20	case	20:case	LId=v-1
20	němž	jenž	PRON	P9ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PrepCase=Pre|PronType=Rel	23	obl	14:ref|16:ref	_
21	účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	22	amod	22:amod	LId=účetní-1
22	zápisy	zápis	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	23	obj	23:obj	_
23	uspořádají	uspořádat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl:relcl	14:acl:relcl|16:acl:relcl	_
24	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	26	case	26:case	LId=z-1
25	hlediska	hledisko	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	24	fixed	24:fixed	_
26	časového	časový	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	23	obl	23:obl:z_hlediska:gen	_
27	(	(	PUNCT	Z:-------------	_	28	punct	28:punct	SpaceAfter=No
28	chronologicky	chronologicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	26	appos	26:appos	SpaceAfter=No
29	)	)	PUNCT	Z:-------------	_	28	punct	28:punct	_
30	a	a	CCONJ	J^-------------	_	32	cc	32:cc	LId=a-1
31	jímž	jenž	PRON	PJZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PrepCase=Npr|PronType=Rel	32	obl:arg	14:ref|16:ref	_
32	prokazují	prokazovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	23	conj	14:acl:relcl|16:acl:relcl|23:conj	_
33	zaúčtování	zaúčtování	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur	32	obj	32:obj	_
34	všech	všechen	DET	PLXP2----------	Case=Gen|Number=Plur|PronType=Tot	36	det	36:det	_
35	účetních	účetní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	36	amod	36:amod	LId=účetní-1
36	případů	případ	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	33	nmod	33:nmod:gen	_
37	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	39	case	39:case	LId=v-1
38	účetním	účetní	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	39	amod	39:amod	LId=účetní-1
39	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing	33	nmod	33:nmod:v:loc	SpaceAfter=No
40	,	,	PUNCT	Z:-------------	_	44	punct	44:punct	_
41	b)	b)	X	X@-------------	_	44	obl	44:obl	_
42	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	44	case	44:case	LId=v-1
43	hlavní	hlavní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	44	amod	44:amod	_
44	knize	kniha	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	9	obl	9:obl:v:loc|50:obl:v:loc	SpaceAfter=No
45	,	,	PUNCT	Z:-------------	_	50	punct	50:punct	_
46	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	47	case	47:case	LId=v-1
47	níž	jenž	PRON	P9FS6----------	Case=Loc|Gender=Fem|Number=Sing|PrepCase=Pre|PronType=Rel	50	obl	44:ref	_
48	účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	49	amod	49:amod	LId=účetní-1
49	zápisy	zápis	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	50	obj	50:obj	_
50	uspořádají	uspořádat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	44	acl:relcl	44:acl:relcl	_
51	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	53	case	53:case	LId=z-1
52	hlediska	hledisko	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	51	fixed	51:fixed	_
53	věcného	věcný	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	50	obl	50:obl:z_hlediska:gen	_
54	(	(	PUNCT	Z:-------------	_	55	punct	55:punct	SpaceAfter=No
55	systematicky	systematicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	53	appos	53:appos	SpaceAfter=No
56	)	)	PUNCT	Z:-------------	_	55	punct	55:punct	SpaceAfter=No
57	,	,	PUNCT	Z:-------------	_	60	punct	60:punct	_
58	c)	c)	X	X@-------------	_	60	obl	60:obl	_
59	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	60	case	60:case	LId=v-1
60	knihách	kniha	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur	44	conj	9:obl:v:loc|44:conj|67:obl:v:loc	_
61	analytických	analytický	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	62	amod	62:amod	_
62	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	60	nmod	60:nmod:gen	SpaceAfter=No
63	,	,	PUNCT	Z:-------------	_	67	punct	67:punct	_
64	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	65	case	65:case	LId=v-1
65	nichž	jenž	PRON	P9XP6----------	Case=Loc|Number=Plur|PrepCase=Pre|PronType=Rel	67	obl	60:ref	_
66	podrobně	podrobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	67	advmod	67:advmod	_
67	rozvádějí	rozvádět	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	60	acl:relcl	60:acl:relcl	_
68	účetní	účetní	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	69	amod	69:amod	LId=účetní-1
69	zápisy	zápis	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	67	obj	67:obj	_
70	hlavní	hlavní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	71	amod	71:amod	_
71	knihy	kniha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	69	nmod	69:nmod:gen	SpaceAfter=No
72	,	,	PUNCT	Z:-------------	_	75	punct	75:punct	_
73	d)	d)	X	X@-------------	_	75	obl	75:obl	_
74	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	75	case	75:case	LId=v-1
75	knihách	kniha	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur	44	conj	9:obl:v:loc|44:conj|82:obl:v:loc	_
76	podrozvahových	podrozvahový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	77	amod	77:amod	_
77	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	75	nmod	75:nmod:gen	SpaceAfter=No
78	,	,	PUNCT	Z:-------------	_	82	punct	82:punct	_
79	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	80	case	80:case	LId=v-1
80	kterých	který	DET	P4XP6----------	Case=Loc|Number=Plur|PronType=Int,Rel	82	obl	75:ref	_
81	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	82	expl:pass	82:expl:pass	_
82	uvádějí	uvádět	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	75	acl:relcl	75:acl:relcl	_
83	účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	84	amod	84:amod	LId=účetní-1
84	zápisy	zápis	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	82	nsubj:pass	82:nsubj:pass|88:nsubj:pass	SpaceAfter=No
85	,	,	PUNCT	Z:-------------	_	88	punct	88:punct	_
86	které	který	DET	P4IP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	88	nsubj:pass	84:ref	_
87	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	88	expl:pass	88:expl:pass	_
88	neprovádějí	provádět	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	84	acl:relcl	84:acl:relcl	_
89	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	91	case	91:case	LId=v-1
90	účetních	účetní	ADJ	AAFP6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	91	amod	91:amod	LId=účetní-1
91	knihách	kniha	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur	88	obl	88:obl:v:loc	_
92	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	93	case	93:case	LId=podle-2
93	písmen	písmeno	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	88	obl	88:obl:podle:gen	_
94	a)_a_b)	a)_a_b)	X	X@-------------	_	93	nmod	93:nmod	SpaceAfter=No
95	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


