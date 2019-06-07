---
layout: base
title:  'Statistics of nummod in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nummod`

This relation is universal.

197 nodes (1%) are attached to their parents as `nummod`.

197 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14213197969543.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (188; 95% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (6; 3% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Ahmet’te	Ahmet	PROPN	_	Case=Loc|Number=Sing	6	nmod	_	_
2	de	de	ADV	_	_	1	advmod:emph	_	_
3	bunlardan	bu	PRON	_	Case=Abl|Number=Plur	5	nmod:part	_	_
4	bir	bir	NUM	_	NumType=Ord	5	nummod	_	_
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Bu	bu	DET	_	Definite=Def|Number=Sing	2	det	_	_
2	bisikleti	bisiklet	NOUN	_	Case=Acc|Number=Sing	6	obj	_	_
3	iki	iki	NUM	_	NumType=Ord	5	compound	_	_
4	yüz	yüz	NUM	_	NumType=Ord	5	compound	_	_
5	milyona	milyon	NUM	_	Case=Dat|Number=Sing	6	nummod	_	_
6	almıştım	al	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=1|Tense=Pqp	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


