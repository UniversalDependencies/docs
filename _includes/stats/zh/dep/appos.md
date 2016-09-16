

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

1358 nodes (1%) are attached to their parents as `appos`.

761 instances of `appos` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.69440353460972.

The following 38 pairs of parts of speech are connected with `appos`: [zh-pos/PROPN]()-[zh-pos/NOUN]() (429; 32% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (295; 22% instances), [zh-pos/NOUN]()-[zh-pos/X]() (110; 8% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (88; 6% instances), [zh-pos/PROPN]()-[zh-pos/PART]() (85; 6% instances), [zh-pos/PROPN]()-[zh-pos/X]() (74; 5% instances), [zh-pos/PART]()-[zh-pos/X]() (46; 3% instances), [zh-pos/X]()-[zh-pos/NOUN]() (46; 3% instances), [zh-pos/NOUN]()-[zh-pos/PART]() (23; 2% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (22; 2% instances), [zh-pos/PROPN]()-[zh-pos/PROPN]() (19; 1% instances), [zh-pos/VERB]()-[zh-pos/NOUN]() (16; 1% instances), [zh-pos/NOUN]()-[zh-pos/PRON]() (14; 1% instances), [zh-pos/PART]()-[zh-pos/PART]() (12; 1% instances), [zh-pos/NOUN]()-[zh-pos/PROPN]() (8; 1% instances), [zh-pos/PROPN]()-[zh-pos/PRON]() (8; 1% instances), [zh-pos/X]()-[zh-pos/PART]() (8; 1% instances), [zh-pos/VERB]()-[zh-pos/X]() (6; 0% instances), [zh-pos/NUM]()-[zh-pos/X]() (5; 0% instances), [zh-pos/PART]()-[zh-pos/NUM]() (5; 0% instances), [zh-pos/PART]()-[zh-pos/PROPN]() (5; 0% instances), [zh-pos/X]()-[zh-pos/X]() (5; 0% instances), [zh-pos/NUM]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/PRON]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/NOUN]()-[zh-pos/NUM]() (3; 0% instances), [zh-pos/VERB]()-[zh-pos/PART]() (3; 0% instances), [zh-pos/ADJ]()-[zh-pos/NOUN]() (2; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (2; 0% instances), [zh-pos/PART]()-[zh-pos/PRON]() (2; 0% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/ADP]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/PRON]()-[zh-pos/PRON]() (1; 0% instances), [zh-pos/PROPN]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/PUNCT]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/SYM]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 appos	color:blue
1	1355	_	NUM	CD	_	2	nummod	_	_
2	年	_	NOUN	NNB	_	12	nmod:tmod	_	_
3	,	_	PUNCT	,	_	12	punct	_	_
4	勃蘭登堡	_	PROPN	NNP	_	12	nsubjpass	_	_
5	被	_	VERB	BB	Voice=Pass	12	auxpass	_	_
6	神聖	_	ADJ	JJ	_	8	amod	_	_
7	羅馬	_	PROPN	NNP	_	8	nmod	_	_
8	帝國	_	NOUN	NN	_	9	nmod	_	_
9	皇帝	_	NOUN	NN	_	11	appos	_	_
10	查理	_	PROPN	NNP	_	11	nmod	_	_
11	四世	_	PROPN	NNP	_	12	nsubj	_	_
12	升	_	VERB	VV	_	0	root	_	_
13	為	_	VERB	VC	_	12	mark	_	_
14	選侯	_	VERB	VV	_	15	case:suff	_	_
15	國	_	PART	SFN	_	12	dobj	_	_
16	.	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 appos	color:blue
1	化外	_	NOUN	NN	_	3	det	_	_
2	之	_	PART	DEC	Case=Gen	1	case:dec	_	_
3	地	_	NOUN	NN	_	11	nsubj	_	_
4	,	_	PUNCT	,	_	3	punct	_	_
5	文明	_	NOUN	NN	_	6	nmod	_	_
6	地區	_	NOUN	NN	_	9	det	_	_
7	以外	_	NOUN	NN	_	6	acl	_	_
8	的	_	PART	DEC	Case=Gen	6	case:dec	_	_
9	地方	_	NOUN	NN	_	3	appos	_	_
10	,	_	PUNCT	,	_	11	punct	_	_
11	即	_	VERB	VC	_	0	root	_	_
12	沒有	_	VERB	VV	_	11	xcomp	_	_
13	開化	_	VERB	VV	_	15	acl:relcl	_	_
14	的	_	PART	DEC	Case=Rel	13	acl:relcl	_	_
15	地方	_	NOUN	NN	_	12	dobj	_	_
16	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	動作	_	NOUN	NN	_	3	nmod	_	_
2	冒險	_	NOUN	NN	_	3	nmod	_	_
3	遊戲	_	NOUN	NN	_	12	nsubj	_	_
4	(	_	PUNCT	(	_	5	punct	_	_
5	A-AVG	_	X	FW	_	3	appos	_	_
6	)	_	PUNCT	)	_	5	punct	_	_
7	:	_	PUNCT	:	_	12	punct	_	_
8	是	_	VERB	VC	_	12	cop	_	_
9	冒險	_	NOUN	NN	_	10	nmod	_	_
10	遊戲	_	NOUN	NN	_	12	det	_	_
11	的	_	PART	DEC	Case=Gen	10	case:dec	_	_
12	分支	_	NOUN	NN	_	15	dep	_	_
13	,	_	PUNCT	,	_	15	punct	_	_
14	它	_	PRON	PRP	Person=3	15	nsubj	_	_
15	融合	_	VERB	VV	_	0	root	_	_
16	了	_	PART	AS	Aspect=Perf	15	case:aspect	_	_
17	動作	_	NOUN	NN	_	18	nmod	_	_
18	遊戲	_	NOUN	NN	_	21	det	_	_
19	的	_	PART	DEC	Case=Gen	18	case:dec	_	_
20	一些	_	ADJ	JJ	_	21	amod	_	_
21	特徵	_	NOUN	NN	_	15	dobj	_	_
22	.	_	PUNCT	.	_	15	punct	_	_

~~~


