---
layout: base
title:  'Statistics of compound in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="en_partut-dep-compound-prt.html">compound:prt</a></tt>.

130 nodes (0%) are attached to their parents as `compound`.

77 instances of `compound` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07692307692308.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (105; 81% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (16; 12% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	Madam	madam	NOUN	S	Gender=Fem|Number=Sing	6	vocative	_	_
2	President	president	NOUN	S	Number=Sing	1	compound	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	on	on	ADP	E	_	6	case	_	_
5	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	6	det	_	_
6	point	point	NOUN	S	Number=Sing	0	root	_	_
7	of	of	ADP	E	_	8	case	_	_
8	order	order	NOUN	S	Number=Sing	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	420	420	NUM	N	NumType=Card	2	compound	_	_
2	million	million	NUM	N	NumType=Card	3	nummod	_	_
3	years	years	NOUN	S	Number=Sing	4	obl	_	_
4	ago	ago	ADV	B	_	8	advmod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	_	_
6	this	this	DET	DD	Number=Sing|PronType=Dem	7	det	_	_
7	organism	organism	NOUN	S	Number=Sing	8	nsubj	_	_
8	existed	exist	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	In	in	ADP	E	_	2	case	_	_
2	fact	fact	NOUN	S	Number=Sing	7	obl	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	South	South	NOUN	S	_	6	nmod	_	_
5	Korean	Korean	ADJ	A	Degree=Pos	4	compound	_	_
6	women	women	NOUN	S	Gender=Fem|Number=Sing	7	nsubj	_	_
7	participate	participate	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	_
8	in	in	ADP	E	_	11	case	_	_
9	the	the	DET	RD	Definite=Def|PronType=Art	11	det	_	_
10	labor	labor	NOUN	S	Number=Sing	11	nmod	_	_
11	force	force	NOUN	S	Number=Sing	7	obl	_	_
12	at	at	ADP	E	_	16	case	_	_
13	roughly	roughly	ADV	B	_	16	advmod	_	_
14	the	the	DET	RD	Definite=Def|PronType=Art	16	det	_	_
15	average	average	ADJ	A	Degree=Pos	16	amod	_	_
16	rate	rate	NOUN	S	Number=Sing	7	obl	_	_
17	for	for	ADP	E	_	19	case	_	_
18	the	the	DET	RD	Definite=Def|PronType=Art	19	det	_	_
19	OECD	OECD	PROPN	SP	_	7	obl	_	_
20	while	while	SCONJ	CS	_	26	mark	_	_
21	they	they	PRON	PE	Number=Plur|Person=3|PronType=Prs	26	nsubj	_	_
22	are	be	AUX	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	26	cop	_	_
23	in	in	ADP	E	_	26	case	_	_
24	their	their	DET	AP	Poss=Yes|PronType=Prs	26	nmod:poss	_	_
25	late	late	ADJ	A	Degree=Pos	26	amod	_	_
26	twenties	twenties	NOUN	S	Number=Sing	7	advcl	_	SpaceAfter=No
27	.	.	PUNCT	FS	_	7	punct	_	_

~~~


