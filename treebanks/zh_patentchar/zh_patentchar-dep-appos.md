---
layout: base
title:  'Statistics of appos in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `appos`

This relation is universal.

17 nodes (1%) are attached to their parents as `appos`.

17 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.35294117647059.

The following 4 pairs of parts of speech are connected with `appos`: <tt><a href="zh_patentchar-pos-X.html">X</a></tt>-<tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt> (12; 71% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-PROPN.html">PROPN</a></tt> (2; 12% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-X.html">X</a></tt> (2; 12% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	S1	_	X	_	_	0	root	_	SpaceAfter=No
2	、	_	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	建立	_	VERB	_	_	1	appos	_	SpaceAfter=No
4	整车	_	NOUN	_	_	6	nmod	_	SpaceAfter=No
5	梁	_	NOUN	_	_	6	nmod	_	SpaceAfter=No
6	单元	_	NOUN	_	_	8	nmod	_	SpaceAfter=No
7	初始	_	ADJ	_	_	8	amod	_	SpaceAfter=No
8	模型	_	NOUN	_	_	3	obj	_	SpaceAfter=No
9	，	_	PUNCT	_	_	12	punct	_	SpaceAfter=No
10	对	_	ADP	_	_	11	case	_	ExtPos=ADP|SpaceAfter=No
11	其	_	PRON	_	_	12	obj	_	SpaceAfter=No
12	进行	_	VERB	_	_	3	parataxis	_	SpaceAfter=No
13	模态分	_	VERB	_	_	12	ccomp	_	SpaceAfter=No
14	析	_	VERB	_	_	13	conj	_	SpaceAfter=No
15	，	_	PUNCT	_	_	23	punct	_	SpaceAfter=No
16	并	_	CCONJ	_	_	23	mark	_	ExtPos=CCONJ|SpaceAfter=No
17	与	_	ADP	_	_	22	case	_	SpaceAfter=No
18	同类	_	NOUN	_	_	20	nmod	_	SpaceAfter=No
19	型	_	NOUN	_	_	18	conj	_	SpaceAfter=No
20	车	_	NOUN	_	_	22	nmod	_	SpaceAfter=No
21	的	_	PART	_	_	20	case	_	SpaceAfter=No
22	模态	_	NOUN	_	_	23	obl	_	SpaceAfter=No
23	进行	_	VERB	_	_	3	conj	_	SpaceAfter=No
24	对比	_	VERB	_	_	23	ccomp	_	SpaceAfter=No
25	；	_	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	遍历	_	VERB	_	_	0	root	_	SpaceAfter=No
2	所有	_	DET	_	_	3	dep	_	SpaceAfter=No
3	卫星	_	NOUN	_	_	1	obj	_	SpaceAfter=No
4	S	_	PROPN	_	_	3	appos	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 appos	color:blue
1	2.	_	PUNCT	_	_	11	punct	_	SpaceAfter=No
2	根据	_	ADP	_	_	4	case	_	SpaceAfter=No
3	权利	_	NOUN	_	_	4	nmod	_	SpaceAfter=No
4	要求	_	NOUN	_	_	6	nmod	_	SpaceAfter=No
5	1	_	NUM	_	_	4	nmod	_	SpaceAfter=No
6	所述	_	ADJ	_	_	11	nmod	_	SpaceAfter=No
7	的	_	PART	_	_	6	case	_	SpaceAfter=No
8	客车	_	NOUN	_	_	10	obl	_	SpaceAfter=No
9	结构	_	NOUN	_	_	10	obl	_	SpaceAfter=No
10	优化	_	VERB	_	_	11	acl	_	SpaceAfter=No
11	方法	_	NOUN	_	_	0	root	_	SpaceAfter=No
12	，	_	PUNCT	_	_	15	punct	_	SpaceAfter=No
13	其	_	PRON	_	_	14	nmod	_	SpaceAfter=No
14	特征	_	NOUN	_	_	15	nsubj	_	SpaceAfter=No
15	在于	_	VERB	_	_	11	parataxis	_	SpaceAfter=No
16	，	_	PUNCT	_	_	25	punct	_	SpaceAfter=No
17	所述	_	ADJ	_	_	18	amod	_	SpaceAfter=No
18	步骤	_	NOUN	_	_	25	obl	_	SpaceAfter=No
19	S3	_	X	_	_	18	appos	_	SpaceAfter=No
20	中	_	PART	_	_	18	case	_	SpaceAfter=No
21	，	_	PUNCT	_	_	18	punct	_	SpaceAfter=No
22	所述	_	ADJ	_	_	24	amod	_	SpaceAfter=No
23	弯曲	_	ADJ	_	_	24	amod	_	SpaceAfter=No
24	工况	_	NOUN	_	_	25	nsubj	_	SpaceAfter=No
25	包括	_	VERB	_	_	15	ccomp	_	SpaceAfter=No
26	：	_	PUNCT	_	_	11	punct	_	SpaceAfter=No

~~~


