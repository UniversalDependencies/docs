---
layout: base
title:  'Statistics of amod in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `amod`

This relation is universal.

1835 nodes (10%) are attached to their parents as `amod`.

1709 instances of `amod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23596730245232.

The following 8 pairs of parts of speech are connected with `amod`: [-pos/NOUN]()-[-pos/ADJ]() (1727; 94% instances), [-pos/PROPN]()-[-pos/ADJ]() (88; 5% instances), [-pos/PRON]()-[-pos/ADJ]() (10; 1% instances), [-pos/DET]()-[-pos/ADJ]() (3; 0% instances), [-pos/NUM]()-[-pos/ADJ]() (3; 0% instances), [-pos/ADJ]()-[-pos/ADJ]() (2; 0% instances), [-pos/NOUN]()-[-pos/NUM]() (1; 0% instances), [-pos/PRON]()-[-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Epicentrem	epicentrum	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
2	těchto	tento	DET	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	3	det	_	_
3	voleb	volba	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	1	nmod	_	_
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
5	Severní	severní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	_	_
6	Karolína	Karolína	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Giv|Number=Sing|Polarity=Pos	1	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	Příběh	příběh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj	_	_
2	Dosse	Doss	PROPN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	1	nmod	_	_
3	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=v-1
4	sobě	se	PRON	P6-X6----------	Case=Loc|PronType=Prs|Reflex=Yes	5	obl	_	LGloss=(zvr._zájmeno/částice)
5	obsahuje	obsahovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	něco	něco	PRON	PZ--4----------	Case=Acc|PronType=Ind	5	obj	_	_
7	neobvyklého	obvyklý	ADJ	AANS2----1N----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	11	punct	_	_
9	což	což	PRON	PE--1----------	Case=Nom|PronType=Rel	11	nsubj	_	LId=což-1
10	ho	on	PRON	PHZS4--3-------	Case=Acc|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	11	obj	_	LId=on-1
11	činí	činit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
12	přitažlivým	přitažlivý	ADJ	AAIP3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	11	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


