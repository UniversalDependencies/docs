---
layout: base
title:  'Statistics of iobj in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `iobj`

This relation is universal.

3 nodes (0%) are attached to their parents as `iobj`.

2 instances of `iobj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 63	bgColor:blue
# visual-style 63	fgColor:white
# visual-style 56	bgColor:blue
# visual-style 56	fgColor:white
# visual-style 56 63 iobj	color:blue
1	(4)	(4)	PUNCT	Z:-------------	_	50	punct	50:punct	_
2	Knihy	kniha	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	50	obj	50:obj	_
3	analytické	analytický	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	4:amod	_
4	evidence	evidence	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	2	nmod	2:nmod:gen	_
5	pohledávek	pohledávka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	4	nmod	4:nmod:gen	_
6	a	a	CCONJ	J^-------------	_	7	cc	7:cc	LId=a-1
7	závazků	závazek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	conj	4:nmod:gen|5:conj	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
9	účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	10	amod	10:amod	LId=účetní-1
10	doklady	doklad	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	2	conj	2:conj|50:obj	_
11	a	a	CCONJ	J^-------------	_	14	cc	14:cc	LId=a-1
12	jiné	jiný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	14	amod	14:amod	_
13	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	14	amod	14:amod	LId=účetní-1
14	písemnosti	písemnost	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	10	conj	10:conj|17:nsubj|50:obj	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	17	punct	17:punct	_
16	které	který	DET	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	17	nsubj	14:ref	_
17	vyplývají	vyplývat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl:relcl	14:acl:relcl	_
18	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	20	case	20:case	LId=z-1
19	přímého	přímý	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	20	amod	20:amod	_
20	styku	styk	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	17	obl:arg	17:obl:arg:z:gen	_
21	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	22	case	22:case	LId=s-1
22	cizinou	cizina	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	20	nmod	20:nmod:s:ins	_
23	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	24	case	24:case	LId=z-1
24	doby	doba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	20	nmod	20:nmod:z:gen	_
25	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	28	case	28:case	LId=před-1
26	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	28	nummod	28:nummod	SpaceAfter=No
27	.	.	PUNCT	Z:-------------	_	26	punct	26:punct	_
28	lednem	leden	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	24	nmod	24:nmod:před:ins	_
29	1949	1949	NUM	C}-------------	NumForm=Roman|NumType=Card	28	nummod	28:nummod	SpaceAfter=No
30	,	,	PUNCT	Z:-------------	_	33	punct	33:punct	_
31	a	a	CCONJ	J^-------------	_	33	cc	33:cc	LId=a-1
32	účetní	účetní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	33	amod	33:amod	LId=účetní-1
33	závěrku	závěrka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	2	conj	2:conj|50:obj	_
34	vztahující	vztahující	ADJ	AGFS4-----A----	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	33	amod	33:amod	_
35	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	34	expl:pv	34:expl:pv	_
36	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	37	case	37:case	LId=k-1
37	převodu	převod	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	34	obl:arg	34:obl:arg:k:dat	_
38	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	37	nmod	37:nmod:gen	_
39	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	44	case	44:case	LId=na-1
40	jiné	jiný	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	44	amod	44:amod	_
41	právnické	právnický	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	44	amod	44:amod	_
42	nebo	nebo	CCONJ	J^-------------	_	43	cc	43:cc	_
43	fyzické	fyzický	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	41	conj	41:conj|44:amod	_
44	osoby	osoba	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	37	nmod	37:nmod:na:acc	_
45	provedenému	provedený	ADJ	AANS3----1A----	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	37	amod	37:amod	_
46	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	49	case	49:case	LId=podle-2
47	zvláštních	zvláštní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	49	amod	49:amod	_
48	právních	právní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	49	amod	49:amod	_
49	předpisů	předpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	45	obl	45:obl:podle:gen	_
50	uschovávají	uschovávat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
51	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	52	amod	52:amod	LId=účetní-1
52	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	50	nsubj	50:nsubj	SpaceAfter=No
53	,	,	PUNCT	Z:-------------	_	56	punct	56:punct	_
54	dokud	dokud	SCONJ	J,-------------	_	56	mark	56:mark	_
55	ministerstvo	ministerstvo	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	56	nsubj	56:nsubj	_
56	nedá	dát	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	50	advcl	50:advcl:dokud	_
57	samo	samý	DET	PLNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Emp|Variant=Short	56	xcomp	56:xcomp	_
58	nebo	nebo	CCONJ	J^-------------	_	60	cc	60:cc	_
59	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	60	case	60:case	LId=na-1
60	žádost	žádost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	57	conj	56:xcomp|57:conj	_
61	účetní	účetní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	62	amod	62:amod	LId=účetní-1
62	jednotky	jednotka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	60	nmod	60:nmod:gen	_
63	souhlas	souhlas	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	56	iobj	56:iobj	_
64	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	65	case	65:case	LId=k-1
65	vyřazení	vyřazení	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	63	nmod	63:nmod:k:dat	_
66	těchto	tento	DET	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	67	det	67:det	_
67	písemností	písemnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	65	nmod	65:nmod:gen	SpaceAfter=No
68	.	.	PUNCT	Z:-------------	_	50	punct	50:punct	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 36 iobj	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	5	punct	5:punct	_
2	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	nsubj	5:nsubj	_
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	povinna	povinný	ADJ	ACQW------A----	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	0	root	0:root	_
6	použít	použít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	xcomp	5:xcomp	_
7	účetní	účetní	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	8	nmod	8:nmod:acc	LId=účetní-2
8	metody	metoda	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	6	nmod	6:nmod:gen	_
9	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	6	obl	6:obl:ins|12:nsubj	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
11	který	který	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	12	nsubj	9:ref	_
12	vychází	vycházet	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	acl:relcl	9:acl:relcl	_
13	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	14	case	14:case	LId=z-1
14	předpokladu	předpoklad	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	12	obl:arg	12:obl:arg:z:gen	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	19	punct	19:punct	_
16	že	že	SCONJ	J,-------------	_	19	mark	19:mark	_
17	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	19	aux	19:aux	_
18	nepřetržitě	přetržitě	ADV	Dg-------1N----	Degree=Pos|Polarity=Neg	19	advmod	19:advmod	_
19	pokračovat	pokračovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	14	acl	14:acl:že	_
20	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	22	case	22:case	LId=v-1
21	své	svůj	DET	P8FS6---------1	Case=Loc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	22	det	22:det	LId=svůj-1
22	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	19	obl:arg	19:obl:arg:v:loc	_
23	a	a	CCONJ	J^-------------	_	27	cc	27:cc	LId=a-1
24	že	že	SCONJ	J,-------------	_	27	mark	27:mark	_
25	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	26	case	26:case	LId=u-1
26	ní	on	PRON	P5FS2--3-------	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs	27	obl	27:obl:u:gen	LId=on-1
27	nenastává	nastávat	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	19	conj	14:acl:že|19:conj	_
28	žádná	žádný	DET	PWFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Neg	29	det	29:det	_
29	skutečnost	skutečnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	27	nsubj	27:nsubj|34:nsubj	SpaceAfter=No
30	,	,	PUNCT	Z:-------------	_	34	punct	34:punct	_
31	která	který	DET	P4FS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Int,Rel	34	nsubj	29:ref	_
32	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	34	aux	34:aux	_
33	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	34	obj	34:obj	LId=on-1
34	omezovala	omezovat	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	29	acl:relcl	29:acl:relcl	_
35	nebo	nebo	CCONJ	J^-------------	_	37	cc	37:cc	_
36	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	37	iobj	37:iobj	LId=on-1
37	zabraňovala	zabraňovat	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	34	conj	29:acl:relcl|34:conj	_
38	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	40	case	40:case	LId=v-1
39	této	tento	DET	PDFS6----------	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	40	det	40:det	_
40	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	41	obl:arg	41:obl:arg:v:loc	_
41	pokračovat	pokračovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	37	xcomp	37:xcomp	_
42	i	i	CCONJ	J^-------------	_	45	advmod:emph	45:advmod:emph	LId=i-1
43	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	45	case	45:case	LId=v-1
44	dohledné	dohledný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	45	amod	45:amod	_
45	budoucnosti	budoucnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	41	obl	41:obl:v:loc	SpaceAfter=No
46	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


