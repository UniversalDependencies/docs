

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

75607 nodes (6%) are attached to their parents as `obl`.

40324 instances of `obl` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.65455579509834.

The following 59 pairs of parts of speech are connected with `obl`: [cs-pos/VERB]()-[cs-pos/NOUN]() (46724; 62% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (9998; 13% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (4815; 6% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (4007; 5% instances), [cs-pos/VERB]()-[cs-pos/DET]() (2000; 3% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (999; 1% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (980; 1% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (925; 1% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (896; 1% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (729; 1% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (608; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (535; 1% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (379; 1% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (360; 0% instances), [cs-pos/ADV]()-[cs-pos/NUM]() (220; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (196; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (164; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (132; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (120; 0% instances), [cs-pos/ADV]()-[cs-pos/DET]() (114; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (112; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (95; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (56; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (53; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (50; 0% instances), [cs-pos/ADV]()-[cs-pos/PROPN]() (47; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (35; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (33; 0% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (28; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (24; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (22; 0% instances), [cs-pos/SYM]()-[cs-pos/NUM]() (19; 0% instances), [cs-pos/NUM]()-[cs-pos/PROPN]() (17; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (16; 0% instances), [cs-pos/DET]()-[cs-pos/PRON]() (14; 0% instances), [cs-pos/DET]()-[cs-pos/PROPN]() (13; 0% instances), [cs-pos/NUM]()-[cs-pos/PRON]() (12; 0% instances), [cs-pos/PUNCT]()-[cs-pos/NOUN]() (11; 0% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (5; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (5; 0% instances), [cs-pos/DET]()-[cs-pos/ADV]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (4; 0% instances), [cs-pos/PRON]()-[cs-pos/PROPN]() (4; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (4; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/DET]()-[cs-pos/DET]() (2; 0% instances), [cs-pos/INTJ]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/INTJ]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/NUM]()-[cs-pos/DET]() (2; 0% instances), [cs-pos/PART]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/ADP]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl	color:blue
1	Chci	chtít	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	uzavřít	uzavřít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	_	_
3	pojištění	pojištění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	2	obj	_	LDeriv=pojistit
4	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
5	dostal	dostat	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	conj	_	_
6	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
7	proto	proto	CCONJ	J^-------------	_	5	cc	_	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
8	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	9	case	_	LId=k-1
9	vyplnění	vyplnění	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	_	LDeriv=vyplnit
10	dotazník	dotazník	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	obj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl	color:blue
1	Na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	2	case	_	LId=na-1
2	požádání	požádání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	_	LDeriv=požádat
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
4	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	aux:pass	_	_
5	zaslán	zaslaný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	3	obj	_	_
6	seznam	seznam	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	_	_
7	firem	firma	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	Od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	_	LId=od-1
2	té	ten	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	doby	doba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	_	_
4	zprostředkovaly	zprostředkovat	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=v-1
6	ČR	ČR	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Geo|Polarity=Pos	4	obl	_	LId=ČR-1|LGloss=(Česká_republika)
7	pobyt	pobyt	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	_	LGloss=(př._místo_pobytu)
8	téměř	téměř	ADV	Db-------------	_	9	advmod:emph	_	_
9	stovky	stovka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	7	nmod	_	_
10	expertů	expert	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	9	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

27129 nodes (6%) are attached to their parents as `obl`.

15023 instances of `obl` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.65988425669947.

The following 63 pairs of parts of speech are connected with `obl`: [cs-pos/VERB]()-[cs-pos/NOUN]() (16007; 59% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (5381; 20% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (1597; 6% instances), [cs-pos/VERB]()-[cs-pos/DET]() (818; 3% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (523; 2% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (407; 2% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (334; 1% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (317; 1% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (265; 1% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (257; 1% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (202; 1% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (181; 1% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (125; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (103; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (76; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (62; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (58; 0% instances), [cs-pos/ADV]()-[cs-pos/DET]() (55; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (53; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (38; 0% instances), [cs-pos/ADV]()-[cs-pos/NUM]() (32; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (30; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (27; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (25; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (24; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (15; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (13; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (10; 0% instances), [cs-pos/ADV]()-[cs-pos/PROPN]() (10; 0% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (9; 0% instances), [cs-pos/DET]()-[cs-pos/PRON]() (8; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (5; 0% instances), [cs-pos/NUM]()-[cs-pos/PROPN]() (5; 0% instances), [cs-pos/SYM]()-[cs-pos/PRON]() (5; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (4; 0% instances), [cs-pos/SYM]()-[cs-pos/NUM]() (4; 0% instances), [cs-pos/CCONJ]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (3; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/SCONJ]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/ADP]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/AUX]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/DET]()-[cs-pos/DET]() (2; 0% instances), [cs-pos/DET]()-[cs-pos/PROPN]() (2; 0% instances), [cs-pos/SYM]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/SYM]()-[cs-pos/DET]() (2; 0% instances), [cs-pos/SYM]()-[cs-pos/PROPN]() (2; 0% instances), [cs-pos/ADP]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/AUX]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/CCONJ]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/CCONJ]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/INTJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/PUNCT]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl	color:blue
1	Významnou	významný	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	měrou	míra	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	5	obl	_	LGloss=(měřítko,poměr)
3	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	4	case	_	LId=k-1
4	tomu	ten	DET	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	5	obj	_	_
5	přispělo	přispět	VERB	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	plnění	plnění	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	5	nsubj	_	LDeriv=plnit
7	direktiv	direktiva	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	6	nmod	_	_
8	#	&cother;	NUM	C=-------------	NumForm=Digit|NumType=Card	9	nummod	_	_
9	sjezdu	sjezd	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	7	nmod	_	_
10	KSČ	KSČ	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	9	nmod	_	SpaceAfter=No|LId=KSČ-1|LGloss=(Komunistická_strana_Československa)
11	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obl	color:blue
1	Na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=na-1
2	rozdíl	rozdíl	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	1	fixed	_	_
3	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	1	fixed	_	LId=od-1
4	běžných	běžný	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	amod	_	_
5	veruk	veruka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	7	obl	_	_
6	nejsou	být	AUX	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	nakažlivé	nakažlivý	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl	color:blue
1	Ve	v	ADP	RV--4----------	AdpType=Voc|Case=Acc	2	case	_	LId=v-1
2	čtvrtek	čtvrtek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	_	_
3	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	5	obl	_	LGloss=(zvr._zájmeno/částice)
4	ještě	ještě	ADV	Db-------------	_	5	advmod	_	_
5	zavolám	zavolat	VERB	VB-S---1P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	váš	tvůj	DET	PSIS4-P2-------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	7	det	_	LGloss=(přivlast.)
7	sekretariát	sekretariát	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

1301 nodes (5%) are attached to their parents as `obl`.

951 instances of `obl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.6771714066103.

The following 14 pairs of parts of speech are connected with `obl`: [cs-pos/VERB]()-[cs-pos/NOUN]() (762; 59% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (327; 25% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (49; 4% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (38; 3% instances), [cs-pos/X]()-[cs-pos/NOUN]() (33; 3% instances), [cs-pos/VERB]()-[cs-pos/X]() (31; 2% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (23; 2% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (22; 2% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (6; 0% instances), [cs-pos/ADJ]()-[cs-pos/X]() (5; 0% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl	color:blue
1	ČÁST	část	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	2	obl	_	_
2	ČTVRTÁ	čtvrtý	ADJ	CrFS1----------	Case=Nom|Gender=Fem|Number=Sing|NumType=Ord	0	root	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 obl	color:blue
1	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	LId=účetní-1
2	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	_	_
3	uvede	uvést	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	dále	daleko	ADV	Dg-------2A---1	Degree=Cmp|Polarity=Pos	3	advmod	_	SpaceAfter=No|LId=daleko-1
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	zda	zda	SCONJ	J,-------------	_	8	mark	_	_
7	byly	být	AUX	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	8	aux:pass	_	_
8	uzavřeny	uzavřít	VERB	VsTP---XX-AP---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	3	ccomp	_	_
9	ovládací	ovládací	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	10	amod	_	_
10	smlouvy	smlouva	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	8	nsubj:pass	_	_
11	nebo	nebo	CCONJ	J^-------------	_	12	cc	_	_
12	smlouvy	smlouva	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	10	conj	_	_
13	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	14	case	_	LId=o-1
14	převodech	převod	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	12	nmod	_	_
15	zisku	zisk	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	14	nmod	_	_
16	a	a	CCONJ	J^-------------	_	21	cc	_	LId=a-1
17	jaké	jaký	DET	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	18	det	_	_
18	povinnosti	povinnost	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	21	nsubj	_	_
19	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	20	case	_	LId=z-1
20	nich	on	PRON	P5XP2--3-------	Case=Gen|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	21	obl	_	LId=on-1
21	vyplývají	vyplývat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


