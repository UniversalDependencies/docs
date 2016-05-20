

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is a language-specific subtype of [auxpass]().

4906 nodes (0%) are attached to their parents as `auxpass:reflex`.

4139 instances of `auxpass:reflex` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.17305340399511.

The following 4 pairs of parts of speech are connected with `auxpass:reflex`: [cs-pos/VERB]()-[cs-pos/PRON]() (4897; 100% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (5; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (3; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 auxpass:reflex	color:blue
1	Hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	7	nsubjpass	_	_
2	thajského	thajský	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	3	amod	_	_
3	vývozu	vývoz	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	1	nmod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
5	každým	každý	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	6	amod	_	_
6	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	7	nmod	_	_
7	zvyšuje	zvyšovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=o-1
9	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Negative=Pos	7	advmod	_	_
10	než	než	SCONJ	J,-------------	_	11	mark	_	LId=než-2
11	12	12	NUM	C=-------------	NumForm=Digit|NumType=Card	9	advmod	_	_
12	%	%	SYM	Z:-------------	_	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 auxpass:reflex	color:blue
1	Pořád	pořád	ADV	Db-------------	_	3	advmod	_	_
2	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	3	dobj	_	_
3	chybějí	chybět	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(někde_něco_chybí)
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=v-1
5	extralize	extraliga	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	3	nmod	_	_
6	zápasy	zápas	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	3	nsubj	_	_
7	hrající	hrající	ADJ	AGIP1-----A----	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	_	LDeriv=hrát
8	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
9	'	'	PUNCT	Z:-------------	_	11	punct	_	SpaceAfter=No
10	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=na-1
11	doraz	doraz	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	7	nmod	_	SpaceAfter=No
12	'	'	PUNCT	Z:-------------	_	11	punct	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 auxpass:reflex	color:blue
1	Druhovost	druhovost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	0	root	_	LDeriv=druhový
2	a	a	CONJ	J^-------------	_	1	cc	_	LId=a-1
3	náročnost	náročnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	1	conj	_	LDeriv=náročný
4	zakázek	zakázka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	1	nmod	_	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
6	stále	stále	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	1	advmod	_	LDeriv=stálý
7	mění	měnit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
8	a	a	CONJ	J^-------------	_	1	cc	_	LId=a-1
9	zvyšuje	zvyšovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is a language-specific subtype of [auxpass]().

2093 nodes (0%) are attached to their parents as `auxpass:reflex`.

1688 instances of `auxpass:reflex` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87816531294792.

The following 5 pairs of parts of speech are connected with `auxpass:reflex`: [cs-pos/VERB]()-[cs-pos/PRON]() (2081; 99% instances), [cs-pos/SYM]()-[cs-pos/PRON]() (7; 0% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 auxpass:reflex	color:blue
1	Provádí	provádět	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
3	přípravné	přípravný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	4	amod	_	_
4	práce	práce	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	1	nsubjpass	_	SpaceAfter=No|LGloss=(jako_činnost_i_místo)
5	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 6 auxpass:reflex	color:blue
1	Vědí	vědět	VERB	VB-P---3P-AA--1	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	13	punct	_	_
3	že	že	SCONJ	J,-------------	_	13	mark	_	_
4	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=pro-1
5	ně	on	PRON	P5XP4--3-------	Case=Acc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	13	nmod	_	_
6	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	13	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
7	dřevěná	dřevěný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	8	amod	_	_
8	bouda	bouda	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	13	nsubjpass	_	_
9	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	_	LId=z-1
10	koloušů	kolouš	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	8	nmod	_	_
11	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	_	LId=na-1
12	šachtě	šachta	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	13	nmod	_	_
13	*	*	SYM	Xx-------------	Abbr=Yes	1	dobj	_	_
14	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 auxpass:reflex	color:blue
1	Keramické	keramický	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	2	amod	_	_
2	dlaždice	dlaždice	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	5	nsubjpass	_	_
3	jemnozrnné	jemnozrnný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	2	amod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
5	vyrábějí	vyrábět	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	_	LId=z-1
7	jílů	jíl	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	5	dobj	_	_
8	bíle	bíle	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	12	advmod	_	LDeriv=bílý
9	nebo	nebo	CONJ	J^-------------	_	8	cc	_	_
10	barevně	barevně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	8	conj	_	LDeriv=barevný
11	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
12	pálících	pálící	ADJ	AGIP2-----A----	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	7	amod	_	SpaceAfter=No|LDeriv=pálit
13	,	,	PUNCT	Z:-------------	_	5	punct	_	_
14	dalšími	další	ADJ	AAFP7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	15	amod	_	_
15	složkami	složka	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Plur	5	conj	_	_
16	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	_	_
17	kaolínové	kaolínový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	18	amod	_	_
18	suroviny	surovina	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	15	nsubj	_	SpaceAfter=No
19	,	,	PUNCT	Z:-------------	_	18	punct	_	_
20	taviva	tavivo	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Plur	18	conj	_	_
21	a	a	CONJ	J^-------------	_	18	cc	_	LId=a-1
22	barvy	barva	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	18	conj	_	SpaceAfter=No
23	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is a language-specific subtype of [auxpass]().

358 nodes (1%) are attached to their parents as `auxpass:reflex`.

325 instances of `auxpass:reflex` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21508379888268.

The following 3 pairs of parts of speech are connected with `auxpass:reflex`: [cs-pos/VERB]()-[cs-pos/PRON]() (350; 98% instances), [cs-pos/VERB]()-[cs-pos/ADP]() (5; 1% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (3; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 auxpass:reflex	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	8	punct	_	_
2	Při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=při-1
3	průběžné	průběžný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	amod	_	_
4	inventarizaci	inventarizace	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	8	nmod	_	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	auxpass:reflex	_	_
6	odstavec	odstavec	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	8	nsubjpass	_	_
7	4	4	NUM	C}-------------	NumForm=Roman|NumType=Card	6	nummod	_	_
8	použije	použít	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	obdobně	obdobně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	8	advmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 auxpass:reflex	color:blue
1	Pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	2	case	_	LId=pro-1
2	účely	účel	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	10	nmod	_	_
3	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	2	nmod	_	_
5	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	10	auxpass:reflex	_	LId=s-1
6	rozvahovým	rozvahový	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	7	amod	_	_
7	dnem	den	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	10	dobj	_	_
8	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=pro-1
9	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	7	nmod	_	_
10	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	den	den	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	10	nsubjpass	_	SpaceAfter=No|LId=den-2
12	,	,	PUNCT	Z:-------------	_	16	punct	_	_
13	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	14	case	_	LId=k-1
14	němuž	jenž	PRON	P9ZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PrepCase=Pre|PronType=Rel	16	nmod	_	_
15	byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|Tense=Past|VerbForm=Part|Voice=Act	16	auxpass	_	_
16	sestavena	sestavit	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|VerbForm=Part|Voice=Pass	11	acl	_	_
17	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	18	amod	_	LId=účetní-1
18	závěrka	závěrka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	16	nsubjpass	_	_
19	využitá	využitý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	18	amod	_	_
20	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	21	case	_	LId=pro-1
21	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	19	nmod	_	_
22	jmění	jmění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	21	nmod	_	_
23	posudkem	posudek	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	21	nmod	_	_
24	znalce	znalec	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	23	nmod	_	_
25	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	26	case	_	LId=pro-1
26	projekt	projekt	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	24	nmod	_	_
27	přeměny	přeměna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	26	nmod	_	_
28	společnosti	společnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	27	nmod	_	SpaceAfter=No
29	.	.	PUNCT	Z:-------------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 auxpass:reflex	color:blue
1	Nestanoví-li	Nestanoví-li	NOUN	NNNXX-----A----	Gender=Neut|Negative=Pos	14	nmod	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	auxpass:reflex	_	_
3	dále	dále	ADV	Db------------1	_	1	advmod	_	LId=dále-3
4	jinak	jinak	ADV	Db-------------	_	1	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	1	punct	_	_
6	ustanovení	ustanovení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	14	nsubjpass	_	_
7	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	8	det	_	_
8	zákona	zákon	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	6	nmod	_	_
9	týkající	týkající	ADJ	AGFP1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Negative=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl	_	_
11	výroční	výroční	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	12	amod	_	_
12	zprávy	zpráva	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	9	dobj	_	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	14	auxpass:reflex	_	_
14	použijí	použít	VERB	VB-P---3P-AA--1	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
15	i	i	CONJ	J^-------------	_	19	advmod:emph	_	LId=i-1
16	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	19	case	_	LId=pro-1
17	konsolidovanou	konsolidovaný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	19	amod	_	_
18	výroční	výroční	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	19	amod	_	_
19	zprávu	zpráva	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	14	nmod	_	SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	14	punct	_	_

~~~


