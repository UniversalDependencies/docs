---
layout: base
title:  'Statistics of det in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="cs_czesl-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="cs_czesl-dep-det-nummod.html">det:nummod</a></tt>.

300 nodes (3%) are attached to their parents as `det`.

298 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30333333333333.

The following 6 pairs of parts of speech are connected with `det`: <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (289; 96% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="cs_czesl-pos-DET.html">DET</a></tt>-<tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Určitě	určitě	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	2	advmod	_	_
2	souhlasím	souhlasit	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	_	_
4	tou	ten	DET	PDFS7----------	Case=Ins|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	myšlenkou	myšlenka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing	2	obl:arg	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	_
2	některých	některý	DET	PZXP6----------	Case=Loc|Number=Plur|PronType=Ind	3	det	_	_
3	velkých	velký	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	4	amod	_	_
4	městech	město	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Number=Plur	5	obl	_	_
5	mají	mít	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	metro	metro	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	_
2	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	3	det	_	_
3	vše	všechen	DET	PLNS4---------1	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	5	det	_	_
4	člověk	člověk	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
5	nemusí	muset	VERB	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	jezdit	jezdit	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	5	xcomp	_	_
7	stovky	stovka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	9	nmod	_	_
8	kilometrů	kilometr	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
9	daleko	daleko	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


