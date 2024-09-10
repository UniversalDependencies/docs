---
layout: base
title:  'Statistics of nsubj in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="en_ctetex-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="en_ctetex-dep-nsubj-pass.html">nsubj:pass</a></tt>.

328 nodes (4%) are attached to their parents as `nsubj`.

318 instances of `nsubj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.44817073170732.

The following 15 pairs of parts of speech are connected with `nsubj`: <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (198; 60% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (47; 14% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt> (28; 9% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (14; 4% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt> (13; 4% instances), <tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (11; 3% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt> (8; 2% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	The	_	DET	_	_	2	det	_	_
2	NE	_	NOUN	_	_	4	nsubj	_	_
3	will	_	AUX	_	_	4	aux	_	_
4	remain	_	VERB	_	_	0	root	_	_
5	in	_	ADP	_	_	7	case	_	_
6	the	_	DET	_	_	7	det	_	_
7	CT	_	NOUN	_	_	4	obl	_	_
8	and	_	CCONJ	_	_	12	cc	_	_
9	no	_	DET	_	_	10	det	_	_
10	recovery	_	NOUN	_	_	12	nsubj	_	_
11	will	_	AUX	_	_	12	aux	_	_
12	take	_	VERB	_	_	4	conj	_	_
13	place	_	NOUN	_	_	12	obj	_	SpaceAfter=No
14	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	It	_	PRON	_	_	3	nsubj	_	_
2	shall	_	AUX	_	_	3	aux	_	_
3	have	_	VERB	_	_	0	root	_	_
4	the	_	DET	_	_	6	det	_	_
5	file	_	NOUN	_	_	6	compound	_	_
6	extension	_	NOUN	_	_	3	obj	_	_
7	.spec	_	SYM	_	_	6	appos	_	SpaceAfter=No
8	.	_	PUNCT	_	_	3	punct	_	_

~~~


