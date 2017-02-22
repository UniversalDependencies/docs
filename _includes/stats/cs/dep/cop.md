

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

18020 nodes (1%) are attached to their parents as `cop`.

15062 instances of `cop` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.3673140954495.

The following 9 pairs of parts of speech are connected with `cop`: [cs-pos/ADJ]()-[cs-pos/AUX]() (10173; 56% instances), [cs-pos/NOUN]()-[cs-pos/AUX]() (6528; 36% instances), [cs-pos/DET]()-[cs-pos/AUX]() (466; 3% instances), [cs-pos/NUM]()-[cs-pos/AUX]() (419; 2% instances), [cs-pos/PRON]()-[cs-pos/AUX]() (183; 1% instances), [cs-pos/ADV]()-[cs-pos/AUX]() (176; 1% instances), [cs-pos/PROPN]()-[cs-pos/AUX]() (61; 0% instances), [cs-pos/PART]()-[cs-pos/AUX]() (10; 0% instances), [cs-pos/VERB]()-[cs-pos/AUX]() (4; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Změny	změna	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	_	_
2	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	citelné	citelný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	6	punct	_	_
5	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	třeba	třeba	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	3	conj	_	LId=třeba-1
7	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	9	obj	_	LId=on-1|LGloss=(oni/ono)
8	lépe	dobře	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	9	advmod	_	_
9	prezentovat	prezentovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	BESO	Beso	PROPN	NNNS1-----A----	Case=Nom|Gender=Neut|NameType=Com|Number=Sing|Polarity=Pos	6	nsubj	_	_
2	a	a	CCONJ	J^-------------	_	3	cc	_	LId=a-1
3	SES	SES	PROPN	NNXXX-----A---8	Abbr=Yes|NameType=Com|Polarity=Pos	1	conj	_	_
4	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	dvě	dva	NUM	ClHP1----------	Case=Nom|Gender=Fem,Neut|Number=Plur|NumForm=Word|NumType=Card|NumValue=1,2,3	6	nummod	_	LNumValue=2
6	organizace	organizace	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	_
7	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	9	case	_	LId=s-1
8	stejným	stejný	ADJ	AANS7----1A----	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	9	amod	_	_
9	posláním	poslání	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	6	nmod	_	SpaceAfter=No|LDeriv=poslat
10	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cop	color:blue
1	Proto	proto	CCONJ	J^-------------	_	3	cc	_	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
2	nás	já	PRON	PP-P4--1-------	Case=Acc|Number=Plur|Person=1|PronType=Prs	3	obj	_	_
3	zajímalo	zajímat	VERB	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	5	punct	_	_
5	jaký	jaký	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	3	csubj	_	_
6	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
7	její	jeho	DET	PSZS1FS3-------	Case=Nom|Gender=Masc,Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	_	LGloss=(přivlast.)
8	pohled	pohled	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj	_	_
9	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	LId=na-1
10	působení	působení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	8	nmod	_	LDeriv=působit
11	Američanů	Američan	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Nat|Number=Plur|Polarity=Pos	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

7973 nodes (2%) are attached to their parents as `cop`.

6883 instances of `cop` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18763326226013.

The following 25 pairs of parts of speech are connected with `cop`: [cs-pos/ADJ]()-[cs-pos/AUX]() (4448; 56% instances), [cs-pos/NOUN]()-[cs-pos/AUX]() (2483; 31% instances), [cs-pos/ADV]()-[cs-pos/AUX]() (370; 5% instances), [cs-pos/DET]()-[cs-pos/AUX]() (354; 4% instances), [cs-pos/NUM]()-[cs-pos/AUX]() (156; 2% instances), [cs-pos/SYM]()-[cs-pos/AUX]() (47; 1% instances), [cs-pos/PRON]()-[cs-pos/AUX]() (43; 1% instances), [cs-pos/ADJ]()-[cs-pos/SYM]() (15; 0% instances), [cs-pos/PART]()-[cs-pos/AUX]() (11; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (8; 0% instances), [cs-pos/PROPN]()-[cs-pos/AUX]() (8; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (7; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (5; 0% instances), [cs-pos/VERB]()-[cs-pos/AUX]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/CCONJ]() (1; 0% instances), [cs-pos/INTJ]()-[cs-pos/AUX]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/AUX]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cop	color:blue
1	Stav	stav	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	9	nsubj	_	_
2	a	a	CCONJ	J^-------------	_	3	cc	_	LId=a-1
3	využívání	využívání	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	1	conj	_	LDeriv=využít
4	půdního	půdní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	_	_
5	fondu	fond	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	_	_
6	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
7	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	LId=u-1
8	nás	já	PRON	PP-P2--1-------	Case=Gen|Number=Plur|Person=1|PronType=Prs	9	obl	_	_
9	neuspokojivé	uspokojivý	ADJ	AAIP1----1N----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Neg	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 cop	color:blue
1	Prvním	první	ADJ	CrIS7----------	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|NumType=Ord	2	amod	_	_
2	požadavkem	požadavek	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
3	tělesné	tělesný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	_	_
4	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
5	duševní	duševní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	conj	_	_
6	rehabilitace	rehabilitace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	2	nmod	_	_
7	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
8	tedy	tedy	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	2	advmod	_	_
9	ticho	ticho	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	2	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	K	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	2	case	_	LId=k-1
2	tomu	ten	DET	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	5	obl	_	_
3	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	však	však	CCONJ	J^-------------	_	5	cc	_	_
5	třeba	třeba	ADV	Db-------------	_	0	root	_	LId=třeba-2|LGloss=(například)
6	souhlasu	souhlas	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj	_	_
7	ZV	ZV	NOUN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|Polarity=Pos	6	nmod	_	_
8	ROH	ROH	PROPN	NNNXX-----A---8	Abbr=Yes|Gender=Neut|NameType=Com|Polarity=Pos	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

324 nodes (1%) are attached to their parents as `cop`.

294 instances of `cop` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.56481481481481.

The following 7 pairs of parts of speech are connected with `cop`: [cs-pos/ADJ]()-[cs-pos/AUX]() (131; 40% instances), [cs-pos/NOUN]()-[cs-pos/AUX]() (117; 36% instances), [cs-pos/VERB]()-[cs-pos/AUX]() (68; 21% instances), [cs-pos/PRON]()-[cs-pos/AUX]() (4; 1% instances), [cs-pos/ADV]()-[cs-pos/AUX]() (2; 1% instances), [cs-pos/DET]()-[cs-pos/AUX]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	4	punct	_	_
2	Rezervy	rezerva	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	_	_
3	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	možné	možný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
5	používat	používat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	csubj	_	_
6	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	_	LId=k-1
7	úpravám	úprava	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur|Polarity=Pos	5	obl	_	_
8	výše	výše	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	_
9	ocenění	ocenění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	8	nmod	_	_
10	aktiv	aktivum	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	9	nmod	_	SpaceAfter=No|LId=aktivum-1
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 cop	color:blue
1	Účetní	účetní	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	_	LId=účetní-1
2	období	období	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	5	nsubj	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	_	_
4	buď	buď	CCONJ	J^-------------	_	5	cc	_	_
5	shoduje	shodovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	8	case	_	LId=s-1
7	kalendářním	kalendářní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	_	_
8	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obj	_	_
9	nebo	nebo	CCONJ	J^-------------	_	12	cc	_	_
10	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
11	hospodářským	hospodářský	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	12	amod	_	_
12	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	conj	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	Směrná	směrný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	_
2	účtová	účtový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	_
3	osnova	osnova	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	nsubj	_	_
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	uvedena	uvést	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	LId=v-1
7	příloze	příloha	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	5	obl	_	_
8	č.	č.	X	X@-------------	_	7	nmod	_	_
9	4	4	X	X@-------------	_	8	flat	_	_
10	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	12	case	_	LId=k-1
11	této	tento	DET	PDFS3----------	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	12	det	_	_
12	vyhlášce	vyhláška	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


