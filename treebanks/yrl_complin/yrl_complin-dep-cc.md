---
layout: base
title:  'Statistics of cc in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `cc`

This relation is universal.

68 nodes (1%) are attached to their parents as `cc`.

60 instances of `cc` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83823529411765.

The following 6 pairs of parts of speech are connected with `cc`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (47; 69% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (13; 19% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (3; 4% instances), <tt><a href="yrl_complin-pos-PART.html">PART</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (2; 3% instances), <tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (2; 3% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 cc	color:blue
1	Maita	maita	ADV	ADVRA	AdvType=Man|PronType=Int	4	advmod	_	TokenRange=0:5
2	iwasuíma	iwasuíma	ADJ	A	_	0	root	_	TokenRange=6:14
3	xinga	xinga	ADV	ADVS	_	2	advmod	_	TokenRange=15:20
4	ambeú	mbeú	VERB	V	Number=Sing|Person=1|VerbForm=Fin	2	csubj	_	SpaceAfter=No|TokenRange=21:26
5	:	:	PUNCT	PUNCT	_	7	punct	_	TokenRange=26:27
6	"	"	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No|TokenRange=27:28
7	Amburi	mburi	VERB	V	Number=Sing|Person=1|VerbForm=Fin	4	ccomp	_	TokenRange=29:35
8	ne	ne	PRON	PRON2	Case=Gen|Number=Sing|Person=2|PronType=Prs	7	obl	_	TokenRange=36:38
9	suí	suí	ADP	ADP	_	8	case	_	TokenRange=39:42
10	ne	ne	PRON	PRON2	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	11	nmod:poss	_	TokenRange=43:45
11	pekadu	pekado	NOUN	N	Number=Sing	7	obj	_	Orig=pecado|OrigLang=pt|SpaceAfter=No|TokenRange=46:52
12	"	"	PUNCT	PUNCT	_	7	punct	_	TokenRange=52:53
13	u	u	CCONJ	CCONJ	_	14	cc	_	TokenRange=54:55
14	iwasuíma	iwasuíma	ADJ	A	_	2	conj	_	TokenRange=56:64
15	xinga	xinga	ADV	ADVS	_	14	advmod	_	TokenRange=65:70
16	ambeú	mbeú	VERB	V	Number=Sing|Person=1|VerbForm=Fin	14	csubj	_	TokenRange=71:76
17	"	"	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No|TokenRange=76:77
18	Repuãmu	puãmu	VERB	V	Number=Sing|Person=2|VerbForm=Fin	16	ccomp	_	SpaceAfter=No|TokenRange=78:85
19	,	,	PUNCT	PUNCT	_	20	punct	_	TokenRange=85:86
20	rewatá	watá	VERB	V	Number=Sing|Person=2|VerbForm=Fin	18	parataxis	_	SpaceAfter=No|TokenRange=87:93
21	"	"	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No|TokenRange=93:94
22	?	?	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=94:95

~~~


