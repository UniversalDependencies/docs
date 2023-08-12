---
layout: base
title:  'Statistics of parataxis in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `parataxis`

This relation is universal.

260 nodes (3%) are attached to their parents as `parataxis`.

260 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.08076923076923.

The following 19 pairs of parts of speech are connected with `parataxis`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (211; 81% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="yrl_complin-pos-PART.html">PART</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="yrl_complin-pos-PART.html">PART</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis	color:blue
1	Ti	ti	PART	NEG	Polarity=Neg	2	advmod	_	TokenRange=0:2
2	apitá	pitá	VERB	V	Number=Sing|Person=1|VerbForm=Fin	0	root	_	SpaceAfter=No|TokenRange=3:8
3	,	,	PUNCT	PUNCT	_	4	punct	_	TokenRange=8:9
4	ayuíri	yuíri	VERB	V	Number=Sing|Person=1|VerbForm=Fin	2	parataxis	_	TokenRange=10:16
5	kwá	kwá	ADV	ADVDX	AdvType=Loc|Deixis=Prox|PronType=Dem	4	obl	_	TokenRange=17:20
6	kití	kití	ADP	ADP	_	5	case	_	SpaceAfter=No|TokenRange=21:25
7	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=25:26

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	Kurasí	kurasí	NOUN	N	Number=Sing	5	nsubj	_	TokenRange=0:6
2	iwaté	iwaté	ADJ	A	_	0	root	_	TokenRange=7:12
3	ã	ã	PART	PFV	Aspect=Perf	2	advmod	_	SpaceAfter=No|TokenRange=13:14
4	,	,	PUNCT	PUNCT	_	5	punct	_	TokenRange=14:15
5	asú	sú	VERB	V	Number=Sing|Person=1|VerbForm=Fin	2	parataxis	_	_
6	putari	putari	AUX	AUXN	Compound=Yes|VerbForm=Inf	5	aux	_	_
7	apurakí	purakí	VERB	V	Number=Sing|Person=1|VerbForm=Fin	5	xcomp	_	SpaceAfter=No|TokenRange=28:35
8	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=35:36

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 parataxis	color:blue
1	Ixé	ixé	PRON	PRON	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	TokenRange=0:3
2	se	se	PRON	PRON2	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod:poss	_	TokenRange=4:6
3	rukawara	uka	NOUN	N	Aspect=Freq|Number=Sing|Rel=Cont|Tense=Pres	0	root	_	TokenRange=7:15
4	aikú	ikú	AUX	COP	Number=Sing|Person=1|VerbForm=Fin	3	cop	_	SpaceAfter=No|TokenRange=16:20
5	,	,	PUNCT	PUNCT	_	8	punct	_	TokenRange=20:21
6	ti	ti	PART	NEG	PartType=Neg|Polarity=Neg	8	advmod	_	TokenRange=22:24
7	xinga	xinga	ADV	ADVS	AdvType=Deg	8	advmod	_	TokenRange=25:30
8	asemu	semu	VERB	V	Number=Sing|Person=1|VerbForm=Fin	3	parataxis	_	TokenRange=31:36
9	kwá	kwá	PRON	DEMX	Deixis=Prox|Number=Sing|PronType=Dem	8	obl	_	TokenRange=37:40
10	suí	suí	ADP	ADP	_	9	case	_	SpaceAfter=No|TokenRange=41:44
11	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=44:45

~~~


