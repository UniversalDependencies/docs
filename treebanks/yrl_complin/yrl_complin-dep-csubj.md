---
layout: base
title:  'Statistics of csubj in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `csubj`

This relation is universal.

14 nodes (0%) are attached to their parents as `csubj`.

12 instances of `csubj` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (5; 36% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (3; 21% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (2; 14% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="yrl_complin-pos-PART.html">PART</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj	color:blue
1	Yawaité	yawaité	ADJ	A	_	0	root	_	TokenRange=0:7
2	ne	ne	PRON	PRON2	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	3	nmod:poss	_	TokenRange=8:10
3	rangawa	sangawa	NOUN	N	Number=Sing|Rel=Cont	4	nsubj	_	TokenRange=11:18
4	usasawa	sasawa	VERB	V	Person=3|VerbForm=Fin	1	csubj	_	TokenRange=19:26
5	rewiké	wiké	VERB	V	Number=Sing|Person=2|VerbForm=Fin	3	acl	_	TokenRange=27:33
6	arama	arama	SCONJ	SCONJ	_	5	mark	_	TokenRange=34:39
7	i	i	PRON	PRON2	Case=Gen|Number=Sing|Person=3|PronType=Prs	5	obl	_	TokenRange=40:41
8	piri	piri	ADP	ADP	_	7	case	_	SpaceAfter=No|TokenRange=42:46
9	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=46:47

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Aiwana	aiwana	ADV	ADVT	AdvType=Tim	0	root	_	TokenRange=0:6
2	usú	sú	VERB	V	Person=3|VerbForm=Fin	1	csubj	_	TokenRange=7:10
3	arama	arama	SCONJ	SCONJ	_	2	mark	_	TokenRange=11:16
4	maíwa-itá	maíwa	NOUN	N	Number=Plur	5	nmod:poss	_	TokenRange=17:26
5	rapé	pé	NOUN	N	Number=Sing|Rel=Cont	2	obl	_	TokenRange=27:31
6	rupí	rupí	ADP	ADP	_	5	case	_	SpaceAfter=No|TokenRange=32:36
7	,	,	PUNCT	PUNCT	_	9	punct	_	TokenRange=36:37
8	i	i	PRON	PRON2	Case=Gen|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	TokenRange=38:39
9	piaíwa	piaíwa	VERB	A2	_	2	advcl	_	TokenRange=40:46
10	resé	resé	SCONJ	SCONJ	_	9	mark	_	TokenRange=47:51
11	taína-itá	taína	NOUN	N	Number=Plur	9	obl	_	TokenRange=52:61
12	irumu	irumu	ADP	ADP	_	11	case	_	SpaceAfter=No|TokenRange=62:67
13	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=67:68

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 csubj	color:blue
1	Kunhã	kunhã	NOUN	N	Number=Sing	6	vocative	_	SpaceAfter=No|TokenRange=0:5
2	,	,	PUNCT	PUNCT	_	1	punct	_	TokenRange=5:6
3	amú-wirandé	amú-wirandé	ADV	ADVT	AdvType=Tim	6	advmod	_	TokenRange=7:18
4	yasú	sú	AUX	AUXFR	Number=Plur|Person=1|VerbForm=Fin	6	aux	_	TokenRange=19:23
5	arama	arama	PART	FUT	Tense=Fut	6	advmod	_	TokenRange=24:29
6	yasapí	sapí	VERB	V	Number=Plur|Person=1|VerbForm=Fin	0	root	_	TokenRange=30:36
7	yané	yané	PRON	PRON2	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	8	nmod:poss	_	TokenRange=37:41
8	kupixawa	kupixawa	NOUN	N	Number=Sing	6	obj	_	SpaceAfter=No|TokenRange=42:50
9	,	,	PUNCT	PUNCT	_	11	punct	_	TokenRange=50:51
10	i	i	PRON	PRON2	Case=Gen|Number=Sing|Person=3|PronType=Prs	11	expl	_	TokenRange=52:53
11	katú	katú	VERB	A2	_	6	parataxis	_	TokenRange=54:58
12	renheẽ	nheẽ	VERB	V	Number=Sing|Person=2|VerbForm=Fin	11	csubj	_	TokenRange=59:65
13	ne	ne	PRON	PRON2	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	14	nmod:poss	_	TokenRange=66:68
14	manha	manha	NOUN	N	Number=Sing	12	iobj	_	TokenRange=69:74
15	supé	supé	ADP	ADP	_	14	case	_	SpaceAfter=No|TokenRange=75:79
16	,	,	PUNCT	PUNCT	_	18	punct	_	TokenRange=79:80
17	ne	ne	PRON	PRON2	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	18	nmod:poss	_	TokenRange=81:83
18	paya	paya	NOUN	N	Number=Sing	14	conj	_	TokenRange=84:88
19	supé	supé	ADP	ADP	_	18	case	_	SpaceAfter=No|TokenRange=89:93
20	.	.	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No|TokenRange=93:94

~~~


