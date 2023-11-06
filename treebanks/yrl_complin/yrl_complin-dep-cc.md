---
layout: base
title:  'Statistics of cc in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `cc`

This relation is universal.

85 nodes (1%) are attached to their parents as `cc`.

75 instances of `cc` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.94117647058824.

The following 6 pairs of parts of speech are connected with `cc`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (58; 68% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (16; 19% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (4; 5% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (3; 4% instances), <tt><a href="yrl_complin-pos-PART.html">PART</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	[...]	[...]	PUNCT	ELIP	_	2	punct	_	TokenRange=0:5
2	remurari	murari	VERB	V	Number=Sing|Person=2|VerbForm=Fin	0	root	_	TokenRange=6:14
3	iké	iké	ADV	ADVDX	AdvType=Loc|Deixis=Prox|PronType=Dem	2	advmod	_	TokenRange=15:18
4	u	u	CCONJ	CCONJ	_	5	cc	_	TokenRange=19:20
5	remurari	murari	VERB	V	Number=Sing|Person=2|VerbForm=Fin	2	conj	_	TokenRange=21:29
6	interior	interior	NOUN	N	Number=Sing	5	obl	_	OrigLang=pt|TokenRange=30:38
7	kití	kití	ADP	ADP	_	6	case	_	TokenRange=39:43
8	[...]	[...]	PUNCT	ELIP	PunctType=Elip	5	punct	_	TokenRange=44:49

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 cc	color:blue
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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 cc	color:blue
1	Pemusatambika	musatambika	VERB	V	Number=Plur|Person=2|VerbForm=Fin	0	root	_	TokenRange=0:13
2	pe	pe	PRON	PRON2	Case=Gen|Number=Plur|Person=2|Poss=Yes|PronType=Prs	3	nmod:poss	_	TokenRange=14:16
3	pi	pi	NOUN	N	Number=Sing	4	nmod:poss	_	TokenRange=17:19
4	rapé	pé	NOUN	N	Number=Sing|Rel=Cont	1	obj	_	TokenRange=20:24
5	ti	ti	PART	NEG	PartType=Neg|Polarity=Neg	8	advmod	_	TokenRange=25:27
6	arama	arama	SCONJ	SCONJ	_	8	mark	_	TokenRange=28:33
7	kurí	kurí	PART	FUT	Tense=Fut	8	advmod	_	TokenRange=34:38
8	uyeréu	yeréu	VERB	V	Person=3|VerbForm=Fin	1	advcl	_	TokenRange=39:45
9	uyumuapiri	yumuapiri	VERB	V	Person=3|VerbForm=Fin	8	advcl	_	TokenRange=46:56
10	waá	waá	PRON	REL	Number=Sing|PronType=Rel	9	mark	_	MWEPOS=SCONJ|TokenRange=57:60
11	upé	upé	ADP	ADP	_	10	fixed	_	TokenRange=61:64
12	kwá	kwá	DET	DEMX	Deixis=Prox|Number=Sing|PronType=Dem	13	det	_	TokenRange=65:68
13	alejadu	alejadu	NOUN	N	Number=Sing	9	nsubj	_	Orig=aleijado|OrigLang=pt|SpaceAfter=No|TokenRange=69:76
14	,	,	PUNCT	PUNCT	_	16	punct	_	TokenRange=76:77
15	ma	ma	CCONJ	CCONJ	_	16	cc	_	TokenRange=78:80
16	puranga	puranga	ADJ	A	_	8	conj	_	TokenRange=81:88
17	arama	arama	SCONJ	SCONJ	_	16	mark	_	TokenRange=89:94
18	kurí	kurí	PART	FUT	Tense=Fut	16	advmod	_	TokenRange=95:99
19	aé	aé	PRON	PRON	Number=Sing|Person=3|PronType=Prs	16	nsubj	_	SpaceAfter=No|TokenRange=100:102
20	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=102:103

~~~


