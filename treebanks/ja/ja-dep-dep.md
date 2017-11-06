---
layout: base
title:  'Statistics of dep in UD_Japanese'
udver: '2'
---

## Treebank Statistics: UD_Japanese: Relations: `dep`

This relation is universal.

22 nodes (0%) are attached to their parents as `dep`.

21 instances of `dep` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.45454545454545.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="ja-pos-VERB.html">VERB</a></tt>-<tt><a href="ja-pos-ADP.html">ADP</a></tt> (12; 55% instances), <tt><a href="ja-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja-pos-ADP.html">ADP</a></tt> (4; 18% instances), <tt><a href="ja-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="ja-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja-pos-PUNCT.html">PUNCT</a></tt> (1; 5% instances), <tt><a href="ja-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances), <tt><a href="ja-pos-PART.html">PART</a></tt>-<tt><a href="ja-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances), <tt><a href="ja-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ja-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="ja-pos-VERB.html">VERB</a></tt>-<tt><a href="ja-pos-SYM.html">SYM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	って	って	ADP	_	_	2	dep	_	SpaceAfter=No
2	言っ	言う	VERB	_	_	5	acl	_	SpaceAfter=No
3	て	て	SCONJ	_	_	2	mark	_	SpaceAfter=No
4	る	いる	AUX	_	_	2	aux	_	SpaceAfter=No
5	年齢不詳	年齢不詳	ADJ	_	_	0	root	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 dep	color:blue
1	長編	長編	NOUN	_	_	20	nsubj	_	SpaceAfter=No
2	は	は	ADP	_	_	1	case	_	SpaceAfter=No
3	『	『	PUNCT	_	_	5	punct	_	SpaceAfter=No
4	~	~	SYM	_	_	5	compound	_	SpaceAfter=No
5	事件	事件	NOUN	_	_	9	nmod	_	SpaceAfter=No
6	』	』	SYM	_	_	5	compound	_	SpaceAfter=No
7	、	、	PUNCT	_	_	5	punct	_	SpaceAfter=No
8	短	短	NOUN	_	_	9	amod	_	SpaceAfter=No
9	編集	編集	NOUN	_	_	20	nsubj	_	SpaceAfter=No
10	は	は	ADP	_	_	9	case	_	SpaceAfter=No
11	『	『	PUNCT	_	_	13	punct	_	SpaceAfter=No
12	狩野	狩野	PROPN	_	_	13	compound	_	SpaceAfter=No
13	俊介	俊介	PROPN	_	_	18	nmod	_	SpaceAfter=No
14	の	の	ADP	_	_	13	case	_	SpaceAfter=No
15	~	~	SYM	_	_	17	compound	_	SpaceAfter=No
16	』	』	SYM	_	_	17	compound	_	SpaceAfter=No
17	という	という	ADP	_	_	18	dep	_	SpaceAfter=No
18	タイトル	タイトル	NOUN	_	_	20	obl	_	SpaceAfter=No
19	で	で	ADP	_	_	18	case	_	SpaceAfter=No
20	統一	統一	VERB	_	_	0	root	_	SpaceAfter=No
21	さ	する	AUX	_	_	20	aux	_	SpaceAfter=No
22	れ	れる	AUX	_	_	20	aux	_	SpaceAfter=No
23	て	て	SCONJ	_	_	20	mark	_	SpaceAfter=No
24	いる	いる	AUX	_	_	20	aux	_	SpaceAfter=No
25	。	。	PUNCT	_	_	20	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 dep	color:blue
1	これ	これ	PRON	_	_	26	nsubj	_	SpaceAfter=No
2	が	が	ADP	_	_	1	case	_	SpaceAfter=No
3	元	元	ADJ	_	_	4	amod	_	SpaceAfter=No
4	で	で	CCONJ	_	_	26	advmod	_	SpaceAfter=No
5	両親	両親	NOUN	_	_	10	nsubj	_	SpaceAfter=No
6	は	は	ADP	_	_	5	case	_	SpaceAfter=No
7	解脱	解脱	NOUN	_	_	8	compound	_	SpaceAfter=No
8	会	会	NOUN	_	_	10	obj	_	SpaceAfter=No
9	を	を	ADP	_	_	8	case	_	SpaceAfter=No
10	脱会	脱会	VERB	_	_	26	acl	_	SpaceAfter=No
11	し	する	AUX	_	_	10	aux	_	SpaceAfter=No
12	,	,	PUNCT	_	_	10	punct	_	SpaceAfter=No
13	一	一	NUM	_	NumType=Card	15	nummod	_	SpaceAfter=No
14	部	部	NOUN	_	_	15	compound	_	SpaceAfter=No
15	信者	信者	NOUN	_	_	17	obj	_	SpaceAfter=No
16	を	を	ADP	_	_	15	case	_	SpaceAfter=No
17	引き連れ	引き連れる	VERB	_	_	26	acl	_	SpaceAfter=No
18	て	て	SCONJ	_	_	17	mark	_	SpaceAfter=No
19	“	“	PUNCT	_	_	20	punct	_	SpaceAfter=No
20	かむ	かむ	VERB	_	_	23	acl	_	SpaceAfter=No
21	ながら	ながら	SCONJ	_	_	22	dep	_	SpaceAfter=No
22	の	の	PART	_	_	23	dep	_	SpaceAfter=No
23	みち	みち	NOUN	_	_	26	obj	_	SpaceAfter=No
24	”	”	PUNCT	_	_	23	punct	_	SpaceAfter=No
25	を	を	ADP	_	_	23	case	_	SpaceAfter=No
26	設立	設立	VERB	_	_	0	root	_	SpaceAfter=No
27	し	する	AUX	_	_	26	aux	_	SpaceAfter=No
28	まし	ます	AUX	_	_	26	aux	_	SpaceAfter=No
29	た	た	AUX	_	_	26	aux	_	SpaceAfter=No
30	。	。	PUNCT	_	_	26	punct	_	SpaceAfter=No

~~~


