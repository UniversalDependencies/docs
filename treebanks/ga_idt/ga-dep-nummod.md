---
layout: base
title:  'Statistics of nummod in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `nummod`

This relation is universal.

359 nodes (1%) are attached to their parents as `nummod`.

226 instances of `nummod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.10027855153203.

The following 18 pairs of parts of speech are connected with `nummod`: <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-NUM.html">NUM</a></tt> (231; 64% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (48; 13% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (23; 6% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-NUM.html">NUM</a></tt> (12; 3% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (10; 3% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-NUM.html">NUM</a></tt> (10; 3% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="ga-pos-NUM.html">NUM</a></tt>-<tt><a href="ga-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="ga-pos-ADP.html">ADP</a></tt>-<tt><a href="ga-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="ga-pos-NUM.html">NUM</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="ga-pos-ADP.html">ADP</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ga-pos-AUX.html">AUX</a></tt>-<tt><a href="ga-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ga-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	Go	go	PART	Ad	PartType=Ad	2	mark:prt	_	_
2	tobann	tobann	ADJ	Adj	Degree=Pos	4	advmod	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	4	punct	_	_
4	bhris	bris	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
5	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	bord	bord	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
7	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	9	case	_	_
8	dhá	dó	NUM	Num	NumType=Card	9	nummod	_	_
9	leath	leath	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nummod	color:blue
1	Taisce	taisce	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
2	ábhair	ábhar	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	1	compound	_	_
3	léitheoireachta	léitheoireacht	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	2	compound	_	_
4	(11)	(11)	X	Item	_	2	nummod	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	B	B	X	Item	_	3	nummod	_	SpaceAfter=No
2	:	:	PUNCT	Punct	_	3	punct	_	_
3	Deir	abair	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
4	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	_
5	chairde	cara	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Plur	3	nsubj	_	_
6	liom	le	ADP	Prep	Number=Sing|Person=1	3	obl:prep	_	_
7	go	go	PART	Vb	PartType=Cmpl	8	mark:prt	_	_
8	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	3	ccomp	_	_
9	Mel	Mel	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	10	compound	_	_
10	Gibson	Gibson	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	nsubj	_	_
11	go	go	PART	Ad	PartType=Ad	12	mark:prt	_	_
12	hiontach	iontach	ADJ	Adj	Degree=Pos|Form=HPref	8	xcomp:pred	_	_
13	sa	i	ADP	Art	Number=Sing|PronType=Art	14	case	_	_
14	scannán	scannán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	obl	_	_
15	sin	sin	DET	Det	PronType=Dem	14	det	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


