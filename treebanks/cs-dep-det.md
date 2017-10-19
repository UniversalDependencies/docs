---
layout: base
title:  'Statistics of det in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: [det:numgov](), [det:nummod]().

28324 nodes (2%) are attached to their parents as `det`.

27652 instances of `det` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36206044344019.

The following 14 pairs of parts of speech are connected with `det`: [-pos/NOUN]()-[-pos/DET]() (27762; 98% instances), [-pos/DET]()-[-pos/DET]() (131; 0% instances), [-pos/ADJ]()-[-pos/DET]() (119; 0% instances), [-pos/PROPN]()-[-pos/DET]() (108; 0% instances), [-pos/NUM]()-[-pos/DET]() (68; 0% instances), [-pos/PRON]()-[-pos/DET]() (66; 0% instances), [-pos/ADV]()-[-pos/DET]() (41; 0% instances), [-pos/PART]()-[-pos/DET]() (10; 0% instances), [-pos/VERB]()-[-pos/DET]() (10; 0% instances), [-pos/ADP]()-[-pos/DET]() (3; 0% instances), [-pos/SYM]()-[-pos/DET]() (3; 0% instances), [-pos/INTJ]()-[-pos/DET]() (1; 0% instances), [-pos/SCONJ]()-[-pos/DET]() (1; 0% instances), [-pos/VERB]()-[-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 det	color:blue
1	To	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obj	_	_
2	všechno	všechen	DET	PLNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	1	det	_	_
3	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	někdo	někdo	PRON	PZM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Ind	3	nsubj	_	_
5	zaplatit	zaplatit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	3	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Nevidím	vidět	VERB	VB-S---1P-NA---	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	žádná	žádný	DET	PWNP4----------	Case=Acc|Gender=Neut|Number=Plur|PronType=Neg	3	det	_	_
3	dramata	drama	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	1	obj	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	7	punct	_	_
5	ani	ani	CCONJ	J^-------------	_	7	cc	_	_
6	moji	můj	DET	PSMP1-S1-------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det	_	LGloss=(přivlast.)
7	nejbližší	blízký	ADJ	AAMP1----3A----	Animacy=Anim|Case=Nom|Degree=Sup|Gender=Masc|Number=Plur|Polarity=Pos	1	conj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


