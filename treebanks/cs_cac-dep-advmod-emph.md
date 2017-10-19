---
layout: base
title:  'Statistics of advmod:emph in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `advmod:emph`

This relation is a language-specific subtype of [advmod]().

7199 nodes (1%) are attached to their parents as `advmod:emph`.

7169 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83344909015141.

The following 43 pairs of parts of speech are connected with `advmod:emph`: [-pos/NOUN]()-[-pos/ADV]() (1986; 28% instances), [-pos/NOUN]()-[-pos/CCONJ]() (1535; 21% instances), [-pos/NOUN]()-[-pos/PART]() (771; 11% instances), [-pos/ADJ]()-[-pos/ADV]() (339; 5% instances), [-pos/ADV]()-[-pos/ADV]() (334; 5% instances), [-pos/NUM]()-[-pos/ADV]() (278; 4% instances), [-pos/NUM]()-[-pos/PART]() (246; 3% instances), [-pos/ADV]()-[-pos/PART]() (186; 3% instances), [-pos/VERB]()-[-pos/ADV]() (156; 2% instances), [-pos/DET]()-[-pos/ADV]() (154; 2% instances), [-pos/ADV]()-[-pos/CCONJ]() (153; 2% instances), [-pos/ADJ]()-[-pos/CCONJ]() (144; 2% instances), [-pos/ADJ]()-[-pos/PART]() (119; 2% instances), [-pos/PROPN]()-[-pos/ADV]() (102; 1% instances), [-pos/DET]()-[-pos/CCONJ]() (95; 1% instances), [-pos/DET]()-[-pos/PART]() (80; 1% instances), [-pos/VERB]()-[-pos/CCONJ]() (74; 1% instances), [-pos/VERB]()-[-pos/PART]() (70; 1% instances), [-pos/PROPN]()-[-pos/CCONJ]() (61; 1% instances), [-pos/PRON]()-[-pos/ADV]() (52; 1% instances), [-pos/SCONJ]()-[-pos/ADV]() (45; 1% instances), [-pos/PRON]()-[-pos/CCONJ]() (42; 1% instances), [-pos/NUM]()-[-pos/CCONJ]() (27; 0% instances), [-pos/PRON]()-[-pos/PART]() (25; 0% instances), [-pos/SYM]()-[-pos/ADV]() (25; 0% instances), [-pos/PROPN]()-[-pos/PART]() (23; 0% instances), [-pos/SCONJ]()-[-pos/PART]() (17; 0% instances), [-pos/SYM]()-[-pos/PART]() (16; 0% instances), [-pos/PART]()-[-pos/ADV]() (13; 0% instances), [-pos/SCONJ]()-[-pos/CCONJ]() (6; 0% instances), [-pos/SYM]()-[-pos/CCONJ]() (5; 0% instances), [-pos/CCONJ]()-[-pos/PART]() (3; 0% instances), [-pos/NUM]()-[-pos/ADP]() (3; 0% instances), [-pos/PART]()-[-pos/CCONJ]() (3; 0% instances), [-pos/CCONJ]()-[-pos/CCONJ]() (2; 0% instances), [-pos/NOUN]()-[-pos/SYM]() (2; 0% instances), [-pos/ADJ]()-[-pos/VERB]() (1; 0% instances), [-pos/ADV]()-[-pos/DET]() (1; 0% instances), [-pos/CCONJ]()-[-pos/ADV]() (1; 0% instances), [-pos/DET]()-[-pos/SYM]() (1; 0% instances), [-pos/NOUN]()-[-pos/ADJ]() (1; 0% instances), [-pos/NOUN]()-[-pos/ADP]() (1; 0% instances), [-pos/PART]()-[-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:emph	color:blue
1	Zvýšení	zvýšení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	LDeriv=zvýšit
2	soběstačnosti	soběstačnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	_	LDeriv=soběstačný
3	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	4	case	_	LId=v-1
4	výrobě	výroba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	2	nmod	_	_
5	potravin	potravina	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	8	punct	_	_
7	zvláště	zvláště	ADV	Db-------------	_	8	advmod:emph	_	_
8	obilovin	obilovina	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	5	appos	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:emph	color:blue
1	I	i	CCONJ	J^-------------	_	3	advmod:emph	_	LId=i-1
2	tyto	tento	DET	PDFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	3	det	_	_
3	cysty	cysta	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	_	_
4	lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	odstranit	odstranit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	4	csubj	_	_
6	chirurgicky	chirurgicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	_	SpaceAfter=No|LDeriv=chirurgický
7	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:emph	color:blue
1	Nezůstalo	zůstat	VERB	VpNS---XR-NA---	Gender=Neut|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	však	však	CCONJ	J^-------------	_	1	cc	_	_
3	jen	jen	PART	TT-------------	_	6	advmod:emph	_	LId=jen-1|LGloss=(pouze)
4	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=při-1
5	dobrém	dobrý	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	úmyslu	úmysl	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	1	obl	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


