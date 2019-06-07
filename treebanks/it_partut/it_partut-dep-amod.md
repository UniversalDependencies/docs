---
layout: base
title:  'Statistics of amod in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `amod`

This relation is universal.

3571 nodes (6%) are attached to their parents as `amod`.

2348 instances of `amod` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.23914869784374.

The following 11 pairs of parts of speech are connected with `amod`: <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (3445; 96% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (48; 1% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (21; 1% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (20; 1% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (16; 0% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt> (12; 0% instances), <tt><a href="it_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Onorevole	onorevole	ADJ	A	Number=Sing	2	amod	_	_
2	collega	collega	NOUN	S	Number=Sing	6	vocative	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	sarà	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	cop	_	_
5	mia	mio	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	cura	cura	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
7	verificare	verificare	VERB	V	VerbForm=Inf	6	csubj	_	_
8	tale	tale	DET	DD	Number=Sing|PronType=Dem	9	det	_	_
9	punto	punto	NOUN	S	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	Coordinamento	coordinamento	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
2	Fondi	Fondi	PROPN	SP	_	1	nmod	_	_
3	strutturali	strutturale	ADJ	A	Number=Plur	2	amod	_	SpaceAfter=No
4	/	/	PUNCT	FF	_	5	punct	_	SpaceAfter=No
5	Fondo	Fondo	PROPN	SP	_	2	conj	_	_
6	di	di	ADP	E	_	7	case	_	_
7	coesione	coesione	NOUN	S	Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	mamma	mamma	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
2	infelice	infelice	ADJ	A	Number=Sing	1	amod	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	4	punct	_	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	1	conj	_	_
5	infelici	infelice	ADJ	A	Number=Plur	4	amod	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	1	punct	_	_

~~~


