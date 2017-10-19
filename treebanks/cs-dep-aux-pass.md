---
layout: base
title:  'Statistics of aux:pass in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="cs-dep-aux.html">aux</a></tt>.

6068 nodes (0%) are attached to their parents as `aux:pass`.

5946 instances of `aux:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25181278839815.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (6068; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	2	case	_	LId=na-1
2	požádání	požádání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	_	LDeriv=požádat
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
4	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	aux:pass	_	_
5	zaslán	zaslaný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	3	obj	_	_
6	seznam	seznam	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	_	_
7	firem	firma	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


