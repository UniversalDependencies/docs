

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

5047 nodes (0%) are attached to their parents as `csubj`.

4582 instances of `csubj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.50544878145433.

The following 28 pairs of parts of speech are connected with `csubj`: [cs-pos/VERB]()-[cs-pos/VERB]() (2326; 46% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (1770; 35% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (588; 12% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (79; 2% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (65; 1% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (54; 1% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (38; 1% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (28; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (25; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (20; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (14; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (9; 0% instances), [cs-pos/DET]()-[cs-pos/VERB]() (8; 0% instances), [cs-pos/VERB]()-[cs-pos/DET]() (4; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	Přesto	přesto	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	cc	_	_
2	však	však	CCONJ	J^-------------	_	3	cc	_	_
3	lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	zaznamenat	zaznamenat	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	3	csubj	_	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=v-1
6	podniku	podnik	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	obl	_	_
7	citelné	citelný	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	_	_
8	změny	změna	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	4	obj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 csubj	color:blue
1	Změny	změna	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	_	_
2	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	citelné	citelný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	6	punct	_	_
5	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	třeba	třeba	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	3	conj	_	LId=třeba-1
7	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	9	obj	_	LId=on-1|LGloss=(oni/ono)
8	lépe	dobře	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	9	advmod	_	_
9	prezentovat	prezentovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj	color:blue
1	Stavět	stavět	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	7	csubj	_	_
2	vlastní	vlastní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	LId=vlastní-1|LGloss=(příslušný_k_něčemu)
3	výtopnu	výtopna	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	1	obj	_	_
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
5	prozatím	prozatím	ADV	Db-------------	_	7	advmod	_	_
6	patrně	patrně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	_	LDeriv=patrný
7	risk	risk	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

2261 nodes (0%) are attached to their parents as `csubj`.

2159 instances of `csubj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.02786377708978.

The following 26 pairs of parts of speech are connected with `csubj`: [cs-pos/VERB]()-[cs-pos/VERB]() (835; 37% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (832; 37% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (300; 13% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (151; 7% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (43; 2% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (36; 2% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (13; 1% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (11; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (9; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (6; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (5; 0% instances), [cs-pos/SYM]()-[cs-pos/VERB]() (3; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/DET]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/AUX]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj	color:blue
1	Zdá	zdát	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	SpaceAfter=No|LGloss=(zvr._zájmeno/částice)
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	že	že	SCONJ	J,-------------	_	6	mark	_	_
5	dobře	dobře	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	_	_
6	ovládá	ovládat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	_	_
7	početný	početný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	_	LGloss=(velké_množství)
8	rejstřík	rejstřík	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	6	obj	_	_
9	hereckých	herecký	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	10	amod	_	_
10	prostředků	prostředek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	8	nmod	_	SpaceAfter=No|LId=prostředek-2|LGloss=(způsob,_nástroj)
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 csubj	color:blue
1	Rozpoznat	rozpoznat	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	8	csubj	_	_
2	a	a	CCONJ	J^-------------	_	4	cc	_	LId=a-1
3	správně	správně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	4	advmod	_	LGloss=(podle_něj._měřítek;_př._chlap,_míra,...)|LDeriv=správný
4	zařadit	zařadit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	conj	_	_
5	typy	typ	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	1	obj	_	_
6	pleti	pleť	NOUN	NNFS2-----A---1	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	_	_
7	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	lehké	lehký	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	Přihlášky	přihláška	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	_	_
2	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	třeba	třeba	ADV	Db-------------	_	0	root	_	LId=třeba-2|LGloss=(například)
4	potom	potom	ADV	Db-------------	_	5	advmod	_	_
5	předložit	předložit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	3	csubj	_	_
6	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	_	LId=do-1
7	#	&cdate;	NUM	C=-------------	NumForm=Digit|NumType=Card	5	obl	_	_
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

36 nodes (0%) are attached to their parents as `csubj`.

34 instances of `csubj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.02777777777778.

The following 4 pairs of parts of speech are connected with `csubj`: [cs-pos/VERB]()-[cs-pos/VERB]() (25; 69% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (8; 22% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (2; 6% instances), [cs-pos/X]()-[cs-pos/VERB]() (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	že	že	SCONJ	J,-------------	_	6	mark	_	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	obj	_	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	4	punct	_	_
2	Rezervy	rezerva	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	_	_
3	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	možné	možný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
5	používat	používat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	csubj	_	_
6	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	_	LId=k-1
7	úpravám	úprava	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur|Polarity=Pos	5	obl	_	_
8	výše	výše	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	_
9	ocenění	ocenění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	8	nmod	_	_
10	aktiv	aktivum	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	9	nmod	_	SpaceAfter=No|LId=aktivum-1
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	8	punct	_	_
2	Není-li	Není-li	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	8	obl	_	_
3	touto	tento	DET	PDFS7----------	Case=Ins|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	vyhláškou	vyhláška	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	5	obj	_	_
5	stanoveno	stanovit	VERB	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	2	csubj	_	_
6	jinak	jinak	ADV	Db-------------	_	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	2	punct	_	_
8	použijí	použít	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	10	amod	_	LId=účetní-1
10	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	8	nsubj	_	_
11	přiměřeně	přiměřeně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	_	_
12	ustanovení	ustanovení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	11	obj	_	_
13	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	12	nmod	_	_
14	č.	č.	X	X@-------------	_	13	nmod	_	_
15	501/2002	501/2002	X	X@-------------	_	14	flat	_	_
16	Sb.	Sb.	X	X@-------------	_	14	flat	_	SpaceAfter=No
17	,	,	PUNCT	Z:-------------	_	20	punct	_	_
18	kterou	který	PRON	P4FS7----------	Case=Ins|Gender=Fem|Number=Sing|PronType=Int,Rel	20	obj	_	_
19	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	20	expl:pass	_	_
20	provádějí	provádět	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	acl	_	_
21	některá	některý	DET	PZNP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Ind	22	det	_	_
22	ustanovení	ustanovení	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	20	nsubj:pass	_	_
23	zákona	zákona	X	X@-------------	_	22	nmod	_	_
24	č.	č.	X	X@-------------	_	23	flat	_	_
25	563/1991	563/1991	X	X@-------------	_	23	flat	_	_
26	Sb.	Sb.	X	X@-------------	_	23	flat	_	SpaceAfter=No
27	,	,	PUNCT	Z:-------------	_	29	punct	_	_
28	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	29	case	_	LId=o-1
29	účetnictví	účetnictví	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	23	nmod	_	SpaceAfter=No|ToDo=nmod
30	,	,	PUNCT	Z:-------------	_	29	punct	_	_
31	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	32	case	_	LId=v-1
32	znění	znění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	23	nmod	_	ToDo=nmod
33	pozdějších	pozdní	ADJ	AAIP2----2A----	Animacy=Inan|Case=Gen|Degree=Cmp|Gender=Masc|Number=Plur|Polarity=Pos	34	amod	_	LId=pozdní-1
34	předpisů	předpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	32	nmod	_	SpaceAfter=No
35	,	,	PUNCT	Z:-------------	_	32	punct	_	_
36	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	38	case	_	LId=pro-1
37	účetní	účetní	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	38	amod	_	LId=účetní-1
38	jednotky	jednotka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	8	obl	_	SpaceAfter=No
39	,	,	PUNCT	Z:-------------	_	42	punct	_	_
40	které	který	PRON	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	42	nsubj	_	_
41	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	42	cop	_	_
42	bankami	banka	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	38	acl	_	_
43	a	a	CCONJ	J^-------------	_	46	cc	_	LId=a-1
44	jinými	jiný	ADJ	AAFP7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	46	amod	_	_
45	finančními	finanční	ADJ	AAFP7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	46	amod	_	_
46	institucemi	instituce	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	42	conj	_	SpaceAfter=No
47	,	,	PUNCT	Z:-------------	_	49	punct	_	_
48	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	49	case	_	LId=v-1
49	znění	znění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	42	nmod	_	ToDo=nmod
50	pozdějších	pozdní	ADJ	AAIP2----2A----	Animacy=Inan|Case=Gen|Degree=Cmp|Gender=Masc|Number=Plur|Polarity=Pos	51	amod	_	LId=pozdní-1
51	předpisů	předpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	49	nmod	_	SpaceAfter=No
52	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


