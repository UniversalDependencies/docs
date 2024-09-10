---
layout: base
title:  'Statistics of csubj:pass in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-csubj.html">csubj</a></tt>.

99 nodes (0%) are attached to their parents as `csubj:pass`.

92 instances of `csubj:pass` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.35353535353535.

The following 8 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt> (69; 70% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt> (12; 12% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (8; 8% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	Doporučuje	doporučovat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	1:expl:pass	LGloss=(zvr._zájmeno/částice)
3	dokoupit	dokoupit	VERB	Vf--------A-P--	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	csubj:pass	1:csubj:pass	Functor=1:PAT
4	večeře	večeře	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	obj	3:obj	Functor=3:PAT
5	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	6:case	_
6	1500	1500	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod	4:nummod	Functor=4:RSTR
7	Kč	Kč	NOUN	BNXXX-----A----	Abbr=Yes|Polarity=Pos	6	nmod	6:nmod	LGloss=(koruna_česká)|Functor=6:EXT
8	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	9:case	Entity=(cmpr9415015c24--2-gstype:gen|LId=na-1
9	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	7:nmod:na:acc	Entity=cmpr9415015c24)|Functor=7:REG|SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:pass	color:blue
1	Vlastně	vlastně	ADV	TT-------------	_	3	cc	3:cc	LId=vlastně-2|Functor=3:ATT
2	bylo	být	AUX	VpNS----R-AAI--	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	3:aux:pass	_
3	řečeno	řečený	ADJ	VsNS----X-APP--	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No|LDeriv=říci|Functor=0:PRED
4	-	-	PUNCT	Z:-------------	_	7	punct	7:punct	_
5	nic	nic	PRON	PY--4----------	Case=Acc|PronType=Neg	7	obj	7:obj	Functor=7:PAT
6	vám	vy	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	7	obl:arg	7:obl:arg:dat	Entity=(ln9420959c5--1-gstype:spec)|Functor=7:ADDR
7	nedáme	dát	VERB	VB-P---1P-NAP--	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj:pass	3:csubj:pass	LId=dát-1|Functor=3:EFF
8	a	a	CCONJ	J^-------------	_	12	cc	12:cc	LId=a-1|Functor=12:CONJ
9	nic	nic	PRON	PY--4----------	Case=Acc|PronType=Neg	12	obj	12:obj	Functor=12:PAT
10	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	11:case	Entity=(ln9420959c5--2-gstype:spec|LId=od-1
11	vás	vy	PRON	PP-P2--2-------	Case=Gen|Number=Plur|Person=2|PronType=Prs	12	obl:arg	12:obl:arg:od:gen	Entity=ln9420959c5)|Functor=12:ORIG
12	nechcem	chtít	VERB	VB-P---1P-NAI-6	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	3:csubj:pass|7:conj	SpaceAfter=No|Functor=7:EFF
13	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 csubj:pass	color:blue
1	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	Bridge=cmpr9410049c37<cmpr9410049c36:subset|Entity=(cmpr9410049c36--3-gstype:gen|LId=o-1
2	centrální	centrální	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	3:amod	Functor=3:RSTR
3	výrobě	výroba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	obl:arg	6:obl:arg:o:loc	Functor=6:PAT
4	tepla	teplo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	3	nmod	3:nmod:gen	Entity=(cmpr9410049c2--1-gstype:gen)cmpr9410049c36)|Functor=3:PAT|LId=teplo-1
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	6:expl:pass	LGloss=(zvr._zájmeno/částice)
6	říká	říkat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Functor=0:PRED
7	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
8	že	že	SCONJ	J,-------------	_	10	mark	10:mark	LId=že-1
9	je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	Functor=10:EFF
10	nejefektivnější	efektivní	ADJ	AAFS1----3A----	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing|Polarity=Pos	6	csubj:pass	6:csubj:pass	SpaceAfter=No|Functor=6:PAT
11	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


