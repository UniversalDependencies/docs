

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

141065 nodes (11%) are attached to their parents as `amod`.

131436 instances of `amod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31162230177578.

The following 17 pairs of parts of speech are connected with `amod`: [cs-pos/NOUN]()-[cs-pos/ADJ]() (134377; 95% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (4695; 3% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (548; 0% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (423; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (409; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (235; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (227; 0% instances), [cs-pos/PRON]()-[cs-pos/DET]() (38; 0% instances), [cs-pos/NUM]()-[cs-pos/DET]() (22; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (22; 0% instances), [cs-pos/DET]()-[cs-pos/DET]() (19; 0% instances), [cs-pos/PART]()-[cs-pos/ADJ]() (18; 0% instances), [cs-pos/SYM]()-[cs-pos/ADJ]() (13; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (11; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (5; 0% instances), [cs-pos/INTJ]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/PROPN]()-[cs-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Přenosová	přenosový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	rychlost	rychlost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No|LDeriv=rychlý
3	:	:	PUNCT	Z:-------------	_	10	punct	_	_
4	(	(	PUNCT	Z:-------------	_	5	punct	_	SpaceAfter=No
5	A	A	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Giv|Polarity=Pos	10	nmod	_	SpaceAfter=No|LId=A-0
6	4	4	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod	_	SpaceAfter=No
7	/	/	PUNCT	Z:-------------	_	8	punct	_	SpaceAfter=No
8	sec	s`sekunda	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Polarity=Pos	5	nmod	_	SpaceAfter=No|LId=s`sekunda-2
9	)	)	PUNCT	Z:-------------	_	5	punct	_	_
10	12	12	NUM	C=-------------	NumForm=Digit|NumType=Card	2	appos	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 amod	color:blue
1	OECD	OECD	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	0	root	_	LId=OECD-1|LGloss=(Ev._org._hosp._spolupr._a_roz.)
2	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	3	case	_	LId=k-1
3	vývoji	vývoj	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	1	dep	_	_
4	HDP	HDP	NOUN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|Polarity=Pos	3	nmod	_	LGloss=(hrubý_domácí_produkt)
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	9	case	_	LId=v-1
6	střední	střední	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	_	_
7	a	a	CCONJ	J^-------------	_	8	cc	_	LId=a-1
8	východní	východní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	conj	_	_
9	Evropě	Evropa	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	3	nmod	_	SpaceAfter=No
10	:	:	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	_	LId=z-1
2	dalších	další	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	3	obl	_	_
3	byly	být	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	mezi	mezi	ADP	RR--7----------	AdpType=Prep|Case=Ins	6	case	_	LId=mezi-1
5	prvními	první	ADJ	CrIP7----------	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|NumType=Ord	6	amod	_	_
6	deseti	deset	NUM	Cn-P7----------	Case=Ins|Number=Plur|NumForm=Word|NumType=Card	3	obl	_	LNumValue=10
7	ještě	ještě	ADV	Db-------------	_	8	advmod:emph	_	_
8	Pupp	Pupp	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Com|Number=Sing|Polarity=Pos	3	nsubj	_	_
9	a	a	CCONJ	J^-------------	_	10	cc	_	LId=a-1
10	Jalta	Jalta	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

60628 nodes (13%) are attached to their parents as `amod`.

54917 instances of `amod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32595500428845.

The following 19 pairs of parts of speech are connected with `amod`: [cs-pos/NOUN]()-[cs-pos/ADJ]() (59277; 98% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (638; 1% instances), [cs-pos/SYM]()-[cs-pos/ADJ]() (153; 0% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (145; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (103; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (95; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (87; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (74; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (12; 0% instances), [cs-pos/CCONJ]()-[cs-pos/ADJ]() (10; 0% instances), [cs-pos/PRON]()-[cs-pos/DET]() (10; 0% instances), [cs-pos/NUM]()-[cs-pos/DET]() (8; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (7; 0% instances), [cs-pos/DET]()-[cs-pos/DET]() (4; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Vypracování	vypracování	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	LDeriv=vypracovat
2	nových	nový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	3	amod	_	_
3	principů	princip	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	1	nmod	_	_
4	regulace	regulace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	_	_
5	vodního	vodní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	režimu	režim	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	4	nmod	_	_
7	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	LId=v-1
8	půdě	půda	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Příprava	příprava	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	_
2	výstavby	výstavba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	_	_
3	společné	společný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
4	ČOV	ČOV	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Polarity=Pos	2	nmod	_	_
5	Dvůr	Dvůr	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	4	nmod	_	_
6	Králové	Králové	ADJ	AAXXX----1A----	Degree=Pos|NameType=Geo|Polarity=Pos	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	Především	především	ADV	Db-------------	_	2	advmod	_	_
2	záleží	záležet	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=na-1
4	vrozené	vrozený	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	5	amod	_	LDeriv=vrodit
5	*	*	SYM	Xx-------------	Abbr=Yes	2	obj	_	_
6	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

4332 nodes (16%) are attached to their parents as `amod`.

3860 instances of `amod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33587257617729.

The following 3 pairs of parts of speech are connected with `amod`: [cs-pos/NOUN]()-[cs-pos/ADJ]() (4325; 100% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (6; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	OBSAHOVÉ	obsahový	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	_	_
2	VYMEZENÍ	vymezení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
3	NĚKTERÝCH	některý	DET	PZXP2----------	Case=Gen|Number=Plur|PronType=Ind	4	det	_	_
4	POLOŽEK	položka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	2	nmod	_	_
5	ROZVAHY	rozvaha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	4	nmod	_	_
6	(	(	PUNCT	Z:-------------	_	7	punct	_	SpaceAfter=No
7	BILANCE	bilance	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	appos	_	SpaceAfter=No
8	)	)	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 27 amod	color:blue
1	2	2	NUM	C}-------------	NumForm=Roman|NumType=Card	33	obl	_	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	_	_
3	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=v-1
4	případech	případ	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	33	obl	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	_	_
6	kdy	kdy	ADV	Db-------------	_	10	advmod	_	_
7	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	10	aux:pass	_	_
8	projekt	projekt	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	10	nsubj:pass	_	_
9	přeměny	přeměna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	8	nmod	_	_
10	vypracován	vypracovat	VERB	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	4	acl	_	_
11	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	_	LId=podle-2
12	zákona	zákona	X	X@-------------	_	10	advmod	_	_
13	č.	č.	X	X@-------------	_	12	flat	_	_
14	125/2008	125/2008	X	X@-------------	_	12	flat	_	_
15	Sb.	Sb.	X	X@-------------	_	12	flat	_	SpaceAfter=No
16	,	,	PUNCT	Z:-------------	_	18	punct	_	_
17	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	18	case	_	LId=o-1
18	přeměnách	přeměna	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	12	nmod	_	ToDo=nmod
19	obchodních	obchodní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	20	amod	_	_
20	společností	společnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	18	nmod	_	_
21	a	a	CCONJ	J^-------------	_	22	cc	_	LId=a-1
22	družstev	družstvo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	20	conj	_	SpaceAfter=No
23	,	,	PUNCT	Z:-------------	_	25	punct	_	_
24	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	25	case	_	LId=v-1
25	znění	znění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	12	nmod	_	ToDo=nmod
26	účinném	účinný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	25	amod	_	_
27	do	do	ADJ	A2--------A----	Hyph=Yes|Polarity=Pos	26	amod	_	LId=do-7
28	31	31	NUM	C}-------------	NumForm=Roman|NumType=Card	30	nummod	_	SpaceAfter=No
29	.	.	PUNCT	Z:-------------	_	28	punct	_	_
30	prosince	prosinec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	27	obl	_	_
31	2011	2011	NUM	C}-------------	NumForm=Roman|NumType=Card	30	nummod	_	SpaceAfter=No
32	,	,	PUNCT	Z:-------------	_	10	punct	_	_
33	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
34	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	33	expl:pass	_	_
35	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	36	case	_	LId=při-1
36	účtování	účtování	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	33	obl	_	_
37	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	38	case	_	LId=o-1
38	přeměně	přeměna	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	36	nmod	_	_
39	společnosti	společnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	38	nmod	_	_
40	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	41	case	_	LId=podle-2
41	vyhlášky	vyhlášky	X	X@-------------	_	33	advmod	_	_
42	č.	č.	X	X@-------------	_	41	flat	_	_
43	500/2002	500/2002	X	X@-------------	_	41	flat	_	_
44	Sb.	Sb.	X	X@-------------	_	41	flat	_	SpaceAfter=No
45	,	,	PUNCT	Z:-------------	_	47	punct	_	_
46	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	47	case	_	LId=v-1
47	znění	znění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	41	nmod	_	ToDo=nmod
48	účinném	účinný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	47	amod	_	_
49	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	50	case	_	LId=do-1
50	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	48	obl	_	_
51	nabytí	nabytí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	50	nmod	_	_
52	účinnosti	účinnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	51	nmod	_	_
53	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	54	det	_	_
54	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	52	nmod	_	SpaceAfter=No
55	.	.	PUNCT	Z:-------------	_	33	punct	_	_

~~~


~~~ conllu
# visual-style 108	bgColor:blue
# visual-style 108	fgColor:white
# visual-style 111	bgColor:blue
# visual-style 111	fgColor:white
# visual-style 111 108 amod	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	5	punct	_	_
2	Tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	zákon	zákon	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	_	_
5	vztahuje	vztahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=na-1
7	a)	a)	X	X@-------------	_	9	nmod	_	_
8	právnické	právnický	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	9	amod	_	_
9	osoby	osoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	_	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	12	punct	_	_
11	které	který	PRON	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	12	nsubj	_	_
12	mají	mít	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	acl	_	_
13	sídlo	sídlo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	12	obj	_	_
14	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	15	case	_	LId=na-1
15	území	území	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	12	obl	_	_
16	České	český	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	17	amod	_	_
17	republiky	republika	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	15	nmod	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	21	punct	_	_
19	b)	b)	X	X@-------------	_	21	nmod	_	_
20	zahraniční	zahraniční	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	21	amod	_	_
21	osoby	osoba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	9	conj	_	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	28	punct	_	_
23	pokud	pokud	SCONJ	J,-------------	_	28	mark	_	_
24	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	25	case	_	LId=na-1
25	území	území	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	28	obl	_	_
26	České	český	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	_	_
27	republiky	republika	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	25	nmod	_	_
28	podnikají	podnikat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	21	dep	_	_
29	nebo	nebo	CCONJ	J^-------------	_	30	cc	_	_
30	provozují	provozovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	28	conj	_	_
31	jinou	jiný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	32	amod	_	_
32	činnost	činnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	30	obj	_	_
33	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	36	case	_	LId=podle-2
34	zvláštních	zvláštní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	36	amod	_	_
35	právních	právní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	36	amod	_	_
36	předpisů	předpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	30	obl	_	SpaceAfter=No
37	,	,	PUNCT	Z:-------------	_	40	punct	_	_
38	c)	c)	X	X@-------------	_	40	nmod	_	_
39	organizační	organizační	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	40	amod	_	_
40	složky	složka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	9	conj	_	_
41	státu	stát	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	40	nmod	_	LId=stát-1
42	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	45	case	_	LId=podle-2
43	zvláštního	zvláštní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	45	amod	_	_
44	právního	právní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	45	amod	_	_
45	předpisu	předpis	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	40	dep	_	SpaceAfter=No
46	,	,	PUNCT	Z:-------------	_	49	punct	_	_
47	d)	d)	X	X@-------------	_	49	nmod	_	_
48	fyzické	fyzický	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	49	amod	_	_
49	osoby	osoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	9	conj	_	SpaceAfter=No
50	,	,	PUNCT	Z:-------------	_	55	punct	_	_
51	které	který	PRON	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	55	nsubj	_	_
52	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	55	cop	_	_
53	jako	jako	SCONJ	J,-------------	_	54	mark	_	_
54	podnikatelé	podnikatel	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	51	xcomp	_	_
55	zapsány	zapsat	VERB	VsTP---XX-AP---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	49	acl	_	_
56	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	58	case	_	LId=v-1
57	obchodním	obchodní	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	58	amod	_	_
58	rejstříku	rejstřík	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	55	obl	_	SpaceAfter=No
59	,	,	PUNCT	Z:-------------	_	63	punct	_	_
60	e)	e)	X	X@-------------	_	63	nmod	_	_
61	ostatní	ostatní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	63	amod	_	_
62	fyzické	fyzický	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	63	amod	_	_
63	osoby	osoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	9	conj	_	SpaceAfter=No
64	,	,	PUNCT	Z:-------------	_	67	punct	_	_
65	které	který	PRON	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	67	nsubj	_	_
66	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	67	cop	_	_
67	podnikateli	podnikatel	NOUN	NNMS3-----A----	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	63	acl	_	SpaceAfter=No
68	,	,	PUNCT	Z:-------------	_	71	punct	_	_
69	pokud	pokud	SCONJ	J,-------------	_	71	mark	_	_
70	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	71	det	_	_
71	obrat	obrat	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	67	nsubj	_	LId=obrat-1
72	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	73	case	_	LId=podle-2
73	zákona	zákon	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	97	obl	_	_
74	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	75	case	_	LId=o-1
75	dani	daň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	73	nmod	_	_
76	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	78	case	_	LId=z-1
77	přidané	přidaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	78	amod	_	_
78	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	75	nmod	_	SpaceAfter=No
79	,	,	PUNCT	Z:-------------	_	81	punct	_	_
80	včetně	včetně	ADP	RR--2----------	AdpType=Prep|Case=Gen	81	case	_	LId=včetně-2
81	plnění	plnění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	97	obl	_	_
82	osvobozených	osvobozený	ADJ	AAMP2----1A----	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	81	amod	_	_
83	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	85	case	_	LId=od-1
84	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	85	det	_	_
85	daně	daň	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	82	obj	_	SpaceAfter=No
86	,	,	PUNCT	Z:-------------	_	89	punct	_	_
87	jež	jenž	PRON	PJFS1----------	Case=Nom|Gender=Fem|Number=Sing|PrepCase=Npr|PronType=Rel	89	nsubj	_	_
88	nejsou	být	AUX	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	89	cop	_	_
89	součástí	součást	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	81	acl	_	_
90	obratu	obrat	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	89	nmod	_	LId=obrat-1|SpaceAfter=No|ToDo=nmod
91	,	,	PUNCT	Z:-------------	_	81	punct	_	_
92	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	96	case	_	LId=v-1
93	rámci	rámec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	92	fixed	_	_
94	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	96	det	_	_
95	podnikatelské	podnikatelský	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	96	amod	_	_
96	činnosti	činnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	97	obl	_	_
97	přesáhl	přesáhnout	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	71	advcl	_	_
98	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	102	case	_	LId=za-1
99	bezprostředně	bezprostředně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	100	advmod	_	_
100	předcházející	předcházející	ADJ	AGIS4-----A----	Animacy=Inan|Aspect=Imp|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	102	amod	_	_
101	kalendářní	kalendářní	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	102	amod	_	_
102	rok	rok	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	97	obl	_	_
103	částku	částka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	97	obj	_	_
104	25000000	25000000	NUM	C}-------------	NumForm=Roman|NumType=Card	103	nummod	_	_
105	Kč	Kč	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Polarity=Pos	103	nmod	_	SpaceAfter=No
106	,	,	PUNCT	Z:-------------	_	111	punct	_	_
107	a	a	CCONJ	J^-------------	_	108	cc	_	LId=a-1
108	to	ten	PRON	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	111	amod	_	_
109	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	111	case	_	LId=od-1
110	prvního	první	ADJ	CrIS2----------	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumType=Ord	111	amod	_	_
111	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	97	obl	_	_
112	kalendářního	kalendářní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	113	amod	_	_
113	roku	rok	NOUN	NNIS2-----A---1	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	111	nmod	_	SpaceAfter=No
114	.	.	PUNCT	Z:-------------	_	118	punct	_	_
115	f)	f)	X	X@-------------	_	118	nmod	_	_
116	ostatní	ostatní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	118	amod	_	_
117	fyzické	fyzický	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	118	amod	_	_
118	osoby	osoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	9	conj	_	SpaceAfter=No
119	,	,	PUNCT	Z:-------------	_	121	punct	_	_
120	které	který	PRON	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	121	nsubj	_	_
121	vedou	vést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	118	acl	_	LId=vést-1
122	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	121	obj	_	_
123	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	126	case	_	LId=na-1
124	základě	základ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	123	fixed	_	_
125	svého	svůj	DET	P8ZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	126	det	_	LId=svůj-1
126	rozhodnutí	rozhodnutí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	121	obl	_	SpaceAfter=No
127	,	,	PUNCT	Z:-------------	_	131	punct	_	_
128	g)	g)	X	X@-------------	_	131	nmod	_	_
129	ostatní	ostatní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	131	amod	_	_
130	fyzické	fyzický	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	131	amod	_	_
131	osoby	osoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	9	conj	_	SpaceAfter=No
132	,	,	PUNCT	Z:-------------	_	135	punct	_	_
133	které	který	PRON	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	135	nsubj	_	_
134	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	135	cop	_	_
135	podnikateli	podnikatel	NOUN	NNMP7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	131	acl	_	_
136	a	a	CCONJ	J^-------------	_	138	cc	_	LId=a-1
137	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	138	cop	_	_
138	účastníky	účastník	NOUN	NNMP7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	135	conj	_	_
139	sdružení	sdružení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	138	nmod	_	ToDo=nmod
140	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	142	case	_	LId=bez-1
141	právní	právní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	142	amod	_	_
142	subjektivity	subjektivita	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	139	nmod	_	_
143	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	146	case	_	LId=podle-2
144	zvláštního	zvláštní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	146	amod	_	_
145	právního	právní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	146	amod	_	_
146	předpisu	předpis	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	138	obl	_	SpaceAfter=No
147	,	,	PUNCT	Z:-------------	_	156	punct	_	_
148	pokud	pokud	SCONJ	J,-------------	_	156	mark	_	_
149	alespoň	alespoň	ADV	Db-------------	_	150	advmod:emph	_	_
150	jeden	jeden	NUM	ClYS1----------	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	156	nsubj	_	_
151	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	152	case	_	LId=z-1
152	účastníků	účastník	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	150	nmod	_	_
153	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	154	det	_	_
154	sdružení	sdružení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	152	nmod	_	_
155	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	156	cop	_	_
156	osobou	osoba	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	138	advcl	_	_
157	uvedenou	uvedený	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	156	amod	_	_
158	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	159	case	_	LId=v-1
159	písmenech	písmeno	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Number=Plur|Polarity=Pos	157	obl	_	_
160	a)	a)	X	X@-------------	_	159	nmod	_	_
161	až	až	X	X@-------------	_	160	flat	_	_
162	f)	f)	X	X@-------------	_	160	flat	_	_
163	nebo	nebo	CCONJ	J^-------------	_	164	cc	_	_
164	h)	h)	X	X@-------------	_	160	conj	_	SpaceAfter=No
165	,	,	PUNCT	Z:-------------	_	170	punct	_	_
166	nebo	nebo	CCONJ	J^-------------	_	170	cc	_	_
167	h)	h)	X	X@-------------	_	170	nmod	_	_
168	ostatní	ostatní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	170	amod	_	_
169	fyzické	fyzický	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	170	amod	_	_
170	osoby	osoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	9	conj	_	SpaceAfter=No
171	,	,	PUNCT	Z:-------------	_	176	punct	_	_
172	kterým	který	PRON	P4XP3----------	Case=Dat|Number=Plur|PronType=Int,Rel	176	obj	_	_
173	povinnost	povinnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	176	obj	_	_
174	vedení	vedení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	173	nmod	_	_
175	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	174	nmod	_	_
176	ukládá	ukládat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	170	acl	_	_
177	zvláštní	zvláštní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	179	amod	_	_
178	právní	právní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	179	amod	_	_
179	předpis	předpis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	176	nsubj	_	SpaceAfter=No
180	,	,	PUNCT	Z:-------------	_	176	punct	_	_
181	(	(	PUNCT	Z:-------------	_	170	punct	_	SpaceAfter=No
182	dále	dále	ADV	Db------------1	_	170	dep	_	LId=dále-3
183	jen	jen	PART	TT-------------	_	184	advmod:emph	_	LId=jen-1
184	"účetní	"účetní	X	X@-------------	_	170	dep	_	_
185	jednotky"	jednotky"	X	X@-------------	_	184	flat	_	SpaceAfter=No
186	)	)	PUNCT	Z:-------------	_	170	punct	_	SpaceAfter=No
187	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


