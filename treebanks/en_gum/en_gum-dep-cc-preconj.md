---
layout: base
title:  'Statistics of cc:preconj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-cc.html">cc</a></tt>.

51 nodes (0%) are attached to their parents as `cc:preconj`.

50 instances of `cc:preconj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92156862745098.

The following 6 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (27; 53% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (8; 16% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (7; 14% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (7; 14% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cc:preconj	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
2	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	cop	_	_
3	either	either	CCONJ	CC	_	6	cc:preconj	_	_
4	raised	raise	VERB	VBN	Tense=Past|VerbForm=Part	6	amod	_	_
5	coral	coral	NOUN	NN	Number=Sing	6	compound	_	_
6	limestone	limestone	NOUN	NN	Number=Sing	0	root	_	_
7	or	or	CCONJ	CC	_	9	cc	_	_
8	coral	coral	NOUN	NN	Number=Sing	9	compound	_	_
9	atolls	atoll	NOUN	NNS	Number=Plur	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc:preconj	color:blue
1	prospective	prospective	ADJ	JJ	Degree=Pos	2	amod	_	_
2	audiences	audience	NOUN	NNS	Number=Plur	3	nsubj	_	_
3	differ	differ	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	both	both	CCONJ	CC	_	6	cc:preconj	_	_
5	in	in	SCONJ	IN	_	6	mark	_	_
6	decoding	decode	VERB	VBG	VerbForm=Ger	3	advcl	_	_
7	ability	ability	NOUN	NN	Number=Sing	6	obj	_	_
8	and	and	CCONJ	CC	_	11	cc	_	_
9	in	in	ADP	IN	_	11	case	_	_
10	potential	potential	ADJ	JJ	Degree=Pos	11	amod	_	_
11	interest	interest	NOUN	NN	Number=Sing	5	conj	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc:preconj	color:blue
1	In	in	ADP	IN	_	3	case	_	_
2	existing	exist	VERB	VBG	VerbForm=Ger	3	amod	_	_
3	proposals	proposal	NOUN	NNS	Number=Plur	7	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
6	can	can	AUX	MD	VerbForm=Fin	7	aux	_	_
7	find	find	VERB	VB	VerbForm=Inf	0	root	_	_
8	both	both	CCONJ	DT	_	9	cc:preconj	_	_
9	generic	generic	ADJ	JJ	Degree=Pos	13	amod	_	_
10	and	and	CCONJ	CC	_	11	cc	_	_
11	specific	specific	ADJ	JJ	Degree=Pos	9	conj	_	_
12	mutation	mutation	NOUN	NN	Number=Sing	13	compound	_	_
13	operators	operator	NOUN	NNS	Number=Plur	7	obj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	7	punct	_	_

~~~


