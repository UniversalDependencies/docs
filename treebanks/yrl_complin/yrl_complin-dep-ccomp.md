---
layout: base
title:  'Statistics of ccomp in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `ccomp`

This relation is universal.

411 nodes (2%) are attached to their parents as `ccomp`.

386 instances of `ccomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.30900243309002.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (309; 75% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (34; 8% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PART.html">PART</a></tt> (16; 4% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (15; 4% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (12; 3% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-INTJ.html">INTJ</a></tt> (12; 3% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (12; 3% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	[...]	[...]	PUNCT	ELIP	_	4	punct	_	TokenRange=0:5
2	ti	ti	PART	NEG	PartType=Neg|Polarity=Neg	4	advmod	_	TokenRange=6:8
3	aintá	aintá	PRON	PRON	Case=Acc,Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	TokenRange=9:14
4	ukwá	kwá	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	0	root	_	TokenRange=15:19
5	maã	maã	PRON	INT	PronType=Int	7	obj	_	TokenRange=20:23
6	kurupira-itá	kurupira	NOUN	N	Number=Plur	7	nsubj	_	TokenRange=24:36
7	umunhã	munhã	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	4	ccomp	_	TokenRange=37:43
8	yané	yané	PRON	PRON2	Case=Gen|Number=Plur|Person=1|PronType=Prs	7	obl	_	TokenRange=44:48
9	irũ	irũ	ADP	ADP	AdpType=Post	8	case	_	SpaceAfter=No|TokenRange=49:52
10	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=52:53

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Anheẽ	nheẽ	VERB	V	Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	0	root	_	TokenRange=0:5
2	"	"	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=5:6
3	puranga	puranga	ADJ	A	_	4	amod	_	TokenRange=7:14
4	ara	ara	NOUN	N	Number=Sing	1	ccomp	_	SpaceAfter=No|TokenRange=15:18
5	"	"	PUNCT	PUNCT	_	4	punct	_	TokenRange=18:19
6	aintá	aintá	PRON	PRON2	Case=Gen|Number=Plur|Person=3|PronType=Prs	1	iobj	_	TokenRange=20:25
7	supé	supé	ADP	ADP	AdpType=Post	6	case	_	SpaceAfter=No|TokenRange=26:30
8	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=30:31

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Ape	ape	ADV	ADVT	AdvType=Tim	2	advmod	_	TokenRange=0:3
2	anheẽ	nheẽ	VERB	V	Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	0	root	_	SpaceAfter=No|TokenRange=4:9
3	:	:	PUNCT	PUNCT	_	5	punct	_	TokenRange=9:10
4	"	"	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=10:11
5	Umbaá	umbaá	PART	NEG	PartType=Neg|Polarity=Neg	2	ccomp	_	SpaceAfter=No|TokenRange=12:17
6	,	,	PUNCT	PUNCT	_	5	punct	_	TokenRange=17:18
7	yepé	yepé	DET	ART	Definite=Ind|PronType=Art	8	det	_	TokenRange=19:23
8	ara	ara	NOUN	N	Number=Sing	10	obl	_	TokenRange=24:27
9	tenki	tenki	PART	OBL	PartType=Mod	10	advmod	_	TokenRange=28:33
10	pekuntari	kuntari	VERB	V	Mood=Ind|Number=Plur|Person=2|VerbForm=Fin	5	parataxis	_	SpaceAfter=No|TokenRange=34:43
11	!	!	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=43:44
12	"	"	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=44:45

~~~


