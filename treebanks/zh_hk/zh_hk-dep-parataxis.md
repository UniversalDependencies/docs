---
layout: base
title:  'Statistics of parataxis in UD_Chinese-HK'
udver: '2'
---

## Treebank Statistics: UD_Chinese-HK: Relations: `parataxis`

This relation is universal.

41 nodes (2%) are attached to their parents as `parataxis`.

40 instances of `parataxis` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.53658536585366.

The following 11 pairs of parts of speech are connected with `parataxis`: <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-VERB.html">VERB</a></tt> (19; 46% instances), <tt><a href="zh_hk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_hk-pos-VERB.html">VERB</a></tt> (4; 10% instances), <tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_hk-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="zh_hk-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_hk-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-SYM.html">SYM</a></tt> (2; 5% instances), <tt><a href="zh_hk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_hk-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="zh_hk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_hk-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="zh_hk-pos-SYM.html">SYM</a></tt>-<tt><a href="zh_hk-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 parataxis	color:blue
1	他	_	PRON	_	_	9	nsubj	_	SpaceAfter=No
2	天天	_	ADV	_	_	9	advmod	_	SpaceAfter=No
3	在	_	ADP	_	_	5	case	_	SpaceAfter=No
4	新	_	ADJ	_	_	5	amod	_	SpaceAfter=No
5	家	_	NOUN	_	_	9	obl	_	SpaceAfter=No
6	與	_	ADP	_	_	7	case	_	SpaceAfter=No
7	女朋友	_	NOUN	_	_	9	obl	_	SpaceAfter=No
8	一起	_	ADV	_	_	9	advmod	_	SpaceAfter=No
9	煮菜	_	VERB	_	_	0	root	_	SpaceAfter=No
10	，	_	PUNCT	_	_	13	punct	_	SpaceAfter=No
11	都	_	ADV	_	_	13	advmod	_	SpaceAfter=No
12	不	_	ADV	_	_	13	advmod	_	SpaceAfter=No
13	管	_	VERB	_	_	9	parataxis	_	SpaceAfter=No
14	我們	_	PRON	_	_	13	obj	_	SpaceAfter=No
15	了	_	PART	_	_	13	discourse:sp	_	SpaceAfter=No
16	。	_	PUNCT	_	_	9	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	小心	_	ADJ	_	_	0	root	_	SpaceAfter=No
2	別	_	AUX	_	_	3	aux	_	SpaceAfter=No
3	跌	_	VERB	_	_	1	parataxis	_	SpaceAfter=No
4	出來	_	VERB	_	_	3	compound:dir	_	SpaceAfter=No
5	！	_	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 16 parataxis	color:blue
1	但	但	CCONJ	_	_	7	cc	_	SpaceAfter=No
2	我	我	PRON	_	_	7	nsubj	_	SpaceAfter=No
3	不	不	ADV	_	_	7	advmod	_	SpaceAfter=No
4	是	是	VERB	_	_	7	cop	_	SpaceAfter=No
5	那	那	DET	_	_	7	det	_	SpaceAfter=No
6	種	種	NOUN	_	_	5	clf	_	SpaceAfter=No
7	人	人	NOUN	_	_	0	root	_	SpaceAfter=No
8	，	，	PUNCT	_	_	16	punct	_	SpaceAfter=No
9	我	我	PRON	_	_	16	nsubj	_	SpaceAfter=No
10	就	就	ADV	_	_	16	advmod	_	SpaceAfter=No
11	是	是	VERB	_	_	16	cop	_	SpaceAfter=No
12	愛	愛	AUX	_	_	13	aux	_	SpaceAfter=No
13	出去	出去	VERB	_	_	16	acl	_	SpaceAfter=No
14	玩	玩	VERB	_	_	13	conj	_	SpaceAfter=No
15	的	的	PART	_	_	13	mark:rel	_	SpaceAfter=No
16	性格	性格	NOUN	_	_	7	parataxis	_	SpaceAfter=No
17	。	。	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


