---
layout: base
title:  'Statistics of cc in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `cc`

This relation is universal.

49 nodes (2%) are attached to their parents as `cc`.

49 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 5 pairs of parts of speech are connected with `cc`: <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-CCONJ.html">CCONJ</a></tt> (32; 65% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-CCONJ.html">CCONJ</a></tt> (12; 24% instances), <tt><a href="zh_patentchar-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_patentchar-pos-CCONJ.html">CCONJ</a></tt> (2; 4% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-SCONJ.html">SCONJ</a></tt> (2; 4% instances), <tt><a href="zh_patentchar-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_patentchar-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 cc	color:blue
1	1.	_	PUNCT	_	_	7	punct	_	SpaceAfter=No
2	一种	_	NUM	_	_	5	nummod	_	SpaceAfter=No
3	封闭式	_	ADJ	_	_	5	amod	_	SpaceAfter=No
4	液冷	_	VERB	_	_	5	acl	_	SpaceAfter=No
5	服务器	_	NOUN	_	_	7	obj	_	SpaceAfter=No
6	，	_	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	包括	_	VERB	_	_	0	root	_	SpaceAfter=No
8	壳体	_	NOUN	_	_	7	obj	_	SpaceAfter=No
9	和	_	CCONJ	_	_	11	cc	_	SpaceAfter=No
10	服务器	_	NOUN	_	_	11	nmod	_	SpaceAfter=No
11	主板	_	NOUN	_	_	8	conj	_	SpaceAfter=No
12	；	_	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 cc	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	从	_	ADP	_	_	5	dep	_	SpaceAfter=No
2	vmcs_struct	_	PROPN	_	_	3	nmod	_	SpaceAfter=No
3	结构体	_	NOUN	_	_	1	obl:arg	_	SpaceAfter=No
4	中	_	PART	_	_	3	case	_	SpaceAfter=No
5	获取	_	VERB	_	_	0	root	_	SpaceAfter=No
6	ept	_	PROPN	_	_	7	nmod	_	SpaceAfter=No
7	指针	_	NOUN	_	_	5	obj	_	SpaceAfter=No
8	和	_	CCONJ	_	_	9	cc	_	SpaceAfter=No
9	guest	_	PROPN	_	_	7	conj	_	ExtPos=NOUN
10	cr3；	_	X	_	_	9	goeswith	_	SpaceAfter=No

~~~


