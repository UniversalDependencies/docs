---
layout: base
title:  'Statistics of iobj in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `iobj`

This relation is universal.

31 nodes (0%) are attached to their parents as `iobj`.

20 instances of `iobj` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.41935483870968.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt> (13; 42% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (8; 26% instances), <tt><a href="cs_czesl-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt> (6; 19% instances), <tt><a href="cs_czesl-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 iobj	color:blue
1	Nechce	chtít	VERB	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	_
3	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	1	iobj	_	SpaceAfter=No
4	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 iobj	color:blue
1	Proč	proč	ADV	Db-------------	PronType=Int,Rel	2	advmod	_	_
2	mám	mít	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ráda	rád	ADJ	ACQW------A----	Case=Nom|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	2	xcomp	_	_
4	Českou	český	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	5	amod	_	_
5	republiku	republika	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	2	iobj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	my	já	PRON	PP-P1--1-------	Case=Nom|Number=Plur|Person=1|PronType=Prs	1	iobj	_	_
3	33	33	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod:gov	_	_
4	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	1	nsubj	_	_

~~~


