---
layout: base
title:  'Statistics of det:nummod in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="cs-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs-dep-det-numgov.html">det:numgov</a></tt>.

601 nodes (0%) are attached to their parents as `det:nummod`.

554 instances of `det:nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55074875207987.

The following 8 pairs of parts of speech are connected with `det:nummod`: <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (542; 90% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-NOUN.html">NOUN</a></tt> (27; 4% instances), <tt><a href="cs-pos-NUM.html">NUM</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (16; 3% instances), <tt><a href="cs-pos-NUM.html">NUM</a></tt>-<tt><a href="cs-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="cs-pos-DET.html">DET</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="cs-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="cs-pos-DET.html">DET</a></tt>-<tt><a href="cs-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:nummod	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
2	mnoha	mnoho	DET	Ca--6----------	Case=Loc|NumType=Card|PronType=Ind	3	det:nummod	_	LId=mnoho-1
3	směrech	směr	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	4	obl	_	_
4	dochází	docházet	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	6	case	_	LId=k-1
6	obratu	obrat	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	4	obl:arg	_	SpaceAfter=No|LId=obrat-1|LGloss=(z_prodeje_zboží)
7	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 det:nummod	color:blue
1	Počítá	počítat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	i	i	CCONJ	J^-------------	_	5	advmod:emph	_	LId=i-1
4	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	5	case	_	LId=s-1
5	snížením	snížení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	1	obl:arg	_	LDeriv=snížit
6	počtu	počet	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	_	_
7	pracovníků	pracovník	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	6	nmod	_	_
8	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	LId=o-1
9	několik	několik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	10	det:numgov	_	_
10	stovek	stovka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	5	det:nummod	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det:nummod	color:blue
1	Často	často	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	dopravují	dopravovat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=na-1
5	vzdálenost	vzdálenost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obl	_	LDeriv=vzdálit
6	několika	několik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	7	det:nummod	_	_
7	tisíc	tisíc	NUM	ClXS2----------	Case=Gen|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	8	nummod:gov	_	LId=tisíc-1|LNumValue=1000
8	kilometrů	kilometr	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


