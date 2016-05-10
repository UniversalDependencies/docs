

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [acl]().

4212 nodes (3%) are attached to their parents as `acl:relcl`.

2431 instances of `acl:relcl` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.14838556505223.

The following 26 pairs of parts of speech are connected with `acl:relcl`: [zh-pos/VERB]()-[zh-pos/PART]() (1652; 39% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (1345; 32% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (741; 18% instances), [zh-pos/PART]()-[zh-pos/VERB]() (185; 4% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (134; 3% instances), [zh-pos/PROPN]()-[zh-pos/VERB]() (49; 1% instances), [zh-pos/NOUN]()-[zh-pos/PART]() (24; 1% instances), [zh-pos/PART]()-[zh-pos/ADJ]() (13; 0% instances), [zh-pos/PART]()-[zh-pos/PART]() (13; 0% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (12; 0% instances), [zh-pos/X]()-[zh-pos/VERB]() (9; 0% instances), [zh-pos/VERB]()-[zh-pos/VERB]() (6; 0% instances), [zh-pos/ADP]()-[zh-pos/PART]() (5; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADP]() (5; 0% instances), [zh-pos/PROPN]()-[zh-pos/ADJ]() (3; 0% instances), [zh-pos/PROPN]()-[zh-pos/NOUN]() (3; 0% instances), [zh-pos/PRON]()-[zh-pos/VERB]() (2; 0% instances), [zh-pos/PROPN]()-[zh-pos/PART]() (2; 0% instances), [zh-pos/VERB]()-[zh-pos/ADJ]() (2; 0% instances), [zh-pos/AUX]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/NOUN]()-[zh-pos/AUX]() (1; 0% instances), [zh-pos/NOUN]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/ADP]() (1; 0% instances), [zh-pos/X]()-[zh-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl:relcl	color:blue
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


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 9 acl:relcl	color:blue
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


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 acl:relcl	color:blue
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


