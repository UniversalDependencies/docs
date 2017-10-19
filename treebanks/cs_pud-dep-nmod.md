---
layout: base
title:  'Statistics of nmod in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `nmod`

This relation is universal.

1780 nodes (10%) are attached to their parents as `nmod`.

1660 instances of `nmod` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.02359550561798.

The following 37 pairs of parts of speech are connected with `nmod`: [-pos/NOUN]()-[-pos/NOUN]() (1107; 62% instances), [-pos/NOUN]()-[-pos/PROPN]() (305; 17% instances), [-pos/ADJ]()-[-pos/NOUN]() (119; 7% instances), [-pos/PROPN]()-[-pos/NOUN]() (69; 4% instances), [-pos/ADV]()-[-pos/NOUN]() (25; 1% instances), [-pos/NUM]()-[-pos/NOUN]() (25; 1% instances), [-pos/NOUN]()-[-pos/ADJ]() (21; 1% instances), [-pos/ADJ]()-[-pos/PRON]() (16; 1% instances), [-pos/ADJ]()-[-pos/PROPN]() (16; 1% instances), [-pos/NOUN]()-[-pos/PRON]() (9; 1% instances), [-pos/PROPN]()-[-pos/PROPN]() (8; 0% instances), [-pos/NOUN]()-[-pos/DET]() (7; 0% instances), [-pos/SYM]()-[-pos/NOUN]() (6; 0% instances), [-pos/NOUN]()-[-pos/NUM]() (5; 0% instances), [-pos/ADV]()-[-pos/PROPN]() (4; 0% instances), [-pos/ADJ]()-[-pos/DET]() (3; 0% instances), [-pos/ADV]()-[-pos/PRON]() (3; 0% instances), [-pos/DET]()-[-pos/PRON]() (3; 0% instances), [-pos/NOUN]()-[-pos/SYM]() (3; 0% instances), [-pos/NUM]()-[-pos/PRON]() (3; 0% instances), [-pos/ADV]()-[-pos/DET]() (2; 0% instances), [-pos/DET]()-[-pos/NOUN]() (2; 0% instances), [-pos/DET]()-[-pos/PROPN]() (2; 0% instances), [-pos/NOUN]()-[-pos/ADP]() (2; 0% instances), [-pos/PRON]()-[-pos/NOUN]() (2; 0% instances), [-pos/VERB]()-[-pos/NOUN]() (2; 0% instances), [-pos/ADJ]()-[-pos/SYM]() (1; 0% instances), [-pos/ADP]()-[-pos/NOUN]() (1; 0% instances), [-pos/ADV]()-[-pos/ADJ]() (1; 0% instances), [-pos/ADV]()-[-pos/ADV]() (1; 0% instances), [-pos/ADV]()-[-pos/NUM]() (1; 0% instances), [-pos/NUM]()-[-pos/SYM]() (1; 0% instances), [-pos/PRON]()-[-pos/DET]() (1; 0% instances), [-pos/PRON]()-[-pos/NUM]() (1; 0% instances), [-pos/PRON]()-[-pos/PROPN]() (1; 0% instances), [-pos/PROPN]()-[-pos/ADJ]() (1; 0% instances), [-pos/VERB]()-[-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod	color:blue
1	Maximální	maximální	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	_	_
2	množství	množství	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
3	:	:	PUNCT	Z:-------------	_	5	punct	_	_
4	5000	5000	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod:gov	_	_
5	dolarů	dolar	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	2	appos	_	_
6	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	_	LId=na-1
7	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod	color:blue
1	Od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	_	LId=od-1
2	června	červen	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	8	obl	_	_
3	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	LId=do-1
4	srpna	srpen	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	8	obl	_	_
5	2010	2010	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod	_	_
6	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	8	cop	_	_
7	Sahel	Sahel	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	8	nsubj	_	_
8	postižen	postižený	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
9	hladomorem	hladomor	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


