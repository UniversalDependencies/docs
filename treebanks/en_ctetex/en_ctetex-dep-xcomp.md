---
layout: base
title:  'Statistics of xcomp in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `xcomp`

This relation is universal.

79 nodes (1%) are attached to their parents as `xcomp`.

79 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.39240506329114.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (36; 46% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (32; 41% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="en_ctetex-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 xcomp	color:blue
1	This	this	DET	_	_	2	det	_	_
2	process	process	NOUN	_	Number=Sing	4	nsubj	_	_
3	shall	shall	AUX	_	_	4	aux	_	_
4	determine	determine	VERB	_	_	0	root	_	_
5	which	which	DET	_	_	7	det	_	_
6	alarm	alarm	NOUN	_	Number=Sing	7	compound	_	_
7	event	event	NOUN	_	Number=Sing	8	nsubj	_	_
8	is	be	VERB	_	Number=Sing	4	ccomp	_	_
9	to	to	ADP	_	_	11	mark	_	_
10	be	be	AUX	_	Number=Sing|Tense=Pres	11	aux:pass	_	_
11	generated	generate	VERB	_	Tense=Past	8	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Have	have	VERB	_	_	0	root	_	_
2	map	map	NOUN	_	Number=Sing	4	nsubj	_	_
3	be	be	AUX	_	Number=Sing|Tense=Pres	4	cop	_	_
4	able	able	ADJ	_	_	1	ccomp	_	_
5	to	to	PART	_	_	6	mark	_	_
6	show	show	VERB	_	_	4	xcomp	_	_
7	quantity	quantity	NOUN	_	Number=Sing	6	obj	_	_
8	of	of	ADP	_	_	9	case	_	_
9	pumpage	pumpage	NOUN	_	Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 27 xcomp	color:blue
1	The	the	DET	_	_	2	det	_	_
2	node	node	NOUN	_	Number=Sing	8	nsubj	_	_
3	to	to	ADP	_	_	5	case	_	_
4	the	the	DET	_	_	5	det	_	_
5	right	right	NOUN	_	Number=Sing	2	nmod	_	_
6	does	do	AUX	_	_	8	aux	_	_
7	not	not	PART	_	_	8	advmod	_	_
8	need	need	VERB	_	Tense=Past	0	root	_	_
9	to	to	PART	_	_	12	mark	_	_
10	be	be	AUX	_	Number=Sing|Tense=Pres	12	cop	_	_
11	a	a	DET	_	_	12	det	_	_
12	sibling	sibling	NOUN	_	Number=Sing	8	xcomp	_	_
13	of	of	ADP	_	_	16	case	_	_
14	the	the	DET	_	_	16	det	_	_
15	current	current	ADJ	_	_	16	amod	_	_
16	node	node	NOUN	_	Number=Sing	12	nmod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	21	punct	_	_
18	but	but	CCONJ	_	_	21	cc	_	_
19	it	it	PRON	_	_	21	nsubj	_	_
20	does	do	AUX	_	_	21	aux	_	_
21	need	need	VERB	_	Tense=Past	8	conj	_	_
22	to	to	PART	_	_	27	mark	_	_
23	be	be	AUX	_	Number=Sing|Tense=Pres	27	cop	_	_
24	at	at	ADP	_	_	27	case	_	_
25	the	the	DET	_	_	27	det	_	_
26	same	same	ADJ	_	_	27	amod	_	_
27	level	level	NOUN	_	Number=Sing	21	xcomp	_	_
28	as	as	SCONJ	_	_	31	case	_	_
29	the	the	DET	_	_	31	det	_	_
30	current	current	ADJ	_	_	31	amod	_	_
31	node	node	NOUN	_	Number=Sing	27	obl	_	SpaceAfter=No
32	.	.	PUNCT	_	_	8	punct	_	_

~~~


