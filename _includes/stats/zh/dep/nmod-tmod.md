

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [nmod]().

1449 nodes (1%) are attached to their parents as `nmod:tmod`.

1432 instances of `nmod:tmod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.71566597653554.

The following 18 pairs of parts of speech are connected with `nmod:tmod`: [zh-pos/VERB]()-[zh-pos/NOUN]() (1299; 90% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (38; 3% instances), [zh-pos/ADJ]()-[zh-pos/NOUN]() (34; 2% instances), [zh-pos/VERB]()-[zh-pos/DET]() (19; 1% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (10; 1% instances), [zh-pos/VERB]()-[zh-pos/PART]() (8; 1% instances), [zh-pos/NOUN]()-[zh-pos/NUM]() (6; 0% instances), [zh-pos/NUM]()-[zh-pos/NOUN]() (5; 0% instances), [zh-pos/ADP]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/PROPN]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/VERB]()-[zh-pos/ADV]() (4; 0% instances), [zh-pos/VERB]()-[zh-pos/PROPN]() (4; 0% instances), [zh-pos/VERB]()-[zh-pos/VERB]() (4; 0% instances), [zh-pos/VERB]()-[zh-pos/ADP]() (3; 0% instances), [zh-pos/VERB]()-[zh-pos/NUM]() (3; 0% instances), [zh-pos/ADV]()-[zh-pos/NOUN]() (2; 0% instances), [zh-pos/PROPN]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/X]()-[zh-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nmod:tmod	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 nmod:tmod	color:blue
1	南京	南京	PROPN	NNP	_	2	nmod	_	SpaceAfter=No
2	官話	官話	NOUN	NN	_	9	nsubj	_	SpaceAfter=No
3	曾經	曾經	ADV	RB	_	9	advmod	_	SpaceAfter=No
4	長期	長期	NOUN	NN	_	9	nmod:tmod	_	SpaceAfter=No
5	是	是	AUX	VC	_	9	cop	_	SpaceAfter=No
6	中國	中國	PROPN	NNP	_	9	det	_	SpaceAfter=No
7	的	的	PART	DEC	Case=Gen	6	case:dec	_	SpaceAfter=No
8	官方	官方	NOUN	NN	_	9	nmod	_	SpaceAfter=No
9	語言	語言	NOUN	NN	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 nmod:tmod	color:blue
1	瑪麗娜	瑪麗娜	PROPN	NNP	_	2	nmod	_	SpaceAfter=No
2	公主	公主	NOUN	NN	_	11	nsubj	_	SpaceAfter=No
3	生	生	VERB	VV	_	11	advcl	_	SpaceAfter=No
4	於	於	VERB	VV	_	3	mark	_	SpaceAfter=No
5	1906	1906	NUM	CD	NumType=Card	6	nummod	_	SpaceAfter=No
6	年	年	NOUN	NNB	_	3	obj	_	SpaceAfter=No
7	,	,	PUNCT	,	_	11	punct	_	SpaceAfter=No
8	比	比	ADP	IN	_	10	case	_	SpaceAfter=No
9	喬治	喬治	PROPN	NNP	_	10	nmod	_	SpaceAfter=No
10	王子	王子	NOUN	NN	_	11	nmod	_	SpaceAfter=No
11	年幼	年幼	ADJ	JJ	_	0	root	_	SpaceAfter=No
12	四	四	NUM	CD	NumType=Card	13	nummod	_	SpaceAfter=No
13	歲	歲	NOUN	NNB	_	11	nmod:tmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	11	punct	_	SpaceAfter=No

~~~


