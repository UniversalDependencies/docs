

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

19196 nodes (1%) are attached to their parents as `acl`.

19081 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.6485205251094.

The following 40 pairs of parts of speech are connected with `acl`: [cs-pos/NOUN]()-[cs-pos/VERB]() (13323; 69% instances), [cs-pos/DET]()-[cs-pos/VERB]() (2380; 12% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (1279; 7% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (881; 5% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (463; 2% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (219; 1% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (116; 1% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (106; 1% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (79; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (70; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (69; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (36; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (27; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (27; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (22; 0% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (13; 0% instances), [cs-pos/DET]()-[cs-pos/PRON]() (12; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (10; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (9; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (9; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (8; 0% instances), [cs-pos/DET]()-[cs-pos/ADV]() (5; 0% instances), [cs-pos/DET]()-[cs-pos/DET]() (5; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (4; 0% instances), [cs-pos/DET]()-[cs-pos/PART]() (3; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/DET]()-[cs-pos/NUM]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (2; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/CCONJ]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/CCONJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl	color:blue
1	Firma	firma	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	8	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	6	punct	_	_
3	která	který	DET	P4FS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Int,Rel	6	nsubj	_	_
4	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	6	obl	_	LGloss=(zvr._zájmeno/částice)
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	6	obj	_	LId=on-1|LGloss=(oni/ono)
6	vyžádá	vyžádat	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	6	punct	_	_
8	platí	platit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	pouze	pouze	ADV	Db-------------	_	10	advmod:emph	_	_
10	náklady	náklad	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	8	obj	_	_
11	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	13	case	_	LId=na-1
12	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	13	det	_	LGloss=(přivlast.)
13	pobyt	pobyt	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	10	nmod	_	SpaceAfter=No|LGloss=(př._místo_pobytu)
14	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	Lidé	člověk	NOUN	NNMP1-----A---1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	2	nsubj	_	_
2	chtějí	chtít	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	platit	platit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	2	xcomp	_	_
4	jen	jen	PART	TT-------------	_	5	advmod:emph	_	LId=jen-1|LGloss=(pouze)
5	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	9	punct	_	_
7	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	9	obj	_	LId=co-1
8	skutečně	skutečně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	9	advmod	_	LDeriv=skutečný
9	spotřebovali	spotřebovat	VERB	VpMP---XR-AA---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	acl	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 acl	color:blue
1	K	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	2	case	_	LId=k-1
2	tomu	ten	DET	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	5	obl	_	_
3	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	4	aux	_	_
4	měl	mít	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	pomoci	pomoci	VERB	Vf--------A---1	Polarity=Pos|VerbForm=Inf	4	xcomp	_	_
6	Mucha	Mucha	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	4	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	12	punct	_	_
8	který	který	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	12	nsubj	_	_
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pv	_	LGloss=(zvr._zájmeno/částice)
10	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=po-1
11	letech	rok	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Number=Plur|Polarity=Pos	12	obl	_	_
12	vrátil	vrátit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	acl	_	_
13	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	14	case	_	LId=z-1
14	Zlína	Zlín	PROPN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	12	obl	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

6734 nodes (1%) are attached to their parents as `acl`.

6700 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.64686664686665.

The following 38 pairs of parts of speech are connected with `acl`: [cs-pos/NOUN]()-[cs-pos/VERB]() (4767; 71% instances), [cs-pos/DET]()-[cs-pos/VERB]() (738; 11% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (466; 7% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (207; 3% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (140; 2% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (80; 1% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (66; 1% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (51; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (34; 1% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (33; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (20; 0% instances), [cs-pos/SYM]()-[cs-pos/VERB]() (19; 0% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (16; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (13; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (8; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (7; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (7; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (6; 0% instances), [cs-pos/SCONJ]()-[cs-pos/VERB]() (6; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (6; 0% instances), [cs-pos/DET]()-[cs-pos/ADV]() (5; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (5; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (4; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (4; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (4; 0% instances), [cs-pos/DET]()-[cs-pos/DET]() (3; 0% instances), [cs-pos/SYM]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/DET]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PUNCT]()-[cs-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	Na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=na-1
2	pláni	pláň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	kde	kde	ADV	Db-------------	PronType=Int,Rel	6	advmod	_	_
5	kdysi	kdysi	ADV	Db-------------	PronType=Ind	6	advmod	_	_
6	stávaly	stávat	VERB	VpTP---XR-AA---	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	2	acl	_	LId=stávat-3|LGloss=(někdo/něco_stojí,_např._na_nohou)|LDeriv=st-3
7	Lidice	Lidice	PROPN	NNFP1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Plur|Polarity=Pos	6	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	zazněla	zaznít	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
10	slova	slovo	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	9	nsubj	_	_
11	mladých	mladý	ADJ	AAMP2----1A----	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	Ještě	ještě	ADV	Db-------------	_	2	advmod	_	_
2	tvrdší	tvrdý	ADJ	AAIS1----2A----	Animacy=Inan|Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
3	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=o-1
4	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	2	dep	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	_	_
6	aby	aby	SCONJ	J,-------------	_	10	mark	_	_
7	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	10	aux	_	_
8	zapsané	zapsaný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	9	amod	_	LDeriv=zapsat
9	požadavky	požadavek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	10	nsubj	_	_
10	nezůstaly	zůstat	VERB	VpTP---XR-NA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	4	acl	_	_
11	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	_	LId=na-1
12	papíře	papír	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	Plavání	plavání	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	4	nsubj	_	LDeriv=plavat
2	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	všestranný	všestranný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	4	amod	_	_
4	sport	sport	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	který	který	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	8	nsubj	_	_
7	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	vhodný	vhodný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	4	acl	_	_
9	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=pro-1
10	každý	každý	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	11	amod	_	_
11	věk	věk	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	8	obj	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

450 nodes (2%) are attached to their parents as `acl`.

450 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.63333333333333.

The following 9 pairs of parts of speech are connected with `acl`: [cs-pos/NOUN]()-[cs-pos/VERB]() (358; 80% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (55; 12% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (22; 5% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (6; 1% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (4; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/X]()-[cs-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	že	že	SCONJ	J,-------------	_	6	mark	_	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	obj	_	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	Účetním	účetní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	_	LId=účetní-1
2	záznamem	záznam	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	_	_
4	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	data	datum	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	4	nsubj:pass	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	9	punct	_	_
7	která	který	PRON	P4NP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Int,Rel	9	nsubj	_	_
8	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	záznamem	záznam	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	acl	_	_
10	veškerých	veškerý	PRON	PLXP2----------	Case=Gen|Number=Plur|PronType=Tot	11	nmod	_	_
11	skutečností	skutečnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	9	nmod	_	ToDo=nmod
12	týkajících	týkající	ADJ	AGFP2-----A----	Aspect=Imp|Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	11	amod	_	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pv	_	_
14	vedení	vedení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	12	obj	_	_
15	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	14	nmod	_	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 22 acl	color:blue
1	Dlouhodobým	dlouhodobý	ADJ	AAMP3----1A----	Animacy=Anim|Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	3	obj	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	_	_
3	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	takový	takový	DET	PDIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	majetek	majetek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj:pass	_	_
6	a	a	CCONJ	J^-------------	_	7	cc	_	LId=a-1
7	závazky	závazek	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	22	punct	_	_
9	kde	kde	ADV	Db-------------	_	22	advmod	_	_
10	doba	doba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	22	nsubj	_	_
11	použitelnosti	použitelnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	10	nmod	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	15	punct	_	_
13	popřípadě	popřípadě	ADV	Db-------------	_	15	cc	_	_
14	sjednaná	sjednaný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	15	amod	_	_
15	doba	doba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	10	conj	_	_
16	splatnosti	splatnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	15	nmod	_	_
17	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	18	case	_	LId=při-1
18	vzniku	vznik	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	15	nmod	_	_
19	účetního	účetní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	20	amod	_	LId=účetní-1
20	případu	případ	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	18	nmod	_	_
21	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	22	cop	_	_
22	delší	dlouhý	ADJ	AAFS1----2A----	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing|Polarity=Pos	5	acl	_	LId=dlouhý-2
23	než	než	SCONJ	J,-------------	_	24	mark	_	LId=než-2
24	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	22	advcl	_	_
25	rok	rok	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	24	nmod	_	SpaceAfter=No
26	,	,	PUNCT	Z:-------------	_	32	punct	_	_
27	ostatní	ostatní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	28	amod	_	_
28	majetek	majetek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	32	nsubj:pass	_	_
29	a	a	CCONJ	J^-------------	_	30	cc	_	LId=a-1
30	závazky	závazek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	28	conj	_	_
31	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	32	aux:pass	_	_
32	považovány	považovat	VERB	VsTP---XX-AP---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	3	conj	_	_
33	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	34	case	_	LId=za-1
34	krátkodobé	krátkodobý	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	32	obj	_	SpaceAfter=No
35	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


