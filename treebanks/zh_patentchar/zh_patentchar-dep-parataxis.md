---
layout: base
title:  'Statistics of parataxis in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `parataxis`

This relation is universal.

52 nodes (2%) are attached to their parents as `parataxis`.

52 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.3653846153846.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt> (33; 63% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt> (18; 35% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 13 parataxis	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 parataxis	color:blue
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
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 44 parataxis	color:blue
1	在	_	ADP	_	_	6	dep	_	SpaceAfter=No
2	内核	_	NOUN	_	_	4	nmod	_	SpaceAfter=No
3	符号表	_	NOUN	_	_	4	nmod	_	SpaceAfter=No
4	文件	_	NOUN	_	_	1	obl:arg	_	SpaceAfter=No
5	中	_	PART	_	_	4	case	_	SpaceAfter=No
6	搜索	_	VERB	_	_	0	root	_	SpaceAfter=No
7	获取	_	VERB	_	_	6	ccomp	_	SpaceAfter=No
8	paddr_vmcoreinfo_xen	_	PROPN	_	_	10	nmod	_	SpaceAfter=No
9	的	_	PART	_	_	8	case	_	SpaceAfter=No
10	值	_	NOUN	_	_	7	obj	_	SpaceAfter=No
11	，	_	PUNCT	_	_	20	punct	_	SpaceAfter=No
12	将	_	ADP	_	_	15	case	_	SpaceAfter=No
13	paddr_vmcoreinfo_xen	_	PROPN	_	_	20	obl	_	SpaceAfter=No
14	的	_	PART	_	_	13	case	_	SpaceAfter=No
15	值	_	NOUN	_	_	20	obj	_	SpaceAfter=No
16	和	_	CCONJ	_	_	19	cc	_	SpaceAfter=No
17	DIRECTMAP_VIRT_START	_	PROPN	_	_	19	nmod	_	SpaceAfter=No
18	的	_	PART	_	_	17	case	_	SpaceAfter=No
19	值	_	NOUN	_	_	15	conj	_	SpaceAfter=No
20	进行	_	VERB	_	_	6	parataxis	_	SpaceAfter=No
21	做差	_	VERB	_	_	22	advcl	_	SpaceAfter=No
22	运算	_	VERB	_	_	20	ccomp	_	SpaceAfter=No
23	，	_	PUNCT	_	_	24	punct	_	SpaceAfter=No
24	得	_	VERB	_	_	20	conj	_	ExtPos=VERB|SpaceAfter=No
25	到	_	AUX	_	_	24	ccomp	_	SpaceAfter=No
26	paddr_vmcoreinfo_xen	_	PROPN	_	_	29	nmod	_	SpaceAfter=No
27	的	_	PART	_	_	26	case	_	SpaceAfter=No
28	物理	_	NOUN	_	_	29	nmod	_	SpaceAfter=No
29	地址	_	NOUN	_	_	24	obj	_	SpaceAfter=No
30	，	_	PUNCT	_	_	44	punct	_	SpaceAfter=No
31	根据	_	ADP	_	_	43	case	_	SpaceAfter=No
32	paddr_vmcoreinfo_xen	_	PROPN	_	_	35	nmod	_	SpaceAfter=No
33	的	_	PART	_	_	32	case	_	SpaceAfter=No
34	物理	_	NOUN	_	_	35	nmod	_	SpaceAfter=No
35	地址	_	NOUN	_	_	41	nsubj	_	SpaceAfter=No
36	在	_	ADP	_	_	41	dep	_	SpaceAfter=No
37	内存	_	NOUN	_	_	39	nmod	_	SpaceAfter=No
38	镜像	_	NOUN	_	_	39	nmod	_	SpaceAfter=No
39	文件	_	NOUN	_	_	36	obl:arg	_	SpaceAfter=No
40	中	_	PART	_	_	39	case	_	SpaceAfter=No
41	指向	_	VERB	_	_	43	acl	_	SpaceAfter=No
42	的	_	PART	_	_	41	mark	_	SpaceAfter=No
43	值	_	NOUN	_	_	44	nmod	_	SpaceAfter=No
44	获取	_	NOUN	_	_	6	parataxis	_	SpaceAfter=No
45	到	_	AUX	_	_	44	ccomp	_	SpaceAfter=No
46	vmcoreinfo_xen	_	PROPN	_	_	47	nmod	_	SpaceAfter=No
47	内容	_	NOUN	_	_	50	nmod	_	SpaceAfter=No
48	的	_	PART	_	_	47	case	_	SpaceAfter=No
49	物理	_	NOUN	_	_	50	nmod	_	SpaceAfter=No
50	地址	_	NOUN	_	_	44	obj	_	SpaceAfter=No
51	；	_	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


