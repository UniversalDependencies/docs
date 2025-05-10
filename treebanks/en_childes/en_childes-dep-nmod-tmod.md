---
layout: base
title:  'Statistics of nmod:tmod in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_childes-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_childes-dep-nmod-poss.html">nmod:poss</a></tt>.

21 nodes (0%) are attached to their parents as `nmod:tmod`.

14 instances of `nmod:tmod` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.85714285714286.

The following 4 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (18; 86% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="en_childes-pos-NUM.html">NUM</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_childes-pos-NUM.html">NUM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod:tmod	color:blue
1	A	a	DET	DT	_	2	det	2:det	_
2	lot	lot	NOUN	NN	_	0	root	0:root	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	things	thing	NOUN	NNS	_	2	nmod	2:nmod:of	_
5	today	today	NOUN	NN	_	2	nmod:tmod	2:nmod:tmod	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod:tmod	color:blue
1	Continuation	continuation	NOUN	NN	_	0	root	0:root	_
2	of	of	ADP	IN	_	3	case	3:case	_
3	lunch	lunch	NOUN	NN	_	1	nmod	1:nmod:of	_
4	August	August	PROPN	NNP	_	1	nmod:tmod	1:nmod:tmod	_
5	two	two	NUM	CD	_	4	flat	4:flat	_
6	four	four	NUM	CD	_	5	conj	4:flat|5:conj	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 nmod:tmod	color:blue
1	One	one	NUM	CD	_	0	root	0:root	_
2	for	for	ADP	IN	_	5	case	5:case	_
3	your	you	PRON	PRP$	_	5	nmod:poss	5:nmod:poss	_
4	milky	milky	ADJ	JJ	_	5	amod	5:amod	_
5	drink	drink	NOUN	NN	_	1	nmod	1:nmod:for	_
6	tomorrow	tomorrow	NOUN	NN	_	7	nmod:tmod	7:nmod:tmod	_
7	afternoon	afternoon	NOUN	NN	_	1	nmod:tmod	1:nmod:tmod	_
8	and	and	CCONJ	CC	_	10	cc	10:cc	_
9	another	another	DET	DT	_	10	det	10:det	_
10	one	one	NOUN	NN	_	1	conj	1:conj:and	_
11	for	for	ADP	IN	_	13	case	13:case	_
12	tomorrow	tomorrow	NOUN	NN	_	13	nmod:tmod	13:nmod:tmod	_
13	evening	evening	NOUN	NN	_	10	nmod	10:nmod:for	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


