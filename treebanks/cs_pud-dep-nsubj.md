---
layout: base
title:  'Statistics of nsubj in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:pass]().

1245 nodes (7%) are attached to their parents as `nsubj`.

987 instances of `nsubj` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.14618473895582.

The following 35 pairs of parts of speech are connected with `nsubj`: [-pos/VERB]()-[-pos/NOUN]() (543; 44% instances), [-pos/VERB]()-[-pos/PROPN]() (223; 18% instances), [-pos/VERB]()-[-pos/DET]() (148; 12% instances), [-pos/ADJ]()-[-pos/NOUN]() (69; 6% instances), [-pos/NOUN]()-[-pos/NOUN]() (64; 5% instances), [-pos/VERB]()-[-pos/PRON]() (42; 3% instances), [-pos/ADJ]()-[-pos/DET]() (28; 2% instances), [-pos/NOUN]()-[-pos/DET]() (28; 2% instances), [-pos/NOUN]()-[-pos/PROPN]() (20; 2% instances), [-pos/ADJ]()-[-pos/PROPN]() (11; 1% instances), [-pos/VERB]()-[-pos/NUM]() (11; 1% instances), [-pos/VERB]()-[-pos/ADJ]() (10; 1% instances), [-pos/NOUN]()-[-pos/PRON]() (6; 0% instances), [-pos/ADJ]()-[-pos/PRON]() (4; 0% instances), [-pos/ADV]()-[-pos/DET]() (3; 0% instances), [-pos/ADV]()-[-pos/NOUN]() (3; 0% instances), [-pos/DET]()-[-pos/DET]() (3; 0% instances), [-pos/DET]()-[-pos/NOUN]() (3; 0% instances), [-pos/NUM]()-[-pos/NOUN]() (3; 0% instances), [-pos/NUM]()-[-pos/PROPN]() (3; 0% instances), [-pos/PRON]()-[-pos/NOUN]() (3; 0% instances), [-pos/VERB]()-[-pos/SYM]() (3; 0% instances), [-pos/VERB]()-[-pos/ADP]() (2; 0% instances), [-pos/ADJ]()-[-pos/ADJ]() (1; 0% instances), [-pos/ADV]()-[-pos/SYM]() (1; 0% instances), [-pos/AUX]()-[-pos/DET]() (1; 0% instances), [-pos/AUX]()-[-pos/NOUN]() (1; 0% instances), [-pos/NOUN]()-[-pos/ADJ]() (1; 0% instances), [-pos/NOUN]()-[-pos/ADP]() (1; 0% instances), [-pos/NUM]()-[-pos/DET]() (1; 0% instances), [-pos/PRON]()-[-pos/DET]() (1; 0% instances), [-pos/PRON]()-[-pos/PRON]() (1; 0% instances), [-pos/PROPN]()-[-pos/DET]() (1; 0% instances), [-pos/PROPN]()-[-pos/NOUN]() (1; 0% instances), [-pos/PROPN]()-[-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Nové	nový	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	_	_
2	výdaje	výdaj	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	nsubj	_	_
3	pocházejí	pocházet	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	_	LId=z-1
5	bohatých	bohatý	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
6	bankovních	bankovní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
7	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	3	obl	_	_
8	Clintonové	Clintonová	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Sur|Number=Sing|Polarity=Pos	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 nsubj	color:blue
1	„	"	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
2	Naprosto	naprosto	ADV	Db-------------	_	3	advmod	_	_
3	zanedbával	zanedbávat	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	8	ccomp	_	LDeriv=zanedbat
4	svoje	svůj	DET	P8NS4----------	Case=Acc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	LId=svůj-1|LGloss=(přivlast.)
5	zdraví	zdraví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
7	“	"	PUNCT	Z:-------------	_	3	punct	_	_
8	uvedla	uvést	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
9	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	10	det	_	LGloss=(přivlast.)
10	žena	žena	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	11	nmod	_	_
11	Alice	Alice	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Giv|Number=Sing|Polarity=Pos	8	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nsubj	color:blue
1	„	"	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
2	Stejně	stejně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	LDeriv=stejný
3	jdu	jít	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	_	LId=do-1
5	vězení	vězení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	3	obl	_	SpaceAfter=No|LGloss=(místo_výkonu_trestu)
6	,	,	PUNCT	Z:-------------	_	11	punct	_	_
7	snad	snad	PART	TT-------------	_	11	advmod	_	_
8	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	11	nsubj	_	_
9	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	_
10	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	11	obj	_	_
11	stálo	stát	VERB	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	_	SpaceAfter=No|LId=stát-4|LGloss=(něco_stojí_peníze)
12	.	.	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
13	“	"	PUNCT	Z:-------------	_	3	punct	_	_

~~~


