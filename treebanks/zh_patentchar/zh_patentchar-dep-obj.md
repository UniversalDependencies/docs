---
layout: base
title:  'Statistics of obj in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `obj`

This relation is universal.

134 nodes (6%) are attached to their parents as `obj`.

111 instances of `obj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.93283582089552.

The following 6 pairs of parts of speech are connected with `obj`: <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (110; 82% instances), <tt><a href="zh_patentchar-pos-AUX.html">AUX</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (14; 10% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="zh_patentchar-pos-ADV.html">ADV</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 obj	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 obj	color:blue
1	所述	_	NOUN	_	_	2	nmod	_	SpaceAfter=No
2	显示区	_	NOUN	_	_	3	nsubj	_	SpaceAfter=No
3	设置	_	VERB	_	_	0	root	_	SpaceAfter=No
4	有	_	AUX	_	_	3	ccomp	_	SpaceAfter=No
5	多个	_	NUM	_	_	10	nummod	_	SpaceAfter=No
6	自容式	_	NOUN	_	_	7	obl	_	SpaceAfter=No
7	触控	_	VERB	_	_	8	acl	_	SpaceAfter=No
8	位置	_	NOUN	_	_	9	obl	_	SpaceAfter=No
9	检测	_	VERB	_	_	10	acl	_	SpaceAfter=No
10	电极	_	NOUN	_	_	4	obj	_	SpaceAfter=No
11	；	_	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obj	color:blue
1	S2	_	X	_	_	0	root	_	SpaceAfter=No
2	、	_	PUNCT	_	_	7	punct	_	SpaceAfter=No
3	根据	_	ADP	_	_	4	case	_	SpaceAfter=No
4	对比结	_	NOUN	_	_	7	obl	_	SpaceAfter=No
5	果	_	NOUN	_	_	4	obj	_	SpaceAfter=No
6	，	_	PUNCT	_	_	4	punct	_	SpaceAfter=No
7	建立	_	VERB	_	_	1	appos	_	SpaceAfter=No
8	拓扑	_	NOUN	_	_	11	nmod	_	SpaceAfter=No
9	壳	_	NOUN	_	_	10	nmod	_	SpaceAfter=No
10	单元	_	NOUN	_	_	11	nmod	_	SpaceAfter=No
11	模型	_	NOUN	_	_	7	obj	_	SpaceAfter=No
12	，	_	PUNCT	_	_	13	punct	_	SpaceAfter=No
13	同时删	_	VERB	_	_	7	parataxis	_	SpaceAfter=No
14	除	_	VERB	_	_	13	conj	_	SpaceAfter=No
15	其中	_	ADP	_	_	18	dep	_	SpaceAfter=No
16	所有	_	DET	_	_	18	dep	_	SpaceAfter=No
17	梁	_	NOUN	_	_	18	nmod	_	SpaceAfter=No
18	单元	_	NOUN	_	_	13	obj	_	SpaceAfter=No
19	；	_	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


