

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

4471 nodes (4%) are attached to their parents as `det`.

4468 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.74793111160814.

The following 41 pairs of parts of speech are connected with `det`: [zh-pos/NOUN]()-[zh-pos/NOUN]() (1468; 33% instances), [zh-pos/NOUN]()-[zh-pos/DET]() (1091; 24% instances), [zh-pos/NOUN]()-[zh-pos/PROPN]() (436; 10% instances), [zh-pos/NOUN]()-[zh-pos/PART]() (359; 8% instances), [zh-pos/NOUN]()-[zh-pos/PRON]() (249; 6% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (180; 4% instances), [zh-pos/NOUN]()-[zh-pos/ADP]() (153; 3% instances), [zh-pos/NUM]()-[zh-pos/NOUN]() (86; 2% instances), [zh-pos/PART]()-[zh-pos/DET]() (79; 2% instances), [zh-pos/PART]()-[zh-pos/PROPN]() (62; 1% instances), [zh-pos/PART]()-[zh-pos/PART]() (51; 1% instances), [zh-pos/PROPN]()-[zh-pos/NOUN]() (32; 1% instances), [zh-pos/NOUN]()-[zh-pos/NUM]() (31; 1% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (24; 1% instances), [zh-pos/NOUN]()-[zh-pos/X]() (24; 1% instances), [zh-pos/PART]()-[zh-pos/PRON]() (19; 0% instances), [zh-pos/PROPN]()-[zh-pos/DET]() (17; 0% instances), [zh-pos/PROPN]()-[zh-pos/PROPN]() (17; 0% instances), [zh-pos/NUM]()-[zh-pos/DET]() (15; 0% instances), [zh-pos/NUM]()-[zh-pos/PART]() (12; 0% instances), [zh-pos/X]()-[zh-pos/NOUN]() (10; 0% instances), [zh-pos/PART]()-[zh-pos/NUM]() (8; 0% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (6; 0% instances), [zh-pos/PART]()-[zh-pos/ADP]() (6; 0% instances), [zh-pos/PROPN]()-[zh-pos/PART]() (6; 0% instances), [zh-pos/PART]()-[zh-pos/ADJ]() (5; 0% instances), [zh-pos/VERB]()-[zh-pos/NOUN]() (5; 0% instances), [zh-pos/PART]()-[zh-pos/X]() (4; 0% instances), [zh-pos/VERB]()-[zh-pos/DET]() (3; 0% instances), [zh-pos/X]()-[zh-pos/ADJ]() (2; 0% instances), [zh-pos/ADJ]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/ADP]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/ADP]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/PROPN]()-[zh-pos/PRON]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/ADP]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/X]()-[zh-pos/DET]() (1; 0% instances), [zh-pos/X]()-[zh-pos/NUM]() (1; 0% instances), [zh-pos/X]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/X]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/X]()-[zh-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 det	color:blue
1	大	_	ADV	RB	_	2	advmod	_	_
2	多數	_	ADJ	JJ	_	6	det	_	_
3	的	_	PART	DEC	Case=Gen	2	case:dec	_	_
4	加長	_	VERB	VV	_	5	case:suff	_	_
5	型	_	PART	SFN	_	6	nmod	_	_
6	禮車	_	NOUN	NN	_	11	nsubj	_	_
7	則是	_	VERB	VC	_	11	cop	_	_
8	租車	_	NOUN	NN	_	9	nmod	_	_
9	公司	_	NOUN	NN	_	11	det	_	_
10	的	_	PART	DEC	Case=Gen	9	case:dec	_	_
11	財產	_	NOUN	NN	_	0	root	_	_
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 det	color:blue
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


