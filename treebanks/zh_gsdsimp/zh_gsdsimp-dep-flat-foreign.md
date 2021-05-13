---
layout: base
title:  'Statistics of flat:foreign in UD_Chinese-GSDSimp'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSDSimp: Relations: `flat:foreign`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="zh_gsdsimp-dep-flat-name.html">flat:name</a></tt>.

325 nodes (0%) are attached to their parents as `flat:foreign`.

325 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58461538461538.

The following 3 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="zh_gsdsimp-pos-X.html">X</a></tt>-<tt><a href="zh_gsdsimp-pos-X.html">X</a></tt> (319; 98% instances), <tt><a href="zh_gsdsimp-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_gsdsimp-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="zh_gsdsimp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_gsdsimp-pos-PROPN.html">PROPN</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:foreign	color:blue
1	当	当	ADP	IN	_	6	case	_	SpaceAfter=No
2	《	《	PUNCT	(	_	3	punct	_	SpaceAfter=No
3	Game	Game	X	FW	_	6	nsubj	_	_
4	Informer	Informer	X	FW	_	3	flat:foreign	_	SpaceAfter=No
5	》	》	PUNCT	)	_	3	punct	_	SpaceAfter=No
6	提到	提到	VERB	VV	_	15	ccomp	_	SpaceAfter=No
7	游戏	游戏	NOUN	NN	_	8	nsubj	_	SpaceAfter=No
8	在	在	VERB	VV	_	12	acl:relcl	_	SpaceAfter=No
9	日本	日本	PROPN	NNP	_	8	obj	_	SpaceAfter=No
10	的	的	PART	DEC	_	8	mark:rel	_	SpaceAfter=No
11	知名	知名	ADJ	JJ	_	12	compound	_	SpaceAfter=No
12	度	度	PART	SFN	_	6	obj	_	SpaceAfter=No
13	时	时	ADP	IN	_	6	mark	_	SpaceAfter=No
14	甚至	甚至	ADV	RB	_	15	mark	_	SpaceAfter=No
15	说	说	VERB	VV	_	0	root	_	SpaceAfter=No
16	“	“	PUNCT	``	_	19	punct	_	SpaceAfter=No
17	四百万	四百万	NUM	CD	NumType=Card	19	nummod	_	SpaceAfter=No
18	日本	日本	PROPN	NNP	_	19	compound	_	SpaceAfter=No
19	人	人	PART	SFN	_	21	nsubj	_	SpaceAfter=No
20	可能	可能	AUX	MD	_	21	aux	_	SpaceAfter=No
21	错	错	ADJ	JJ	_	15	ccomp	_	SpaceAfter=No
22	了	了	PART	UH	_	21	discourse	_	SpaceAfter=No
23	”	”	PUNCT	''	_	21	punct	_	SpaceAfter=No
24	。	。	PUNCT	.	_	15	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat:foreign	color:blue
1	红	红	NOUN	NN	_	4	nmod	_	SpaceAfter=No
2	蜘蛛	蜘蛛	NOUN	NN	_	4	nmod	_	SpaceAfter=No
3	星云	星云	NOUN	NN	_	4	nmod	_	SpaceAfter=No
4	中心	中心	NOUN	NN	_	7	nmod	_	SpaceAfter=No
5	的	的	PART	DEC	Case=Gen	4	case	_	SpaceAfter=No
6	白	白	NOUN	NN	_	7	nmod	_	SpaceAfter=No
7	矮星	矮星	NOUN	NN	_	9	nsubj	_	SpaceAfter=No
8	会	会	AUX	MD	_	9	aux	_	SpaceAfter=No
9	产生	产生	VERB	VV	_	0	root	_	SpaceAfter=No
10	温度	温度	NOUN	NN	_	11	nsubj	_	SpaceAfter=No
11	高达	高达	VERB	VV	_	17	acl:relcl	_	SpaceAfter=No
12	10000	10000	NUM	CD	NumType=Card	11	obj	_	_
13	K	K	X	FW	_	12	flat:foreign	_	SpaceAfter=No
14	的	的	PART	DEC	_	11	mark:rel	_	SpaceAfter=No
15	强烈	强烈	ADJ	JJ	_	17	amod	_	SpaceAfter=No
16	恒星	恒星	NOUN	NN	_	17	compound	_	SpaceAfter=No
17	风	风	PART	SFN	_	9	obj	_	SpaceAfter=No
18	，	，	PUNCT	,	_	9	punct	_	SpaceAfter=No
19	速度	速度	NOUN	NN	_	20	nsubj	_	SpaceAfter=No
20	达到	达到	VERB	VV	_	25	csubj	_	SpaceAfter=No
21	每秒	每秒	DET	DT	_	23	advmod	_	SpaceAfter=No
22	300	300	NUM	CD	NumType=Card	23	nummod	_	SpaceAfter=No
23	公里	公里	NOUN	NNB	_	20	obj	_	SpaceAfter=No
24	，	，	PUNCT	,	_	25	punct	_	SpaceAfter=No
25	产生	产生	VERB	VV	_	9	parataxis	_	SpaceAfter=No
26	振幅	振幅	NOUN	NN	_	29	nsubj	_	SpaceAfter=No
27	1千亿	1千亿	NUM	CD	NumType=Card	28	nummod	_	SpaceAfter=No
28	公里	公里	NOUN	NNB	_	29	advmod	_	SpaceAfter=No
29	高	高	ADJ	JJ	_	31	amod	_	SpaceAfter=No
30	的	的	PART	DEC	_	29	mark:rel	_	SpaceAfter=No
31	震波	震波	NOUN	NN	_	25	obj	_	SpaceAfter=No
32	。	。	PUNCT	.	_	9	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:foreign	color:blue
1	目前	目前	NOUN	NN	_	3	nmod	_	SpaceAfter=No
2	的	的	PART	DEC	Case=Gen	1	case	_	SpaceAfter=No
3	教堂	教堂	NOUN	NN	_	18	nsubj	_	SpaceAfter=No
4	由	由	VERB	VV	_	18	advcl	_	SpaceAfter=No
5	詹姆斯	詹姆斯	PROPN	NNP	_	12	nsubj	_	SpaceAfter=No
6	·	·	PUNCT	/	_	5	punct	_	SpaceAfter=No
7	吉布斯	吉布斯	PROPN	NNP	_	5	flat:name	_	SpaceAfter=No
8	（	（	PUNCT	(	_	9	punct	_	SpaceAfter=No
9	James	James	PROPN	NNP	_	5	appos	_	_
10	Gibbs	Gibbs	PROPN	NNP	_	9	flat:foreign	_	SpaceAfter=No
11	）	）	PUNCT	)	_	9	punct	_	SpaceAfter=No
12	设计	设计	VERB	VV	_	4	ccomp	_	SpaceAfter=No
13	建造	建造	VERB	VV	_	12	conj	_	SpaceAfter=No
14	，	，	PUNCT	,	_	18	punct	_	SpaceAfter=No
15	于	于	ADP	IN	_	17	case	_	SpaceAfter=No
16	1723	1723	NUM	CD	NumType=Card	17	nummod	_	SpaceAfter=No
17	年	年	NOUN	NNB	_	18	obl	_	SpaceAfter=No
18	献堂	献堂	VERB	VV	_	0	root	_	SpaceAfter=No
19	。	。	PUNCT	.	_	18	punct	_	SpaceAfter=No

~~~


