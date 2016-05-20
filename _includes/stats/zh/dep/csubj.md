

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

377 nodes (0%) are attached to their parents as `csubj`.

376 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.52785145888594.

The following 23 pairs of parts of speech are connected with `csubj`: [zh-pos/VERB]()-[zh-pos/VERB]() (210; 56% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (54; 14% instances), [zh-pos/ADJ]()-[zh-pos/VERB]() (27; 7% instances), [zh-pos/VERB]()-[zh-pos/ADJ]() (25; 7% instances), [zh-pos/VERB]()-[zh-pos/NOUN]() (22; 6% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (11; 3% instances), [zh-pos/PROPN]()-[zh-pos/VERB]() (5; 1% instances), [zh-pos/NUM]()-[zh-pos/VERB]() (3; 1% instances), [zh-pos/ADP]()-[zh-pos/VERB]() (2; 1% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (2; 1% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (2; 1% instances), [zh-pos/PART]()-[zh-pos/VERB]() (2; 1% instances), [zh-pos/VERB]()-[zh-pos/PART]() (2; 1% instances), [zh-pos/ADJ]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/ADJ]()-[zh-pos/ADP]() (1; 0% instances), [zh-pos/ADJ]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/ADV]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/AUX]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/PRON]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/PRON]() (1; 0% instances), [zh-pos/X]()-[zh-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 csubj	color:blue
1	雅	_	PROPN	NNP	_	2	case:suff	_	_
2	語	_	PART	SFN	_	6	nsubj	_	_
3	和	_	CONJ	CC	_	2	cc	_	_
4	吳	_	PROPN	NNP	_	5	case:suff	_	_
5	語	_	PART	SFN	_	2	conj	_	_
6	融合	_	VERB	VV	_	9	csubj	_	_
7	,	_	PUNCT	,	_	9	punct	_	_
8	逐漸	_	ADV	RB	_	9	advmod	_	_
9	形成	_	VERB	VV	_	0	root	_	_
10	南方	_	NOUN	NN	_	13	det	_	_
11	的	_	PART	DEC	Case=Gen	10	case:dec	_	_
12	江淮	_	PROPN	NNP	_	13	nmod	_	_
13	官話	_	NOUN	NN	_	9	dobj	_	_
14	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 21 csubj	color:blue
1	換	_	VERB	VV	_	4	acl	_	_
2	句	_	NOUN	NNB	_	3	nmod	_	_
3	話	_	NOUN	NN	_	1	dobj	_	_
4	說	_	VERB	VV	_	0	root	_	_
5	,	_	PUNCT	,	_	4	punct	_	_
6	如果	_	ADP	IN	_	12	case	_	_
7	每個	_	DET	DT	_	10	det	_	_
8	標註	_	VERB	VV	_	10	acl:relcl	_	_
9	的	_	PART	DEC	Case=Rel	8	acl:relcl	_	_
10	點	_	NOUN	NN	_	12	nsubj	_	_
11	都	_	ADV	RB	_	12	mark	_	_
12	在	_	VERB	VV	_	26	ccomp	_	_
13	100	_	NUM	CD	_	14	nummod	_	_
14	米	_	NOUN	NNB	_	16	det	_	_
15	的	_	PART	DEC	Case=Gen	14	case:dec	_	_
16	高度	_	NOUN	NN	_	12	dobj	_	_
17	,	_	PUNCT	,	_	26	punct	_	_
18	這	_	DET	DT	_	19	det	_	_
19	條	_	NOUN	NNB	_	20	nmod	_	_
20	線	_	NOUN	NN	_	21	nsubj	_	_
21	代表	_	VERB	VV	_	26	csubj	_	_
22	的	_	PART	DEC	Case=Rel	21	acl:relcl	_	_
23	就是	_	VERB	VC	_	26	cop	_	_
24	100	_	NUM	CD	_	25	nummod	_	_
25	米	_	NOUN	NNB	_	26	nmod	_	_
26	海拔	_	NOUN	NN	_	4	ccomp	_	_
27	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 csubj	color:blue
1	直接	_	ADV	RB	_	3	advmod	_	_
2	結晶	_	VERB	VV	_	3	acl	_	_
3	拆分	_	VERB	VV	_	6	csubj	_	_
4	的	_	PART	DEC	Case=Rel	3	acl:relcl	_	_
5	方法	_	NOUN	NN	_	6	nsubj	_	_
6	有	_	VERB	VV	_	15	dep	_	_
7	很大	_	ADJ	JJ	_	10	amod	_	_
8	的	_	PART	DEC	Case=Rel	7	acl:relcl	_	_
9	局限	_	VERB	VV	_	10	case:suff	_	_
10	性	_	PART	SFN	_	6	dobj	_	_
11	,	_	PUNCT	,	_	15	punct	_	_
12	操作	_	VERB	VV	_	15	csubj	_	_
13	也	_	ADV	RB	_	15	mark	_	_
14	比較	_	ADV	RB	_	15	advmod	_	_
15	繁瑣	_	ADJ	JJ	_	0	root	_	_
16	.	_	PUNCT	.	_	15	punct	_	_

~~~


