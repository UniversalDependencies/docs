---
layout: base
title:  'Statistics of nummod in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nummod`

This relation is universal.

187 nodes (1%) are attached to their parents as `nummod`.

187 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1283422459893.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (180; 96% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (6; 3% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Ahmet’te	Ahmet	PROPN	_	Case=Loc|Number=Sing	6	nmod	_	_
2	de	de	ADV	_	_	1	advmod:emph	_	_
3	bunlardan	bu	PRON	_	Case=Abl|Number=Plur	5	nmod:part	_	_
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
1	yirminin	yirmi	NUM	_	Case=Gen|Number=Sing	3	nmod:part	_	_
2	sekizde	sekiz	NUM	_	Case=Loc|Number=Sing	3	nummod	_	_
3	yedisi	yedi	NUM	_	Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Birer	bir	NUM	_	NumType=Dist	2	compound:redup	_	_
2	birer	bir	NUM	_	NumType=Dist	3	nummod	_	_
3	girelim	gir	VERB	_	Mood=Opt|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	csubj	_	_
4	isteniyormuş	iste	VERB	_	Aspect=Prog|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


