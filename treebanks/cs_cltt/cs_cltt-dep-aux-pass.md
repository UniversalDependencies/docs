---
layout: base
title:  'Statistics of aux:pass in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="cs_cltt-dep-aux.html">aux</a></tt>.

133 nodes (0%) are attached to their parents as `aux:pass`.

132 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81203007518797.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (129; 97% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Průběh	průběh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj	_
2	používání	používání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	1	nmod	1:nmod	_
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	aux:pass	5:aux:pass	_
5	vyjádřen	vyjádřený	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	3	obj	3:obj	_
6	i	i	CCONJ	J^-------------	_	7	advmod:emph	7:advmod:emph	LId=i-1
7	jinak	jinak	ADV	Db-------------	_	5	advmod	5:advmod	_
8	než	než	SCONJ	J,-------------	_	10	mark	10:mark	LId=než-2
9	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	10	case	10:case	LId=v-1
10	vazbě	vazba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	7	dep	7:dep	LId=vazba-8
11	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	12:case	LId=na-1
12	čas	čas	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	10	nmod	10:nmod	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
14	například	například	ADV	Db-------------	_	16	cc	16:cc	_
15	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	16	case	16:case	LId=na-1
16	výkony	výkon	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	12	appos	12:appos	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:pass	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	9	punct	9:punct	_
2	Není-li	Není-li	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	4	aux:pass	4:aux:pass	_
3	dále	dále	ADV	Db------------1	_	4	advmod	4:advmod	LId=dále-3
4	stanoveno	stanovený	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	9	obl	9:obl	_
5	jinak	jinak	ADV	Db-------------	_	4	advmod	4:advmod	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
7	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	LId=účetní-1
8	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	9	nsubj	9:nsubj	_
9	uzavírají	uzavírat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	účetní	účetní	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	11	amod	11:amod	LId=účetní-1
11	knihy	kniha	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	9	obj	9:obj	_
12	a)	a)	X	X@-------------	_	9	nmod	9:nmod	_
13	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	12	case	12:case	LId=k-1
14	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	12	obl	12:obl	_
15	zániku	zánik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	14	nmod	14:nmod	_
16	povinnosti	povinnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	15	nmod	15:nmod	_
17	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	16	acl	16:acl	LId=vést-1
18	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	17	obj	17:obj	SpaceAfter=No
19	,	,	PUNCT	Z:-------------	_	20	punct	20:punct	_
20	b)	b)	X	X@-------------	_	12	conj	9:nmod|12:conj	_
21	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	20	case	20:case	LId=k-1
22	poslednímu	poslední	ADJ	AAIS3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	23	amod	23:amod	_
23	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	20	obl	20:obl	_
24	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	25	amod	25:amod	LId=účetní-1
25	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	23	nmod	23:nmod	SpaceAfter=No
26	,	,	PUNCT	Z:-------------	_	27	punct	27:punct	_
27	c)	c)	X	X@-------------	_	12	conj	9:nmod|12:conj	_
28	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	27	case	27:case	LId=k-1
29	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	27	obl	27:obl	_
30	předcházejícímu	předcházející	ADJ	AGMS3-----A----	Animacy=Anim|Aspect=Imp|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	29	amod	29:amod	_
31	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	30	obj	30:obj	_
32	vstupu	vstup	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	31	nmod	31:nmod	_
33	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	34	case	34:case	LId=do-1
34	likvidace	likvidace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	32	nmod	32:nmod	SpaceAfter=No
35	,	,	PUNCT	Z:-------------	_	36	punct	36:punct	_
36	d)	d)	X	X@-------------	_	12	conj	9:nmod|12:conj	_
37	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	36	case	36:case	LId=k-1
38	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	36	obl	36:obl	_
39	zrušení	zrušení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	38	nmod	38:nmod	_
40	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	41	case	41:case	LId=bez-1
41	likvidace	likvidace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	39	nmod	39:nmod	_
42	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	44	case	44:case	LId=s-1
43	výjimkou	výjimka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	42	fixed	42:fixed	_
44	přeměn	přeměna	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	39	nmod	39:nmod	_
45	společností	společnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	44	nmod	44:nmod	_
46	nebo	nebo	CCONJ	J^-------------	_	47	cc	47:cc	_
47	družstev	družstvo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	45	conj	44:nmod|45:conj	SpaceAfter=No
48	,	,	PUNCT	Z:-------------	_	49	punct	49:punct	_
49	e)	e)	X	X@-------------	_	12	conj	9:nmod|12:conj	_
50	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	49	case	49:case	LId=k-1
51	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	49	obl	49:obl	_
52	předcházejícímu	předcházející	ADJ	AGNS3-----A----	Aspect=Imp|Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	51	amod	51:amod	_
53	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	52	obj	52:obj	SpaceAfter=No
54	,	,	PUNCT	Z:-------------	_	56	punct	56:punct|64:punct	_
55	kterým	který	DET	P4XP3----------	Case=Dat|Number=Plur|PronType=Int,Rel	56	obl	56:obl	_
56	nastanou	nastat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	53	acl	53:acl	_
57	účinky	účinek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	56	nsubj	56:nsubj	_
58	rozhodnutí	rozhodnutí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	57	nmod	57:nmod	_
59	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	60	case	60:case	LId=o-1
60	úpadku	úpadek	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	58	nmod	58:nmod	_
61	nebo	nebo	CCONJ	J^-------------	_	64	cc	64:cc	_
62	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	63	case	63:case	LId=k-1
63	kterému	který	DET	P4ZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	64	obl	64:obl	_
64	nastanou	nastat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	56	conj	53:acl|56:conj	_
65	účinky	účinek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	64	nsubj	64:nsubj	_
66	rozhodnutí	rozhodnutí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	65	nmod	65:nmod	_
67	soudu	soud	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	66	nmod	66:nmod	_
68	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	69	case	69:case	LId=o-1
69	přeměně	přeměna	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	66	nmod	66:nmod	_
70	reorganizace	reorganizace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	69	nmod	69:nmod	_
71	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	72	case	72:case	LId=v-1
72	konkurs	konkurs	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	69	nmod	69:nmod	SpaceAfter=No|LId=konkurs-1
73	,	,	PUNCT	Z:-------------	_	74	punct	74:punct	_
74	f)	f)	X	X@-------------	_	12	conj	9:nmod|12:conj	_
75	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	74	case	74:case	LId=k-1
76	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	74	obl	74:obl	SpaceAfter=No
77	,	,	PUNCT	Z:-------------	_	79	punct	79:punct	_
78	kterým	který	DET	P4XP3----------	Case=Dat|Number=Plur|PronType=Int,Rel	79	obl	79:obl	_
79	nastanou	nastat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	76	acl	76:acl	_
80	účinky	účinek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	79	nsubj	79:nsubj	_
81	zrušení	zrušení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	80	nmod	80:nmod	_
82	konkursu	konkurs	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	81	nmod	81:nmod	SpaceAfter=No|LId=konkurs-1
83	,	,	PUNCT	Z:-------------	_	84	punct	84:punct	_
84	g)	g)	X	X@-------------	_	12	conj	9:nmod|12:conj	_
85	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	84	case	84:case	LId=k-1
86	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	84	obl	84:obl	_
87	předcházejícímu	předcházející	ADJ	AGNS3-----A----	Aspect=Imp|Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	86	amod	86:amod	_
88	dni	den	NOUN	NNIP4-----A---1	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	87	obj	87:obj	SpaceAfter=No
89	,	,	PUNCT	Z:-------------	_	91	punct	91:punct	_
90	kterým	který	DET	P4ZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	91	obl	91:obl	_
91	nastanou	nastat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	88	acl	88:acl	_
92	účinky	účinek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	91	nsubj	91:nsubj	_
93	schválení	schválení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	92	nmod	92:nmod	_
94	reorganizačního	reorganizační	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	95	amod	95:amod	_
95	plánu	plán	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	93	nmod	93:nmod	SpaceAfter=No
96	,	,	PUNCT	Z:-------------	_	97	punct	97:punct	_
97	h)	h)	X	X@-------------	_	12	conj	9:nmod|12:conj	_
98	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	97	case	97:case	LId=k-1
99	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	97	obl	97:obl	SpaceAfter=No
100	,	,	PUNCT	Z:-------------	_	102	punct	102:punct	_
101	kterým	který	DET	P4XP3----------	Case=Dat|Number=Plur|PronType=Int,Rel	102	obj	102:obj	_
102	nastanou	nastat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	99	acl	99:acl	_
103	účinky	účinek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	102	nsubj	102:nsubj	_
104	splnění	splnění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	103	nmod	103:nmod	_
105	reorganizačního	reorganizační	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	106	amod	106:amod	_
106	plánu	plán	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	104	nmod	104:nmod	SpaceAfter=No
107	,	,	PUNCT	Z:-------------	_	108	punct	108:punct	_
108	i)	i)	X	X@-------------	_	12	conj	9:nmod|12:conj	_
109	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	108	case	108:case	LId=k-1
110	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	108	obl	108:obl	SpaceAfter=No
111	,	,	PUNCT	Z:-------------	_	113	punct	113:punct	_
112	kterým	který	DET	P4XP3----------	Case=Dat|Number=Plur|PronType=Int,Rel	113	obl	113:obl	_
113	nastanou	nastat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	110	acl	110:acl	_
114	účinky	účinek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	113	nsubj	113:nsubj	_
115	splnění	splnění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	114	nmod	114:nmod	_
116	plánu	plán	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	117	nmod	117:nmod	_
117	oddlužení	oddlužení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	115	nmod	115:nmod	SpaceAfter=No
118	,	,	PUNCT	Z:-------------	_	120	punct	120:punct	_
119	nebo	nebo	CCONJ	J^-------------	_	120	cc	120:cc	_
120	j)	j)	X	X@-------------	_	12	conj	9:nmod|12:conj	_
121	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	120	case	120:case	LId=k-1
122	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	120	obl	120:obl	SpaceAfter=No
123	,	,	PUNCT	Z:-------------	_	126	punct	126:punct	_
124	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	125	case	125:case	LId=k-1
125	kterému	který	DET	P4ZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	126	obl	126:obl	_
126	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	122	acl	122:acl	_
127	povinnost	povinnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	126	obj	126:obj	_
128	uzavřít	uzavřít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	127	acl	127:acl	_
129	účetní	účetní	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	130	amod	130:amod	LId=účetní-1
130	knihy	kniha	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	128	obj	128:obj	_
131	nebo	nebo	CCONJ	J^-------------	_	132	cc	132:cc	_
132	sestavit	sestavit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	128	conj	127:acl|128:conj	_
133	účetní	účetní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	134	amod	134:amod	LId=účetní-1
134	závěrku	závěrka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	132	obj	132:obj	_
135	zvláštní	zvláštní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	137	amod	137:amod	_
136	právní	právní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	137	amod	137:amod	_
137	předpis	předpis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	126	nsubj	126:nsubj	SpaceAfter=No
138	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 aux:pass	color:blue
1	Způsoby	způsob	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	5	obl	5:obl	_
2	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	3:case	LId=podle-2
3	§_25	§_25	X	X@-------------	_	1	nmod	1:nmod	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	5:expl:pass	_
5	ocení	ocenit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	i	i	CCONJ	J^-------------	_	7	advmod:emph	7:advmod:emph|9:advmod:emph	LId=i-1
7	majetek	majetek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj:pass	5:nsubj:pass	_
8	a	a	CCONJ	J^-------------	_	9	cc	9:cc	LId=a-1
9	závazky	závazek	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	7	conj	5:nsubj:pass|7:conj	_
10	neuvedené	uvedený	ADJ	AAMP4----1N----	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Neg	9	amod	9:amod	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	12:case	LId=v-1
12	odstavci	odstavec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	10	obl	10:obl	_
13	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	12	nummod	12:nummod	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	17	punct	17:punct	_
15	není-li	není-li	X	X@-------------	_	17	aux:pass	17:aux:pass	_
16	dále	dále	ADV	Db------------1	_	17	advmod	17:advmod	LId=dále-3
17	stanoveno	stanovený	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	5	obl	5:obl	_
18	jinak	jinak	ADV	Db-------------	_	17	advmod	17:advmod	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


