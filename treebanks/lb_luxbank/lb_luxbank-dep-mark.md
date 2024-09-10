---
layout: base
title:  'Statistics of mark in UD_Luxembourgish-LuxBank'
udver: '2'
---

## Treebank Statistics: UD_Luxembourgish-LuxBank: Relations: `mark`

This relation is universal.

3 nodes (1%) are attached to their parents as `mark`.

3 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66666666666667.

The following 2 pairs of parts of speech are connected with `mark`: <tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt>-<tt><a href="lb_luxbank-pos-SCONJ.html">SCONJ</a></tt> (2; 67% instances), <tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt>-<tt><a href="lb_luxbank-pos-PART.html">PART</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 mark	color:blue
1	Wéini	wéini	ADV	Adv	_	8	advmod	_	_
2	mengs	mengen	VERB	V	_	0	root	_	fin
3	du	du	PRON	P	_	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	$	_	8	punct	_	_
5	datt	datt	SCONJ	Subj	_	8	mark	_	_
6	s	s	PART	PTK	_	7	dep	_	clitic
7	du	du	PRON	P	_	8	nsubj	_	_
8	komme	kommen	VERB	V	_	2	ccomp	_	n-fin
9	kanns	kënnen	AUX	V	_	8	aux	_	fin|SpaceAfter=No
10	?	?	PUNCT	$	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Hien	hien	PRON	P	_	3	nsubj	_	_
2	huet	hunn	AUX	V	_	3	aux	_	fin
3	probéiert	probéieren	VERB	V	_	0	root	_	n-fin
4	ze	ze	PART	Part	_	5	mark	_	_
5	ophalen	ophalen	VERB	V	_	3	xcomp	_	n-fin
6	mat	mat	ADP	Prep	_	7	case	_	_
7	fëmmen	fëmmen	VERB	V	_	5	obl	_	n-fin
8	an	an	CCONJ	Konj	_	9	cc	_	_
9	drénken	drénken	VERB	V	_	7	conj	_	n-fin|SpaceAfter=No
10	.	.	PUNCT	$	_	3	punct	_	_

~~~


