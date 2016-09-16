

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

244 nodes (0%) are attached to their parents as `neg`.

243 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42213114754098.

The following 7 pairs of parts of speech are connected with `neg`: [zh-pos/VERB]()-[zh-pos/ADV]() (177; 73% instances), [zh-pos/ADJ]()-[zh-pos/ADV]() (53; 22% instances), [zh-pos/ADV]()-[zh-pos/ADV]() (5; 2% instances), [zh-pos/NOUN]()-[zh-pos/ADV]() (4; 2% instances), [zh-pos/AUX]()-[zh-pos/ADV]() (3; 1% instances), [zh-pos/ADP]()-[zh-pos/ADV]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 neg	color:blue
1	2008	_	NUM	CD	_	2	nummod	_	_
2	年	_	NOUN	NNB	_	8	nmod:tmod	_	_
3	,	_	PUNCT	,	_	8	punct	_	_
4	該	_	DET	DT	_	5	det	_	_
5	工程	_	NOUN	NN	_	8	nsubj	_	_
6	並	_	ADV	RB	_	7	advmod	_	_
7	未	_	ADV	RB	_	8	neg	_	_
8	完工	_	VERB	VV	_	0	root	_	_
9	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 neg	color:blue
1	招數	_	NOUN	NN	_	12	nsubj	_	_
2	並	_	ADV	RB	_	3	advmod	_	_
3	不	_	ADV	RB	_	4	neg	_	_
4	複雜	_	ADJ	JJ	_	12	acl	_	_
5	,	_	PUNCT	,	_	12	punct	_	_
6	卻	_	ADV	RB	_	12	mark	_	_
7	指住	_	VERB	VV	_	12	acl	_	_
8	國人	_	NOUN	NN	_	9	nmod	_	_
9	要害	_	NOUN	NN	_	7	dobj	_	_
10	,	_	PUNCT	,	_	12	punct	_	_
11	頗	_	ADV	RB	_	12	advmod	_	_
12	見	_	VERB	VV	_	0	root	_	_
13	奇效	_	NOUN	NN	_	12	dobj	_	_
14	.	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 neg	color:blue
1	在	_	ADP	IN	_	2	case	_	_
2	牙齒	_	NOUN	NN	_	11	nmod	_	_
3	之間	_	ADP	IN	_	2	acl	_	_
4	等	_	NOUN	NN	_	2	acl	_	_
5	不	_	ADV	RB	_	6	neg	_	_
6	容易	_	ADV	RB	_	7	advmod	_	_
7	刷到	_	VERB	VV	_	9	acl:relcl	_	_
8	的	_	PART	DEC	Case=Rel	7	acl:relcl	_	_
9	地方	_	NOUN	NN	_	2	appos	_	_
10	可以	_	AUX	MD	_	11	aux	_	_
11	使用	_	VERB	VV	_	0	root	_	_
12	牙線	_	NOUN	NN	_	11	dobj	_	_
13	.	_	PUNCT	.	_	11	punct	_	_

~~~


