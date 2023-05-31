---
layout: base
title:  'Statistics of nsubj in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `nsubj`

This relation is universal.

92 nodes (4%) are attached to their parents as `nsubj`.

92 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.30434782608696.

The following 6 pairs of parts of speech are connected with `nsubj`: <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (83; 90% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="zh_patentchar-pos-ADV.html">ADV</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nsubj	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 nsubj	color:blue
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


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 nsubj	color:blue
1	判断	_	VERB	_	_	0	root	_	SpaceAfter=No
2	所述	_	ADJ	_	_	7	amod	_	SpaceAfter=No
3	第一	_	DET	_	_	4	dep	_	SpaceAfter=No
4	发电机	_	NOUN	_	_	5	nmod	_	SpaceAfter=No
5	功率	_	NOUN	_	_	7	nmod	_	SpaceAfter=No
6	累积	_	VERB	_	_	7	acl	_	SpaceAfter=No
7	值	_	NOUN	_	_	8	nsubj	_	ExtPos=NOUN|SpaceAfter=No
8	是否	_	ADV	_	_	1	dep	_	SpaceAfter=No
9	超过	_	VERB	_	_	8	ccomp	_	SpaceAfter=No
10	了	_	PART	_	_	9	obl:arg	_	SpaceAfter=No
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
24	了	_	PART	_	_	23	obl:arg	_	SpaceAfter=No
25	预设	_	VERB	_	_	28	acl	_	SpaceAfter=No
26	的	_	PART	_	_	25	mark	_	ExtPos=PART|SpaceAfter=No
27	第二	_	NUM	_	_	28	nummod	_	SpaceAfter=No
28	阈值	_	NOUN	_	_	23	obj	_	SpaceAfter=No
29	；	_	PUNCT	_	_	8	punct	_	SpaceAfter=No

~~~


