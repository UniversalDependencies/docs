

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is a language-specific subtype of [expl]().
There are also 1 other language-specific subtypes of `expl`: [expl:pv]().

358 nodes (1%) are attached to their parents as `expl:pass`.

325 instances of `expl:pass` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27932960893855.

The following 3 pairs of parts of speech are connected with `expl:pass`: [-pos/VERB]()-[-pos/PRON]() (350; 98% instances), [-pos/VERB]()-[-pos/ADP]() (5; 1% instances), [-pos/NOUN]()-[-pos/PRON]() (3; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:pass	color:blue
1	Zřizovací	zřizovací	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	_	_
2	výdaje	výdaj	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	4	nsubj:pass	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	_	_
4	odpisují	odpisovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	nejvýše	vysoko	ADV	Dg-------2A---1	Degree=Cmp|Polarity=Pos	4	advmod	_	LId=vysoko-1
6	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	_	LId=po-1
7	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	_	_
8	pěti	pět	NUM	Cn-P2----------	Case=Gen|Number=Plur|NumForm=Word|NumType=Card	9	nummod	_	LId=pět-1
9	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 expl:pass	color:blue
1	Pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	2	case	_	LId=pro-1
2	účely	účel	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	10	obl	_	_
3	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	2	nmod	_	_
5	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	10	expl:pass	_	LId=s-1
6	rozvahovým	rozvahový	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	7	amod	_	_
7	dnem	den	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	10	obj	_	_
8	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=pro-1
9	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	7	nmod	_	_
10	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	den	den	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	10	nsubj:pass	_	SpaceAfter=No|LId=den-2
12	,	,	PUNCT	Z:-------------	_	16	punct	_	_
13	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	14	case	_	LId=k-1
14	němuž	jenž	PRON	P9ZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PrepCase=Pre|PronType=Rel	16	obl	_	_
15	byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	16	aux:pass	_	_
16	sestavena	sestavit	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	11	acl	_	_
17	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	18	amod	_	LId=účetní-1
18	závěrka	závěrka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	16	nsubj:pass	_	_
19	využitá	využitý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	18	amod	_	_
20	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	21	case	_	LId=pro-1
21	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	19	obl	_	_
22	jmění	jmění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	21	nmod	_	_
23	posudkem	posudek	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	21	nmod	_	_
24	znalce	znalec	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	23	nmod	_	_
25	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	26	case	_	LId=pro-1
26	projekt	projekt	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	24	nmod	_	_
27	přeměny	přeměna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	26	nmod	_	_
28	společnosti	společnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	27	nmod	_	SpaceAfter=No
29	.	.	PUNCT	Z:-------------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pass	color:blue
1	Nestanoví-li	Nestanoví-li	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	14	obl	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	_
3	dále	dále	ADV	Db------------1	_	1	advmod	_	LId=dále-3
4	jinak	jinak	ADV	Db-------------	_	1	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	1	punct	_	_
6	ustanovení	ustanovení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	14	nsubj:pass	_	_
7	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	8	det	_	_
8	zákona	zákon	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	6	nmod	_	_
9	týkající	týkající	ADJ	AGFP1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	_	_
11	výroční	výroční	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	12	amod	_	_
12	zprávy	zpráva	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	9	obj	_	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	14	expl:pass	_	_
14	použijí	použít	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
15	i	i	CCONJ	J^-------------	_	19	advmod:emph	_	LId=i-1
16	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	19	case	_	LId=pro-1
17	konsolidovanou	konsolidovaný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	19	amod	_	_
18	výroční	výroční	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	19	amod	_	_
19	zprávu	zpráva	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	14	obl	_	SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	14	punct	_	_

~~~


