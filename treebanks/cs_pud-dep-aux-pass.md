---
layout: base
title:  'Statistics of aux:pass in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of [aux]().

164 nodes (1%) are attached to their parents as `aux:pass`.

164 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11585365853659.

The following 2 pairs of parts of speech are connected with `aux:pass`: [-pos/ADJ]()-[-pos/AUX]() (163; 99% instances), [-pos/ADJ]()-[-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux:pass	color:blue
1	Byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	_	_
2	také	také	ADV	Db-------------	_	3	advmod	_	_
3	obviněna	obviněný	ADJ	VsQW---XX-AP---	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	_	LId=z-1
5	pokusu	pokus	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	3	iobj	_	_
6	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	_	LId=o-1
7	zabití	zabití	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	5	nmod	_	LDeriv=zabít
8	své	svůj	DET	P8FS2---------1	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	10	det	_	LId=svůj-1|LGloss=(přivlast.)
9	dvouleté	dvouletý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	_	_
10	dcery	dcera	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:pass	color:blue
1	Bylo	být	VERB	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	2	aux:pass	_	_
2	provedeno	provedený	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	LId=od-1
4	dubna	duben	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	2	obl	_	_
5	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	_	LId=do-1
6	června	červen	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	2	obl	_	_
7	blízko	blízko	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	9	case	_	LId=blízko-1
8	mexického	mexický	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	9	amod	_	_
9	pobřeží	pobřeží	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	2	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


