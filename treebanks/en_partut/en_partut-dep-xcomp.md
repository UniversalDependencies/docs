---
layout: base
title:  'Statistics of xcomp in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `xcomp`

This relation is universal.

480 nodes (1%) are attached to their parents as `xcomp`.

476 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.57083333333333.

The following 17 pairs of parts of speech are connected with `xcomp`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (302; 63% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (92; 19% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (51; 11% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (12; 3% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	I	I	PRON	PE	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	should	shall	AUX	VM	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	3	aux	_	_
3	like	like	VERB	V	VerbForm=Inf	0	root	_	_
4	to	to	PART	PART	_	5	mark	_	_
5	address	address	VERB	V	VerbForm=Inf	3	xcomp	_	_
6	one	one	NUM	N	NumType=Card	8	nummod	_	_
7	final	final	ADJ	A	Degree=Pos	8	amod	_	_
8	point	point	NOUN	S	Number=Sing	5	obj	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	This	this	PRON	PD	Number=Sing|PronType=Dem	7	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	however	however	ADV	B	_	7	advmod	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	does	do	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	not	not	PART	PART	Polarity=Neg	7	advmod	_	_
7	seem	seem	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	_
8	feasible	feasible	ADJ	A	Degree=Pos	7	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 xcomp	color:blue
1	Keep	keep	VERB	V	Mood=Imp|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	your	you	DET	AP	Poss=Yes|PronType=Prs	4	nmod:poss	_	_
3	security	security	NOUN	S	Number=Sing	4	nmod	_	_
4	question	question	NOUN	S	Number=Sing	1	obj	_	_
5	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	6	det	_	_
6	secret	secret	NOUN	S	Number=Sing	1	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	_	_

~~~


