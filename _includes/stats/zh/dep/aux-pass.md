

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [aux]().
There are also 1 other language-specific subtypes of `aux`: [aux:caus]().

383 nodes (0%) are attached to their parents as `aux:pass`.

383 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0443864229765.

The following 2 pairs of parts of speech are connected with `aux:pass`: [zh-pos/VERB]()-[zh-pos/VERB]() (381; 99% instances), [zh-pos/ADJ]()-[zh-pos/VERB]() (2; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 aux:pass	color:blue
1	王	王	PROPN	NNP	_	2	nmod	_	SpaceAfter=No
2	家衛	家衛	PROPN	NNP	_	4	det	_	SpaceAfter=No
3	的	的	PART	DEC	Case=Gen	2	case:dec	_	SpaceAfter=No
4	電影	電影	NOUN	NN	_	10	nsubj:pass	_	SpaceAfter=No
5	,	,	PUNCT	,	_	10	punct	_	SpaceAfter=No
6	多	多	ADV	RB	_	10	advmod	_	SpaceAfter=No
7	被	被	VERB	BB	Voice=Pass	10	aux:pass	_	SpaceAfter=No
8	形容	形容	AUX	VV	_	10	cop	_	SpaceAfter=No
9	為	為	VERB	VC	_	10	mark	_	SpaceAfter=No
10	浪漫	浪漫	ADJ	JJ	_	14	dep	_	SpaceAfter=No
11	,	,	PUNCT	,	_	14	punct	_	SpaceAfter=No
12	題材	題材	NOUN	NN	_	14	nsubj	_	SpaceAfter=No
13	多	多	ADV	RB	_	14	advmod	_	SpaceAfter=No
14	是	是	VERB	VC	_	0	root	_	SpaceAfter=No
15	探討	探討	VERB	VV	_	18	csubj	_	SpaceAfter=No
16	愛情	愛情	NOUN	NN	_	15	obj	_	SpaceAfter=No
17	為	為	AUX	VC	_	18	cop	_	SpaceAfter=No
18	主	主	ADJ	JJ	_	14	ccomp	_	SpaceAfter=No
19	.	.	PUNCT	.	_	14	punct	_	SpaceAfter=No

~~~


