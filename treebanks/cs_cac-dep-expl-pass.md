---
layout: base
title:  'Statistics of expl:pass in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `expl:pass`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_cac-dep-expl-pv.html">expl:pv</a></tt>.

2093 nodes (0%) are attached to their parents as `expl:pass`.

1688 instances of `expl:pass` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87816531294792.

The following 5 pairs of parts of speech are connected with `expl:pass`: <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (2081; 99% instances), <tt><a href="cs_cac-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pass	color:blue
1	Provádí	provádět	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	přípravné	přípravný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	4	amod	_	_
4	práce	práce	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	1	nsubj:pass	_	SpaceAfter=No|LGloss=(jako_činnost_i_místo)
5	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 6 expl:pass	color:blue
1	Vědí	vědět	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	13	punct	_	_
3	že	že	SCONJ	J,-------------	_	13	mark	_	_
4	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=pro-1
5	ně	on	PRON	P5XP4--3-------	Case=Acc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	13	obl	_	_
6	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	13	expl:pass	_	LGloss=(zvr._zájmeno/částice)
7	dřevěná	dřevěný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	_	_
8	bouda	bouda	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	13	nsubj:pass	_	_
9	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	_	LId=z-1
10	koloušů	kolouš	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	8	nmod	_	_
11	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	_	LId=na-1
12	šachtě	šachta	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	13	obl	_	_
13	*	*	SYM	Xx-------------	Abbr=Yes	1	obj	_	_
14	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 expl:pass	color:blue
1	Keramické	keramický	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
2	dlaždice	dlaždice	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj:pass	_	_
3	jemnozrnné	jemnozrnný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	_	LGloss=(zvr._zájmeno/částice)
5	vyrábějí	vyrábět	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	_	LId=z-1
7	jílů	jíl	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	obl:arg	_	_
8	bíle	bíle	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	12	advmod	_	LDeriv=bílý
9	nebo	nebo	CCONJ	J^-------------	_	10	cc	_	_
10	barevně	barevně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	conj	_	LDeriv=barevný
11	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pass	_	LGloss=(zvr._zájmeno/částice)
12	pálících	pálící	ADJ	AGIP2-----A----	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	7	amod	_	SpaceAfter=No|LDeriv=pálit
13	,	,	PUNCT	Z:-------------	_	15	punct	_	_
14	dalšími	další	ADJ	AAFP7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	15	amod	_	_
15	složkami	složka	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	5	conj	_	_
16	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	_	_
17	kaolínové	kaolínový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	18	amod	_	_
18	suroviny	surovina	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	15	nsubj	_	SpaceAfter=No
19	,	,	PUNCT	Z:-------------	_	20	punct	_	_
20	taviva	tavivo	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	18	conj	_	_
21	a	a	CCONJ	J^-------------	_	22	cc	_	LId=a-1
22	barvy	barva	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	18	conj	_	SpaceAfter=No
23	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


