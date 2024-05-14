---
layout: base
title:  'Statistics of conj in UD_Luxembourgish-LuxBank'
udver: '2'
---

## Treebank Statistics: UD_Luxembourgish-LuxBank: Relations: `conj`

This relation is universal.

12 nodes (6%) are attached to their parents as `conj`.

12 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.08333333333333.

The following 6 pairs of parts of speech are connected with `conj`: <tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt>-<tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt> (4; 33% instances), <tt><a href="lb_luxbank-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lb_luxbank-pos-NOUN.html">NOUN</a></tt> (3; 25% instances), <tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt>-<tt><a href="lb_luxbank-pos-NOUN.html">NOUN</a></tt> (2; 17% instances), <tt><a href="lb_luxbank-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lb_luxbank-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="lb_luxbank-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lb_luxbank-pos-DET.html">DET</a></tt> (1; 8% instances), <tt><a href="lb_luxbank-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
1	Ech	ech	PRON	P	_	2	nsubj	_	_
2	mengen	mengen	VERB	V	_	0	root	_	fin
3	et	et	PRON	P	_	4	nsubj	_	_
4	reent	reenen	VERB	V	_	2	conj	_	fin|SpaceAfter=No
5	.	.	PUNCT	$	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 conj	color:blue
1	D'	d'	DET	D	_	2	det	_	def|SpaceAfter=No
2	Mary	Mary	NOUN	N	_	5	nsubj	_	name
3	huet	hunn	AUX	V	_	5	aux	_	fin
4	Bronze	Bronze	NOUN	N	_	5	obj	_	_
5	gewonnen	gewannen	VERB	V	_	0	root	_	n-fin|SpaceAfter=No
6	,	,	PUNCT	$	_	5	punct	_	_
7	de	den	DET	D	_	8	det	_	def
8	Peter	Peter	NOUN	N	_	5	conj	_	name
9	Sëlwer	Sëlwer	NOUN	N	_	8	orphan	_	_
10	an	an	CCONJ	Konj	_	5	cc	_	_
11	d'	d'	DET	D	_	12	det	_	def|SpaceAfter=No
12	Jane	Jane	NOUN	N	_	8	conj	_	name
13	Gold	Gold	NOUN	N	_	12	orphan	_	SpaceAfter=No
14	.	.	PUNCT	$	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 conj	color:blue
1	D'	d'	DET	D	_	2	det	_	def|SpaceAfter=No
2	Mary	Mary	NOUN	N	_	5	nsubj	_	name
3	huet	hunn	AUX	V	_	5	aux	_	fin
4	Bronze	Bronze	NOUN	N	_	5	obj	_	_
5	gewonnen	gewannen	VERB	V	_	0	root	_	n-fin|SpaceAfter=No
6	,	,	PUNCT	$	_	5	punct	_	_
7	de	den	DET	D	_	8	det	_	def
8	Peter	Peter	NOUN	N	_	5	conj	_	name
9	Sëlwer	Sëlwer	NOUN	N	_	8	orphan	_	_
10	an	an	CCONJ	Konj	_	5	cc	_	_
11	d'	d'	DET	D	_	12	det	_	def|SpaceAfter=No
12	Jane	Jane	NOUN	N	_	8	conj	_	name
13	Gold	Gold	NOUN	N	_	12	orphan	_	SpaceAfter=No
14	.	.	PUNCT	$	_	5	punct	_	_

~~~


