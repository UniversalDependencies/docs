

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [case]().
There are also 3 other language-specific subtypes of `case`: [case:dec](), [case:pref](), [case:suff]().

838 nodes (1%) are attached to their parents as `case:aspect`.

834 instances of `case:aspect` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05727923627685.

The following 4 pairs of parts of speech are connected with `case:aspect`: [zh-pos/VERB]()-[zh-pos/PART]() (830; 99% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (6; 1% instances), [zh-pos/NOUN]()-[zh-pos/PART]() (1; 0% instances), [zh-pos/PART]()-[zh-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 case:aspect	color:blue
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


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case:aspect	color:blue
1	許多	許多	NUM	CD	NumType=Card	4	amod	_	SpaceAfter=No
2	國際	國際	NOUN	NN	_	4	nmod	_	SpaceAfter=No
3	國家	國家	NOUN	NN	_	4	nmod	_	SpaceAfter=No
4	組織	組織	NOUN	NN	_	8	nsubj	_	SpaceAfter=No
5	對此	對此	ADP	IN	_	8	case	_	SpaceAfter=No
6	表示	表示	AUX	VV	_	8	cop	_	SpaceAfter=No
7	了	了	PART	AS	Aspect=Perf	8	case:aspect	_	SpaceAfter=No
8	不滿	不滿	ADJ	JJ	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 25 case:aspect	color:blue
1	拉丁	拉丁	PROPN	NNP	_	2	case:suff	_	SpaceAfter=No
2	語	語	PART	SFN	_	4	nsubj	_	SpaceAfter=No
3	還	還	ADV	RB	_	4	mark	_	SpaceAfter=No
4	存在	存在	VERB	VV	_	30	dep	_	SpaceAfter=No
5	大量	大量	ADJ	JJ	_	8	amod	_	SpaceAfter=No
6	語流	語流	NOUN	NN	_	8	nmod	_	SpaceAfter=No
7	音變	音變	NOUN	NN	_	8	nmod	_	SpaceAfter=No
8	現象	現象	NOUN	NN	_	4	obj	_	SpaceAfter=No
9	,	,	PUNCT	,	_	30	punct	_	SpaceAfter=No
10	但	但	ADV	RB	_	23	mark	_	SpaceAfter=No
11	在	在	ADP	IN	_	16	case	_	SpaceAfter=No
12	今天	今天	NOUN	NN	_	16	nmod	_	SpaceAfter=No
13	能	能	AUX	MD	_	14	aux	_	SpaceAfter=No
14	看到	看到	VERB	VV	_	16	acl:relcl	_	SpaceAfter=No
15	的	的	PART	DEC	_	14	mark:relcl	_	SpaceAfter=No
16	文獻	文獻	NOUN	NN	_	23	obl	_	SpaceAfter=No
17	中	中	ADP	IN	_	16	acl	_	SpaceAfter=No
18	,	,	PUNCT	,	_	23	punct	_	SpaceAfter=No
19	大	大	PART	PFA	_	20	case:pref	_	SpaceAfter=No
20	部分	部分	NOUN	NN	_	21	nmod	_	SpaceAfter=No
21	音變	音變	NOUN	NN	_	23	nsubj	_	SpaceAfter=No
22	已經	已經	ADV	RB	_	23	advmod	_	SpaceAfter=No
23	反映	反映	VERB	VV	_	30	dep	_	SpaceAfter=No
24	在	在	ADP	IN	_	27	case	_	SpaceAfter=No
25	了	了	PART	AS	Aspect=Perf	27	case:aspect	_	SpaceAfter=No
26	文字	文字	NOUN	NN	_	27	nmod	_	SpaceAfter=No
27	拼寫	拼寫	NOUN	NN	_	23	obl	_	SpaceAfter=No
28	上	上	ADP	IN	_	27	acl	_	SpaceAfter=No
29	,	,	PUNCT	,	_	30	punct	_	SpaceAfter=No
30	只有	只有	VERB	VV	_	0	root	_	SpaceAfter=No
31	少數	少數	ADJ	JJ	_	32	nsubj	_	SpaceAfter=No
32	例外	例外	ADJ	JJ	_	30	ccomp	_	SpaceAfter=No
33	.	.	PUNCT	.	_	30	punct	_	SpaceAfter=No

~~~


