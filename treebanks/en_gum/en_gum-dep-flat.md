---
layout: base
title:  'Statistics of flat in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `flat`

This relation is universal.

1338 nodes (1%) are attached to their parents as `flat`.

1338 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28699551569507.

The following 14 pairs of parts of speech are connected with `flat`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1164; 87% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (113; 8% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (24; 2% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	John	John	PROPN	NNP	Number=Sing	0	root	0:root	Discourse=background:55->42|Entity=(person-61-John_FitzGibbon%2C_2nd_Earl_of_Clare
2	FitzGibbon	Fitzgibbon	PROPN	NNP	Number=Sing	1	flat	1:flat	Entity=person-61-John_FitzGibbon%2C_2nd_Earl_of_Clare)|SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	5:punct	_
4	2nd	2nd	ADJ	JJ	Degree=Pos|NumType=Ord	5	amod	5:amod	Entity=(person-61-John_FitzGibbon%2C_2nd_Earl_of_Clare
5	Earl	Earl	PROPN	NNP	Number=Sing	1	appos	1:appos	_
6	of	of	ADP	IN	_	7	case	7:case	_
7	Clare	Clare	PROPN	NNP	Number=Sing	5	nmod	5:nmod:of	Entity=person-61-John_FitzGibbon%2C_2nd_Earl_of_Clare)

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	File	file	NOUN	NN	Number=Sing	2	compound	2:compound	Discourse=background:2->9|Entity=(abstract-4
2	photo	photo	NOUN	NN	Number=Sing	0	root	0:root	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	interviewee	interviewee	NOUN	NN	Number=Sing	2	nmod	2:nmod:of	Entity=(person-5-David_Titley
5	David	David	PROPN	NNP	Number=Sing	4	flat	4:flat	_
6	Titley	Titley	PROPN	NNP	Number=Sing	4	flat	4:flat	Entity=abstract-4)person-5-David_Titley)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 flat	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=background:81->78|Entity=(person-71)
2	translated	translate	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	"	''	PUNCT	``	_	5	punct	5:punct	SpaceAfter=No
4	cross-clause	cross-clause	ADJ	JJ	Degree=Pos	5	amod	5:amod	Entity=(abstract-152
5	enjambment	enjambment	NOUN	NN	Number=Sing	2	obj	2:obj	Entity=abstract-152)|SpaceAfter=No
6	"	''	PUNCT	''	_	5	punct	5:punct	_
7	from	from	ADP	IN	_	11	case	11:case	_
8	Quilis	Quilis	PROPN	NNP	Number=Sing	11	nmod:poss	11:nmod:poss	Entity=(abstract-152(person-135
9	’s	's	PART	POS	_	8	case	8:case	Entity=person-135)
10	"	''	PUNCT	``	_	11	punct	11:punct	SpaceAfter=No
11	encabalgamiento	encabalgamiento	X	FW	_	5	nmod	5:nmod:from	_
12	oracional	oracional	X	FW	_	11	flat	11:flat	Entity=abstract-152)|SpaceAfter=No
13	"	''	PUNCT	''	_	11	punct	11:punct	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


