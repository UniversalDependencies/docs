

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is a language-specific subtype of [expl]().
There are also 1 other language-specific subtypes of `expl`: [expl:pv]().

4347 nodes (0%) are attached to their parents as `expl:pass`.

3666 instances of `expl:pass` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18702553485162.

The following 4 pairs of parts of speech are connected with `expl:pass`: [cs-pos/VERB]()-[cs-pos/PRON]() (4338; 100% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (5; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (3; 0% instances), [cs-pos/DET]()-[cs-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 expl:pass	color:blue
1	Hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	7	nsubj:pass	_	_
2	thajského	thajský	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	_	_
3	vývozu	vývoz	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	_	LGloss=(zvr._zájmeno/částice)
5	každým	každý	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	7	obl	_	_
7	zvyšuje	zvyšovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=o-1
9	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	7	advmod	_	_
10	než	než	SCONJ	J,-------------	_	11	mark	_	LId=než-2
11	12	12	NUM	C=-------------	NumForm=Digit|NumType=Card	9	obl	_	_
12	%	%	SYM	Z:-------------	_	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 expl:pass	color:blue
1	Pořád	pořád	ADV	Db-------------	_	3	advmod	_	_
2	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	3	obj	_	_
3	chybějí	chybět	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(někde_něco_chybí)
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=v-1
5	extralize	extraliga	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	3	obl	_	_
6	zápasy	zápas	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	nsubj	_	_
7	hrající	hrající	ADJ	AGIP1-----A----	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	_	LDeriv=hrát
8	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	_	LGloss=(zvr._zájmeno/částice)
9	'	'	PUNCT	Z:-------------	_	11	punct	_	SpaceAfter=No
10	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=na-1
11	doraz	doraz	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	7	obl	_	SpaceAfter=No
12	'	'	PUNCT	Z:-------------	_	11	punct	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 expl:pass	color:blue
1	Druhovost	druhovost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	LDeriv=druhový
2	a	a	CCONJ	J^-------------	_	3	cc	_	LId=a-1
3	náročnost	náročnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	conj	_	LDeriv=náročný
4	zakázek	zakázka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	1	nmod	_	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	LGloss=(zvr._zájmeno/částice)
6	stále	stále	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	1	advmod	_	LDeriv=stálý
7	mění	měnit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
8	a	a	CCONJ	J^-------------	_	9	cc	_	LId=a-1
9	zvyšuje	zvyšovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is a language-specific subtype of [expl]().
There are also 1 other language-specific subtypes of `expl`: [expl:pv]().

2044 nodes (0%) are attached to their parents as `expl:pass`.

1647 instances of `expl:pass` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88013698630137.

The following 5 pairs of parts of speech are connected with `expl:pass`: [cs-pos/VERB]()-[cs-pos/PRON]() (2033; 99% instances), [cs-pos/SYM]()-[cs-pos/PRON]() (7; 0% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pass	color:blue
1	Provádí	provádět	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	přípravné	přípravný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	4	amod	_	_
4	práce	práce	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	1	nsubj:pass	_	SpaceAfter=No|LGloss=(jako_činnost_i_místo)
5	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 6 expl:pass	color:blue
1	Vědí	vědět	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	13	punct	_	_
3	že	že	SCONJ	J,-------------	_	13	mark	_	_
4	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=pro-1
5	ně	on	PRON	P5XP4--3-------	Case=Acc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	13	obl	_	_
6	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	13	expl:pass	_	LGloss=(zvr._zájmeno/částice)
7	dřevěná	dřevěný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	_	_
8	bouda	bouda	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	13	nsubj:pass	_	_
9	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	_	LId=z-1
10	koloušů	kolouš	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	8	nmod	_	_
11	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	_	LId=na-1
12	šachtě	šachta	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	13	obl	_	_
13	*	*	SYM	Xx-------------	Abbr=Yes	1	obj	_	_
14	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 expl:pass	color:blue
1	Keramické	keramický	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
2	dlaždice	dlaždice	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj:pass	_	_
3	jemnozrnné	jemnozrnný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	_	LGloss=(zvr._zájmeno/částice)
5	vyrábějí	vyrábět	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	_	LId=z-1
7	jílů	jíl	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	obj	_	_
8	bíle	bíle	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	12	advmod	_	LDeriv=bílý
9	nebo	nebo	CCONJ	J^-------------	_	10	cc	_	_
10	barevně	barevně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	conj	_	LDeriv=barevný
11	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pass	_	LGloss=(zvr._zájmeno/částice)
12	pálících	pálící	ADJ	AGIP2-----A----	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	7	amod	_	SpaceAfter=No|LDeriv=pálit
13	,	,	PUNCT	Z:-------------	_	15	punct	_	_
14	dalšími	další	ADJ	AAFP7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	15	amod	_	_
15	složkami	složka	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	5	conj	_	_
16	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	_	_
17	kaolínové	kaolínový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	18	amod	_	_
18	suroviny	surovina	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	15	nsubj	_	SpaceAfter=No
19	,	,	PUNCT	Z:-------------	_	20	punct	_	_
20	taviva	tavivo	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	18	conj	_	_
21	a	a	CCONJ	J^-------------	_	22	cc	_	LId=a-1
22	barvy	barva	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	18	conj	_	SpaceAfter=No
23	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is a language-specific subtype of [expl]().
There are also 1 other language-specific subtypes of `expl`: [expl:pv]().

244 nodes (1%) are attached to their parents as `expl:pass`.

223 instances of `expl:pass` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.07786885245902.

The following 3 pairs of parts of speech are connected with `expl:pass`: [cs-pos/VERB]()-[cs-pos/PRON]() (240; 98% instances), [cs-pos/VERB]()-[cs-pos/ADP]() (3; 1% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (1; 0% instances).


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
1	Změní-li	Změní-li	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	9	obl	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	_
3	sazba	sazba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	nsubj:pass	_	_
4	daně	daň	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	_	_
5	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	_	LId=z-1
6	příjmů	příjem	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	4	nmod	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	1	punct	_	_
8	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	nutno	nutný	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	0	root	_	_
10	přepočítat	přepočítat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	9	csubj	_	_
11	zůstatek	zůstatek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	10	obj	_	_
12	účtu	účet	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	11	nmod	_	_
13	odložené	odložený	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	_	_
14	daně	daň	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	12	nmod	_	_
15	a	a	CCONJ	J^-------------	_	17	cc	_	LId=a-1
16	rozdíl	rozdíl	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	17	obj	_	_
17	zaúčtovat	zaúčtovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	10	conj	_	_
18	prostřednictvím	prostřednictvím	ADP	RR--2----------	AdpType=Prep|Case=Gen	19	case	_	_
19	účtu	účet	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	17	obl	_	_
20	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	22	case	_	LId=v-1
21	účtové	účtový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	22	amod	_	_
22	skupině	skupina	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	19	nmod	_	_
23	59	59	NUM	C}-------------	NumForm=Roman|NumType=Card	22	nummod	_	SpaceAfter=No
24	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


