

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [case]().
There are also 3 other language-specific subtypes of `case`: [case:dec](), [case:pref](), [case:suff]().

838 nodes (1%) are attached to their parents as `case:aspect`.

834 instances of `case:aspect` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05727923627685.

The following 4 pairs of parts of speech are connected with `case:aspect`: [zh-pos/VERB]()-[zh-pos/PART]() (830; 99% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (6; 1% instances), [zh-pos/NOUN]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 case:aspect	color:blue
1	動作	動作	NOUN	NN	_	3	nmod	_	SpaceAfter=No
2	冒險	冒險	NOUN	NN	_	3	nmod	_	SpaceAfter=No
3	遊戲	遊戲	NOUN	NN	_	12	nsubj	_	SpaceAfter=No
4	(	(	PUNCT	(	_	5	punct	_	SpaceAfter=No
5	A-AVG	A-AVG	X	FW	_	3	appos	_	SpaceAfter=No
6	)	)	PUNCT	)	_	5	punct	_	SpaceAfter=No
7	:	:	PUNCT	:	_	12	punct	_	SpaceAfter=No
8	是	是	AUX	VC	_	12	cop	_	SpaceAfter=No
9	冒險	冒險	NOUN	NN	_	10	nmod	_	SpaceAfter=No
10	遊戲	遊戲	NOUN	NN	_	12	det	_	SpaceAfter=No
11	的	的	PART	DEC	Case=Gen	10	case:dec	_	SpaceAfter=No
12	分支	分支	NOUN	NN	_	15	dep	_	SpaceAfter=No
13	,	,	PUNCT	,	_	15	punct	_	SpaceAfter=No
14	它	它	PRON	PRP	Person=3	15	nsubj	_	SpaceAfter=No
15	融合	融合	VERB	VV	_	0	root	_	SpaceAfter=No
16	了	了	PART	AS	Aspect=Perf	15	case:aspect	_	SpaceAfter=No
17	動作	動作	NOUN	NN	_	18	nmod	_	SpaceAfter=No
18	遊戲	遊戲	NOUN	NN	_	21	det	_	SpaceAfter=No
19	的	的	PART	DEC	Case=Gen	18	case:dec	_	SpaceAfter=No
20	一些	一些	ADJ	JJ	_	21	amod	_	SpaceAfter=No
21	特徵	特徵	NOUN	NN	_	15	obj	_	SpaceAfter=No
22	.	.	PUNCT	.	_	15	punct	_	SpaceAfter=No

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
9	.	.	PUNCT	.	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 43 26 case:aspect	color:blue
1	美國	美國	PROPN	NNP	_	8	nmod	_	SpaceAfter=No
2	海軍	海軍	NOUN	NN	_	8	nmod	_	SpaceAfter=No
3	海豹	海豹	PROPN	NNP	_	8	nmod	_	SpaceAfter=No
4	突擊	突擊	VERB	VV	_	5	case:suff	_	SpaceAfter=No
5	隊	隊	PART	SFN	_	8	nmod	_	SpaceAfter=No
6	「	「	PUNCT	``	_	8	punct	_	SpaceAfter=No
7	第六	第六	NUM	CD	NumType=Card	8	nummod	_	SpaceAfter=No
8	分隊	分隊	NOUN	NN	_	12	det	_	SpaceAfter=No
9	」	」	PUNCT	''	_	8	punct	_	SpaceAfter=No
10	的	的	PART	DEC	Case=Gen	8	case:dec	_	SpaceAfter=No
11	狙擊	狙擊	VERB	VV	_	12	case:suff	_	SpaceAfter=No
12	手	手	PART	SFN	_	53	nsubj	_	SpaceAfter=No
13	(	(	PUNCT	(	_	15	punct	_	SpaceAfter=No
14	神	神	PART	PFA	_	15	case:pref	_	SpaceAfter=No
15	槍手	槍手	NOUN	NN	_	12	appos	_	SpaceAfter=No
16	)	)	PUNCT	)	_	15	punct	_	SpaceAfter=No
17	在	在	VERB	VV	_	44	acl	_	SpaceAfter=No
18	班布里奇	班布里奇	PROPN	NNP	_	19	case:suff	_	SpaceAfter=No
19	號	號	PART	SFN	_	20	nmod	_	SpaceAfter=No
20	船尾	船尾	NOUN	NN	_	22	det	_	SpaceAfter=No
21	的	的	PART	DEC	Case=Gen	20	case:dec	_	SpaceAfter=No
22	甲板	甲板	NOUN	NN	_	17	obj	_	SpaceAfter=No
23	上	上	NOUN	NN	_	22	acl	_	SpaceAfter=No
24	,	,	PUNCT	,	_	44	punct	_	SpaceAfter=No
25	向	向	ADP	IN	_	43	case	_	SpaceAfter=No
26	著	著	PART	AS	Aspect=Prog	43	case:aspect	_	SpaceAfter=No
27	距離	距離	ADP	IN	_	28	case	_	SpaceAfter=No
28	船尾	船尾	NOUN	NN	_	33	nmod	_	SpaceAfter=No
29	約	約	ADV	RB	_	33	advmod	_	SpaceAfter=No
30	25	25	NUM	CD	NumType=Card	33	nummod	_	SpaceAfter=No
31	~	~	PUNCT	HYPH	_	33	punct	_	SpaceAfter=No
32	30	30	NUM	CD	NumType=Card	33	nummod	_	SpaceAfter=No
33	碼	碼	NOUN	NNB	_	39	nmod	_	SpaceAfter=No
34	被	被	VERB	BB	Voice=Pass	35	aux:pass	_	SpaceAfter=No
35	拖	拖	VERB	VV	_	39	acl:relcl	_	SpaceAfter=No
36	著	著	PART	AS	Aspect=Prog	35	case:aspect	_	SpaceAfter=No
37	的	的	PART	DEC	_	35	mark:relcl	_	SpaceAfter=No
38	救生	救生	VERB	VV	_	39	case:suff	_	SpaceAfter=No
39	艇	艇	PART	SFN	_	43	det	_	SpaceAfter=No
40	上	上	NOUN	NN	_	39	acl	_	SpaceAfter=No
41	的	的	PART	DEC	Case=Gen	39	case:dec	_	SpaceAfter=No
42	海盜	海盜	NOUN	NN	_	43	case:suff	_	SpaceAfter=No
43	們	們	PART	SFN	Number=Plur	44	obl	_	SpaceAfter=No
44	開火	開火	VERB	VV	_	53	acl	_	SpaceAfter=No
45	,	,	PUNCT	,	_	53	punct	_	SpaceAfter=No
46	將	將	VERB	BB	Voice=Cau	51	aux:caus	_	SpaceAfter=No
47	船上	船上	NOUN	NN	_	51	det	_	SpaceAfter=No
48	的	的	PART	DEC	Case=Gen	47	case:dec	_	SpaceAfter=No
49	三	三	NUM	CD	NumType=Card	50	nummod	_	SpaceAfter=No
50	名	名	NOUN	NNB	_	51	clf	_	SpaceAfter=No
51	海盜	海盜	NOUN	NN	_	53	obj	_	SpaceAfter=No
52	當場	當場	NOUN	NN	_	53	advmod	_	SpaceAfter=No
53	擊斃	擊斃	VERB	VV	_	61	dep	_	SpaceAfter=No
54	,	,	PUNCT	,	_	61	punct	_	SpaceAfter=No
55	而且	而且	ADV	RB	_	61	mark	_	SpaceAfter=No
56	這	這	DET	DT	_	58	det	_	SpaceAfter=No
57	三	三	NUM	CD	NumType=Card	58	nummod	_	SpaceAfter=No
58	名	名	NOUN	NNB	_	59	nmod	_	SpaceAfter=No
59	海盜	海盜	NOUN	NN	_	61	nsubj	_	SpaceAfter=No
60	幾乎	幾乎	ADV	RB	_	61	advmod	_	SpaceAfter=No
61	是	是	VERB	VC	_	0	root	_	SpaceAfter=No
62	同時	同時	NOUN	NN	_	67	nmod:tmod	_	SpaceAfter=No
63	頭部	頭部	NOUN	NN	_	64	nsubj	_	SpaceAfter=No
64	中彈	中彈	VERB	VV	_	67	acl	_	SpaceAfter=No
65	而	而	ADV	RB	_	67	mark	_	SpaceAfter=No
66	立即	立即	ADV	RB	_	67	advmod	_	SpaceAfter=No
67	身亡	身亡	VERB	VV	_	61	xcomp	_	SpaceAfter=No
68	.	.	PUNCT	.	_	61	punct	_	SpaceAfter=No

~~~


