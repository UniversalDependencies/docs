

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.
There are 1 language-specific subtypes of `advmod`: [advmod:emph]().

753 nodes (2%) are attached to their parents as `advmod`.

413 instances of `advmod` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.36786188579017.

The following 25 pairs of parts of speech are connected with `advmod`: [-pos/VERB]()-[-pos/ADV]() (309; 41% instances), [-pos/VERB]()-[-pos/PRON]() (112; 15% instances), [-pos/ADJ]()-[-pos/ADV]() (85; 11% instances), [-pos/VERB]()-[-pos/X]() (85; 11% instances), [-pos/ADJ]()-[-pos/X]() (58; 8% instances), [-pos/NOUN]()-[-pos/ADV]() (45; 6% instances), [-pos/VERB]()-[-pos/ADJ]() (12; 2% instances), [-pos/ADJ]()-[-pos/PRON]() (9; 1% instances), [-pos/NOUN]()-[-pos/X]() (4; 1% instances), [-pos/VERB]()-[-pos/VERB]() (4; 1% instances), [-pos/X]()-[-pos/ADV]() (4; 1% instances), [-pos/ADJ]()-[-pos/NUM]() (3; 0% instances), [-pos/NUM]()-[-pos/ADV]() (3; 0% instances), [-pos/VERB]()-[-pos/NOUN]() (3; 0% instances), [-pos/VERB]()-[-pos/SCONJ]() (3; 0% instances), [-pos/ADJ]()-[-pos/SCONJ]() (2; 0% instances), [-pos/ADV]()-[-pos/ADV]() (2; 0% instances), [-pos/NOUN]()-[-pos/VERB]() (2; 0% instances), [-pos/VERB]()-[-pos/NUM]() (2; 0% instances), [-pos/ADJ]()-[-pos/ADJ]() (1; 0% instances), [-pos/ADJ]()-[-pos/VERB]() (1; 0% instances), [-pos/ADV]()-[-pos/PRON]() (1; 0% instances), [-pos/ADV]()-[-pos/VERB]() (1; 0% instances), [-pos/PRON]()-[-pos/ADV]() (1; 0% instances), [-pos/X]()-[-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	Dále	dále	ADV	Db------------1	_	2	advmod	_	LId=dále-3
2	obsahuje	obsahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	povolenky	povolenka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	2	obj	_	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=na-1
5	emise	emise	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	nmod	_	_
6	a	a	CCONJ	J^-------------	_	8	cc	_	LId=a-1
7	preferenční	preferenční	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	8	amod	_	_
8	limity	limit	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	5	conj	_	SpaceAfter=No|LId=limit-1
9	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advmod	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 advmod	color:blue
1	Podpisový	podpisový	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	_	_
2	záznam	záznam	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	_	_
3	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	LId=podle-2
4	písmene	písmeno	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	2	nmod	_	_
5	f)	f)	X	X@-------------	_	4	nmod	_	_
6	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	8	cop	_	_
8	společný	společný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	xcomp	_	_
9	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	LId=pro-1
10	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	8	advmod	_	_
11	účetních	účetní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	12	amod	_	LId=účetní-1
12	dokladů	doklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


