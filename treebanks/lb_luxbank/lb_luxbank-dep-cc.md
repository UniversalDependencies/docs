---
layout: base
title:  'Statistics of cc in UD_Luxembourgish-LuxBank'
udver: '2'
---

## Treebank Statistics: UD_Luxembourgish-LuxBank: Relations: `cc`

This relation is universal.

11 nodes (5%) are attached to their parents as `cc`.

10 instances of `cc` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.18181818181818.

The following 4 pairs of parts of speech are connected with `cc`: <tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt>-<tt><a href="lb_luxbank-pos-CCONJ.html">CCONJ</a></tt> (5; 45% instances), <tt><a href="lb_luxbank-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lb_luxbank-pos-CCONJ.html">CCONJ</a></tt> (4; 36% instances), <tt><a href="lb_luxbank-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lb_luxbank-pos-CCONJ.html">CCONJ</a></tt> (1; 9% instances), <tt><a href="lb_luxbank-pos-DET.html">DET</a></tt>-<tt><a href="lb_luxbank-pos-CCONJ.html">CCONJ</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Weeder	weeder	CCONJ	Konj	_	3	cc	_	_
2	de	den	DET	D	_	3	det	_	def
3	Peter	Peter	NOUN	N	_	10	nsubj	_	name
4	Smith	Smith	NOUN	N	_	3	flat	_	name
5	nach	nach	CCONJ	Konj	_	7	cc	_	_
6	d'	d'	DET	D	_	7	det	_	def|SpaceAfter=No
7	Mary	Mary	NOUN	N	_	3	conj	_	name
8	Brown	Brown	NOUN	N	_	7	flat	_	name
9	konnten	kënnen	AUX	V	_	10	aux	_	fin
10	ausgewielt	auswielen	VERB	V	_	0	root	_	n-fin
11	ginn	ginn	AUX	V	_	10	aux	_	n-fin|SpaceAfter=No
12	.	.	PUNCT	$	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc	color:blue
1	Ass	sinn	AUX	V	_	8	cop	_	fin
2	Iguazu	Iguazu	NOUN	N	_	8	nsubj	_	name
3	e	en	DET	D	_	8	det	_	indef
4	grousst	grouss	ADJ	Adj	_	8	amod	_	_
5	oder	oder	CCONJ	Konj	_	7	cc	_	_
6	e	en	DET	D	_	7	det	_	indef
7	klengt	kleng	ADJ	Adj	_	4	conj	_	_
8	Land	Land	NOUN	N	_	0	root	_	SpaceAfter=No
9	?	?	PUNCT	$	_	8	punct	_	_

~~~


