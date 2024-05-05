---
layout: base
title:  'Statistics of xcomp in UD_Luxembourgish-LuxBank'
udver: '2'
---

## Treebank Statistics: UD_Luxembourgish-LuxBank: Relations: `xcomp`

This relation is universal.

4 nodes (2%) are attached to their parents as `xcomp`.

2 instances of `xcomp` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt>-<tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt>-<tt><a href="lb_luxbank-pos-ADJ.html">ADJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
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


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	Dem	den	DET	D	_	2	det	_	def
2	Peter	Peter	NOUN	N	_	4	nmod:poss	_	name
3	säin	säin	DET	D	_	4	det:poss	_	poss
4	Noper	Noper	NOUN	N	_	9	nsubj	_	_
5	huet	hunn	AUX	V	_	9	aux	_	fin
6	den	den	DET	D	_	7	det	_	def
7	Zonk	Zonk	NOUN	N	_	9	obj	_	_
8	rout	rout	ADJ	Adj	_	9	xcomp	_	_
9	ugestrach	usträichen	VERB	V	_	0	root	_	n-fin|SpaceAfter=No
10	.	.	PUNCT	$	_	9	punct	_	_

~~~


