

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

195 nodes (0%) are attached to their parents as `discourse`.

194 instances of `discourse` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.01025641025641.

The following 6 pairs of parts of speech are connected with `discourse`: [zh-pos/VERB]()-[zh-pos/X]() (148; 76% instances), [zh-pos/ADJ]()-[zh-pos/X]() (36; 18% instances), [zh-pos/NOUN]()-[zh-pos/X]() (7; 4% instances), [zh-pos/PART]()-[zh-pos/X]() (2; 1% instances), [zh-pos/PRON]()-[zh-pos/X]() (1; 1% instances), [zh-pos/VERB]()-[zh-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 discourse	color:blue
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
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 discourse	color:blue
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


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 discourse	color:blue
1	小風	_	PROPN	NNP	_	2	nsubj	_	_
2	陷入	_	VERB	VV	_	10	dep	_	_
3	了	_	PART	AS	Aspect=Perf	2	case:aspect	_	_
4	沒有	_	VERB	VV	_	7	acl:relcl	_	_
5	信心	_	NOUN	NN	_	4	dobj	_	_
6	的	_	PART	DEC	Case=Rel	4	acl:relcl	_	_
7	窘境	_	NOUN	NN	_	2	dobj	_	_
8	,	_	PUNCT	,	_	10	punct	_	_
9	阿一	_	PROPN	NNP	_	10	nsubj	_	_
10	說	_	VERB	VV	_	0	root	_	_
11	:	_	PUNCT	:	_	10	punct	_	_
12	「	_	PUNCT	``	_	25	punct	_	_
13	那	_	PRON	PRD	_	18	nsubj	_	_
14	也是	_	VERB	VC	_	18	cop	_	_
15	你	_	PRON	PRP	Person=2	18	det	_	_
16	的	_	PART	DEC	Case=Gen	15	case:dec	_	_
17	一	_	NUM	CD	_	18	nummod	_	_
18	部份	_	NOUN	NN	_	25	dep	_	_
19	呀	_	X	UH	_	18	discourse	_	_
20	,	_	PUNCT	,	_	25	punct	_	_
21	所以	_	ADV	RB	_	25	mark	_	_
22	,	_	PUNCT	,	_	25	punct	_	_
23	我	_	PRON	PRP	Person=1	25	nsubj	_	_
24	願意	_	AUX	MD	_	25	aux	_	_
25	接受	_	VERB	VV	_	10	dobj	_	_
26	」	_	PUNCT	''	_	25	punct	_	_

~~~


