---
layout: base
title:  'Statistics of mark:relcl in UD_Chinese-GSDSimp'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSDSimp: Relations: `mark:relcl`

This relation is a language-specific subtype of <tt><a href="zh_gsdsimp-dep-mark.html">mark</a></tt>.
There are also 2 other language-specific subtypes of `mark`: <tt><a href="zh_gsdsimp-dep-mark-advb.html">mark:advb</a></tt>, <tt><a href="zh_gsdsimp-dep-mark-comp.html">mark:comp</a></tt>.

2428 nodes (2%) are attached to their parents as `mark:relcl`.

2427 instances of `mark:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.17462932454695.

The following 8 pairs of parts of speech are connected with `mark:relcl`: <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (1651; 68% instances), <tt><a href="zh_gsdsimp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (741; 31% instances), <tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (16; 1% instances), <tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (12; 0% instances), <tt><a href="zh_gsdsimp-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (5; 0% instances), <tt><a href="zh_gsdsimp-pos-AUX.html">AUX</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="zh_gsdsimp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 mark:relcl	color:blue
1	五	五	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No
2	月	月	NOUN	NNB	_	4	clf	_	SpaceAfter=No
3	二十一	二十一	NUM	CD	NumType=Card	4	nummod	_	SpaceAfter=No
4	日	日	NOUN	NNB	_	8	nmod:tmod	_	SpaceAfter=No
5	，	，	PUNCT	,	_	8	punct	_	SpaceAfter=No
6	努尔哈赤	努尔哈赤	PROPN	NNP	_	8	nsubj	_	SpaceAfter=No
7	出城	出城	VERB	VV	_	8	advcl	_	SpaceAfter=No
8	迎接	迎接	VERB	VV	_	0	root	_	SpaceAfter=No
9	前来	前来	VERB	VV	_	15	acl:relcl	_	SpaceAfter=No
10	沈阳	沈阳	PROPN	NNP	_	9	obj	_	SpaceAfter=No
11	的	的	PART	DEC	_	9	mark:relcl	_	SpaceAfter=No
12	科尔沁	科尔沁	PROPN	NNP	_	13	compound	_	SpaceAfter=No
13	部	部	PART	SFN	_	15	nmod	_	SpaceAfter=No
14	奥巴	奥巴	PROPN	NNP	_	15	nmod	_	SpaceAfter=No
15	贝勒	贝勒	NOUN	NN	_	8	obj	_	SpaceAfter=No
16	。	。	PUNCT	.	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 mark:relcl	color:blue
1	这种	这种	DET	DT	_	2	det	_	SpaceAfter=No
2	车辆	车辆	NOUN	NN	_	10	nsubj	_	SpaceAfter=No
3	如果	如果	ADP	IN	_	4	case	_	SpaceAfter=No
4	归	归	VERB	VV	_	10	xcomp	_	SpaceAfter=No
5	私人	私人	NOUN	NN	_	6	nsubj	_	SpaceAfter=No
6	拥有	拥有	VERB	VV	_	4	ccomp	_	SpaceAfter=No
7	，	，	PUNCT	,	_	10	punct	_	SpaceAfter=No
8	多半	多半	ADV	RB	_	10	advmod	_	SpaceAfter=No
9	会	会	AUX	MD	_	10	aux	_	SpaceAfter=No
10	设置	设置	VERB	VV	_	0	root	_	SpaceAfter=No
11	昂贵	昂贵	ADJ	JJ	_	14	amod	_	SpaceAfter=No
12	的	的	PART	DEC	_	11	mark:relcl	_	SpaceAfter=No
13	音频	音频	NOUN	NN	_	14	nmod	_	SpaceAfter=No
14	设备	设备	NOUN	NN	_	10	obj	_	SpaceAfter=No
15	、	、	PUNCT	EC	_	17	punct	_	SpaceAfter=No
16	电视	电视	NOUN	NN	_	17	compound	_	SpaceAfter=No
17	机	机	PART	SFN	_	14	conj	_	SpaceAfter=No
18	、	、	PUNCT	EC	_	20	punct	_	SpaceAfter=No
19	影碟	影碟	NOUN	NN	_	20	compound	_	SpaceAfter=No
20	机	机	PART	SFN	_	14	conj	_	SpaceAfter=No
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
# visual-style 16 17 mark:relcl	color:blue
1	一般	一般	ADJ	JJ	_	3	advmod	_	SpaceAfter=No
2	来	来	ADV	RB	_	3	mark	_	SpaceAfter=No
3	说	说	VERB	VV	_	20	advcl	_	SpaceAfter=No
4	，	，	PUNCT	,	_	20	punct	_	SpaceAfter=No
5	同	同	DET	DT	_	7	det	_	SpaceAfter=No
6	一	一	NUM	CD	NumType=Card	7	nummod	_	SpaceAfter=No
7	款	款	NOUN	NNB	_	8	nmod	_	SpaceAfter=No
8	间格	间格	NOUN	NN	_	12	nmod	_	SpaceAfter=No
9	的	的	PART	DEC	Case=Gen	8	case:dec	_	SpaceAfter=No
10	单	单	NUM	CD	NumType=Card	11	nummod	_	SpaceAfter=No
11	边	边	NOUN	NN	_	12	nmod	_	SpaceAfter=No
12	单位	单位	NOUN	NN	_	20	nsubj	_	SpaceAfter=No
13	比	比	ADP	IN	_	18	case	_	SpaceAfter=No
14	非	非	AUX	VC	_	16	cop	_	SpaceAfter=No
15	单	单	NUM	CD	NumType=Card	16	nummod	_	SpaceAfter=No
16	边	边	NOUN	NN	_	18	acl:relcl	_	SpaceAfter=No
17	的	的	PART	DEC	_	16	mark:relcl	_	SpaceAfter=No
18	呎价	呎价	NOUN	NN	_	20	nmod	_	SpaceAfter=No
19	约	约	ADV	RB	_	20	advmod	_	SpaceAfter=No
20	贵	贵	ADJ	JJ	_	0	root	_	SpaceAfter=No
21	20%	20%	NUM	CD	NumType=Card	20	advmod	_	SpaceAfter=No
22	。	。	PUNCT	.	_	20	punct	_	SpaceAfter=No

~~~


