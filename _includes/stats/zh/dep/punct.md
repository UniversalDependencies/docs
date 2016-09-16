

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

17079 nodes (14%) are attached to their parents as `punct`.

8927 instances of `punct` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.51214942326834.

The following 22 pairs of parts of speech are connected with `punct`: [zh-pos/VERB]()-[zh-pos/PUNCT]() (10859; 64% instances), [zh-pos/NOUN]()-[zh-pos/PUNCT]() (3152; 18% instances), [zh-pos/PART]()-[zh-pos/PUNCT]() (836; 5% instances), [zh-pos/PROPN]()-[zh-pos/PUNCT]() (817; 5% instances), [zh-pos/X]()-[zh-pos/PUNCT]() (577; 3% instances), [zh-pos/ADJ]()-[zh-pos/PUNCT]() (504; 3% instances), [zh-pos/NUM]()-[zh-pos/PUNCT]() (230; 1% instances), [zh-pos/ADP]()-[zh-pos/PUNCT]() (36; 0% instances), [zh-pos/NOUN]()-[zh-pos/SYM]() (18; 0% instances), [zh-pos/ADV]()-[zh-pos/PUNCT]() (14; 0% instances), [zh-pos/PRON]()-[zh-pos/PUNCT]() (10; 0% instances), [zh-pos/AUX]()-[zh-pos/PUNCT]() (4; 0% instances), [zh-pos/NUM]()-[zh-pos/SYM]() (4; 0% instances), [zh-pos/PUNCT]()-[zh-pos/PUNCT]() (4; 0% instances), [zh-pos/PROPN]()-[zh-pos/SYM]() (3; 0% instances), [zh-pos/X]()-[zh-pos/SYM]() (3; 0% instances), [zh-pos/NOUN]()-[zh-pos/NUM]() (2; 0% instances), [zh-pos/SYM]()-[zh-pos/PUNCT]() (2; 0% instances), [zh-pos/ADJ]()-[zh-pos/SYM]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/SYM]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/ADV]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 punct	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 punct	color:blue
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


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 16 punct	color:blue
1	當	_	ADP	IN	_	6	case	_	_
2	《	_	PUNCT	(	_	3	punct	_	_
3	Game	_	X	FW	_	6	nsubj	_	_
4	Informer	_	X	FW	_	3	foreign	_	_
5	》	_	PUNCT	)	_	3	punct	_	_
6	提到	_	VERB	VV	_	15	ccomp	_	_
7	遊戲	_	NOUN	NN	_	8	nsubj	_	_
8	在	_	VERB	VV	_	12	acl:relcl	_	_
9	日本	_	PROPN	NNP	_	8	dobj	_	_
10	的	_	PART	DEC	Case=Rel	8	acl:relcl	_	_
11	知名	_	ADJ	JJ	_	12	case:suff	_	_
12	度	_	PART	SFN	_	6	dobj	_	_
13	時	_	ADP	IN	_	6	mark	_	_
14	甚至	_	ADV	RB	_	15	mark	_	_
15	說	_	VERB	VV	_	0	root	_	_
16	「	_	PUNCT	``	_	19	punct	_	_
17	四百萬	_	NUM	CD	_	19	nummod	_	_
18	日本	_	PROPN	NNP	_	19	case:suff	_	_
19	人	_	PART	SFN	_	21	nsubj	_	_
20	可能	_	AUX	MD	_	21	aux	_	_
21	錯	_	ADJ	JJ	_	15	ccomp	_	_
22	了	_	X	UH	_	21	discourse	_	_
23	」	_	PUNCT	''	_	21	punct	_	_
24	.	_	PUNCT	.	_	15	punct	_	_

~~~


