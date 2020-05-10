---
layout: base
title:  'Statistics of det:nummod in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_pdt-dep-det-numgov.html">det:numgov</a></tt>.

564 nodes (0%) are attached to their parents as `det:nummod`.

552 instances of `det:nummod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37056737588652.

The following 4 pairs of parts of speech are connected with `det:nummod`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (542; 96% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (16; 3% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:nummod	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	LId=v-1
2	mnoha	mnoho	DET	Ca--6----------	Case=Loc|NumType=Card|PronType=Ind	3	det:nummod	3:det:nummod	LId=mnoho-1
3	směrech	směr	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	4	obl	4:obl:v:loc	_
4	dochází	docházet	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	6	case	6:case	LId=k-1
6	obratu	obrat	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	4	obl:arg	4:obl:arg:k:dat	SpaceAfter=No|LId=obrat-1|LGloss=(z_prodeje_zboží)
7	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det:nummod	color:blue
1	Často	často	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	3:advmod	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	3:expl:pass	LGloss=(zvr._zájmeno/částice)
3	dopravují	dopravovat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	5:case	LId=na-1
5	vzdálenost	vzdálenost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obl	3:obl:na:acc	LDeriv=vzdálit
6	několika	několik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	7	det:nummod	7:det:nummod	_
7	tisíc	tisíc	NUM	ClXS2----------	Case=Gen|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	8	nummod:gov	8:nummod:gov	LId=tisíc-1|LNumValue=1000
8	kilometrů	kilometr	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	5:nmod:gen	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 det:nummod	color:blue
1	právě	právě	ADV	Db-------------	_	3	advmod:emph	3:advmod:emph	_
2	proto	proto	CCONJ	J^-------------	_	3	cc	3:cc	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
3	patří	patřit	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	Lidové	lidový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	amod	5:amod	_
5	noviny	noviny	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	3:nsubj	LGloss=(tisk)
6	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	7:case	LId=k-1
7	těm	ten	DET	PDXP3----------	Case=Dat|Number=Plur|PronType=Dem	3	obl:arg	3:obl:arg:k:dat	_
8	několika	několik	DET	Ca--3----------	Case=Dat|NumType=Card|PronType=Ind	9	det:nummod	9:det:nummod	_
9	málo	málo	DET	Ca--3----------	Case=Dat|NumType=Card|PronType=Ind	7	det:nummod	7:det:nummod	LId=málo-1|LGloss=(málo_+_2._p.,_málo_peněz)
10	evropským	evropský	ADJ	AAIP3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	11	amod	11:amod	_
11	deníkům	deník	NOUN	NNIP3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur|Polarity=Pos	9	nmod	9:nmod:dat|16:obl	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
13	kde	kde	ADV	Db-------------	PronType=Int,Rel	16	advmod	11:ref	_
14	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	16	expl:pv	16:expl:pv	LGloss=(zvr._zájmeno/částice)
15	ještě	ještě	ADV	Db-------------	_	16	advmod	16:advmod	_
16	setkáváme	setkávat	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl:relcl	11:acl:relcl	LDeriv=setkat
17	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	19	case	19:case	LId=s-1
18	skutečnou	skutečný	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	19	amod	19:amod	_
19	debatou	debata	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	16	obl:arg	16:obl:arg:s:ins	SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


