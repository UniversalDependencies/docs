---
layout: base
title:  'Statistics of aux:pass in UD_Chinese'
udver: '2'
---

## Treebank Statistics: UD_Chinese: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="zh-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="zh-dep-aux-caus.html">aux:caus</a></tt>.

424 nodes (0%) are attached to their parents as `aux:pass`.

424 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06603773584906.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="zh-pos-VERB.html">VERB</a></tt>-<tt><a href="zh-pos-VERB.html">VERB</a></tt> (421; 99% instances), <tt><a href="zh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh-pos-VERB.html">VERB</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
1	數百萬	數百萬	NUM	CD	NumType=Card	4	det	_	SpaceAfter=No
2	的	的	PART	DEC	Case=Gen	1	case:dec	_	SpaceAfter=No
3	巧克力	巧克力	NOUN	NN	_	4	case:suff	_	SpaceAfter=No
4	棒	棒	PART	SFN	_	6	nsubj:pass	_	SpaceAfter=No
5	被	被	VERB	BB	Voice=Pass	6	aux:pass	_	SpaceAfter=No
6	撤下	撤下	VERB	VV	_	18	dep	_	SpaceAfter=No
7	櫃檯	櫃檯	NOUN	NN	_	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	18	punct	_	SpaceAfter=No
9	而	而	ADV	RB	_	12	mark	_	SpaceAfter=No
10	瑪氏	瑪氏	PROPN	NNP	_	12	nsubj	_	SpaceAfter=No
11	則	則	ADV	RB	_	12	mark	_	SpaceAfter=No
12	中斷	中斷	VERB	VV	_	18	dep	_	SpaceAfter=No
13	了	了	PART	AS	Aspect=Perf	12	case:aspect	_	SpaceAfter=No
14	生產	生產	NOUN	NN	_	12	obj	_	SpaceAfter=No
15	,	,	PUNCT	,	_	18	punct	_	SpaceAfter=No
16	公司	公司	NOUN	NN	_	17	nmod	_	SpaceAfter=No
17	損失	損失	NOUN	NN	_	18	nsubj	_	SpaceAfter=No
18	達	達	VERB	VV	_	0	root	_	SpaceAfter=No
19	四百五十萬	四百五十萬	NUM	CD	NumType=Card	21	nummod	_	SpaceAfter=No
20	美	美	PROPN	NNP	_	21	nmod	_	SpaceAfter=No
21	元	元	NOUN	NNB	_	18	obj	_	SpaceAfter=No
22	.	.	PUNCT	.	_	18	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 aux:pass	color:blue
1	河姆	河姆	PROPN	NNP	_	2	case:suff	_	SpaceAfter=No
2	渡	渡	PART	SFN	_	3	nmod	_	SpaceAfter=No
3	遺址	遺址	NOUN	NN	_	7	advmod	_	SpaceAfter=No
4	和	和	CCONJ	CC	_	6	cc	_	SpaceAfter=No
5	仰韶	仰韶	PROPN	NNP	_	6	nmod	_	SpaceAfter=No
6	遺址	遺址	NOUN	NN	_	3	conj	_	SpaceAfter=No
7	出土	出土	VERB	VV	_	13	amod	_	SpaceAfter=No
8	被	被	VERB	BB	Voice=Pass	11	aux:pass	_	SpaceAfter=No
9	認為	認為	AUX	VV	_	11	cop	_	SpaceAfter=No
10	最	最	ADV	RB	_	11	advmod	_	SpaceAfter=No
11	原始	原始	ADJ	JJ	_	13	acl:relcl	_	SpaceAfter=No
12	的	的	PART	DEC	_	11	mark:relcl	_	SpaceAfter=No
13	陶塤	陶塤	NOUN	NN	_	19	nsubj	_	SpaceAfter=No
14	均	均	ADV	RB	_	15	advmod	_	SpaceAfter=No
15	只有	只有	VERB	VV	_	19	acl	_	SpaceAfter=No
16	吹孔	吹孔	NOUN	NN	_	15	obj	_	SpaceAfter=No
17	,	,	PUNCT	,	_	19	punct	_	SpaceAfter=No
18	而	而	ADV	RB	_	19	mark	_	SpaceAfter=No
19	無	無	VERB	VV	_	0	root	_	SpaceAfter=No
20	音孔	音孔	NOUN	NN	_	19	obj	_	SpaceAfter=No
21	.	.	PUNCT	.	_	19	punct	_	SpaceAfter=No

~~~


