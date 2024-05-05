---
layout: base
title:  'Statistics of fixed in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `fixed`

This relation is universal.

56 nodes (1%) are attached to their parents as `fixed`.

56 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07142857142857.

The following 14 pairs of parts of speech are connected with `fixed`: <tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (11; 20% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-SCONJ.html">SCONJ</a></tt> (9; 16% instances), <tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (9; 16% instances), <tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ctetex-pos-SCONJ.html">SCONJ</a></tt> (7; 13% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (6; 11% instances), <tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (6; 11% instances), <tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt>-<tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt>-<tt><a href="en_ctetex-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt>-<tt><a href="en_ctetex-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="en_ctetex-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_ctetex-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="en_ctetex-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_ctetex-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Report	_	VERB	_	_	0	root	_	_
2	all	_	PRON	_	_	6	det	_	_
3	out	_	ADV	_	_	5	case	_	_
4	of	_	ADP	_	_	3	fixed	_	_
5	tolerance	_	NOUN	_	_	6	nmod	_	_
6	conditions	_	NOUN	_	_	1	obj	_	SpaceAfter=No
7	.	_	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 fixed	color:blue
1	The	_	DET	_	_	3	det	_	_
2	utility	_	NOUN	_	_	3	compound	_	_
3	timer	_	NOUN	_	_	8	nsubj	_	_
4	shall	_	AUX	_	_	8	aux	_	_
5	[	_	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	SRS256	_	PROPN	_	_	3	appos	_	SpaceAfter=No
7	]	_	PUNCT	_	_	6	punct	_	_
8	have	_	VERB	_	_	0	root	_	_
9	a	_	DET	_	_	10	det	_	_
10	resolution	_	NOUN	_	_	8	obj	_	_
11	equal	_	ADJ	_	_	16	advmod	_	_
12	to	_	ADP	_	_	11	fixed	_	_
13	or	_	CCONJ	_	_	14	cc	_	_
14	better	_	ADJ	_	_	11	conj	_	_
15	than	_	SCONJ	_	_	14	fixed	_	_
16	60.6	_	NUM	_	_	17	nummod	_	_
17	nanoseconds	_	NOUN	_	_	10	nmod	_	SpaceAfter=No
18	.	_	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Gate	_	NOUN	_	_	2	nmod	_	_
2	activation	_	NOUN	_	_	12	nsubj:pass	_	_
3	and	_	CCONJ	_	_	5	cc	_	_
4	signal	_	NOUN	_	_	5	nmod	_	_
5	loss	_	NOUN	_	_	2	conj	_	_
6	due	_	ADP	_	_	9	case	_	_
7	to	_	ADP	_	_	6	fixed	_	_
8	window	_	NOUN	_	_	9	nmod	_	_
9	cutoff	_	NOUN	_	_	5	nmod	_	_
10	must	_	AUX	_	_	12	aux	_	_
11	be	_	AUX	_	_	12	aux:pass	_	_
12	taken	_	VERB	_	_	0	root	_	_
13	into	_	ADP	_	_	14	case	_	_
14	account	_	NOUN	_	_	12	obl	_	SpaceAfter=No
15	.	_	PUNCT	_	_	12	punct	_	_

~~~


