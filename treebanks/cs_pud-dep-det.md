---
layout: base
title:  'Statistics of det in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: [det:numgov](), [det:nummod]().

413 nodes (2%) are attached to their parents as `det`.

410 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34624697336562.

The following 7 pairs of parts of speech are connected with `det`: [-pos/NOUN]()-[-pos/DET]() (397; 96% instances), [-pos/ADJ]()-[-pos/DET]() (5; 1% instances), [-pos/NOUN]()-[-pos/PRON]() (5; 1% instances), [-pos/NUM]()-[-pos/DET]() (2; 0% instances), [-pos/PROPN]()-[-pos/DET]() (2; 0% instances), [-pos/DET]()-[-pos/DET]() (1; 0% instances), [-pos/PRON]()-[-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det	color:blue
1	Lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	tu	tu	ADV	Db-------------	PronType=Dem	1	advmod	_	_
3	najít	najít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	csubj	_	_
4	paralely	paralela	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	obj	_	_
5	mezi	mezi	ADP	RR--7----------	AdpType=Prep|Case=Ins	6	case	_	LId=mezi-1
6	hrami	hra	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	4	nmod	_	LGloss=(dětská;_v_divadle;...)
7	a	a	CCONJ	J^-------------	_	10	cc	_	LId=a-1
8	naším	můj	DET	PSZS7-P1-------	Case=Ins|Gender=Masc,Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	10	det	_	LGloss=(přivlast.)
9	každodenním	každodenní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	_	_
10	životem	život	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	6	conj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Protože	protože	SCONJ	J,-------------	_	7	mark	_	_
2	série	série	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	7	nsubj	_	_
3	1	1	NUM	C=-------------	NumForm=Digit|NumType=Card	2	nummod	_	_
4	už	už	ADV	Db-------------	_	7	advmod	_	LId=už-1
5	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
6	ta	ten	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	stará	starý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	advcl	_	SpaceAfter=No|LId=starý-2|LGloss=(člověk,_věc)
8	,	,	PUNCT	Z:-------------	_	7	punct	_	_
9	mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
10	mnozí	mnohý	ADJ	AAMP1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	11	amod	_	_
11	uživatelé	uživatel	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	9	nsubj	_	_
12	ušetřit	ušetřit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	9	xcomp	_	_
13	100	100	NUM	C=-------------	NumForm=Digit|NumType=Card	14	nummod:gov	_	_
14	eur	euro	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	12	obj	_	SpaceAfter=No|LId=euro-2|LGloss=(evr._měna)
15	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det	color:blue
1	Vstupenka	vstupenka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	_	_
2	F	F	PROPN	NNXXX-----A---8	Abbr=Yes|NameType=Giv|Polarity=Pos	1	nmod	_	SpaceAfter=No|LId=F-0
3	1	1	NUM	C=-------------	NumForm=Digit|NumType=Card	2	nummod	_	_
4	zaručuje	zaručovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	vstup	vstup	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	_	_
6	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	_	LId=na-1
7	koncert	koncert	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	_	_
8	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=v-1
9	ten	ten	DET	PDIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	11	det	_	_
10	samý	samý	PRON	PLIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Tot	11	det	_	_
11	den	den	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	_	SpaceAfter=No|LGloss=(jednotka_času)
12	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


