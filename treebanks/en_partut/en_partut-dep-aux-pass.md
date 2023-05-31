---
layout: base
title:  'Statistics of aux:pass in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-aux.html">aux</a></tt>.

476 nodes (1%) are attached to their parents as `aux:pass`.

476 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15546218487395.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-AUX.html">AUX</a></tt> (475; 100% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:pass	color:blue
1	This	this	PRON	PD	Number=Sing|PronType=Dem	4	nsubj:pass	_	_
2	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
3	first	first	ADJ	NO	Degree=Pos|NumType=Ord	4	amod	_	_
4	discovered	discover	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	in	in	ADP	E	_	6	case	_	_
6	1859	1859	NUM	N	NumType=Card	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 aux:pass	color:blue
1	In	in	ADP	E	_	2	case	_	_
2	1613	1613	NUM	N	NumType=Card	7	obl	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	Sir	Sir	PROPN	SP	_	7	nsubj	_	_
5	Henry	Henry	PROPN	SP	_	4	flat	_	_
6	Wotton	Wotton	PROPN	SP	_	4	flat	_	_
7	recorded	record	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	that	that	SCONJ	CS	_	13	mark	_	_
9	Henry	Henry	PROPN	SP	_	13	nsubj:pass	_	_
10	VIII	eigth	ADJ	NO	Degree=Pos|NumType=Ord	9	flat	_	_
11	"	"	PUNCT	FB	_	13	punct	_	SpaceAfter=No
12	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	aux:pass	_	_
13	set	set	ADJ	A	Degree=Pos	7	ccomp	_	_
14	forth	forth	ADP	E	_	13	compound:prt	_	_
15	with	with	ADP	E	_	18	amod	_	_
16	many	many	ADJ	A	Degree=Pos	18	amod	_	_
17	extraordinary	extraordinary	ADJ	A	Degree=Pos	18	amod	_	_
18	circumstances	circumstance	NOUN	S	Number=Plur	13	obl	_	_
19	of	of	ADP	E	_	20	case	_	_
20	pomp	pomp	NOUN	S	Number=Sing	18	nmod	_	_
21	and	and	CCONJ	CC	_	22	cc	_	_
22	ceremony	ceremony	NOUN	S	Number=Sing	20	conj	_	SpaceAfter=No
23	"	"	PUNCT	FB	_	13	punct	_	SpaceAfter=No
24	.	.	PUNCT	FS	_	7	punct	_	_

~~~


