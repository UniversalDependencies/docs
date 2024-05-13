---
layout: base
title:  'Statistics of iobj in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `iobj`

This relation is universal.

11 nodes (1%) are attached to their parents as `iobj`.

8 instances of `iobj` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-PART.html">PART</a></tt> (3; 27% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt> (3; 27% instances), <tt><a href="zh_patentchar-pos-PART.html">PART</a></tt>-<tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt> (2; 18% instances), <tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_patentchar-pos-PART.html">PART</a></tt> (1; 9% instances), <tt><a href="zh_patentchar-pos-PART.html">PART</a></tt>-<tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 iobj	color:blue
1	判断	_	VERB	_	_	0	root	_	SpaceAfter=No
2	所述	_	ADJ	_	_	7	amod	_	SpaceAfter=No
3	第一	_	DET	_	_	4	dep	_	SpaceAfter=No
4	发电机	_	NOUN	_	_	5	nmod	_	SpaceAfter=No
5	功率	_	NOUN	_	_	7	nmod	_	SpaceAfter=No
6	累积	_	VERB	_	_	7	acl	_	SpaceAfter=No
7	值	_	NOUN	_	_	8	nsubj	_	ExtPos=NOUN|SpaceAfter=No
8	是否	_	ADV	_	_	1	dep	_	SpaceAfter=No
9	超过	_	VERB	_	_	8	ccomp	_	SpaceAfter=No
10	了	_	PART	_	_	9	iobj	_	SpaceAfter=No
11	预设	_	VERB	_	_	14	acl	_	SpaceAfter=No
12	的	_	PART	_	_	11	mark	_	ExtPos=PART|SpaceAfter=No
13	第一	_	NUM	_	_	14	nummod	_	SpaceAfter=No
14	阈值	_	NOUN	_	_	9	obj	_	SpaceAfter=No
15	，	_	PUNCT	_	_	17	punct	_	SpaceAfter=No
16	并	_	CCONJ	_	_	17	cc	_	ExtPos=ADV|SpaceAfter=No
17	判断	_	VERB	_	_	8	conj	_	SpaceAfter=No
18	所述	_	ADJ	_	_	21	amod	_	SpaceAfter=No
19	第二	_	NUM	_	_	20	nummod	_	SpaceAfter=No
20	发电机	_	NOUN	_	_	21	nmod	_	SpaceAfter=No
21	功率	_	NOUN	_	_	22	nsubj	_	SpaceAfter=No
22	是否	_	ADV	_	_	17	dep	_	SpaceAfter=No
23	超过	_	VERB	_	_	22	ccomp	_	SpaceAfter=No
24	了	_	PART	_	_	23	iobj	_	SpaceAfter=No
25	预设	_	VERB	_	_	28	acl	_	SpaceAfter=No
26	的	_	PART	_	_	25	mark	_	ExtPos=PART|SpaceAfter=No
27	第二	_	NUM	_	_	28	nummod	_	SpaceAfter=No
28	阈值	_	NOUN	_	_	23	obj	_	SpaceAfter=No
29	；	_	PUNCT	_	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 iobj	color:blue
1	判断	_	VERB	_	_	0	root	_	SpaceAfter=No
2	源	_	ADJ	_	_	3	amod	_	SpaceAfter=No
3	数据	_	NOUN	_	_	4	nsubj	_	SpaceAfter=No
4	是否	_	VERB	_	_	1	iobj	_	SpaceAfter=No
5	需要	_	VERB	_	_	4	iobj	_	SpaceAfter=No
6	创建	_	VERB	_	_	5	ccomp	_	SpaceAfter=No
7	快照	_	NOUN	_	_	6	obj	_	SpaceAfter=No
8	；	_	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 1 iobj	color:blue
1	当	_	ADP	_	_	17	iobj	_	SpaceAfter=No
2	所述	_	ADJ	_	_	4	amod	_	SpaceAfter=No
3	第一	_	NUM	_	_	4	dep	_	SpaceAfter=No
4	镜像	_	NOUN	_	_	7	nmod	_	SpaceAfter=No
5	中	_	PART	_	_	4	case	_	SpaceAfter=No
6	的	_	PART	_	_	4	case	_	SpaceAfter=No
7	数据	_	NOUN	_	_	10	nmod	_	SpaceAfter=No
8	的	_	PART	_	_	7	case	_	SpaceAfter=No
9	第一	_	NUM	_	_	10	dep	_	SpaceAfter=No
10	时间戳	_	NOUN	_	_	11	nsubj	_	SpaceAfter=No
11	大于	_	ADJ	_	_	1	dep	_	SpaceAfter=No
12	创建	_	VERB	_	_	16	acl	_	SpaceAfter=No
13	快照	_	NOUN	_	_	12	obj	_	SpaceAfter=No
14	的	_	PART	_	_	12	mark	_	SpaceAfter=No
15	第二	_	NUM	_	_	16	nummod	_	SpaceAfter=No
16	时间戳	_	NOUN	_	_	11	obj	_	SpaceAfter=No
17	时	_	PART	_	_	19	advmod	_	SpaceAfter=No
18	，	_	PUNCT	_	_	17	punct	_	SpaceAfter=No
19	停止	_	VERB	_	_	0	root	_	SpaceAfter=No
20	将	_	ADP	_	_	26	case	_	SpaceAfter=No
21	所述	_	ADJ	_	_	23	amod	_	SpaceAfter=No
22	第一	_	NUM	_	_	23	dep	_	SpaceAfter=No
23	镜像	_	NOUN	_	_	27	obl	_	SpaceAfter=No
24	中	_	PART	_	_	23	case	_	SpaceAfter=No
25	的	_	PART	_	_	23	case	_	SpaceAfter=No
26	数据	_	NOUN	_	_	27	obj	_	SpaceAfter=No
27	同步	_	VERB	_	_	19	iobj	_	SpaceAfter=No
28	到	_	AUX	_	_	27	ccomp	_	SpaceAfter=No
29	第二	_	NUM	_	_	30	nummod	_	SpaceAfter=No
30	镜像	_	NOUN	_	_	28	obj	_	SpaceAfter=No
31	；	_	PUNCT	_	_	19	punct	_	SpaceAfter=No

~~~


