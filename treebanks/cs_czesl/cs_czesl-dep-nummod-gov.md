---
layout: base
title:  'Statistics of nummod:gov in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="cs_czesl-dep-nummod.html">nummod</a></tt>.

96 nodes (1%) are attached to their parents as `nummod:gov`.

89 instances of `nummod:gov` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29166666666667.

The following 2 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> (95; 99% instances), <tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod:gov	color:blue
1	Je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	my	já	PRON	PP-P1--1-------	Case=Nom|Number=Plur|Person=1|PronType=Prs	1	iobj	_	_
3	33	33	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod:gov	_	_
4	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	1	nsubj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nummod:gov	color:blue
1	Mám	mít	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	jích	on	PRON	PPXP2--3-------	Case=Gen|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	1	obj	_	_
3	totiž	totiž	ADV	Db-------------	Degree=Pos|Polarity=Pos	1	advmod	_	_
4	pět	pět	NUM	Cn-S1----------	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	2	nummod:gov	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


