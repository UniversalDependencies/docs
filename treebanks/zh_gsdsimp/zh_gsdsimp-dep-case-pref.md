---
layout: base
title:  'Statistics of case:pref in UD_Chinese-GSDSimp'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSDSimp: Relations: `case:pref`

This relation is a language-specific subtype of <tt><a href="zh_gsdsimp-dep-case.html">case</a></tt>.
There are also 2 other language-specific subtypes of `case`: <tt><a href="zh_gsdsimp-dep-case-aspect.html">case:aspect</a></tt>, <tt><a href="zh_gsdsimp-dep-case-dec.html">case:dec</a></tt>.

745 nodes (1%) are attached to their parents as `case:pref`.

745 instances of `case:pref` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24161073825503.

The following 11 pairs of parts of speech are connected with `case:pref`: <tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (624; 84% instances), <tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (64; 9% instances), <tt><a href="zh_gsdsimp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (42; 6% instances), <tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsdsimp-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="zh_gsdsimp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsdsimp-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="zh_gsdsimp-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt>-<tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="zh_gsdsimp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_gsdsimp-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case:pref	color:blue
1	总	总	PART	PFA	_	2	case:pref	_	SpaceAfter=No
2	面积	面积	NOUN	NN	_	4	nsubj	_	SpaceAfter=No
3	24.44	24.44	NUM	CD	NumType=Card	4	nummod	_	SpaceAfter=No
4	平方公里	平方公里	NOUN	NNB	_	0	root	_	SpaceAfter=No
5	，	，	PUNCT	,	_	4	punct	_	SpaceAfter=No
6	人口	人口	NOUN	NN	_	8	nsubj	_	SpaceAfter=No
7	3108	3108	NUM	CD	NumType=Card	8	nummod	_	SpaceAfter=No
8	人	人	NOUN	NN	_	4	parataxis	_	SpaceAfter=No
9	，	，	PUNCT	,	_	4	punct	_	SpaceAfter=No
10	人口	人口	NOUN	NN	_	11	nmod	_	SpaceAfter=No
11	密度	密度	NOUN	NN	_	13	nsubj	_	SpaceAfter=No
12	127.2	127.2	NUM	CD	NumType=Card	13	nummod	_	SpaceAfter=No
13	人	人	NOUN	NN	_	4	parataxis	_	SpaceAfter=No
14	/	/	PUNCT	/	_	13	punct	_	SpaceAfter=No
15	平方公里	平方公里	NOUN	NNB	_	13	acl	_	SpaceAfter=No
16	（	（	PUNCT	(	_	18	punct	_	SpaceAfter=No
17	2009	2009	NUM	CD	NumType=Card	18	nummod	_	SpaceAfter=No
18	年	年	NOUN	NNB	_	4	parataxis	_	SpaceAfter=No
19	）	）	PUNCT	)	_	18	punct	_	SpaceAfter=No
20	。	。	PUNCT	.	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 case:pref	color:blue
1	世界	世界	NOUN	NN	_	5	nmod	_	SpaceAfter=No
2	三	三	NUM	CD	NumType=Card	5	nummod	_	SpaceAfter=No
3	大	大	PART	PFA	_	5	case:pref	_	SpaceAfter=No
4	观赏	观赏	VERB	VV	_	5	compound	_	SpaceAfter=No
5	树	树	PART	SFN	_	9	nmod	_	SpaceAfter=No
6	厦门	厦门	PROPN	NNP	_	9	nmod	_	SpaceAfter=No
7	园林	园林	NOUN	NN	_	9	nmod	_	SpaceAfter=No
8	植物	植物	NOUN	NN	_	9	compound	_	SpaceAfter=No
9	园	园	PART	SFN	_	10	nsubj	_	SpaceAfter=No
10	种植	种植	VERB	VV	_	0	root	_	SpaceAfter=No
11	有	有	VERB	VV	_	10	xcomp	_	SpaceAfter=No
12	世界	世界	NOUN	NN	_	16	nmod	_	SpaceAfter=No
13	三	三	NUM	CD	NumType=Card	16	nummod	_	SpaceAfter=No
14	大	大	PART	PFA	_	16	case:pref	_	SpaceAfter=No
15	观赏	观赏	VERB	VV	_	16	compound	_	SpaceAfter=No
16	树	树	PART	SFN	_	11	obj	_	SpaceAfter=No
17	：	：	PUNCT	:	_	16	punct	_	SpaceAfter=No
18	中国金钱松	中国金钱松	NOUN	NN	_	16	appos	_	SpaceAfter=No
19	，	，	PUNCT	,	_	20	punct	_	SpaceAfter=No
20	日本金松	日本金松	NOUN	NN	_	18	conj	_	SpaceAfter=No
21	，	，	PUNCT	,	_	22	punct	_	SpaceAfter=No
22	日本南洋杉	日本南洋杉	NOUN	NN	_	18	conj	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 case:pref	color:blue
1	2009	2009	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No
2	年	年	NOUN	NNB	_	6	clf	_	SpaceAfter=No
3	8	8	NUM	CD	NumType=Card	4	nummod	_	SpaceAfter=No
4	月	月	NOUN	NNB	_	6	clf	_	SpaceAfter=No
5	1	1	NUM	CD	NumType=Card	6	nummod	_	SpaceAfter=No
6	日	日	NOUN	NNB	_	16	nmod:tmod	_	SpaceAfter=No
7	接收	接收	VERB	VV	_	16	advcl	_	SpaceAfter=No
8	原	原	PART	PFA	_	10	case:pref	_	SpaceAfter=No
9	中银	中银	PROPN	NNP	_	10	nmod	_	SpaceAfter=No
10	香港	香港	PROPN	NNP	_	14	nmod	_	SpaceAfter=No
11	于	于	ADP	IN	_	13	case	_	SpaceAfter=No
12	中国	中国	PROPN	NNP	_	13	nmod	_	SpaceAfter=No
13	内地	内地	NOUN	NN	_	14	nmod	_	SpaceAfter=No
14	业务	业务	NOUN	NN	_	7	obj	_	SpaceAfter=No
15	，	，	PUNCT	,	_	16	punct	_	SpaceAfter=No
16	使	使	VERB	VV	Voice=Cau	0	root	_	SpaceAfter=No
17	分行	分行	NOUN	NN	_	20	nsubj	_	SpaceAfter=No
18	及	及	CCONJ	CC	_	19	cc	_	SpaceAfter=No
19	支行	支行	NOUN	NN	_	17	conj	_	SpaceAfter=No
20	达	达	VERB	VV	_	16	ccomp	_	SpaceAfter=No
21	11	11	NUM	CD	NumType=Card	22	nummod	_	SpaceAfter=No
22	家	家	NOUN	NNB	_	20	obj	_	SpaceAfter=No
23	及	及	CCONJ	CC	_	25	cc	_	SpaceAfter=No
24	7	7	NUM	CD	NumType=Card	25	nummod	_	SpaceAfter=No
25	家	家	NOUN	NNB	_	22	conj	_	SpaceAfter=No
26	。	。	PUNCT	.	_	16	punct	_	SpaceAfter=No

~~~


