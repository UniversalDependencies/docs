---
layout: base
title:  'Statistics of punct in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `punct`

This relation is universal.

220974 nodes (15%) are attached to their parents as `punct`.

125517 instances of `punct` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.91306669562935.

The following 18 pairs of parts of speech are connected with `punct`: [-pos/VERB]()-[-pos/PUNCT]() (116875; 53% instances), [-pos/NOUN]()-[-pos/PUNCT]() (40812; 18% instances), [-pos/ADJ]()-[-pos/PUNCT]() (26105; 12% instances), [-pos/PROPN]()-[-pos/PUNCT]() (19366; 9% instances), [-pos/NUM]()-[-pos/PUNCT]() (11628; 5% instances), [-pos/ADV]()-[-pos/PUNCT]() (3410; 2% instances), [-pos/DET]()-[-pos/PUNCT]() (1257; 1% instances), [-pos/PRON]()-[-pos/PUNCT]() (604; 0% instances), [-pos/PART]()-[-pos/PUNCT]() (456; 0% instances), [-pos/PUNCT]()-[-pos/PUNCT]() (161; 0% instances), [-pos/CCONJ]()-[-pos/PUNCT]() (80; 0% instances), [-pos/SYM]()-[-pos/PUNCT]() (74; 0% instances), [-pos/INTJ]()-[-pos/PUNCT]() (58; 0% instances), [-pos/ADP]()-[-pos/PUNCT]() (41; 0% instances), [-pos/SCONJ]()-[-pos/PUNCT]() (33; 0% instances), [-pos/X]()-[-pos/PUNCT]() (11; 0% instances), [-pos/AUX]()-[-pos/PUNCT]() (2; 0% instances), [-pos/NOUN]()-[-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 punct	color:blue
1	Potřebujete	potřebovat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	rychle	rychle	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	LDeriv=rychlý
3	poradit	poradit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 punct	color:blue
1	|	|	PUNCT	Z:-------------	_	2	punct	_	_
2	Rady	rada	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	LId=rada-1|LGloss=(př._dát_někomu_dobrou_radu)
3	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=na-1
4	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	2	nmod	_	_
5	|	|	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 punct	color:blue
1	(	(	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
2	Velmi	velmi	ADV	Db-------------	_	3	advmod	_	_
3	jemné	jemný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
4	pouze	pouze	ADV	Db-------------	_	6	advmod:emph	_	_
5	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=na-1
6	příjmu	příjem	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	dep	_	SpaceAfter=No
7	)	)	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


