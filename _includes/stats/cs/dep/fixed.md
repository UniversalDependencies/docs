

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
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 fixed	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	11	punct	_	_
2	Přestane-li	Přestane-li	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	11	obl	_	_
3	splňovat	splňovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	2	xcomp	_	_
4	zajišťovací	zajišťovací	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	_	_
5	derivát	derivát	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj	_	_
6	podmínky	podmínka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	_	_
7	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	LId=podle-2
8	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	6	nmod	_	_
9	3	3	NUM	C}-------------	NumForm=Roman|NumType=Card	8	nummod	_	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	2	punct	_	_
11	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
12	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	11	expl:pass	_	_
13	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	14	case	_	LId=o-1
14	něm	německý	ADJ	AAXXX----1A---8	Abbr=Yes|Degree=Pos|Polarity=Pos	11	obj	_	_
15	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	17	case	_	LId=od-1
16	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	17	det	_	_
17	okamžiku	okamžik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	11	obl	_	_
18	jako	jako	SCONJ	J,-------------	_	20	case	_	_
19	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	18	fixed	_	LId=o-1
20	derivátu	derivát	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	14	xcomp	_	_
21	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	22	case	_	LId=k-1
22	obchodování	obchodování	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	20	nmod	_	SpaceAfter=No
23	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


