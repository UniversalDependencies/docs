

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

1744 nodes (1%) are attached to their parents as `cc`.

1734 instances of `cc` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.3348623853211.

The following 16 pairs of parts of speech are connected with `cc`: [zh-pos/NOUN]()-[zh-pos/CONJ]() (964; 55% instances), [zh-pos/PART]()-[zh-pos/CONJ]() (235; 13% instances), [zh-pos/PROPN]()-[zh-pos/CONJ]() (223; 13% instances), [zh-pos/VERB]()-[zh-pos/CONJ]() (179; 10% instances), [zh-pos/ADJ]()-[zh-pos/CONJ]() (54; 3% instances), [zh-pos/NUM]()-[zh-pos/CONJ]() (43; 2% instances), [zh-pos/X]()-[zh-pos/CONJ]() (23; 1% instances), [zh-pos/PRON]()-[zh-pos/CONJ]() (12; 1% instances), [zh-pos/AUX]()-[zh-pos/CONJ]() (3; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADP]() (2; 0% instances), [zh-pos/ADP]()-[zh-pos/CONJ]() (1; 0% instances), [zh-pos/ADV]()-[zh-pos/CONJ]() (1; 0% instances), [zh-pos/PROPN]()-[zh-pos/ADP]() (1; 0% instances), [zh-pos/SYM]()-[zh-pos/CONJ]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/ADP]() (1; 0% instances), [zh-pos/X]()-[zh-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 22 cc	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
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


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 cc	color:blue
1	天帝	_	PROPN	NNP	_	2	nsubj	_	_
2	軍	_	PART	SFN	_	14	nsubj	_	_
3	得知	_	VERB	VV	_	14	acl	_	_
4	真相	_	NOUN	NN	_	3	dobj	_	_
5	後	_	ADP	IN	_	3	mark	_	_
6	,	_	PUNCT	,	_	14	punct	_	_
7	也	_	ADV	RB	_	14	mark	_	_
8	為	_	ADP	IN	_	13	case	_	_
9	法魯克	_	PROPN	NNP	_	13	det	_	_
10	與	_	CONJ	CC	_	9	cc	_	_
11	拳四郎	_	PROPN	NNP	_	9	conj	_	_
12	的	_	PART	DEC	Case=Gen	9	case:dec	_	_
13	對決	_	NOUN	NN	_	14	nmod	_	_
14	劃下	_	VERB	VV	_	0	root	_	_
15	休止	_	VERB	VV	_	16	case:suff	_	_
16	符	_	PART	SFN	_	14	dobj	_	_
17	.	_	PUNCT	.	_	14	punct	_	_

~~~


