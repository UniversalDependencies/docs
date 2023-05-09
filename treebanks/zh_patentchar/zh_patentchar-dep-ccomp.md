---
layout: base
title:  'Statistics of ccomp in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `ccomp`

This relation is universal.

79 nodes (4%) are attached to their parents as `ccomp`.

73 instances of `ccomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.60759493670886.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt> (48; 61% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-AUX.html">AUX</a></tt> (21; 27% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="zh_patentchar-pos-ADV.html">ADV</a></tt>-<tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="zh_patentchar-pos-PART.html">PART</a></tt>-<tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 ccomp	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 ccomp	color:blue
1	所述	_	ADJ	_	_	2	amod	_	SpaceAfter=No
2	壳体	_	NOUN	_	_	3	obl	_	SpaceAfter=No
3	内	_	PART	_	_	4	advmod	_	SpaceAfter=No
4	容纳	_	VERB	_	_	0	root	_	SpaceAfter=No
5	有	_	AUX	_	_	4	ccomp	_	SpaceAfter=No
6	制冷剂	_	NOUN	_	_	4	obj	_	SpaceAfter=No
7	；	_	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 ccomp	color:blue
1	根据	_	ADP	_	_	11	case	_	SpaceAfter=No
2	用户	_	NOUN	_	_	8	nmod	_	SpaceAfter=No
3	在	_	ADP	_	_	8	dep	_	SpaceAfter=No
4	预定	_	ADJ	_	_	5	amod	_	SpaceAfter=No
5	时间段	_	NOUN	_	_	3	obl:arg	_	SpaceAfter=No
6	内	_	PART	_	_	5	case	_	SpaceAfter=No
7	通信	_	VERB	_	_	8	ccomp	_	SpaceAfter=No
8	行为	_	NOUN	_	_	9	nsubj	_	SpaceAfter=No
9	发生	_	VERB	_	_	11	acl	_	SpaceAfter=No
10	的	_	PART	_	_	9	mark	_	SpaceAfter=No
11	位置	_	NOUN	_	_	14	obl	_	SpaceAfter=No
12	和	_	CCONJ	_	_	13	cc	_	SpaceAfter=No
13	时间	_	NOUN	_	_	11	conj	_	SpaceAfter=No
14	计算	_	VERB	_	_	0	root	_	SpaceAfter=No
15	用户	_	NOUN	_	_	16	nsubj	_	SpaceAfter=No
16	相对	_	VERB	_	_	22	acl	_	SpaceAfter=No
17	于	_	ADP	_	_	18	case	_	SpaceAfter=No
18	基站	_	NOUN	_	_	16	obl:arg	_	SpaceAfter=No
19	的	_	PART	_	_	16	mark	_	SpaceAfter=No
20	基站	_	NOUN	_	_	22	nmod	_	SpaceAfter=No
21	常用	_	ADJ	_	_	22	amod	_	SpaceAfter=No
22	指数	_	NOUN	_	_	14	obj	_	SpaceAfter=No
23	；	_	PUNCT	_	_	14	punct	_	SpaceAfter=No

~~~


