---
layout: base
title:  'Statistics of csubj:pass in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="cs-dep-csubj.html">csubj</a></tt>.

456 nodes (0%) are attached to their parents as `csubj:pass`.

412 instances of `csubj:pass` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.56798245614035.

The following 11 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-VERB.html">VERB</a></tt> (334; 73% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-VERB.html">VERB</a></tt> (59; 13% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (33; 7% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-NOUN.html">NOUN</a></tt> (20; 4% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	Doporučuje	doporučovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	dokoupit	dokoupit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	csubj:pass	_	_
4	večeře	večeře	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	obj	_	_
5	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	_	LId=za-1
6	1500	1500	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod	_	_
7	Kč	Kč	NOUN	NNFXX-----A----	Gender=Fem|Polarity=Pos	6	nmod	_	_
8	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=na-1
9	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:pass	color:blue
1	Vlastně	vlastně	ADV	Db-------------	_	3	cc	_	LId=vlastně-2|LGloss=(totiž)
2	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	_	_
3	řečeno	řečený	ADJ	VsNS---XX-AP---	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	-	-	PUNCT	Z:-------------	_	7	punct	_	_
5	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	7	obj	_	_
6	vám	ty	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	7	iobj	_	_
7	nedáme	dát	VERB	VB-P---1P-NA---	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj:pass	_	_
8	a	a	CCONJ	J^-------------	_	12	cc	_	LId=a-1
9	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	12	obj	_	_
10	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	_	LId=od-1
11	vás	ty	PRON	PP-P2--2-------	Case=Gen|Number=Plur|Person=2|PronType=Prs	12	obl:arg	_	_
12	nechcem	chtít	VERB	VB-P---1P-NA--1	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 csubj:pass	color:blue
1	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=o-1
2	centrální	centrální	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	_
3	výrobě	výroba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	obl:arg	_	_
4	tepla	teplo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	3	nmod	_	LId=teplo-1
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	_	LGloss=(zvr._zájmeno/částice)
6	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	10	punct	_	_
8	že	že	SCONJ	J,-------------	_	10	mark	_	_
9	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	nejefektivnější	efektivní	ADJ	AAFS1----3A----	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing|Polarity=Pos	6	csubj:pass	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


