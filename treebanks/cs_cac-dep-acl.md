---
layout: base
title:  'Statistics of acl in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `acl`

This relation is universal.

6890 nodes (1%) are attached to their parents as `acl`.

6856 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.63584905660377.

The following 38 pairs of parts of speech are connected with `acl`: [-pos/NOUN]()-[-pos/VERB]() (4871; 71% instances), [-pos/DET]()-[-pos/VERB]() (764; 11% instances), [-pos/NOUN]()-[-pos/ADJ]() (475; 7% instances), [-pos/NOUN]()-[-pos/NOUN]() (213; 3% instances), [-pos/PROPN]()-[-pos/VERB]() (141; 2% instances), [-pos/DET]()-[-pos/ADJ]() (82; 1% instances), [-pos/PRON]()-[-pos/VERB]() (67; 1% instances), [-pos/ADJ]()-[-pos/VERB]() (52; 1% instances), [-pos/NOUN]()-[-pos/ADV]() (35; 1% instances), [-pos/DET]()-[-pos/NOUN]() (34; 0% instances), [-pos/NOUN]()-[-pos/DET]() (23; 0% instances), [-pos/SYM]()-[-pos/VERB]() (19; 0% instances), [-pos/VERB]()-[-pos/VERB]() (16; 0% instances), [-pos/NOUN]()-[-pos/PRON]() (14; 0% instances), [-pos/NOUN]()-[-pos/SYM]() (8; 0% instances), [-pos/NOUN]()-[-pos/NUM]() (7; 0% instances), [-pos/PRON]()-[-pos/ADJ]() (7; 0% instances), [-pos/NUM]()-[-pos/VERB]() (6; 0% instances), [-pos/SCONJ]()-[-pos/VERB]() (6; 0% instances), [-pos/VERB]()-[-pos/ADJ]() (6; 0% instances), [-pos/DET]()-[-pos/ADV]() (5; 0% instances), [-pos/PROPN]()-[-pos/ADJ]() (5; 0% instances), [-pos/ADJ]()-[-pos/ADJ]() (4; 0% instances), [-pos/ADV]()-[-pos/VERB]() (4; 0% instances), [-pos/NOUN]()-[-pos/PART]() (4; 0% instances), [-pos/PROPN]()-[-pos/NOUN]() (4; 0% instances), [-pos/DET]()-[-pos/DET]() (3; 0% instances), [-pos/SYM]()-[-pos/ADJ]() (3; 0% instances), [-pos/DET]()-[-pos/PRON]() (2; 0% instances), [-pos/SYM]()-[-pos/NOUN]() (2; 0% instances), [-pos/ADJ]()-[-pos/ADV]() (1; 0% instances), [-pos/ADJ]()-[-pos/DET]() (1; 0% instances), [-pos/DET]()-[-pos/NUM]() (1; 0% instances), [-pos/DET]()-[-pos/PART]() (1; 0% instances), [-pos/NUM]()-[-pos/ADJ]() (1; 0% instances), [-pos/NUM]()-[-pos/NOUN]() (1; 0% instances), [-pos/PRON]()-[-pos/NOUN]() (1; 0% instances), [-pos/PUNCT]()-[-pos/VERB]() (1; 0% instances).


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


