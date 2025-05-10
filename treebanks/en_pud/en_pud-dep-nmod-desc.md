---
layout: base
title:  'Statistics of nmod:desc in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `nmod:desc`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_pud-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_pud-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

41 nodes (0%) are attached to their parents as `nmod:desc`.

40 instances of `nmod:desc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1219512195122.

The following 2 pairs of parts of speech are connected with `nmod:desc`: <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (24; 59% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (17; 41% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 nmod:desc	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	_
2	contains	contain	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	4	det	4:det	_
4	monument	monument	NOUN	NN	Number=Sing	2	obj	2:obj	_
5	to	to	ADP	IN	_	6	case	6:case	_
6	Martin	Martin	PROPN	NNP	Number=Sing	4	nmod	4:nmod:to	_
7	Luther	Luther	PROPN	NNP	Number=Sing	6	flat	6:flat	_
8	King	King	PROPN	NNP	Number=Sing	6	flat	6:flat	SpaceAfter=No
9	,	,	PUNCT	,	_	6	punct	6:punct	_
10	Jr.	Jr.	PROPN	NNP	Number=Sing	6	nmod:desc	6:nmod:desc	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:desc	color:blue
1	Dominican	Dominican	ADJ	JJ	Degree=Pos	2	amod	2:amod	_
2	priest	priest	NOUN	NN	Number=Sing	3	nmod:desc	3:nmod:desc	_
3	Heinrich	Heinrich	PROPN	NNP	Number=Sing	6	nsubj	6:nsubj	_
4	Kramer	Kramer	PROPN	NNP	Number=Sing	3	flat	3:flat	_
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	6:cop	_
6	assistant	assistant	NOUN	NN	Number=Sing	0	root	0:root	_
7	to	to	ADP	IN	_	9	case	9:case	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	_
9	Archbishop	archbishop	NOUN	NN	Number=Sing	6	nmod	6:nmod:to	_
10	of	of	ADP	IN	_	11	case	11:case	_
11	Salzburg	Salzburg	PROPN	NNP	Number=Sing	9	nmod	9:nmod:of	SpaceAfter=No
12	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


