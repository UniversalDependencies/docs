---
layout: base
title:  'Statistics of advmod in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `advmod`

This relation is universal.

256 nodes (12%) are attached to their parents as `advmod`.

161 instances of `advmod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.71875.

The following 11 pairs of parts of speech are connected with `advmod`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PART.html">PART</a></tt> (109; 43% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (97; 38% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-PART.html">PART</a></tt> (15; 6% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-PART.html">PART</a></tt> (9; 4% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (6; 2% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (6; 2% instances), <tt><a href="yrl_complin-pos-PART.html">PART</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="yrl_complin-pos-PART.html">PART</a></tt>-<tt><a href="yrl_complin-pos-PART.html">PART</a></tt> (5; 2% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="yrl_complin-pos-AUX.html">AUX</a></tt>-<tt><a href="yrl_complin-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod	color:blue
1	Aintá	aintá	PRON	PRON	Number=Plur|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:5
2	upisika	pisika	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=6:13
3	paá	paá	PART	RPRT	_	2	advmod	_	TokenRange=14:17
4	yandé	yandé	PRON	PRON	Number=Plur|Person=1|PronType=Prs	2	obj	_	TokenRange=18:23
5	yaú	ú	VERB	V	Number=Plur|Person=1|VerbForm=Fin	2	advcl	_	TokenRange=24:27
6	ramé	ramé	SCONJ	SCONJ	_	5	mark	_	TokenRange=28:32
7	timbiú	timbiú	NOUN	N	Number=Sing	5	obj	_	TokenRange=33:39
8	irusanga	irusanga	ADJ	A	_	7	amod	_	SpaceAfter=No|TokenRange=40:48
9	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=48:49

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advmod	color:blue
1	Ixé	ixé	PRON	PRON	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	TokenRange=0:3
2	ti	ti	PART	NEG	Polarity=Neg	3	advmod	_	TokenRange=4:6
3	asasá	sasá	VERB	V	Number=Sing|Person=1|VerbForm=Fin	0	root	_	TokenRange=7:12
4	i	i	PRON	PRON2	Case=Gen|PronType=Prs	5	expl	_	TokenRange=13:14
5	puxí	puxí	ADV	ADV	_	3	advmod	_	TokenRange=15:19
6	mayé	mayé	SCONJ	CONJ	_	8	mark	_	TokenRange=20:24
7	aintá	aintá	PRON	PRON	Number=Plur|Person=3|PronType=Prs	8	nsubj	_	TokenRange=25:30
8	umbeú	mbeú	VERB	V	Person=3|VerbForm=Fin	3	advcl	_	SpaceAfter=No|TokenRange=31:36
9	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=36:37

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advmod	color:blue
1	Asú	sú	AUX	V	Number=Sing|Person=1|VerbForm=Fin	3	aux	_	TokenRange=0:3
2	ana	ana	PART	PFV	Aspect=Perf	3	advmod	_	TokenRange=4:7
3	asikari	sikari	VERB	V	Number=Sing|Person=1|VerbForm=Fin	0	root	_	TokenRange=8:15
4	ayapí	yapí	VERB	V	Number=Sing|Person=1|VerbForm=Fin	3	xcomp	_	TokenRange=16:21
5	se	se	PRON	PRON2	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod:poss	_	TokenRange=22:24
6	rimiara	simiara	NOUN	N	Number=Sing|Rel=Cont	4	obj	_	TokenRange=25:32
7	arã	arã	PART	FUT	Tense=Fut	6	advmod	_	SpaceAfter=No|TokenRange=33:36
8	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=36:37

~~~


