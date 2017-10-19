

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is a language-specific subtype of [expl]().
There are also 1 other language-specific subtypes of `expl`: [expl:pass]().

113 nodes (0%) are attached to their parents as `expl:pv`.

78 instances of `expl:pv` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86725663716814.

The following 4 pairs of parts of speech are connected with `expl:pv`: [-pos/VERB]()-[-pos/PRON]() (80; 71% instances), [-pos/ADJ]()-[-pos/PRON]() (28; 25% instances), [-pos/X]()-[-pos/PRON]() (3; 3% instances), [-pos/NOUN]()-[-pos/PRON]() (2; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pv	color:blue
1	Vykazují	vykazovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	_
3	zde	zde	ADV	Db-------------	_	1	advmod	_	_
4	i	i	CCONJ	J^-------------	_	7	advmod:emph	_	LId=i-1
5	nakoupené	nakoupený	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
6	opční	opční	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
7	listy	list	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	1	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl:pv	color:blue
1	Každou	každý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	skutečnost	skutečnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	11	obj	_	_
3	týkající	týkající	ADJ	AGFS4-----A----	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pv	_	_
5	vedení	vedení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	3	obj	_	_
6	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	5	nmod	_	_
7	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
8	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	9	amod	_	LId=účetní-1
9	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	10	nsubj	_	_
10	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	_	_
11	zaznamenávat	zaznamenávat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	10	xcomp	_	_
12	výhradně	výhradně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	11	advmod	_	_
13	jen	jen	PART	TT-------------	_	15	advmod:emph	_	LId=jen-1
14	účetními	účetní	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	15	amod	_	LId=účetní-1
15	záznamy	záznam	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	11	obl	_	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 33 expl:pv	color:blue
1	(4)	(4)	PUNCT	Z:-------------	_	13	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	13	nsubj	_	_
4	uvedené	uvedený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=v-1
6	§	§	X	X@-------------	_	4	advmod	_	_
7	1	1	X	X@-------------	_	6	flat	_	_
8	odst.	odst.	X	X@-------------	_	6	flat	_	_
9	2	2	X	X@-------------	_	6	flat	_	_
10	písm.	písm.	X	X@-------------	_	6	flat	_	_
11	f)	f)	X	X@-------------	_	6	flat	_	_
12	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
13	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	_	_
14	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	13	xcomp	_	LId=vést-1
15	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	14	obj	_	_
16	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	18	case	_	LId=od-1
17	prvního	první	ADJ	CrIS2----------	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumType=Ord	18	amod	_	_
18	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	14	obl	_	_
19	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	20	amod	_	LId=účetní-1
20	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	18	nmod	_	_
21	následujícího	následující	ADJ	AGNS2-----A----	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	20	amod	_	_
22	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	23	case	_	LId=po-1
23	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	21	obl	_	SpaceAfter=No
24	,	,	PUNCT	Z:-------------	_	28	punct	_	_
25	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	26	case	_	LId=v-1
26	kterém	který	PRON	P4ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	28	advmod	_	_
27	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	28	expl:pv	_	_
28	rozhodly	rozhodnout	VERB	VpTP---XR-AA--1	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	23	acl	_	_
29	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	28	xcomp	_	LId=vést-1
30	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	29	obj	_	SpaceAfter=No
31	,	,	PUNCT	Z:-------------	_	32	punct	_	_
32	nerozhodnou-li	nerozhodnou-li	X	X@-------------	_	13	advmod	_	_
33	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	32	expl:pv	_	_
34	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	32	xcomp	_	LId=vést-1
35	účetnictví	účetnictví	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	34	obj	_	_
36	již	již	ADV	Db-------------	_	38	advmod:emph	_	_
37	ode	od	ADP	RV--2----------	AdpType=Voc|Case=Gen	38	case	_	LId=od-1
38	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	34	obl	_	_
39	zahájení	zahájení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	38	nmod	_	_
40	podnikání	podnikání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	39	nmod	_	_
41	nebo	nebo	CCONJ	J^-------------	_	45	cc	_	_
42	jiné	jiný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	45	amod	_	_
43	samostatné	samostatný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	45	amod	_	_
44	výdělečné	výdělečný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	45	amod	_	_
45	činnosti	činnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	40	conj	_	SpaceAfter=No
46	,	,	PUNCT	Z:-------------	_	49	punct	_	_
47	až	až	PART	TT-------------	_	49	advmod:emph	_	LId=až-3
48	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	49	case	_	LId=do-1
49	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	34	obl	_	_
50	ukončení	ukončení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	49	nmod	_	_
51	uvedených	uvedený	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	52	amod	_	_
52	činností	činnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	50	nmod	_	_
53	nebo	nebo	CCONJ	J^-------------	_	49	cc	_	ToDo=cc-without-conj
54	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	56	case	_	LId=do-1
55	posledního	poslední	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	56	amod	_	_
56	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	49	obl	_	_
57	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	58	amod	_	LId=účetní-1
58	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	56	nmod	_	SpaceAfter=No
59	,	,	PUNCT	Z:-------------	_	63	punct	_	_
60	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	61	case	_	LId=v-1
61	kterém	který	PRON	P4ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	63	advmod	_	_
62	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	63	expl:pv	_	_
63	rozhodly	rozhodnout	VERB	VpTP---XR-AA--1	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	58	acl	_	_
64	vedení	vedení	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	66	obj	_	_
65	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	64	nmod	_	_
66	ukončit	ukončit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	63	xcomp	_	SpaceAfter=No
67	,	,	PUNCT	Z:-------------	_	69	punct	_	_
68	a	a	CCONJ	J^-------------	_	69	cc	_	LId=a-1
69	nevznikla-li	nevznikla-li	X	X@-------------	_	32	conj	_	_
70	jim	on	PRON	PPXP3--3-------	Case=Dat|Number=Plur|Person=3|PronType=Prs	69	obj	_	LId=on-1
71	povinnost	povinnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	69	nsubj	_	_
72	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	71	acl	_	LId=vést-1
73	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	72	obj	_	_
74	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	75	case	_	LId=podle-2
75	§	§	X	X@-------------	_	72	advmod	_	_
76	1	1	X	X@-------------	_	75	flat	_	_
77	odst.	odst.	X	X@-------------	_	75	flat	_	_
78	2	2	X	X@-------------	_	75	flat	_	_
79	písm.	písm.	X	X@-------------	_	75	flat	_	_
80	d),	d),	X	X@-------------	_	75	flat	_	_
81	e),	e),	X	X@-------------	_	75	flat	_	_
82	g)	g)	X	X@-------------	_	75	flat	_	_
83	nebo	nebo	CCONJ	J^-------------	_	84	cc	_	_
84	h)	h)	X	X@-------------	_	75	conj	_	SpaceAfter=No
85	.	.	PUNCT	Z:-------------	_	13	punct	_	_

~~~


