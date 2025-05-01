---
layout: base
title:  'Statistics of det:nummod in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_pdt-dep-det-numgov.html">det:numgov</a></tt>.

120 nodes (0%) are attached to their parents as `det:nummod`.

119 instances of `det:nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39166666666667.

The following 2 pairs of parts of speech are connected with `det:nummod`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (115; 96% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (5; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:nummod	color:blue
1	Zahrnul	zahrnout	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
2	jste	být	AUX	VB-P---2P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	mne	já	PRON	PP-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obj	1:obj	Bridge=cmpr9410019c89<cmpr9410019c28:subset|Entity=(cmpr9410019c28--1-gstype:spec)|Functor=1:ADDR
4	mnoha	mnoho	DET	Ca--7----------	Case=Ins|NumType=Card|PronType=Ind	5	det:nummod	5:det:nummod	Entity=(cmpr9410019c72--2-gstype:spec|Functor=5:RSTR|LId=mnoho-1
5	profesemi	profese	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur	1	obl:arg	1:obl:arg:ins	Entity=cmpr9410019c72)|Functor=1:PAT|SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:nummod	color:blue
1	Přitom	přitom	ADV	Db-------------	_	10	advmod	10:advmod	_
2	obě	oba	NUM	CnHP1----------	Case=Nom|Gender=Fem,Neut|Number=Plur|NumForm=Word|NumType=Card	3	nummod	3:nummod	LNumValue=2
3	veličiny	veličina	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	10	nsubj	10:nsubj	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	10:expl:pv	LGloss=(zvr._zájmeno/částice)
5	během	během	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	9:case	_
6	posledních	poslední	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	_
7	několika	několik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	8	det:nummod	8:det:nummod	_
8	miliard	miliarda	NUM	CzFP2----------	Case=Gen|Gender=Fem|Number=Plur|NumType=Card	9	nummod:gov	9:nummod:gov	LNumValue=1000000000
9	let	léta	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	10	obl	10:obl:během:gen	_
10	měnily	měnit	VERB	VpTP----R-AAI--	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
11	drasticky	drasticky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	10	advmod	10:advmod	SpaceAfter=No|LDeriv=drastický
12	.	.	PUNCT	Z:-------------	_	10	punct	10:punct	_

~~~


