

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

335 nodes (0%) are attached to their parents as `discourse`.

291 instances of `discourse` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.15223880597015.

The following 24 pairs of parts of speech are connected with `discourse`: [cs-pos/VERB]()-[cs-pos/PRON]() (136; 41% instances), [cs-pos/VERB]()-[cs-pos/DET]() (90; 27% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (22; 7% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (19; 6% instances), [cs-pos/PRON]()-[cs-pos/DET]() (14; 4% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (13; 4% instances), [cs-pos/VERB]()-[cs-pos/CCONJ]() (11; 3% instances), [cs-pos/VERB]()-[cs-pos/SCONJ]() (4; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (3; 1% instances), [cs-pos/DET]()-[cs-pos/DET]() (3; 1% instances), [cs-pos/VERB]()-[cs-pos/PART]() (3; 1% instances), [cs-pos/ADJ]()-[cs-pos/CCONJ]() (2; 1% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (2; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (2; 1% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (2; 1% instances), [cs-pos/ADV]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/INTJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/CCONJ]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Plivnout	plivnout	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	0	root	_	_
2	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	1	discourse	_	LGloss=(zvr._zájmeno/částice)
3	hodně	hodně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	4	advmod	_	_
4	vysoko	vysoko	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	1	advmod	_	LId=vysoko-1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	To	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	discourse	_	_
2	byste	být	AUX	Vc-P---2-------	Mood=Cnd|Number=Plur|Person=2|VerbForm=Fin	4	aux	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	_	LGloss=(zvr._zájmeno/částice)
4	divil	divit	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Tak	tak	ADV	Db-------------	PronType=Dem	6	discourse	_	LId=tak-3
2	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	LId=na-1
3	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	obj	_	_
4	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pv	_	LGloss=(zvr._zájmeno/částice)
5	ještě	ještě	ADV	Db-------------	_	6	advmod	_	_
6	počkáte	počkat	VERB	VB-P---2P-AA---	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	10	punct	_	_
8	tam	tam	ADV	Db-------------	PronType=Dem	10	advmod	_	_
9	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	10	obj	_	_
10	uvidíte	uvidět	VERB	VB-P---2P-AA---	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
11	tak	tak	ADV	Db-------------	PronType=Dem	13	advmod:emph	_	LId=tak-3
12	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
13	padesáti	padesát	NUM	Cn-P6----------	Case=Loc|Number=Plur|NumForm=Word|NumType=Card	10	obl	_	SpaceAfter=No|LNumValue=50
14	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

104 nodes (0%) are attached to their parents as `discourse`.

96 instances of `discourse` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.97115384615385.

The following 16 pairs of parts of speech are connected with `discourse`: [cs-pos/VERB]()-[cs-pos/DET]() (35; 34% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (24; 23% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (9; 9% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (7; 7% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (6; 6% instances), [cs-pos/PRON]()-[cs-pos/DET]() (5; 5% instances), [cs-pos/VERB]()-[cs-pos/PART]() (5; 5% instances), [cs-pos/VERB]()-[cs-pos/SCONJ]() (3; 3% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (2; 2% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (2; 2% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (1; 1% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (1; 1% instances), [cs-pos/ADJ]()-[cs-pos/SCONJ]() (1; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (1; 1% instances), [cs-pos/NUM]()-[cs-pos/DET]() (1; 1% instances), [cs-pos/VERB]()-[cs-pos/CCONJ]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	discourse	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	11	expl:pv	_	LGloss=(zvr._zájmeno/částice)
3	ho	on	PRON	PHZS4--3-------	Case=Acc|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	11	obj	_	_
4	začaly	začít	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	LId=začít-1
5	bezmála	bezmála	ADV	Db-------------	_	6	advmod	_	_
6	#	&camount;	NUM	C=-------------	NumForm=Digit|NumType=Card	7	nummod:gov	_	_
7	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	4	obl	_	_
8	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=po-1
9	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	10	det	_	LGloss=(přivlast.)
10	*	*	SYM	Xx-------------	Abbr=Yes	7	nmod	_	_
11	*	*	SYM	Xx-------------	Abbr=Yes	4	obj	_	_
12	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 discourse	color:blue
1	Na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=na-1
2	balkóně	balkón	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	obl	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pv	_	LGloss=(zvr._zájmeno/částice)
4	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	6	discourse	_	_
5	jich	on	PRON	PPXP2--3-------	Case=Gen|Number=Plur|Person=3|PronType=Prs	7	nmod	_	LId=on-1
6	sejde	sejít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	6	nsubj	_	_
8	než	než	SCONJ	J,-------------	_	9	mark	_	LId=než-2
9	desítka	desítka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 discourse	color:blue
1	Kolik	kolik	DET	C?--4----------	Case=Acc|NumType=Card|PronType=Int,Rel	4	nsubj:pass	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	tak	tak	ADV	Db-------------	PronType=Dem	4	discourse	_	LId=tak-3
4	dává	dávat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LDeriv=dát
5	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


