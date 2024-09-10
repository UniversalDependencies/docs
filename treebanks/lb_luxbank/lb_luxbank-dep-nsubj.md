---
layout: base
title:  'Statistics of nsubj in UD_Luxembourgish-LuxBank'
udver: '2'
---

## Treebank Statistics: UD_Luxembourgish-LuxBank: Relations: `nsubj`

This relation is universal.

25 nodes (12%) are attached to their parents as `nsubj`.

22 instances of `nsubj` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.68.

The following 4 pairs of parts of speech are connected with `nsubj`: <tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt>-<tt><a href="lb_luxbank-pos-PRON.html">PRON</a></tt> (17; 68% instances), <tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt>-<tt><a href="lb_luxbank-pos-NOUN.html">NOUN</a></tt> (5; 20% instances), <tt><a href="lb_luxbank-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lb_luxbank-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="lb_luxbank-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lb_luxbank-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Ech	ech	PRON	P	_	2	nsubj	_	_
2	mengen	mengen	VERB	V	_	0	root	_	fin
3	et	et	PRON	P	_	4	nsubj	_	_
4	reent	reenen	VERB	V	_	2	conj	_	fin|SpaceAfter=No
5	.	.	PUNCT	$	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj	color:blue
1	D'	d'	DET	D	_	2	det	_	def|SpaceAfter=No
2	Meedchen	Meedchen	NOUN	N	_	9	nsubj	_	_
3	huet	hunn	AUX	V	_	9	aux	_	fin
4	e	en	DET	D	_	9	det	_	indef
5	Bréif	Bréif	NOUN	N	_	9	obj	_	_
6	un	un	ADP	Prep	_	8	case	_	_
7	säi	säin	DET	D	_	8	det:poss	_	poss
8	Frënd	Frënd	NOUN	N	_	9	obl	_	_
9	geschriwwen	schreiwen	VERB	V	_	0	root	_	n-fin|SpaceAfter=No
10	.	.	PUNCT	$	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj	color:blue
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


