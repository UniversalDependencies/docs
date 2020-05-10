---
layout: base
title:  'Statistics of aux:pass in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-aux.html">aux</a></tt>.

5981 nodes (0%) are attached to their parents as `aux:pass`.

5860 instances of `aux:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.23190101989634.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (5981; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	2	case	2:case	LId=na-1
2	požádání	požádání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	5:obl:na:acc	LDeriv=požádat
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LGloss=(mít_možnost_[něco_dělat])
4	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	aux:pass	5:aux:pass	_
5	zaslán	zaslaný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	3	obj	3:obj	LDeriv=zaslat
6	seznam	seznam	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj	_
7	firem	firma	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	6	nmod	6:nmod:gen	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


