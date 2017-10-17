

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

7168 nodes (6%) are attached to their parents as `obj`.

6977 instances of `obj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.4951171875.

The following 28 pairs of parts of speech are connected with `obj`: [zh-pos/VERB]()-[zh-pos/NOUN]() (5179; 72% instances), [zh-pos/VERB]()-[zh-pos/PART]() (953; 13% instances), [zh-pos/VERB]()-[zh-pos/PROPN]() (717; 10% instances), [zh-pos/VERB]()-[zh-pos/PRON]() (115; 2% instances), [zh-pos/VERB]()-[zh-pos/NUM]() (53; 1% instances), [zh-pos/VERB]()-[zh-pos/X]() (49; 1% instances), [zh-pos/VERB]()-[zh-pos/VERB]() (39; 1% instances), [zh-pos/ADJ]()-[zh-pos/NOUN]() (12; 0% instances), [zh-pos/VERB]()-[zh-pos/ADJ]() (7; 0% instances), [zh-pos/VERB]()-[zh-pos/SYM]() (6; 0% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (5; 0% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (5; 0% instances), [zh-pos/ADJ]()-[zh-pos/PRON]() (4; 0% instances), [zh-pos/ADP]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/ADV]()-[zh-pos/NOUN]() (3; 0% instances), [zh-pos/NOUN]()-[zh-pos/PART]() (2; 0% instances), [zh-pos/ADJ]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/ADJ]()-[zh-pos/X]() (1; 0% instances), [zh-pos/ADV]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/ADV]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/NOUN]()-[zh-pos/NUM]() (1; 0% instances), [zh-pos/NOUN]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/ADP]() (1; 0% instances), [zh-pos/X]()-[zh-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 obj	color:blue
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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 obj	color:blue
1	1355	1355	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No
2	年	年	NOUN	NNB	_	12	nmod:tmod	_	SpaceAfter=No
3	,	,	PUNCT	,	_	12	punct	_	SpaceAfter=No
4	勃蘭登堡	勃蘭登堡	PROPN	NNP	_	12	nsubj:pass	_	SpaceAfter=No
5	被	被	VERB	BB	Voice=Pass	12	aux:pass	_	SpaceAfter=No
6	神聖	神聖	ADJ	JJ	_	8	amod	_	SpaceAfter=No
7	羅馬	羅馬	PROPN	NNP	_	8	nmod	_	SpaceAfter=No
8	帝國	帝國	NOUN	NN	_	9	nmod	_	SpaceAfter=No
9	皇帝	皇帝	NOUN	NN	_	11	appos	_	SpaceAfter=No
10	查理	查理	PROPN	NNP	_	11	nmod	_	SpaceAfter=No
11	四世	四世	PROPN	NNP	_	12	nsubj	_	SpaceAfter=No
12	升	升	VERB	VV	_	0	root	_	SpaceAfter=No
13	為	為	VERB	VC	_	12	mark	_	SpaceAfter=No
14	選侯	選侯	VERB	VV	_	15	case:suff	_	SpaceAfter=No
15	國	國	PART	SFN	_	12	obj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obj	color:blue
1	五	五	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No
2	月	月	NOUN	NNB	_	4	clf	_	SpaceAfter=No
3	二十一	二十一	NUM	CD	NumType=Card	4	nummod	_	SpaceAfter=No
4	日	日	NOUN	NNB	_	8	nmod:tmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	_	SpaceAfter=No
6	努爾哈赤	努爾哈赤	PROPN	NNP	_	8	nsubj	_	SpaceAfter=No
7	出城	出城	VERB	VV	_	8	acl	_	SpaceAfter=No
8	迎接	迎接	VERB	VV	_	0	root	_	SpaceAfter=No
9	前來	前來	VERB	VV	_	15	acl:relcl	_	SpaceAfter=No
10	瀋陽	瀋陽	PROPN	NNP	_	9	obj	_	SpaceAfter=No
11	的	的	PART	DEC	_	9	mark:relcl	_	SpaceAfter=No
12	科爾沁	科爾沁	PROPN	NNP	_	13	case:suff	_	SpaceAfter=No
13	部	部	PART	SFN	_	15	nmod	_	SpaceAfter=No
14	奧巴	奧巴	PROPN	NNP	_	15	nmod	_	SpaceAfter=No
15	貝勒	貝勒	NOUN	NN	_	8	obj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	8	punct	_	SpaceAfter=No

~~~


