

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

157871 nodes (10%) are attached to their parents as `amod`.

148018 instances of `amod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27051833458963.

The following 17 pairs of parts of speech are connected with `amod`: [cs-pos/NOUN]()-[cs-pos/ADJ]() (150665; 95% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (5139; 3% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (767; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (601; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (262; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (253; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (62; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (26; 0% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (23; 0% instances), [cs-pos/PART]()-[cs-pos/ADJ]() (21; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (14; 0% instances), [cs-pos/NUM]()-[cs-pos/PRON]() (14; 0% instances), [cs-pos/SYM]()-[cs-pos/ADJ]() (13; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (6; 0% instances), [cs-pos/DET]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/INTJ]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/PROPN]()-[cs-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Přenosová	přenosový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	amod	_	_
2	rychlost	rychlost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No|LDeriv=rychlý
3	:	:	PUNCT	Z:-------------	_	10	punct	_	_
4	(	(	PUNCT	Z:-------------	_	5	punct	_	SpaceAfter=No
5	A	A	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Giv|Negative=Pos	10	nmod	_	SpaceAfter=No|LId=A-0
6	4	4	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod	_	SpaceAfter=No
7	/	/	PUNCT	Z:-------------	_	8	punct	_	SpaceAfter=No
8	sec	s`sekunda	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Negative=Pos	5	nmod	_	SpaceAfter=No|LId=s`sekunda-2
9	)	)	PUNCT	Z:-------------	_	5	punct	_	_
10	12	12	NUM	C=-------------	NumForm=Digit|NumType=Card	2	appos	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 amod	color:blue
1	OECD	OECD	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Negative=Pos	0	root	_	LId=OECD-1|LGloss=(Ev._org._hosp._spolupr._a_roz.)
2	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	3	case	_	LId=k-1
3	vývoji	vývoj	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	1	dep	_	_
4	HDP	HDP	NOUN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|Negative=Pos	3	nmod	_	LGloss=(hrubý_domácí_produkt)
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	9	case	_	LId=v-1
6	střední	střední	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	9	amod	_	_
7	a	a	CONJ	J^-------------	_	6	cc	_	LId=a-1
8	východní	východní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	6	conj	_	_
9	Evropě	Evropa	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Negative=Pos|Number=Sing	3	nmod	_	SpaceAfter=No
10	:	:	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	Že	že	SCONJ	J,-------------	_	6	mark	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
3	pod	pod	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=pod-1
4	tento	tento	DET	PDIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	plášť	plášť	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	6	nmod	_	_
6	schová	schovat	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	ccomp	_	_
7	leccos	leccos	PRON	PZ--1----------	Case=Nom|PronType=Ind	6	nsubjpass	_	_
8	dalšího	další	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	7	amod	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	6	punct	_	_
10	netřeba	netřeba	ADJ	ACNS------N----	Gender=Neut|Negative=Neg|Number=Sing|Variant=Short	0	root	_	LId=netřeba-1
11	připomínat	připomínat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	10	dep	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	10	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

61483 nodes (12%) are attached to their parents as `amod`.

56132 instances of `amod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28178520891954.

The following 18 pairs of parts of speech are connected with `amod`: [cs-pos/NOUN]()-[cs-pos/ADJ]() (60205; 98% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (634; 1% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (168; 0% instances), [cs-pos/SYM]()-[cs-pos/ADJ]() (154; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (95; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (82; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (82; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (14; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (12; 0% instances), [cs-pos/CONJ]()-[cs-pos/ADJ]() (10; 0% instances), [cs-pos/NUM]()-[cs-pos/PRON]() (8; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (7; 0% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (6; 0% instances), [cs-pos/DET]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Vypracování	vypracování	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	0	root	_	LDeriv=vypracovat
2	nových	nový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	3	amod	_	_
3	principů	princip	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	1	nmod	_	_
4	regulace	regulace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	3	nmod	_	_
5	vodního	vodní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	6	amod	_	_
6	režimu	režim	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	4	nmod	_	_
7	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	LId=v-1
8	půdě	půda	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Příprava	příprava	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	0	root	_	_
2	výstavby	výstavba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	1	nmod	_	_
3	společné	společný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	amod	_	_
4	ČOV	ČOV	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Negative=Pos	2	nmod	_	_
5	Dvůr	Dvůr	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Geo|Negative=Pos|Number=Sing	4	nmod	_	_
6	Králové	Králové	ADJ	AAXXX----1A----	Degree=Pos|NameType=Geo|Negative=Pos	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	A	a	CONJ	J^-------------	_	5	cc	_	LId=a-1
2	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=v-1
3	takových	takový	DET	PDXP6----------	Case=Loc|Number=Plur|PronType=Dem	4	det	_	_
4	případech	případ	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Plur	5	nmod	_	_
5	podlehne	podlehnout	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	i	i	CONJ	J^-------------	_	7	advmod:emph	_	LId=i-1
7	ten	ten	PRON	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	nsubj	_	_
8	nejlepší	dobrý	ADJ	AAMS1----3A----	Animacy=Anim|Case=Nom|Degree=Sup|Gender=Masc|Negative=Pos|Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

6084 nodes (17%) are attached to their parents as `amod`.

5411 instances of `amod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32001972386588.

The following 6 pairs of parts of speech are connected with `amod`: [cs-pos/NOUN]()-[cs-pos/ADJ]() (6070; 100% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (6; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (4; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/X]()-[cs-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Výroční	výroční	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	amod	_	_
2	zpráva	zpráva	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 amod	color:blue
1	2	2	NUM	C}-------------	NumForm=Roman|NumType=Card	30	nmod	_	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	_	_
3	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=v-1
4	případech	případ	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Plur	30	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	_	_
6	kdy	kdy	ADV	Db-------------	_	10	advmod	_	_
7	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	10	auxpass	_	_
8	projekt	projekt	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	10	nsubjpass	_	_
9	přeměny	přeměna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	8	nmod	_	_
10	vypracován	vypracovat	VERB	VsYS---XX-AP---	Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	4	acl	_	_
11	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	_	LId=podle-2
12	zákona_č._125/2008_Sb.	zákona_č._125/2008_Sb.	X	X@-------------	_	10	advmod	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	15	punct	_	_
14	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	15	case	_	LId=o-1
15	přeměnách	přeměna	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Plur	12	nmod	_	_
16	obchodních	obchodní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	17	amod	_	_
17	společností	společnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	15	nmod	_	_
18	a	a	CONJ	J^-------------	_	17	cc	_	LId=a-1
19	družstev	družstvo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Plur	17	conj	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	22	punct	_	_
21	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	22	case	_	LId=v-1
22	znění	znění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Sing	12	nmod	_	_
23	účinném	účinný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	22	amod	_	_
24	do	do	ADJ	A2--------A----	Hyph=Yes|Negative=Pos	23	amod	_	LId=do-7
25	31	31	NUM	C}-------------	NumForm=Roman|NumType=Card	27	nummod	_	SpaceAfter=No
26	.	.	PUNCT	Z:-------------	_	25	punct	_	_
27	prosince	prosinec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	24	nmod	_	_
28	2011	2011	NUM	C}-------------	NumForm=Roman|NumType=Card	27	nummod	_	SpaceAfter=No
29	,	,	PUNCT	Z:-------------	_	10	punct	_	_
30	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
31	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	30	auxpass:reflex	_	_
32	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	33	case	_	LId=při-1
33	účtování	účtování	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Sing	30	nmod	_	_
34	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	35	case	_	LId=o-1
35	přeměně	přeměna	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	33	nmod	_	_
36	společnosti	společnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	35	nmod	_	_
37	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	38	case	_	LId=podle-2
38	vyhlášky_č._500/2002_Sb.	vyhlášky_č._500/2002_Sb.	X	X@-------------	_	30	advmod	_	SpaceAfter=No
39	,	,	PUNCT	Z:-------------	_	41	punct	_	_
40	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	41	case	_	LId=v-1
41	znění	znění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Sing	38	nmod	_	_
42	účinném	účinný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	41	amod	_	_
43	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	44	case	_	LId=do-1
44	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	42	nmod	_	_
45	nabytí	nabytí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	44	nmod	_	_
46	účinnosti	účinnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	45	nmod	_	_
47	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	48	det	_	_
48	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	46	nmod	_	SpaceAfter=No
49	.	.	PUNCT	Z:-------------	_	30	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 19 amod	color:blue
1	(7)	(7)	PUNCT	Z:-------------	_	8	punct	_	_
2	Povinnost	povinnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	8	nsubj	_	_
3	zveřejnění	zveřejnění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	2	nmod	_	_
4	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	_	LId=podle-2
5	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	6	det	_	_
6	ustanovení	ustanovení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	3	nmod	_	_
7	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl	_	_
8	vztahuje	vztahovat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=na-1
10	všechny	všechen	PRON	PLFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Tot	11	nmod	_	_
11	informace	informace	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	8	dobj	_	_
12	účetní	účetní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	13	amod	_	LId=účetní-1
13	závěrky	závěrka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	11	nmod	_	_
14	i	i	CONJ	J^-------------	_	11	cc	_	LId=i-1
15	výroční	výroční	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	16	amod	_	_
16	zprávy	zpráva	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	11	conj	_	_
17	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	19	case	_	LId=s-1
18	výjimkou	výjimka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	17	mwe	_	_
19	těch	ten	PRON	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	11	amod	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	24	punct	_	_
21	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	22	case	_	LId=na-1
22	které	který	PRON	P4YP4----------	Case=Acc|Gender=Masc|Number=Plur|PronType=Int,Rel	24	dobj	_	_
23	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	24	expl	_	_
24	vztahuje	vztahovat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	acl	_	_
25	utajení	utajení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	24	nsubj	_	_
26	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	29	case	_	LId=podle-2
27	zvláštního	zvláštní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	29	amod	_	_
28	právního	právní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	29	amod	_	_
29	předpisu	předpis	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	25	nmod	_	SpaceAfter=No
30	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


