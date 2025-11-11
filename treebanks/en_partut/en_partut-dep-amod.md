---
layout: base
title:  'Statistics of amod in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `amod`

This relation is universal.

3125 nodes (6%) are attached to their parents as `amod`.

3020 instances of `amod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34752.

The following 17 pairs of parts of speech are connected with `amod`: <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (2932; 94% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (82; 3% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (36; 1% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (20; 1% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (17; 1% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (10; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 amod	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
1	The	the	DET	RD	Definite=Def|PronType=Art	3	det	_	_
2	largest	largest	ADJ	A	Degree=Sup	3	amod	_	_
3	organism	organism	NOUN	S	Number=Sing	10	nsubj	_	_
4	in	in	ADP	E	_	6	case	_	_
5	the	the	DET	RD	Definite=Def|PronType=Art	6	det	_	_
6	world	world	NOUN	S	Number=Sing	3	nmod	_	_
7	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
8	in	in	ADP	E	_	10	case	_	_
9	Eastern	eastern	ADJ	A	Degree=Pos	10	amod	_	_
10	Oregon	Oregon	PROPN	SP	_	0	root	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	This	this	PRON	PD	Number=Sing|PronType=Dem	4	nsubj:pass	_	_
2	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
3	first	first	ADJ	NO	Degree=Pos|NumType=Ord	4	amod	_	_
4	discovered	discover	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	in	in	ADP	E	_	6	case	_	_
6	1859	1859	NUM	N	NumType=Card	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	4	punct	_	_

~~~


