

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:pass]().

1281 nodes (3%) are attached to their parents as `nsubj`.

955 instances of `nsubj` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.27712724434036.

The following 19 pairs of parts of speech are connected with `nsubj`: [-pos/VERB]()-[-pos/NOUN]() (760; 59% instances), [-pos/VERB]()-[-pos/PRON]() (196; 15% instances), [-pos/ADJ]()-[-pos/NOUN]() (143; 11% instances), [-pos/NOUN]()-[-pos/NOUN]() (76; 6% instances), [-pos/NOUN]()-[-pos/PRON]() (58; 5% instances), [-pos/X]()-[-pos/NOUN]() (22; 2% instances), [-pos/ADJ]()-[-pos/PRON]() (11; 1% instances), [-pos/PRON]()-[-pos/NOUN]() (4; 0% instances), [-pos/ADV]()-[-pos/NOUN]() (1; 0% instances), [-pos/ADV]()-[-pos/PRON]() (1; 0% instances), [-pos/DET]()-[-pos/NOUN]() (1; 0% instances), [-pos/NOUN]()-[-pos/ADJ]() (1; 0% instances), [-pos/NOUN]()-[-pos/NUM]() (1; 0% instances), [-pos/NUM]()-[-pos/NOUN]() (1; 0% instances), [-pos/VERB]()-[-pos/ADJ]() (1; 0% instances), [-pos/VERB]()-[-pos/ADV]() (1; 0% instances), [-pos/VERB]()-[-pos/NUM]() (1; 0% instances), [-pos/VERB]()-[-pos/X]() (1; 0% instances), [-pos/X]()-[-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 nsubj	color:blue
1	Vykazují	vykazovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	_
3	zde	zde	ADV	Db-------------	_	1	advmod	_	_
4	i	i	CCONJ	J^-------------	_	7	advmod:emph	_	LId=i-1
5	nakoupené	nakoupený	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
6	opční	opční	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
7	listy	list	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	1	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nsubj	color:blue
1	Zobrazení	zobrazení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	3	nsubj	_	_
2	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	poctivé	poctivý	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	9	punct	_	_
5	když	když	SCONJ	J,-------------	_	9	mark	_	_
6	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux:pass	_	_
7	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	LId=při-1
8	něm	německý	ADJ	AAXXX----1A---8	Abbr=Yes|Degree=Pos|Polarity=Pos	9	advmod	_	_
9	použity	použít	VERB	VsTP---XX-AP---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	3	advcl	_	_
10	účetní	účetní	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	9	nsubj:pass	_	LId=účetní-2
11	metody	metoda	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	10	nmod	_	_
12	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	15	punct	_	_
14	který	který	PRON	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	15	nsubj	_	_
15	vede	vést	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl	_	LId=vést-1
16	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	17	case	_	LId=k-1
17	dosažení	dosažení	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	15	obj	_	_
18	věrnosti	věrnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	17	nmod	_	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Informace	informace	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	_	_
2	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	srozumitelná	srozumitelný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	6	punct	_	_
5	jestliže	jestliže	SCONJ	J,-------------	_	6	mark	_	_
6	splňuje	splňovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	_
7	požadavky	požadavek	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	6	obj	_	_
8	stanovené	stanovený	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
9	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=v-1
10	§	§	X	X@-------------	_	8	advmod	_	_
11	8	8	X	X@-------------	_	10	flat	_	_
12	odst.	odst.	X	X@-------------	_	10	flat	_	_
13	5	5	X	X@-------------	_	10	flat	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


