

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [aux]().

198 nodes (0%) are attached to their parents as `aux:caus`.

198 instances of `aux:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.41919191919192.

The following 4 pairs of parts of speech are connected with `aux:caus`: [zh-pos/VERB]()-[zh-pos/VERB]() (194; 98% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (2; 1% instances), [zh-pos/ADJ]()-[zh-pos/VERB]() (1; 1% instances), [zh-pos/PART]()-[zh-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 16 aux:caus	color:blue
1	而	_	ADV	RB	_	20	mark	_	_
2	解藥	_	NOUN	NN	_	4	det	_	_
3	的	_	PART	DEC	Case=Gen	2	case:dec	_	_
4	出現	_	NOUN	NN	_	20	nsubj	_	_
5	也	_	ADV	RB	_	6	mark	_	_
6	使得	_	VERB	VV	Voice=Cau	20	acl	_	_
7	他們	_	PRON	PRP	Number=Plur|Person=3	11	nsubj	_	_
8	在	_	ADP	IN	_	9	case	_	_
9	公眾	_	NOUN	NN	_	11	nmod	_	_
10	中	_	ADP	IN	_	9	acl	_	_
11	得到	_	VERB	VV	_	6	ccomp	_	_
12	了	_	PART	AS	Aspect=Perf	11	case:aspect	_	_
13	威望	_	NOUN	NN	_	11	dobj	_	_
14	,	_	PUNCT	,	_	20	punct	_	_
15	並	_	ADV	RB	_	20	mark	_	_
16	將	_	VERB	BB	Voice=Cau	20	aux:caus	_	_
17	北方	_	NOUN	NN	_	19	det	_	_
18	之	_	PART	DEC	Case=Gen	17	case:dec	_	_
19	火	_	NOUN	NN	_	20	dobj	_	_
20	推上	_	VERB	VV	_	0	root	_	_
21	權力	_	NOUN	NN	_	22	nmod	_	_
22	寶座	_	NOUN	NN	_	20	dobj	_	_
23	.	_	PUNCT	.	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux:caus	color:blue
1	通過	_	ADP	IN	_	6	case	_	_
2	將	_	VERB	BB	Voice=Cau	6	aux:caus	_	_
3	原型	_	NOUN	NN	_	6	dobj	_	_
4	的	_	PART	DEC	Case=Gen	3	case:dec	_	_
5	不斷	_	ADJ	JJ	_	6	advmod	_	_
6	完善	_	NOUN	NN	_	9	xcomp	_	_
7	,	_	PUNCT	,	_	9	punct	_	_
8	其	_	PRON	PRP	Person=3	9	nsubj	_	_
9	具有	_	VERB	VV	_	0	root	_	_
10	了	_	PART	AS	Aspect=Perf	9	case:aspect	_	_
11	更低	_	ADJ	JJ	_	14	amod	_	_
12	的	_	PART	DEC	Case=Rel	11	acl:relcl	_	_
13	風阻	_	NOUN	NN	_	14	nmod	_	_
14	係數	_	NOUN	NN	_	9	dobj	_	_
15	、	_	PUNCT	EC	_	14	punct	_	_
16	更佳	_	ADJ	JJ	_	19	amod	_	_
17	的	_	PART	DEC	Case=Rel	16	acl:relcl	_	_
18	操控	_	VERB	VV	_	19	case:suff	_	_
19	性	_	PART	SFN	_	14	conj	_	_
20	和	_	CONJ	CC	_	19	cc	_	_
21	耐用	_	ADJ	JJ	_	22	case:suff	_	_
22	度	_	PART	SFN	_	19	conj	_	_
23	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 aux:caus	color:blue
1	他	_	PRON	PRP	Person=3	9	nsubj	_	_
2	兢兢業業	_	ADJ	JJ	_	9	acl	_	_
3	,	_	PUNCT	,	_	9	punct	_	_
4	把	_	VERB	BB	Voice=Cau	9	aux:caus	_	_
5	文化	_	NOUN	NN	_	6	case:suff	_	_
6	館	_	PART	SFN	_	9	dobj	_	_
7	管理	_	VERB	VV	_	9	cop	_	_
8	得	_	PART	DEV	Case=Comp	9	mark	_	_
9	有條不紊	_	ADJ	JJ	_	0	root	_	_
10	.	_	PUNCT	.	_	9	punct	_	_

~~~


