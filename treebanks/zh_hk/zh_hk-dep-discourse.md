---
layout: base
title:  'Statistics of discourse in UD_Chinese-HK'
udver: '2'
---

## Treebank Statistics: UD_Chinese-HK: Relations: `discourse`

This relation is universal.
There are 1 language-specific subtypes of `discourse`: <tt><a href="zh_hk-dep-discourse-sp.html">discourse:sp</a></tt>.

7 nodes (0%) are attached to their parents as `discourse`.

6 instances of `discourse` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71428571428571.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-ADV.html">ADV</a></tt> (3; 43% instances), <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-INTJ.html">INTJ</a></tt> (2; 29% instances), <tt><a href="zh_hk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_hk-pos-INTJ.html">INTJ</a></tt> (1; 14% instances), <tt><a href="zh_hk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	那	_	ADV	_	_	3	discourse	_	SpaceAfter=No
2	我	_	PRON	_	_	3	nsubj	_	SpaceAfter=No
3	去	_	VERB	_	_	0	root	_	SpaceAfter=No
4	拿	_	VERB	_	_	3	conj	_	SpaceAfter=No
5	給	_	ADP	_	_	6	case	_	SpaceAfter=No
6	你	_	PRON	_	_	4	obl	_	SpaceAfter=No
7	。	_	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	唉呀	唉呀	INTJ	_	_	5	discourse	_	SpaceAfter=No
2	！	！	PUNCT	_	_	1	punct	_	SpaceAfter=No
3	這	這	DET	_	_	4	det	_	SpaceAfter=No
4	個	個	NOUN	_	_	5	dislocated	_	SpaceAfter=No
5	沒有	沒有	VERB	_	_	0	root	_	SpaceAfter=No
6	人	人	NOUN	_	_	5	obj	_	SpaceAfter=No
7	贊成	贊成	VERB	_	_	6	acl	_	SpaceAfter=No
8	的	的	PART	_	_	5	discourse:sp	_	SpaceAfter=No
9	！	！	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 discourse	color:blue
1	突然	突然	ADV	_	_	2	advmod	_	SpaceAfter=No
2	覺得	覺得	VERB	_	_	0	root	_	SpaceAfter=No
3	香港	香港	PROPN	_	_	9	dislocated	_	SpaceAfter=No
4	⋯⋯	⋯⋯	PUNCT	_	_	3	punct	_	SpaceAfter=No
5	哇	哇	INTJ	_	_	9	discourse	_	SpaceAfter=No
6	！	！	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	租	租	NOUN	_	_	9	nsubj	_	SpaceAfter=No
8	又	又	ADV	_	_	9	advmod	_	SpaceAfter=No
9	貴	貴	ADJ	_	_	2	ccomp	_	SpaceAfter=No
10	，	，	PUNCT	_	_	13	punct	_	SpaceAfter=No
11	這	這	PRON	_	_	13	nsubj	_	SpaceAfter=No
12	又	又	ADV	_	_	13	advmod	_	SpaceAfter=No
13	貴	貴	ADJ	_	_	9	conj	_	SpaceAfter=No
14	，	，	PUNCT	_	_	17	punct	_	SpaceAfter=No
15	那	那	PRON	_	_	17	nsubj	_	SpaceAfter=No
16	又	又	ADV	_	_	17	advmod	_	SpaceAfter=No
17	貴	貴	ADJ	_	_	9	conj	_	SpaceAfter=No
18	。	。	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


