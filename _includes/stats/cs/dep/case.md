

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

128707 nodes (10%) are attached to their parents as `case`.

128656 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5382224743021.

The following 38 pairs of parts of speech are connected with `case`: [cs-pos/NOUN]()-[cs-pos/ADP]() (100035; 78% instances), [cs-pos/PROPN]()-[cs-pos/ADP]() (14368; 11% instances), [cs-pos/PRON]()-[cs-pos/ADP]() (5462; 4% instances), [cs-pos/DET]()-[cs-pos/ADP]() (3929; 3% instances), [cs-pos/NUM]()-[cs-pos/ADP]() (1841; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADP]() (1668; 1% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (509; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (398; 0% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (140; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADV]() (119; 0% instances), [cs-pos/SYM]()-[cs-pos/ADP]() (75; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (32; 0% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (19; 0% instances), [cs-pos/PART]()-[cs-pos/ADP]() (14; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (14; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (11; 0% instances), [cs-pos/DET]()-[cs-pos/ADV]() (10; 0% instances), [cs-pos/NUM]()-[cs-pos/SYM]() (9; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (8; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (6; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (6; 0% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (4; 0% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (4; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (3; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (3; 0% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (2; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/INTJ]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/INTJ]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	|	|	PUNCT	Z:-------------	_	2	punct	_	_
2	Rady	rada	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	LId=rada-1|LGloss=(př._dát_někomu_dobrou_radu)
3	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=na-1
4	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	2	nmod	_	_
5	|	|	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Světové	světový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
2	firmy	firma	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	_
3	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=na-1
4	Mallorce	Mallorka	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	2	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
2	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=po-1
3	mně	já	PRON	PP-S6--1-------	Case=Loc|Number=Sing|Person=1|PronType=Prs	7	iobj	_	_
4	takové	takový	DET	PDIP4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	_
5	údaje	údaj	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	7	obj	_	_
6	pojišťovna	pojišťovna	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	nsubj	_	_
7	vyžadovat	vyžadovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
8	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

47201 nodes (10%) are attached to their parents as `case`.

47172 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.56293298870787.

The following 47 pairs of parts of speech are connected with `case`: [cs-pos/NOUN]()-[cs-pos/ADP]() (38986; 83% instances), [cs-pos/PROPN]()-[cs-pos/ADP]() (2227; 5% instances), [cs-pos/PRON]()-[cs-pos/ADP]() (2161; 5% instances), [cs-pos/DET]()-[cs-pos/ADP]() (1418; 3% instances), [cs-pos/SYM]()-[cs-pos/ADP]() (605; 1% instances), [cs-pos/NUM]()-[cs-pos/ADP]() (565; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADP]() (539; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (235; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (164; 0% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (114; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (58; 0% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (18; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (10; 0% instances), [cs-pos/PROPN]()-[cs-pos/SYM]() (9; 0% instances), [cs-pos/SYM]()-[cs-pos/SYM]() (9; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADV]() (8; 0% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (7; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (7; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (6; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (5; 0% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (5; 0% instances), [cs-pos/DET]()-[cs-pos/ADV]() (4; 0% instances), [cs-pos/NUM]()-[cs-pos/PART]() (4; 0% instances), [cs-pos/PRON]()-[cs-pos/SYM]() (4; 0% instances), [cs-pos/PROPN]()-[cs-pos/PART]() (4; 0% instances), [cs-pos/SYM]()-[cs-pos/PART]() (4; 0% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/CCONJ]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/CCONJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/CCONJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PUNCT]()-[cs-pos/CCONJ]() (1; 0% instances), [cs-pos/PUNCT]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	Praze	Praha	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	4	punct	_	_
4	Zbraslavi	Zbraslav	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	_	_
6	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	2	dep	_	LGloss=(jednotka_času)
7	#	&cdate;	NUM	C=-------------	NumForm=Digit|NumType=Card	8	nummod	_	_
8	dubna	duben	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	6	nmod	_	_
9	#	&cyear;	NUM	C=-------------	NumForm=Digit|NumType=Card	8	nummod	_	_
10	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
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




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

2781 nodes (10%) are attached to their parents as `case`.

2756 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7720244516361.

The following 10 pairs of parts of speech are connected with `case`: [cs-pos/NOUN]()-[cs-pos/ADP]() (2479; 89% instances), [cs-pos/PRON]()-[cs-pos/ADP]() (132; 5% instances), [cs-pos/X]()-[cs-pos/ADP]() (131; 5% instances), [cs-pos/ADJ]()-[cs-pos/ADP]() (16; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (9; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (6; 0% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (4; 0% instances), [cs-pos/NUM]()-[cs-pos/ADP]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 case	color:blue
1	Pohledávky	pohledávka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	_
2	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=za-1
3	upsaný	upsaný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	_	_
4	základní	základní	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	_	_
5	kapitál	kapitál	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
1	Výrobou	výroba	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	_	_
3	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	i	i	CCONJ	J^-------------	_	6	advmod:emph	_	LId=i-1
5	jiná	jiný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	_	_
6	činnost	činnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj:pass	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	10	punct	_	_
8	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	LId=při-1
9	které	který	PRON	P4FS6----------	Case=Loc|Gender=Fem|Number=Sing|PronType=Int,Rel	10	advmod	_	_
10	nevznikají	vznikat	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl	_	_
11	hmotné	hmotný	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	12	amod	_	_
12	produkty	produkt	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	10	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
2	tomto	tento	DET	PDZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	det	_	_
3	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	obl	_	_
4	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	5	amod	_	LId=účetní-1
5	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	6	nsubj	_	_
6	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	LId=podle-2
8	§	§	X	X@-------------	_	6	advmod	_	_
9	54	54	X	X@-------------	_	8	flat	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


