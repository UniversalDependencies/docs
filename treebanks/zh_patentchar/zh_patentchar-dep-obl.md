---
layout: base
title:  'Statistics of obl in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="zh_patentchar-dep-obl-arg.html">obl:arg</a></tt>.

117 nodes (5%) are attached to their parents as `obl`.

117 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.72649572649573.

The following 6 pairs of parts of speech are connected with `obl`: <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (98; 84% instances), <tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (6; 5% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="zh_patentchar-pos-PART.html">PART</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 obl	color:blue
1	接收	_	VERB	_	_	0	root	_	SpaceAfter=No
2	在轨	_	ADJ	_	_	3	amod	_	SpaceAfter=No
3	卫星	_	NOUN	_	_	7	nmod	_	SpaceAfter=No
4	的	_	PART	_	_	3	case	_	SpaceAfter=No
5	遥测	_	NOUN	_	_	6	nmod	_	SpaceAfter=No
6	参数	_	NOUN	_	_	7	nmod	_	SpaceAfter=No
7	数据	_	NOUN	_	_	1	obj	_	SpaceAfter=No
8	，	_	PUNCT	_	_	1	punct	_	SpaceAfter=No
9	根据	_	ADP	_	_	12	case	_	SpaceAfter=No
10	关联	_	VERB	_	_	11	acl	_	SpaceAfter=No
11	关系	_	NOUN	_	_	12	nmod	_	SpaceAfter=No
12	模型	_	NOUN	_	_	13	obl	_	SpaceAfter=No
13	计算	_	VERB	_	_	1	conj	_	SpaceAfter=No
14	遥测	_	VERB	_	_	15	acl	_	SpaceAfter=No
15	参数	_	NOUN	_	_	19	nmod	_	SpaceAfter=No
16	之间	_	PART	_	_	15	case	_	SpaceAfter=No
17	的	_	PART	_	_	15	case	_	SpaceAfter=No
18	互信息	_	NOUN	_	_	19	nmod	_	SpaceAfter=No
19	系数	_	NOUN	_	_	13	obj	_	SpaceAfter=No
20	；	_	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obl	color:blue
1	2.	_	PUNCT	_	_	12	punct	_	SpaceAfter=No
2	根据	_	ADP	_	_	4	case	_	SpaceAfter=No
3	权利	_	NOUN	_	_	4	nmod	_	SpaceAfter=No
4	要求	_	NOUN	_	_	6	obl	_	SpaceAfter=No
5	1	_	NUM	_	_	4	nmod	_	SpaceAfter=No
6	所述	_	ADJ	_	_	12	dep	_	SpaceAfter=No
7	的	_	PART	_	_	8	advmod	_	SpaceAfter=No
8	变电站	_	NOUN	_	_	12	nmod	_	SpaceAfter=No
9	的	_	PART	_	_	8	case	_	SpaceAfter=No
10	智能	_	NOUN	_	_	12	nmod	_	SpaceAfter=No
11	电子	_	NOUN	_	_	12	nmod	_	SpaceAfter=No
12	设备	_	NOUN	_	_	0	root	_	SpaceAfter=No
13	，	_	PUNCT	_	_	16	punct	_	SpaceAfter=No
14	其	_	PRON	_	_	15	nmod	_	SpaceAfter=No
15	特征	_	NOUN	_	_	16	nsubj	_	SpaceAfter=No
16	在于	_	VERB	_	_	12	parataxis	_	SpaceAfter=No
17	：	_	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl	color:blue
1	1.	_	PUNCT	_	_	6	punct	_	SpaceAfter=No
2	一种	_	NUM	_	_	5	obl	_	SpaceAfter=No
3	电子	_	NOUN	_	_	4	nmod	_	SpaceAfter=No
4	地图	_	NOUN	_	_	5	obl	_	SpaceAfter=No
5	索引	_	VERB	_	_	6	acl	_	SpaceAfter=No
6	方法	_	NOUN	_	_	0	root	_	SpaceAfter=No
7	，	_	PUNCT	_	_	10	punct	_	SpaceAfter=No
8	其	_	PRON	_	_	9	nmod	_	SpaceAfter=No
9	特征	_	NOUN	_	_	10	nsubj	_	SpaceAfter=No
10	在于	_	VERB	_	_	6	parataxis	_	SpaceAfter=No
11	，	_	PUNCT	_	_	12	punct	_	SpaceAfter=No
12	包括	_	VERB	_	_	10	ccomp	_	SpaceAfter=No
13	：	_	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


