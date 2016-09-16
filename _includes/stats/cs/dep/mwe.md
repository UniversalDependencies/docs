

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

4337 nodes (0%) are attached to their parents as `mwe`.

4337 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20059949273692.

The following 25 pairs of parts of speech are connected with `mwe`: [cs-pos/ADP]()-[cs-pos/NOUN]() (2321; 54% instances), [cs-pos/ADP]()-[cs-pos/ADP]() (1095; 25% instances), [cs-pos/CONJ]()-[cs-pos/SCONJ]() (393; 9% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (330; 8% instances), [cs-pos/SCONJ]()-[cs-pos/ADV]() (72; 2% instances), [cs-pos/NOUN]()-[cs-pos/ADP]() (44; 1% instances), [cs-pos/PART]()-[cs-pos/SCONJ]() (13; 0% instances), [cs-pos/SCONJ]()-[cs-pos/SCONJ]() (13; 0% instances), [cs-pos/ADV]()-[cs-pos/SCONJ]() (11; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (11; 0% instances), [cs-pos/PART]()-[cs-pos/ADP]() (9; 0% instances), [cs-pos/PRON]()-[cs-pos/SCONJ]() (4; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (4; 0% instances), [cs-pos/ADP]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/SCONJ]()-[cs-pos/CONJ]() (3; 0% instances), [cs-pos/NUM]()-[cs-pos/SCONJ]() (2; 0% instances), [cs-pos/ADP]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 mwe	color:blue
1	Počet	počet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	5	nsubj	_	_
2	pracovníků	pracovník	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	1	nmod	_	_
3	podniku	podnik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	2	nmod	_	_
4	zároveň	zároveň	ADV	Db-------------	_	5	advmod	_	_
5	klesl	klesnout	VERB	VpYS---XR-AA--1	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	LId=v-1
7	průběhu	průběh	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	6	mwe	_	_
8	6	6	NUM	C=-------------	NumForm=Digit|NumType=Card	9	nummod	_	_
9	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Plur	5	nmod	_	_
10	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=o-1
11	šestinu	šestina	NUM	CyFS4----------	Case=Acc|Gender=Fem|Number=Sing|NumType=Frac	5	advmod	_	SpaceAfter=No|LDeriv=še`6|LNumValue=6
12	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 mwe	color:blue
1	To	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	_
2	znamená	znamenat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	11	punct	_	_
4	že	že	SCONJ	J,-------------	_	11	mark	_	_
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	8	case	_	LId=v-1
6	vztahu	vztah	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	5	mwe	_	_
7	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	5	mwe	_	LId=k-1
8	občanům	občan	NOUN	NNMP3-----A----	Animacy=Anim|Case=Dat|Gender=Masc|Negative=Pos|Number=Plur	11	nmod	_	_
9	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
10	veřejným	veřejný	ADJ	AAMS7----1A----	Animacy=Anim|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	11	amod	_	_
11	činitelem	činitel	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	2	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 mwe	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	bytě	byt	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	3	nmod	_	LGloss=(místo_k_bydlení)
3	máte	mít	VERB	VB-P---2P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	příjemných	příjemný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	6	amod	_	LId=příjemný-1|LGloss=(všeob.,_poz._emoce)
5	24	24	NUM	C=-------------	NumForm=Digit|NumType=Card	6	nummod:gov	_	_
6	°	°	NOUN	NNIP2-----A---8	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	3	dobj	_	LGloss=(stupeň)
7	C	Celsius	NOUN	NNMXX-----A---8	Abbr=Yes|Animacy=Anim|Gender=Masc|Negative=Pos	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	12	punct	_	_
9	i	i	CONJ	J^-------------	_	12	mark	_	LId=i-1
10	když	když	SCONJ	J,-------------	_	9	mwe	_	_
11	venku	venku	ADV	Db-------------	_	12	advmod	_	_
12	mrzne	mrznout	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	15	punct	_	_
14	až	až	SCONJ	J,-------------	_	15	mark	_	LId=až-2|LGloss=(přijde,_až_to_dodělá)
15	praští	praštět	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

2324 nodes (0%) are attached to their parents as `mwe`.

2324 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17254733218589.

The following 24 pairs of parts of speech are connected with `mwe`: [cs-pos/ADP]()-[cs-pos/NOUN]() (1339; 58% instances), [cs-pos/ADP]()-[cs-pos/ADP]() (497; 21% instances), [cs-pos/CONJ]()-[cs-pos/SCONJ]() (166; 7% instances), [cs-pos/PART]()-[cs-pos/ADP]() (129; 6% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (114; 5% instances), [cs-pos/NOUN]()-[cs-pos/ADP]() (19; 1% instances), [cs-pos/ADV]()-[cs-pos/SCONJ]() (15; 1% instances), [cs-pos/SCONJ]()-[cs-pos/ADV]() (14; 1% instances), [cs-pos/SCONJ]()-[cs-pos/ADP]() (6; 0% instances), [cs-pos/CONJ]()-[cs-pos/SYM]() (4; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (4; 0% instances), [cs-pos/ADP]()-[cs-pos/SYM]() (3; 0% instances), [cs-pos/PART]()-[cs-pos/SCONJ]() (3; 0% instances), [cs-pos/ADP]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/CONJ]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mwe	color:blue
1	Úkol	úkol	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	2	nsubjpass	_	_
2	rozpracován	rozpracovat	VERB	VsYS---XX-AP---	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=v-1
4	rámci	rámec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	3	mwe	_	_
5	KRBu	KRB	PROPN	NNIS2-----A----	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|NameType=Com|Negative=Pos|Number=Sing	2	nmod	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 mwe	color:blue
1	Ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	4	case	_	LId=v-1
2	spolupráci	spolupráce	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	1	mwe	_	_
3	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	1	mwe	_	LId=s-1
4	MZVŽ	MZVŽ	PROPN	NNNXX-----A---8	Abbr=Yes|Gender=Neut|NameType=Com|Negative=Pos	11	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	4	punct	_	_
6	SMS	SMS	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Negative=Pos	4	conj	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	4	punct	_	_
8	ÚVSH	ÚVSH	PROPN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|NameType=Com|Negative=Pos	4	conj	_	_
9	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	auxpass	_	_
10	úkoly	úkol	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	11	nsubjpass	_	_
11	zabezpečovány	zabezpečovat	VERB	VsTP---XX-AP---	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Negative=Pos|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	I	i	CONJ	J^-------------	_	3	mark	_	LId=i-1
2	když	když	SCONJ	J,-------------	_	1	mwe	_	_
3	nejde	jít	VERB	VB-S---3P-NA---	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=o-1
5	čísla	číslo	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Plur	3	dobj	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

328 nodes (1%) are attached to their parents as `mwe`.

328 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20426829268293.

The following 4 pairs of parts of speech are connected with `mwe`: [cs-pos/ADP]()-[cs-pos/NOUN]() (258; 79% instances), [cs-pos/ADP]()-[cs-pos/ADP]() (66; 20% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (3; 1% instances), [cs-pos/SCONJ]()-[cs-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 mwe	color:blue
1	Obdobně	obdobně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	3	advmod	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	auxpass:reflex	_	_
3	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	LId=v-1
5	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	4	mwe	_	_
6	technického	technický	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	7	amod	_	_
7	zhodnocení	zhodnocení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	3	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 mwe	color:blue
1	Spotřeba	spotřeba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	4	nsubj	_	_
2	povolenek	povolenka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	1	nmod	_	_
3	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	vykázána	vykázat	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|VerbForm=Part|Voice=Pass	0	root	_	_
5	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	_	LId=bez-1
6	ohledu	ohled	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	5	mwe	_	_
7	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	mwe	_	LId=na-1
8	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	10	det	_	_
9	následné	následný	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	10	amod	_	_
10	vyřazení	vyřazení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	4	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 35 mwe	color:blue
1	(9)	(9)	PUNCT	Z:-------------	_	19	punct	_	_
2	Pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	LId=pro-1
3	inventarizaci	inventarizace	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	19	nmod	_	_
4	kulturních	kulturní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	5	amod	_	_
5	památek	památka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	5	punct	_	_
7	sbírek	sbírka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	5	conj	_	_
8	muzejní	muzejní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	9	amod	_	_
9	povahy	povaha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	7	nmod	_	_
10	a	a	CONJ	J^-------------	_	5	cc	_	LId=a-1
11	archeologických	archeologický	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	12	amod	_	_
12	nálezů	nález	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	5	conj	_	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	19	auxpass:reflex	_	_
14	ustanovení	ustanovení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	19	nsubjpass	_	_
15	odstavců	odstavec	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	14	nmod	_	_
16	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	15	nummod	_	_
17	až	až	PART	TT-------------	_	16	cc	_	LId=až-3
18	8	8	NUM	C}-------------	NumForm=Roman|NumType=Card	16	conj	_	_
19	použijí	použít	VERB	VB-P---3P-AA--1	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
20	pouze	pouze	ADV	Db-------------	_	22	advmod:emph	_	_
21	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	22	case	_	LId=v-1
22	rozsahu	rozsah	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	19	nmod	_	SpaceAfter=No
23	,	,	PUNCT	Z:-------------	_	29	punct	_	_
24	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	25	case	_	LId=v-1
25	jakém	jaký	PRON	P4ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	29	advmod	_	_
26	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	29	cop	_	_
27	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	28	amod	_	LId=účetní-1
28	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	29	nsubj	_	_
29	schopna	schopný	ADJ	ACQW------A----	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|Variant=Short	22	acl	_	_
30	zajistit	zajistit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	29	xcomp	_	_
31	inventarizaci	inventarizace	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	30	dobj	_	_
32	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	33	det	_	_
33	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	31	nmod	_	_
34	společně	společně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	36	case	_	_
35	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	34	mwe	_	LId=s-1
36	plněním	plnění	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Negative=Pos|Number=Sing	30	nmod	_	_
37	zvláštních	zvláštní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	38	amod	_	_
38	povinností	povinnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	36	nmod	_	_
39	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	40	case	_	LId=o-1
40	zjišťování	zjišťování	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Sing	38	nmod	_	_
41	skutečného	skutečný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	42	amod	_	_
42	stavu	stav	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	40	nmod	_	_
43	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	44	det	_	_
44	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	42	nmod	_	SpaceAfter=No
45	.	.	PUNCT	Z:-------------	_	19	punct	_	_

~~~


