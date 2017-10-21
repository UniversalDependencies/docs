---
layout: base
title:  'Statistics of amod in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `amod`

This relation is universal.

708 nodes (3%) are attached to their parents as `amod`.

692 instances of `amod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.86581920903955.

The following 14 pairs of parts of speech are connected with `amod`: <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (609; 86% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (29; 4% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (27; 4% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (17; 2% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	Anseo	anseo	ADV	Loc	_	3	advmod	_	_
2	arís	arís	ADV	Gn	_	3	advmod	_	_
3	tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
4	dealbh	dealbh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	3	nsubj	_	_
5	mhór	mór	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	4	amod	_	_
6	de	de	ADP	Simp	_	7	case	_	_
7	Mhao	Mhao	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	xcomp:pred	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 amod	color:blue
1	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	teilifís	teilifís	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	nsubj	_	_
4	'	'	PUNCT	Punct	_	5	punct	_	SpaceAfter=No
5	mínádúrtha	mínádúrtha	ADJ	Adj	Degree=Pos	1	amod	_	SpaceAfter=No
6	'	'	PUNCT	Punct	_	5	punct	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 amod	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	mhaide	maide	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	nsubj	_	_
4	siúil	siúl	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	3	compound	_	_
5	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	6	case	_	_
6	láimh	lámh	NOUN	Noun	Case=Dat|Gender=Fem|Number=Sing	1	xcomp:pred	_	_
7	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	6	obl:prep	_	SpaceAfter=No
8	...	...	PUNCT	Punct	_	9	punct	_	_
9	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	ccomp	_	_
10	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	áit	áit	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	_
12	réabtha	réabtha	ADJ	Adj	VerbForm=Part	9	xcomp:pred	_	_
13	dóite	dóite	ADJ	Adj	VerbForm=Part	12	amod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


