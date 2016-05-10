

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

2000 nodes (2%) are attached to their parents as `amod`.

1997 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1955.

The following 28 pairs of parts of speech are connected with `amod`: [zh-pos/NOUN]()-[zh-pos/ADJ]() (1481; 74% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (249; 12% instances), [zh-pos/PART]()-[zh-pos/ADJ]() (161; 8% instances), [zh-pos/PART]()-[zh-pos/VERB]() (41; 2% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (13; 1% instances), [zh-pos/PROPN]()-[zh-pos/ADJ]() (9; 0% instances), [zh-pos/NOUN]()-[zh-pos/PART]() (6; 0% instances), [zh-pos/NOUN]()-[zh-pos/NUM]() (5; 0% instances), [zh-pos/X]()-[zh-pos/ADJ]() (5; 0% instances), [zh-pos/PROPN]()-[zh-pos/VERB]() (3; 0% instances), [zh-pos/VERB]()-[zh-pos/ADV]() (3; 0% instances), [zh-pos/ADJ]()-[zh-pos/ADJ]() (2; 0% instances), [zh-pos/ADP]()-[zh-pos/VERB]() (2; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADP]() (2; 0% instances), [zh-pos/NOUN]()-[zh-pos/DET]() (2; 0% instances), [zh-pos/PRON]()-[zh-pos/ADJ]() (2; 0% instances), [zh-pos/VERB]()-[zh-pos/ADJ]() (2; 0% instances), [zh-pos/X]()-[zh-pos/VERB]() (2; 0% instances), [zh-pos/NOUN]()-[zh-pos/X]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/ADV]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/NUM]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/X]() (1; 0% instances), [zh-pos/PRON]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/PROPN]()-[zh-pos/DET]() (1; 0% instances), [zh-pos/PROPN]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 amod	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 amod	color:blue
1	所	_	ADV	RB	_	2	mark	_	_
2	謂	_	VERB	VV	_	5	amod	_	_
3	醫學	_	NOUN	NN	_	5	nmod	_	_
4	生物	_	NOUN	NN	_	5	nmod	_	_
5	化學	_	NOUN	NN	_	7	nsubj	_	_
6	大多	_	ADV	RB	_	7	advmod	_	_
7	是	_	VERB	VC	_	0	root	_	_
8	將	_	VERB	BB	Voice=Cau	20	aux:caus	_	_
9	生物	_	NOUN	NN	_	10	nmod	_	_
10	化學	_	NOUN	NN	_	19	nmod	_	_
11	中	_	ADP	IN	_	10	acl	_	_
12	與	_	ADP	IN	_	13	case	_	_
13	醫學	_	NOUN	NN	_	19	nmod	_	_
14	、	_	PUNCT	EC	_	13	punct	_	_
15	人體	_	NOUN	NN	_	16	nmod	_	_
16	功能	_	NOUN	NN	_	13	conj	_	_
17	較為	_	ADV	RB	_	18	advmod	_	_
18	相關	_	ADJ	JJ	_	19	amod	_	_
19	部分	_	NOUN	NN	_	20	dobj	_	_
20	整理	_	VERB	VV	_	23	acl	_	_
21	後	_	ADP	IN	_	20	mark	_	_
22	所	_	ADV	RB	_	23	mark	_	_
23	得	_	VERB	VV	_	7	xcomp	_	_
24	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 amod	color:blue
1	1960	_	NUM	CD	_	2	nummod	_	_
2	年代	_	NOUN	NNB	_	24	nmod:tmod	_	_
3	後	_	ADP	IN	_	2	acl	_	_
4	,	_	PUNCT	,	_	24	punct	_	_
5	隨	_	VERB	VV	_	24	acl	_	_
6	著	_	PART	AS	Aspect=Prog	5	case:aspect	_	_
7	殖民	_	VERB	VV	_	8	case:suff	_	_
8	地	_	PART	SFN	_	9	nsubj	_	_
9	獨立	_	ADJ	JJ	_	5	ccomp	_	_
10	,	_	PUNCT	,	_	24	punct	_	_
11	作	_	VERB	VV	_	22	acl:relcl	_	_
12	為	_	VERB	VC	_	11	mark	_	_
13	「	_	PUNCT	``	_	16	punct	_	_
14	單獨	_	ADJ	JJ	_	16	amod	_	_
15	關稅	_	NOUN	NN	_	16	case:suff	_	_
16	區	_	PART	SFN	_	11	dobj	_	_
17	」	_	PUNCT	''	_	16	punct	_	_
18	的	_	PART	DEC	Case=Rel	11	acl:relcl	_	_
19	非	_	VERB	VC	_	20	cop	_	_
20	主權	_	NOUN	NN	_	22	amod	_	_
21	政治	_	NOUN	NN	_	22	nmod	_	_
22	實體	_	NOUN	NN	_	24	nsubj	_	_
23	漸漸	_	ADV	RB	_	24	advmod	_	_
24	減少	_	VERB	VV	_	0	root	_	_
25	.	_	PUNCT	.	_	24	punct	_	_

~~~


