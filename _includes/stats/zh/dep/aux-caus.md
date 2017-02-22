

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [aux]().
There are also 1 other language-specific subtypes of `aux`: [aux:pass]().

176 nodes (0%) are attached to their parents as `aux:caus`.

176 instances of `aux:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.375.

The following 4 pairs of parts of speech are connected with `aux:caus`: [zh-pos/VERB]()-[zh-pos/VERB]() (173; 98% instances), [zh-pos/ADJ]()-[zh-pos/VERB]() (1; 1% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (1; 1% instances), [zh-pos/PART]()-[zh-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 16 aux:caus	color:blue
1	而	而	ADV	RB	_	20	mark	_	SpaceAfter=No
2	解藥	解藥	NOUN	NN	_	4	det	_	SpaceAfter=No
3	的	的	PART	DEC	Case=Gen	2	case:dec	_	SpaceAfter=No
4	出現	出現	NOUN	NN	_	20	nsubj	_	SpaceAfter=No
5	也	也	ADV	RB	_	6	mark	_	SpaceAfter=No
6	使得	使得	VERB	VV	Voice=Cau	20	acl	_	SpaceAfter=No
7	他們	他	PRON	PRP	Number=Plur|Person=3	11	nsubj	_	SpaceAfter=No
8	在	在	ADP	IN	_	9	case	_	SpaceAfter=No
9	公眾	公眾	NOUN	NN	_	11	obl	_	SpaceAfter=No
10	中	中	ADP	IN	_	9	acl	_	SpaceAfter=No
11	得到	得到	VERB	VV	_	6	ccomp	_	SpaceAfter=No
12	了	了	PART	AS	Aspect=Perf	11	case:aspect	_	SpaceAfter=No
13	威望	威望	NOUN	NN	_	11	obj	_	SpaceAfter=No
14	,	,	PUNCT	,	_	20	punct	_	SpaceAfter=No
15	並	並	ADV	RB	_	20	mark	_	SpaceAfter=No
16	將	將	VERB	BB	Voice=Cau	20	aux:caus	_	SpaceAfter=No
17	北方	北方	NOUN	NN	_	19	det	_	SpaceAfter=No
18	之	之	PART	DEC	Case=Gen	17	case:dec	_	SpaceAfter=No
19	火	火	NOUN	NN	_	20	obj	_	SpaceAfter=No
20	推上	推上	VERB	VV	_	0	root	_	SpaceAfter=No
21	權力	權力	NOUN	NN	_	22	nmod	_	SpaceAfter=No
22	寶座	寶座	NOUN	NN	_	20	obj	_	SpaceAfter=No
23	.	.	PUNCT	.	_	20	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 19 aux:caus	color:blue
1	1996	1996	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No
2	年	年	NOUN	NNB	_	6	clf	_	SpaceAfter=No
3	4	4	NUM	CD	NumType=Card	4	nummod	_	SpaceAfter=No
4	月	月	NOUN	NNB	_	6	clf	_	SpaceAfter=No
5	17	17	NUM	CD	NumType=Card	6	nummod	_	SpaceAfter=No
6	日	日	NOUN	NNB	_	10	nmod:tmod	_	SpaceAfter=No
7	,	,	PUNCT	,	_	10	punct	_	SpaceAfter=No
8	李	李	PROPN	NNP	_	9	nmod	_	SpaceAfter=No
9	柱銘	柱銘	PROPN	NNP	_	10	nsubj	_	SpaceAfter=No
10	抵達	抵達	VERB	VV	_	15	dep	_	SpaceAfter=No
11	美國	美國	PROPN	NNP	_	12	nmod	_	SpaceAfter=No
12	華盛頓	華盛頓	PROPN	NNP	_	10	obj	_	SpaceAfter=No
13	,	,	PUNCT	,	_	15	punct	_	SpaceAfter=No
14	他	他	PRON	PRP	Person=3	15	nsubj	_	SpaceAfter=No
15	承認	承認	VERB	VV	_	0	root	_	SpaceAfter=No
16	向	向	ADP	IN	_	17	case	_	SpaceAfter=No
17	美國	美國	PROPN	NNP	_	18	obl	_	SpaceAfter=No
18	爭取	爭取	VERB	VV	_	34	acl	_	SpaceAfter=No
19	把	把	VERB	BB	Voice=Cau	23	aux:caus	_	SpaceAfter=No
20	香港	香港	PROPN	NNP	_	21	nmod	_	SpaceAfter=No
21	問題	問題	NOUN	NN	_	23	obj	_	SpaceAfter=No
22	國際	國際	NOUN	NN	_	23	case:suff	_	SpaceAfter=No
23	化	化	PART	SFV	_	18	xcomp	_	SpaceAfter=No
24	,	,	PUNCT	,	_	34	punct	_	SpaceAfter=No
25	呼籲	呼籲	VERB	VV	Voice=Cau	34	acl	_	SpaceAfter=No
26	國際	國際	NOUN	NN	_	29	nsubj	_	SpaceAfter=No
27	亦	亦	ADV	RB	_	29	mark	_	SpaceAfter=No
28	應	應	AUX	MD	_	29	aux	_	SpaceAfter=No
29	給予	給予	VERB	VV	_	25	ccomp	_	SpaceAfter=No
30	中國	中國	PROPN	NNP	_	29	iobj	_	SpaceAfter=No
31	壓力	壓力	NOUN	NN	_	29	obj	_	SpaceAfter=No
32	,	,	PUNCT	,	_	34	punct	_	SpaceAfter=No
33	以	以	ADV	RB	_	34	mark	_	SpaceAfter=No
34	保證	保證	VERB	VV	_	15	xcomp	_	SpaceAfter=No
35	香港	香港	PROPN	NNP	_	36	nmod	_	SpaceAfter=No
36	政權	政權	NOUN	NN	_	37	nsubj	_	SpaceAfter=No
37	移交	移交	VERB	VV	_	39	dep	_	SpaceAfter=No
38	後	後	ADP	IN	_	37	mark	_	SpaceAfter=No
39	得	得	VERB	VV	_	34	xcomp	_	SpaceAfter=No
40	以	以	ADV	RB	_	42	mark	_	SpaceAfter=No
41	高度	高度	NOUN	NN	_	42	advmod	_	SpaceAfter=No
42	自治	自治	VERB	VV	_	39	xcomp	_	SpaceAfter=No
43	.	.	PUNCT	.	_	34	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 aux:caus	color:blue
1	他	他	PRON	PRP	Person=3	9	nsubj	_	SpaceAfter=No
2	兢兢業業	兢兢業業	ADJ	JJ	_	9	acl	_	SpaceAfter=No
3	,	,	PUNCT	,	_	9	punct	_	SpaceAfter=No
4	把	把	VERB	BB	Voice=Cau	9	aux:caus	_	SpaceAfter=No
5	文化	文化	NOUN	NN	_	6	case:suff	_	SpaceAfter=No
6	館	館	PART	SFN	_	9	obj	_	SpaceAfter=No
7	管理	管理	AUX	VV	_	9	cop	_	SpaceAfter=No
8	得	得	PART	DEV	_	9	mark:comp	_	SpaceAfter=No
9	有條不紊	有條不紊	ADJ	JJ	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	SpaceAfter=No

~~~


