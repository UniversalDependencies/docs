---
layout: base
title:  'Statistics of parataxis in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `parataxis`

This relation is universal.

9 nodes (0%) are attached to their parents as `parataxis`.

8 instances of `parataxis` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 7 pairs of parts of speech are connected with `parataxis`: <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-PART.html">PART</a></tt> (2; 22% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt> (2; 22% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> (1; 11% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-X.html">X</a></tt> (1; 11% instances), <tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-AUX.html">AUX</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
3	skvelé	skvělý	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	5	punct	_	_
5	že	že	PART	J,-------------	_	3	parataxis	_	SpaceAfter=No
6	?	?	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	On	on	PRON	PPYS1--3-------	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	ma	mít	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	jden	jeden	NUM	ClYS1----------	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	4	nummod	_	_
4	sin	syn	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	obj	_	_
5	jmenuise	jmenovat	VERB	VB-S---3P-AA---	Aspect=Imp,Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	_
6	Adam	Adam	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	advcl:pred	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	Od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	_	_
2	roku	rok	NOUN	NNIS2-----A---1	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	obl	_	_
3	2009	2009	NUM	C=-------------	NumForm=Digit|NumType=Card	2	nummod	_	_
4	(	(	PUNCT	Z:-------------	_	5	punct	_	SpaceAfter=No
5	září	září	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	2	parataxis	_	SpaceAfter=No
6	)	)	PUNCT	Z:-------------	_	5	punct	_	_
7	žiju	žít	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	_
9	Praze	Praha	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


