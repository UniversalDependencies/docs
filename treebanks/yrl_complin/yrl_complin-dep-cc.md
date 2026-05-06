---
layout: base
title:  'Statistics of cc in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `cc`

This relation is universal.

128 nodes (0%) are attached to their parents as `cc`.

102 instances of `cc` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9453125.

The following 7 pairs of parts of speech are connected with `cc`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (77; 60% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (33; 26% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (6; 5% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (4; 3% instances), <tt><a href="yrl_complin-pos-PART.html">PART</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (3; 2% instances), <tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (3; 2% instances), <tt><a href="yrl_complin-pos-NUM.html">NUM</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	[...]	[...]	PUNCT	ELIP	_	2	punct	_	TokenRange=0:5
2	remurari	murari	VERB	V	Mood=Imp,Ind|Number=Sing|Person=2|VerbForm=Fin	0	root	_	TokenRange=6:14
3	iké	iké	ADV	ADVDX	AdvType=Loc|Deixis=Prox|PronType=Dem	2	advmod	_	TokenRange=15:18
4	u	u	CCONJ	CCONJ	_	5	cc	_	TokenRange=19:20
5	remurari	murari	VERB	V	Mood=Imp,Ind|Number=Sing|Person=2|VerbForm=Fin	2	conj	_	TokenRange=21:29
6	interior	interior	NOUN	N	Number=Sing	5	obl	_	OrigLang=pt|TokenRange=30:38
7	kití	kití	ADP	ADP	AdpType=Post	6	case	_	TokenRange=39:43
8	[...]	[...]	PUNCT	ELIP	PunctType=Elip	5	punct	_	TokenRange=44:49

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 cc	color:blue
1	Aé	aé	PRON	PRON	Case=Acc,Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:2
2	upiripana	piripana	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	0	root	_	TokenRange=3:12
3	kurí	kurí	PART	FUT	Tense=Fut	2	advmod	_	TokenRange=13:17
4	maã-itá	maã	NOUN	N	Number=Plur	2	obj	_	TokenRange=18:25
5	i	i	PRON	PRON2	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	_	TokenRange=26:27
6	mimbira	mimbira	NOUN	N	Number=Sing	2	iobj	_	TokenRange=28:35
7	supé	supé	ADP	ADP	AdpType=Post	6	case	_	SpaceAfter=No|TokenRange=36:40
8	,	,	PUNCT	PUNCT	_	10	punct	_	TokenRange=40:41
9	i	i	PRON	PRON2	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	nmod:poss	_	TokenRange=42:43
10	mena	mena	NOUN	N	Number=Sing	6	conj	_	TokenRange=44:48
11	supé	supé	ADP	ADP	AdpType=Post	10	case	_	TokenRange=49:53
12	yuíri	yuíri	CCONJ	CCONJ	_	10	cc	_	SpaceAfter=No|TokenRange=54:59
13	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=59:60

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 cc	color:blue
1	Hapuderi	puderi	AUX	AUXFR	Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	2	aux	_	TokenRange=0:8
2	hamunhã	munhã	VERB	V	Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	0	root	_	TokenRange=9:16
3	panhẽ	panhẽ	DET	TOT	PronType=Tot	4	det	_	TokenRange=17:22
4	maã	maã	PRON	RELF	PronType=Rel	2	obj	_	TokenRange=23:26
5	haputari	putari	VERB	V	Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	4	acl:relcl	_	TokenRange=27:35
6	hamunhã	munhã	VERB	V	Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	5	xcomp	_	SpaceAfter=No|TokenRange=36:43
7	,	,	PUNCT	PUNCT	_	12	punct	_	TokenRange=43:44
8	ma	ma	CCONJ	CCONJ	_	12	cc	_	TokenRange=45:47
9	ti	ti	PART	NEG	PartType=Neg|Polarity=Neg	12	advmod	_	TokenRange=48:50
10	panhẽ	panhẽ	PRON	TOT	PronType=Tot	12	nsubj	_	TokenRange=51:56
11	umunhã	munhã	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	10	acl	_	TokenRange=57:63
12	puranga	puranga	ADJ	A	_	2	conj	_	TokenRange=64:71
13	ixé	ixé	PRON	PRON	Case=Acc,Nom|Number=Sing|Person=1|PronType=Prs	12	obl	_	TokenRange=72:75
14	arama	arama	ADP	ADP	AdpType=Post	13	case	_	SpaceAfter=No|TokenRange=76:81
15	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=81:82

~~~


