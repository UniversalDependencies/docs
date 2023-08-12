---
layout: base
title:  'Statistics of ccomp in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `ccomp`

This relation is universal.

132 nodes (2%) are attached to their parents as `ccomp`.

125 instances of `ccomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.90151515151515.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (97; 73% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (13; 10% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (8; 6% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (7; 5% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PART.html">PART</a></tt> (4; 3% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-INTJ.html">INTJ</a></tt> (2; 2% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 ccomp	color:blue
1	Aintá	aintá	PRON	PRON	Number=Plur|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:5
2	ukuntari	kuntari	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=6:14
3	uakonteseri	akonteseri	VERB	V	Person=3|VerbForm=Fin	2	ccomp	_	Orig=acontecer|OrigLang=pt|TokenRange=15:26
4	waá	waá	PRON	REL	Number=Sing|PronType=Rel	3	nsubj	_	TokenRange=27:30
5	garapé	garapé	NOUN	N	Number=Sing	6	nmod:poss	_	TokenRange=31:37
6	apira	apira	NOUN	N	Number=Sing	3	obl	_	TokenRange=38:43
7	kití	kití	ADP	ADP	_	6	case	_	SpaceAfter=No|TokenRange=44:48
8	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=48:49

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Anheẽ	nheẽ	VERB	V	Number=Sing|Person=1|VerbForm=Fin	0	root	_	TokenRange=0:5
2	"	"	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=5:6
3	puranga	puranga	ADJ	A	_	4	amod	_	TokenRange=7:14
4	ara	ara	NOUN	N	Number=Sing	1	ccomp	_	SpaceAfter=No|TokenRange=15:18
5	"	"	PUNCT	PUNCT	_	4	punct	_	TokenRange=18:19
6	aintá	aintá	PRON	PRON2	Case=Gen|Number=Plur|Person=3|PronType=Prs	1	iobj	_	TokenRange=20:25
7	supé	supé	ADP	ADP	_	6	case	_	SpaceAfter=No|TokenRange=26:30
8	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=30:31

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	Aé	aé	PRON	PRON	Number=Sing|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:2
2	unheẽ	nheẽ	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=3:8
3	Maria	maria	PROPN	PROPN	_	2	iobj	_	TokenRange=9:14
4	supé	supé	ADP	ADP	_	3	case	_	SpaceAfter=No|TokenRange=15:19
5	:	:	PUNCT	PUNCT	_	9	punct	_	TokenRange=19:20
6	—	—	PUNCT	PUNCT	_	9	punct	_	TokenRange=20:21
7	Maria	maria	PROPN	PROPN	_	9	vocative	_	SpaceAfter=No|TokenRange=22:27
8	,	,	PUNCT	PUNCT	_	7	punct	_	TokenRange=27:28
9	mamé	mamé	ADV	ADVRC	AdvType=Loc|PronType=Int	2	ccomp	_	TokenRange=29:33
10	taá	taá	PART	CQ	PartType=Int	9	advmod	_	TokenRange=34:37
11	pindá-itá	pindá	NOUN	N	Number=Plur	9	nsubj	_	TokenRange=38:47
12	uikú	ikú	AUX	COP	Person=3|VerbForm=Fin	9	cop	_	SpaceAfter=No|TokenRange=48:52
13	?	?	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=52:53

~~~


