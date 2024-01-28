---
layout: base
title:  'Statistics of conj in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `conj`

This relation is universal.

137 nodes (1%) are attached to their parents as `conj`.

137 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.81021897810219.

The following 16 pairs of parts of speech are connected with `conj`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (60; 44% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (45; 33% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="yrl_complin-pos-INTJ.html">INTJ</a></tt>-<tt><a href="yrl_complin-pos-INTJ.html">INTJ</a></tt> (5; 4% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="yrl_complin-pos-ADP.html">ADP</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 conj	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 conj	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 conj	color:blue
1	Kwá	kwá	DET	DEMX	Deixis=Prox|Number=Sing|PronType=Dem	2	det	_	TokenRange=0:3
2	kana	kana	NOUN	N	Number=Sing	0	root	_	TokenRange=4:8
3	puranga	puranga	ADJ	A	_	2	acl:relcl	_	TokenRange=9:16
4	waá	waá	PRON	REL	Number=Sing|PronType=Rel	3	nsubj	_	SpaceAfter=No|TokenRange=17:20
5	,	,	PUNCT	PUNCT	_	6	punct	_	TokenRange=20:21
6	santaíma	santá	ADJ	A	Derivation=Priv	3	conj	_	TokenRange=22:30
7	yapitera	pitera	VERB	V	Number=Plur|Person=1|VerbForm=Fin	6	advcl	_	TokenRange=31:39
8	arama	arama	SCONJ	SCONJ	_	7	mark	_	SpaceAfter=No|TokenRange=40:45
9	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=45:46

~~~


