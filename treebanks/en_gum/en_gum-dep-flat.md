---
layout: base
title:  'Statistics of flat in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `flat`

This relation is universal.

1252 nodes (1%) are attached to their parents as `flat`.

1252 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30351437699681.

The following 14 pairs of parts of speech are connected with `flat`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1077; 86% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (114; 9% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (22; 2% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	John	John	PROPN	NNP	Number=Sing	0	root	_	Entity=(person-58
2	FitzGibbon	Fitzgibbon	PROPN	NNP	Number=Sing	1	flat	_	Entity=person-58)|SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	_	_
4	2nd	2nd	ADJ	JJ	Degree=Pos|NumType=Ord	5	amod	_	Entity=(person-58
5	Earl	Earl	PROPN	NNP	Number=Sing	1	appos	_	_
6	of	of	ADP	IN	_	7	case	_	_
7	Clare	Clare	PROPN	NNP	Number=Sing	5	nmod	_	Entity=person-58)

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	File	File	NOUN	NN	Number=Sing	2	compound	_	Entity=(object-4
2	photo	photo	NOUN	NN	Number=Sing	0	root	_	_
3	of	of	ADP	IN	_	4	case	_	_
4	interviewee	interviewee	NOUN	NN	Number=Sing	2	nmod	_	Entity=(person-5
5	David	David	PROPN	NNP	Number=Sing	4	flat	_	_
6	Titley	Titley	PROPN	NNP	Number=Sing	4	flat	_	Entity=object-4)person-5)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 flat	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	Entity=(person-67)
2	translated	translate	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	"	''	PUNCT	``	_	5	punct	_	SpaceAfter=No
4	cross-clause	cross-clause	ADJ	JJ	Degree=Pos	5	amod	_	Entity=(abstract-150
5	enjambment	enjambment	NOUN	NN	Number=Sing	2	obj	_	Entity=abstract-150)|SpaceAfter=No
6	"	''	PUNCT	''	_	5	punct	_	_
7	from	from	ADP	IN	_	11	case	_	_
8	Quilis	Quilis	PROPN	NNP	Number=Sing	11	nmod:poss	_	Entity=(person-130|SpaceAfter=No
9	’s	's	PART	POS	_	8	case	_	Entity=person-130)
10	"	''	PUNCT	``	_	11	punct	_	SpaceAfter=No
11	encabalgamiento	encabalgamiento	X	FW	_	5	nmod	_	Entity=(abstract-154
12	oracional	oracional	X	FW	_	11	flat	_	Entity=abstract-154)|SpaceAfter=No
13	"	''	PUNCT	''	_	11	punct	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


