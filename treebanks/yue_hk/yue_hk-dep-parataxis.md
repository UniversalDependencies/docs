---
layout: base
title:  'Statistics of parataxis in UD_Cantonese-HK'
udver: '2'
---

## Treebank Statistics: UD_Cantonese-HK: Relations: `parataxis`

This relation is universal.

143 nodes (1%) are attached to their parents as `parataxis`.

143 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.4755244755245.

The following 17 pairs of parts of speech are connected with `parataxis`: <tt><a href="yue_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="yue_hk-pos-VERB.html">VERB</a></tt> (97; 68% instances), <tt><a href="yue_hk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yue_hk-pos-VERB.html">VERB</a></tt> (13; 9% instances), <tt><a href="yue_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="yue_hk-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="yue_hk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yue_hk-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="yue_hk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yue_hk-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="yue_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="yue_hk-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="yue_hk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yue_hk-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="yue_hk-pos-ADV.html">ADV</a></tt>-<tt><a href="yue_hk-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="yue_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="yue_hk-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="yue_hk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yue_hk-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="yue_hk-pos-ADV.html">ADV</a></tt>-<tt><a href="yue_hk-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="yue_hk-pos-AUX.html">AUX</a></tt>-<tt><a href="yue_hk-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="yue_hk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yue_hk-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="yue_hk-pos-NUM.html">NUM</a></tt>-<tt><a href="yue_hk-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="yue_hk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yue_hk-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="yue_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="yue_hk-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="yue_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="yue_hk-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	你	你	PRON	_	_	2	nsubj	_	SpaceAfter=No
2	坐	坐	VERB	_	_	0	root	_	SpaceAfter=No
3	低	低	ADJ	_	_	2	compound:vv	_	SpaceAfter=No
4	，	，	PUNCT	_	_	2	punct	_	SpaceAfter=No
5	你	你	PRON	_	_	6	nsubj	_	SpaceAfter=No
6	坐	坐	VERB	_	_	2	parataxis	_	SpaceAfter=No
7	低	低	ADJ	_	_	6	compound:vv	_	SpaceAfter=No
8	！	！	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 parataxis	color:blue
1	依個	依個	PRON	_	_	7	nsubj	_	SpaceAfter=No
2	，	，	PUNCT	_	_	1	punct	_	SpaceAfter=No
3	全部	全部	ADV	_	_	7	advmod	_	SpaceAfter=No
4	都	都	ADV	_	_	7	advmod	_	SpaceAfter=No
5	自	自	ADJ	_	_	7	reparandum	_	SpaceAfter=No
6	-	-	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	自發性	自發性	ADJ	_	_	0	root	_	SpaceAfter=No
8	嘅	嘅	PART	_	_	7	mark:rel	_	SpaceAfter=No
9	。	。	PUNCT	_	_	7	punct	_	SpaceAfter=No
10	早	早	ADV	_	_	11	advmod	_	SpaceAfter=No
11	諗	諗	VERB	_	_	7	parataxis	_	SpaceAfter=No
12	起	起	VERB	_	_	11	compound:vv	_	SpaceAfter=No
13	嗰	嗰	DET	_	_	15	det	_	SpaceAfter=No
14	首	首	NOUN	_	NounType=Clf	13	clf	_	SpaceAfter=No
15	歌	歌	NOUN	_	_	11	obj	_	SpaceAfter=No
16	，	，	PUNCT	_	_	11	punct	_	SpaceAfter=No
17	係	係	VERB	_	_	11	conj	_	SpaceAfter=No
18	嗰	嗰	DET	_	_	20	det	_	SpaceAfter=No
19	首	首	NOUN	_	NounType=Clf	18	clf	_	SpaceAfter=No
20	歌	歌	NOUN	_	_	22	nsubj	_	SpaceAfter=No
21	可以	可以	AUX	_	_	22	aux	_	SpaceAfter=No
22	舒緩	舒緩	VERB	_	_	17	ccomp	_	SpaceAfter=No
23	我自己	我自己	PRON	_	_	22	obj	_	SpaceAfter=No
24	嘅	嘅	PART	_	_	17	discourse:sp	_	SpaceAfter=No
25	。	。	PUNCT	_	_	11	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	ＯＫ	ＯＫ	VERB	_	_	0	root	_	SpaceAfter=No
2	，	，	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	好	好	ADJ	_	_	1	parataxis	_	SpaceAfter=No
4	，	，	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	掰掰	掰掰	VERB	_	_	1	parataxis	_	SpaceAfter=No
6	！	！	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


