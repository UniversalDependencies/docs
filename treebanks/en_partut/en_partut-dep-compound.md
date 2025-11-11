---
layout: base
title:  'Statistics of compound in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="en_partut-dep-compound-prt.html">compound:prt</a></tt>.

124 nodes (0%) are attached to their parents as `compound`.

118 instances of `compound` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12903225806452.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (70; 56% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (22; 18% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (16; 13% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (5; 4% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	We	we	PRON	PE	Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	exhale	exhale	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	_
3	carbon	carbon	NOUN	S	Number=Sing	4	compound	_	_
4	dioxide	dioxide	NOUN	S	Number=Sing	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	7	punct	_	_
6	so	so	ADV	B	_	7	advmod	_	_
7	does	do	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
8	mycelium	mycelium	NOUN	S	Number=Sing	7	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	South	South	PROPN	SP	Number=Sing	2	compound	_	_
2	Korea	Korea	PROPN	SP	Number=Sing	5	nmod:poss	_	_
3	's	's	PART	PART	_	2	case	_	_
4	Feminine	feminine	ADJ	A	Degree=Pos	5	amod	_	_
5	Future	future	NOUN	S	Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	420	420	NUM	N	NumType=Card	2	compound	_	_
2	million	million	NUM	N	NumType=Card	3	nummod	_	_
3	years	year	NOUN	S	Number=Plur	4	obl	_	_
4	ago	ago	ADV	B	_	8	advmod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	_	_
6	this	this	DET	DD	Number=Sing|PronType=Dem	7	det	_	_
7	organism	organism	NOUN	S	Number=Sing	8	nsubj	_	_
8	existed	exist	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	8	punct	_	_

~~~


