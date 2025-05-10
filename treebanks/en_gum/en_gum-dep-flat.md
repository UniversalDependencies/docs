---
layout: base
title:  'Statistics of flat in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `flat`

This relation is universal.

2081 nodes (1%) are attached to their parents as `flat`.

2081 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29312830370014.

The following 25 pairs of parts of speech are connected with `flat`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1567; 75% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (194; 9% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (122; 6% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (68; 3% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (61; 3% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt> (9; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (7; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	John	John	PROPN	NNP	Number=Sing	0	root	0:root	Discourse=context-background:56->43:4:grf-ly-+sem-synym-324-350,424-425|Entity=(61-person-giv:inact-snsnn-cf1-1,2-coref-John_FitzGibbon%2C_2nd_Earl_of_Clare
2	FitzGibbon	Fitzgibbon	PROPN	NNP	Number=Sing	1	flat	1:flat	Entity=61)|SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	5:punct	_
4	2nd	2nd	ADJ	JJ	Degree=Pos|NumForm=Combi|NumType=Ord	5	amod	5:amod	Entity=(61-person-giv:act-snsnn-cf1-2,4-appos-John_FitzGibbon%2C_2nd_Earl_of_Clare
5	Earl	Earl	PROPN	NNP	Number=Sing	1	appos	1:appos	_
6	of	of	ADP	IN	_	7	case	7:case	_
7	Clare	Clare	PROPN	NNP	Number=Sing	5	nmod	5:nmod:of	Entity=61)

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	—	—	PUNCT	:	_	2	punct	2:punct	Discourse=attribution-positive:60->54:1:grf-dsh-629+sem-atsrc-630-637
2	NORTON	Norton	PROPN	NNP	Number=Sing	0	root	0:root	Entity=(102-abstract-new-nnnnn-cf3-1,2,4-coref(1-person-giv:act-sssss-cf2-1,2-coref-Emperor_Norton
3	I	I	NUM	CD	NumForm=Roman|NumType=Card	2	flat	2:flat	Entity=1)|SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	5:punct	_
5	Emperor	Emperor	PROPN	NNP	Number=Sing	2	appos	2:appos	Entity=(1-person-giv:act-sssss-cf2-1,4,5-appos-Emperor_Norton
6	of	of	ADP	IN	_	9	case	9:case	_
7	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Entity=(8-place-giv:act-snsss-cf1*-2,3-coref-United_States
8	United	Unite	VERB	NNP	Tense=Past|VerbForm=Part	9	amod	9:amod	MSeg=Unit-ed
9	States	State	PROPN	NNPS	Number=Plur	5	nmod	5:nmod:of	Entity=8)1)102)|MSeg=State-s|SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	File	file	NOUN	NN	Number=Sing	2	compound	2:compound	Discourse=context-background:2->9:3:grf-ly-|Entity=(4-abstract-new-nnnnn-cf2-2-coref
2	photo	photo	NOUN	NN	Number=Sing	0	root	0:root	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	interviewee	interviewee	NOUN	NN	Number=Sing	2	nmod	2:nmod:of	Entity=(5-person-new-nnnnn-cf1-1,2,3-coref-David_Titley|MSeg=interview-ee
5	David	David	PROPN	NNP	Number=Sing	4	flat	4:flat	MSeg=Dav-id
6	Titley	Titley	PROPN	NNP	Number=Sing	4	flat	4:flat	Entity=5)4)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


