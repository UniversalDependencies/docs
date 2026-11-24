---
layout: base
title:  'Statistics of expl:pass in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `expl:pass`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_czesl-dep-expl-pv.html">expl:pv</a></tt>.

15 nodes (0%) are attached to their parents as `expl:pass`.

12 instances of `expl:pass` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46666666666667.

The following 2 pairs of parts of speech are connected with `expl:pass`: <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt> (14; 93% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl:pass	color:blue
1	Jak	jak	ADV	Db-------------	PronType=Int,Rel	5	advmod	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	_	_
3	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	_
4	nás	já	PRON	PP-P2--1-------	Case=Gen|Number=Plur|Person=1|PronType=Prs	5	obl	_	_
5	slaví	slavit	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	Vánoce	vánoce	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	5	nsubj:pass	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl:pass	color:blue
1	Zvedni	Zvedni	ADV	Db-------------	Degree=Pos|Polarity=Pos	5	case	_	_
2	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	_	_
3	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	det	_	_
4	svoje	svůj	DET	P8NS4----------	Case=Acc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	_
5	nářadí	nářadí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	0	root	_	_
6	sám	samý	DET	PLYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp|Variant=Short	5	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


