---
layout: base
title:  'Statistics of compound in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `compound`

This relation is universal.

42 nodes (0%) are attached to their parents as `compound`.

33 instances of `compound` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.52380952380952.

The following 1 pairs of parts of speech are connected with `compound`: <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (42; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Vždyť	vždyť	CCONJ	J^-------------	_	7	cc	7:cc	_
2	devět	devět	NUM	Cn-S1----------	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	4	nummod:gov	4:nummod:gov	LNumValue=9
3	tisíc	tisíc	NUM	ClXS2----------	Case=Gen|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	2	compound	2:compound	LId=tisíc-1|LNumValue=1000
4	hektarů	hektar	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	7	nsubj	7:nsubj|9:nsubj	_
5	už	už	ADV	Db-------------	_	7	cc	7:cc	_
6	něco	něco	PRON	PZ--4----------	Animacy=Inan|Case=Acc|PronType=Ind	7	obj	7:obj|9:obj	_
7	znamená	znamenat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	a	a	CCONJ	J^-------------	_	9	cc	9:cc	LId=a-1
9	vyžaduje	vyžadovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	0:root|7:conj	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


