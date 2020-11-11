---
layout: base
title:  'Statistics of nummod in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="cs_cltt-dep-nummod-gov.html">nummod:gov</a></tt>.

286 nodes (1%) are attached to their parents as `nummod`.

196 instances of `nummod` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20629370629371.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (284; 99% instances), <tt><a href="cs_cltt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	8	punct	_	_
2	Při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=při-1
3	průběžné	průběžný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
4	inventarizaci	inventarizace	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	8	obl	_	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pass	_	_
6	odstavec	odstavec	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	nsubj:pass	_	_
7	4	4	NUM	C}-------------	NumForm=Roman|NumType=Card	6	nummod	_	_
8	použije	použít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	obdobně	obdobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 40 39 nummod	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	5	punct	_	_
2	Podstatným	podstatný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	_	_
3	vlivem	vliv	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl:arg	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	_	_
5	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	takový	takový	DET	PDIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
7	významný	významný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	_	_
8	vliv	vliv	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj:pass	_	_
9	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	LId=na-1
10	řízení	řízení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	8	nmod	_	_
11	nebo	nebo	CCONJ	J^-------------	_	12	cc	_	_
12	provozování	provozování	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	10	conj	_	_
13	podniku	podnik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	10	nmod	_	_
14	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	17	case	_	LId=podle-2
15	zvláštního	zvláštní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	17	amod	_	_
16	právního	právní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	17	amod	_	_
17	předpisu	předpis	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	10	nmod	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	21	punct	_	_
19	jenž	jenž	PRON	PJYS1----------	Case=Nom|Gender=Masc|Number=Sing|PrepCase=Npr|PronType=Rel	21	nsubj	_	_
20	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	21	cop	_	_
21	rozhodující	rozhodující	ADJ	AGMS1-----A----	Animacy=Anim|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	8	acl:relcl	_	_
22	ani	ani	CCONJ	J^-------------	_	23	cc	_	_
23	společný	společný	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	21	conj	_	SpaceAfter=No
24	;	;	PUNCT	Z:-------------	_	28	punct	_	_
25	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	28	cop	_	SpaceAfter=No
26	-	-	PUNCT	Z:-------------	_	28	punct	_	SpaceAfter=No
27	li	li	PART	TT-------------	_	28	mark	_	_
28	prokázán	prokázaný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	31	advcl	_	LDeriv=prokázat
29	opak	opak	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	28	nsubj	_	SpaceAfter=No
30	,	,	PUNCT	Z:-------------	_	28	punct	_	_
31	považuje	považovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	_
32	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	31	expl:pass	_	_
33	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	35	case	_	LId=za-1
34	podstatný	podstatný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	35	amod	_	_
35	vliv	vliv	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	31	obl:arg	_	_
36	dispozice	dispozice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	31	nsubj:pass	_	_
37	nejméně	málo	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	40	advmod:emph	_	LId=málo-3
38	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	40	case	_	LId=s-1
39	20	20	NUM	C}-------------	NumForm=Roman|NumType=Card	40	nummod	_	_
40	%	%	SYM	Z:-------------	_	36	nmod	_	_
41	hlasovacích	hlasovací	ADJ	AANP2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	42	amod	_	_
42	práv	právo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	40	nmod	_	SpaceAfter=No
43	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nummod	color:blue
1	2	2	NUM	C}-------------	NumForm=Roman|NumType=Card	37	nmod	_	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	_	_
3	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=v-1
4	prvním	první	ADJ	CrIS6----------	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|NumType=Ord	5	amod	_	_
5	dni	den	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	37	obl	_	_
6	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	7	amod	_	LId=účetní-1
7	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	5	nmod	_	_
8	započatého	započatý	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	7	amod	_	_
9	1.ledna	1.ledna	X	X@-------------	_	8	obl	_	_
10	2004	2004	NUM	C}-------------	NumForm=Roman|NumType=Card	9	nummod	_	_
11	a	a	CCONJ	J^-------------	_	12	cc	_	LId=a-1
12	později	pozdě	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	9	conj	_	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	37	expl:pass	_	_
14	opravné	opravný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	15	amod	_	_
15	položky	položka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	37	nsubj:pass	_	_
16	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	17	case	_	LId=u-1
17	pohledávek	pohledávka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	15	nmod	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	22	punct	_	_
19	které	který	DET	P4FP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Int,Rel	22	obj	_	_
20	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	21	amod	_	LId=účetní-1
21	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	22	nsubj	_	_
22	nabyla	nabýt	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	17	acl:relcl	_	_
23	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	25	case	_	LId=v-1
24	účetních	účetní	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	25	amod	_	LId=účetní-1
25	obdobích	období	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Number=Plur|Polarity=Pos	22	obl	_	_
26	započatých	započatý	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	25	amod	_	_
27	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	30	case	_	LId=před-1
28	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	30	nummod	_	SpaceAfter=No
29	.	.	PUNCT	Z:-------------	_	28	punct	_	_
30	lednem	leden	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	26	obl	_	_
31	2004	2004	NUM	C}-------------	NumForm=Roman|NumType=Card	30	nummod	_	_
32	a	a	CCONJ	J^-------------	_	33	cc	_	LId=a-1
33	určila	určit	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	22	conj	_	_
34	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	35	case	_	LId=k-1
35	obchodování	obchodování	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	33	obl	_	SpaceAfter=No
36	,	,	PUNCT	Z:-------------	_	22	punct	_	_
37	zruší	zrušit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
38	ve	v	ADP	RV--4----------	AdpType=Voc|Case=Acc	40	case	_	LId=v-1
39	prospěch	prospěch	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	38	fixed	_	_
40	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	37	obl	_	SpaceAfter=No
41	;	;	PUNCT	Z:-------------	_	46	punct	_	_
42	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	44	case	_	LId=k-1
43	stejnému	stejný	ADJ	AAIS3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	44	amod	_	_
44	okamžiku	okamžik	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	46	obl	_	_
45	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	46	expl:pass	_	_
46	zaúčtuje	zaúčtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	37	conj	_	_
47	snížení	snížení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	46	nsubj:pass	_	_
48	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	47	nmod	_	_
49	pohledávek	pohledávka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	48	nmod	_	_
50	prostřednictvím	prostřednictvím	ADP	RR--2----------	AdpType=Prep|Case=Gen	51	case	_	_
51	účtu	účet	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	47	nmod	_	_
52	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	54	case	_	LId=v-1
53	účtové	účtový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	54	amod	_	_
54	skupině	skupina	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	51	nmod	_	_
55	58	58	NUM	C}-------------	NumForm=Roman|NumType=Card	54	nummod	_	SpaceAfter=No
56	.	.	PUNCT	Z:-------------	_	37	punct	_	_

~~~


