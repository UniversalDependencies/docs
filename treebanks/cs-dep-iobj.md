---
layout: base
title:  'Statistics of iobj in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `iobj`

This relation is universal.

8456 nodes (1%) are attached to their parents as `iobj`.

5110 instances of `iobj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.00591296121097.

The following 9 pairs of parts of speech are connected with `iobj`: [-pos/VERB]()-[-pos/NOUN]() (4547; 54% instances), [-pos/VERB]()-[-pos/PRON]() (2277; 27% instances), [-pos/VERB]()-[-pos/PROPN]() (707; 8% instances), [-pos/VERB]()-[-pos/ADJ]() (481; 6% instances), [-pos/VERB]()-[-pos/DET]() (356; 4% instances), [-pos/VERB]()-[-pos/NUM]() (61; 1% instances), [-pos/VERB]()-[-pos/ADV]() (24; 0% instances), [-pos/VERB]()-[-pos/SYM]() (2; 0% instances), [-pos/VERB]()-[-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 iobj	color:blue
1	Mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
2	zde	zde	ADV	Db-------------	PronType=Dem	1	advmod	_	_
3	porovnat	porovnat	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	xcomp	_	_
4	svůj	svůj	DET	P8IS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	LId=svůj-1|LGloss=(přivlast.)
5	vývoj	vývoj	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	7	punct	_	_
7	záměry	záměr	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	5	conj	_	_
8	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	10	case	_	LId=s-1
9	světovými	světový	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	10	amod	_	_
10	trendy	trend	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	3	iobj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 iobj	color:blue
1	Může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
2	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=po-1
3	mně	já	PRON	PP-S6--1-------	Case=Loc|Number=Sing|Person=1|PronType=Prs	7	iobj	_	_
4	takové	takový	DET	PDIP4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	_
5	údaje	údaj	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	7	obj	_	_
6	pojišťovna	pojišťovna	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	nsubj	_	_
7	vyžadovat	vyžadovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
8	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 iobj	color:blue
1	Z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	_	LId=z-1
2	českého	český	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	_	_
3	tisku	tisk	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	_	LGloss=(zvr._zájmeno/částice)
5	čtenář	čtenář	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	9	nsubj	_	_
6	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	LId=o-1
7	současném	současný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	8	amod	_	_
8	Německu	Německo	PROPN	NNNS6-----A----	Case=Loc|Gender=Neut|NameType=Geo|Number=Sing|Polarity=Pos	9	iobj	_	_
9	dovídá	dovídat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	velice	velice	ADV	Db-------------	_	11	advmod	_	_
11	málo	málo	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	9	obj	_	LId=málo-1|LGloss=(málo_+_2._p.,_málo_peněz)

~~~


