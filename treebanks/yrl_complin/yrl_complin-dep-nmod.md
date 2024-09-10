---
layout: base
title:  'Statistics of nmod in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="yrl_complin-dep-nmod-poss.html">nmod:poss</a></tt>.

44 nodes (0%) are attached to their parents as `nmod`.

44 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.86363636363636.

The following 10 pairs of parts of speech are connected with `nmod`: <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (23; 52% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (8; 18% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="yrl_complin-pos-NUM.html">NUM</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="yrl_complin-pos-NUM.html">NUM</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	Aé	aé	PRON	PRON	Number=Sing|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:2
2	urasú	rasú	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=3:8
3	pirá	pirá	NOUN	N	Number=Sing	2	obj	_	TokenRange=9:13
4	suka	uka	NOUN	N	Number=Sing|Number[psor]=Sing|Person[psor]=3|Rel=NCont	3	nmod	_	TokenRange=14:18
5	suí	suí	ADP	ADP	AdpType=Post	4	case	_	TokenRange=19:22
6	sukwera	sukwera	NOUN	N	Number=Sing|Number[psor]=Sing|Person[psor]=3|Rel=NCont	8	nsubj	_	TokenRange=23:30
7	waá	waá	PRON	REL	Number=Sing|PronType=Rel	6	nmod:poss	_	TokenRange=31:34
8	membeka	membeka	ADJ	A	_	3	acl:relcl	_	SpaceAfter=No|TokenRange=35:42
9	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=42:43

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	Awá	awá	PRON	INT	PronType=Int	5	nsubj	_	TokenRange=0:3
2	taá	taá	PART	CQ	PartType=Int	5	advmod	_	TokenRange=4:7
3	penhẽ	penhẽ	PRON	PRON	Number=Plur|Person=2|PronType=Prs	1	nmod	_	TokenRange=8:13
4	suí	suí	ADP	ADP	AdpType=Post	3	case	_	TokenRange=14:17
5	usú	sú	VERB	V	Person=3|VerbForm=Fin	0	root	_	_
6	putari	putari	AUX	AUXN	Compound=Yes|VerbForm=Inf	5	aux	_	_
7	?	?	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=28:29

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
5	suiwara	suiwara	ADP	ADP	AdpType=Post	4	case	_	TokenRange=16:23
6	uxari	xari	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=24:29
7	kwá	kwá	DET	DEMX	Deixis=Prox|Number=Sing|PronType=Dem	8	det	_	TokenRange=30:33
8	apukuitawa	apukuitawa	NOUN	N	Number=Sing	6	obj	_	TokenRange=34:44
9	se	se	PRON	PRON2	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	10	nmod:poss	_	TokenRange=45:47
10	igara	igara	NOUN	N	Number=Sing	6	obl	_	TokenRange=48:53
11	pupé	pupé	ADP	ADP	AdpType=Post	10	case	_	SpaceAfter=No|TokenRange=54:58
12	?	?	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No|TokenRange=58:59

~~~


