---
layout: base
title:  'Statistics of csubj:pass in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-csubj.html">csubj</a></tt>.

474 nodes (0%) are attached to their parents as `csubj:pass`.

429 instances of `csubj:pass` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.57594936708861.

The following 11 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt> (334; 70% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt> (59; 12% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (45; 9% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (20; 4% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (10; 2% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	Doporučuje	doporučovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	1:expl:pass	LGloss=(zvr._zájmeno/částice)
3	dokoupit	dokoupit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	csubj:pass	1:csubj:pass	_
4	večeře	večeře	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	obj	3:obj	_
5	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	6:case	LId=za-1
6	1500	1500	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod	4:nummod	_
7	Kč	Kč	NOUN	NNFXX-----A----	Gender=Fem|Polarity=Pos	6	nmod	6:nmod	_
8	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	9:case	LId=na-1
9	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	7:nmod:na:acc	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:pass	color:blue
1	Vlastně	vlastně	ADV	Db-------------	_	3	cc	3:cc	LId=vlastně-2|LGloss=(totiž)
2	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	3:aux:pass	_
3	řečeno	řečený	ADJ	VsNS---XX-AP---	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No|LDeriv=říci
4	-	-	PUNCT	Z:-------------	_	7	punct	7:punct	_
5	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	7	obj	7:obj	_
6	vám	ty	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	7	obl:arg	7:obl:arg:dat	_
7	nedáme	dát	VERB	VB-P---1P-NA---	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj:pass	3:csubj:pass	_
8	a	a	CCONJ	J^-------------	_	12	cc	12:cc	LId=a-1
9	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	12	obj	12:obj	_
10	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	11:case	LId=od-1
11	vás	ty	PRON	PP-P2--2-------	Case=Gen|Number=Plur|Person=2|PronType=Prs	12	obl:arg	12:obl:arg:od:gen	_
12	nechcem	chtít	VERB	VB-P---1P-NA--1	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	3:csubj:pass|7:conj	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 csubj:pass	color:blue
1	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	LId=o-1
2	centrální	centrální	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	výrobě	výroba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	obl:arg	6:obl:arg:o:loc	_
4	tepla	teplo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	3	nmod	3:nmod:gen	LId=teplo-1
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	6:expl:pass	LGloss=(zvr._zájmeno/částice)
6	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
8	že	že	SCONJ	J,-------------	_	10	mark	10:mark	_
9	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
10	nejefektivnější	efektivní	ADJ	AAFS1----3A----	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing|Polarity=Pos	6	csubj:pass	6:csubj:pass	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


