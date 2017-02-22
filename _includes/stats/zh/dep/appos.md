

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

1254 nodes (1%) are attached to their parents as `appos`.

700 instances of `appos` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.64752791068581.

The following 38 pairs of parts of speech are connected with `appos`: [zh-pos/PROPN]()-[zh-pos/NOUN]() (397; 32% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (275; 22% instances), [zh-pos/NOUN]()-[zh-pos/X]() (95; 8% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (82; 7% instances), [zh-pos/PROPN]()-[zh-pos/PART]() (78; 6% instances), [zh-pos/PROPN]()-[zh-pos/X]() (69; 6% instances), [zh-pos/X]()-[zh-pos/NOUN]() (43; 3% instances), [zh-pos/PART]()-[zh-pos/X]() (42; 3% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (19; 2% instances), [zh-pos/PROPN]()-[zh-pos/PROPN]() (19; 2% instances), [zh-pos/NOUN]()-[zh-pos/PART]() (18; 1% instances), [zh-pos/VERB]()-[zh-pos/NOUN]() (15; 1% instances), [zh-pos/NOUN]()-[zh-pos/PRON]() (14; 1% instances), [zh-pos/PART]()-[zh-pos/PART]() (12; 1% instances), [zh-pos/NOUN]()-[zh-pos/PROPN]() (8; 1% instances), [zh-pos/PROPN]()-[zh-pos/PRON]() (8; 1% instances), [zh-pos/X]()-[zh-pos/PART]() (7; 1% instances), [zh-pos/VERB]()-[zh-pos/X]() (6; 0% instances), [zh-pos/NUM]()-[zh-pos/X]() (5; 0% instances), [zh-pos/PART]()-[zh-pos/NUM]() (5; 0% instances), [zh-pos/PART]()-[zh-pos/PROPN]() (5; 0% instances), [zh-pos/NUM]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/PRON]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/X]()-[zh-pos/X]() (4; 0% instances), [zh-pos/VERB]()-[zh-pos/PART]() (3; 0% instances), [zh-pos/ADJ]()-[zh-pos/NOUN]() (2; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (2; 0% instances), [zh-pos/NOUN]()-[zh-pos/NUM]() (2; 0% instances), [zh-pos/PART]()-[zh-pos/PRON]() (2; 0% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/ADP]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/PRON]()-[zh-pos/PRON]() (1; 0% instances), [zh-pos/PROPN]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/PUNCT]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/SYM]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 appos	color:blue
1	1355	1355	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No
2	年	年	NOUN	NNB	_	12	nmod:tmod	_	SpaceAfter=No
3	,	,	PUNCT	,	_	12	punct	_	SpaceAfter=No
4	勃蘭登堡	勃蘭登堡	PROPN	NNP	_	12	nsubj:pass	_	SpaceAfter=No
5	被	被	VERB	BB	Voice=Pass	12	aux:pass	_	SpaceAfter=No
6	神聖	神聖	ADJ	JJ	_	8	amod	_	SpaceAfter=No
7	羅馬	羅馬	PROPN	NNP	_	8	nmod	_	SpaceAfter=No
8	帝國	帝國	NOUN	NN	_	9	nmod	_	SpaceAfter=No
9	皇帝	皇帝	NOUN	NN	_	11	appos	_	SpaceAfter=No
10	查理	查理	PROPN	NNP	_	11	nmod	_	SpaceAfter=No
11	四世	四世	PROPN	NNP	_	12	nsubj	_	SpaceAfter=No
12	升	升	VERB	VV	_	0	root	_	SpaceAfter=No
13	為	為	VERB	VC	_	12	mark	_	SpaceAfter=No
14	選侯	選侯	VERB	VV	_	15	case:suff	_	SpaceAfter=No
15	國	國	PART	SFN	_	12	obj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 appos	color:blue
1	化外	化外	NOUN	NN	_	3	det	_	SpaceAfter=No
2	之	之	PART	DEC	Case=Gen	1	case:dec	_	SpaceAfter=No
3	地	地	NOUN	NN	_	11	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	SpaceAfter=No
5	文明	文明	NOUN	NN	_	6	nmod	_	SpaceAfter=No
6	地區	地區	NOUN	NN	_	9	det	_	SpaceAfter=No
7	以外	以外	NOUN	NN	_	6	acl	_	SpaceAfter=No
8	的	的	PART	DEC	Case=Gen	6	case:dec	_	SpaceAfter=No
9	地方	地方	NOUN	NN	_	3	appos	_	SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	_	SpaceAfter=No
11	即	即	VERB	VC	_	0	root	_	SpaceAfter=No
12	沒有	沒有	VERB	VV	_	11	xcomp	_	SpaceAfter=No
13	開化	開化	VERB	VV	_	15	acl:relcl	_	SpaceAfter=No
14	的	的	PART	DEC	_	13	mark:relcl	_	SpaceAfter=No
15	地方	地方	NOUN	NN	_	12	obj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	11	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	動作	動作	NOUN	NN	_	3	nmod	_	SpaceAfter=No
2	冒險	冒險	NOUN	NN	_	3	nmod	_	SpaceAfter=No
3	遊戲	遊戲	NOUN	NN	_	12	nsubj	_	SpaceAfter=No
4	(	(	PUNCT	(	_	5	punct	_	SpaceAfter=No
5	A-AVG	A-AVG	X	FW	_	3	appos	_	SpaceAfter=No
6	)	)	PUNCT	)	_	5	punct	_	SpaceAfter=No
7	:	:	PUNCT	:	_	12	punct	_	SpaceAfter=No
8	是	是	AUX	VC	_	12	cop	_	SpaceAfter=No
9	冒險	冒險	NOUN	NN	_	10	nmod	_	SpaceAfter=No
10	遊戲	遊戲	NOUN	NN	_	12	det	_	SpaceAfter=No
11	的	的	PART	DEC	Case=Gen	10	case:dec	_	SpaceAfter=No
12	分支	分支	NOUN	NN	_	15	dep	_	SpaceAfter=No
13	,	,	PUNCT	,	_	15	punct	_	SpaceAfter=No
14	它	它	PRON	PRP	Person=3	15	nsubj	_	SpaceAfter=No
15	融合	融合	VERB	VV	_	0	root	_	SpaceAfter=No
16	了	了	PART	AS	Aspect=Perf	15	case:aspect	_	SpaceAfter=No
17	動作	動作	NOUN	NN	_	18	nmod	_	SpaceAfter=No
18	遊戲	遊戲	NOUN	NN	_	21	det	_	SpaceAfter=No
19	的	的	PART	DEC	Case=Gen	18	case:dec	_	SpaceAfter=No
20	一些	一些	ADJ	JJ	_	21	amod	_	SpaceAfter=No
21	特徵	特徵	NOUN	NN	_	15	obj	_	SpaceAfter=No
22	.	.	PUNCT	.	_	15	punct	_	SpaceAfter=No

~~~


