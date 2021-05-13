---
layout: base
title:  'Statistics of compound:ext in UD_Chinese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSD: Relations: `compound:ext`

This relation is a language-specific subtype of <tt><a href="zh_gsd-dep-compound.html">compound</a></tt>.

25 nodes (0%) are attached to their parents as `compound:ext`.

25 instances of `compound:ext` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound:ext`: <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (24; 96% instances), <tt><a href="zh_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 compound:ext	color:blue
1	北極	北極	PROPN	NNP	_	3	nmod	_	SpaceAfter=No
2	土著	土著	NOUN	NN	_	3	nmod	_	SpaceAfter=No
3	民族	民族	NOUN	NN	_	8	nsubj	_	SpaceAfter=No
4	一直	一直	ADV	RB	_	8	advmod	_	SpaceAfter=No
5	與	與	ADP	IN	_	6	case	_	SpaceAfter=No
6	外界	外界	NOUN	NN	_	8	nmod	_	SpaceAfter=No
7	接觸	接觸	AUX	VV	_	8	cop	_	SpaceAfter=No
8	甚少	甚少	ADJ	JJ	_	0	root	_	SpaceAfter=No
9	，	，	PUNCT	,	_	8	punct	_	SpaceAfter=No
10	直到	直到	ADP	IN	_	11	case	_	SpaceAfter=No
11	現代	現代	NOUN	NN	_	19	obl	_	SpaceAfter=No
12	，	，	PUNCT	,	_	19	punct	_	SpaceAfter=No
13	與	與	ADP	IN	_	17	det	_	SpaceAfter=No
14	其他	其他	DET	DT	_	15	det	_	SpaceAfter=No
15	地區	地區	NOUN	NN	_	13	nmod	_	SpaceAfter=No
16	的	的	PART	DEC	Case=Gen	13	case	_	SpaceAfter=No
17	交流	交流	NOUN	NN	_	19	nsubj	_	SpaceAfter=No
18	才	才	ADV	RB	_	19	mark	_	SpaceAfter=No
19	開始	開始	VERB	VV	_	8	parataxis	_	SpaceAfter=No
20	變	變	VERB	VV	_	19	xcomp	_	SpaceAfter=No
21	得	得	PART	DEV	_	20	compound:ext	_	SpaceAfter=No
22	頻繁	頻繁	ADJ	JJ	_	20	xcomp	_	SpaceAfter=No
23	。	。	PUNCT	.	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 54	bgColor:blue
# visual-style 54	fgColor:white
# visual-style 53	bgColor:blue
# visual-style 53	fgColor:white
# visual-style 53 54 compound:ext	color:blue
1	在	在	VERB	VV	_	9	advcl	_	SpaceAfter=No
2	瑞士	瑞士	PROPN	NNP	_	1	obj	_	SpaceAfter=No
3	和	和	CCONJ	CC	_	4	cc	_	SpaceAfter=No
4	奧地利	奧地利	PROPN	NNP	_	2	conj	_	SpaceAfter=No
5	新	新	ADJ	JJ	_	8	amod	_	SpaceAfter=No
6	的	的	PART	DEC	_	5	mark:rel	_	SpaceAfter=No
7	齒軌	齒軌	NOUN	NN	_	8	nmod	_	SpaceAfter=No
8	鐵路	鐵路	NOUN	NN	_	9	nsubj	_	SpaceAfter=No
9	使用	使用	VERB	VV	_	0	root	_	SpaceAfter=No
10	現代	現代	NOUN	NN	_	13	nmod	_	SpaceAfter=No
11	的	的	PART	DEC	Case=Gen	10	case	_	SpaceAfter=No
12	蒸汽	蒸汽	NOUN	NN	_	13	compound	_	SpaceAfter=No
13	機	機	PART	SFN	_	9	obj	_	SpaceAfter=No
14	，	，	PUNCT	,	_	9	punct	_	SpaceAfter=No
15	這些	這些	DET	DT	_	17	det	_	SpaceAfter=No
16	蒸汽	蒸汽	NOUN	NN	_	17	compound	_	SpaceAfter=No
17	機	機	PART	SFN	_	19	nsubj	_	SpaceAfter=No
18	只	只	ADV	RB	_	19	advmod	_	SpaceAfter=No
19	需要	需要	VERB	VV	_	9	parataxis	_	SpaceAfter=No
20	一	一	NUM	CD	NumType=Card	21	nummod	_	SpaceAfter=No
21	個	個	NOUN	NNB	_	22	clf	_	SpaceAfter=No
22	人	人	NOUN	NN	_	24	nsubj	_	SpaceAfter=No
23	來	來	ADV	RB	_	24	mark	_	SpaceAfter=No
24	運行	運行	VERB	VV	_	19	ccomp	_	SpaceAfter=No
25	，	，	PUNCT	,	_	9	punct	_	SpaceAfter=No
26	比起	比起	ADP	IN	_	30	case	_	SpaceAfter=No
27	過去	過去	NOUN	NN	_	30	nmod	_	SpaceAfter=No
28	的	的	PART	DEC	Case=Gen	27	case	_	SpaceAfter=No
29	蒸汽	蒸汽	NOUN	NN	_	30	compound	_	SpaceAfter=No
30	機	機	PART	SFN	_	32	obl	_	SpaceAfter=No
31	它	它	PRON	PRP	Person=3	32	nsubj	_	SpaceAfter=No
32	節省	節省	VERB	VV	_	9	parataxis	_	SpaceAfter=No
33	60%	60%	NUM	CD	NumType=Card	35	nummod	_	SpaceAfter=No
34	的	的	PART	DEC	Case=Gen	33	case	_	SpaceAfter=No
35	燃料	燃料	NOUN	NN	_	32	obj	_	SpaceAfter=No
36	，	，	PUNCT	,	_	9	punct	_	SpaceAfter=No
37	比起	比起	ADP	IN	_	39	case	_	SpaceAfter=No
38	電力	電力	NOUN	NN	_	39	compound	_	SpaceAfter=No
39	機	機	PART	SFN	_	44	nmod	_	SpaceAfter=No
40	和	和	CCONJ	CC	_	42	cc	_	SpaceAfter=No
41	柴油	柴油	NOUN	NN	_	42	compound	_	SpaceAfter=No
42	機	機	PART	SFN	_	39	conj	_	SpaceAfter=No
43	它	它	PRON	PRP	Person=3	44	nsubj	_	SpaceAfter=No
44	輕	輕	ADJ	JJ	_	9	parataxis	_	SpaceAfter=No
45	50%	50%	NUM	CD	NumType=Card	44	advmod	_	SpaceAfter=No
46	，	，	PUNCT	,	_	9	punct	_	SpaceAfter=No
47	因	因	ADP	IN	_	48	case	_	SpaceAfter=No
48	此	此	PRON	PRD	_	53	nmod	_	SpaceAfter=No
49	對	對	ADP	IN	_	52	case	_	SpaceAfter=No
50	齒軌	齒軌	NOUN	NN	_	52	nmod	_	SpaceAfter=No
51	的	的	PART	DEC	Case=Gen	50	case	_	SpaceAfter=No
52	磨損	磨損	NOUN	NN	_	53	nmod	_	SpaceAfter=No
53	小	小	ADJ	JJ	_	9	parataxis	_	SpaceAfter=No
54	得	得	PART	DEV	_	53	compound:ext	_	SpaceAfter=No
55	多	多	ADJ	JJ	_	53	xcomp	_	SpaceAfter=No
56	。	。	PUNCT	.	_	9	punct	_	SpaceAfter=No

~~~


