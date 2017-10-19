---
layout: base
title:  'Statistics of advmod:emph in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `advmod:emph`

This relation is a language-specific subtype of [advmod]().

178 nodes (1%) are attached to their parents as `advmod:emph`.

178 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.98314606741573.

The following 19 pairs of parts of speech are connected with `advmod:emph`: [-pos/NOUN]()-[-pos/ADV]() (75; 42% instances), [-pos/NOUN]()-[-pos/PART]() (27; 15% instances), [-pos/NOUN]()-[-pos/CCONJ]() (20; 11% instances), [-pos/PROPN]()-[-pos/ADV]() (11; 6% instances), [-pos/ADV]()-[-pos/ADV]() (8; 4% instances), [-pos/ADV]()-[-pos/PART]() (6; 3% instances), [-pos/NUM]()-[-pos/ADV]() (6; 3% instances), [-pos/ADJ]()-[-pos/PART]() (4; 2% instances), [-pos/ADV]()-[-pos/CCONJ]() (4; 2% instances), [-pos/DET]()-[-pos/ADV]() (3; 2% instances), [-pos/SYM]()-[-pos/ADV]() (3; 2% instances), [-pos/VERB]()-[-pos/ADV]() (3; 2% instances), [-pos/PROPN]()-[-pos/CCONJ]() (2; 1% instances), [-pos/DET]()-[-pos/PART]() (1; 1% instances), [-pos/NUM]()-[-pos/CCONJ]() (1; 1% instances), [-pos/NUM]()-[-pos/PART]() (1; 1% instances), [-pos/PRON]()-[-pos/ADV]() (1; 1% instances), [-pos/PRON]()-[-pos/CCONJ]() (1; 1% instances), [-pos/PROPN]()-[-pos/ADP]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:emph	color:blue
1	Do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	_	LId=do-1
2	té	ten	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	doby	doba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	_	_
4	viděli	vidět	VERB	VpMP---XR-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	letouny	letoun	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	4	obj	_	_
6	pouze	pouze	ADV	Db-------------	_	7	advmod:emph	_	_
7	bloggeři	blogger	NOUN	NNMP1-----A---1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	4	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 advmod:emph	color:blue
1	Samozřejmě	samozřejmě	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	0	root	_	SpaceAfter=No|LDeriv=samozřejmý
2	,	,	PUNCT	Z:-------------	_	4	punct	_	_
3	že	že	SCONJ	J,-------------	_	4	mark	_	LId=že-1
4	jde	jít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
5	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	_	LId=o-1
6	volby	volba	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	4	obj	_	_
7	a	a	CCONJ	J^-------------	_	11	cc	_	LId=a-1
8	ne	ne	PART	TT-------------	_	11	advmod:emph	_	_
9	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=o-1
10	„	"	PUNCT	Z:-------------	_	11	punct	_	SpaceAfter=No
11	Hru	hra	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	6	conj	_	LGloss=(dětská;_v_divadle;...)
12	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	13	case	_	LId=o-1
13	trůny	trůn	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	11	nmod	_	SpaceAfter=No
14	“	"	PUNCT	Z:-------------	_	11	punct	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 advmod:emph	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	dánštině	dánština	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	_	LGloss=(zvr._zájmeno/částice)
4	tímto	tento	DET	PDZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PronType=Dem	5	det	_	_
5	slovem	slovo	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	7	obl	_	_
6	můžou	moci	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
7	označovat	označovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	6	xcomp	_	_
8	i	i	CCONJ	J^-------------	_	10	advmod:emph	_	LId=i-1
9	mělké	mělký	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	10	amod	_	_
10	laguny	laguna	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	6	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


