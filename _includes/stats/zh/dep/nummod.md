

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

6221 nodes (5%) are attached to their parents as `nummod`.

6185 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09998392541392.

The following 16 pairs of parts of speech are connected with `nummod`: [zh-pos/NOUN]()-[zh-pos/NUM]() (6083; 98% instances), [zh-pos/PART]()-[zh-pos/NUM]() (67; 1% instances), [zh-pos/X]()-[zh-pos/NUM]() (14; 0% instances), [zh-pos/PROPN]()-[zh-pos/NUM]() (13; 0% instances), [zh-pos/NUM]()-[zh-pos/NUM]() (11; 0% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (6; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (5; 0% instances), [zh-pos/VERB]()-[zh-pos/NUM]() (5; 0% instances), [zh-pos/ADJ]()-[zh-pos/NUM]() (4; 0% instances), [zh-pos/NOUN]()-[zh-pos/X]() (4; 0% instances), [zh-pos/NOUN]()-[zh-pos/PROPN]() (2; 0% instances), [zh-pos/PART]()-[zh-pos/PROPN]() (2; 0% instances), [zh-pos/PROPN]()-[zh-pos/PROPN]() (2; 0% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/SYM]()-[zh-pos/NUM]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 nummod	color:blue
1	數百萬	_	NUM	CD	_	4	det	_	_
2	的	_	PART	DEC	Case=Gen	1	case:dec	_	_
3	巧克力	_	NOUN	NN	_	4	case:suff	_	_
4	棒	_	PART	SFN	_	6	nsubjpass	_	_
5	被	_	VERB	BB	Voice=Pass	6	auxpass	_	_
6	撤下	_	VERB	VV	_	18	dep	_	_
7	櫃檯	_	NOUN	NN	_	6	dobj	_	_
8	,	_	PUNCT	,	_	18	punct	_	_
9	而	_	ADV	RB	_	12	mark	_	_
10	瑪氏	_	PROPN	NNP	_	12	nsubj	_	_
11	則	_	ADV	RB	_	12	mark	_	_
12	中斷	_	VERB	VV	_	18	dep	_	_
13	了	_	PART	AS	Aspect=Perf	12	case:aspect	_	_
14	生產	_	NOUN	NN	_	12	dobj	_	_
15	,	_	PUNCT	,	_	18	punct	_	_
16	公司	_	NOUN	NN	_	17	nmod	_	_
17	損失	_	NOUN	NN	_	18	nsubj	_	_
18	達	_	VERB	VV	_	0	root	_	_
19	四百五十萬	_	NUM	CD	_	21	nummod	_	_
20	美	_	PROPN	NNP	_	21	nmod	_	_
21	元	_	NOUN	NNB	_	18	dobj	_	_
22	.	_	PUNCT	.	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 nummod	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	在	_	ADP	IN	_	2	case	_	_
2	測試	_	NOUN	NN	_	13	nmod	_	_
3	中	_	ADP	IN	_	2	acl	_	_
4	,	_	PUNCT	,	_	13	punct	_	_
5	最初	_	NOUN	NN	_	6	nmod:tmod	_	_
6	行駛	_	VERB	VV	_	10	csubj	_	_
7	時	_	ADP	IN	_	6	mark	_	_
8	為	_	VERB	VC	_	10	cop	_	_
9	95	_	NUM	CD	_	10	nummod	_	_
10	km/h	_	X	FW	_	13	dep	_	_
11	,	_	PUNCT	,	_	13	punct	_	_
12	然後	_	ADV	RB	_	13	advmod	_	_
13	開始	_	VERB	VV	_	0	root	_	_
14	以	_	ADP	IN	_	18	case	_	_
15	5	_	NUM	CD	_	16	nummod	_	_
16	km/h	_	X	FW	_	18	det	_	_
17	的	_	PART	DEC	Case=Gen	16	case:dec	_	_
18	速度	_	NOUN	NN	_	20	nmod	_	_
19	逐漸	_	ADV	RB	_	20	advmod	_	_
20	提高	_	VERB	VV	_	13	xcomp	_	_
21	.	_	PUNCT	.	_	13	punct	_	_

~~~


