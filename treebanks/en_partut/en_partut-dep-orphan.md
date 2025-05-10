---
layout: base
title:  'Statistics of orphan in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `orphan`

This relation is universal.

16 nodes (0%) are attached to their parents as `orphan`.

13 instances of `orphan` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.0625.

The following 10 pairs of parts of speech are connected with `orphan`: <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (4; 25% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADV.html">ADV</a></tt> (2; 13% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (2; 13% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-AUX.html">AUX</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PART.html">PART</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


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
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 32 orphan	color:blue
1	He	he	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	replaced	replace	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
4	around	around	ADP	E	_	6	case	_	_
5	the	the	DET	RD	Definite=Def|PronType=Art	6	det	_	_
6	turn	turn	NOUN	S	Number=Sing	3	obl	_	_
7	of	of	ADP	E	_	11	case	_	_
8	the	the	DET	RD	Definite=Def|PronType=Art	11	det	_	_
9	16	16	NUM	N	NumType=Card	11	nummod	_	SpaceAfter=No
10	th	th	ADJ	A	Degree=Pos	9	amod	_	_
11	century	century	NOUN	S	Number=Sing	6	nmod	_	_
12	by	by	ADP	E	_	13	case	_	_
13	Robert	Robert	PROPN	SP	_	3	obl	_	_
14	Armin	Armin	PROPN	SP	_	13	flat	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	13	punct	_	_
16	who	who	PRON	PR	PronType=Rel	17	nsubj	_	_
17	played	play	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	13	acl:relcl	_	_
18	roles	role	NOUN	S	Number=Plur	17	obj	_	_
19	such	such	ADJ	A	Degree=Pos|ExtPos=ADP	21	case	_	_
20	as	as	ADP	E	_	19	fixed	_	_
21	Touchstone	Touchstone	PROPN	SP	_	18	nmod	_	_
22	in	in	ADP	E	_	25	case	_	_
23	As	as	SCONJ	CS	_	25	mark	_	_
24	You	you	PRON	PE	Person=2|PronType=Prs	25	nsubj	_	_
25	Like	like	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	17	advcl	_	_
26	It	it	PRON	PE	Person=3|PronType=Prs	25	obj	_	_
27	and	and	CCONJ	CC	_	29	cc	_	_
28	the	the	DET	RD	Definite=Def|PronType=Art	29	det	_	_
29	fool	fool	NOUN	S	Number=Sing	17	conj	_	_
30	in	in	ADP	E	_	32	case	_	_
31	King	King	NOUN	S	Number=Sing	32	nmod:desc	_	_
32	Lear	Lear	PROPN	SP	_	29	orphan	_	SpaceAfter=No
33	.	.	PUNCT	FS	_	3	punct	_	_

~~~


