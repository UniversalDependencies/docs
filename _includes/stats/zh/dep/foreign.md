

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is universal.

325 nodes (0%) are attached to their parents as `foreign`.

325 instances of `foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58461538461538.

The following 4 pairs of parts of speech are connected with `foreign`: [zh-pos/X]()-[zh-pos/X]() (318; 98% instances), [zh-pos/NUM]()-[zh-pos/X]() (4; 1% instances), [zh-pos/PROPN]()-[zh-pos/PROPN]() (2; 1% instances), [zh-pos/X]()-[zh-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 foreign	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 foreign	color:blue
1	紅	_	NOUN	NN	_	4	nmod	_	_
2	蜘蛛	_	NOUN	NN	_	4	nmod	_	_
3	星雲	_	NOUN	NN	_	4	nmod	_	_
4	中心	_	NOUN	NN	_	7	det	_	_
5	的	_	PART	DEC	Case=Gen	4	case:dec	_	_
6	白	_	NOUN	NN	_	7	nmod	_	_
7	矮星	_	NOUN	NN	_	9	nsubj	_	_
8	會	_	AUX	MD	_	9	aux	_	_
9	產生	_	VERB	VV	_	25	dep	_	_
10	溫度	_	NOUN	NN	_	11	nsubj	_	_
11	高達	_	VERB	VV	_	17	acl:relcl	_	_
12	10000	_	NUM	CD	_	11	dobj	_	_
13	K	_	X	FW	_	12	foreign	_	_
14	的	_	PART	DEC	Case=Rel	11	acl:relcl	_	_
15	強烈	_	ADJ	JJ	_	17	amod	_	_
16	恆星	_	NOUN	NN	_	17	case:suff	_	_
17	風	_	PART	SFN	_	9	dobj	_	_
18	,	_	PUNCT	,	_	25	punct	_	_
19	速度	_	NOUN	NN	_	20	nsubj	_	_
20	達到	_	VERB	VV	_	25	csubj	_	_
21	每秒	_	DET	DT	_	23	advmod	_	_
22	300	_	NUM	CD	_	23	nummod	_	_
23	公里	_	NOUN	NNB	_	20	dobj	_	_
24	,	_	PUNCT	,	_	25	punct	_	_
25	產生	_	VERB	VV	_	0	root	_	_
26	振幅	_	NOUN	NN	_	29	nsubj	_	_
27	1千億	_	NUM	CD	_	28	nummod	_	_
28	公里	_	NOUN	NNB	_	29	advmod	_	_
29	高	_	ADJ	JJ	_	31	amod	_	_
30	的	_	PART	DEC	Case=Rel	29	acl:relcl	_	_
31	震波	_	NOUN	NN	_	25	dobj	_	_
32	.	_	PUNCT	.	_	25	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 foreign	color:blue
1	目前	_	NOUN	NN	_	3	det	_	_
2	的	_	PART	DEC	Case=Gen	1	case:dec	_	_
3	教堂	_	NOUN	NN	_	18	nsubj	_	_
4	由	_	VERB	VV	_	18	acl	_	_
5	詹姆斯	_	PROPN	NNP	_	7	nmod	_	_
6	·	_	PUNCT	/	_	7	punct	_	_
7	吉布斯	_	PROPN	NNP	_	12	nsubj	_	_
8	(	_	PUNCT	(	_	9	punct	_	_
9	James	_	PROPN	NNP	_	7	appos	_	_
10	Gibbs	_	PROPN	NNP	_	9	foreign	_	_
11	)	_	PUNCT	)	_	9	punct	_	_
12	設計	_	VERB	VV	_	4	ccomp	_	_
13	建造	_	VERB	VV	_	12	conj	_	_
14	,	_	PUNCT	,	_	18	punct	_	_
15	於	_	ADP	IN	_	17	case	_	_
16	1723	_	NUM	CD	_	17	nummod	_	_
17	年	_	NOUN	NNB	_	18	nmod	_	_
18	獻堂	_	VERB	VV	_	0	root	_	_
19	.	_	PUNCT	.	_	18	punct	_	_

~~~


