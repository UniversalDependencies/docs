---
layout: base
title:  'Statistics of root in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `root`

This relation is universal.

87913 nodes (6%) are attached to their parents as `root`.

87913 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.53803191791885.

The following 15 pairs of parts of speech are connected with `root`: [-pos/ROOT]()-[-pos/VERB]() (59199; 67% instances), [-pos/ROOT]()-[-pos/NOUN]() (11507; 13% instances), [-pos/ROOT]()-[-pos/ADJ]() (8930; 10% instances), [-pos/ROOT]()-[-pos/PROPN]() (5373; 6% instances), [-pos/ROOT]()-[-pos/NUM]() (1216; 1% instances), [-pos/ROOT]()-[-pos/ADV]() (884; 1% instances), [-pos/ROOT]()-[-pos/DET]() (364; 0% instances), [-pos/ROOT]()-[-pos/PRON]() (194; 0% instances), [-pos/ROOT]()-[-pos/PART]() (132; 0% instances), [-pos/ROOT]()-[-pos/PUNCT]() (34; 0% instances), [-pos/ROOT]()-[-pos/CCONJ]() (29; 0% instances), [-pos/ROOT]()-[-pos/SYM]() (18; 0% instances), [-pos/ROOT]()-[-pos/INTJ]() (17; 0% instances), [-pos/ROOT]()-[-pos/ADP]() (10; 0% instances), [-pos/ROOT]()-[-pos/SCONJ]() (6; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Potřebujete	potřebovat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	rychle	rychle	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	LDeriv=rychlý
3	poradit	poradit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	|	|	PUNCT	Z:-------------	_	2	punct	_	_
2	Rady	rada	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	LId=rada-1|LGloss=(př._dát_někomu_dobrou_radu)
3	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=na-1
4	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	2	nmod	_	_
5	|	|	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	Váš	tvůj	DET	PSIS4-P2-------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	4	det	_	LGloss=(přivlast.)
2	obecně	obecně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	LDeriv=obecný
3	platný	platný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	4	amod	_	_
4	dotaz	dotaz	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	7	obj	_	_
5	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	připraven	připravený	ADJ	VsYS---XX-AP---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	zodpovědět	zodpovědět	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	xcomp	_	_
8	spolupracovník	spolupracovník	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	_	_
9	Profitu	profit	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


