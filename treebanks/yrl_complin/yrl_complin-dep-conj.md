---
layout: base
title:  'Statistics of conj in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `conj`

This relation is universal.

181 nodes (1%) are attached to their parents as `conj`.

181 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.5414364640884.

The following 19 pairs of parts of speech are connected with `conj`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (71; 39% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (64; 35% instances), <tt><a href="yrl_complin-pos-INTJ.html">INTJ</a></tt>-<tt><a href="yrl_complin-pos-INTJ.html">INTJ</a></tt> (10; 6% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="yrl_complin-pos-ADP.html">ADP</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="yrl_complin-pos-PART.html">PART</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 conj	color:blue
1	[...]	[...]	PUNCT	ELIP	_	2	punct	_	TokenRange=0:5
2	remurari	murari	VERB	V	Mood=Imp,Ind|Number=Sing|Person=2|VerbForm=Fin	0	root	_	TokenRange=6:14
3	iké	iké	ADV	ADVDX	AdvType=Loc|Deixis=Prox|PronType=Dem	2	advmod	_	TokenRange=15:18
4	u	u	CCONJ	CCONJ	_	5	cc	_	TokenRange=19:20
5	remurari	murari	VERB	V	Mood=Imp,Ind|Number=Sing|Person=2|VerbForm=Fin	2	conj	_	TokenRange=21:29
6	interior	interior	NOUN	N	Number=Sing	5	obl	_	OrigLang=por|TokenRange=30:38
7	kití	kití	ADP	ADP	AdpType=Post	6	case	_	TokenRange=39:43
8	[...]	[...]	PUNCT	ELIP	PunctType=Elip	5	punct	_	TokenRange=44:49

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 conj	color:blue
1	Aé	aé	PRON	PRON	Number=Sing|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:2
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 conj	color:blue
1	Uwatá	watá	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	0	root	_	TokenRange=0:5
2	uikú	ikú	AUX	AUXFS	Mood=Ind|Person=3|VerbForm=Fin	1	aux	_	TokenRange=6:10
3	kaá	kaá	NOUN	N	Number=Sing	1	obl	_	TokenRange=11:14
4	rupí	rupí	ADP	ADP	AdpType=Post	3	case	_	SpaceAfter=No|TokenRange=15:19
5	,	,	PUNCT	PUNCT	_	6	punct	_	TokenRange=19:20
6	usendú	sendú	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	1	parataxis	_	TokenRange=21:27
7	tiapú	tiapú	VERB	V3	Mood=Ind|Number=Sing|Person=3|Rel=NCont|VerbForm=Fin	6	ccomp	_	TokenRange=28:33
8	kwayé	kwayé	ADV	ADVA	AdvType=Man	7	advmod	_	SpaceAfter=No|TokenRange=34:39
9	:	:	PUNCT	PUNCT	_	10	punct	_	TokenRange=39:40
10	Txáu	txáu	INTJ	INTJ	_	7	parataxis	_	SpaceAfter=No|TokenRange=41:45
11	!	!	PUNCT	PUNCT	_	10	punct	_	TokenRange=45:46
12	txáu	txáu	INTJ	INTJ	_	10	conj	_	SpaceAfter=No|TokenRange=47:51
13	!	!	PUNCT	PUNCT	_	12	punct	_	TokenRange=51:52
14	txáu	txáu	INTJ	INTJ	_	10	conj	_	SpaceAfter=No|TokenRange=53:57
15	!	!	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=57:58

~~~


