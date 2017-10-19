---
layout: base
title:  'Statistics of mark in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `mark`

This relation is universal.

8608 nodes (2%) are attached to their parents as `mark`.

8132 instances of `mark` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.73025092936803.

The following 41 pairs of parts of speech are connected with `mark`: [-pos/VERB]()-[-pos/SCONJ]() (4409; 51% instances), [-pos/NOUN]()-[-pos/SCONJ]() (1813; 21% instances), [-pos/ADJ]()-[-pos/SCONJ]() (1144; 13% instances), [-pos/VERB]()-[-pos/PART]() (488; 6% instances), [-pos/VERB]()-[-pos/CCONJ]() (125; 1% instances), [-pos/ADV]()-[-pos/SCONJ]() (103; 1% instances), [-pos/ADJ]()-[-pos/PART]() (94; 1% instances), [-pos/NUM]()-[-pos/SCONJ]() (84; 1% instances), [-pos/DET]()-[-pos/SCONJ]() (48; 1% instances), [-pos/ADJ]()-[-pos/CCONJ]() (47; 1% instances), [-pos/PROPN]()-[-pos/SCONJ]() (46; 1% instances), [-pos/SYM]()-[-pos/SCONJ]() (39; 0% instances), [-pos/VERB]()-[-pos/ADV]() (35; 0% instances), [-pos/PRON]()-[-pos/SCONJ]() (30; 0% instances), [-pos/NOUN]()-[-pos/CCONJ]() (15; 0% instances), [-pos/NOUN]()-[-pos/PART]() (13; 0% instances), [-pos/ADJ]()-[-pos/ADV]() (9; 0% instances), [-pos/VERB]()-[-pos/ADP]() (8; 0% instances), [-pos/NOUN]()-[-pos/ADV]() (7; 0% instances), [-pos/CCONJ]()-[-pos/DET]() (5; 0% instances), [-pos/CCONJ]()-[-pos/SCONJ]() (5; 0% instances), [-pos/VERB]()-[-pos/SYM]() (5; 0% instances), [-pos/ADV]()-[-pos/CCONJ]() (4; 0% instances), [-pos/ADV]()-[-pos/PART]() (4; 0% instances), [-pos/PART]()-[-pos/SCONJ]() (4; 0% instances), [-pos/SYM]()-[-pos/PART]() (4; 0% instances), [-pos/ADJ]()-[-pos/SYM]() (3; 0% instances), [-pos/DET]()-[-pos/PART]() (3; 0% instances), [-pos/NUM]()-[-pos/ADV]() (2; 0% instances), [-pos/AUX]()-[-pos/SCONJ]() (1; 0% instances), [-pos/CCONJ]()-[-pos/ADV]() (1; 0% instances), [-pos/DET]()-[-pos/ADV]() (1; 0% instances), [-pos/DET]()-[-pos/CCONJ]() (1; 0% instances), [-pos/NUM]()-[-pos/CCONJ]() (1; 0% instances), [-pos/NUM]()-[-pos/PART]() (1; 0% instances), [-pos/PART]()-[-pos/PART]() (1; 0% instances), [-pos/PRON]()-[-pos/ADV]() (1; 0% instances), [-pos/PROPN]()-[-pos/ADV]() (1; 0% instances), [-pos/PUNCT]()-[-pos/CCONJ]() (1; 0% instances), [-pos/SCONJ]()-[-pos/CCONJ]() (1; 0% instances), [-pos/SYM]()-[-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 mark	color:blue
1	Ve	v	ADP	RV--4----------	AdpType=Voc|Case=Acc	2	case	_	LId=v-1
2	čtyři	čtyři	NUM	ClXP4----------	Case=Acc|Number=Plur|NumForm=Word|NumType=Card|NumValue=1,2,3	4	obl	_	LNumValue=4
3	odpoledne	odpoledne	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	2	nmod	_	LId=odpoledne-2
4	ohlásil	ohlásit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	předseda	předseda	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	_	_
6	družstva	družstvo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	5	nmod	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	9	punct	_	_
8	že	že	SCONJ	J,-------------	_	9	mark	_	_
9	padla	padnout	VERB	VpQW---XR-AA--1	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	Všechno	všechno	PRON	PLNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	2	nsubj	_	_
2	šlo	jít	VERB	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	jako	jako	SCONJ	J,-------------	_	5	mark	_	_
4	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=na-1
5	drátku	drátek	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	2	dep	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 mark	color:blue
1	Víme	vědět	VERB	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	7	punct	_	_
3	že	že	SCONJ	J,-------------	_	7	mark	_	_
4	nadbytečné	nadbytečný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	5	amod	_	_
5	kilogramy	kilogram	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	7	nsubj	_	_
6	nejsou	být	AUX	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	zdravé	zdravý	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	1	ccomp	_	_
8	ani	ani	CCONJ	J^-------------	_	9	cc	_	_
9	nesluší	slušet	VERB	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


