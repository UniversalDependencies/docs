

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

5436 nodes (4%) are attached to their parents as `acl`.

3763 instances of `acl` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.32615894039735.

The following 43 pairs of parts of speech are connected with `acl`: [zh-pos/VERB]()-[zh-pos/VERB]() (3182; 59% instances), [zh-pos/NOUN]()-[zh-pos/ADP]() (952; 18% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (356; 7% instances), [zh-pos/VERB]()-[zh-pos/NOUN]() (168; 3% instances), [zh-pos/PART]()-[zh-pos/ADP]() (123; 2% instances), [zh-pos/NOUN]()-[zh-pos/VERB]() (108; 2% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (108; 2% instances), [zh-pos/PROPN]()-[zh-pos/NOUN]() (95; 2% instances), [zh-pos/VERB]()-[zh-pos/ADJ]() (95; 2% instances), [zh-pos/VERB]()-[zh-pos/PART]() (42; 1% instances), [zh-pos/PART]()-[zh-pos/VERB]() (39; 1% instances), [zh-pos/PROPN]()-[zh-pos/ADP]() (33; 1% instances), [zh-pos/ADJ]()-[zh-pos/VERB]() (24; 0% instances), [zh-pos/NUM]()-[zh-pos/VERB]() (13; 0% instances), [zh-pos/PRON]()-[zh-pos/ADP]() (9; 0% instances), [zh-pos/VERB]()-[zh-pos/ADP]() (9; 0% instances), [zh-pos/NOUN]()-[zh-pos/NUM]() (8; 0% instances), [zh-pos/X]()-[zh-pos/ADP]() (8; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (7; 0% instances), [zh-pos/NUM]()-[zh-pos/ADP]() (6; 0% instances), [zh-pos/VERB]()-[zh-pos/NUM]() (6; 0% instances), [zh-pos/ADJ]()-[zh-pos/ADJ]() (5; 0% instances), [zh-pos/NOUN]()-[zh-pos/PART]() (5; 0% instances), [zh-pos/PART]()-[zh-pos/PART]() (5; 0% instances), [zh-pos/VERB]()-[zh-pos/ADV]() (4; 0% instances), [zh-pos/X]()-[zh-pos/NOUN]() (4; 0% instances), [zh-pos/NUM]()-[zh-pos/NOUN]() (3; 0% instances), [zh-pos/ADJ]()-[zh-pos/NOUN]() (2; 0% instances), [zh-pos/NUM]()-[zh-pos/ADJ]() (2; 0% instances), [zh-pos/PROPN]()-[zh-pos/VERB]() (2; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADV]() (1; 0% instances), [zh-pos/NOUN]()-[zh-pos/DET]() (1; 0% instances), [zh-pos/NOUN]()-[zh-pos/X]() (1; 0% instances), [zh-pos/NUM]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/ADJ]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/X]() (1; 0% instances), [zh-pos/PRON]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/PRON]()-[zh-pos/VERB]() (1; 0% instances), [zh-pos/SYM]()-[zh-pos/ADP]() (1; 0% instances), [zh-pos/SYM]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/PROPN]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/X]() (1; 0% instances), [zh-pos/X]()-[zh-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 acl	color:blue
1	五	_	NUM	CD	_	2	nummod	_	_
2	月	_	NOUN	NNB	_	4	nmod	_	_
3	二十一	_	NUM	CD	_	4	nummod	_	_
4	日	_	NOUN	NNB	_	8	nmod:tmod	_	_
5	,	_	PUNCT	,	_	8	punct	_	_
6	努爾哈赤	_	PROPN	NNP	_	8	nsubj	_	_
7	出城	_	VERB	VV	_	8	acl	_	_
8	迎接	_	VERB	VV	_	0	root	_	_
9	前來	_	VERB	VV	_	15	acl:relcl	_	_
10	瀋陽	_	PROPN	NNP	_	9	dobj	_	_
11	的	_	PART	DEC	Case=Rel	9	acl:relcl	_	_
12	科爾沁	_	PROPN	NNP	_	13	case:suff	_	_
13	部	_	PART	SFN	_	15	nmod	_	_
14	奧巴	_	PROPN	NNP	_	15	nmod	_	_
15	貝勒	_	NOUN	NN	_	8	dobj	_	_
16	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 acl	color:blue
1	但是	_	ADV	RB	_	9	mark	_	_
2	迪士尼	_	PROPN	NNP	_	5	det	_	_
3	的	_	PART	DEC	Case=Gen	2	case:dec	_	_
4	公主	_	NOUN	NN	_	5	case:suff	_	_
5	們	_	PART	SFN	Number=Plur	9	nsubj	_	_
6	不會	_	AUX	MD	_	9	aux	_	_
7	都	_	ADV	RB	_	9	mark	_	_
8	太	_	ADV	RB	_	9	advmod	_	_
9	侷限	_	VERB	VV	_	0	root	_	_
10	於	_	VERB	VV	_	9	mark	_	_
11	一	_	NUM	CD	_	12	nummod	_	_
12	個	_	NOUN	NNB	_	13	nmod	_	_
13	範圍	_	NOUN	NN	_	9	dobj	_	_
14	之內	_	ADP	IN	_	13	acl	_	_
15	了	_	X	UH	_	9	discourse	_	_
16	嗎	_	X	UH	Mood=Inter	9	discourse	_	_
17	?	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 acl	color:blue
1	在	_	VERB	VV	_	12	acl	_	_
2	平原	_	NOUN	NN	_	1	dobj	_	_
3	、	_	PUNCT	EC	_	2	punct	_	_
4	塔	_	NOUN	NN	_	2	conj	_	_
5	、	_	PUNCT	EC	_	2	punct	_	_
6	洞窟	_	NOUN	NN	_	2	conj	_	_
7	、	_	PUNCT	EC	_	2	punct	_	_
8	海	_	NOUN	NN	_	2	conj	_	_
9	或	_	CONJ	CC	_	2	cc	_	_
10	迷宮	_	NOUN	NN	_	2	conj	_	_
11	中	_	NOUN	NN	_	2	acl	_	_
12	移動	_	VERB	VV	_	23	acl	_	_
13	時	_	ADP	IN	_	12	mark	_	_
14	,	_	PUNCT	,	_	23	punct	_	_
15	玩家	_	NOUN	NN	_	23	nsubj	_	_
16	將	_	ADV	RB	_	23	advmod	_	_
17	會	_	AUX	MD	_	23	aux	_	_
18	和	_	ADP	IN	_	22	case	_	_
19	隨機	_	ADV	RB	_	20	advmod	_	_
20	遇到	_	VERB	VV	_	22	acl:relcl	_	_
21	的	_	PART	DEC	Case=Rel	20	acl:relcl	_	_
22	敵人	_	NOUN	NN	_	23	nmod	_	_
23	作戰	_	VERB	VV	_	0	root	_	_
24	.	_	PUNCT	.	_	23	punct	_	_

~~~


