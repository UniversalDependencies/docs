

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.
There are 4 language-specific subtypes of `case`: [case:aspect](), [case:dec](), [case:pref](), [case:suff]().

3218 nodes (3%) are attached to their parents as `case`.

3201 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.2119328775637.

The following 13 pairs of parts of speech are connected with `case`: [zh-pos/NOUN]()-[zh-pos/ADP]() (1897; 59% instances), [zh-pos/VERB]()-[zh-pos/ADP]() (588; 18% instances), [zh-pos/PART]()-[zh-pos/ADP]() (244; 8% instances), [zh-pos/PROPN]()-[zh-pos/ADP]() (208; 6% instances), [zh-pos/PRON]()-[zh-pos/ADP]() (164; 5% instances), [zh-pos/ADJ]()-[zh-pos/ADP]() (59; 2% instances), [zh-pos/X]()-[zh-pos/ADP]() (26; 1% instances), [zh-pos/ADV]()-[zh-pos/ADP]() (12; 0% instances), [zh-pos/NUM]()-[zh-pos/ADP]() (10; 0% instances), [zh-pos/ADP]()-[zh-pos/ADP]() (6; 0% instances), [zh-pos/PUNCT]()-[zh-pos/ADP]() (2; 0% instances), [zh-pos/AUX]()-[zh-pos/ADP]() (1; 0% instances), [zh-pos/DET]()-[zh-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 18 case	color:blue
1	在	在	VERB	VV	_	12	acl	_	SpaceAfter=No
2	平原	平原	NOUN	NN	_	1	obj	_	SpaceAfter=No
3	、	、	PUNCT	EC	_	4	punct	_	SpaceAfter=No
4	塔	塔	NOUN	NN	_	2	conj	_	SpaceAfter=No
5	、	、	PUNCT	EC	_	6	punct	_	SpaceAfter=No
6	洞窟	洞窟	NOUN	NN	_	2	conj	_	SpaceAfter=No
7	、	、	PUNCT	EC	_	8	punct	_	SpaceAfter=No
8	海	海	NOUN	NN	_	2	conj	_	SpaceAfter=No
9	或	或	CCONJ	CC	_	10	cc	_	SpaceAfter=No
10	迷宮	迷宮	NOUN	NN	_	2	conj	_	SpaceAfter=No
11	中	中	NOUN	NN	_	2	acl	_	SpaceAfter=No
12	移動	移動	VERB	VV	_	23	acl	_	SpaceAfter=No
13	時	時	ADP	IN	_	12	mark	_	SpaceAfter=No
14	,	,	PUNCT	,	_	23	punct	_	SpaceAfter=No
15	玩家	玩家	NOUN	NN	_	23	nsubj	_	SpaceAfter=No
16	將	將	ADV	RB	_	23	advmod	_	SpaceAfter=No
17	會	會	AUX	MD	_	23	aux	_	SpaceAfter=No
18	和	和	ADP	IN	_	22	case	_	SpaceAfter=No
19	隨機	隨機	ADV	RB	_	20	advmod	_	SpaceAfter=No
20	遇到	遇到	VERB	VV	_	22	acl:relcl	_	SpaceAfter=No
21	的	的	PART	DEC	_	20	mark:relcl	_	SpaceAfter=No
22	敵人	敵人	NOUN	NN	_	23	obl	_	SpaceAfter=No
23	作戰	作戰	VERB	VV	_	0	root	_	SpaceAfter=No
24	.	.	PUNCT	.	_	23	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	這種	這種	DET	DT	_	2	det	_	SpaceAfter=No
2	車輛	車輛	NOUN	NN	_	10	nsubj	_	SpaceAfter=No
3	如果	如果	ADP	IN	_	4	case	_	SpaceAfter=No
4	歸	歸	VERB	VV	_	10	xcomp	_	SpaceAfter=No
5	私人	私人	NOUN	NN	_	6	nsubj	_	SpaceAfter=No
6	擁有	擁有	VERB	VV	_	4	ccomp	_	SpaceAfter=No
7	,	,	PUNCT	,	_	10	punct	_	SpaceAfter=No
8	多半	多半	ADV	RB	_	10	advmod	_	SpaceAfter=No
9	會	會	AUX	MD	_	10	aux	_	SpaceAfter=No
10	設置	設置	VERB	VV	_	0	root	_	SpaceAfter=No
11	昂貴	昂貴	ADJ	JJ	_	14	amod	_	SpaceAfter=No
12	的	的	PART	DEC	_	11	mark:relcl	_	SpaceAfter=No
13	音頻	音頻	NOUN	NN	_	14	nmod	_	SpaceAfter=No
14	設備	設備	NOUN	NN	_	10	obj	_	SpaceAfter=No
15	、	、	PUNCT	EC	_	17	punct	_	SpaceAfter=No
16	電視	電視	NOUN	NN	_	17	case:suff	_	SpaceAfter=No
17	機	機	PART	SFN	_	14	conj	_	SpaceAfter=No
18	、	、	PUNCT	EC	_	20	punct	_	SpaceAfter=No
19	影碟	影碟	NOUN	NN	_	20	case:suff	_	SpaceAfter=No
20	機	機	PART	SFN	_	14	conj	_	SpaceAfter=No
21	,	,	PUNCT	,	_	23	punct	_	SpaceAfter=No
22	以及	以及	CCONJ	CC	_	23	cc	_	SpaceAfter=No
23	吧台	吧台	NOUN	NN	_	14	conj	_	SpaceAfter=No
24	和	和	CCONJ	CC	_	25	cc	_	SpaceAfter=No
25	冰箱	冰箱	NOUN	NN	_	23	conj	_	SpaceAfter=No
26	.	.	PUNCT	.	_	10	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 case	color:blue
1	支線	支線	NOUN	NN	_	19	nsubj	_	SpaceAfter=No
2	從	從	ADP	IN	_	4	case	_	SpaceAfter=No
3	朝陽	朝陽	PROPN	NNP	_	4	case:suff	_	SpaceAfter=No
4	門	門	PART	SFN	_	5	obl	_	SpaceAfter=No
5	到	到	VERB	VV	_	9	acl	_	SpaceAfter=No
6	楊閘	楊閘	PROPN	NNP	_	7	nmod	_	SpaceAfter=No
7	環島	環島	NOUN	NN	_	5	obj	_	SpaceAfter=No
8	後	後	ADP	IN	_	5	mark	_	SpaceAfter=No
9	繼續	繼續	VERB	VV	_	19	acl	_	SpaceAfter=No
10	向	向	ADP	IN	_	11	case	_	SpaceAfter=No
11	東	東	NOUN	NN	_	12	obl	_	SpaceAfter=No
12	行駛	行駛	VERB	VV	_	9	xcomp	_	SpaceAfter=No
13	,	,	PUNCT	,	_	19	punct	_	SpaceAfter=No
14	上	上	VERB	VV	_	19	acl	_	SpaceAfter=No
15	京	京	PROPN	NNP	_	17	nmod	_	SpaceAfter=No
16	哈	哈	PROPN	NNP	_	17	nmod	_	SpaceAfter=No
17	高速	高速	NOUN	NN	_	14	obj	_	SpaceAfter=No
18	後	後	ADP	IN	_	14	mark	_	SpaceAfter=No
19	到達	到達	VERB	VV	_	0	root	_	SpaceAfter=No
20	通州	通州	PROPN	NNP	_	23	nmod	_	SpaceAfter=No
21	武夷	武夷	PROPN	NNP	_	23	nmod	_	SpaceAfter=No
22	花園	花園	NOUN	NN	_	23	nmod	_	SpaceAfter=No
23	小區	小區	NOUN	NN	_	19	obj	_	SpaceAfter=No
24	.	.	PUNCT	.	_	19	punct	_	SpaceAfter=No

~~~


