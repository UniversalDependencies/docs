---
layout: base
title:  'Statistics of cop in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `cop`

This relation is universal.

41 nodes (1%) are attached to their parents as `cop`.

32 instances of `cop` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.65853658536585.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (18; 44% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (16; 39% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (4; 10% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Že	že	SCONJ	J,-------------	_	3	mark	_	SpacesBefore=\s
2	nejsem	být	AUX	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	čist	čist	ADJ	ACYS------A----	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	5	acl	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	obj	_	_
6	dobře	dobře	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	_	_
7	vím	vědět	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	13	punct	_	_
9	leč	leč	CCONJ	J,-------------	_	13	cc	_	_
10	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	_	_
11	hříchu	hřích	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	12	obl	_	_
12	žít	žít	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	13	xcomp	_	_
13	neumím	umět	VERB	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
2	bude	být	AUX	VB-S---3F-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	4	cop	_	_
3	člověka	člověk	NOUN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	nmod	_	_
4	chvíle	chvíle	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	_
5	největší	velký	ADJ	AAFS1----3A----	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	A	a	CCONJ	J^-------------	_	5	cc	_	_
2	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	_	_
3	je	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	konečně	konečně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	_	_
5	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	_
6	nejsmutnější	smutný	ADJ	AANS1----3A----	Case=Nom|Degree=Sup|Gender=Neut|Number=Sing|Polarity=Pos	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	5	punct	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	5	punct	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


