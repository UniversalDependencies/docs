---
layout: base
title:  'Statistics of advcl in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `advcl`

This relation is universal.

3452 nodes (1%) are attached to their parents as `advcl`.

2320 instances of `advcl` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.66309385863268.

The following 53 pairs of parts of speech are connected with `advcl`: [-pos/VERB]()-[-pos/VERB]() (1875; 54% instances), [-pos/ADJ]()-[-pos/VERB]() (409; 12% instances), [-pos/VERB]()-[-pos/ADJ]() (248; 7% instances), [-pos/ADV]()-[-pos/NOUN]() (126; 4% instances), [-pos/ADJ]()-[-pos/NOUN]() (123; 4% instances), [-pos/VERB]()-[-pos/NOUN]() (118; 3% instances), [-pos/ADV]()-[-pos/VERB]() (91; 3% instances), [-pos/ADJ]()-[-pos/ADJ]() (88; 3% instances), [-pos/NOUN]()-[-pos/VERB]() (72; 2% instances), [-pos/DET]()-[-pos/VERB]() (32; 1% instances), [-pos/NOUN]()-[-pos/NOUN]() (29; 1% instances), [-pos/ADV]()-[-pos/ADJ]() (28; 1% instances), [-pos/ADV]()-[-pos/ADV]() (22; 1% instances), [-pos/VERB]()-[-pos/ADV]() (19; 1% instances), [-pos/ADJ]()-[-pos/ADV]() (15; 0% instances), [-pos/ADJ]()-[-pos/NUM]() (14; 0% instances), [-pos/NOUN]()-[-pos/ADJ]() (12; 0% instances), [-pos/ADV]()-[-pos/NUM]() (11; 0% instances), [-pos/ADJ]()-[-pos/DET]() (9; 0% instances), [-pos/VERB]()-[-pos/DET]() (9; 0% instances), [-pos/SCONJ]()-[-pos/VERB]() (8; 0% instances), [-pos/DET]()-[-pos/ADJ]() (7; 0% instances), [-pos/DET]()-[-pos/NOUN]() (7; 0% instances), [-pos/ADJ]()-[-pos/PRON]() (6; 0% instances), [-pos/ADV]()-[-pos/PRON]() (6; 0% instances), [-pos/ADV]()-[-pos/PROPN]() (5; 0% instances), [-pos/SCONJ]()-[-pos/NOUN]() (5; 0% instances), [-pos/ADJ]()-[-pos/PROPN]() (4; 0% instances), [-pos/ADV]()-[-pos/DET]() (4; 0% instances), [-pos/NUM]()-[-pos/VERB]() (4; 0% instances), [-pos/SYM]()-[-pos/VERB]() (4; 0% instances), [-pos/VERB]()-[-pos/SYM]() (4; 0% instances), [-pos/ADJ]()-[-pos/SYM]() (3; 0% instances), [-pos/NOUN]()-[-pos/ADV]() (3; 0% instances), [-pos/NOUN]()-[-pos/PRON]() (3; 0% instances), [-pos/NOUN]()-[-pos/PROPN]() (3; 0% instances), [-pos/PRON]()-[-pos/NOUN]() (3; 0% instances), [-pos/VERB]()-[-pos/NUM]() (3; 0% instances), [-pos/VERB]()-[-pos/PRON]() (3; 0% instances), [-pos/DET]()-[-pos/DET]() (2; 0% instances), [-pos/PART]()-[-pos/VERB]() (2; 0% instances), [-pos/PRON]()-[-pos/VERB]() (2; 0% instances), [-pos/ADV]()-[-pos/SYM]() (1; 0% instances), [-pos/AUX]()-[-pos/VERB]() (1; 0% instances), [-pos/DET]()-[-pos/ADV]() (1; 0% instances), [-pos/DET]()-[-pos/PROPN]() (1; 0% instances), [-pos/INTJ]()-[-pos/VERB]() (1; 0% instances), [-pos/NOUN]()-[-pos/NUM]() (1; 0% instances), [-pos/PRON]()-[-pos/PROPN]() (1; 0% instances), [-pos/SCONJ]()-[-pos/ADV]() (1; 0% instances), [-pos/SYM]()-[-pos/NUM]() (1; 0% instances), [-pos/VERB]()-[-pos/PART]() (1; 0% instances), [-pos/VERB]()-[-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl	color:blue
1	Chodíte	chodit	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	pravidelně	pravidelně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	LDeriv=pravidelný
3	plavat	plavat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	advcl	_	SpaceAfter=No
4	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 advcl	color:blue
1	Nejsou	být	AUX	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
2	nebezpečné	bezpečný	ADJ	AAFP1----1N----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Neg	0	root	_	SpaceAfter=No|LId=bezpečný-1
3	,	,	PUNCT	Z:-------------	_	8	punct	_	_
4	protože	protože	SCONJ	J,-------------	_	8	mark	_	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pv	_	LGloss=(zvr._zájmeno/částice)
6	prakticky	prakticky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	_	LDeriv=praktický
7	nikdy	nikdy	ADV	Db-------------	PronType=Neg	8	advmod	_	_
8	nemění	měnit	VERB	VB-P---3P-NA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl	_	_
9	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	LId=v-1
10	nádor	nádor	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 advcl	color:blue
1	Zachoval	zachovat	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	LGloss=(zvr._zájmeno/částice)
3	však	však	CCONJ	J^-------------	_	1	cc	_	_
4	tak	tak	ADV	Db-------------	PronType=Dem	1	advmod	_	SpaceAfter=No|LId=tak-3
5	,	,	PUNCT	Z:-------------	_	11	punct	_	_
6	že	že	SCONJ	J,-------------	_	11	mark	_	_
7	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	11	cop	_	_
8	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=při-1
9	soudním	soudní	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	10	amod	_	_
10	řízení	řízení	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	11	obl	_	LDeriv=řídit
11	osvobozen	osvobozený	ADJ	VsYS---XX-AP---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	1	advcl	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


