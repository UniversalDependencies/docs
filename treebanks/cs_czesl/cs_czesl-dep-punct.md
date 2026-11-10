---
layout: base
title:  'Statistics of punct in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `punct`

This relation is universal.

1659 nodes (17%) are attached to their parents as `punct`.

1553 instances of `punct` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.16395418927064.

The following 13 pairs of parts of speech are connected with `punct`: <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (934; 56% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (314; 19% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (149; 9% instances), <tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (86; 5% instances), <tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (63; 4% instances), <tt><a href="cs_czesl-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (46; 3% instances), <tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (25; 2% instances), <tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (16; 1% instances), <tt><a href="cs_czesl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (9; 1% instances), <tt><a href="cs_czesl-pos-DET.html">DET</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (8; 0% instances), <tt><a href="cs_czesl-pos-PART.html">PART</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="cs_czesl-pos-X.html">X</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="cs_czesl-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_czesl-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 punct	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 punct	color:blue
1	3	3	NUM	C=-------------	NumForm=Digit|NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	_	_
3	Pobyt	pobyt	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	_
5	Praze	Praha	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	3	nmod	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	CO	co	PRON	PQ--4----------	Case=Acc|PronType=Int,Rel	5	nsubj	_	_
2	JE	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	PRO	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	_
4	MNĚ	já	PRON	Dg-------1A----	PronType=Prs	5	obl	_	_
5	NEJDŮLEŽITĚJŠÍ	důležitý	ADJ	AANS1----2A----	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
6	?	?	PUNCT	Z:-------------	_	5	punct	_	_

~~~


