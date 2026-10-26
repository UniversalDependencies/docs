---
layout: base
title:  'Statistics of nummod in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `nummod`

This relation is universal.

15 nodes (0%) are attached to their parents as `nummod`.

14 instances of `nummod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.73333333333333.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-NUM.html">NUM</a></tt> (10; 67% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-NUM.html">NUM</a></tt> (5; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nummod	color:blue
1	1	1	NUM	_	_	6	nummod	_	SpaceAfter=No
2	.	.	PUNCT	_	_	6	punct	_	_
3	Mia	mia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	nomo	nomo	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
5	familia	familia	ADJ	_	_	4	amod	_	_
6	estas	esti	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	:	:	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Varsovio	Varsovio	PROPN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	Majo	Majo	NOUN	_	Case=Nom|Number=Sing	1	appos	_	_
4	1913	1913	NUM	_	NumType=Card	3	nummod	_	SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	_	_

~~~


