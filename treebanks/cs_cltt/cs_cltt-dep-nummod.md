---
layout: base
title:  'Statistics of nummod in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="cs_cltt-dep-nummod-gov.html">nummod:gov</a></tt>.

283 nodes (1%) are attached to their parents as `nummod`.

194 instances of `nummod` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17667844522968.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (281; 99% instances), <tt><a href="cs_cltt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	HLAVA	hlava	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	_
2	II	II	NUM	C}-------------	NumForm=Roman|NumType=Card	1	nummod	1:nummod	LId=II-3

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 40 39 nummod	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	5	punct	5:punct	_
2	Podstatným	podstatný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	vlivem	vliv	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl:arg	5:obl:arg:ins	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	5:expl:pass	_
5	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	takový	takový	DET	PDIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	8	det	8:det	_
7	významný	významný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	8:amod	_
8	vliv	vliv	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj:pass	5:nsubj:pass|21:nsubj	_
9	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	10:case	LId=na-1
10	řízení	řízení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	8	nmod	8:nmod:na:acc	_
11	nebo	nebo	CCONJ	J^-------------	_	12	cc	12:cc	_
12	provozování	provozování	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	10	conj	8:nmod:na:acc|10:conj	_
13	podniku	podnik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	10	nmod	10:nmod:gen|12:nmod:gen	_
14	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	17	case	17:case	LId=podle-2
15	zvláštního	zvláštní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	17	amod	17:amod	_
16	právního	právní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	17	amod	17:amod	_
17	předpisu	předpis	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	10	nmod	10:nmod:podle:gen|12:nmod:podle:gen	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	21	punct	21:punct	_
19	jenž	jenž	PRON	PJYS1----------	Case=Nom|Gender=Masc|Number=Sing|PrepCase=Npr|PronType=Rel	21	nsubj	8:ref	_
20	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	21	cop	21:cop	_
21	rozhodující	rozhodující	ADJ	AGMS1-----A----	Animacy=Anim|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	8	acl:relcl	8:acl:relcl	_
22	ani	ani	CCONJ	J^-------------	_	23	cc	23:cc	_
23	společný	společný	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	21	conj	8:acl:relcl|21:conj	SpaceAfter=No
24	;	;	PUNCT	Z:-------------	_	28	punct	28:punct	_
25	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	28	cop	28:cop	SpaceAfter=No
26	-	-	PUNCT	Z:-------------	_	28	punct	28:punct	SpaceAfter=No
27	li	li	PART	TT-------------	_	28	mark	28:mark	_
28	prokázán	prokázaný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	31	advcl	31:advcl:li	LDeriv=prokázat
29	opak	opak	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	28	nsubj	28:nsubj	SpaceAfter=No
30	,	,	PUNCT	Z:-------------	_	28	punct	28:punct	_
31	považuje	považovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	5:parataxis	_
32	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	31	expl:pass	31:expl:pass	_
33	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	35	case	35:case	LId=za-1
34	podstatný	podstatný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	35	amod	35:amod	_
35	vliv	vliv	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	31	obl:arg	31:obl:arg:za:acc	_
36	dispozice	dispozice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	31	nsubj:pass	31:nsubj:pass	_
37	nejméně	málo	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	40	advmod:emph	40:advmod:emph	LId=málo-3
38	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	40	case	40:case	LId=s-1
39	20	20	NUM	C}-------------	NumForm=Roman|NumType=Card	40	nummod	40:nummod	_
40	%	%	SYM	Z:-------------	_	36	nmod	36:nmod:s:ins	_
41	hlasovacích	hlasovací	ADJ	AANP2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	42	amod	42:amod	_
42	práv	právo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	40	nmod	40:nmod:gen	SpaceAfter=No
43	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nummod	color:blue
1	2	2	NUM	C}-------------	NumForm=Roman|NumType=Card	37	nmod	37:nmod|46:nmod	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_
3	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	5:case	LId=v-1
4	prvním	první	ADJ	CrIS6----------	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|NumType=Ord	5	amod	5:amod	_
5	dni	den	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	37	obl	37:obl:v:loc	_
6	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	7	amod	7:amod	LId=účetní-1
7	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	5	nmod	5:nmod:gen	_
8	započatého	započatý	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	7	amod	7:amod	_
9	1.ledna	1.ledna	X	X@-------------	_	8	obl	8:obl	_
10	2004	2004	NUM	C}-------------	NumForm=Roman|NumType=Card	9	nummod	9:nummod	_
11	a	a	CCONJ	J^-------------	_	12	cc	12:cc	LId=a-1
12	později	pozdě	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	9	conj	8:advmod|9:conj	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	37	expl:pass	37:expl:pass	_
14	opravné	opravný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	15	amod	15:amod	_
15	položky	položka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	37	nsubj:pass	37:nsubj:pass	_
16	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	17	case	17:case	LId=u-1
17	pohledávek	pohledávka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	15	nmod	15:nmod:u:gen|22:obj|33:obj	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	22	punct	22:punct	_
19	které	který	DET	P4FP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Int,Rel	22	obj	17:ref	_
20	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	21	amod	21:amod	LId=účetní-1
21	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	22	nsubj	22:nsubj|33:nsubj	_
22	nabyla	nabýt	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	17	acl:relcl	17:acl:relcl	_
23	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	25	case	25:case	LId=v-1
24	účetních	účetní	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	25	amod	25:amod	LId=účetní-1
25	obdobích	období	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Number=Plur|Polarity=Pos	22	obl	22:obl:v:loc	_
26	započatých	započatý	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	25	amod	25:amod	_
27	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	30	case	30:case	LId=před-1
28	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	30	nummod	30:nummod	SpaceAfter=No
29	.	.	PUNCT	Z:-------------	_	28	punct	28:punct	_
30	lednem	leden	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	26	obl	26:obl:před:ins	_
31	2004	2004	NUM	C}-------------	NumForm=Roman|NumType=Card	30	nummod	30:nummod	_
32	a	a	CCONJ	J^-------------	_	33	cc	33:cc	LId=a-1
33	určila	určit	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	22	conj	17:acl:relcl|22:conj	_
34	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	35	case	35:case	LId=k-1
35	obchodování	obchodování	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	33	obl	33:obl:k:dat	SpaceAfter=No
36	,	,	PUNCT	Z:-------------	_	22	punct	22:punct	_
37	zruší	zrušit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
38	ve	v	ADP	RV--4----------	AdpType=Voc|Case=Acc	40	case	40:case	LId=v-1
39	prospěch	prospěch	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	38	fixed	38:fixed	_
40	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	37	obl	37:obl:ve_prospěch:gen	SpaceAfter=No
41	;	;	PUNCT	Z:-------------	_	46	punct	46:punct	_
42	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	44	case	44:case	LId=k-1
43	stejnému	stejný	ADJ	AAIS3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	44	amod	44:amod	_
44	okamžiku	okamžik	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	46	obl	46:obl:k:dat	_
45	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	46	expl:pass	46:expl:pass	_
46	zaúčtuje	zaúčtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	37	conj	0:root|37:conj	_
47	snížení	snížení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	46	nsubj:pass	46:nsubj:pass	_
48	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	47	nmod	47:nmod:gen	_
49	pohledávek	pohledávka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	48	nmod	48:nmod:gen	_
50	prostřednictvím	prostřednictvím	ADP	RR--2----------	AdpType=Prep|Case=Gen	51	case	51:case	_
51	účtu	účet	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	47	nmod	47:nmod:prostřednictvím:gen	_
52	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	54	case	54:case	LId=v-1
53	účtové	účtový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	54	amod	54:amod	_
54	skupině	skupina	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	51	nmod	51:nmod:v:loc	_
55	58	58	NUM	C}-------------	NumForm=Roman|NumType=Card	54	nummod	54:nummod	SpaceAfter=No
56	.	.	PUNCT	Z:-------------	_	37	punct	37:punct	_

~~~


