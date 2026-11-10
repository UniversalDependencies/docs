---
layout: base
title:  'Statistics of acl in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="cs_czesl-dep-acl-relcl.html">acl:relcl</a></tt>.

5 nodes (0%) are attached to their parents as `acl`.

5 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6.

The following 2 pairs of parts of speech are connected with `acl`: <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt> (3; 60% instances), <tt><a href="cs_czesl-pos-DET.html">DET</a></tt>-<tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl	color:blue
1	Uplynul	uplynout	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	už	už	ADV	Db-------------	Degree=Pos|Polarity=Pos	4	advmod:emph	_	_
3	jeden	jeden	NUM	ClIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	4	nummod	_	_
4	semestr	semestr	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	obj	_	_
5	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	_	_
6	kdy	kdy	ADV	Db-------------	PronType=Int,Rel	7	advmod	_	_
7	studujun	studovat	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl	_	_
8	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	_
9	UK	UK	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	Je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
3	dobře	dobře	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	0	root	_	_
4	mít	mít	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	2	acl	_	_
5	životní	životní	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	cíl	cíl	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
7	?	?	PUNCT	Z:-------------	_	3	punct	_	_

~~~


