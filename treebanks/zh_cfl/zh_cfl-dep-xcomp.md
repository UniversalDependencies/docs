---
layout: base
title:  'Statistics of xcomp in UD_Chinese-CFL'
udver: '2'
---

## Treebank Statistics: UD_Chinese-CFL: Relations: `xcomp`

This relation is universal.

128 nodes (2%) are attached to their parents as `xcomp`.

128 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.609375.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt> (85; 66% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt> (30; 23% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt> (7; 5% instances), <tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	就	就	ADV	_	_	2	advmod	_	SpaceAfter=No
2	是	是	VERB	_	_	0	root	_	SpaceAfter=No
3	学校	学校	NOUN	_	_	4	nsubj	_	SpaceAfter=No
4	带	带	VERB	_	_	2	ccomp	_	SpaceAfter=No
5	我们	我们	PRON	_	_	4	obj	_	SpaceAfter=No
6	留学生	留学生	NOUN	_	_	5	appos	_	SpaceAfter=No
7	去	去	VERB	_	_	4	xcomp	_	SpaceAfter=No
8	旅行	旅行	VERB	_	_	7	conj	_	SpaceAfter=No
9	。	。	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	时间	时间	NOUN	_	_	2	dislocated	_	SpaceAfter=No
2	过	过	VERB	_	_	0	root	_	SpaceAfter=No
3	得	得	PART	_	_	2	compound:ext	_	SpaceAfter=No
4	很	很	ADV	_	_	5	advmod	_	SpaceAfter=No
5	快	快	ADJ	_	_	2	xcomp	_	SpaceAfter=No
6	，	，	PUNCT	_	_	11	parataxis	_	SpaceAfter=No
7	我们	我们	PRON	_	_	8	nsubj	_	SpaceAfter=No
8	离开	离开	VERB	_	_	10	acl	_	SpaceAfter=No
9	的	的	PART	_	_	8	mark:rel	_	SpaceAfter=No
10	时间	时间	NOUN	_	_	11	nsubj	_	SpaceAfter=No
11	来	来	VERB	_	_	2	punct	_	SpaceAfter=No
12	了	了	PART	_	_	11	discourse:sp	_	SpaceAfter=No
13	。	。	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 xcomp	color:blue
1	在	在	ADP	_	_	4	case	_	SpaceAfter=No
2	面试	面试	NOUN	_	_	4	nmod	_	SpaceAfter=No
3	的	的	PART	_	_	2	mark:rel	_	SpaceAfter=No
4	时候	时候	NOUN	_	_	6	obl:tmod	_	SpaceAfter=No
5	他	他	PRON	_	_	6	nsubj	_	SpaceAfter=No
6	说	说	VERB	_	_	0	root	_	SpaceAfter=No
7	：	：	PUNCT	_	_	9	punct	_	SpaceAfter=No
8	“	“	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	让	让	VERB	_	_	6	parataxis	_	SpaceAfter=No
10	很	很	ADV	_	_	11	advmod	_	SpaceAfter=No
11	感动	感动	VERB	_	_	15	amod	_	SpaceAfter=No
12	的	的	PART	_	_	11	mark:rel	_	SpaceAfter=No
13	几	几	NUM	_	_	15	nummod	_	SpaceAfter=No
14	句	句	NOUN	_	_	13	clf	_	SpaceAfter=No
15	话	话	NOUN	_	_	9	xcomp	_	SpaceAfter=No
16	（	（	PUNCT	_	_	18	punct	_	SpaceAfter=No
17	我	我	PRON	_	_	18	nsubj	_	SpaceAfter=No
18	相信	相信	VERB	_	_	15	parataxis	_	SpaceAfter=No
19	明天	明天	NOUN	_	_	18	obj	_	SpaceAfter=No
20	，	，	PUNCT	_	_	24	punct	_	SpaceAfter=No
21	永远	永远	ADV	_	_	24	advmod	_	SpaceAfter=No
22	不	不	ADV	_	_	24	advmod	_	SpaceAfter=No
23	会	会	AUX	_	_	24	aux	_	SpaceAfter=No
24	放弃	放弃	VERB	_	_	18	conj	_	SpaceAfter=No
25	，	，	PUNCT	_	_	26	punct	_	SpaceAfter=No
26	渴望	渴望	NOUN	_	_	18	conj	_	SpaceAfter=No
27	生活	生活	NOUN	_	_	26	obj	_	SpaceAfter=No
28	）	）	PUNCT	_	_	18	punct	_	SpaceAfter=No
29	”	”	PUNCT	_	_	9	punct	_	SpaceAfter=No

~~~


