

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

145183 nodes (10%) are attached to their parents as `case`.

145123 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53698435767273.

The following 36 pairs of parts of speech are connected with `case`: [cs-pos/NOUN]()-[cs-pos/ADP]() (112720; 78% instances), [cs-pos/PROPN]()-[cs-pos/ADP]() (16237; 11% instances), [cs-pos/PRON]()-[cs-pos/ADP]() (10547; 7% instances), [cs-pos/NUM]()-[cs-pos/ADP]() (2089; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADP]() (1907; 1% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (584; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (446; 0% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (157; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADV]() (124; 0% instances), [cs-pos/DET]()-[cs-pos/ADP]() (91; 0% instances), [cs-pos/SYM]()-[cs-pos/ADP]() (85; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (35; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (31; 0% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (23; 0% instances), [cs-pos/PART]()-[cs-pos/ADP]() (21; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (14; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (10; 0% instances), [cs-pos/NUM]()-[cs-pos/SYM]() (10; 0% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (8; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (7; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (6; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (5; 0% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (4; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (4; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (2; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/INTJ]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/INTJ]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	|	|	PUNCT	Z:-------------	_	2	punct	_	_
2	Rady	rada	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	0	root	_	LId=rada-1|LGloss=(př._dát_někomu_dobrou_radu)
3	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=na-1
4	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	2	nmod	_	_
5	|	|	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Světové	světový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	2	amod	_	_
2	firmy	firma	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	0	root	_	_
3	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=na-1
4	Mallorce	Mallorka	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Negative=Pos|Number=Sing	2	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
2	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=po-1
3	mně	já	PRON	PP-S6--1-------	Case=Loc|Number=Sing|Person=1|PronType=Prs	7	iobj	_	_
4	takové	takový	DET	PDIP4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	_
5	údaje	údaj	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	7	dobj	_	_
6	pojišťovna	pojišťovna	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	1	nsubj	_	_
7	vyžadovat	vyžadovat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
8	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

48232 nodes (10%) are attached to their parents as `case`.

48203 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.56226156908277.

The following 44 pairs of parts of speech are connected with `case`: [cs-pos/NOUN]()-[cs-pos/ADP]() (39884; 83% instances), [cs-pos/PRON]()-[cs-pos/ADP]() (3622; 8% instances), [cs-pos/PROPN]()-[cs-pos/ADP]() (2250; 5% instances), [cs-pos/SYM]()-[cs-pos/ADP]() (606; 1% instances), [cs-pos/NUM]()-[cs-pos/ADP]() (583; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADP]() (556; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (240; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (171; 0% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (115; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (58; 0% instances), [cs-pos/DET]()-[cs-pos/ADP]() (20; 0% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (18; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (14; 0% instances), [cs-pos/PROPN]()-[cs-pos/SYM]() (9; 0% instances), [cs-pos/SYM]()-[cs-pos/SYM]() (9; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADV]() (8; 0% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (7; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (7; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (7; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (5; 0% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (5; 0% instances), [cs-pos/NUM]()-[cs-pos/PART]() (4; 0% instances), [cs-pos/PRON]()-[cs-pos/SYM]() (4; 0% instances), [cs-pos/PROPN]()-[cs-pos/PART]() (4; 0% instances), [cs-pos/SYM]()-[cs-pos/PART]() (4; 0% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/CONJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PUNCT]()-[cs-pos/CONJ]() (1; 0% instances), [cs-pos/PUNCT]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Významnou	významný	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	amod	_	_
2	měrou	míra	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	5	nmod	_	LGloss=(měřítko,poměr)
3	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	4	case	_	LId=k-1
4	tomu	ten	PRON	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	5	dobj	_	_
5	přispělo	přispět	VERB	VpNS---XR-AA---	Gender=Neut|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	plnění	plnění	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	5	nsubj	_	LDeriv=plnit
7	direktiv	direktiva	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	6	nmod	_	_
8	#	&cother;	NUM	C=-------------	NumForm=Digit|NumType=Card	9	nummod	_	_
9	sjezdu	sjezd	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	7	nmod	_	_
10	KSČ	KSČ	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Negative=Pos	9	nmod	_	SpaceAfter=No|LId=KSČ-1|LGloss=(Komunistická_strana_Československa)
11	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	Praze	Praha	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	4	punct	_	_
4	Zbraslavi	Zbraslav	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Negative=Pos|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	_	_
6	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	2	dep	_	LGloss=(jednotka_času)
7	#	&cdate;	NUM	C=-------------	NumForm=Digit|NumType=Card	8	nummod	_	_
8	dubna	duben	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	6	nmod	_	_
9	#	&cyear;	NUM	C=-------------	NumForm=Digit|NumType=Card	8	nummod	_	_
10	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

3888 nodes (11%) are attached to their parents as `case`.

3853 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.72247942386831.

The following 12 pairs of parts of speech are connected with `case`: [cs-pos/NOUN]()-[cs-pos/ADP]() (3395; 87% instances), [cs-pos/X]()-[cs-pos/ADP]() (235; 6% instances), [cs-pos/PRON]()-[cs-pos/ADP]() (200; 5% instances), [cs-pos/ADJ]()-[cs-pos/ADP]() (21; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (10; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (9; 0% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (8; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (5; 0% instances), [cs-pos/NUM]()-[cs-pos/ADP]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Použití	použití	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	0	root	_	_
2	mezinárodních	mezinárodní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	4	amod	_	_
3	účetních	účetní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	4	amod	_	LId=účetní-1
4	standardů	standard	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	1	nmod	_	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=v-1
6	konsolidaci	konsolidace	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	1	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
2	tomto	tento	DET	PDZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	det	_	_
3	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	6	nmod	_	_
4	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	5	amod	_	LId=účetní-1
5	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	6	nsubj	_	_
6	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	LId=podle-2
8	§_54	§_54	X	X@-------------	_	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
1	Výrobou	výroba	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	3	dobj	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	auxpass:reflex	_	_
3	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	i	i	CONJ	J^-------------	_	6	advmod:emph	_	LId=i-1
5	jiná	jiný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	6	amod	_	_
6	činnost	činnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	3	nsubjpass	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	10	punct	_	_
8	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	LId=při-1
9	které	který	PRON	P4FS6----------	Case=Loc|Gender=Fem|Number=Sing|PronType=Int,Rel	10	advmod	_	_
10	nevznikají	vznikat	VERB	VB-P---3P-NA---	Mood=Ind|Negative=Neg|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl	_	_
11	hmotné	hmotný	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	12	amod	_	_
12	produkty	produkt	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	10	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


