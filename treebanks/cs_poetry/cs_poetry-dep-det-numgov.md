---
layout: base
title:  'Statistics of det:numgov in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="cs_poetry-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_poetry-dep-det-nummod.html">det:nummod</a></tt>.

3 nodes (0%) are attached to their parents as `det:numgov`.

2 instances of `det:numgov` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 2 pairs of parts of speech are connected with `det:numgov`: <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (2; 67% instances), <tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 det:numgov	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det:numgov	color:blue
1	A	a	CCONJ	J^-------------	_	6	advmod:emph	_	_
2	kolik	kolik	DET	C?--4----------	Case=Acc|NumType=Card|PronType=Int	4	det:numgov	_	_
3	slézt	slézt	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	6	xcomp	_	_
4	jich	on	PRON	PPXP2--3-------	Case=Gen|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	3	obj	_	_
5	Osud	osud	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
6	dopřeje	dopřát	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	?	?	PUNCT	Z:-------------	_	6	punct	_	_

~~~


