---
layout: base
title:  'Statistics of iobj in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `iobj`

This relation is universal.

59 nodes (1%) are attached to their parents as `iobj`.

58 instances of `iobj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.84745762711864.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (40; 68% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (15; 25% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="yrl_complin-pos-AUX.html">AUX</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Rembeú	mbeú	VERB	V	Number=Sing|Person=2|VerbForm=Fin	0	root	_	TokenRange=0:6
2	aintá	aintá	PRON	PRON2	Case=Gen|Number=Plur|Person=3|PronType=Prs	1	iobj	_	TokenRange=7:12
3	supé	supé	ADP	ADP	_	2	case	_	TokenRange=13:17
4	puranga	puranga	ADJ	A	_	1	ccomp	_	TokenRange=18:25
5	ixé	ixé	PRON	PRON	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	SpaceAfter=No|TokenRange=26:29
6	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=29:30

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 iobj	color:blue
1	Aé	aé	PRON	PRON	Number=Sing|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:2
2	upiripana	piripana	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=3:12
3	kurí	kurí	PART	FUT	Tense=Fut	2	advmod	_	TokenRange=13:17
4	maã-itá	maã	NOUN	N	Number=Plur	2	obj	_	TokenRange=18:25
5	i	i	PRON	PRON2	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	_	TokenRange=26:27
6	mimbira	mimbira	NOUN	N	Number=Sing	2	iobj	_	TokenRange=28:35
7	supé	supé	ADP	ADP	_	6	case	_	SpaceAfter=No|TokenRange=36:40
8	,	,	PUNCT	PUNCT	_	10	punct	_	TokenRange=40:41
9	i	i	PRON	PRON2	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	nmod:poss	_	TokenRange=42:43
10	mena	mena	NOUN	N	Number=Sing	6	conj	_	TokenRange=44:48
11	supé	supé	ADP	ADP	_	10	case	_	TokenRange=49:53
12	yuíri	yuíri	CCONJ	CCONJ	_	10	cc	_	SpaceAfter=No|TokenRange=54:59
13	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=59:60

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Aé	aé	PRON	PRON	Number=Sing|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:2
2	unheẽ	nheẽ	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=3:8
3	Maria	maria	PROPN	PROPN	_	2	iobj	_	TokenRange=9:14
4	supé	supé	ADP	ADP	_	3	case	_	SpaceAfter=No|TokenRange=15:19
5	:	:	PUNCT	PUNCT	_	9	punct	_	TokenRange=19:20
6	—	—	PUNCT	PUNCT	_	9	punct	_	TokenRange=20:21
7	Maria	maria	PROPN	PROPN	_	9	vocative	_	SpaceAfter=No|TokenRange=22:27
8	,	,	PUNCT	PUNCT	_	7	punct	_	TokenRange=27:28
9	mamé	mamé	ADV	ADVRC	AdvType=Loc|PronType=Int	2	ccomp	_	TokenRange=29:33
10	taá	taá	PART	CQ	PartType=Int	9	advmod	_	TokenRange=34:37
11	pindá-itá	pindá	NOUN	N	Number=Plur	9	nsubj	_	TokenRange=38:47
12	uikú	ikú	AUX	COP	Person=3|VerbForm=Fin	9	cop	_	SpaceAfter=No|TokenRange=48:52
13	?	?	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=52:53

~~~


