---
layout: base
title:  'Statistics of ccomp in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `ccomp`

This relation is universal.

11 nodes (0%) are attached to their parents as `ccomp`.

10 instances of `ccomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.45454545454545.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (3; 27% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt> (2; 18% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (2; 18% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-INTJ.html">INTJ</a></tt> (2; 18% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt> (2; 18% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	Myslím	myslit	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	6	punct	_	_
3	že	že	SCONJ	J,-------------	_	6	mark	_	_
4	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	_	_
5	každý	každý	DET	AAIS4----1A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos|PronType=Tot	6	amod	_	_
6	jazyk	jazyk	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	ccomp	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	Jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
2	jista	jistý	ADJ	ACQW------A----	Case=Nom|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	9	punct	_	_
4	že	že	SCONJ	J,-------------	_	9	mark	_	_
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	6	case	_	_
6	většině	většina	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	9	obl	_	_
7	těchto	tento	DET	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	8	det	_	_
8	států	stát	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	_
9	pobyvam	pobývat	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Přesně	přesně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	2	advmod	_	_
2	nevím	vědět	VERB	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	co	co	PRON	PQ--4----------	Case=Acc|PronType=Int,Rel	6	nsubj	_	_
4	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	_
5	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	6	obl	_	_
6	nejdůležitější	důležitý	ADJ	AAIS4----3A----	Animacy=Inan|Case=Acc|Degree=Sup|Gender=Masc|Number=Sing|Polarity=Pos	2	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


