---
layout: base
title:  'Statistics of nummod in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `nummod`

This relation is universal.

571 nodes (1%) are attached to their parents as `nummod`.

374 instances of `nummod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.06654991243433.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (374; 65% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (66; 12% instances), <tt><a href="en_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (42; 7% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (40; 7% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (29; 5% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (14; 2% instances), <tt><a href="en_partut-pos-X.html">X</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	1	1	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Definitions	definition	NOUN	S	Number=Plur	0	root	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nummod	color:blue
1	(	(	PUNCT	FB	_	2	punct	_	SpaceAfter=No
2	1	1	NUM	N	NumType=Card	5	nummod	_	SpaceAfter=No
3	)	)	PUNCT	FB	_	2	punct	_	_
4	Everyone	everyone	PRON	PE	Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	has	have	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	the	the	DET	RD	Definite=Def|PronType=Art	7	det	_	_
7	right	right	NOUN	S	Number=Sing	5	obj	_	_
8	to	to	ADP	E	_	10	case	_	_
9	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	10	det	_	_
10	nationality	nationality	NOUN	S	Number=Sing	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Agriculture	agriculture	NOUN	S	Number=Sing	3	nsubj	_	_
2	only	only	ADV	B	_	3	advmod	_	_
3	provides	provide	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	5.5	5.5	NUM	N	NumType=Card	5	nummod	_	SpaceAfter=No
5	%	%	SYM	X	_	3	obj	_	_
6	of	of	ADP	E	_	7	case	_	_
7	employment	employment	NOUN	S	Number=Sing	5	nmod	_	_
8	in	in	ADP	E	_	10	case	_	_
9	the	the	DET	RD	Definite=Def|PronType=Art	10	det	_	_
10	Union	union	NOUN	S	Number=Sing	3	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


