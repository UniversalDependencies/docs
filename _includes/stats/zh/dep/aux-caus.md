

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [aux]().
There are also 1 other language-specific subtypes of `aux`: [aux:pass]().

176 nodes (0%) are attached to their parents as `aux:caus`.

176 instances of `aux:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.375.

The following 4 pairs of parts of speech are connected with `aux:caus`: [zh-pos/VERB]()-[zh-pos/VERB]() (173; 98% instances), [zh-pos/ADJ]()-[zh-pos/VERB]() (1; 1% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (1; 1% instances), [zh-pos/PART]()-[zh-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 16 aux:caus	color:blue
1	而	而	ADV	RB	_	20	mark	_	SpaceAfter=No
2	解藥	解藥	NOUN	NN	_	4	det	_	SpaceAfter=No
3	的	的	PART	DEC	Case=Gen	2	case:dec	_	SpaceAfter=No
4	出現	出現	NOUN	NN	_	20	nsubj	_	SpaceAfter=No
5	也	也	ADV	RB	_	6	mark	_	SpaceAfter=No
6	使得	使得	VERB	VV	Voice=Cau	20	acl	_	SpaceAfter=No
7	他們	他	PRON	PRP	Number=Plur|Person=3	11	nsubj	_	SpaceAfter=No
8	在	在	ADP	IN	_	9	case	_	SpaceAfter=No
9	公眾	公眾	NOUN	NN	_	11	obl	_	SpaceAfter=No
10	中	中	ADP	IN	_	9	acl	_	SpaceAfter=No
11	得到	得到	VERB	VV	_	6	ccomp	_	SpaceAfter=No
12	了	了	PART	AS	Aspect=Perf	11	case:aspect	_	SpaceAfter=No
13	威望	威望	NOUN	NN	_	11	obj	_	SpaceAfter=No
14	,	,	PUNCT	,	_	20	punct	_	SpaceAfter=No
15	並	並	ADV	RB	_	20	mark	_	SpaceAfter=No
16	將	將	VERB	BB	Voice=Cau	20	aux:caus	_	SpaceAfter=No
17	北方	北方	NOUN	NN	_	19	det	_	SpaceAfter=No
18	之	之	PART	DEC	Case=Gen	17	case:dec	_	SpaceAfter=No
19	火	火	NOUN	NN	_	20	obj	_	SpaceAfter=No
20	推上	推上	VERB	VV	_	0	root	_	SpaceAfter=No
21	權力	權力	NOUN	NN	_	22	nmod	_	SpaceAfter=No
22	寶座	寶座	NOUN	NN	_	20	obj	_	SpaceAfter=No
23	.	.	PUNCT	.	_	20	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 51	bgColor:blue
# visual-style 51	fgColor:white
# visual-style 51 46 aux:caus	color:blue
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


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 19 aux:caus	color:blue
1	1996	1996	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No
2	年	年	NOUN	NNB	_	6	clf	_	SpaceAfter=No
3	4	4	NUM	CD	NumType=Card	4	nummod	_	SpaceAfter=No
4	月	月	NOUN	NNB	_	6	clf	_	SpaceAfter=No
5	17	17	NUM	CD	NumType=Card	6	nummod	_	SpaceAfter=No
6	日	日	NOUN	NNB	_	10	nmod:tmod	_	SpaceAfter=No
7	,	,	PUNCT	,	_	10	punct	_	SpaceAfter=No
8	李	李	PROPN	NNP	_	9	nmod	_	SpaceAfter=No
9	柱銘	柱銘	PROPN	NNP	_	10	nsubj	_	SpaceAfter=No
10	抵達	抵達	VERB	VV	_	15	dep	_	SpaceAfter=No
11	美國	美國	PROPN	NNP	_	12	nmod	_	SpaceAfter=No
12	華盛頓	華盛頓	PROPN	NNP	_	10	obj	_	SpaceAfter=No
13	,	,	PUNCT	,	_	15	punct	_	SpaceAfter=No
14	他	他	PRON	PRP	Person=3	15	nsubj	_	SpaceAfter=No
15	承認	承認	VERB	VV	_	0	root	_	SpaceAfter=No
16	向	向	ADP	IN	_	17	case	_	SpaceAfter=No
17	美國	美國	PROPN	NNP	_	18	obl	_	SpaceAfter=No
18	爭取	爭取	VERB	VV	_	34	acl	_	SpaceAfter=No
19	把	把	VERB	BB	Voice=Cau	23	aux:caus	_	SpaceAfter=No
20	香港	香港	PROPN	NNP	_	21	nmod	_	SpaceAfter=No
21	問題	問題	NOUN	NN	_	23	obj	_	SpaceAfter=No
22	國際	國際	NOUN	NN	_	23	case:suff	_	SpaceAfter=No
23	化	化	PART	SFV	_	18	xcomp	_	SpaceAfter=No
24	,	,	PUNCT	,	_	34	punct	_	SpaceAfter=No
25	呼籲	呼籲	VERB	VV	Voice=Cau	34	acl	_	SpaceAfter=No
26	國際	國際	NOUN	NN	_	29	nsubj	_	SpaceAfter=No
27	亦	亦	ADV	RB	_	29	mark	_	SpaceAfter=No
28	應	應	AUX	MD	_	29	aux	_	SpaceAfter=No
29	給予	給予	VERB	VV	_	25	ccomp	_	SpaceAfter=No
30	中國	中國	PROPN	NNP	_	29	iobj	_	SpaceAfter=No
31	壓力	壓力	NOUN	NN	_	29	obj	_	SpaceAfter=No
32	,	,	PUNCT	,	_	34	punct	_	SpaceAfter=No
33	以	以	ADV	RB	_	34	mark	_	SpaceAfter=No
34	保證	保證	VERB	VV	_	15	xcomp	_	SpaceAfter=No
35	香港	香港	PROPN	NNP	_	36	nmod	_	SpaceAfter=No
36	政權	政權	NOUN	NN	_	37	nsubj	_	SpaceAfter=No
37	移交	移交	VERB	VV	_	39	dep	_	SpaceAfter=No
38	後	後	ADP	IN	_	37	mark	_	SpaceAfter=No
39	得	得	VERB	VV	_	34	xcomp	_	SpaceAfter=No
40	以	以	ADV	RB	_	42	mark	_	SpaceAfter=No
41	高度	高度	NOUN	NN	_	42	advmod	_	SpaceAfter=No
42	自治	自治	VERB	VV	_	39	xcomp	_	SpaceAfter=No
43	.	.	PUNCT	.	_	34	punct	_	SpaceAfter=No

~~~


