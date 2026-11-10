---
layout: base
title:  'Statistics of amod in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `amod`

This relation is universal.

734 nodes (7%) are attached to their parents as `amod`.

693 instances of `amod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11852861035422.

The following 14 pairs of parts of speech are connected with `amod`: <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (666; 91% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (20; 3% instances), <tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (20; 3% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_czesl-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Moje	můj	DET	PSHS1-S1-------	Case=Nom|Gender=Fem,Neut|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	3	det	_	_
2	pracovní	pracovní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	_
3	zkušenosti	zkušenost	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Myslím	myslit	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	6	punct	_	_
3	že	že	SCONJ	J,-------------	_	6	mark	_	_
4	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	_	_
5	každý	každý	DET	AAIS4----1A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos|PronType=Tot	6	amod	_	_
6	jazyk	jazyk	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	ccomp	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 amod	color:blue
1	S	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	2	case	_	_
2	maminkou	maminka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing	5	obl:arg	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	2	punct	_	_
4	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	přijel	přijet	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	_
7	českého	český	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	_	_
8	Krumlova	Krumlov	PROPN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|NameType=Geo|Number=Sing	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


