---
layout: base
title:  'Statistics of parataxis in UD_Chinese-CFL'
udver: '2'
---

## Treebank Statistics: UD_Chinese-CFL: Relations: `parataxis`

This relation is universal.

175 nodes (2%) are attached to their parents as `parataxis`.

169 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.0342857142857.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt> (103; 59% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt> (22; 13% instances), <tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt> (15; 9% instances), <tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-PUNCT.html">PUNCT</a></tt> (3; 2% instances), <tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="zh_cfl-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="zh_cfl-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="zh_cfl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="zh_cfl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="zh_cfl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 parataxis	color:blue
1	我们	我们	PRON	_	_	5	nsubj	_	SpaceAfter=No
2	不	不	ADV	_	_	3	advmod	_	SpaceAfter=No
3	顺畅	顺畅	ADJ	_	_	5	advmod	_	SpaceAfter=No
4	的	的	PART	_	_	3	mark:rel	_	SpaceAfter=No
5	聊	聊	VERB	_	_	0	root	_	SpaceAfter=No
6	着	着	AUX	_	_	5	aux	_	SpaceAfter=No
7	聊	聊	VERB	_	_	5	conj	_	SpaceAfter=No
8	着	着	AUX	_	_	7	aux	_	SpaceAfter=No
9	跟	跟	ADP	_	_	12	case	_	SpaceAfter=No
10	一	一	NUM	_	_	12	nummod	_	SpaceAfter=No
11	个	个	NOUN	_	_	10	clf	_	SpaceAfter=No
12	女生	女生	NOUN	_	_	13	obl	_	SpaceAfter=No
13	亲密	亲密	VERB	_	_	5	parataxis	_	SpaceAfter=No
14	起来	起来	AUX	_	_	13	aux	_	SpaceAfter=No
15	。	。	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 19 parataxis	color:blue
1	虽	虽	SCONJ	_	_	2	mark	_	SpaceAfter=No
2	舍	舍	VERB	_	_	16	advcl	_	SpaceAfter=No
3	不	不	ADV	_	_	4	advmod	_	SpaceAfter=No
4	得	得	VERB	_	_	2	compound:vv	_	SpaceAfter=No
5	离开	离开	VERB	_	_	2	xcomp	_	SpaceAfter=No
6	这么	这么	ADV	_	_	7	advmod	_	SpaceAfter=No
7	好	好	ADJ	_	_	9	amod	_	SpaceAfter=No
8	的	的	PART	_	_	7	mark:rel	_	SpaceAfter=No
9	地方	地方	NOUN	_	_	5	obj	_	SpaceAfter=No
10	，	，	PUNCT	_	_	2	punct	_	SpaceAfter=No
11	但	但	ADV	_	_	16	advmod	_	SpaceAfter=No
12	在	在	ADP	_	_	13	case	_	SpaceAfter=No
13	家	家	NOUN	_	_	15	nmod	_	SpaceAfter=No
14	的	的	PART	_	_	13	case	_	SpaceAfter=No
15	父母	父母	NOUN	_	_	16	nsubj	_	SpaceAfter=No
16	等	等	VERB	_	_	0	root	_	SpaceAfter=No
17	我	我	PRON	_	_	16	obj	_	SpaceAfter=No
18	，	，	PUNCT	_	_	19	punct	_	SpaceAfter=No
19	无可奈何	无可奈何	ADJ	_	_	16	parataxis	_	SpaceAfter=No
20	。	。	PUNCT	_	_	16	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 parataxis	color:blue
1	麦加	麦加	PROPN	_	_	6	nsubj	_	SpaceAfter=No
2	是	是	AUX	_	_	6	cop	_	SpaceAfter=No
3	伊斯兰教	伊斯兰教	NOUN	_	_	6	nmod	_	SpaceAfter=No
4	最	最	ADV	_	_	5	advmod	_	SpaceAfter=No
5	神圣	神圣	ADJ	_	_	6	amod	_	SpaceAfter=No
6	城市	城市	NOUN	_	_	0	root	_	SpaceAfter=No
7	，	，	PUNCT	_	_	10	punct	_	SpaceAfter=No
8	先知	先知	NOUN	_	_	9	compound	_	SpaceAfter=No
9	穆斯林人	穆斯林人	NOUN	_	_	10	nsubj	_	SpaceAfter=No
10	去	去	VERB	_	_	6	parataxis	_	SpaceAfter=No
11	麦加	麦加	PROPN	_	_	10	obj	_	SpaceAfter=No
12	。	。	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


