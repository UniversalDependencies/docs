---
layout: base
title:  'Statistics of csubj in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

1 instances of `csubj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Indé	indé	PRON	PRON	Number=Sing|Person=2|PronType=Prs	0	root	_	TokenRange=0:4
2	será	será	PART	PQ	PartType=Int	1	advmod	_	TokenRange=5:9
3	ti	ti	PART	NEG	PartType=Neg|Polarity=Neg	5	advmod	_	TokenRange=10:12
4	waá	waá	PRON	REL	Number=Sing	5	nsubj	_	TokenRange=13:16
5	repusú	pusú	VERB	V	Number=Sing|Person=2|VerbForm=Fin	1	csubj	_	TokenRange=17:23
6	ixé	ixé	PRON	PRON	Number=Sing|Person=1|PronType=Prs	5	obj	_	SpaceAfter=No|TokenRange=24:27
7	?	?	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=27:28
8	!	!	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=28:29

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubj	color:blue
1	Awá	awá	PRON	IND	PronType=Ind	2	nsubj	_	TokenRange=0:3
2	nhaã	nhaã	PRON	DEMS	Deixis=Remt|Number=Sing|PronType=Dem	8	csubj	_	TokenRange=4:8
3	uikú	ikú	VERB	V	Person=3|VerbForm=Fin	2	acl:relcl	_	TokenRange=9:13
4	waá	waá	PRON	REL	Number=Sing	3	nsubj	_	TokenRange=14:17
5	suayana	suayana	NOUN	N	Number=Sing|Number[psor]=Sing|Person[psor]=3|Rel=NCont	3	obl	_	TokenRange=18:25
6	irumu	irumu	ADP	ADP	_	5	case	_	TokenRange=26:31
7	ti	ti	PART	NEG	PartType=Neg|Polarity=Neg	8	advmod	_	TokenRange=32:34
8	upituú	pituú	VERB	V	Person=3|VerbForm=Fin	0	root	_	_
9	kwáu	kwáu	AUX	AUXN	Compound=Yes|VerbForm=Inf	8	aux	_	_
10	.	.	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No|TokenRange=47:48

~~~


