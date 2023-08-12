---
layout: base
title:  'Statistics of nmod in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="yrl_complin-dep-nmod-poss.html">nmod:poss</a></tt>.

20 nodes (0%) are attached to their parents as `nmod`.

20 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.95.

The following 7 pairs of parts of speech are connected with `nmod`: <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (8; 40% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (6; 30% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="yrl_complin-pos-NUM.html">NUM</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="yrl_complin-pos-NUM.html">NUM</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod	color:blue
1	Aintá	aintá	PRON	PRON	Number=Plur|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:5
2	urikú	rikú	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=6:11
3	yepé	yepé	DET	ART	Definite=Ind|PronType=Art	4	det	_	TokenRange=12:16
4	yawara	yawara	NOUN	N	Number=Sing	2	obj	_	TokenRange=17:23
5	paka	paka	NOUN	N	Number=Sing	6	nmod:poss	_	TokenRange=24:28
6	rupiara	supiara	NOUN	N	Number=Sing|Rel=Cont	4	nmod	_	SpaceAfter=No|TokenRange=29:36
7	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=36:37

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	Awá	awá	PRON	INT	PronType=Int	5	nsubj	_	TokenRange=0:3
2	taá	taá	PART	CQ	PartType=Int	5	advmod	_	TokenRange=4:7
3	penhé	penhé	PRON	PRON	_	1	nmod	_	TokenRange=8:13
4	suí	suí	ADP	ADP	_	3	case	_	TokenRange=14:17
5	usú	sú	VERB	V	Person=3|VerbForm=Fin	0	root	_	_
6	putari	putari	AUX	AUXN	Compound=Yes|VerbForm=Inf	5	aux	_	_
7	?	?	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=29:30

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod	color:blue
1	Mayé	mayé	ADV	ADVRA	AdvType=Man|PronType=Int	6	nsubj	_	TokenRange=0:4
2	waá	waá	PRON	REL	Number=Sing|PronType=Rel	1	fixed	_	TokenRange=5:8
3	taá	taá	PART	CQ	PartType=Int	6	advmod	_	TokenRange=9:12
4	pe	pe	PRON	PRON2	Case=Gen|Number=Plur|Person=2|PronType=Prs	1	nmod	_	TokenRange=13:15
5	suiwara	suiwara	ADP	ADP	_	4	case	_	TokenRange=16:23
6	uxari	xari	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=24:29
7	kwá	kwá	DET	DEMX	Deixis=Prox|Number=Sing|PronType=Dem	8	det	_	TokenRange=30:33
8	apukuitawa	apukuitawa	NOUN	N	Number=Sing	6	obj	_	TokenRange=34:44
9	se	se	PRON	PRON2	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	10	nmod:poss	_	TokenRange=45:47
10	igara	igara	NOUN	N	Number=Sing	6	obl	_	TokenRange=48:53
11	pupé	pupé	ADP	ADP	_	10	case	_	SpaceAfter=No|TokenRange=54:58
12	?	?	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No|TokenRange=58:59

~~~


