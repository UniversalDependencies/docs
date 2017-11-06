---
layout: base
title:  'Statistics of conj in UD_Chinese-HK'
udver: '2'
---

## Treebank Statistics: UD_Chinese-HK: Relations: `conj`

This relation is universal.

83 nodes (4%) are attached to their parents as `conj`.

83 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.89156626506024.

The following 14 pairs of parts of speech are connected with `conj`: <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-VERB.html">VERB</a></tt> (41; 49% instances), <tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt> (12; 14% instances), <tt><a href="zh_hk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_hk-pos-ADJ.html">ADJ</a></tt> (6; 7% instances), <tt><a href="zh_hk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_hk-pos-VERB.html">VERB</a></tt> (5; 6% instances), <tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_hk-pos-NUM.html">NUM</a></tt> (5; 6% instances), <tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_hk-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="zh_hk-pos-SYM.html">SYM</a></tt>-<tt><a href="zh_hk-pos-SYM.html">SYM</a></tt> (3; 4% instances), <tt><a href="zh_hk-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_hk-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="zh_hk-pos-AUX.html">AUX</a></tt>-<tt><a href="zh_hk-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="zh_hk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_hk-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="zh_hk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_hk-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 conj	color:blue
1	收拾	_	VERB	_	_	0	root	_	SpaceAfter=No
2	好	_	ADJ	_	_	1	compound:vv	_	SpaceAfter=No
3	哥哥	_	NOUN	_	_	5	nmod	_	SpaceAfter=No
4	的	_	PART	_	_	3	case	_	SpaceAfter=No
5	物品	_	NOUN	_	_	1	obj	_	SpaceAfter=No
6	再	_	ADV	_	_	7	advmod	_	SpaceAfter=No
7	拿	_	VERB	_	_	1	conj	_	SpaceAfter=No
8	去	_	ADP	_	_	12	case	_	SpaceAfter=No
9	他	_	PRON	_	_	12	nmod	_	SpaceAfter=No
10	的	_	PART	_	_	9	case	_	SpaceAfter=No
11	新	_	ADJ	_	_	12	amod	_	SpaceAfter=No
12	家	_	NOUN	_	_	7	obl	_	SpaceAfter=No
13	。	_	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 conj	color:blue
1	三	_	NUM	_	_	2	nummod	_	SpaceAfter=No
2	歲	_	NOUN	_	_	7	nsubj	_	SpaceAfter=No
3	到	_	ADP	_	_	5	case	_	SpaceAfter=No
4	三十	_	NUM	_	_	5	nummod	_	SpaceAfter=No
5	歲	_	NOUN	_	_	2	conj	_	SpaceAfter=No
6	也	_	ADV	_	_	7	advmod	_	SpaceAfter=No
7	喜歡	_	VERB	_	_	0	root	_	SpaceAfter=No
8	。	_	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 conj	color:blue
1	唱歌	唱歌	VERB	_	_	3	dislocated	_	SpaceAfter=No
2	就	就	ADV	_	_	3	advmod	_	SpaceAfter=No
3	是	是	VERB	_	_	0	root	_	SpaceAfter=No
4	可以	可以	AUX	_	_	5	aux	_	SpaceAfter=No
5	抒發	抒發	VERB	_	_	3	ccomp	_	SpaceAfter=No
6	開心	開心	ADJ	_	_	5	obj	_	SpaceAfter=No
7	與	與	CCONJ	_	_	9	cc	_	SpaceAfter=No
8	不	不	ADV	_	_	9	advmod	_	SpaceAfter=No
9	快樂	快樂	ADJ	_	_	6	conj	_	SpaceAfter=No
10	的	的	PART	_	_	5	discourse:sp	_	SpaceAfter=No
11	。	。	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


