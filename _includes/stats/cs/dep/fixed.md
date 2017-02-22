

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

3834 nodes (0%) are attached to their parents as `fixed`.

3834 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19979134063641.

The following 21 pairs of parts of speech are connected with `fixed`: [cs-pos/ADP]()-[cs-pos/NOUN]() (2054; 54% instances), [cs-pos/ADP]()-[cs-pos/ADP]() (955; 25% instances), [cs-pos/CCONJ]()-[cs-pos/SCONJ]() (361; 9% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (296; 8% instances), [cs-pos/SCONJ]()-[cs-pos/ADV]() (62; 2% instances), [cs-pos/NOUN]()-[cs-pos/ADP]() (38; 1% instances), [cs-pos/SCONJ]()-[cs-pos/SCONJ]() (13; 0% instances), [cs-pos/PART]()-[cs-pos/SCONJ]() (11; 0% instances), [cs-pos/ADV]()-[cs-pos/SCONJ]() (9; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (9; 0% instances), [cs-pos/PART]()-[cs-pos/ADP]() (5; 0% instances), [cs-pos/ADP]()-[cs-pos/ADJ]() (4; 0% instances), [cs-pos/DET]()-[cs-pos/SCONJ]() (4; 0% instances), [cs-pos/DET]()-[cs-pos/VERB]() (4; 0% instances), [cs-pos/SCONJ]()-[cs-pos/CCONJ]() (3; 0% instances), [cs-pos/ADV]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/CCONJ]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Počet	počet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj	_	_
2	pracovníků	pracovník	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	1	nmod	_	_
3	podniku	podnik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	2	nmod	_	_
4	zároveň	zároveň	ADV	Db-------------	_	5	advmod	_	_
5	klesl	klesnout	VERB	VpYS---XR-AA--1	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	LId=v-1
7	průběhu	průběh	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	fixed	_	_
8	6	6	NUM	C=-------------	NumForm=Digit|NumType=Card	9	nummod	_	_
9	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	5	obl	_	_
10	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=o-1
11	šestinu	šestina	NUM	CyFS4----------	Case=Acc|Gender=Fem|Number=Sing|NumType=Frac	5	obl	_	SpaceAfter=No|LDeriv=še`6|LNumValue=6
12	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 fixed	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	_
2	znamená	znamenat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	11	punct	_	_
4	že	že	SCONJ	J,-------------	_	11	mark	_	_
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	8	case	_	LId=v-1
6	vztahu	vztah	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	5	fixed	_	_
7	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	5	fixed	_	LId=k-1
8	občanům	občan	NOUN	NNMP3-----A----	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur|Polarity=Pos	11	obl	_	_
9	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
10	veřejným	veřejný	ADJ	AAMS7----1A----	Animacy=Anim|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	11	amod	_	_
11	činitelem	činitel	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	2	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 fixed	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	bytě	byt	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	obl	_	LGloss=(místo_k_bydlení)
3	máte	mít	VERB	VB-P---2P-AA---	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	příjemných	příjemný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	6	amod	_	LId=příjemný-1|LGloss=(všeob.,_poz._emoce)
5	24	24	NUM	C=-------------	NumForm=Digit|NumType=Card	6	nummod:gov	_	_
6	°	°	NOUN	NNIP2-----A---8	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	3	obj	_	LGloss=(stupeň)
7	C	Celsius	NOUN	NNMXX-----A---8	Abbr=Yes|Animacy=Anim|Gender=Masc|Polarity=Pos	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	12	punct	_	_
9	i	i	CCONJ	J^-------------	_	12	mark	_	LId=i-1
10	když	když	SCONJ	J,-------------	_	9	fixed	_	_
11	venku	venku	ADV	Db-------------	_	12	advmod	_	_
12	mrzne	mrznout	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	15	punct	_	_
14	až	až	SCONJ	J,-------------	_	15	mark	_	LId=až-2|LGloss=(přijde,_až_to_dodělá)
15	praští	praštět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

2288 nodes (0%) are attached to their parents as `fixed`.

2288 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17263986013986.

The following 24 pairs of parts of speech are connected with `fixed`: [cs-pos/ADP]()-[cs-pos/NOUN]() (1318; 58% instances), [cs-pos/ADP]()-[cs-pos/ADP]() (491; 21% instances), [cs-pos/CCONJ]()-[cs-pos/SCONJ]() (160; 7% instances), [cs-pos/PART]()-[cs-pos/ADP]() (128; 6% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (112; 5% instances), [cs-pos/NOUN]()-[cs-pos/ADP]() (19; 1% instances), [cs-pos/ADV]()-[cs-pos/SCONJ]() (15; 1% instances), [cs-pos/SCONJ]()-[cs-pos/ADV]() (14; 1% instances), [cs-pos/SCONJ]()-[cs-pos/ADP]() (6; 0% instances), [cs-pos/CCONJ]()-[cs-pos/SYM]() (4; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (4; 0% instances), [cs-pos/ADP]()-[cs-pos/SYM]() (3; 0% instances), [cs-pos/PART]()-[cs-pos/SCONJ]() (3; 0% instances), [cs-pos/ADP]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/CCONJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/CCONJ]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/CCONJ]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Úkol	úkol	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj:pass	_	_
2	rozpracován	rozpracovaný	ADJ	VsYS---XX-AP---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=v-1
4	rámci	rámec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	fixed	_	_
5	KRBu	KRB	PROPN	NNIS2-----A----	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|NameType=Com|Number=Sing|Polarity=Pos	2	obl	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	Ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	4	case	_	LId=v-1
2	spolupráci	spolupráce	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	1	fixed	_	_
3	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	1	fixed	_	LId=s-1
4	MZVŽ	MZVŽ	PROPN	NNNXX-----A---8	Abbr=Yes|Gender=Neut|NameType=Com|Polarity=Pos	11	obl	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	_	_
6	SMS	SMS	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	4	conj	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	8	punct	_	_
8	ÚVSH	ÚVSH	PROPN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|NameType=Com|Polarity=Pos	4	conj	_	_
9	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux:pass	_	_
10	úkoly	úkol	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	11	nsubj:pass	_	_
11	zabezpečovány	zabezpečovaný	ADJ	VsTP---XX-AP---	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	I	i	CCONJ	J^-------------	_	3	mark	_	LId=i-1
2	když	když	SCONJ	J,-------------	_	1	fixed	_	_
3	nejde	jít	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=o-1
5	čísla	číslo	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

218 nodes (1%) are attached to their parents as `fixed`.

218 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1697247706422.

The following 4 pairs of parts of speech are connected with `fixed`: [cs-pos/ADP]()-[cs-pos/NOUN]() (178; 82% instances), [cs-pos/ADP]()-[cs-pos/ADP]() (38; 17% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Obdobně	obdobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	_	_
3	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	LId=v-1
5	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	4	fixed	_	_
6	technického	technický	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	7	amod	_	_
7	zhodnocení	zhodnocení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 fixed	color:blue
1	Spotřeba	spotřeba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	_	_
2	povolenek	povolenka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	1	nmod	_	_
3	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	vykázána	vykázat	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
5	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	_	LId=bez-1
6	ohledu	ohled	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	fixed	_	_
7	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	fixed	_	LId=na-1
8	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	10	det	_	_
9	následné	následný	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	10	amod	_	_
10	vyřazení	vyřazení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	4	obl	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 198	bgColor:blue
# visual-style 198	fgColor:white
# visual-style 197	bgColor:blue
# visual-style 197	fgColor:white
# visual-style 197 198 fixed	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	43	punct	_	_
2	Pokud	pokud	SCONJ	J,-------------	_	24	mark	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pv	_	_
4	rozhodný	rozhodný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	_	_
5	den	den	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	24	nsubj	_	LId=den-2
6	neshoduje	shodovat	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	24	advcl	_	_
7	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	8	case	_	LId=s-1
8	dnem	den	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	6	obj	_	_
9	otevření	otevření	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	8	obj	_	_
10	účetních	účetní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	11	amod	_	LId=účetní-1
11	knih	kniha	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	9	nmod	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	14	punct	_	_
13	který	který	PRON	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	14	nsubj	_	_
14	následuje	následovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl	_	_
15	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	17	case	_	LId=po-1
16	rozvahovém	rozvahový	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	17	amod	_	_
17	dni	den	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	14	obl	_	_
18	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	19	case	_	LId=pro-1
19	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	17	nmod	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	24	punct	_	_
21	a	a	CCONJ	J^-------------	_	24	cc	_	LId=a-1
22	zároveň	zároveň	ADV	Db-------------	_	24	cc	_	_
23	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	24	expl:pv	_	_
24	neshoduje	shodovat	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	43	advcl	_	_
25	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	26	case	_	LId=s-1
26	dnem	dno	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	24	obj	_	_
27	zápisu	zápis	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	26	nmod	_	_
28	přeměny	přeměna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	27	nmod	_	_
29	společnosti	společnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	28	nmod	_	_
30	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	32	case	_	LId=do-1
31	obchodního	obchodní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	32	amod	_	_
32	rejstříku	rejstřík	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	27	nmod	_	SpaceAfter=No
33	,	,	PUNCT	Z:-------------	_	24	punct	_	_
34	zanikající	zanikající	ADJ	AGFS1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	36	amod	_	_
35	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	36	amod	_	LId=účetní-1
36	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	43	nsubj	_	_
37	nebo	nebo	CCONJ	J^-------------	_	39	cc	_	_
38	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	39	amod	_	LId=účetní-1
39	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	36	conj	_	_
40	rozdělovaná	rozdělovaný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	39	amod	_	_
41	odštěpením	odštěpení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	40	obl	_	_
42	a)	a)	X	X@-------------	_	43	obl	_	_
43	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
44	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	45	case	_	LId=při-1
45	ocenění	ocenění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	43	obl	_	_
46	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	45	nmod	_	_
47	a	a	CCONJ	J^-------------	_	48	cc	_	LId=a-1
48	závazků	závazek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	46	conj	_	_
49	reálnou	reálný	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	50	amod	_	_
50	hodnotou	hodnota	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	45	nmod	_	_
51	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	43	obl	_	_
52	ocenění	ocenění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	51	nmod	_	_
53	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	54	case	_	LId=podle-2
54	§	§	X	X@-------------	_	52	nmod	_	_
55	24	24	X	X@-------------	_	54	flat	_	_
56	odst.	odst.	X	X@-------------	_	54	flat	_	_
57	3	3	X	X@-------------	_	54	flat	_	_
58	písm.	písm.	X	X@-------------	_	54	flat	_	_
59	a)	a)	X	X@-------------	_	54	flat	_	_
60	bodu	bodu	X	X@-------------	_	54	flat	_	_
61	2	2	X	X@-------------	_	54	flat	_	_
62	zákona	zákona	X	X@-------------	_	54	flat	_	_
63	pouze	pouze	ADV	Db-------------	_	66	advmod:emph	_	_
64	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	66	case	_	LId=o-1
65	reálné	reálný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	66	amod	_	_
66	hodnotě	hodnota	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	54	nmod	_	ToDo=nmod
67	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	66	nmod	_	_
68	a	a	CCONJ	J^-------------	_	69	cc	_	LId=a-1
69	závazků	závazek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	67	conj	_	SpaceAfter=No
70	,	,	PUNCT	Z:-------------	_	72	punct	_	_
71	které	který	PRON	P4YP4----------	Case=Acc|Gender=Masc|Number=Plur|PronType=Int,Rel	72	obj	_	_
72	vykázala	vykázat	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	67	acl	_	_
73	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	75	case	_	LId=v-1
74	účetní	účetní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	75	amod	_	LId=účetní-1
75	závěrce	závěrka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	72	obl	_	_
76	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	77	case	_	LId=k-1
77	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	72	obl	_	_
78	předcházejícímu	předcházející	ADJ	AGMS3-----A----	Animacy=Anim|Aspect=Imp|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	77	amod	_	_
79	rozhodný	rozhodný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	80	amod	_	_
80	den	den	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	78	obj	_	SpaceAfter=No|LId=den-2
81	;	;	PUNCT	Z:-------------	_	106	punct	_	_
82	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	84	case	_	LId=o-1
83	oceňovacích	oceňovací	ADJ	AAIP6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	84	amod	_	_
84	rozdílech	rozdíl	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	106	obj	_	SpaceAfter=No
85	,	,	PUNCT	Z:-------------	_	88	punct	_	_
86	které	který	PRON	P4IP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	88	nsubj	_	_
87	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	88	expl:pv	_	_
88	vztahují	vztahovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	84	acl	_	_
89	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	90	case	_	LId=k-1
90	úbytkům	úbytek	NOUN	NNIP3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur|Polarity=Pos	88	obj	_	_
91	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	90	nmod	_	_
92	a	a	CCONJ	J^-------------	_	93	cc	_	LId=a-1
93	závazků	závazek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	91	conj	_	_
94	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	95	case	_	LId=v-1
95	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	90	nmod	_	_
96	mezi	mezi	ADP	RR--7----------	AdpType=Prep|Case=Ins	98	case	_	LId=mezi-1
97	rozvahovým	rozvahový	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	98	amod	_	_
98	dnem	den	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	95	nmod	_	_
99	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	100	case	_	LId=pro-1
100	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	98	nmod	_	_
101	a	a	CCONJ	J^-------------	_	103	cc	_	LId=a-1
102	rozhodným	rozhodný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	103	amod	_	_
103	dnem	den	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	98	conj	_	SpaceAfter=No
104	,	,	PUNCT	Z:-------------	_	88	punct	_	_
105	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	106	expl:pass	_	_
106	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	43	parataxis	_	_
107	prostřednictvím	prostřednictvím	ADP	RR--2----------	AdpType=Prep|Case=Gen	108	case	_	_
108	účtu	účet	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	106	obl	_	_
109	vykazovaného	vykazovaný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	108	amod	_	_
110	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	111	case	_	LId=v-1
111	položce	položka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	109	obl	_	_
112	"A.II.6.	"A.II.6.	X	X@-------------	_	111	nmod	_	_
113	Rozdíly	Rozdíly	X	X@-------------	_	112	flat	_	_
114	z	z	X	X@-------------	_	112	flat	_	_
115	ocenění	ocenění	X	X@-------------	_	112	flat	_	_
116	při	při	X	X@-------------	_	112	flat	_	_
117	přeměnách	přeměnách	X	X@-------------	_	112	flat	_	_
118	společností"	společností"	X	X@-------------	_	112	flat	_	SpaceAfter=No
119	,	,	PUNCT	Z:-------------	_	150	punct	_	_
120	nebo	nebo	CCONJ	J^-------------	_	150	cc	_	_
121	b)	b)	X	X@-------------	_	150	obl	_	_
122	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	123	case	_	LId=při-1
123	ocenění	ocenění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	150	obl	_	_
124	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	123	nmod	_	_
125	a	a	CCONJ	J^-------------	_	126	cc	_	LId=a-1
126	závazků	závazek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	124	conj	_	_
127	reálnou	reálný	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	128	amod	_	_
128	hodnotou	hodnota	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	123	nmod	_	_
129	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	150	obl	_	_
130	ocenění	ocenění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	129	nmod	_	_
131	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	132	case	_	LId=podle-2
132	§	§	X	X@-------------	_	130	nmod	_	_
133	24	24	X	X@-------------	_	132	flat	_	_
134	odst.	odst.	X	X@-------------	_	132	flat	_	_
135	3	3	X	X@-------------	_	132	flat	_	_
136	písm.	písm.	X	X@-------------	_	132	flat	_	_
137	a)	a)	X	X@-------------	_	132	flat	_	_
138	bodu	bodu	X	X@-------------	_	132	flat	_	_
139	1	1	X	X@-------------	_	132	flat	_	_
140	zákona	zákona	X	X@-------------	_	132	flat	_	_
141	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	142	case	_	LId=o-1
142	položce	položka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	132	nmod	_	ToDo=nmod
143	"A.II.6.	"A.II.6.	X	X@-------------	_	142	nmod	_	_
144	Rozdíly	Rozdíly	X	X@-------------	_	143	flat	_	_
145	z	z	X	X@-------------	_	143	flat	_	_
146	ocenění	ocenění	X	X@-------------	_	143	flat	_	_
147	při	při	X	X@-------------	_	143	flat	_	_
148	přeměnách	přeměnách	X	X@-------------	_	143	flat	_	_
149	společností"	společností"	X	X@-------------	_	143	flat	_	_
150	neúčtuje	účtovat	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	43	conj	_	SpaceAfter=No
151	;	;	PUNCT	Z:-------------	_	182	punct	_	_
152	existuje-li	existuje-li	X	X@-------------	_	182	advmod	_	_
153	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	152	nsubj	_	_
154	jmění	jmění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	153	nmod	_	_
155	posudkem	posudek	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	153	nmod	_	_
156	znalce	znalec	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	155	nmod	_	_
157	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	159	case	_	LId=k-1
158	rozhodnému	rozhodný	ADJ	AAIS3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	159	amod	_	_
159	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	153	nmod	_	_
160	a	a	CCONJ	J^-------------	_	161	cc	_	LId=a-1
161	došlo-li	došlo-li	X	X@-------------	_	152	conj	_	_
162	mezi	mezi	ADP	RR--7----------	AdpType=Prep|Case=Ins	164	case	_	LId=mezi-1
163	rozvahovým	rozvahový	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	164	amod	_	_
164	dnem	den	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	161	obl	_	_
165	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	166	case	_	LId=pro-1
166	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	164	nmod	_	_
167	a	a	CCONJ	J^-------------	_	169	cc	_	LId=a-1
168	rozhodným	rozhodný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	169	amod	_	_
169	dnem	den	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	164	conj	_	_
170	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	171	case	_	LId=k-1
171	změně	změna	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	161	obj	_	_
172	položky	položka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	171	nmod	_	_
173	"B.II.9.	"B.II.9.	X	X@-------------	_	172	nmod	_	_
174	Oceňovací	Oceňovací	X	X@-------------	_	173	flat	_	_
175	rozdíl	rozdíl	X	X@-------------	_	173	flat	_	_
176	k	k	X	X@-------------	_	173	flat	_	_
177	nabytému	nabytému	X	X@-------------	_	173	flat	_	_
178	majetku"	majetku"	X	X@-------------	_	173	flat	_	SpaceAfter=No
179	,	,	PUNCT	Z:-------------	_	152	punct	_	_
180	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	181	amod	_	LId=účetní-1
181	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	182	nsubj	_	_
182	zaúčtuje	zaúčtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	150	parataxis	_	_
183	tuto	tento	DET	PDFS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	184	det	_	_
184	změnu	změna	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	182	obj	_	_
185	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	187	case	_	LId=na-1
186	příslušný	příslušný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	187	amod	_	_
187	účet	účet	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	182	obl	_	_
188	vykazovaný	vykazovaný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	187	amod	_	_
189	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	190	case	_	LId=v-1
190	položce	položka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	188	obl	_	_
191	"B.II.9.	"B.II.9.	X	X@-------------	_	190	nmod	_	_
192	Oceňovací	Oceňovací	X	X@-------------	_	191	flat	_	_
193	rozdíl	rozdíl	X	X@-------------	_	191	flat	_	_
194	k	k	X	X@-------------	_	191	flat	_	_
195	nabytému	nabytému	X	X@-------------	_	191	flat	_	_
196	majetku"	majetku"	X	X@-------------	_	191	flat	_	_
197	souvztažně	souvztažně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	200	case	_	_
198	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	197	fixed	_	LId=s-1
199	příslušným	příslušný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	200	amod	_	_
200	účtem	účet	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	182	obl	_	_
201	vykazovaným	vykazovaný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	200	amod	_	_
202	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	203	case	_	LId=v-1
203	položce	položka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	201	obl	_	_
204	"A.II.6.	"A.II.6.	X	X@-------------	_	203	nmod	_	_
205	Rozdíly	Rozdíly	X	X@-------------	_	204	flat	_	_
206	z	z	X	X@-------------	_	204	flat	_	_
207	ocenění	ocenění	X	X@-------------	_	204	flat	_	_
208	při	při	X	X@-------------	_	204	flat	_	_
209	přeměnách	přeměnách	X	X@-------------	_	204	flat	_	_
210	společností"	společností"	X	X@-------------	_	204	flat	_	SpaceAfter=No
211	.	.	PUNCT	Z:-------------	_	43	punct	_	_

~~~


