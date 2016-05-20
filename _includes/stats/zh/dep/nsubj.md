

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

9429 nodes (8%) are attached to their parents as `nsubj`.

9416 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.08876869233217.

The following 49 pairs of parts of speech are connected with `nsubj`: [zh-pos/VERB]()-[zh-pos/NOUN]() (3991; 42% instances), [zh-pos/VERB]()-[zh-pos/PROPN]() (1529; 16% instances), [zh-pos/VERB]()-[zh-pos/PART]() (984; 10% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (730; 8% instances), [zh-pos/VERB]()-[zh-pos/PRON]() (725; 8% instances), [zh-pos/ADJ]()-[zh-pos/NOUN]() (474; 5% instances), [zh-pos/NOUN]()-[zh-pos/PART]() (154; 2% instances), [zh-pos/NOUN]()-[zh-pos/PROPN]() (127; 1% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (93; 1% instances), [zh-pos/NOUN]()-[zh-pos/PRON]() (77; 1% instances), [zh-pos/VERB]()-[zh-pos/X]() (70; 1% instances), [zh-pos/NUM]()-[zh-pos/NOUN]() (61; 1% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (51; 1% instances), [zh-pos/PART]()-[zh-pos/PART]() (47; 0% instances), [zh-pos/PROPN]()-[zh-pos/NOUN]() (38; 0% instances), [zh-pos/PART]()-[zh-pos/PROPN]() (31; 0% instances), [zh-pos/ADJ]()-[zh-pos/PRON]() (30; 0% instances), [zh-pos/ADJ]()-[zh-pos/PROPN]() (28; 0% instances), [zh-pos/VERB]()-[zh-pos/DET]() (20; 0% instances), [zh-pos/PART]()-[zh-pos/PRON]() (18; 0% instances), [zh-pos/NUM]()-[zh-pos/PART]() (16; 0% instances), [zh-pos/VERB]()-[zh-pos/NUM]() (16; 0% instances), [zh-pos/VERB]()-[zh-pos/VERB]() (13; 0% instances), [zh-pos/NOUN]()-[zh-pos/NUM]() (12; 0% instances), [zh-pos/X]()-[zh-pos/NOUN]() (12; 0% instances), [zh-pos/NUM]()-[zh-pos/PRON]() (11; 0% instances), [zh-pos/NUM]()-[zh-pos/PROPN]() (8; 0% instances), [zh-pos/PROPN]()-[zh-pos/PART]() (8; 0% instances), [zh-pos/NOUN]()-[zh-pos/DET]() (7; 0% instances), [zh-pos/ADP]()-[zh-pos/NOUN]() (6; 0% instances), [zh-pos/ADV]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/PART]()-[zh-pos/VERB]() (4; 0% instances), [zh-pos/PART]()-[zh-pos/X]() (4; 0% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (3; 0% instances), [zh-pos/NOUN]()-[zh-pos/X]() (3; 0% instances), [zh-pos/PART]()-[zh-pos/NUM]() (3; 0% instances), [zh-pos/PROPN]()-[zh-pos/PRON]() (3; 0% instances), [zh-pos/X]()-[zh-pos/PART]() (3; 0% instances), [zh-pos/ADJ]()-[zh-pos/ADJ]() (2; 0% instances), [zh-pos/ADJ]()-[zh-pos/X]() (2; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (2; 0% instances), [zh-pos/PROPN]()-[zh-pos/PROPN]() (2; 0% instances), [zh-pos/ADJ]()-[zh-pos/NUM]() (1; 0% instances), [zh-pos/ADV]()-[zh-pos/PRON]() (1; 0% instances), [zh-pos/AUX]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/X]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/PUNCT]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/SYM]() (1; 0% instances), [zh-pos/X]()-[zh-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 nsubj	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nsubj	color:blue
1	數百萬	_	NUM	CD	_	4	det	_	_
2	的	_	PART	DEC	Case=Gen	1	case:dec	_	_
3	巧克力	_	NOUN	NN	_	4	case:suff	_	_
4	棒	_	PART	SFN	_	6	nsubjpass	_	_
5	被	_	VERB	BB	Voice=Pass	6	auxpass	_	_
6	撤下	_	VERB	VV	_	18	dep	_	_
7	櫃檯	_	NOUN	NN	_	6	dobj	_	_
8	,	_	PUNCT	,	_	18	punct	_	_
9	而	_	ADV	RB	_	12	mark	_	_
10	瑪氏	_	PROPN	NNP	_	12	nsubj	_	_
11	則	_	ADV	RB	_	12	mark	_	_
12	中斷	_	VERB	VV	_	18	dep	_	_
13	了	_	PART	AS	Aspect=Perf	12	case:aspect	_	_
14	生產	_	NOUN	NN	_	12	dobj	_	_
15	,	_	PUNCT	,	_	18	punct	_	_
16	公司	_	NOUN	NN	_	17	nmod	_	_
17	損失	_	NOUN	NN	_	18	nsubj	_	_
18	達	_	VERB	VV	_	0	root	_	_
19	四百五十萬	_	NUM	CD	_	21	nummod	_	_
20	美	_	PROPN	NNP	_	21	nmod	_	_
21	元	_	NOUN	NNB	_	18	dobj	_	_
22	.	_	PUNCT	.	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 nsubj	color:blue
1	隨後	_	ADV	RB	_	8	advmod	_	_
2	愛斯基摩	_	PROPN	NNP	_	3	case:suff	_	_
3	人	_	PART	SFN	_	8	nsubj	_	_
4	和	_	CONJ	CC	_	3	cc	_	_
5	維京	_	PROPN	NNP	_	6	case:suff	_	_
6	人	_	PART	SFN	_	3	conj	_	_
7	相繼	_	ADV	RB	_	8	advmod	_	_
8	定居	_	VERB	VV	_	0	root	_	_
9	於	_	ADP	IN	_	10	case	_	_
10	此	_	PRON	PRD	_	8	nmod	_	_
11	.	_	PUNCT	.	_	8	punct	_	_

~~~


