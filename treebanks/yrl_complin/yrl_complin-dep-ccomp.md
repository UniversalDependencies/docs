---
layout: base
title:  'Statistics of ccomp in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `ccomp`

This relation is universal.

252 nodes (2%) are attached to their parents as `ccomp`.

243 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.31746031746032.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (179; 71% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (24; 10% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (12; 5% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PART.html">PART</a></tt> (11; 4% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (10; 4% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-INTJ.html">INTJ</a></tt> (9; 4% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (6; 2% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	[...]	[...]	PUNCT	ELIP	_	4	punct	_	TokenRange=0:5
2	ti	ti	PART	NEG	PartType=Neg|Polarity=Neg	4	advmod	_	TokenRange=6:8
3	aintá	aintá	PRON	PRON	Number=Plur|Person=3|PronType=Prs	4	nsubj	_	TokenRange=9:14
4	ukwá	kwá	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=15:19
5	maã	maã	PRON	INT	PronType=Int	7	obj	_	TokenRange=20:23
6	kurupira-itá	kurupira	NOUN	N	Number=Plur	7	nsubj	_	TokenRange=24:36
7	umunhã	munhã	VERB	V	Person=3|VerbForm=Fin	4	ccomp	_	TokenRange=37:43
8	yané	yané	PRON	PRON2	Case=Gen|Number=Plur|Person=1|PronType=Prs	7	obl	_	TokenRange=44:48
9	irũ	irũ	ADP	ADP	AdpType=Post	8	case	_	SpaceAfter=No|TokenRange=49:52
10	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=52:53

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Anheẽ	nheẽ	VERB	V	Number=Sing|Person=1|VerbForm=Fin	0	root	_	TokenRange=0:5
2	"	"	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=5:6
3	puranga	puranga	ADJ	A	_	4	amod	_	TokenRange=7:14
4	ara	ara	NOUN	N	Number=Sing	1	ccomp	_	SpaceAfter=No|TokenRange=15:18
5	"	"	PUNCT	PUNCT	_	4	punct	_	TokenRange=18:19
6	aintá	aintá	PRON	PRON2	Case=Gen|Number=Plur|Person=3|PronType=Prs	1	iobj	_	TokenRange=20:25
7	supé	supé	ADP	ADP	AdpType=Post	6	case	_	SpaceAfter=No|TokenRange=26:30
8	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=30:31

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Rembeú	mbeú	VERB	V	Number=Sing|Person=2|VerbForm=Fin	0	root	_	TokenRange=0:6
2	aintá	aintá	PRON	PRON2	Case=Gen|Number=Plur|Person=3|PronType=Prs	1	iobj	_	TokenRange=7:12
3	supé	supé	ADP	ADP	AdpType=Post	2	case	_	TokenRange=13:17
4	puranga	puranga	ADJ	A	_	1	ccomp	_	TokenRange=18:25
5	ixé	ixé	PRON	PRON	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	SpaceAfter=No|TokenRange=26:29
6	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=29:30

~~~


