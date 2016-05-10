

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

7699 nodes (1%) are attached to their parents as `nsubjpass`.

4890 instances of `nsubjpass` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71178075074685.

The following 7 pairs of parts of speech are connected with `nsubjpass`: [cs-pos/VERB]()-[cs-pos/NOUN]() (6150; 80% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (1018; 13% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (351; 5% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (90; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (46; 1% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (43; 1% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubjpass	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubjpass	color:blue
1	Proto	proto	CONJ	J^-------------	_	2	cc	_	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
2	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	odběratel	odběratel	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	2	nsubj	_	_
4	platit	platit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	2	xcomp	_	_
5	tolik	tolik	PRON	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem,Ind	4	dobj	_	SpaceAfter=No|LId=tolik-1
6	,	,	PUNCT	Z:-------------	_	9	punct	_	_
7	kolik	kolik	PRON	C?--1----------	Case=Nom|NumType=Card|PronType=Int,Rel	9	nsubjpass	_	_
8	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	auxpass	_	_
9	stanoveno	stanovit	VERB	VsNS---XX-AP---	Aspect=Perf|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	5	acl	_	SpaceAfter=No|LGloss=(určit)
10	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubjpass	color:blue
1	Saganová	Saganová	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Sur|Negative=Pos|Number=Sing	2	nsubjpass	_	_
2	odsouzena	odsoudit	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=za-1
4	používání	používání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	2	nmod	_	LDeriv=použít
5	drog	droga	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	4	nmod	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

3455 nodes (1%) are attached to their parents as `nsubjpass`.

1807 instances of `nsubjpass` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.24978292329957.

The following 9 pairs of parts of speech are connected with `nsubjpass`: [cs-pos/VERB]()-[cs-pos/NOUN]() (2999; 87% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (330; 10% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (43; 1% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (26; 1% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (19; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (18; 1% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (14; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (5; 0% instances), [cs-pos/VERB]()-[cs-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nsubjpass	color:blue
1	Provádí	provádět	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
3	přípravné	přípravný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	4	amod	_	_
4	práce	práce	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	1	nsubjpass	_	SpaceAfter=No|LGloss=(jako_činnost_i_místo)
5	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubjpass	color:blue
1	"	"	PUNCT	Z:-------------	_	5	punct	_	_
2	Proč	proč	ADV	Db-------------	_	5	advmod	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
4	to	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubjpass	_	_
5	dělá	dělat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	?	?	PUNCT	Z:-------------	_	5	punct	_	_
7	"	"	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubjpass	color:blue
1	Dodáno	dodat	VERB	VsNS---XX-AP---	Aspect=Perf|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
2	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	1	auxpass	_	_
3	#	&camount;	NUM	C=-------------	NumForm=Digit|NumType=Card	1	nsubjpass	_	_
4	*	*	SYM	Xx-------------	Abbr=Yes	3	nmod	_	_
5	proti	proti	ADP	RR--3----------	AdpType=Prep|Case=Dat	8	case	_	LId=proti-1
6	plánovaným	plánovaný	ADJ	AAIP3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	8	amod	_	LDeriv=plánovat
7	#	&camount;	NUM	C=-------------	NumForm=Digit|NumType=Card	8	nummod	_	_
8	*	*	SYM	Xx-------------	Abbr=Yes	1	advmod	_	_
9	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

384 nodes (1%) are attached to their parents as `nsubjpass`.

224 instances of `nsubjpass` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.94270833333333.

The following 4 pairs of parts of speech are connected with `nsubjpass`: [cs-pos/VERB]()-[cs-pos/NOUN]() (348; 91% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (32; 8% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (3; 1% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubjpass	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nsubjpass	color:blue
1	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	amod	_	LId=účetní-1
2	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	4	nsubj	_	_
3	dále	dále	ADV	Db------------1	_	4	advmod	_	LId=dále-3
4	uvede	uvést	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	informace	informace	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	4	dobj	_	_
6	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	LId=o-1
7	druzích	druh	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Plur	5	nmod	_	LId=druh-1
8	zvířat	zvíře	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Plur	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	12	punct	_	_
10	která	který	PRON	P4NP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Int,Rel	12	nsubjpass	_	_
11	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	auxpass	_	_
12	vykazována	vykazovat	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|VerbForm=Part|Voice=Pass	8	acl	_	_
13	jako	jako	SCONJ	J,-------------	_	16	mark	_	_
14	dlouhodobý	dlouhodobý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	16	amod	_	_
15	hmotný	hmotný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	16	amod	_	_
16	majetek	majetek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	10	xcomp	_	_
17	a	a	CONJ	J^-------------	_	16	cc	_	LId=a-1
18	zásoby	zásoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	16	conj	_	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nsubjpass	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	9	punct	_	_
2	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=v-1
3	konsolidovaném	konsolidovaný	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	4	amod	_	_
4	výkazu	výkaz	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	9	nmod	_	_
5	zisku	zisk	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	4	nmod	_	_
6	a	a	CONJ	J^-------------	_	5	cc	_	LId=a-1
7	ztráty	ztráta	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	5	conj	_	_
8	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	auxpass:reflex	_	_
9	uvádí	uvádět	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	výše	vysoko	ADV	Dg-------2A---1	Degree=Cmp|Negative=Pos	9	nsubjpass	_	LId=vysoko-1
11	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	10	nmod	_	_
12	a	a	CONJ	J^-------------	_	11	cc	_	LId=a-1
13	výnosů	výnos	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	11	conj	_	_
14	odděleně	odděleně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	9	advmod	_	_
15	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	18	case	_	LId=za-1
16	běžné	běžný	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	18	amod	_	_
17	účetní	účetní	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	18	amod	_	LId=účetní-1
18	období	období	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	11	nmod	_	_
19	a	a	CONJ	J^-------------	_	18	cc	_	LId=a-1
20	minulé	minulý	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	22	amod	_	_
21	účetní	účetní	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	22	amod	_	LId=účetní-1
22	období	období	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	18	conj	_	SpaceAfter=No
23	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


