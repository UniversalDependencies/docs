---
layout: base
title:  'Statistics of case in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `case`

This relation is universal.

145186 nodes (10%) are attached to their parents as `case`.

145128 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53713167936302.

The following 38 pairs of parts of speech are connected with `case`: [-pos/NOUN]()-[-pos/ADP]() (112727; 78% instances), [-pos/PROPN]()-[-pos/ADP]() (16237; 11% instances), [-pos/PRON]()-[-pos/ADP]() (6178; 4% instances), [-pos/DET]()-[-pos/ADP]() (4455; 3% instances), [-pos/NUM]()-[-pos/ADP]() (2089; 1% instances), [-pos/ADJ]()-[-pos/ADP]() (1909; 1% instances), [-pos/NOUN]()-[-pos/NOUN]() (584; 0% instances), [-pos/NOUN]()-[-pos/ADV]() (446; 0% instances), [-pos/ADV]()-[-pos/ADP]() (157; 0% instances), [-pos/PROPN]()-[-pos/ADV]() (124; 0% instances), [-pos/SYM]()-[-pos/ADP]() (85; 0% instances), [-pos/PROPN]()-[-pos/NOUN]() (35; 0% instances), [-pos/NOUN]()-[-pos/VERB]() (23; 0% instances), [-pos/PART]()-[-pos/ADP]() (19; 0% instances), [-pos/PRON]()-[-pos/ADV]() (16; 0% instances), [-pos/DET]()-[-pos/ADV]() (15; 0% instances), [-pos/DET]()-[-pos/NOUN]() (12; 0% instances), [-pos/NOUN]()-[-pos/SYM]() (10; 0% instances), [-pos/NUM]()-[-pos/SYM]() (10; 0% instances), [-pos/NOUN]()-[-pos/PART]() (8; 0% instances), [-pos/ADJ]()-[-pos/NOUN]() (7; 0% instances), [-pos/PROPN]()-[-pos/PROPN]() (6; 0% instances), [-pos/ADJ]()-[-pos/ADV]() (5; 0% instances), [-pos/NUM]()-[-pos/ADV]() (4; 0% instances), [-pos/NUM]()-[-pos/VERB]() (4; 0% instances), [-pos/ADV]()-[-pos/NOUN]() (3; 0% instances), [-pos/ADJ]()-[-pos/SCONJ]() (2; 0% instances), [-pos/ADV]()-[-pos/ADV]() (2; 0% instances), [-pos/NOUN]()-[-pos/SCONJ]() (2; 0% instances), [-pos/NUM]()-[-pos/NOUN]() (2; 0% instances), [-pos/PART]()-[-pos/ADV]() (2; 0% instances), [-pos/PRON]()-[-pos/NOUN]() (2; 0% instances), [-pos/ADJ]()-[-pos/ADJ]() (1; 0% instances), [-pos/ADP]()-[-pos/ADP]() (1; 0% instances), [-pos/INTJ]()-[-pos/ADP]() (1; 0% instances), [-pos/NOUN]()-[-pos/INTJ]() (1; 0% instances), [-pos/PRON]()-[-pos/VERB]() (1; 0% instances), [-pos/PROPN]()-[-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	|	|	PUNCT	Z:-------------	_	2	punct	_	_
2	Rady	rada	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	LId=rada-1|LGloss=(př._dát_někomu_dobrou_radu)
3	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=na-1
4	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	2	nmod	_	_
5	|	|	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Světové	světový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
2	firmy	firma	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	_
3	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=na-1
4	Mallorce	Mallorka	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	2	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
2	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=po-1
3	mně	já	PRON	PP-S6--1-------	Case=Loc|Number=Sing|Person=1|PronType=Prs	7	iobj	_	_
4	takové	takový	DET	PDIP4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	_
5	údaje	údaj	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	7	obj	_	_
6	pojišťovna	pojišťovna	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	nsubj	_	_
7	vyžadovat	vyžadovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
8	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


