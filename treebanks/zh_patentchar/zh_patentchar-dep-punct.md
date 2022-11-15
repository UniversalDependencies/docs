---
layout: base
title:  'Statistics of punct in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `punct`

This relation is universal.

255 nodes (12%) are attached to their parents as `punct`.

135 instances of `punct` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.09019607843137.

The following 9 pairs of parts of speech are connected with `punct`: <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-PUNCT.html">PUNCT</a></tt> (182; 71% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-PUNCT.html">PUNCT</a></tt> (57; 22% instances), <tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_patentchar-pos-PUNCT.html">PUNCT</a></tt> (4; 2% instances), <tt><a href="zh_patentchar-pos-PART.html">PART</a></tt>-<tt><a href="zh_patentchar-pos-PUNCT.html">PUNCT</a></tt> (4; 2% instances), <tt><a href="zh_patentchar-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_patentchar-pos-PUNCT.html">PUNCT</a></tt> (3; 1% instances), <tt><a href="zh_patentchar-pos-ADV.html">ADV</a></tt>-<tt><a href="zh_patentchar-pos-PUNCT.html">PUNCT</a></tt> (2; 1% instances), <tt><a href="zh_patentchar-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="zh_patentchar-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="zh_patentchar-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_patentchar-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="zh_patentchar-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="zh_patentchar-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 punct	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 punct	color:blue
1	1.	_	PUNCT	_	_	7	punct	_	SpaceAfter=No
2	一种	_	NUM	_	_	3	dep	_	SpaceAfter=No
3	变电站	_	NOUN	_	_	7	nmod	_	SpaceAfter=No
4	的	_	PART	_	_	3	case	_	ExtPos=PART|SpaceAfter=No
5	智能	_	NOUN	_	_	7	nmod	_	SpaceAfter=No
6	电子	_	NOUN	_	_	7	nmod	_	SpaceAfter=No
7	设备	_	NOUN	_	_	0	root	_	SpaceAfter=No
8	，	_	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	用于	_	VERB	_	_	7	parataxis	_	SpaceAfter=No
10	监视	_	VERB	_	_	9	ccomp	_	SpaceAfter=No
11	及	_	CCONJ	_	_	12	cc	_	SpaceAfter=No
12	分析	_	VERB	_	_	10	conj	_	SpaceAfter=No
13	智能	_	NOUN	_	_	14	nmod	_	SpaceAfter=No
14	变电站	_	NOUN	_	_	15	nsubj	_	SpaceAfter=No
15	产生	_	VERB	_	_	17	acl	_	SpaceAfter=No
16	的	_	PART	_	_	15	mark	_	SpaceAfter=No
17	信息	_	NOUN	_	_	10	obj	_	SpaceAfter=No
18	，	_	PUNCT	_	_	21	punct	_	SpaceAfter=No
19	其	_	PRON	_	_	20	nmod	_	SpaceAfter=No
20	特征	_	NOUN	_	_	21	nsubj	_	SpaceAfter=No
21	在于	_	VERB	_	_	7	parataxis	_	SpaceAfter=No
22	，	_	PUNCT	_	_	23	punct	_	SpaceAfter=No
23	包括	_	VERB	_	_	21	ccomp	_	SpaceAfter=No
24	：	_	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
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


