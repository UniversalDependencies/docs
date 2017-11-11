---
layout: base
title:  'Statistics of obl:patient in UD_Chinese-CFL'
udver: '2'
---

## Treebank Statistics: UD_Chinese-CFL: Relations: `obl:patient`

This relation is a language-specific subtype of <tt><a href="zh_cfl-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="zh_cfl-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="zh_cfl-dep-obl-tmod.html">obl:tmod</a></tt>.

7 nodes (0%) are attached to their parents as `obl:patient`.

7 instances of `obl:patient` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28571428571429.

The following 3 pairs of parts of speech are connected with `obl:patient`: <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt> (5; 71% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-PROPN.html">PROPN</a></tt> (1; 14% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl:patient	color:blue
1	我	我	PRON	_	_	3	nsubj	_	SpaceAfter=No
2	没	没	AUX	_	_	3	aux	_	SpaceAfter=No
3	告诉	告诉	VERB	_	_	0	root	_	SpaceAfter=No
4	父母	父母	NOUN	_	_	3	obj	_	SpaceAfter=No
5	而	而	CCONJ	_	_	9	cc	_	SpaceAfter=No
6	把	把	ADP	_	_	8	case	_	SpaceAfter=No
7	本	本	NOUN	_	_	8	det	_	SpaceAfter=No
8	信	信	NOUN	_	_	9	obl:patient	_	SpaceAfter=No
9	送	送	VERB	_	_	3	conj	_	SpaceAfter=No
10	给	给	ADP	_	_	12	mark	_	SpaceAfter=No
11	总统	总统	NOUN	_	_	12	nsubj	_	SpaceAfter=No
12	看	看	VERB	_	_	9	advcl	_	SpaceAfter=No
13	。	。	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obl:patient	color:blue
1	讲	讲	VERB	_	_	8	advcl	_	SpaceAfter=No
2	为什么	为什么	ADV	_	_	3	advmod	_	SpaceAfter=No
3	感动	感动	ADJ	_	_	1	ccomp	_	SpaceAfter=No
4	之前	之前	ADP	_	_	1	mark	_	SpaceAfter=No
5	，	，	PUNCT	_	_	1	punct	_	SpaceAfter=No
6	把	把	ADP	_	_	7	case	_	SpaceAfter=No
7	麦加	麦加	PROPN	_	_	8	obl:patient	_	SpaceAfter=No
8	介绍	介绍	VERB	_	_	0	root	_	SpaceAfter=No
9	一下	一下	ADV	_	_	8	advmod	_	SpaceAfter=No
10	。	。	PUNCT	_	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 16 obl:patient	color:blue
1	穆斯林人	穆斯林人	NOUN	_	_	2	nsubj	_	SpaceAfter=No
2	相信	相信	VERB	_	_	0	root	_	SpaceAfter=No
3	第一	第一	NUM	_	_	4	amod	_	SpaceAfter=No
4	次	次	NOUN	_	_	5	obl:tmod	_	SpaceAfter=No
5	看	看	VERB	_	_	9	advcl	_	SpaceAfter=No
6	见	见	VERB	_	_	5	compound:vv	_	SpaceAfter=No
7	克尔白	克尔白	PROPN	_	_	5	obj	_	SpaceAfter=No
8	时	时	ADP	_	_	5	mark	_	SpaceAfter=No
9	想	想	VERB	_	_	19	advcl	_	SpaceAfter=No
10	什么	什么	PRON	_	_	9	obj	_	SpaceAfter=No
11	，	，	PUNCT	_	_	9	punct	_	SpaceAfter=No
12	真主	真主	PROPN	_	_	19	nsubj	_	SpaceAfter=No
13	肯定	肯定	ADV	_	_	19	advmod	_	SpaceAfter=No
14	将	将	ADP	_	_	16	case	_	SpaceAfter=No
15	你	你	PRON	_	_	16	nsubj	_	SpaceAfter=No
16	想	想	VERB	_	_	19	obl:patient	_	SpaceAfter=No
17	的	的	PART	_	_	16	mark:rel	_	SpaceAfter=No
18	就	就	ADV	_	_	19	advmod	_	SpaceAfter=No
19	给	给	VERB	_	_	2	ccomp	_	SpaceAfter=No
20	你	你	PRON	_	_	19	obj	_	SpaceAfter=No
21	。	。	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


