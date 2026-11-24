---
layout: base
title:  'Statistics of conj in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `conj`

This relation is universal.

8 nodes (0%) are attached to their parents as `conj`.

8 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 3 pairs of parts of speech are connected with `conj`: <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (5; 63% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Moncolske	Mongolsko	PROPN	NNNS1-----A----	Case=Nom|Gender=Neut|NameType=Geo|Number=Sing	0	root	_	_
2	souv	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	4	4	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod:gov	_	_
4	misto	město	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	_
5	18	18	NUM	C=-------------	NumForm=Digit|NumType=Card	6	nummod:gov	_	_
6	kraj	kraj	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 conj	color:blue
1	Oni	on	PRON	PPMP1--3-------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
2	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	dep	_	_
3	ušehni	všechen	DET	PLMP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	1	nsubj	_	_
4	studovat	studovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	0	root	_	_
5	zakladní	základní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	_	_
6	škola	škola	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	4	obj	_	_
7	ješte	ještě	ADV	Db-------------	Degree=Pos|Polarity=Pos	9	advmod:emph	_	_
8	visoky	vysoký	ADJ	AAFP1----1A---6	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|Style=Coll	9	amod	_	_
9	škola	škola	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 14 conj	color:blue
1	P	P	NOUN	NNNXX-----A----	Gender=Neut	5	dep	_	_
2	–	–	PUNCT	Z:-------------	_	1	punct	_	_
3	Není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	_
5	co	co	PRON	PQ--4----------	Case=Acc|PronType=Int,Rel	0	root	_	_
6	,	,	PUNCT	Z:-------------	_	10	punct	_	_
7	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	_
8	takovu	takový	DET	PDFS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	10	det	_	_
9	krasnu	krásný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	_	_
10	ženu	žena	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	14	obl:arg	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	14	punct	_	_
12	moc	moc	ADV	Ca--X----------	Degree=Pos|Polarity=Pos	13	advmod	_	_
13	rád	rád	ADJ	ACYS------A----	Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	14	advcl:pred	_	_
14	pomoc	pomoci	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


