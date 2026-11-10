---
layout: base
title:  'Statistics of appos in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `appos`

This relation is universal.

5 nodes (0%) are attached to their parents as `appos`.

5 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.4.

The following 2 pairs of parts of speech are connected with `appos`: <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	Tam	tam	ADV	Db-------------	PronType=Dem	2	advmod	_	_
2	bydlí	bydlet	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	hodně	hodně	DET	Dg-------1A----	Polarity=Pos|PronType=Ind	4	det:numgov	_	_
4	lidí	člověk	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	2	nsubj	_	_
5	asi	asi	ADV	TT-------------	Degree=Pos|Polarity=Pos	7	advmod:emph	_	CzechParticle=Yes
6	jeden	jeden	NUM	ClIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	7	nummod	_	_
7	million	milión	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	appos	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 appos	color:blue
1	Moje	můj	DET	PSHS1-S1-------	Case=Nom|Gender=Fem,Neut|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	2	det	_	_
2	rodina	rodina	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	bydlí	bydlet	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	_
5	Medellínu	Medellín	PROPN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	3	obl	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	_	_
7	druhém	druhý	ADJ	CrIS6----------	Case=Loc|Gender=Neut|Number=Sing|NumType=Ord	10	amod	_	_
8	nej	velký	ADJ	AAIS6----3A----	Case=Loc|Degree=Sup|Gender=Neut|Number=Sing|Polarity=Pos|Typo=Yes	10	amod	_	CorrectForm=největším
9	větším	_	X	AAIS6----3A----	_	8	goeswith	_	_
10	městě	město	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing	5	appos	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	_	_
12	Kolumbii	Kolumbie	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	10	nmod	_	_

~~~


