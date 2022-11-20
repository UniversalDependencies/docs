---
layout: base
title:  'Statistics of xcomp in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `xcomp`

This relation is universal.

21 nodes (1%) are attached to their parents as `xcomp`.

21 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71428571428571.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (18; 86% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (3; 14% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Maã	maã	PRON	INT	PronType=Int	3	obj	_	TokenRange=0:3
2	taá	taá	PART	CQ	_	3	advmod	_	TokenRange=4:7
3	rewasemu	wasemu	VERB	V	Number=Sing|Person=2|VerbForm=Fin	0	root	_	TokenRange=8:16
4	puxuwera	puxuwera	VERB	A	_	3	xcomp	_	SpaceAfter=No|TokenRange=17:25
5	?	?	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=25:26

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Uyeréu	yeréu	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=0:6
2	yepé	yepé	DET	ART	Definite=Ind|PronType=Art	3	det	_	TokenRange=7:11
3	pirantá	pirantá	NOUN	N	Number=Sing	1	xcomp	_	TokenRange=12:19
4	turusú	turusú	ADJ	A	_	3	acl:relcl	_	TokenRange=20:26
5	waá	waá	PRON	REL	Number=Sing|PronType=Rel	4	nsubj	_	SpaceAfter=No|TokenRange=27:30
6	,	,	PUNCT	PUNCT	_	10	punct	_	TokenRange=30:31
7	aité	aité	PRON	EMP	PronType=Emp	9	dislocated	_	TokenRange=32:36
8	kwá	kwá	DET	DEMX	Deixis=Prox|Number=Sing|PronType=Dem	7	det	_	TokenRange=37:40
9	sera	sera	NOUN	N	Number=Sing|Number[psor]=Sing|Person[psor]=3|Rel=NCont	10	nsubj	_	TokenRange=41:45
10	Kurukuí	kurukuí	PROPN	PROPN	_	1	parataxis	_	SpaceAfter=No|TokenRange=46:53
11	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=53:54

~~~


