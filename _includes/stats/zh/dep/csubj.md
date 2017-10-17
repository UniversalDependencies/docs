

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

341 nodes (0%) are attached to their parents as `csubj`.

340 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.43108504398827.

The following 23 pairs of parts of speech are connected with `csubj`: [zh-pos/VERB]()-[zh-pos/VERB]() (188; 55% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (45; 13% instances), [zh-pos/ADJ]()-[zh-pos/VERB]() (26; 8% instances), [zh-pos/VERB]()-[zh-pos/ADJ]() (23; 7% instances), [zh-pos/VERB]()-[zh-pos/NOUN]() (21; 6% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (10; 3% instances), [zh-pos/PROPN]()-[zh-pos/VERB]() (5; 1% instances), [zh-pos/NUM]()-[zh-pos/VERB]() (3; 1% instances), [zh-pos/ADP]()-[zh-pos/VERB]() (2; 1% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (2; 1% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (2; 1% instances), [zh-pos/PART]()-[zh-pos/VERB]() (2; 1% instances), [zh-pos/VERB]()-[zh-pos/PART]() (2; 1% instances), [zh-pos/ADJ]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/ADJ]()-[zh-pos/ADP]() (1; 0% instances), [zh-pos/ADJ]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/ADV]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/AUX]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/PRON]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/PRON]() (1; 0% instances), [zh-pos/X]()-[zh-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 csubj	color:blue
1	雅	雅	PROPN	NNP	_	2	case:suff	_	SpaceAfter=No
2	語	語	PART	SFN	_	6	nsubj	_	SpaceAfter=No
3	和	和	CCONJ	CC	_	5	cc	_	SpaceAfter=No
4	吳	吳	PROPN	NNP	_	5	case:suff	_	SpaceAfter=No
5	語	語	PART	SFN	_	2	conj	_	SpaceAfter=No
6	融合	融合	VERB	VV	_	9	csubj	_	SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	_	SpaceAfter=No
8	逐漸	逐漸	ADV	RB	_	9	advmod	_	SpaceAfter=No
9	形成	形成	VERB	VV	_	0	root	_	SpaceAfter=No
10	南方	南方	NOUN	NN	_	13	det	_	SpaceAfter=No
11	的	的	PART	DEC	Case=Gen	10	case:dec	_	SpaceAfter=No
12	江淮	江淮	PROPN	NNP	_	13	nmod	_	SpaceAfter=No
13	官話	官話	NOUN	NN	_	9	obj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	9	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 9 csubj	color:blue
1	現實	現實	NOUN	NN	_	14	advmod	_	SpaceAfter=No
2	中	中	ADP	IN	_	1	acl	_	SpaceAfter=No
3	,	,	PUNCT	,	_	14	punct	_	SpaceAfter=No
4	雄性	雄性	NOUN	NN	_	5	nmod	_	SpaceAfter=No
5	企鵝	企鵝	NOUN	NN	_	9	nsubj	_	SpaceAfter=No
6	孵化	孵化	VERB	VV	_	9	acl	_	SpaceAfter=No
7	並	並	ADV	RB	_	9	mark	_	SpaceAfter=No
8	協助	協助	VERB	VV	_	9	acl	_	SpaceAfter=No
9	撫養	撫養	VERB	VV	Voice=Cau	14	csubj	_	SpaceAfter=No
10	幼鳥	幼鳥	NOUN	NN	_	11	nsubj	_	SpaceAfter=No
11	成長	成長	VERB	VV	_	9	ccomp	_	SpaceAfter=No
12	是	是	AUX	VC	_	14	cop	_	SpaceAfter=No
13	其	其	PRON	PRP	Person=3	14	nmod	_	SpaceAfter=No
14	天性	天性	NOUN	NN	_	24	dep	_	SpaceAfter=No
15	,	,	PUNCT	,	_	24	punct	_	SpaceAfter=No
16	這	這	PRON	PRD	_	24	nsubj	_	SpaceAfter=No
17	在	在	ADP	IN	_	20	case	_	SpaceAfter=No
18	其他	其他	DET	DT	_	20	det	_	SpaceAfter=No
19	許多	許多	NUM	CD	NumType=Card	20	nummod	_	SpaceAfter=No
20	鳥類	鳥類	NOUN	NN	_	24	nmod	_	SpaceAfter=No
21	中	中	ADP	IN	_	20	acl	_	SpaceAfter=No
22	也	也	ADV	RB	_	24	mark	_	SpaceAfter=No
23	很	很	ADV	RB	_	24	advmod	_	SpaceAfter=No
24	常見	常見	ADJ	JJ	_	0	root	_	SpaceAfter=No
25	.	.	PUNCT	.	_	24	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 csubj	color:blue
1	直接	直接	ADV	RB	_	3	advmod	_	SpaceAfter=No
2	結晶	結晶	VERB	VV	_	3	acl	_	SpaceAfter=No
3	拆分	拆分	VERB	VV	_	6	csubj	_	SpaceAfter=No
4	的	的	PART	DEC	_	3	mark:relcl	_	SpaceAfter=No
5	方法	方法	NOUN	NN	_	6	nsubj	_	SpaceAfter=No
6	有	有	VERB	VV	_	15	dep	_	SpaceAfter=No
7	很大	很大	ADJ	JJ	_	10	amod	_	SpaceAfter=No
8	的	的	PART	DEC	_	7	mark:relcl	_	SpaceAfter=No
9	局限	局限	VERB	VV	_	10	case:suff	_	SpaceAfter=No
10	性	性	PART	SFN	_	6	obj	_	SpaceAfter=No
11	,	,	PUNCT	,	_	15	punct	_	SpaceAfter=No
12	操作	操作	VERB	VV	_	15	csubj	_	SpaceAfter=No
13	也	也	ADV	RB	_	15	mark	_	SpaceAfter=No
14	比較	比較	ADV	RB	_	15	advmod	_	SpaceAfter=No
15	繁瑣	繁瑣	ADJ	JJ	_	0	root	_	SpaceAfter=No
16	.	.	PUNCT	.	_	15	punct	_	SpaceAfter=No

~~~


