

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

7943 nodes (6%) are attached to their parents as `dobj`.

7727 instances of `dobj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.49187964245247.

The following 31 pairs of parts of speech are connected with `dobj`: [zh-pos/VERB]()-[zh-pos/NOUN]() (5721; 72% instances), [zh-pos/VERB]()-[zh-pos/PART]() (1074; 14% instances), [zh-pos/VERB]()-[zh-pos/PROPN]() (798; 10% instances), [zh-pos/VERB]()-[zh-pos/PRON]() (120; 2% instances), [zh-pos/VERB]()-[zh-pos/NUM]() (60; 1% instances), [zh-pos/VERB]()-[zh-pos/X]() (55; 1% instances), [zh-pos/VERB]()-[zh-pos/VERB]() (44; 1% instances), [zh-pos/ADJ]()-[zh-pos/NOUN]() (14; 0% instances), [zh-pos/VERB]()-[zh-pos/ADJ]() (7; 0% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (6; 0% instances), [zh-pos/VERB]()-[zh-pos/SYM]() (6; 0% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (5; 0% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (5; 0% instances), [zh-pos/ADJ]()-[zh-pos/PRON]() (4; 0% instances), [zh-pos/ADP]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/ADV]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/NOUN]()-[zh-pos/PART]() (2; 0% instances), [zh-pos/ADJ]()-[zh-pos/NUM]() (1; 0% instances), [zh-pos/ADJ]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/ADJ]()-[zh-pos/X]() (1; 0% instances), [zh-pos/ADP]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/ADV]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/ADV]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/NOUN]()-[zh-pos/NUM]() (1; 0% instances), [zh-pos/NOUN]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/PRON]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/ADP]() (1; 0% instances), [zh-pos/X]()-[zh-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 dobj	color:blue
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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 dobj	color:blue
1	1355	_	NUM	CD	_	2	nummod	_	_
2	年	_	NOUN	NNB	_	12	nmod:tmod	_	_
3	,	_	PUNCT	,	_	12	punct	_	_
4	勃蘭登堡	_	PROPN	NNP	_	12	nsubjpass	_	_
5	被	_	VERB	BB	Voice=Pass	12	auxpass	_	_
6	神聖	_	ADJ	JJ	_	8	amod	_	_
7	羅馬	_	PROPN	NNP	_	8	nmod	_	_
8	帝國	_	NOUN	NN	_	9	nmod	_	_
9	皇帝	_	NOUN	NN	_	11	appos	_	_
10	查理	_	PROPN	NNP	_	11	nmod	_	_
11	四世	_	PROPN	NNP	_	12	nsubj	_	_
12	升	_	VERB	VV	_	0	root	_	_
13	為	_	VERB	VC	_	12	mark	_	_
14	選侯	_	VERB	VV	_	15	case:suff	_	_
15	國	_	PART	SFN	_	12	dobj	_	_
16	.	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 dobj	color:blue
1	五	_	NUM	CD	_	2	nummod	_	_
2	月	_	NOUN	NNB	_	4	nmod	_	_
3	二十一	_	NUM	CD	_	4	nummod	_	_
4	日	_	NOUN	NNB	_	8	nmod:tmod	_	_
5	,	_	PUNCT	,	_	8	punct	_	_
6	努爾哈赤	_	PROPN	NNP	_	8	nsubj	_	_
7	出城	_	VERB	VV	_	8	acl	_	_
8	迎接	_	VERB	VV	_	0	root	_	_
9	前來	_	VERB	VV	_	15	acl:relcl	_	_
10	瀋陽	_	PROPN	NNP	_	9	dobj	_	_
11	的	_	PART	DEC	Case=Rel	9	acl:relcl	_	_
12	科爾沁	_	PROPN	NNP	_	13	case:suff	_	_
13	部	_	PART	SFN	_	15	nmod	_	_
14	奧巴	_	PROPN	NNP	_	15	nmod	_	_
15	貝勒	_	NOUN	NN	_	8	dobj	_	_
16	.	_	PUNCT	.	_	8	punct	_	_

~~~


