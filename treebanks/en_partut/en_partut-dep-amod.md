---
layout: base
title:  'Statistics of amod in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `amod`

This relation is universal.

3139 nodes (6%) are attached to their parents as `amod`.

3004 instances of `amod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35903153870659.

The following 17 pairs of parts of speech are connected with `amod`: <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (2944; 94% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (58; 2% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (39; 1% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (27; 1% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (20; 1% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (18; 1% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="en_partut-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-X.html">X</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Inward	inward	ADJ	A	Degree=Pos	2	amod	_	_
2	FDI	FDI	PROPN	SP	_	4	nsubj	_	_
3	could	can	AUX	VM	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	4	aux	_	_
4	increase	increase	VERB	V	VerbForm=Inf	0	root	_	_
5	by	by	ADP	E	_	10	case	_	_
6	as	as	ADV	B	_	7	advmod	_	_
7	much	much	ADJ	A	Degree=Pos	10	advmod	_	_
8	as	as	ADP	E	_	10	case	_	_
9	83	83	NUM	N	NumType=Card	10	nummod	_	SpaceAfter=No
10	%	%	SYM	X	_	4	obl	_	_
11	annually	annually	ADV	B	_	4	advmod	_	_
12	by	by	ADP	E	_	13	case	_	_
13	2020	2020	NUM	N	NumType=Card	4	obl	_	SpaceAfter=No
14	;	;	PUNCT	FC	_	4	punct	_	_

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


