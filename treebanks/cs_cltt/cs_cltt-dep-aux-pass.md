---
layout: base
title:  'Statistics of aux:pass in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="cs_cltt-dep-aux.html">aux</a></tt>.

130 nodes (0%) are attached to their parents as `aux:pass`.

129 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86153846153846.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (130; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Průběh	průběh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
2	používání	používání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	1	nmod	1:nmod:gen	_
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	být	být	AUX	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	5	aux:pass	5:aux:pass	_
5	vyjádřen	vyjádřený	ADJ	VsYS---XX-AP---	Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	3	ccomp	3:ccomp	LDeriv=vyjádřit
6	i	i	CCONJ	J^-------------	_	7	advmod:emph	7:advmod:emph	LId=i-1
7	jinak	jinak	ADV	Db-------------	_	5	advmod	5:advmod	_
8	než	než	SCONJ	J,-------------	_	10	mark	10:mark	LId=než-2
9	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	10	case	10:case	LId=v-1
10	vazbě	vazba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	7	dep	7:dep	LId=vazba-8
11	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	12:case	LId=na-1
12	čas	čas	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	nmod	10:nmod:na:acc	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
14	například	například	ADV	Db-------------	_	16	cc	16:cc	_
15	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	16	case	16:case	LId=na-1
16	výkony	výkon	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	12	appos	12:appos	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


