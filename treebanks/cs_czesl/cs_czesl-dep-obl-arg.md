---
layout: base
title:  'Statistics of obl:arg in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="cs_czesl-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="cs_czesl-dep-obl-agent.html">obl:agent</a></tt>.

94 nodes (1%) are attached to their parents as `obl:arg`.

55 instances of `obl:arg` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.77659574468085.

The following 14 pairs of parts of speech are connected with `obl:arg`: <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (38; 40% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt> (15; 16% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (9; 10% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt> (7; 7% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt> (5; 5% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (3; 3% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="cs_czesl-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:arg	color:blue
1	Určitě	určitě	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	2	advmod	_	_
2	souhlasím	souhlasit	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	_	_
4	tou	ten	DET	PDFS7----------	Case=Ins|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	myšlenkou	myšlenka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing	2	obl:arg	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obl:arg	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	_
2	dnešním	dnešní	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	_	_
3	světě	svět	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	_	_
4	musím	muset	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	8	obl:arg	_	_
6	taky	také	ADV	Db-------------	Degree=Pos|Polarity=Pos	8	advmod	_	_
7	hodně	hodně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	_	_
8	považovat	považovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	4	xcomp	_	_
9	vzdělání	vzdělání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|VerbForm=Vnoun	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:arg	color:blue
1	Hodná	Hodný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Foreign=Yes|Gender=Fem|NameType=Com|Number=Sing|Polarity=Pos	0	root	_	_
2	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	_
3	čtění	čtení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|VerbForm=Vnoun	1	obl:arg	_	_
4	!?	!?	PUNCT	Z:-------------	_	3	punct	_	_

~~~


