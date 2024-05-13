---
layout: base
title:  'Statistics of case:aspect in UD_Chinese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSD: Relations: `case:aspect`

This relation is a language-specific subtype of <tt><a href="zh_gsd-dep-case.html">case</a></tt>.
There are also 3 other language-specific subtypes of `case`: <tt><a href="zh_gsd-dep-case-dec.html">case:dec</a></tt>, <tt><a href="zh_gsd-dep-case-pref.html">case:pref</a></tt>, <tt><a href="zh_gsd-dep-case-suff.html">case:suff</a></tt>.

955 nodes (1%) are attached to their parents as `case:aspect`.

951 instances of `case:aspect` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05340314136126.

The following 4 pairs of parts of speech are connected with `case:aspect`: <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (946; 99% instances), <tt><a href="zh_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (6; 1% instances), <tt><a href="zh_gsd-pos-PART.html">PART</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="zh_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 case:aspect	color:blue
1	動作	動作	NOUN	NN	_	3	nmod	_	SpaceAfter=No
2	冒險	冒險	NOUN	NN	_	3	nmod	_	SpaceAfter=No
3	遊戲	遊戲	NOUN	NN	_	12	nsubj	_	SpaceAfter=No
4	（	（	PUNCT	(	_	5	punct	_	SpaceAfter=No
5	A-AVG	A-AVG	X	FW	_	3	appos	_	SpaceAfter=No
6	）	）	PUNCT	)	_	5	punct	_	SpaceAfter=No
7	：	：	PUNCT	:	_	12	punct	_	SpaceAfter=No
8	是	是	AUX	VC	_	12	cop	_	SpaceAfter=No
9	冒險	冒險	NOUN	NN	_	10	nmod	_	SpaceAfter=No
10	遊戲	遊戲	NOUN	NN	_	12	nmod	_	SpaceAfter=No
11	的	的	PART	DEC	Case=Gen	10	case:dec	_	SpaceAfter=No
12	分支	分支	NOUN	NN	_	0	root	_	SpaceAfter=No
13	，	，	PUNCT	,	_	12	punct	_	SpaceAfter=No
14	它	它	PRON	PRP	Person=3	15	nsubj	_	SpaceAfter=No
15	融合	融合	VERB	VV	_	12	parataxis	_	SpaceAfter=No
16	了	了	PART	AS	Aspect=Perf	15	case:aspect	_	SpaceAfter=No
17	動作	動作	NOUN	NN	_	18	nmod	_	SpaceAfter=No
18	遊戲	遊戲	NOUN	NN	_	21	nmod	_	SpaceAfter=No
19	的	的	PART	DEC	Case=Gen	18	case:dec	_	SpaceAfter=No
20	一些	一些	ADJ	JJ	_	21	amod	_	SpaceAfter=No
21	特徵	特徵	NOUN	NN	_	15	obj	_	SpaceAfter=No
22	。	。	PUNCT	.	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case:aspect	color:blue
1	許多	許多	NUM	CD	NumType=Card	4	amod	_	SpaceAfter=No
2	國際	國際	NOUN	NN	_	4	nmod	_	SpaceAfter=No
3	國家	國家	NOUN	NN	_	4	nmod	_	SpaceAfter=No
4	組織	組織	NOUN	NN	_	8	nsubj	_	SpaceAfter=No
5	對此	對此	ADP	IN	_	8	case	_	SpaceAfter=No
6	表示	表示	AUX	VV	_	8	cop	_	SpaceAfter=No
7	了	了	PART	AS	Aspect=Perf	8	case:aspect	_	SpaceAfter=No
8	不滿	不滿	ADJ	JJ	_	0	root	_	SpaceAfter=No
9	。	。	PUNCT	.	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 case:aspect	color:blue
1	這	這	DET	DT	_	2	det	_	SpaceAfter=No
2	個	個	NOUN	NNB	_	3	clf	_	SpaceAfter=No
3	原理	原理	NOUN	NN	_	5	nsubj	_	SpaceAfter=No
4	有時	有時	ADV	RB	_	5	advmod	_	SpaceAfter=No
5	叫做	叫做	VERB	VV	_	0	root	_	SpaceAfter=No
6	弗雷格	弗雷格	PROPN	NNP	_	7	nmod	_	SpaceAfter=No
7	原理	原理	NOUN	NN	_	5	obj	_	SpaceAfter=No
8	，	，	PUNCT	,	_	5	punct	_	SpaceAfter=No
9	因為	因為	ADP	IN	_	11	case	_	SpaceAfter=No
10	普遍	普遍	ADV	RB	_	11	advmod	_	SpaceAfter=No
11	認為	認為	VERB	VV	_	5	xcomp	_	SpaceAfter=No
12	弗雷格	弗雷格	PROPN	NNP	_	15	nsubj	_	SpaceAfter=No
13	首先	首先	ADV	RB	_	15	advmod	_	SpaceAfter=No
14	公式	公式	NOUN	NN	_	15	compound	_	SpaceAfter=No
15	化	化	PART	SFV	_	11	ccomp	_	SpaceAfter=No
16	了	了	PART	AS	Aspect=Perf	15	case:aspect	_	SpaceAfter=No
17	它	它	PRON	PRP	Person=3	15	obj	_	SpaceAfter=No
18	。	。	PUNCT	.	_	5	punct	_	SpaceAfter=No

~~~


