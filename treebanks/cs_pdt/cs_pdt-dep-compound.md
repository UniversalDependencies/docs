---
layout: base
title:  'Statistics of compound in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `compound`

This relation is universal.

2800 nodes (0%) are attached to their parents as `compound`.

2093 instances of `compound` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.98214285714286.

The following 1 pairs of parts of speech are connected with `compound`: <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (2800; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 compound	color:blue
1	Prodej	prodej	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj:pass	6:nsubj:pass	LGloss=(akt_prodeje_zboží)
2	či	či	CCONJ	J^-------------	_	3	cc	3:cc	_
3	pronájem	pronájem	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	conj	1:conj|6:nsubj:pass	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	6:expl:pass	LGloss=(zvr._zájmeno/částice)
5	tedy	tedy	ADV	Db-------------	_	6	advmod	6:advmod	_
6	uskuteční	uskutečnit	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	dejme	dát	VERB	Vi-P---1--A----	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|VerbForm=Fin	6	dep	6:dep	_
8	tomu	ten	DET	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	7	obl:arg	7:obl:arg:dat	_
9	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	12	case	12:case	LId=k-1
10	1	1	NUM	C=-------------	NumForm=Digit|NumType=Card	12	compound	12:compound	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	10	punct	10:punct	_
12	3	3	NUM	C=-------------	NumForm=Digit|NumType=Card	6	obl	6:obl:k	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	12	punct	12:punct	_
14	1994	1994	NUM	C=-------------	NumForm=Digit|NumType=Card	12	compound	12:compound	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


