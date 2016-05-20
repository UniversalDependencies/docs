

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

2176 nodes (2%) are attached to their parents as `ccomp`.

1853 instances of `ccomp` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.02573529411765.

The following 28 pairs of parts of speech are connected with `ccomp`: [zh-pos/VERB]()-[zh-pos/VERB]() (1670; 77% instances), [zh-pos/VERB]()-[zh-pos/NOUN]() (192; 9% instances), [zh-pos/VERB]()-[zh-pos/ADJ]() (162; 7% instances), [zh-pos/ADP]()-[zh-pos/VERB]() (35; 2% instances), [zh-pos/VERB]()-[zh-pos/PART]() (33; 2% instances), [zh-pos/ADJ]()-[zh-pos/VERB]() (15; 1% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (15; 1% instances), [zh-pos/VERB]()-[zh-pos/PROPN]() (11; 1% instances), [zh-pos/ADV]()-[zh-pos/VERB]() (6; 0% instances), [zh-pos/VERB]()-[zh-pos/NUM]() (5; 0% instances), [zh-pos/ADJ]()-[zh-pos/ADJ]() (4; 0% instances), [zh-pos/ADJ]()-[zh-pos/NOUN]() (3; 0% instances), [zh-pos/ADP]()-[zh-pos/NOUN]() (3; 0% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (3; 0% instances), [zh-pos/PART]()-[zh-pos/VERB]() (3; 0% instances), [zh-pos/VERB]()-[zh-pos/ADP]() (2; 0% instances), [zh-pos/VERB]()-[zh-pos/ADV]() (2; 0% instances), [zh-pos/VERB]()-[zh-pos/AUX]() (2; 0% instances), [zh-pos/ADP]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/ADV]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/ADV]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/PRON]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/PROPN]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/PUNCT]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/PUNCT]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 ccomp	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	朝鮮	_	PROPN	NNP	_	12	nsubj	_	_
2	雖然	_	ADP	IN	_	3	case	_	_
3	認為	_	VERB	VV	_	12	xcomp	_	_
4	渤海	_	PROPN	NNP	_	5	case:suff	_	_
5	國	_	PART	SFN	_	8	nsubj	_	_
6	是	_	VERB	VC	_	8	cop	_	_
7	本國	_	NOUN	NN	_	8	nmod	_	_
8	歷史	_	NOUN	NN	_	3	ccomp	_	_
9	,	_	PUNCT	,	_	12	punct	_	_
10	但	_	ADV	RB	_	12	mark	_	_
11	不	_	ADV	RB	_	12	neg	_	_
12	使用	_	VERB	VV	_	0	root	_	_
13	「	_	PUNCT	``	_	15	punct	_	_
14	南北國	_	NOUN	NN	_	15	nmod	_	_
15	時代	_	NOUN	NN	_	12	dobj	_	_
16	」	_	PUNCT	''	_	15	punct	_	_
17	這	_	DET	DT	_	18	det	_	_
18	個	_	NOUN	NNB	_	19	nmod	_	_
19	詞匯	_	NOUN	NN	_	15	appos	_	_
20	.	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 21 ccomp	color:blue
1	當	_	ADP	IN	_	6	case	_	_
2	《	_	PUNCT	(	_	3	punct	_	_
3	Game	_	X	FW	_	6	nsubj	_	_
4	Informer	_	X	FW	_	3	foreign	_	_
5	》	_	PUNCT	)	_	3	punct	_	_
6	提到	_	VERB	VV	_	15	ccomp	_	_
7	遊戲	_	NOUN	NN	_	8	nsubj	_	_
8	在	_	VERB	VV	_	12	acl:relcl	_	_
9	日本	_	PROPN	NNP	_	8	dobj	_	_
10	的	_	PART	DEC	Case=Rel	8	acl:relcl	_	_
11	知名	_	ADJ	JJ	_	12	case:suff	_	_
12	度	_	PART	SFN	_	6	dobj	_	_
13	時	_	ADP	IN	_	6	mark	_	_
14	甚至	_	ADV	RB	_	15	mark	_	_
15	說	_	VERB	VV	_	0	root	_	_
16	「	_	PUNCT	``	_	19	punct	_	_
17	四百萬	_	NUM	CD	_	19	nummod	_	_
18	日本	_	PROPN	NNP	_	19	case:suff	_	_
19	人	_	PART	SFN	_	21	nsubj	_	_
20	可能	_	AUX	MD	_	21	aux	_	_
21	錯	_	ADJ	JJ	_	15	ccomp	_	_
22	了	_	X	UH	_	21	discourse	_	_
23	」	_	PUNCT	''	_	21	punct	_	_
24	.	_	PUNCT	.	_	15	punct	_	_

~~~


