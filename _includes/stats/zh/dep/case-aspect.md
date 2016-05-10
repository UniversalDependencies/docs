

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [case]().
There are also 3 other language-specific subtypes of `case`: [case:dec](), [case:pref](), [case:suff]().

955 nodes (1%) are attached to their parents as `case:aspect`.

951 instances of `case:aspect` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05340314136126.

The following 4 pairs of parts of speech are connected with `case:aspect`: [zh-pos/VERB]()-[zh-pos/PART]() (946; 99% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (6; 1% instances), [zh-pos/PART]()-[zh-pos/PART]() (2; 0% instances), [zh-pos/NOUN]()-[zh-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 case:aspect	color:blue
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


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case:aspect	color:blue
1	許多	_	NUM	CD	_	4	amod	_	_
2	國際	_	NOUN	NN	_	4	nmod	_	_
3	國家	_	NOUN	NN	_	4	nmod	_	_
4	組織	_	NOUN	NN	_	8	nsubj	_	_
5	對此	_	ADP	IN	_	8	case	_	_
6	表示	_	VERB	VV	_	8	cop	_	_
7	了	_	PART	AS	Aspect=Perf	8	case:aspect	_	_
8	不滿	_	ADJ	JJ	_	0	root	_	_
9	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 case:aspect	color:blue
1	這	_	DET	DT	_	2	det	_	_
2	個	_	NOUN	NNB	_	3	nmod	_	_
3	原理	_	NOUN	NN	_	5	nsubj	_	_
4	有時	_	ADV	RB	_	5	advmod	_	_
5	叫做	_	VERB	VV	_	0	root	_	_
6	弗雷格	_	PROPN	NNP	_	7	nmod	_	_
7	原理	_	NOUN	NN	_	5	dobj	_	_
8	,	_	PUNCT	,	_	5	punct	_	_
9	因為	_	ADP	IN	_	11	case	_	_
10	普遍	_	ADV	RB	_	11	advmod	_	_
11	認為	_	VERB	VV	_	5	xcomp	_	_
12	弗雷格	_	PROPN	NNP	_	15	nsubj	_	_
13	首先	_	ADV	RB	_	15	advmod	_	_
14	公式	_	NOUN	NN	_	15	case:suff	_	_
15	化	_	PART	SFV	_	11	ccomp	_	_
16	了	_	PART	AS	Aspect=Perf	15	case:aspect	_	_
17	它	_	PRON	PRP	Person=3	15	dobj	_	_
18	.	_	PUNCT	.	_	5	punct	_	_

~~~


