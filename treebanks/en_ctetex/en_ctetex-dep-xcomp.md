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
1	This	_	DET	_	_	2	det	_	_
2	process	_	NOUN	_	_	4	nsubj	_	_
3	shall	_	AUX	_	_	4	aux	_	_
4	determine	_	VERB	_	_	0	root	_	_
5	which	_	DET	_	_	7	det	_	_
6	alarm	_	NOUN	_	_	7	compound	_	_
7	event	_	NOUN	_	_	8	nsubj	_	_
8	is	_	VERB	_	_	4	ccomp	_	_
9	to	_	ADP	_	_	11	mark	_	_
10	be	_	AUX	_	_	11	aux:pass	_	_
11	generated	_	VERB	_	_	8	xcomp	_	SpaceAfter=No
12	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Have	_	VERB	_	_	0	root	_	_
2	map	_	NOUN	_	_	4	nsubj	_	_
3	be	_	AUX	_	_	4	cop	_	_
4	able	_	ADJ	_	_	1	ccomp	_	_
5	to	_	PART	_	_	6	mark	_	_
6	show	_	VERB	_	_	4	xcomp	_	_
7	quantity	_	NOUN	_	_	6	obj	_	_
8	of	_	ADP	_	_	9	case	_	_
9	pumpage	_	NOUN	_	_	7	nmod	_	SpaceAfter=No
10	.	_	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 27 xcomp	color:blue
1	The	_	DET	_	_	2	det	_	_
2	node	_	NOUN	_	_	8	nsubj	_	_
3	to	_	ADP	_	_	5	case	_	_
4	the	_	DET	_	_	5	det	_	_
5	right	_	NOUN	_	_	2	nmod	_	_
6	does	_	AUX	_	_	8	aux	_	_
7	not	_	PART	_	_	8	advmod	_	_
8	need	_	VERB	_	_	0	root	_	_
9	to	_	PART	_	_	12	mark	_	_
10	be	_	AUX	_	_	12	cop	_	_
11	a	_	DET	_	_	12	det	_	_
12	sibling	_	NOUN	_	_	8	xcomp	_	_
13	of	_	ADP	_	_	16	case	_	_
14	the	_	DET	_	_	16	det	_	_
15	current	_	ADJ	_	_	16	amod	_	_
16	node	_	NOUN	_	_	12	nmod	_	SpaceAfter=No
17	,	_	PUNCT	_	_	21	punct	_	_
18	but	_	CCONJ	_	_	21	cc	_	_
19	it	_	PRON	_	_	21	nsubj	_	_
20	does	_	AUX	_	_	21	aux	_	_
21	need	_	VERB	_	_	8	conj	_	_
22	to	_	PART	_	_	27	mark	_	_
23	be	_	AUX	_	_	27	cop	_	_
24	at	_	ADP	_	_	27	case	_	_
25	the	_	DET	_	_	27	det	_	_
26	same	_	ADJ	_	_	27	amod	_	_
27	level	_	NOUN	_	_	21	xcomp	_	_
28	as	_	SCONJ	_	_	31	case	_	_
29	the	_	DET	_	_	31	det	_	_
30	current	_	ADJ	_	_	31	amod	_	_
31	node	_	NOUN	_	_	27	obl	_	SpaceAfter=No
32	.	_	PUNCT	_	_	8	punct	_	_

~~~


