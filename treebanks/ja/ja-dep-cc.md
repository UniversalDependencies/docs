---
layout: base
title:  'Statistics of cc in UD_Japanese'
udver: '2'
---

## Treebank Statistics: UD_Japanese: Relations: `cc`

This relation is universal.

632 nodes (0%) are attached to their parents as `cc`.

632 instances of `cc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08386075949367.

The following 6 pairs of parts of speech are connected with `cc`: <tt><a href="ja-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja-pos-ADP.html">ADP</a></tt> (528; 84% instances), <tt><a href="ja-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja-pos-ADP.html">ADP</a></tt> (90; 14% instances), <tt><a href="ja-pos-NUM.html">NUM</a></tt>-<tt><a href="ja-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="ja-pos-VERB.html">VERB</a></tt>-<tt><a href="ja-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="ja-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ja-pos-PRON.html">PRON</a></tt>-<tt><a href="ja-pos-ADP.html">ADP</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cc	color:blue
1	建設	建設	VERB	_	_	2	amod	_	SpaceAfter=No
2	中	中	NOUN	_	_	5	nmod	_	SpaceAfter=No
3	や	や	ADP	_	_	2	cc	_	SpaceAfter=No
4	計画	計画	VERB	_	_	5	amod	_	SpaceAfter=No
5	中	中	NOUN	_	_	7	nmod	_	SpaceAfter=No
6	の	の	ADP	_	_	5	case	_	SpaceAfter=No
7	ライン	ライン	NOUN	_	_	12	nsubj	_	SpaceAfter=No
8	が	が	ADP	_	_	7	case	_	SpaceAfter=No
9	さらに	さらに	ADV	_	_	12	advmod	_	SpaceAfter=No
10	8	8	NUM	_	NumType=Card	12	nummod	_	SpaceAfter=No
11	つ	つ	NOUN	_	_	10	mark	_	SpaceAfter=No
12	ある	ある	VERB	_	_	14	ccomp	_	SpaceAfter=No
13	と	と	ADP	_	_	12	case	_	SpaceAfter=No
14	いう	いう	VERB	_	_	0	root	_	SpaceAfter=No
15	。	。	PUNCT	_	_	14	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	府中	府中	PROPN	_	_	3	nmod	_	SpaceAfter=No
2	や	や	ADP	_	_	1	cc	_	SpaceAfter=No
3	国立	国立	NOUN	_	_	5	nmod	_	SpaceAfter=No
4	の	の	ADP	_	_	3	case	_	SpaceAfter=No
5	辺り	辺り	NOUN	_	_	7	nmod	_	SpaceAfter=No
6	の	の	ADP	_	_	5	case	_	SpaceAfter=No
7	土地	土地	NOUN	_	_	9	nsubj	_	SpaceAfter=No
8	が	が	ADP	_	_	7	case	_	SpaceAfter=No
9	得意	得意	ADJ	_	_	22	acl	_	SpaceAfter=No
10	と	と	ADP	_	_	9	case	_	SpaceAfter=No
11	の	の	PART	_	_	9	case	_	SpaceAfter=No
12	こと	こと	NOUN	_	_	9	aux	_	SpaceAfter=No
13	で	で	ADP	_	_	9	case	_	SpaceAfter=No
14	、	、	PUNCT	_	_	9	punct	_	SpaceAfter=No
15	色々と	色々と	ADV	_	_	16	advmod	_	SpaceAfter=No
16	紹介	紹介	VERB	_	_	22	acl	_	SpaceAfter=No
17	し	する	AUX	_	_	16	aux	_	SpaceAfter=No
18	て	て	SCONJ	_	_	16	mark	_	SpaceAfter=No
19	もらう	もらう	AUX	_	_	16	aux	_	SpaceAfter=No
20	こと	こと	NOUN	_	_	16	aux	_	SpaceAfter=No
21	が	が	ADP	_	_	16	case	_	SpaceAfter=No
22	でき	できる	VERB	_	_	0	root	_	SpaceAfter=No
23	まし	ます	AUX	_	_	22	aux	_	SpaceAfter=No
24	た	た	AUX	_	_	22	aux	_	SpaceAfter=No
25	。	。	PUNCT	_	_	22	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 cc	color:blue
1	1	1	NUM	_	NumType=Card	5	nummod	_	SpaceAfter=No
2	階	階	NOUN	_	_	1	mark	_	SpaceAfter=No
3	や	や	ADP	_	_	1	cc	_	SpaceAfter=No
4	地下	地下	NOUN	_	_	5	compound	_	SpaceAfter=No
5	1	1	NUM	_	NumType=Card	16	obl	_	SpaceAfter=No
6	階	階	NOUN	_	_	5	mark	_	SpaceAfter=No
7	は	は	ADP	_	_	5	case	_	SpaceAfter=No
8	近隣	近隣	NOUN	_	_	12	nmod	_	SpaceAfter=No
9	の	の	ADP	_	_	8	case	_	SpaceAfter=No
10	サラリーマン	サラリーマン	NOUN	_	_	12	nmod	_	SpaceAfter=No
11	や	や	ADP	_	_	10	cc	_	SpaceAfter=No
12	OL	OL	NOUN	_	_	16	nsubj	_	SpaceAfter=No
13	が	が	ADP	_	_	12	case	_	SpaceAfter=No
14	普通	普通	ADJ	_	_	16	acl	_	SpaceAfter=No
15	に	だ	AUX	_	_	14	aux	_	SpaceAfter=No
16	通過	通過	VERB	_	_	0	root	_	SpaceAfter=No
17	し	する	AUX	_	_	16	aux	_	SpaceAfter=No
18	ます	ます	AUX	_	_	16	aux	_	SpaceAfter=No
19	。	。	PUNCT	_	_	16	punct	_	SpaceAfter=No

~~~


