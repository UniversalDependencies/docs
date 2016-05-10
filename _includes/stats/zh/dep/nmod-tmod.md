

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [nmod]().

1609 nodes (1%) are attached to their parents as `nmod:tmod`.

1584 instances of `nmod:tmod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.55376009944065.

The following 18 pairs of parts of speech are connected with `nmod:tmod`: [zh-pos/VERB]()-[zh-pos/NOUN]() (1441; 90% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (40; 2% instances), [zh-pos/ADJ]()-[zh-pos/NOUN]() (37; 2% instances), [zh-pos/VERB]()-[zh-pos/DET]() (20; 1% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (12; 1% instances), [zh-pos/VERB]()-[zh-pos/PART]() (11; 1% instances), [zh-pos/NOUN]()-[zh-pos/NUM]() (7; 0% instances), [zh-pos/NUM]()-[zh-pos/NOUN]() (7; 0% instances), [zh-pos/VERB]()-[zh-pos/ADV]() (6; 0% instances), [zh-pos/VERB]()-[zh-pos/VERB]() (5; 0% instances), [zh-pos/ADP]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/PROPN]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/VERB]()-[zh-pos/PROPN]() (4; 0% instances), [zh-pos/VERB]()-[zh-pos/ADP]() (3; 0% instances), [zh-pos/VERB]()-[zh-pos/NUM]() (3; 0% instances), [zh-pos/ADV]()-[zh-pos/NOUN]() (2; 0% instances), [zh-pos/X]()-[zh-pos/NOUN]() (2; 0% instances), [zh-pos/PROPN]()-[zh-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nmod:tmod	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 nmod:tmod	color:blue
1	南京	_	PROPN	NNP	_	2	nmod	_	_
2	官話	_	NOUN	NN	_	9	nsubj	_	_
3	曾經	_	ADV	RB	_	9	advmod	_	_
4	長期	_	NOUN	NN	_	9	nmod:tmod	_	_
5	是	_	VERB	VC	_	9	cop	_	_
6	中國	_	PROPN	NNP	_	9	det	_	_
7	的	_	PART	DEC	Case=Gen	6	case:dec	_	_
8	官方	_	NOUN	NN	_	9	nmod	_	_
9	語言	_	NOUN	NN	_	0	root	_	_
10	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 nmod:tmod	color:blue
1	瑪麗娜	_	PROPN	NNP	_	2	nmod	_	_
2	公主	_	NOUN	NN	_	11	nsubj	_	_
3	生	_	VERB	VV	_	11	advcl	_	_
4	於	_	VERB	VV	_	3	mark	_	_
5	1906	_	NUM	CD	_	6	nummod	_	_
6	年	_	NOUN	NNB	_	3	dobj	_	_
7	,	_	PUNCT	,	_	11	punct	_	_
8	比	_	ADP	IN	_	10	case	_	_
9	喬治	_	PROPN	NNP	_	10	nmod	_	_
10	王子	_	NOUN	NN	_	11	nmod	_	_
11	年幼	_	ADJ	JJ	_	0	root	_	_
12	四	_	NUM	CD	_	13	nummod	_	_
13	歲	_	NOUN	NNB	_	11	nmod:tmod	_	_
14	.	_	PUNCT	.	_	11	punct	_	_

~~~


