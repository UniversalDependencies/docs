

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [case]().
There are also 3 other language-specific subtypes of `case`: [case:aspect](), [case:dec](), [case:suff]().

745 nodes (1%) are attached to their parents as `case:pref`.

745 instances of `case:pref` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24429530201342.

The following 11 pairs of parts of speech are connected with `case:pref`: [zh-pos/NOUN]()-[zh-pos/PART]() (624; 84% instances), [zh-pos/PART]()-[zh-pos/PART]() (64; 9% instances), [zh-pos/PROPN]()-[zh-pos/PART]() (42; 6% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (6; 1% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (2; 0% instances), [zh-pos/NOUN]()-[zh-pos/DET]() (2; 0% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/PROPN]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case:pref	color:blue
1	總	_	PART	PFA	_	2	case:pref	_	_
2	面積	_	NOUN	NN	_	4	nsubj	_	_
3	24.44	_	NUM	CD	_	4	nummod	_	_
4	平方公里	_	NOUN	NNB	_	18	dep	_	_
5	,	_	PUNCT	,	_	18	punct	_	_
6	人口	_	NOUN	NN	_	8	nsubj	_	_
7	3108	_	NUM	CD	_	8	nummod	_	_
8	人	_	NOUN	NN	_	18	dep	_	_
9	,	_	PUNCT	,	_	18	punct	_	_
10	人口	_	NOUN	NN	_	11	nmod	_	_
11	密度	_	NOUN	NN	_	13	nsubj	_	_
12	127.2	_	NUM	CD	_	13	nummod	_	_
13	人	_	NOUN	NN	_	18	dep	_	_
14	/	_	SYM	/	_	13	punct	_	_
15	平方公里	_	NOUN	NNB	_	13	acl	_	_
16	(	_	PUNCT	(	_	18	punct	_	_
17	2009	_	NUM	CD	_	18	nummod	_	_
18	年	_	NOUN	NNB	_	0	root	_	_
19	)	_	PUNCT	)	_	18	punct	_	_
20	.	_	PUNCT	.	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 case:pref	color:blue
1	世界	_	NOUN	NN	_	5	nmod	_	_
2	三	_	NUM	CD	_	5	nummod	_	_
3	大	_	PART	PFA	_	5	case:pref	_	_
4	觀賞	_	VERB	VV	_	5	case:suff	_	_
5	樹	_	PART	SFN	_	9	nmod	_	_
6	廈門	_	PROPN	NNP	_	9	nmod	_	_
7	園林	_	NOUN	NN	_	9	nmod	_	_
8	植物	_	NOUN	NN	_	9	case:suff	_	_
9	園	_	PART	SFN	_	10	nsubj	_	_
10	種植	_	VERB	VV	_	0	root	_	_
11	有	_	VERB	VV	_	10	xcomp	_	_
12	世界	_	NOUN	NN	_	16	nmod	_	_
13	三	_	NUM	CD	_	16	nummod	_	_
14	大	_	PART	PFA	_	16	case:pref	_	_
15	觀賞	_	VERB	VV	_	16	case:suff	_	_
16	樹	_	PART	SFN	_	11	dobj	_	_
17	:	_	PUNCT	:	_	16	punct	_	_
18	中國金錢松	_	NOUN	NN	_	16	appos	_	_
19	,	_	PUNCT	,	_	18	punct	_	_
20	日本金松	_	NOUN	NN	_	18	conj	_	_
21	,	_	PUNCT	,	_	18	punct	_	_
22	日本南洋杉	_	NOUN	NN	_	18	conj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 case:pref	color:blue
1	2009	_	NUM	CD	_	2	nummod	_	_
2	年	_	NOUN	NNB	_	6	nmod	_	_
3	8	_	NUM	CD	_	4	nummod	_	_
4	月	_	NOUN	NNB	_	6	nmod	_	_
5	1	_	NUM	CD	_	6	nummod	_	_
6	日	_	NOUN	NNB	_	16	nmod:tmod	_	_
7	接收	_	VERB	VV	_	16	acl	_	_
8	原	_	PART	PFA	_	10	case:pref	_	_
9	中銀	_	PROPN	NNP	_	10	nmod	_	_
10	香港	_	PROPN	NNP	_	14	nmod	_	_
11	於	_	ADP	IN	_	13	case	_	_
12	中國	_	PROPN	NNP	_	13	nmod	_	_
13	內地	_	NOUN	NN	_	14	nmod	_	_
14	業務	_	NOUN	NN	_	7	dobj	_	_
15	,	_	PUNCT	,	_	16	punct	_	_
16	使	_	VERB	VV	Voice=Cau	0	root	_	_
17	分行	_	NOUN	NN	_	20	nsubj	_	_
18	及	_	CONJ	CC	_	17	cc	_	_
19	支行	_	NOUN	NN	_	17	conj	_	_
20	達	_	VERB	VV	_	16	ccomp	_	_
21	11	_	NUM	CD	_	22	nummod	_	_
22	家	_	NOUN	NNB	_	20	dobj	_	_
23	及	_	CONJ	CC	_	22	cc	_	_
24	7	_	NUM	CD	_	25	nummod	_	_
25	家	_	NOUN	NNB	_	22	conj	_	_
26	.	_	PUNCT	.	_	16	punct	_	_

~~~


