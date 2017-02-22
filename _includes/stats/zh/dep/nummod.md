

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

5600 nodes (5%) are attached to their parents as `nummod`.

5568 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10464285714286.

The following 16 pairs of parts of speech are connected with `nummod`: [zh-pos/NOUN]()-[zh-pos/NUM]() (5475; 98% instances), [zh-pos/PART]()-[zh-pos/NUM]() (61; 1% instances), [zh-pos/PROPN]()-[zh-pos/NUM]() (12; 0% instances), [zh-pos/X]()-[zh-pos/NUM]() (12; 0% instances), [zh-pos/NUM]()-[zh-pos/NUM]() (8; 0% instances), [zh-pos/NOUN]()-[zh-pos/NOUN]() (6; 0% instances), [zh-pos/VERB]()-[zh-pos/NUM]() (5; 0% instances), [zh-pos/ADJ]()-[zh-pos/NUM]() (4; 0% instances), [zh-pos/NOUN]()-[zh-pos/ADJ]() (4; 0% instances), [zh-pos/NOUN]()-[zh-pos/X]() (4; 0% instances), [zh-pos/NOUN]()-[zh-pos/PROPN]() (2; 0% instances), [zh-pos/PART]()-[zh-pos/PROPN]() (2; 0% instances), [zh-pos/PROPN]()-[zh-pos/PROPN]() (2; 0% instances), [zh-pos/PART]()-[zh-pos/NOUN]() (1; 0% instances), [zh-pos/SYM]()-[zh-pos/NUM]() (1; 0% instances), [zh-pos/VERB]()-[zh-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 nummod	color:blue
1	數百萬	數百萬	NUM	CD	NumType=Card	4	det	_	SpaceAfter=No
2	的	的	PART	DEC	Case=Gen	1	case:dec	_	SpaceAfter=No
3	巧克力	巧克力	NOUN	NN	_	4	case:suff	_	SpaceAfter=No
4	棒	棒	PART	SFN	_	6	nsubj:pass	_	SpaceAfter=No
5	被	被	VERB	BB	Voice=Pass	6	aux:pass	_	SpaceAfter=No
6	撤下	撤下	VERB	VV	_	18	dep	_	SpaceAfter=No
7	櫃檯	櫃檯	NOUN	NN	_	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	18	punct	_	SpaceAfter=No
9	而	而	ADV	RB	_	12	mark	_	SpaceAfter=No
10	瑪氏	瑪氏	PROPN	NNP	_	12	nsubj	_	SpaceAfter=No
11	則	則	ADV	RB	_	12	mark	_	SpaceAfter=No
12	中斷	中斷	VERB	VV	_	18	dep	_	SpaceAfter=No
13	了	了	PART	AS	Aspect=Perf	12	case:aspect	_	SpaceAfter=No
14	生產	生產	NOUN	NN	_	12	obj	_	SpaceAfter=No
15	,	,	PUNCT	,	_	18	punct	_	SpaceAfter=No
16	公司	公司	NOUN	NN	_	17	nmod	_	SpaceAfter=No
17	損失	損失	NOUN	NN	_	18	nsubj	_	SpaceAfter=No
18	達	達	VERB	VV	_	0	root	_	SpaceAfter=No
19	四百五十萬	四百五十萬	NUM	CD	NumType=Card	21	nummod	_	SpaceAfter=No
20	美	美	PROPN	NNP	_	21	nmod	_	SpaceAfter=No
21	元	元	NOUN	NNB	_	18	obj	_	SpaceAfter=No
22	.	.	PUNCT	.	_	18	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 nummod	color:blue
1	當	當	ADP	IN	_	6	case	_	SpaceAfter=No
2	《	《	PUNCT	(	_	3	punct	_	SpaceAfter=No
3	Game	Game	X	FW	_	6	nsubj	_	_
4	Informer	Informer	X	FW	_	3	flat:foreign	_	SpaceAfter=No
5	》	》	PUNCT	)	_	3	punct	_	SpaceAfter=No
6	提到	提到	VERB	VV	_	15	ccomp	_	SpaceAfter=No
7	遊戲	遊戲	NOUN	NN	_	8	nsubj	_	SpaceAfter=No
8	在	在	VERB	VV	_	12	acl:relcl	_	SpaceAfter=No
9	日本	日本	PROPN	NNP	_	8	obj	_	SpaceAfter=No
10	的	的	PART	DEC	_	8	mark:relcl	_	SpaceAfter=No
11	知名	知名	ADJ	JJ	_	12	case:suff	_	SpaceAfter=No
12	度	度	PART	SFN	_	6	obj	_	SpaceAfter=No
13	時	時	ADP	IN	_	6	mark	_	SpaceAfter=No
14	甚至	甚至	ADV	RB	_	15	mark	_	SpaceAfter=No
15	說	說	VERB	VV	_	0	root	_	SpaceAfter=No
16	「	「	PUNCT	``	_	19	punct	_	SpaceAfter=No
17	四百萬	四百萬	NUM	CD	NumType=Card	19	nummod	_	SpaceAfter=No
18	日本	日本	PROPN	NNP	_	19	case:suff	_	SpaceAfter=No
19	人	人	PART	SFN	_	21	nsubj	_	SpaceAfter=No
20	可能	可能	AUX	MD	_	21	aux	_	SpaceAfter=No
21	錯	錯	ADJ	JJ	_	15	ccomp	_	SpaceAfter=No
22	了	了	X	UH	_	21	discourse	_	SpaceAfter=No
23	」	」	PUNCT	''	_	21	punct	_	SpaceAfter=No
24	.	.	PUNCT	.	_	15	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	在	在	ADP	IN	_	2	case	_	SpaceAfter=No
2	測試	測試	NOUN	NN	_	13	obl	_	SpaceAfter=No
3	中	中	ADP	IN	_	2	acl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	13	punct	_	SpaceAfter=No
5	最初	最初	NOUN	NN	_	6	nmod:tmod	_	SpaceAfter=No
6	行駛	行駛	VERB	VV	_	10	csubj	_	SpaceAfter=No
7	時	時	ADP	IN	_	6	mark	_	SpaceAfter=No
8	為	為	AUX	VC	_	10	cop	_	SpaceAfter=No
9	95	95	NUM	CD	NumType=Card	10	nummod	_	_
10	km/h	km/h	X	FW	_	13	dep	_	SpaceAfter=No
11	,	,	PUNCT	,	_	13	punct	_	SpaceAfter=No
12	然後	然後	ADV	RB	_	13	advmod	_	SpaceAfter=No
13	開始	開始	VERB	VV	_	0	root	_	SpaceAfter=No
14	以	以	ADP	IN	_	18	case	_	SpaceAfter=No
15	5	5	NUM	CD	NumType=Card	16	nummod	_	_
16	km/h	km/h	X	FW	_	18	det	_	SpaceAfter=No
17	的	的	PART	DEC	Case=Gen	16	case:dec	_	SpaceAfter=No
18	速度	速度	NOUN	NN	_	20	obl	_	SpaceAfter=No
19	逐漸	逐漸	ADV	RB	_	20	advmod	_	SpaceAfter=No
20	提高	提高	VERB	VV	_	13	xcomp	_	SpaceAfter=No
21	.	.	PUNCT	.	_	13	punct	_	SpaceAfter=No

~~~


