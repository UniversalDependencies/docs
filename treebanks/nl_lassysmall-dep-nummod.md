---
layout: base
title:  'Statistics of nummod in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `nummod`

This relation is universal.

1439 nodes (1%) are attached to their parents as `nummod`.

1154 instances of `nummod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.59068797776234.

The following 14 pairs of parts of speech are connected with `nummod`: <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (1128; 78% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (167; 12% instances), <tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (63; 4% instances), <tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (25; 2% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (14; 1% instances), <tt><a href="nl_lassysmall-pos-X.html">X</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt> (8; 1% instances), <tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="nl_lassysmall-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Tussen	tussen	ADP	_	_	3	case	_	_
2	de	de	DET	_	Definite=Def	3	det	_	_
3	profeten	profeet	NOUN	_	Number=Plur	8	obl	_	_
4	zijn	zijn	AUX	_	Number=Plur|Tense=Pres|VerbForm=Fin	8	aux	_	_
5	twee	twee	NUM	_	_	6	nummod	_	_
6	sibillen	sibille	NOUN	_	Number=Plur	8	nsubj	_	_
7	te	te	ADP	_	_	8	mark	_	_
8	zien	zien	VERB	_	VerbForm=Inf	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nummod	color:blue
1	Elisabeth	Elisabeth	PROPN	_	Gender=Com|Number=Sing	0	root	_	_
2	(	(	PUNCT	_	_	1	punct	_	SpaceAfter=No
3	2001	2001	NUM	_	_	1	nummod	_	SpaceAfter=No
4	)	)	PUNCT	_	_	1	punct	_	SpaceAfter=No
5	,	,	PUNCT	_	_	1	punct	_	_
6	dochter	dochter	NOUN	_	Gender=Com|Number=Sing	1	appos	_	_
7	van	van	ADP	_	_	8	case	_	_
8	Filip	Filip	PROPN	_	Gender=Com|Number=Sing	6	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	oppervlakte	oppervlakte	NOUN	_	Gender=Com|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	_	_	4	punct	_	_
3	13.521	13.521	NUM	_	_	4	nummod	_	_
4	km²	km²	SYM	_	_	1	parataxis	_	SpaceAfter=No
5	;	;	PUNCT	_	_	4	punct	_	_
6	41,5%	41,5%	SYM	_	_	4	parataxis	_	_
7	van	van	ADP	_	_	10	case	_	_
8	de	de	DET	_	Definite=Def	10	det	_	_
9	Belgische	Belgisch	ADJ	_	Degree=Pos	10	amod	_	_
10	oppervlakte	oppervlakte	NOUN	_	Gender=Com|Number=Sing	6	nmod	_	_

~~~


