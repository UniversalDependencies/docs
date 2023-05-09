---
layout: base
title:  'Statistics of obl:arg in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="zh_patentchar-dep-obl.html">obl</a></tt>.

36 nodes (2%) are attached to their parents as `obl:arg`.

32 instances of `obl:arg` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.30555555555556.

The following 9 pairs of parts of speech are connected with `obl:arg`: <tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (13; 36% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (10; 28% instances), <tt><a href="zh_patentchar-pos-AUX.html">AUX</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-PART.html">PART</a></tt> (3; 8% instances), <tt><a href="zh_patentchar-pos-PART.html">PART</a></tt>-<tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt> (2; 6% instances), <tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_patentchar-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="zh_patentchar-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:arg	color:blue
1	所述	_	ADJ	_	_	3	amod	_	SpaceAfter=No
2	服务器	_	NOUN	_	_	3	nmod	_	SpaceAfter=No
3	主板	_	NOUN	_	_	4	nsubj	_	SpaceAfter=No
4	设置	_	VERB	_	_	0	root	_	SpaceAfter=No
5	在	_	ADP	_	_	4	dep	_	SpaceAfter=No
6	壳体	_	NOUN	_	_	5	obl:arg	_	SpaceAfter=No
7	中	_	PART	_	_	6	case	_	SpaceAfter=No
8	，	_	PUNCT	_	_	13	punct	_	SpaceAfter=No
9	壳体	_	NOUN	_	_	12	nmod	_	SpaceAfter=No
10	内	_	PART	_	_	9	case	_	SpaceAfter=No
11	的	_	PART	_	_	9	case	_	SpaceAfter=No
12	制冷剂	_	NOUN	_	_	13	nsubj	_	SpaceAfter=No
13	浸没	_	VERB	_	_	4	parataxis	_	SpaceAfter=No
14	服务器	_	NOUN	_	_	15	nmod	_	SpaceAfter=No
15	主板	_	NOUN	_	_	13	obj	_	SpaceAfter=No
16	；	_	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 obl:arg	color:blue
1	其中	_	ADP	_	_	6	dep	_	SpaceAfter=No
2	，	_	PUNCT	_	_	1	punct	_	SpaceAfter=No
3	所述	_	ADJ	_	_	5	amod	_	SpaceAfter=No
4	图层	_	NOUN	_	_	5	nmod	_	SpaceAfter=No
5	界面	_	NOUN	_	_	6	nsubj	_	SpaceAfter=No
6	显示	_	VERB	_	_	0	root	_	SpaceAfter=No
7	在	_	ADP	_	_	11	case	_	SpaceAfter=No
8	基础	_	ADJ	_	_	9	amod	_	SpaceAfter=No
9	地图	_	NOUN	_	_	11	nmod	_	SpaceAfter=No
10	的	_	PART	_	_	9	case	_	SpaceAfter=No
11	上方	_	NOUN	_	_	6	obl:arg	_	SpaceAfter=No
12	。	_	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 21 obl:arg	color:blue
1	分别	_	ADV	_	_	2	advmod	_	SpaceAfter=No
2	将	_	ADV	_	_	0	root	_	SpaceAfter=No
3	所述	_	ADJ	_	_	9	amod	_	SpaceAfter=No
4	当前	_	ADJ	_	_	5	amod	_	SpaceAfter=No
5	时刻	_	NOUN	_	_	9	nmod	_	SpaceAfter=No
6	的	_	PART	_	_	5	case	_	SpaceAfter=No
7	发电机	_	NOUN	_	_	8	nmod	_	SpaceAfter=No
8	功率	_	NOUN	_	_	9	nmod	_	SpaceAfter=No
9	累积值	_	NOUN	_	_	2	obj	_	SpaceAfter=No
10	和	_	CCONJ	_	_	16	cc	_	SpaceAfter=No
11	当前	_	ADJ	_	_	12	amod	_	SpaceAfter=No
12	时刻	_	NOUN	_	_	13	obl	_	SpaceAfter=No
13	的	_	PART	_	_	15	advmod	_	SpaceAfter=No
14	燃煤	_	VERB	_	_	15	acl	_	SpaceAfter=No
15	流量	_	NOUN	_	_	16	nmod	_	SpaceAfter=No
16	累积值	_	NOUN	_	_	9	conj	_	SpaceAfter=No
17	存储	_	VERB	_	_	2	ccomp	_	SpaceAfter=No
18	到	_	AUX	_	_	17	ccomp	_	SpaceAfter=No
19	预设	_	VERB	_	_	21	acl	_	SpaceAfter=No
20	的	_	PART	_	_	19	mark	_	ExtPos=PART|SpaceAfter=No
21	存储器	_	NOUN	_	_	18	obl:arg	_	SpaceAfter=No
22	中	_	PART	_	_	21	case	_	ExtPos=PART|SpaceAfter=No
23	；	_	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


