

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

218 nodes (1%) are attached to their parents as `advcl`.

157 instances of `advcl` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.5596330275229.

The following 14 pairs of parts of speech are connected with `advcl`: [-pos/VERB]()-[-pos/VERB]() (103; 47% instances), [-pos/ADJ]()-[-pos/NOUN]() (27; 12% instances), [-pos/ADJ]()-[-pos/VERB]() (24; 11% instances), [-pos/VERB]()-[-pos/NOUN]() (14; 6% instances), [-pos/ADV]()-[-pos/NUM]() (13; 6% instances), [-pos/VERB]()-[-pos/ADJ]() (13; 6% instances), [-pos/ADJ]()-[-pos/ADJ]() (6; 3% instances), [-pos/NOUN]()-[-pos/VERB]() (6; 3% instances), [-pos/X]()-[-pos/VERB]() (4; 2% instances), [-pos/ADJ]()-[-pos/NUM]() (3; 1% instances), [-pos/ADV]()-[-pos/ADJ]() (2; 1% instances), [-pos/ADV]()-[-pos/VERB]() (1; 0% instances), [-pos/NOUN]()-[-pos/NOUN]() (1; 0% instances), [-pos/VERB]()-[-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
1	Informace	informace	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj:pass	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	_	_
3	považuje	považovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=za-1
5	spolehlivou	spolehlivý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	8	punct	_	_
7	jestliže	jestliže	SCONJ	J,-------------	_	8	mark	_	_
8	splňuje	splňovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	_
9	požadavek	požadavek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	8	obj	_	_
10	§	§	X	X@-------------	_	9	nmod	_	_
11	7	7	X	X@-------------	_	10	flat	_	_
12	odst.	odst.	X	X@-------------	_	10	flat	_	_
13	1	1	X	X@-------------	_	10	flat	_	_
14	a	a	CCONJ	J^-------------	_	16	cc	_	LId=a-1
15	je-li	je-li	AUX	X@-------------	_	16	cop	_	_
16	úplná	úplný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	conj	_	_
17	a	a	CCONJ	J^-------------	_	18	cc	_	LId=a-1
18	včasná	včasný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	16	conj	_	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 advcl	color:blue
1	Účetní	účetní	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	_	LId=účetní-1
2	období	období	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	8	nsubj	_	_
3	bezprostředně	bezprostředně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	4	advmod	_	_
4	předcházející	předcházející	ADJ	AGFS3-----A----	Aspect=Imp|Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	_	_
5	změně	změna	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	4	obj	_	_
6	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	7	amod	_	LId=účetní-1
7	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	5	nmod	_	_
8	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	10	cop	_	_
10	kratší	krátký	ADJ	AAIS1----2A----	Animacy=Inan|Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing|Polarity=Pos	8	xcomp	_	_
11	nebo	nebo	CCONJ	J^-------------	_	13	cc	_	_
12	i	i	CCONJ	J^-------------	_	13	advmod:emph	_	LId=i-1
13	delší	dlouhý	ADJ	AAIS1----2A----	Animacy=Inan|Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing|Polarity=Pos	10	conj	_	LId=dlouhý-2
14	než	než	SCONJ	J,-------------	_	15	mark	_	LId=než-2
15	uvedených	uvedený	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	13	advcl	_	_
16	dvanáct	dvanáct	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	17	nummod:gov	_	_
17	měsíců	měsíc	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	15	advcl	_	SpaceAfter=No
18	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl	color:blue
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


