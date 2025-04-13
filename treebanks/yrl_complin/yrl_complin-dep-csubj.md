---
layout: base
title:  'Statistics of csubj in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `csubj`

This relation is universal.

18 nodes (0%) are attached to their parents as `csubj`.

16 instances of `csubj` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.27777777777778.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (6; 33% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (3; 17% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (3; 17% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="yrl_complin-pos-PART.html">PART</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj	color:blue
1	Yawaité	yawaité	ADJ	A	_	0	root	_	TokenRange=0:7
2	ne	ne	PRON	PRON2	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	3	nmod:poss	_	TokenRange=8:10
3	rangawa	sangawa	NOUN	N	Number=Sing|Rel=Cont	4	nsubj	_	TokenRange=11:18
4	usasawa	sasawa	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	1	csubj	_	TokenRange=19:26
5	rewiké	wiké	VERB	V	Mood=Imp,Ind|Number=Sing|Person=2|VerbForm=Fin	3	acl	_	TokenRange=27:33
6	arama	arama	SCONJ	SCONJ	_	5	mark	_	TokenRange=34:39
7	i	i	PRON	PRON2	Case=Gen|Number=Sing|Person=3|PronType=Prs	5	obl	_	TokenRange=40:41
8	piri	piri	ADP	ADP	AdpType=Post	7	case	_	SpaceAfter=No|TokenRange=42:46
9	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=46:47

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Aiwana	aiwana	ADV	ADVT	AdvType=Tim	0	root	_	TokenRange=0:6
2	usú	sú	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	1	csubj	_	TokenRange=7:10
3	arama	arama	SCONJ	SCONJ	_	2	mark	_	TokenRange=11:16
4	maíwa-itá	maíwa	NOUN	N	Number=Plur	5	nmod:poss	_	TokenRange=17:26
5	rapé	pé	NOUN	N	Number=Sing|Rel=Cont	2	obl	_	TokenRange=27:31
6	rupí	rupí	ADP	ADP	AdpType=Post	5	case	_	SpaceAfter=No|TokenRange=32:36
7	,	,	PUNCT	PUNCT	_	9	punct	_	TokenRange=36:37
8	i	i	PRON	PRON2	Case=Gen|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	TokenRange=38:39
9	piaíwa	piaíwa	VERB	V2	Mood=Ind|VerbForm=Fin	2	advcl	_	TokenRange=40:46
10	resé	resé	SCONJ	SCONJ	_	9	mark	_	TokenRange=47:51
11	taína-itá	taína	NOUN	N	Number=Plur	9	obl	_	TokenRange=52:61
12	irumu	irumu	ADP	ADP	AdpType=Post	11	case	_	SpaceAfter=No|TokenRange=62:67
13	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=67:68

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	I	i	PRON	PRON2	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	expl	_	TokenRange=0:1
2	katú	katú	VERB	V2	Mood=Ind|VerbForm=Fin	0	root	_	TokenRange=2:6
3	yandé	yandé	PRON	PRON	Number=Plur|Person=1|PronType=Prs	4	nsubj	_	TokenRange=7:12
4	yamunhã	munhã	VERB	V	Mood=Ind|Number=Plur|Person=1|VerbForm=Fin	2	csubj	_	TokenRange=13:20
5	dabukurí	dabukurí	NOUN	N	Number=Sing	4	obj	_	TokenRange=21:29
6	aintá	aintá	PRON	PRON2	Case=Gen|Number=Plur|Person=3|PronType=Prs	4	obl	_	TokenRange=30:35
7	xupé	xupé	ADP	ADP	AdpType=Post	6	case	_	TokenRange=36:40
8	umarí	umarí	NOUN	N	Number=Sing	4	obl	_	TokenRange=41:46
9	suiwara	suiwara	ADP	ADP	AdpType=Post	8	case	_	TokenRange=47:54
10	intí	intí	PART	NEG	PartType=Neg|Polarity=Neg	13	advmod	_	TokenRange=55:59
11	arama	arama	SCONJ	SCONJ	_	13	mark	_	TokenRange=60:65
12	aintá	aintá	PRON	PRON	Number=Plur|Person=3|PronType=Prs	13	nsubj	_	TokenRange=66:71
13	uyuká	yuká	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	2	advcl	_	TokenRange=72:77
14	yandé	yandé	PRON	PRON	Number=Plur|Person=1|PronType=Prs	13	obj	_	SpaceAfter=No|TokenRange=78:83
15	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=83:84

~~~


