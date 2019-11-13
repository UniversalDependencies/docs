---
layout: base
title:  'Statistics of obl:patient in UD_Chinese-GSDSimp'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSDSimp: Relations: `obl:patient`

This relation is a language-specific subtype of <tt><a href="zh_gsdsimp-dep-obl.html">obl</a></tt>.

196 nodes (0%) are attached to their parents as `obl:patient`.

196 instances of `obl:patient` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.93367346938776.

The following 7 pairs of parts of speech are connected with `obl:patient`: <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt> (139; 71% instances), <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-PRON.html">PRON</a></tt> (24; 12% instances), <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (20; 10% instances), <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-PROPN.html">PROPN</a></tt> (10; 5% instances), <tt><a href="zh_gsdsimp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt>-<tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 obl:patient	color:blue
1	而	而	ADV	RB	_	20	mark	_	SpaceAfter=No
2	解药	解药	NOUN	NN	_	4	nmod	_	SpaceAfter=No
3	的	的	PART	DEC	Case=Gen	2	case:dec	_	SpaceAfter=No
4	出现	出现	NOUN	NN	_	20	nsubj	_	SpaceAfter=No
5	也	也	ADV	RB	_	6	mark	_	SpaceAfter=No
6	使得	使得	VERB	VV	Voice=Cau	20	advcl	_	SpaceAfter=No
7	他们	他	PRON	PRP	Number=Plur|Person=3	11	nsubj	_	SpaceAfter=No
8	在	在	ADP	IN	_	9	case	_	SpaceAfter=No
9	公众	公众	NOUN	NN	_	11	obl	_	SpaceAfter=No
10	中	中	ADP	IN	_	9	acl	_	SpaceAfter=No
11	得到	得到	VERB	VV	_	6	ccomp	_	SpaceAfter=No
12	了	了	PART	AS	Aspect=Perf	11	case:aspect	_	SpaceAfter=No
13	威望	威望	NOUN	NN	_	11	obj	_	SpaceAfter=No
14	，	，	PUNCT	,	_	20	punct	_	SpaceAfter=No
15	并	并	ADV	RB	_	20	mark	_	SpaceAfter=No
16	将	将	ADP	BB	_	19	case	_	SpaceAfter=No
17	北方	北方	NOUN	NN	_	19	nmod	_	SpaceAfter=No
18	之	之	PART	DEC	Case=Gen	17	case:dec	_	SpaceAfter=No
19	火	火	NOUN	NN	_	20	obl:patient	_	SpaceAfter=No
20	推上	推上	VERB	VV	_	0	root	_	SpaceAfter=No
21	权力	权力	NOUN	NN	_	22	nmod	_	SpaceAfter=No
22	宝座	宝座	NOUN	NN	_	20	obj	_	SpaceAfter=No
23	。	。	PUNCT	.	_	20	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:patient	color:blue
1	吴	吴	PROPN	NNP	_	3	nmod	_	SpaceAfter=No
2	之	之	PART	DEC	Case=Gen	1	case:dec	_	SpaceAfter=No
3	父亲	父亲	NOUN	NN	_	6	nsubj	_	SpaceAfter=No
4	将	将	ADP	BB	_	5	case	_	SpaceAfter=No
5	其	其	PRON	PRP	Person=3	6	obl:patient	_	SpaceAfter=No
6	送往	送往	VERB	VV	_	10	advcl	_	SpaceAfter=No
7	英国	英国	PROPN	NNP	_	9	nmod	_	SpaceAfter=No
8	寄宿	寄宿	NOUN	NN	_	9	nmod	_	SpaceAfter=No
9	学校	学校	NOUN	NN	_	6	iobj	_	SpaceAfter=No
10	读	读	VERB	VV	_	0	root	_	SpaceAfter=No
11	高中	高中	NOUN	NN	_	10	obj	_	SpaceAfter=No
12	，	，	PUNCT	,	_	10	punct	_	SpaceAfter=No
13	但	但	ADV	RB	_	21	mark	_	SpaceAfter=No
14	他	他	PRON	PRP	Person=3	21	nsubj	_	SpaceAfter=No
15	又	又	ADV	RB	_	21	mark	_	SpaceAfter=No
16	因	因	ADP	IN	_	17	case	_	SpaceAfter=No
17	偷窃	偷窃	VERB	VV	_	21	xcomp	_	SpaceAfter=No
18	而	而	ADV	RB	_	21	mark	_	SpaceAfter=No
19	被	被	VERB	BB	Voice=Pass	21	aux:pass	_	SpaceAfter=No
20	学校	学校	NOUN	NN	_	21	nsubj	_	SpaceAfter=No
21	开除	开除	VERB	VV	_	10	parataxis	_	SpaceAfter=No
22	。	。	PUNCT	.	_	10	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 obl:patient	color:blue
1	只	只	ADV	RB	_	2	advmod	_	SpaceAfter=No
2	是	是	VERB	VC	_	8	advcl	_	SpaceAfter=No
3	在	在	VERB	VV	_	2	xcomp	_	SpaceAfter=No
4	纽约	纽约	PROPN	NNP	_	5	compound	_	SpaceAfter=No
5	州	州	PART	SFN	_	3	obj	_	SpaceAfter=No
6	，	，	PUNCT	,	_	8	punct	_	SpaceAfter=No
7	就	就	ADV	RB	_	8	mark	_	SpaceAfter=No
8	有	有	VERB	VV	_	0	root	_	SpaceAfter=No
9	500多	500多	NUM	CD	NumType=Card	10	nummod	_	SpaceAfter=No
10	所	所	NOUN	NNB	_	11	clf	_	SpaceAfter=No
11	学校	学校	NOUN	NN	_	15	nsubj	_	SpaceAfter=No
12	将	将	ADP	BB	_	14	case	_	SpaceAfter=No
13	匹克	匹克	NOUN	NN	_	14	compound	_	SpaceAfter=No
14	球	球	PART	SFN	_	15	obl:patient	_	SpaceAfter=No
15	设	设	VERB	VV	_	8	ccomp	_	SpaceAfter=No
16	为	为	VERB	VC	_	15	mark	_	SpaceAfter=No
17	课程	课程	NOUN	NN	_	16	obj	_	SpaceAfter=No
18	。	。	PUNCT	.	_	8	punct	_	SpaceAfter=No

~~~


