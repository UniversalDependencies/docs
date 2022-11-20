---
layout: base
title:  'Statistics of nmod in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="yrl_complin-dep-nmod-poss.html">nmod:poss</a></tt>.

10 nodes (0%) are attached to their parents as `nmod`.

10 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.3.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (4; 40% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (2; 20% instances), <tt><a href="yrl_complin-pos-NUM.html">NUM</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="yrl_complin-pos-NUM.html">NUM</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (1; 10% instances).


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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod	color:blue
1	Mayé	mayé	ADV	ADVR	_	6	nsubj	_	TokenRange=0:4
2	waá	waá	PRON	REL	Number=Sing	1	fixed	_	TokenRange=5:8
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod	color:blue
1	Yepé	yepé	NUM	CARD	NumType=Card	6	nsubj	_	TokenRange=0:4
2	paá	paá	PART	RPRT	Evident=Nfh|PartType=Mod	6	advmod	_	TokenRange=5:8
3	Iahuixa	iahuixa	PROPN	PROPN	_	4	nmod:poss	_	TokenRange=9:16
4	apigawa-itá	apigawa	NOUN	N	Number=Plur	1	nmod	_	TokenRange=17:28
5	suiwara	suiwara	ADP	ADP	_	4	case	_	TokenRange=29:36
6	uyupisirú	yupisirú	VERB	V	Person=3|VerbForm=Fin	0	root	_	_
7	kwáu	kwáu	AUX	AUXN	VerbForm=Inf	6	aux	_	_
8	,	,	PUNCT	PUNCT	_	11	punct	_	TokenRange=51:52
9	aiwana	aiwana	ADV	ADV	_	11	advmod	_	TokenRange=53:59
10	usú	sú	AUX	V	Person=3|VerbForm=Fin	11	aux	_	TokenRange=60:63
11	umbeú	mbeú	VERB	V	Person=3|VerbForm=Fin	6	parataxis	_	TokenRange=64:69
12	amú	amú	DET	IND	Number=Sing|PronType=Ind	13	det	_	TokenRange=70:73
13	mira-itá	mira	NOUN	N	Number=Plur	11	iobj	_	TokenRange=74:82
14	supé	supé	ADP	ADP	_	13	case	_	TokenRange=83:87
15	maã	maã	PRON	INT	PronType=Int	11	obj	_	TokenRange=88:91
16	Buopé	buopé	PROPN	PROPN	_	17	nsubj	_	TokenRange=92:97
17	umunhã	munhã	VERB	V	Person=3|VerbForm=Fin	15	acl:relcl	_	TokenRange=98:104
18	waá	waá	PRON	REL	Number=Sing	17	obj	_	SpaceAfter=No|TokenRange=105:108
19	.	.	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No|TokenRange=108:109

~~~


