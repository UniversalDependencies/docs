---
layout: base
title:  'Statistics of det:nummod in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="cs_czesl-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_czesl-dep-det-numgov.html">det:numgov</a></tt>.

2 nodes (0%) are attached to their parents as `det:nummod`.

2 instances of `det:nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `det:nummod`: <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det:nummod	color:blue
1	Seznámil	seznámit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	_
4	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	6	case	_	_
5	zajímavými	zajímavý	ADJ	AAMP7----1A----	Animacy=Anim|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	6	amod	_	_
6	lidmi	člověk	NOUN	NNMP7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	1	obl	_	_
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	_
8	mnoha	mnoho	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	9	det:nummod	_	_
9	zemí	země	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


