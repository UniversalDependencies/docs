---
layout: base
title:  'Statistics of nmod:tmod in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_ewt-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_ewt-dep-nmod-poss.html">nmod:poss</a></tt>.

357 nodes (0%) are attached to their parents as `nmod:tmod`.

344 instances of `nmod:tmod` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.54621848739496.

The following 13 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (188; 53% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (65; 18% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (33; 9% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (27; 8% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (10; 3% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (10; 3% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (10; 3% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (9; 3% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:tmod	color:blue
1	02/13/2001	02/13/2001	NUM	CD	NumType=Card	0	root	0:root	_
2	08:02	08:02	NUM	CD	NumType=Card	3	nummod	3:nummod	_
3	PM	pm	NOUN	NN	Number=Sing	1	nmod:tmod	1:nmod:tmod	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:tmod	color:blue
1	Game	game	NOUN	NN	Number=Sing	0	root	0:root	_
2	tonight	tonight	NOUN	NN	Number=Sing	1	nmod:tmod	1:nmod:tmod	_
3	at	at	ADP	IN	_	4	case	4:case	_
4	7	7	NUM	CD	NumType=Card	1	nmod	1:nmod:at	SpaceAfter=No
5	,	,	PUNCT	,	_	1	punct	1:punct	_
6	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	nsubj	8:nsubj	SpaceAfter=No
7	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	_
8	time	time	NOUN	NN	Number=Sing	1	parataxis	1:parataxis	_
9	to	to	PART	TO	_	10	mark	10:mark	_
10	kick	kick	VERB	VB	VerbForm=Inf	8	acl	8:acl:to	_
11	some	some	DET	DT	_	12	det	12:det	_
12	ass	ass	NOUN	NN	Number=Sing	10	obj	10:obj	SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 nmod:tmod	color:blue
1	Friday	Friday	PROPN	NNP	Number=Sing	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	June	June	PROPN	NNP	Number=Sing	1	appos	1:appos	_
4	04	04	NUM	CD	NumType=Card	3	nummod	3:nummod	SpaceAfter=No
5	,	,	PUNCT	,	_	1	punct	1:punct	_
6	2004	2004	NUM	CD	NumType=Card	1	nmod:tmod	1:nmod:tmod	_

~~~


