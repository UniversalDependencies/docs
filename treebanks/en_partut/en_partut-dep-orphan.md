---
layout: base
title:  'Statistics of orphan in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `orphan`

This relation is universal.

16 nodes (0%) are attached to their parents as `orphan`.

13 instances of `orphan` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 10 pairs of parts of speech are connected with `orphan`: <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (5; 31% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADV.html">ADV</a></tt> (2; 13% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-AUX.html">AUX</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PART.html">PART</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 19 orphan	color:blue
1	After	after	ADP	E	_	2	case	_	_
2	1608	1608	NUM	N	NumType=Card	5	obl	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	they	they	PRON	PE	Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
5	performed	perform	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	at	at	ADP	E	_	10	case	_	_
7	the	the	DET	RD	Definite=Def|PronType=Art	10	det	_	_
8	indoor	indoor	ADJ	A	Degree=Pos	10	amod	_	_
9	Blackfriars	Blackfriars	PROPN	SP	_	10	nmod	_	_
10	Theatre	theatre	NOUN	S	Number=Sing	5	obl	_	_
11	during	during	ADP	E	_	13	case	_	_
12	the	the	DET	RD	Definite=Def|PronType=Art	13	det	_	_
13	winter	winter	NOUN	S	Number=Sing	5	obl	_	_
14	and	and	CCONJ	CC	_	16	cc	_	_
15	the	the	DET	RD	Definite=Def|PronType=Art	16	det	_	_
16	Globe	globe	NOUN	S	Number=Sing	5	conj	_	_
17	during	during	ADP	E	_	19	case	_	_
18	the	the	DET	RD	Definite=Def|PronType=Art	19	det	_	_
19	summer	summer	NOUN	S	Number=Sing	16	orphan	_	SpaceAfter=No
20	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 18 orphan	color:blue
1	Balzac	Balzac	PROPN	SP	_	2	nsubj	_	_
2	borrowed	borrow	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	money	money	NOUN	S	Number=Sing	2	obj	_	_
4	from	from	ADP	E	_	6	case	_	_
5	his	his	DET	AP	Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	family	family	NOUN	S	Number=Sing	2	obl	_	_
7	and	and	CCONJ	CC	_	8	cc	_	_
8	friends	friend	NOUN	S	Number=Plur	6	conj	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	11	punct	_	_
10	and	and	CCONJ	CC	_	11	cc	_	_
11	tried	try	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	_
12	to	to	PART	PART	_	13	mark	_	_
13	build	build	VERB	V	VerbForm=Inf	11	xcomp	_	_
14	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	16	det	_	_
15	printing	printing	NOUN	S	Number=Sing	16	nmod	_	_
16	business	business	NOUN	S	Number=Sing	13	obj	_	SpaceAfter=No
17	,	,	PUNCT	FF	_	21	punct	_	_
18	then	then	ADV	B	_	21	orphan	_	_
19	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	21	det	_	_
20	typefounder	typefounder	NOUN	S	Number=Sing	21	nmod	_	_
21	enterprise	enterprise	NOUN	S	Number=Sing	13	conj	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 19 orphan	color:blue
1	The	the	DET	RD	Definite=Def|PronType=Art	4	det	_	_
2	popular	popular	ADJ	A	Degree=Pos	4	amod	_	_
3	comic	comic	ADJ	A	Degree=Pos	4	amod	_	_
4	actor	actor	NOUN	S	Number=Sing	7	nsubj	_	_
5	Will	Will	PROPN	SP	_	4	nmod	_	_
6	Kempe	Kempe	PROPN	SP	_	5	flat	_	_
7	played	play	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	the	the	DET	RD	Definite=Def|PronType=Art	9	det	_	_
9	servant	servant	NOUN	S	Number=Sing	7	obj	_	_
10	Peter	Peter	PROPN	SP	_	9	nmod	_	_
11	in	in	ADP	E	_	12	case	_	_
12	Romeo	Romeo	PROPN	SP	_	7	obl	_	_
13	and	and	CCONJ	CC	_	14	cc	_	_
14	Juliet	Juliet	PROPN	SP	_	12	conj	_	_
15	and	and	CCONJ	CC	_	16	cc	_	_
16	Dogberry	Dogberry	PROPN	SP	_	7	conj	_	_
17	in	in	ADP	E	_	19	case	_	_
18	Much	much	ADJ	A	Degree=Pos	19	amod	_	_
19	Ado	ado	NOUN	S	Number=Sing	16	orphan	_	_
20	About	about	ADP	E	_	21	case	_	_
21	Nothing	nothing	NOUN	S	Number=Sing	19	nmod	_	SpaceAfter=No
22	,	,	PUNCT	FF	_	7	punct	_	_
23	among	among	ADP	E	_	25	case	_	_
24	other	other	ADJ	A	Degree=Pos	25	amod	_	_
25	characters	character	NOUN	S	Number=Plur	7	obl	_	SpaceAfter=No
26	.	.	PUNCT	FS	_	7	punct	_	_

~~~


