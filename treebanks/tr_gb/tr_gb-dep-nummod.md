---
layout: base
title:  'Statistics of nummod in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nummod`

This relation is universal.

193 nodes (1%) are attached to their parents as `nummod`.

193 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14507772020725.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (185; 96% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (6; 3% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Ahmet’te	Ahmet	PROPN	_	Case=Loc|Number=Sing	6	nmod	_	_
2	de	de	ADV	_	_	1	advmod:emph	_	_
3	bunlardan	bu	PRON	_	Case=Abl|Number=Plur|PronType=Dem	5	nmod:part	_	_
4	bir	bir	NUM	_	NumType=Card	5	nummod	_	_
5	tane	tane	NOUN	_	Case=Nom|Number=Sing	6	nsubj:cop	_	_
6	var	var	ADJ	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	yirminin	yirmi	NUM	_	Case=Gen|Number=Sing|NumType=Card	3	nmod:part	_	_
2	sekizde	sekiz	NUM	_	Case=Loc|Number=Sing|NumType=Card	3	nummod	_	_
3	yedisi	yedi	NUM	_	Number=Sing|Number[psor]=Sing|NumType=Card|Person[psor]=3	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Birer	birer	NUM	_	NumType=Dist	2	compound:redup	_	_
2	birer	birer	NUM	_	NumType=Dist	3	nummod	_	_
3	gelin	gel	VERB	_	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
4	!	!	PUNCT	_	_	3	punct	_	_

~~~


