

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.
There are 4 language-specific subtypes of `case`: [case:aspect](), [case:dec](), [case:pref](), [case:suff]().

3546 nodes (3%) are attached to their parents as `case`.

3528 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.21630005640158.

The following 13 pairs of parts of speech are connected with `case`: [zh-pos/NOUN]()-[zh-pos/ADP]() (2088; 59% instances), [zh-pos/VERB]()-[zh-pos/ADP]() (654; 18% instances), [zh-pos/PART]()-[zh-pos/ADP]() (272; 8% instances), [zh-pos/PROPN]()-[zh-pos/ADP]() (228; 6% instances), [zh-pos/PRON]()-[zh-pos/ADP]() (175; 5% instances), [zh-pos/ADJ]()-[zh-pos/ADP]() (67; 2% instances), [zh-pos/X]()-[zh-pos/ADP]() (29; 1% instances), [zh-pos/ADV]()-[zh-pos/ADP]() (13; 0% instances), [zh-pos/NUM]()-[zh-pos/ADP]() (10; 0% instances), [zh-pos/ADP]()-[zh-pos/ADP]() (6; 0% instances), [zh-pos/PUNCT]()-[zh-pos/ADP]() (2; 0% instances), [zh-pos/AUX]()-[zh-pos/ADP]() (1; 0% instances), [zh-pos/DET]()-[zh-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 18 case	color:blue
1	在	_	VERB	VV	_	12	acl	_	_
2	平原	_	NOUN	NN	_	1	dobj	_	_
3	、	_	PUNCT	EC	_	2	punct	_	_
4	塔	_	NOUN	NN	_	2	conj	_	_
5	、	_	PUNCT	EC	_	2	punct	_	_
6	洞窟	_	NOUN	NN	_	2	conj	_	_
7	、	_	PUNCT	EC	_	2	punct	_	_
8	海	_	NOUN	NN	_	2	conj	_	_
9	或	_	CONJ	CC	_	2	cc	_	_
10	迷宮	_	NOUN	NN	_	2	conj	_	_
11	中	_	NOUN	NN	_	2	acl	_	_
12	移動	_	VERB	VV	_	23	acl	_	_
13	時	_	ADP	IN	_	12	mark	_	_
14	,	_	PUNCT	,	_	23	punct	_	_
15	玩家	_	NOUN	NN	_	23	nsubj	_	_
16	將	_	ADV	RB	_	23	advmod	_	_
17	會	_	AUX	MD	_	23	aux	_	_
18	和	_	ADP	IN	_	22	case	_	_
19	隨機	_	ADV	RB	_	20	advmod	_	_
20	遇到	_	VERB	VV	_	22	acl:relcl	_	_
21	的	_	PART	DEC	Case=Rel	20	acl:relcl	_	_
22	敵人	_	NOUN	NN	_	23	nmod	_	_
23	作戰	_	VERB	VV	_	0	root	_	_
24	.	_	PUNCT	.	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	這種	_	DET	DT	_	2	det	_	_
2	車輛	_	NOUN	NN	_	10	nsubj	_	_
3	如果	_	ADP	IN	_	4	case	_	_
4	歸	_	VERB	VV	_	10	xcomp	_	_
5	私人	_	NOUN	NN	_	6	nsubj	_	_
6	擁有	_	VERB	VV	_	4	ccomp	_	_
7	,	_	PUNCT	,	_	10	punct	_	_
8	多半	_	ADV	RB	_	10	advmod	_	_
9	會	_	AUX	MD	_	10	aux	_	_
10	設置	_	VERB	VV	_	0	root	_	_
11	昂貴	_	ADJ	JJ	_	14	amod	_	_
12	的	_	PART	DEC	Case=Rel	11	acl:relcl	_	_
13	音頻	_	NOUN	NN	_	14	nmod	_	_
14	設備	_	NOUN	NN	_	10	dobj	_	_
15	、	_	PUNCT	EC	_	14	punct	_	_
16	電視	_	NOUN	NN	_	17	case:suff	_	_
17	機	_	PART	SFN	_	14	conj	_	_
18	、	_	PUNCT	EC	_	14	punct	_	_
19	影碟	_	NOUN	NN	_	20	case:suff	_	_
20	機	_	PART	SFN	_	14	conj	_	_
21	,	_	PUNCT	,	_	14	punct	_	_
22	以及	_	CONJ	CC	_	14	cc	_	_
23	吧台	_	NOUN	NN	_	14	conj	_	_
24	和	_	CONJ	CC	_	23	cc	_	_
25	冰箱	_	NOUN	NN	_	23	conj	_	_
26	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 case	color:blue
1	支線	_	NOUN	NN	_	19	nsubj	_	_
2	從	_	ADP	IN	_	4	case	_	_
3	朝陽	_	PROPN	NNP	_	4	case:suff	_	_
4	門	_	PART	SFN	_	5	nmod	_	_
5	到	_	VERB	VV	_	9	acl	_	_
6	楊閘	_	PROPN	NNP	_	7	nmod	_	_
7	環島	_	NOUN	NN	_	5	dobj	_	_
8	後	_	ADP	IN	_	5	mark	_	_
9	繼續	_	VERB	VV	_	19	acl	_	_
10	向	_	ADP	IN	_	11	case	_	_
11	東	_	NOUN	NN	_	12	nmod	_	_
12	行駛	_	VERB	VV	_	9	xcomp	_	_
13	,	_	PUNCT	,	_	19	punct	_	_
14	上	_	VERB	VV	_	19	acl	_	_
15	京	_	PROPN	NNP	_	17	nmod	_	_
16	哈	_	PROPN	NNP	_	17	nmod	_	_
17	高速	_	NOUN	NN	_	14	dobj	_	_
18	後	_	ADP	IN	_	14	mark	_	_
19	到達	_	VERB	VV	_	0	root	_	_
20	通州	_	PROPN	NNP	_	23	nmod	_	_
21	武夷	_	PROPN	NNP	_	23	nmod	_	_
22	花園	_	NOUN	NN	_	23	nmod	_	_
23	小區	_	NOUN	NN	_	19	dobj	_	_
24	.	_	PUNCT	.	_	19	punct	_	_

~~~


