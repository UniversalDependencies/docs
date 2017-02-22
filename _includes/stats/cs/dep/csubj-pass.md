

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is a language-specific subtype of [csubj]().

406 nodes (0%) are attached to their parents as `csubj:pass`.

366 instances of `csubj:pass` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.63054187192118.

The following 10 pairs of parts of speech are connected with `csubj:pass`: [cs-pos/VERB]()-[cs-pos/VERB]() (295; 73% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (53; 13% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (31; 8% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (18; 4% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (4; 1% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	Doporučuje	doporučovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	dokoupit	dokoupit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	csubj:pass	_	_
4	večeře	večeře	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	obj	_	_
5	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	_	LId=za-1
6	1500	1500	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod	_	_
7	Kč	Kč	NOUN	NNFXX-----A----	Gender=Fem|Polarity=Pos	6	nmod	_	_
8	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=na-1
9	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj:pass	color:blue
1	Přitom	přitom	ADV	Db-------------	_	4	advmod	_	_
2	však	však	CCONJ	J^-------------	_	4	cc	_	_
3	nebylo	být	AUX	VpNS---XR-NA---	Gender=Neut|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	4	aux:pass	_	_
4	uvedeno	uvedený	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	jaké	jaký	DET	P4IP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	8	dep	_	_
7	jiné	jiný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	8	dep	_	_
8	mají	mít	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj:pass	_	_
9	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	10	cop	_	_
10	použity	použitý	ADJ	VsTP---XX-AP---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	8	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 csubj:pass	color:blue
1	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=o-1
2	centrální	centrální	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	_
3	výrobě	výroba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	obj	_	_
4	tepla	teplo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	3	nmod	_	LId=teplo-1
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	_	LGloss=(zvr._zájmeno/částice)
6	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	10	punct	_	_
8	že	že	SCONJ	J,-------------	_	10	mark	_	_
9	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	nejefektivnější	efektivní	ADJ	AAFS1----3A----	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing|Polarity=Pos	6	csubj:pass	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is a language-specific subtype of [csubj]().

158 nodes (0%) are attached to their parents as `csubj:pass`.

154 instances of `csubj:pass` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5.

The following 10 pairs of parts of speech are connected with `csubj:pass`: [cs-pos/VERB]()-[cs-pos/VERB]() (80; 51% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (44; 28% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (12; 8% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (6; 4% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (6; 4% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (5; 3% instances), [cs-pos/VERB]()-[cs-pos/DET]() (2; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (1; 1% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (1; 1% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 csubj:pass	color:blue
1	Při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=při-1
2	sklizni	sklizeň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	5	obl	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	_	LGloss=(zvr._zájmeno/částice)
4	nejlépe	dobře	ADV	Dg-------3A----	Degree=Sup|Polarity=Pos	5	advmod	_	_
5	pozná	poznat	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	9	punct	_	_
7	kdo	kdo	PRON	PKM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Int,Rel	9	nsubj	_	_
8	dobře	dobře	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	9	advmod	_	_
9	hospodařil	hospodařit	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	csubj:pass	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:pass	color:blue
1	Bartošovi	Bartoš	PROPN	NNMS3-----A---1	Animacy=Anim|Case=Dat|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	2	obj	_	_
2	přikázáno	přikázaný	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	urychleně	urychleně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	4	advmod	_	LDeriv=urychlit
4	vyklidit	vyklidit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	2	csubj:pass	_	_
5	místnost	místnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	4	obj	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 csubj:pass	color:blue
1	Tvrdí	tvrdit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=o-1
4	mně	já	PRON	PP-S6--1-------	Case=Loc|Number=Sing|Person=1|PronType=Prs	1	obj	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	_	_
6	že	že	SCONJ	J,-------------	_	10	mark	_	_
7	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	10	obl	_	_
8	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
9	nic	nic	PRON	PW--1----------	Case=Nom|PronType=Neg	10	nsubj	_	_
10	svaté	svatý	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	1	csubj:pass	_	SpaceAfter=No|LId=svatý-1
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is a language-specific subtype of [csubj]().

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `csubj:pass`: [cs-pos/VERB]()-[cs-pos/VERB]() (1; 100% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 csubj:pass	color:blue
1	Zohledněním	zohlednění	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	14	obj	_	_
2	předpokládané	předpokládaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
3	zbytkové	zbytkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
4	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	_	_
5	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	4	nmod	_	_
6	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	_	LId=podle-2
7	věty	věta	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	14	obl	_	_
8	druhé	druhý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	_	LId=druhý-1
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	14	expl:pass	_	_
10	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=pro-1
11	účely	účel	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	14	obl	_	_
12	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	13	det	_	_
13	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	11	nmod	_	_
14	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	19	punct	_	_
16	že	že	SCONJ	J,-------------	_	19	mark	_	_
17	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	18	amod	_	LId=účetní-1
18	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	19	nsubj	_	_
19	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	csubj:pass	_	_
20	a	a	CCONJ	J^-------------	_	21	cc	_	LId=a-1
21	aktualizuje	aktualizovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	19	conj	_	_
22	odpisový	odpisový	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	23	amod	_	_
23	plán	plán	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	19	obj	_	_
24	předmětného	předmětný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	25	amod	_	_
25	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	23	nmod	_	_
26	tak	tak	ADV	Db-------------	_	19	advmod	_	SpaceAfter=No|LId=tak-3
27	,	,	PUNCT	Z:-------------	_	48	punct	_	_
28	aby	aby	SCONJ	J,-------------	_	48	mark	_	_
29	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	48	aux	_	_
30	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	48	expl:pv	_	_
31	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	33	case	_	LId=za-1
32	plánovanou	plánovaný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	33	amod	_	_
33	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	48	obl	_	_
34	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	35	det	_	_
35	používání	používání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	33	nmod	_	_
36	součet	součet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	48	nsubj	_	_
37	vykázaných	vykázaný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	40	amod	_	_
38	a	a	CCONJ	J^-------------	_	39	cc	_	LId=a-1
39	plánovaných	plánovaný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	37	conj	_	_
40	odpisů	odpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	36	nmod	_	_
41	včetně	včetně	ADP	RR--2----------	AdpType=Prep|Case=Gen	44	case	_	LId=včetně-2
42	předpokládané	předpokládaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	44	amod	_	_
43	zbytkové	zbytkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	44	amod	_	_
44	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	36	nmod	_	_
45	nebo	nebo	CCONJ	J^-------------	_	47	cc	_	_
46	zbytkové	zbytkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	47	amod	_	_
47	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	44	conj	_	_
48	rovnal	rovnat	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	19	advcl	_	_
49	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	48	obj	_	_
50	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	49	nmod	_	_
51	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	52	case	_	LId=podle-2
52	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	49	nmod	_	_
53	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	52	nummod	_	SpaceAfter=No
54	.	.	PUNCT	Z:-------------	_	14	punct	_	_

~~~


