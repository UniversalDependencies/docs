---
layout: base
title:  'Statistics of advmod in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: [advmod:emph]().

60612 nodes (4%) are attached to their parents as `advmod`.

46634 instances of `advmod` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.040503530654.

The following 52 pairs of parts of speech are connected with `advmod`: [-pos/VERB]()-[-pos/ADV]() (39676; 65% instances), [-pos/ADJ]()-[-pos/ADV]() (13839; 23% instances), [-pos/NOUN]()-[-pos/ADV]() (2172; 4% instances), [-pos/ADV]()-[-pos/ADV]() (2045; 3% instances), [-pos/VERB]()-[-pos/PART]() (785; 1% instances), [-pos/VERB]()-[-pos/SCONJ]() (486; 1% instances), [-pos/VERB]()-[-pos/CCONJ]() (353; 1% instances), [-pos/NUM]()-[-pos/ADV]() (293; 0% instances), [-pos/DET]()-[-pos/ADV]() (251; 0% instances), [-pos/ADJ]()-[-pos/PART]() (108; 0% instances), [-pos/PRON]()-[-pos/ADV]() (84; 0% instances), [-pos/PROPN]()-[-pos/ADV]() (83; 0% instances), [-pos/ADJ]()-[-pos/CCONJ]() (67; 0% instances), [-pos/ADJ]()-[-pos/SCONJ]() (60; 0% instances), [-pos/NOUN]()-[-pos/PART]() (52; 0% instances), [-pos/VERB]()-[-pos/ADP]() (47; 0% instances), [-pos/VERB]()-[-pos/SYM]() (34; 0% instances), [-pos/VERB]()-[-pos/VERB]() (23; 0% instances), [-pos/NOUN]()-[-pos/CCONJ]() (17; 0% instances), [-pos/ADJ]()-[-pos/SYM]() (15; 0% instances), [-pos/NOUN]()-[-pos/SCONJ]() (12; 0% instances), [-pos/NUM]()-[-pos/PART]() (11; 0% instances), [-pos/VERB]()-[-pos/INTJ]() (11; 0% instances), [-pos/SYM]()-[-pos/ADV]() (10; 0% instances), [-pos/PART]()-[-pos/ADV]() (9; 0% instances), [-pos/ADV]()-[-pos/CCONJ]() (8; 0% instances), [-pos/ADV]()-[-pos/PART]() (8; 0% instances), [-pos/PRON]()-[-pos/PART]() (5; 0% instances), [-pos/INTJ]()-[-pos/ADV]() (4; 0% instances), [-pos/ADJ]()-[-pos/ADP]() (3; 0% instances), [-pos/ADV]()-[-pos/SCONJ]() (3; 0% instances), [-pos/DET]()-[-pos/PART]() (3; 0% instances), [-pos/NUM]()-[-pos/CCONJ]() (3; 0% instances), [-pos/PUNCT]()-[-pos/ADV]() (3; 0% instances), [-pos/VERB]()-[-pos/DET]() (3; 0% instances), [-pos/ADJ]()-[-pos/DET]() (2; 0% instances), [-pos/ADJ]()-[-pos/VERB]() (2; 0% instances), [-pos/ADP]()-[-pos/ADV]() (2; 0% instances), [-pos/ADV]()-[-pos/SYM]() (2; 0% instances), [-pos/CCONJ]()-[-pos/ADV]() (2; 0% instances), [-pos/NOUN]()-[-pos/VERB]() (2; 0% instances), [-pos/PART]()-[-pos/PART]() (2; 0% instances), [-pos/VERB]()-[-pos/ADJ]() (2; 0% instances), [-pos/VERB]()-[-pos/NOUN]() (2; 0% instances), [-pos/ADJ]()-[-pos/INTJ]() (1; 0% instances), [-pos/ADV]()-[-pos/INTJ]() (1; 0% instances), [-pos/AUX]()-[-pos/ADV]() (1; 0% instances), [-pos/DET]()-[-pos/SCONJ]() (1; 0% instances), [-pos/NOUN]()-[-pos/ADP]() (1; 0% instances), [-pos/NOUN]()-[-pos/SYM]() (1; 0% instances), [-pos/PRON]()-[-pos/SCONJ]() (1; 0% instances), [-pos/PROPN]()-[-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Potřebujete	potřebovat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	rychle	rychle	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	LDeriv=rychlý
3	poradit	poradit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	(	(	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
2	Velmi	velmi	ADV	Db-------------	_	3	advmod	_	_
3	jemné	jemný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
4	pouze	pouze	ADV	Db-------------	_	6	advmod:emph	_	_
5	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=na-1
6	příjmu	příjem	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	dep	_	SpaceAfter=No
7	)	)	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advmod	color:blue
1	Hovoří	hovořit	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=o-1
3	3	3	NUM	C=-------------	NumForm=Digit|NumType=Card	6	nummod	_	SpaceAfter=No
4	-	-	PUNCT	Z:-------------	_	5	punct	_	SpaceAfter=No
5	4	4	NUM	C=-------------	NumForm=Digit|NumType=Card	3	conj	_	_
6	tisících	tisíc	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	1	obj	_	LId=tisíc-2|LNumValue=1000
7	měsíčně	měsíčně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	_	SpaceAfter=No|LGloss=(arch.;_př._měsíčná_noc)|LDeriv=měsíčný
8	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


