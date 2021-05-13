---
layout: base
title:  'Statistics of mark:rel in UD_Chinese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSD: Relations: `mark:rel`

This relation is a language-specific subtype of <tt><a href="zh_gsd-dep-mark.html">mark</a></tt>.
There are also 1 other language-specific subtypes of `mark`: <tt><a href="zh_gsd-dep-mark-adv.html">mark:adv</a></tt>.

2428 nodes (2%) are attached to their parents as `mark:rel`.

2427 instances of `mark:rel` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.17668863261944.

The following 8 pairs of parts of speech are connected with `mark:rel`: <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (1653; 68% instances), <tt><a href="zh_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (739; 30% instances), <tt><a href="zh_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (16; 1% instances), <tt><a href="zh_gsd-pos-PART.html">PART</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (12; 0% instances), <tt><a href="zh_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (5; 0% instances), <tt><a href="zh_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="zh_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="zh_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 mark:rel	color:blue
1	五	五	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No
2	月	月	NOUN	NNB	_	4	clf	_	SpaceAfter=No
3	二十一	二十一	NUM	CD	NumType=Card	4	nummod	_	SpaceAfter=No
4	日	日	NOUN	NNB	_	8	nmod:tmod	_	SpaceAfter=No
5	，	，	PUNCT	,	_	8	punct	_	SpaceAfter=No
6	努爾哈赤	努爾哈赤	PROPN	NNP	_	8	nsubj	_	SpaceAfter=No
7	出城	出城	VERB	VV	_	8	advcl	_	SpaceAfter=No
8	迎接	迎接	VERB	VV	_	0	root	_	SpaceAfter=No
9	前來	前來	VERB	VV	_	15	acl:relcl	_	SpaceAfter=No
10	瀋陽	瀋陽	PROPN	NNP	_	9	obj	_	SpaceAfter=No
11	的	的	PART	DEC	_	9	mark:rel	_	SpaceAfter=No
12	科爾沁	科爾沁	PROPN	NNP	_	13	compound	_	SpaceAfter=No
13	部	部	PART	SFN	_	15	nmod	_	SpaceAfter=No
14	奧巴	奧巴	PROPN	NNP	_	15	nmod	_	SpaceAfter=No
15	貝勒	貝勒	NOUN	NN	_	8	obj	_	SpaceAfter=No
16	。	。	PUNCT	.	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 mark:rel	color:blue
1	這種	這種	DET	DT	_	2	det	_	SpaceAfter=No
2	車輛	車輛	NOUN	NN	_	10	nsubj	_	SpaceAfter=No
3	如果	如果	ADP	IN	_	4	case	_	SpaceAfter=No
4	歸	歸	VERB	VV	_	10	xcomp	_	SpaceAfter=No
5	私人	私人	NOUN	NN	_	6	nsubj	_	SpaceAfter=No
6	擁有	擁有	VERB	VV	_	4	ccomp	_	SpaceAfter=No
7	，	，	PUNCT	,	_	10	punct	_	SpaceAfter=No
8	多半	多半	ADV	RB	_	10	advmod	_	SpaceAfter=No
9	會	會	AUX	MD	_	10	aux	_	SpaceAfter=No
10	設置	設置	VERB	VV	_	0	root	_	SpaceAfter=No
11	昂貴	昂貴	ADJ	JJ	_	14	amod	_	SpaceAfter=No
12	的	的	PART	DEC	_	11	mark:rel	_	SpaceAfter=No
13	音頻	音頻	NOUN	NN	_	14	nmod	_	SpaceAfter=No
14	設備	設備	NOUN	NN	_	10	obj	_	SpaceAfter=No
15	、	、	PUNCT	EC	_	17	punct	_	SpaceAfter=No
16	電視	電視	NOUN	NN	_	17	compound	_	SpaceAfter=No
17	機	機	PART	SFN	_	14	conj	_	SpaceAfter=No
18	、	、	PUNCT	EC	_	20	punct	_	SpaceAfter=No
19	影碟	影碟	NOUN	NN	_	20	compound	_	SpaceAfter=No
20	機	機	PART	SFN	_	14	conj	_	SpaceAfter=No
21	，	，	PUNCT	,	_	23	punct	_	SpaceAfter=No
22	以及	以及	CCONJ	CC	_	23	cc	_	SpaceAfter=No
23	吧台	吧台	NOUN	NN	_	14	conj	_	SpaceAfter=No
24	和	和	CCONJ	CC	_	25	cc	_	SpaceAfter=No
25	冰箱	冰箱	NOUN	NN	_	23	conj	_	SpaceAfter=No
26	。	。	PUNCT	.	_	10	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 mark:rel	color:blue
1	一般	一般	ADJ	JJ	_	3	advmod	_	SpaceAfter=No
2	來	來	ADV	RB	_	3	mark	_	SpaceAfter=No
3	說	說	VERB	VV	_	20	advcl	_	SpaceAfter=No
4	，	，	PUNCT	,	_	20	punct	_	SpaceAfter=No
5	同	同	DET	DT	_	7	det	_	SpaceAfter=No
6	一	一	NUM	CD	NumType=Card	7	nummod	_	SpaceAfter=No
7	款	款	NOUN	NNB	_	8	nmod	_	SpaceAfter=No
8	間格	間格	NOUN	NN	_	12	nmod	_	SpaceAfter=No
9	的	的	PART	DEC	Case=Gen	8	case	_	SpaceAfter=No
10	單	單	NUM	CD	NumType=Card	11	nummod	_	SpaceAfter=No
11	邊	邊	NOUN	NN	_	12	nmod	_	SpaceAfter=No
12	單位	單位	NOUN	NN	_	20	nsubj	_	SpaceAfter=No
13	比	比	ADP	IN	_	18	case	_	SpaceAfter=No
14	非	非	AUX	VC	_	16	cop	_	SpaceAfter=No
15	單	單	NUM	CD	NumType=Card	16	nummod	_	SpaceAfter=No
16	邊	邊	NOUN	NN	_	18	acl:relcl	_	SpaceAfter=No
17	的	的	PART	DEC	_	16	mark:rel	_	SpaceAfter=No
18	呎價	呎價	NOUN	NN	_	20	nmod	_	SpaceAfter=No
19	約	約	ADV	RB	_	20	advmod	_	SpaceAfter=No
20	貴	貴	ADJ	JJ	_	0	root	_	SpaceAfter=No
21	20%	20%	NUM	CD	NumType=Card	20	advmod	_	SpaceAfter=No
22	。	。	PUNCT	.	_	20	punct	_	SpaceAfter=No

~~~


