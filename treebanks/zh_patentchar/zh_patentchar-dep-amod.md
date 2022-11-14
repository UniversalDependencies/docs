---
layout: base
title:  'Statistics of amod in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `amod`

This relation is universal.

179 nodes (8%) are attached to their parents as `amod`.

179 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16759776536313.

The following 3 pairs of parts of speech are connected with `amod`: <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt> (171; 96% instances), <tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="zh_patentchar-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	所述	_	ADJ	_	_	3	amod	_	SpaceAfter=No
2	非	_	ADV	_	_	3	advmod	_	SpaceAfter=No
3	显示区	_	NOUN	_	_	4	nsubj	_	SpaceAfter=No
4	设置	_	VERB	_	_	0	root	_	SpaceAfter=No
5	有	_	AUX	_	_	4	ccomp	_	SpaceAfter=No
6	驱动	_	VERB	_	_	7	acl	_	SpaceAfter=No
7	电路	_	NOUN	_	_	5	obj	_	SpaceAfter=No
8	和	_	CCONJ	_	_	12	cc	_	SpaceAfter=No
9	多个	_	NUM	_	_	12	nummod	_	SpaceAfter=No
10	压感	_	ADJ	_	_	11	amod	_	SpaceAfter=No
11	触控	_	ADJ	_	_	12	amod	_	SpaceAfter=No
12	单元	_	NOUN	_	_	7	conj	_	SpaceAfter=No
13	；	_	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 amod	color:blue
1	其中	_	ADP	_	_	10	dep	_	SpaceAfter=No
2	，	_	PUNCT	_	_	1	punct	_	SpaceAfter=No
3	各	_	ADJ	_	_	5	amod	_	SpaceAfter=No
4	所述	_	ADJ	_	_	5	amod	_	SpaceAfter=No
5	DSP	_	PROPN	_	_	10	nsubj	_	SpaceAfter=No
6	分别	_	ADV	_	_	10	advmod	_	SpaceAfter=No
7	通过	_	ADP	_	_	9	case	_	SpaceAfter=No
8	HPI	_	PROPN	_	_	9	nmod	_	SpaceAfter=No
9	接口	_	NOUN	_	_	10	obl	_	SpaceAfter=No
10	连接	_	VERB	_	_	0	root	_	SpaceAfter=No
11	至	_	ADP	_	_	14	case	_	SpaceAfter=No
12	所述	_	ADJ	_	_	14	amod	_	SpaceAfter=No
13	后端	_	NOUN	_	_	14	nmod	_	SpaceAfter=No
14	FPGA。	_	PROPN	_	_	10	obl:arg	_	SpaceAfter=No

~~~


