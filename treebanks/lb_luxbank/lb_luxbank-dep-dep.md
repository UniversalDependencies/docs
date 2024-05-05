---
layout: base
title:  'Statistics of dep in UD_Luxembourgish-LuxBank'
udver: '2'
---

## Treebank Statistics: UD_Luxembourgish-LuxBank: Relations: `dep`

This relation is universal.

3 nodes (1%) are attached to their parents as `dep`.

2 instances of `dep` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 2 pairs of parts of speech are connected with `dep`: <tt><a href="lb_luxbank-pos-VERB.html">VERB</a></tt>-<tt><a href="lb_luxbank-pos-PART.html">PART</a></tt> (2; 67% instances), <tt><a href="lb_luxbank-pos-PRON.html">PRON</a></tt>-<tt><a href="lb_luxbank-pos-PART.html">PART</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 dep	color:blue
1	Sam	Sam	NOUN	N	_	3	vocative	_	name|SpaceAfter=No
2	,	,	PUNCT	$	_	1	punct	_	_
3	maach	maachen	VERB	V	_	0	root	_	fin
4	d'	d'	DET	D	_	5	det	_	def|SpaceAfter=No
5	Fënster	Fënster	NOUN	N	_	3	obj	_	_
6	op	op	PART	VPart	_	3	dep	_	_|SpaceAfter=No
7	!	!	PUNCT	$	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 dep	color:blue
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


