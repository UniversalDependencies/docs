

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

1761 nodes (1%) are attached to their parents as `xcomp`.

1381 instances of `xcomp` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.50880181714935.

The following 23 pairs of parts of speech are connected with `xcomp`: [zh-pos/VERB]()-[zh-pos/VERB]() (1557; 88% instances), [zh-pos/VERB]()-[zh-pos/NOUN]() (43; 2% instances), [zh-pos/VERB]()-[zh-pos/ADJ]() (42; 2% instances), [zh-pos/VERB]()-[zh-pos/ADP]() (34; 2% instances), [zh-pos/ADP]()-[zh-pos/VERB]() (19; 1% instances), [zh-pos/ADJ]()-[zh-pos/VERB]() (14; 1% instances), [zh-pos/VERB]()-[zh-pos/PART]() (10; 1% instances), [zh-pos/ADV]()-[zh-pos/VERB]() (9; 1% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (8; 0% instances), [zh-pos/VERB]()-[zh-pos/NUM]() (4; 0% instances), [zh-pos/ADP]()-[zh-pos/NOUN]() (3; 0% instances), [zh-pos/PART]()-[zh-pos/VERB]() (3; 0% instances), [zh-pos/VERB]()-[zh-pos/AUX]() (3; 0% instances), [zh-pos/ADJ]()-[zh-pos/ADJ]() (2; 0% instances), [zh-pos/VERB]()-[zh-pos/PRON]() (2; 0% instances), [zh-pos/ADJ]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/ADV]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/AUX]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/ADV]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 xcomp	color:blue
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
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 19 xcomp	color:blue
1	警方	_	NOUN	NN	_	11	nsubj	_	_
2	前往	_	VERB	VV	_	5	acl	_	_
3	工作	_	NOUN	NN	_	4	case:suff	_	_
4	坊	_	PART	SFN	_	2	dobj	_	_
5	逮捕	_	VERB	VV	_	8	acl:relcl	_	_
6	席勒	_	PROPN	NNP	_	5	dobj	_	_
7	的	_	PART	DEC	Case=Rel	5	acl:relcl	_	_
8	同時	_	NOUN	NN	_	11	nmod:tmod	_	_
9	,	_	PUNCT	,	_	11	punct	_	_
10	也	_	ADV	RB	_	11	mark	_	_
11	扣押	_	VERB	VV	_	0	root	_	_
12	了	_	PART	AS	Aspect=Perf	11	case:aspect	_	_
13	一百多	_	NUM	CD	_	14	nummod	_	_
14	張	_	NOUN	NNB	_	21	nmod	_	_
15	被	_	VERB	BB	Voice=Pass	16	auxpass	_	_
16	認為	_	VERB	VV	_	21	acl:relcl	_	_
17	是	_	VERB	VC	_	19	cop	_	_
18	色情	_	ADJ	JJ	_	19	amod	_	_
19	物品	_	NOUN	NN	_	16	xcomp	_	_
20	的	_	PART	DEC	Case=Rel	16	acl:relcl	_	_
21	畫作	_	NOUN	NN	_	11	dobj	_	_
22	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 22 xcomp	color:blue
1	北極	_	PROPN	NNP	_	3	nmod	_	_
2	土著	_	NOUN	NN	_	3	nmod	_	_
3	民族	_	NOUN	NN	_	8	nsubj	_	_
4	一直	_	ADV	RB	_	8	advmod	_	_
5	與	_	ADP	IN	_	6	case	_	_
6	外界	_	NOUN	NN	_	8	nmod	_	_
7	接觸	_	VERB	VV	_	8	cop	_	_
8	甚少	_	ADJ	JJ	_	19	dep	_	_
9	,	_	PUNCT	,	_	19	punct	_	_
10	直到	_	ADP	IN	_	11	case	_	_
11	現代	_	NOUN	NN	_	19	nmod	_	_
12	,	_	PUNCT	,	_	19	punct	_	_
13	與	_	ADP	IN	_	17	det	_	_
14	其他	_	DET	DT	_	15	det	_	_
15	地區	_	NOUN	NN	_	13	nmod	_	_
16	的	_	PART	DEC	Case=Gen	13	case:dec	_	_
17	交流	_	NOUN	NN	_	19	nsubj	_	_
18	才	_	ADV	RB	_	19	mark	_	_
19	開始	_	VERB	VV	_	0	root	_	_
20	變	_	VERB	VV	_	22	cop	_	_
21	得	_	PART	DEV	Case=Comp	22	mark	_	_
22	頻繁	_	ADJ	JJ	_	19	xcomp	_	_
23	.	_	PUNCT	.	_	19	punct	_	_

~~~


