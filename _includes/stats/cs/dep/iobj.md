

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

7477 nodes (1%) are attached to their parents as `iobj`.

4522 instances of `iobj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.99799384779992.

The following 9 pairs of parts of speech are connected with `iobj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (4031; 54% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (1994; 27% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (635; 8% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (411; 5% instances), [cs-pos/VERB]()-[cs-pos/DET]() (324; 4% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (55; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (24; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 iobj	color:blue
1	Mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
2	zde	zde	ADV	Db-------------	PronType=Dem	1	advmod	_	_
3	porovnat	porovnat	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	xcomp	_	_
4	svůj	svůj	DET	P8IS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	LId=svůj-1|LGloss=(přivlast.)
5	vývoj	vývoj	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	7	punct	_	_
7	záměry	záměr	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	5	conj	_	_
8	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	10	case	_	LId=s-1
9	světovými	světový	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	10	amod	_	_
10	trendy	trend	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	3	iobj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 iobj	color:blue
1	Může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
2	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=po-1
3	mně	já	PRON	PP-S6--1-------	Case=Loc|Number=Sing|Person=1|PronType=Prs	7	iobj	_	_
4	takové	takový	DET	PDIP4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	_
5	údaje	údaj	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	7	obj	_	_
6	pojišťovna	pojišťovna	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	nsubj	_	_
7	vyžadovat	vyžadovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
8	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 iobj	color:blue
1	Z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	_	LId=z-1
2	českého	český	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	_	_
3	tisku	tisk	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	_	LGloss=(zvr._zájmeno/částice)
5	čtenář	čtenář	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	9	nsubj	_	_
6	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	LId=o-1
7	současném	současný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	8	amod	_	_
8	Německu	Německo	PROPN	NNNS6-----A----	Case=Loc|Gender=Neut|NameType=Geo|Number=Sing|Polarity=Pos	9	iobj	_	_
9	dovídá	dovídat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	velice	velice	ADV	Db-------------	_	11	advmod	_	_
11	málo	málo	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	9	obj	_	LId=málo-1|LGloss=(málo_+_2._p.,_málo_peněz)

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

2076 nodes (0%) are attached to their parents as `iobj`.

1453 instances of `iobj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.12042389210019.

The following 8 pairs of parts of speech are connected with `iobj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (1334; 64% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (494; 24% instances), [cs-pos/VERB]()-[cs-pos/DET]() (92; 4% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (88; 4% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (48; 2% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (14; 1% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (5; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Zvýšené	zvýšený	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	_	LDeriv=zvýšit
2	úsilí	úsilí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	4	obj	_	_
3	budeme	být	AUX	VB-P---1F-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	4	aux	_	_
4	věnovat	věnovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	0	root	_	_
5	zavádění	zavádění	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	4	iobj	_	LDeriv=zavádět
6	nových	nový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
7	poznatků	poznatek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	_	_
8	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	LId=do-1
9	praxe	praxe	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	Dobrý	dobrý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	_	_
2	vzhled	vzhled	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	_	_
3	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	4	iobj	_	_
4	dodává	dodávat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LDeriv=dodat
5	jistotu	jistota	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	4	obj	_	_
6	a	a	CCONJ	J^-------------	_	7	cc	_	LId=a-1
7	sebevědomí	sebevědomí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	10	punct	_	_
9	které	který	DET	P4NS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	10	obj	_	_
10	potřebujeme	potřebovat	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj	color:blue
1	A	a	CCONJ	J^-------------	_	7	cc	_	_
2	že	že	SCONJ	J,-------------	_	7	advmod	_	_
3	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	7	obj	_	LId=co-1
4	by	být	AUX	Vc-X---3-------	Mood=Cnd|Person=3|VerbForm=Fin	7	aux	_	_
5	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	_	_
6	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	iobj	_	_
7	řekly	říci	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	11	punct	_	_
9	když	když	SCONJ	J,-------------	_	11	mark	_	_
10	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	11	aux	_	_
11	šli	jít	VERB	VpMP---XR-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	advcl	_	_
12	společně	společně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	11	advmod	_	LDeriv=společný
13	darovat	darovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	11	advcl	_	_
14	krev	krev	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	13	obj	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

15 nodes (0%) are attached to their parents as `iobj`.

9 instances of `iobj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.2.

The following 2 pairs of parts of speech are connected with `iobj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (12; 80% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (3; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	4	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	4	nsubj	_	_
4	mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	pověřit	pověřit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	xcomp	_	_
6	vedením	vedení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	5	iobj	_	_
7	svého	svůj	DET	P8ZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	8	det	_	LId=svůj-1
8	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	6	nmod	_	_
9	i	i	CCONJ	J^-------------	_	14	advmod:emph	_	LId=i-1
10	jinou	jiný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	_	_
11	právnickou	právnický	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	_	_
12	nebo	nebo	CCONJ	J^-------------	_	13	cc	_	_
13	fyzickou	fyzický	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	conj	_	_
14	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	5	obj	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 35 iobj	color:blue
1	(4)	(4)	PUNCT	Z:-------------	_	14	punct	_	_
2	Z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	LId=z-1
3	účetních	účetní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	4	amod	_	LId=účetní-1
4	jednotek	jednotka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	14	obl	_	_
5	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	_	LId=podle-2
6	§	§	X	X@-------------	_	14	advmod	_	_
7	1	1	X	X@-------------	_	6	flat	_	_
8	odst.	odst.	X	X@-------------	_	6	flat	_	_
9	2	2	X	X@-------------	_	6	flat	_	_
10	písm.	písm.	X	X@-------------	_	6	flat	_	_
11	d)	d)	X	X@-------------	_	6	flat	_	_
12	až	až	X	X@-------------	_	6	flat	_	_
13	h)	h)	X	X@-------------	_	6	flat	_	_
14	mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
15	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	14	xcomp	_	LId=vést-1
16	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	15	obj	_	_
17	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	19	case	_	LId=v-1
18	zjednodušeném	zjednodušený	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	19	amod	_	_
19	rozsahu	rozsah	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	16	nmod	_	_
20	ty	ten	PRON	PDFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	14	nsubj	_	SpaceAfter=No
21	,	,	PUNCT	Z:-------------	_	23	punct	_	_
22	které	který	PRON	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	23	nsubj	_	_
23	nemají	mít	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	20	acl	_	_
24	povinnost	povinnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	23	obj	_	_
25	mít	mít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	24	acl	_	_
26	účetní	účetní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	_	LId=účetní-1
27	závěrku	závěrka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	25	obj	_	_
28	ověřenu	ověřit	VERB	VsFS4--XX-AP---	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	27	xcomp	_	_
29	auditorem	auditor	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	28	obj	_	SpaceAfter=No
30	,	,	PUNCT	Z:-------------	_	32	punct	_	_
31	nebo	nebo	CCONJ	J^-------------	_	32	cc	_	_
32	ty	ten	PRON	PDMP4----------	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	20	conj	_	SpaceAfter=No
33	,	,	PUNCT	Z:-------------	_	37	punct	_	_
34	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	35	case	_	LId=o-1
35	nichž	jenž	PRON	P9XP6----------	Case=Loc|Number=Plur|PrepCase=Pre|PronType=Rel	37	iobj	_	_
36	to	ten	PRON	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	37	obj	_	_
37	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	32	acl	_	_
38	zvláštní	zvláštní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	39	amod	_	_
39	zákon	zákon	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	37	nsubj	_	SpaceAfter=No
40	.	.	PUNCT	Z:-------------	_	14	punct	_	_

~~~


