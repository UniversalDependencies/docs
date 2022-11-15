---
layout: base
title:  'Statistics of dep in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `dep`

This relation is universal.

53 nodes (2%) are attached to their parents as `dep`.

44 instances of `dep` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.16981132075472.

The following 12 pairs of parts of speech are connected with `dep`: <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt> (18; 34% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-NUM.html">NUM</a></tt> (11; 21% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-DET.html">DET</a></tt> (8; 15% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt> (4; 8% instances), <tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt> (3; 6% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_patentchar-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="zh_patentchar-pos-PART.html">PART</a></tt>-<tt><a href="zh_patentchar-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 dep	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	遍历	_	VERB	_	_	0	root	_	SpaceAfter=No
2	所有	_	DET	_	_	3	dep	_	SpaceAfter=No
3	卫星	_	NOUN	_	_	1	obj	_	SpaceAfter=No
4	S	_	PROPN	_	_	3	appos	_	SpaceAfter=No

~~~


