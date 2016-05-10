

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

5759 nodes (0%) are attached to their parents as `csubj`.

5226 instances of `csubj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.56433408577878.

The following 25 pairs of parts of speech are connected with `csubj`: [cs-pos/VERB]()-[cs-pos/VERB]() (2728; 47% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (1962; 34% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (691; 12% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (72; 1% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (61; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (59; 1% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (49; 1% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (33; 1% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (25; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (22; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (19; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (15; 0% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (5; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	Přesto	přesto	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	3	cc	_	_
2	však	však	CONJ	J^-------------	_	3	cc	_	_
3	lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	zaznamenat	zaznamenat	VERB	Vf--------A----	Aspect=Perf|Negative=Pos|VerbForm=Inf	3	csubj	_	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=v-1
6	podniku	podnik	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	3	nmod	_	_
7	citelné	citelný	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	8	amod	_	_
8	změny	změna	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	4	dobj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 csubj	color:blue
1	Změny	změna	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	3	nsubj	_	_
2	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	citelné	citelný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	třeba	třeba	ADJ	ACNS------A----	Gender=Neut|Negative=Pos|Number=Sing|Variant=Short	3	conj	_	LId=třeba-1
7	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	9	dobj	_	LId=on-1|LGloss=(oni/ono)
8	lépe	dobře	ADV	Dg-------2A----	Degree=Cmp|Negative=Pos	9	advmod	_	_
9	prezentovat	prezentovat	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	6	csubj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj	color:blue
1	Stavět	stavět	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	7	csubj	_	_
2	vlastní	vlastní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	3	amod	_	LId=vlastní-1|LGloss=(příslušný_k_něčemu)
3	výtopnu	výtopna	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	1	dobj	_	_
4	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
5	prozatím	prozatím	ADV	Db-------------	_	7	advmod	_	_
6	patrně	patrně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	7	advmod	_	LDeriv=patrný
7	risk	risk	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	0	root	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

2357 nodes (0%) are attached to their parents as `csubj`.

2249 instances of `csubj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.08188375053034.

The following 25 pairs of parts of speech are connected with `csubj`: [cs-pos/VERB]()-[cs-pos/VERB]() (914; 39% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (846; 36% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (311; 13% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (162; 7% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (37; 2% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (27; 1% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (13; 1% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (11; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (6; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (6; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (5; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (4; 0% instances), [cs-pos/SYM]()-[cs-pos/VERB]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/AUX]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj	color:blue
1	Zdá	zdát	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl	_	SpaceAfter=No|LGloss=(zvr._zájmeno/částice)
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	že	že	SCONJ	J,-------------	_	6	mark	_	_
5	dobře	dobře	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	6	advmod	_	_
6	ovládá	ovládat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	_	_
7	početný	početný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	8	amod	_	LGloss=(velké_množství)
8	rejstřík	rejstřík	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	6	dobj	_	_
9	hereckých	herecký	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	10	amod	_	_
10	prostředků	prostředek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	8	nmod	_	SpaceAfter=No|LId=prostředek-2|LGloss=(způsob,_nástroj)
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 csubj	color:blue
1	Rozpoznat	rozpoznat	VERB	Vf--------A----	Aspect=Perf|Negative=Pos|VerbForm=Inf	8	csubj	_	_
2	a	a	CONJ	J^-------------	_	1	cc	_	LId=a-1
3	správně	správně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	4	advmod	_	LGloss=(podle_něj._měřítek;_př._chlap,_míra,...)|LDeriv=správný
4	zařadit	zařadit	VERB	Vf--------A----	Aspect=Perf|Negative=Pos|VerbForm=Inf	1	conj	_	_
5	typy	typ	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	1	dobj	_	_
6	pleti	pleť	NOUN	NNFS2-----A---1	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	5	nmod	_	_
7	není	být	VERB	VB-S---3P-NA---	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	lehké	lehký	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 csubj	color:blue
1	Výrobky	výrobek	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	9	dobj	_	_
2	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	3	case	_	LId=z-1
3	směsi	směs	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	1	nmod	_	_
4	polyester	polyester	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	4	punct	_	_
6	bavlna	bavlna	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	4	conj	_	_
7	není	být	VERB	VB-S---3P-NA---	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	třeba	třeba	ADV	Db-------------	_	0	root	_	LId=třeba-2|LGloss=(například)
9	žehlit	žehlit	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	8	csubj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

57 nodes (0%) are attached to their parents as `csubj`.

55 instances of `csubj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.68421052631579.

The following 4 pairs of parts of speech are connected with `csubj`: [cs-pos/VERB]()-[cs-pos/VERB]() (38; 67% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (13; 23% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (4; 7% instances), [cs-pos/X]()-[cs-pos/VERB]() (2; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	9	nmod	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	že	že	SCONJ	J,-------------	_	6	mark	_	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	dobj	_	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	6	csubj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	auxpass:reflex	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	13	amod	_	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	9	nmod	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	4	punct	_	_
2	Rezervy	rezerva	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	5	dobj	_	_
3	není	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	možné	možný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	0	root	_	_
5	používat	používat	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	4	csubj	_	_
6	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	_	LId=k-1
7	úpravám	úprava	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Negative=Pos|Number=Plur	5	nmod	_	_
8	výše	výše	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	7	nmod	_	_
9	ocenění	ocenění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	8	nmod	_	_
10	aktiv	aktivum	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Plur	9	nmod	_	SpaceAfter=No|LId=aktivum-1
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	12	punct	_	_
2	Nelze-li	Nelze-li	NOUN	NNNXX-----A----	Gender=Neut|Negative=Pos	12	nmod	_	_
3	skutečnou	skutečný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	amod	_	_
4	výši	výše	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	6	dobj	_	_
5	aktiv	aktivum	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Plur	4	nmod	_	LId=aktivum-2
6	zjistit	zjistit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	2	csubj	_	_
7	postupem	postup	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	6	nmod	_	_
8	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	LId=podle-2
9	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	7	nmod	_	_
10	2	2	NUM	C}-------------	NumForm=Roman|NumType=Card	9	nummod	_	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	2	punct	_	_
12	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
13	hodnotu	hodnota	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	12	dobj	_	_
14	aktiv	aktiv	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	13	nmod	_	_
15	celkem	celkem	ADV	Db-------------	_	13	advmod	_	_
16	orgán	orgán	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	12	nsubj	_	SpaceAfter=No
17	,	,	PUNCT	Z:-------------	_	22	punct	_	_
18	který	který	PRON	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	22	nsubj	_	_
19	porušení	porušení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	22	dobj	_	_
20	právních	právní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	21	amod	_	_
21	povinností	povinnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	19	nmod	_	_
22	projednává	projednávat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	acl	_	SpaceAfter=No
23	,	,	PUNCT	Z:-------------	_	22	punct	_	_
24	kvalifikovaným	kvalifikovaný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	25	amod	_	_
25	odhadem	odhad	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	12	nmod	_	SpaceAfter=No
26	.	.	PUNCT	Z:-------------	_	12	punct	_	_

~~~


