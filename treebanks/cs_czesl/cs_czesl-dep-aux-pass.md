---
layout: base
title:  'Statistics of aux:pass in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="cs_czesl-dep-aux.html">aux</a></tt>.

13 nodes (0%) are attached to their parents as `aux:pass`.

13 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15384615384615.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-AUX.html">AUX</a></tt> (13; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	_	_
2	mne	já	PRON	PP-S2--1-------	Case=Gen|Number=Sing|Person=1|PronType=Prs	5	obl	_	_
3	by	být	AUX	Vc-------------	Aspect=Imp|Mood=Cnd|VerbForm=Fin	5	aux	_	_
4	auta	auto	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur	5	nsubj:pass	_	_
5	měla	mít	VERB	VpQW---XR-AA---	Aspect=Imp|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	7	aux:pass	_	_
7	zakázána	zakázaný	ADJ	VsQW---XX-AP---	Aspect=Perf|Case=Nom|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	5	xcomp	_	_
8	alespoň	alespoň	ADV	Db-------------	Degree=Pos|Polarity=Pos	11	advmod:emph	_	_
9	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	11	case	_	_
10	velkých	velký	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	11	amod	_	_
11	městech	město	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Number=Plur	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


