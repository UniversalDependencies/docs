---
layout: base
title:  'Statistics of nummod in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="cs_czesl-dep-nummod-gov.html">nummod:gov</a></tt>.

115 nodes (1%) are attached to their parents as `nummod`.

97 instances of `nummod` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52173913043478.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> (101; 88% instances), <tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="cs_czesl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	_	_
2	Jemenu	Jemen	PROPN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|NameType=Geo|Number=Sing	4	obl	_	_
3	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	jela	jet	VERB	VpQW---XR-AA---	Aspect=Imp|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	7	case	_	_
6	dvěma	dva	NUM	ClXP7----------	Case=Ins|Number=Plur|NumForm=Word|NumType=Card	7	nummod	_	_
7	kamarádkami	kamarádka	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur	4	obl	_	_
8	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	9	case	_	_
9	studií	studium	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	5	5	NUM	C=-------------	NumForm=Digit|NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	_	_
3	Evropa	Evropa	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nummod	color:blue
1	Budu	být	AUX	VB-S---1F-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	2	aux	_	_
2	vstavat	vstávat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	0	root	_	_
3	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	_
4	4:00	4:00	NUM	C=-------------	NumForm=Digit|NumType=Card	2	nummod	_	_
5	´	´	SYM	Z:-------------	_	4	nmod	_	_
6	Ráno	Raný	ADV	Db-------------	Degree=Pos|Polarity=Pos	2	advmod	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


