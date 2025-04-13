---
layout: base
title:  'Statistics of det:nummod in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="cs_poetry-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_poetry-dep-det-numgov.html">det:numgov</a></tt>.

3 nodes (0%) are attached to their parents as `det:nummod`.

2 instances of `det:nummod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `det:nummod`: <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 det:nummod	color:blue
1	Praporů	prapor	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	obj	_	_
2	tolik	tolik	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Dem	1	det:numgov	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	4	punct	_	_
4	tolik	tolik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem	2	parataxis	_	_
5	viděl	vidět	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	jsem	být	AUX	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
7	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	_
8	žerdích	žerd	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	5	obl	_	_
9	tolika	tolik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	8	det:nummod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


