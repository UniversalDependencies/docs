---
layout: base
title:  'Statistics of cc in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `cc`

This relation is universal.

15 nodes (1%) are attached to their parents as `cc`.

15 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.26666666666667.

The following 4 pairs of parts of speech are connected with `cc`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (8; 53% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (4; 27% instances), <tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (2; 13% instances), <tt><a href="yrl_complin-pos-PART.html">PART</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Indé	indé	PRON	PRON	Number=Sing|Person=2|PronType=Prs	2	nsubj	_	TokenRange=0:4
2	rewewé	wewé	VERB	V	Number=Sing|Person=2|VerbForm=Fin	0	root	_	TokenRange=5:11
3	yepé	yepé	PART	FRUST	Aspect=Frus	2	advmod	_	TokenRange=12:16
4	kutara	kutara	ADV	ADV	_	2	advmod	_	SpaceAfter=No|TokenRange=17:23
5	,	,	PUNCT	PUNCT	_	7	punct	_	TokenRange=23:24
6	ma	ma	CCONJ	CCONJ	_	7	cc	_	TokenRange=25:27
7	remaã	maã	VERB	V	Number=Sing|Person=2|VerbForm=Fin	2	conj	_	TokenRange=28:33
8	mamentu	mamentu	ADV	ADV	_	9	advmod	_	TokenRange=34:41
9	resika	sika	VERB	V	Number=Sing|Person=2|VerbForm=Fin	7	ccomp	_	SpaceAfter=No|TokenRange=42:48
10	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=48:49

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Kwá	kwá	DET	DEMX	Deixis=Prox|Number=Sing|PronType=Dem	2	det	_	TokenRange=0:3
2	maniaka	maniaka	NOUN	N	Number=Sing	4	obl	_	TokenRange=4:11
3	irumu	irumu	ADP	ADP	_	2	case	_	TokenRange=12:17
4	yamunhã	munhã	VERB	V	Number=Plur|Person=1|VerbForm=Fin	0	root	_	TokenRange=18:25
5	meyú	meyú	NOUN	N	Number=Sing	4	obj	_	TokenRange=26:30
6	asuí	asuí	CCONJ	CONJ	_	7	cc	_	TokenRange=31:35
7	masuka	masuka	NOUN	N	Number=Sing	5	conj	_	SpaceAfter=No|TokenRange=36:42
8	,	,	PUNCT	PUNCT	_	9	punct	_	TokenRange=42:43
9	umeẽ	meẽ	VERB	V	Person=3|VerbForm=Fin	4	parataxis	_	TokenRange=44:48
10	turusú	turusú	DET	IND	PronType=Ind	11	det	_	TokenRange=49:55
11	tipiaka	tipiaka	NOUN	N	Number=Sing	9	obj	_	SpaceAfter=No|TokenRange=56:63
12	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=63:64

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 cc	color:blue
1	Resú	sú	VERB	V	Number=Sing|Person=2|VerbForm=Fin	9	advcl	_	TokenRange=0:4
2	arama	arama	SCONJ	SCONJ	_	1	mark	_	TokenRange=5:10
3	ne	ne	PRON	PRON2	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	4	nmod:poss	_	TokenRange=11:13
4	ruka	uka	NOUN	N	Number=Sing|Rel=Cont	1	obl	_	TokenRange=14:18
5	arama	arama	PART	FUT	Tense=Fut	4	acl:relcl	_	TokenRange=19:24
6	waá	waá	PRON	REL	Number=Sing	5	nsubj	_	TokenRange=25:28
7	kití	kití	ADP	ADP	_	4	case	_	SpaceAfter=No|TokenRange=29:33
8	,	,	PUNCT	PUNCT	_	1	punct	_	TokenRange=33:34
9	awá	awá	PRON	INT	PronType=Int	0	root	_	TokenRange=35:38
10	taá	taá	PART	CQ	PartType=Int	9	advmod	_	TokenRange=39:42
11	ne	ne	PRON	PRON2	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	12	nmod:poss	_	TokenRange=43:45
12	pilutu	pilutu	NOUN	N	Number=Sing	9	nsubj	_	SpaceAfter=No|TokenRange=46:52
13	,	,	PUNCT	PUNCT	_	15	punct	_	TokenRange=52:53
14	u	u	CCONJ	CCONJ	_	15	cc	_	TokenRange=54:55
15	kristu	kristu	PROPN	PROPN	_	12	appos	_	TokenRange=56:62
16	u	u	CCONJ	CCONJ	_	17	cc	_	TokenRange=63:64
17	Yuruparí	yuruparí	PROPN	PROPN	_	15	conj	_	SpaceAfter=No|TokenRange=65:73
18	?	?	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No|TokenRange=73:74

~~~


