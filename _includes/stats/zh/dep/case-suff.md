

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [case]().
There are also 3 other language-specific subtypes of `case`: [case:aspect](), [case:dec](), [case:pref]().

5563 nodes (5%) are attached to their parents as `case:suff`.

5562 instances of `case:suff` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02067229911918.

The following 17 pairs of parts of speech are connected with `case:suff`: [zh-pos/PART]()-[zh-pos/PROPN]() (2004; 36% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (1938; 35% instances), [zh-pos/PART]()-[zh-pos/VERB]() (1238; 22% instances), [zh-pos/PART]()-[zh-pos/ADJ]() (158; 3% instances), [zh-pos/PART]()-[zh-pos/PART]() (141; 3% instances), [zh-pos/PART]()-[zh-pos/X]() (36; 1% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (13; 0% instances), [zh-pos/NOUN]()-[zh-pos/PROPN]() (11; 0% instances), [zh-pos/PART]()-[zh-pos/NUM]() (6; 0% instances), [zh-pos/NOUN]()-[zh-pos/NUM]() (4; 0% instances), [zh-pos/PROPN]()-[zh-pos/PROPN]() (4; 0% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (3; 0% instances), [zh-pos/PART]()-[zh-pos/PRON]() (2; 0% instances), [zh-pos/VERB]()-[zh-pos/NOUN]() (2; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/PROPN]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case:suff	color:blue
1	隨後	_	ADV	RB	_	8	advmod	_	_
2	愛斯基摩	_	PROPN	NNP	_	3	case:suff	_	_
3	人	_	PART	SFN	_	8	nsubj	_	_
4	和	_	CONJ	CC	_	3	cc	_	_
5	維京	_	PROPN	NNP	_	6	case:suff	_	_
6	人	_	PART	SFN	_	3	conj	_	_
7	相繼	_	ADV	RB	_	8	advmod	_	_
8	定居	_	VERB	VV	_	0	root	_	_
9	於	_	ADP	IN	_	10	case	_	_
10	此	_	PRON	PRD	_	8	nmod	_	_
11	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 case:suff	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case:suff	color:blue
1	大	_	ADV	RB	_	2	advmod	_	_
2	多數	_	ADJ	JJ	_	6	det	_	_
3	的	_	PART	DEC	Case=Gen	2	case:dec	_	_
4	加長	_	VERB	VV	_	5	case:suff	_	_
5	型	_	PART	SFN	_	6	nmod	_	_
6	禮車	_	NOUN	NN	_	11	nsubj	_	_
7	則是	_	VERB	VC	_	11	cop	_	_
8	租車	_	NOUN	NN	_	9	nmod	_	_
9	公司	_	NOUN	NN	_	11	det	_	_
10	的	_	PART	DEC	Case=Gen	9	case:dec	_	_
11	財產	_	NOUN	NN	_	0	root	_	_
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


