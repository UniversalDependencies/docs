---
layout: base
title:  'Statistics of det in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: [det:numgov](), [det:nummod]().

10752 nodes (2%) are attached to their parents as `det`.

10618 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35286458333333.

The following 10 pairs of parts of speech are connected with `det`: [-pos/NOUN]()-[-pos/DET]() (10582; 98% instances), [-pos/ADJ]()-[-pos/DET]() (51; 0% instances), [-pos/PROPN]()-[-pos/DET]() (33; 0% instances), [-pos/SYM]()-[-pos/DET]() (29; 0% instances), [-pos/PRON]()-[-pos/DET]() (18; 0% instances), [-pos/NUM]()-[-pos/DET]() (15; 0% instances), [-pos/ADV]()-[-pos/DET]() (13; 0% instances), [-pos/DET]()-[-pos/DET]() (6; 0% instances), [-pos/VERB]()-[-pos/DET]() (4; 0% instances), [-pos/ADP]()-[-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	3	case	_	LId=za-1
2	tím	ten	DET	PDZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	det	_	_
3	účelem	účel	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	_	LGloss=(zvr._zájmeno/částice)
5	zavazujeme	zavazovat	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Kdepak	kdepak	ADV	Db-------------	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	4	punct	_	_
3	žádná	žádný	DET	PWFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Neg	4	det	_	_
4	dršťková	dršťkový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	1	conj	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	4	punct	_	_
6	žádné	žádný	DET	PWNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	7	det	_	_
7	pivčo	pivčo	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|Style=Coll	4	orphan	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Moje	můj	DET	PSHS1-S1-------	Case=Nom|Gender=Fem,Neut|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	2	det	_	LGloss=(přivlast.)
2	Drahuška	Drahuška	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Giv|Number=Sing|Polarity=Pos|Style=Coll	7	nsubj	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pv	_	LGloss=(zvr._zájmeno/částice)
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=na-1
5	mne	já	PRON	PP-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	obj	_	LGloss=(2./4.pád)
6	významně	významně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	_	LDeriv=významný
7	podívala	podívat	VERB	VpQW---XR-AA---	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


