---
layout: base
title:  'Statistics of advcl in UD_Chinese'
udver: '2'
---

## Treebank Statistics: UD_Chinese: Relations: `advcl`

This relation is universal.

160 nodes (0%) are attached to their parents as `advcl`.

160 instances of `advcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.0875.

The following 12 pairs of parts of speech are connected with `advcl`: <tt><a href="zh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh-pos-VERB.html">VERB</a></tt> (54; 34% instances), <tt><a href="zh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh-pos-ADJ.html">ADJ</a></tt> (53; 33% instances), <tt><a href="zh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh-pos-VERB.html">VERB</a></tt> (22; 14% instances), <tt><a href="zh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh-pos-NOUN.html">NOUN</a></tt> (9; 6% instances), <tt><a href="zh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="zh-pos-ADP.html">ADP</a></tt>-<tt><a href="zh-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="zh-pos-ADV.html">ADV</a></tt>-<tt><a href="zh-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="zh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="zh-pos-ADP.html">ADP</a></tt>-<tt><a href="zh-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="zh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="zh-pos-PART.html">PART</a></tt>-<tt><a href="zh-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="zh-pos-VERB.html">VERB</a></tt>-<tt><a href="zh-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 3 advcl	color:blue
1	一般	一般	ADJ	JJ	_	3	advmod	_	SpaceAfter=No
2	來	來	ADV	RB	_	3	mark	_	SpaceAfter=No
3	說	說	VERB	VV	_	20	advcl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	20	punct	_	SpaceAfter=No
5	同	同	DET	DT	_	7	det	_	SpaceAfter=No
6	一	一	NUM	CD	NumType=Card	7	nummod	_	SpaceAfter=No
7	款	款	NOUN	NNB	_	8	nmod	_	SpaceAfter=No
8	間格	間格	NOUN	NN	_	12	det	_	SpaceAfter=No
9	的	的	PART	DEC	Case=Gen	8	case:dec	_	SpaceAfter=No
10	單	單	NUM	CD	NumType=Card	11	nummod	_	SpaceAfter=No
11	邊	邊	NOUN	NN	_	12	nmod	_	SpaceAfter=No
12	單位	單位	NOUN	NN	_	20	nsubj	_	SpaceAfter=No
13	比	比	ADP	IN	_	18	case	_	SpaceAfter=No
14	非	非	AUX	VC	_	16	cop	_	SpaceAfter=No
15	單	單	NUM	CD	NumType=Card	16	nummod	_	SpaceAfter=No
16	邊	邊	NOUN	NN	_	18	acl:relcl	_	SpaceAfter=No
17	的	的	PART	DEC	_	16	mark:relcl	_	SpaceAfter=No
18	呎價	呎價	NOUN	NN	_	20	nmod	_	SpaceAfter=No
19	約	約	ADV	RB	_	20	advmod	_	SpaceAfter=No
20	貴	貴	ADJ	JJ	_	0	root	_	SpaceAfter=No
21	20%	20%	NUM	CD	NumType=Card	20	advmod	_	SpaceAfter=No
22	.	.	PUNCT	.	_	20	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advcl	color:blue
1	其	其	PRON	PRP	Person=3	3	nmod	_	SpaceAfter=No
2	散文	散文	NOUN	NN	_	3	nmod	_	SpaceAfter=No
3	語言	語言	NOUN	NN	_	9	nsubj	_	SpaceAfter=No
4	簡潔	簡潔	ADJ	JJ	_	5	advcl	_	SpaceAfter=No
5	凝練	凝練	ADJ	JJ	_	9	acl	_	SpaceAfter=No
6	,	,	PUNCT	,	_	9	punct	_	SpaceAfter=No
7	樸實無華	樸實無華	ADJ	JJ	_	9	acl	_	SpaceAfter=No
8	,	,	PUNCT	,	_	9	punct	_	SpaceAfter=No
9	體現	體現	VERB	VV	_	0	root	_	SpaceAfter=No
10	了	了	PART	AS	Aspect=Perf	9	case:aspect	_	SpaceAfter=No
11	和	和	ADP	IN	_	12	case	_	SpaceAfter=No
12	西塞羅	西塞羅	PROPN	NNP	_	13	nmod	_	SpaceAfter=No
13	迥異	迥異	ADJ	JJ	_	15	amod	_	SpaceAfter=No
14	的	的	PART	DEC	_	13	mark:relcl	_	SpaceAfter=No
15	風格	風格	NOUN	NN	_	9	obj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	9	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 6 advcl	color:blue
1	半	半	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No
2	腰	腰	NOUN	NN	_	3	nmod	_	SpaceAfter=No
3	座椅	座椅	NOUN	NN	_	20	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	20	punct	_	SpaceAfter=No
5	亦	亦	ADV	RB	_	6	mark	_	SpaceAfter=No
6	稱	稱	VERB	VV	_	20	advcl	_	SpaceAfter=No
7	半	半	NUM	CD	NumType=Card	8	nummod	_	SpaceAfter=No
8	腰	腰	NOUN	NN	_	9	case:suff	_	SpaceAfter=No
9	位	位	PART	SFN	_	6	obj	_	SpaceAfter=No
10	、	、	PUNCT	EC	_	13	punct	_	SpaceAfter=No
11	半	半	NUM	CD	NumType=Card	12	nummod	_	SpaceAfter=No
12	截	截	NOUN	NN	_	13	nmod	_	SpaceAfter=No
13	座椅	座椅	NOUN	NN	_	9	conj	_	SpaceAfter=No
14	,	,	PUNCT	,	_	20	punct	_	SpaceAfter=No
15	鐵路	鐵路	NOUN	NN	_	17	nmod	_	SpaceAfter=No
16	車輛	車輛	NOUN	NN	_	17	nmod	_	SpaceAfter=No
17	座位	座位	NOUN	NN	_	20	det	_	SpaceAfter=No
18	的	的	PART	DEC	Case=Gen	17	case:dec	_	SpaceAfter=No
19	一	一	NUM	CD	NumType=Card	20	nummod	_	SpaceAfter=No
20	種	種	NOUN	NNB	_	0	root	_	SpaceAfter=No
21	.	.	PUNCT	.	_	20	punct	_	SpaceAfter=No

~~~


