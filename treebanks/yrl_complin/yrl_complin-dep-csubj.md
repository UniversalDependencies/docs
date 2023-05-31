---
layout: base
title:  'Statistics of csubj in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `csubj`

This relation is universal.

8 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.125.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (2; 25% instances), <tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 13% instances), <tt><a href="yrl_complin-pos-PART.html">PART</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 13% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 csubj	color:blue
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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj	color:blue
1	Puranga	puranga	ADJ	A	_	0	root	_	SpaceAfter=No|TokenRange=0:7
2	,	,	PUNCT	PUNCT	_	3	punct	_	TokenRange=7:8
3	eré	eré	PART	CONS	PartType=Mod|Polarity=Pos	1	advmod	_	SpaceAfter=No|TokenRange=9:12
4	,	,	PUNCT	PUNCT	_	3	punct	_	TokenRange=12:13
5	peikú	ikú	AUX	COP	Number=Plur|Person=2|VerbForm=Fin	6	cop	_	TokenRange=14:19
6	iké	iké	ADV	ADVDX	AdvType=Loc|Deixis=Prox|PronType=Dem	1	csubj	_	SpaceAfter=No|TokenRange=20:23
7	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=23:24

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 csubj	color:blue
1	Yawé	yawé	ADV	ADVA	AdvType=Man	3	csubj	_	TokenRange=0:4
2	waá-itá	waá	PRON	REL	Number=Plur|PronType=Rel	1	nsubj	_	TokenRange=5:12
3	aikwewara	aikwé	PART	EXST	Aspect=Freq|PartType=Exs|Tense=Pres	0	root	_	TokenRange=13:22
4	mairamé	mairamé	SCONJ	SCONJR	_	5	mark	_	TokenRange=23:30
5	yakuntari	kuntari	VERB	V	Number=Plur|Person=1|VerbForm=Fin	3	advcl	_	TokenRange=31:40
6	kwá	kwá	DET	DEMX	Deixis=Prox|Number=Sing|PronType=Dem	7	det	_	TokenRange=41:44
7	nheengatú	nheengatú	NOUN	N	Number=Sing	5	obj	_	SpaceAfter=No|TokenRange=45:54
8	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=54:55

~~~


