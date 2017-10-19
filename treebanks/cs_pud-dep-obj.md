---
layout: base
title:  'Statistics of obj in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `obj`

This relation is universal.

918 nodes (5%) are attached to their parents as `obj`.

724 instances of `obj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.24400871459695.

The following 12 pairs of parts of speech are connected with `obj`: [-pos/VERB]()-[-pos/NOUN]() (699; 76% instances), [-pos/VERB]()-[-pos/PRON]() (94; 10% instances), [-pos/VERB]()-[-pos/DET]() (52; 6% instances), [-pos/VERB]()-[-pos/PROPN]() (47; 5% instances), [-pos/ADJ]()-[-pos/NOUN]() (11; 1% instances), [-pos/VERB]()-[-pos/ADJ]() (7; 1% instances), [-pos/VERB]()-[-pos/NUM]() (2; 0% instances), [-pos/VERB]()-[-pos/SYM]() (2; 0% instances), [-pos/ADJ]()-[-pos/DET]() (1; 0% instances), [-pos/ADJ]()-[-pos/PROPN]() (1; 0% instances), [-pos/NUM]()-[-pos/NOUN]() (1; 0% instances), [-pos/VERB]()-[-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	Lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	tu	tu	ADV	Db-------------	PronType=Dem	1	advmod	_	_
3	najít	najít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	csubj	_	_
4	paralely	paralela	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	obj	_	_
5	mezi	mezi	ADP	RR--7----------	AdpType=Prep|Case=Ins	6	case	_	LId=mezi-1
6	hrami	hra	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	4	nmod	_	LGloss=(dětská;_v_divadle;...)
7	a	a	CCONJ	J^-------------	_	10	cc	_	LId=a-1
8	naším	můj	DET	PSZS7-P1-------	Case=Ins|Gender=Masc,Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	10	det	_	LGloss=(přivlast.)
9	každodenním	každodenní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	_	_
10	životem	život	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	6	conj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	2	obj	_	LId=co-1
2	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl	_	_
3	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
4	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	5	obj	_	LId=co-1
5	dělá	dělat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	2	punct	_	_
7	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	nsubj	_	_
8	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	–	-	PUNCT	Z:-------------	_	14	punct	_	_
10	no	no	PART	TT-------------	_	14	discourse	_	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	14	punct	_	_
12	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	_	_
13	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	14	nsubj	_	_
14	neuvěřitelné	uvěřitelný	ADJ	AANS1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	8	conj	_	SpaceAfter=No|LDeriv=uvěřit
15	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obj	color:blue
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


