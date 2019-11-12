---
layout: base
title:  'Statistics of flat in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `flat`

This relation is universal.

1058 nodes (1%) are attached to their parents as `flat`.

1058 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29206049149338.

The following 10 pairs of parts of speech are connected with `flat`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (904; 85% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (112; 11% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (13; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	John	John	PROPN	NNP	Number=Sing	0	root	_	_
2	FitzGibbon	Fitzgibbon	PROPN	NNP	Number=Sing	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	_	_
4	2nd	2nd	ADJ	JJ	Degree=Pos|NumType=Ord	5	amod	_	_
5	Earl	Earl	PROPN	NNP	Number=Sing	1	appos	_	_
6	of	of	ADP	IN	_	7	case	_	_
7	Clare	Clare	PROPN	NNP	Number=Sing	5	nmod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	File	File	NOUN	NN	Number=Sing	2	compound	_	_
2	photo	photo	NOUN	NN	Number=Sing	0	root	_	_
3	of	of	ADP	IN	_	4	case	_	_
4	interviewee	interviewee	NOUN	NN	Number=Sing	2	nmod	_	_
5	David	David	PROPN	NNP	Number=Sing	4	flat	_	_
6	Titley	Titley	PROPN	NNP	Number=Sing	4	flat	_	SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	Michiel	Michiel	PROPN	NNP	Number=Sing	0	root	_	_
2	Cock	Cock	PROPN	NNP	Number=Sing	1	flat	_	_
3	m.p.cock@vu.nl	m.p.cock@vu.nl	PROPN	NNP	Number=Sing	1	list	_	_
4	Vrije	Vrije	X	FW	_	1	list	_	_
5	Universiteit	Universiteit	X	FW	_	4	flat	_	_
6	Amsterdam	Amsterdam	PROPN	NNP	Number=Sing	4	flat	_	SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	_
9	Netherlands	Netherlands	PROPN	NNPS	Number=Plur	1	list	_	_

~~~


