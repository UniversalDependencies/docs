---
layout: base
title:  'Statistics of dep in UD_Japanese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-GSD: Relations: `dep`

This relation is universal.

6 nodes (0%) are attached to their parents as `dep`.

6 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66666666666667.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_gsd-pos-ADP.html">ADP</a></tt> (4; 67% instances), <tt><a href="ja_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_gsd-pos-PUNCT.html">PUNCT</a></tt> (1; 17% instances), <tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_gsd-pos-PUNCT.html">PUNCT</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	って	って	ADP	PQ	_	2	dep	_	SpaceAfter=No
2	言っ	言う	VERB	VV	_	5	acl	_	SpaceAfter=No
3	て	て	SCONJ	PC	_	2	mark	_	SpaceAfter=No
4	る	いる	AUX	AV	_	2	aux	_	SpaceAfter=No
5	年齢不詳	年齢不詳	NOUN	NN	_	0	root	_	SpaceAfter=No
6	?	?	PUNCT	SYM	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 37 dep	color:blue
1	それら	それら	PRON	NP	_	10	nsubj	_	SpaceAfter=No
2	は	は	ADP	PK	_	1	case	_	SpaceAfter=No
3	第三者	第三者	NOUN	NN	_	5	iobj	_	SpaceAfter=No
4	に	に	ADP	PS	_	3	case	_	SpaceAfter=No
5	委ねる	委ねる	VERB	VV	_	6	acl	_	SpaceAfter=No
6	内済	内済	NOUN	NN	_	8	nmod	_	SpaceAfter=No
7	という	という	ADP	PQ	_	6	case	_	SpaceAfter=No
8	扱い	扱い	NOUN	NN	_	10	obl	_	SpaceAfter=No
9	と	と	ADP	PS	_	8	case	_	SpaceAfter=No
10	なり	なる	VERB	VV	_	67	advcl	_	SpaceAfter=No
11	、	、	PUNCT	SYM	_	10	punct	_	SpaceAfter=No
12	その	その	DET	JR	_	13	det	_	SpaceAfter=No
13	内済	内済	NOUN	NN	_	19	obl	_	SpaceAfter=No
14	にて	にて	ADP	PS	_	13	case	_	SpaceAfter=No
15	「	「	PUNCT	SYM	_	16	punct	_	SpaceAfter=No
16	他の	他の	ADJ	JR	_	17	amod	_	SpaceAfter=No
17	者	者	NOUN	NN	_	19	iobj	_	SpaceAfter=No
18	に	に	ADP	PS	_	17	case	_	SpaceAfter=No
19	小屋掛け	小屋掛け	VERB	VV	_	27	acl	_	SpaceAfter=No
20	さ	する	AUX	XV	_	19	aux	_	SpaceAfter=No
21	せ	せる	AUX	AV	_	19	aux	_	SpaceAfter=No
22	ない	ない	AUX	AV	_	19	aux	_	SpaceAfter=No
23	こと	こと	NOUN	NB	_	19	aux	_	SpaceAfter=No
24	」	」	PUNCT	SYM	_	19	punct	_	SpaceAfter=No
25	「	「	PUNCT	SYM	_	27	punct	_	SpaceAfter=No
26	薬師	薬師	NOUN	NN	_	27	compound	_	SpaceAfter=No
27	堂	堂	NOUN	XS	_	30	nmod	_	SpaceAfter=No
28	の	の	ADP	PN	_	27	case	_	SpaceAfter=No
29	入	入	NOUN	NN	_	30	compound	_	SpaceAfter=No
30	仏	仏	NOUN	NN	_	34	nsubj	_	SpaceAfter=No
31	は	は	ADP	PK	_	30	case	_	SpaceAfter=No
32	須走村	須走村	PROPN	NNP	_	34	nsubj	_	SpaceAfter=No
33	が	が	ADP	PS	_	32	case	_	SpaceAfter=No
34	行う	行う	VERB	VV	_	37	advcl	_	SpaceAfter=No
35	こと	こと	NOUN	NB	_	34	aux	_	SpaceAfter=No
36	」	」	PUNCT	SYM	_	34	punct	_	SpaceAfter=No
37	「	「	PUNCT	SYM	_	38	dep	_	SpaceAfter=No
38	内院散銭	内院散銭	NOUN	NN	_	62	nsubj	_	SpaceAfter=No
39	は	は	ADP	PK	_	38	case	_	SpaceAfter=No
40	一番	一番	NOUN	NR	_	41	nmod	_	SpaceAfter=No
41	拾い	拾い	NOUN	NN	_	51	obj	_	SpaceAfter=No
42	を	を	ADP	PS	_	41	case	_	SpaceAfter=No
43	大宮	大宮	PROPN	NNP	_	45	nmod	_	SpaceAfter=No
44	と	と	ADP	PS	_	43	case	_	SpaceAfter=No
45	須走	須走	PROPN	NNP	_	51	obl	_	SpaceAfter=No
46	で	で	ADP	PS	_	45	case	_	SpaceAfter=No
47	6	6	NUM	CD	NumType=Card	49	nummod	_	SpaceAfter=No
48	:	:	SYM	SYM	_	47	compound	_	SpaceAfter=No
49	4	4	NUM	CD	NumType=Card	51	obl	_	SpaceAfter=No
50	で	で	ADP	PS	_	49	case	_	SpaceAfter=No
51	分け	分ける	VERB	VV	_	59	advcl	_	SpaceAfter=No
52	、	、	PUNCT	SYM	_	51	punct	_	SpaceAfter=No
53	2	2	NUM	CD	NumType=Card	55	nummod	_	SpaceAfter=No
54	番	番	NOUN	XSC	_	55	compound	_	SpaceAfter=No
55	拾い	拾い	NOUN	NN	_	59	nsubj	_	SpaceAfter=No
56	は	は	ADP	PK	_	55	case	_	SpaceAfter=No
57	須走	須走	PROPN	NNP	_	59	nsubj	_	SpaceAfter=No
58	が	が	ADP	PS	_	57	case	_	SpaceAfter=No
59	得る	得る	VERB	VV	_	60	acl	_	SpaceAfter=No
60	もの	もの	NOUN	NB	_	62	obl	_	SpaceAfter=No
61	と	と	ADP	PQ	_	60	case	_	SpaceAfter=No
62	する	する	VERB	VV	_	65	acl	_	SpaceAfter=No
63	」	」	PUNCT	SYM	_	62	punct	_	SpaceAfter=No
64	という	という	ADP	PQ	_	62	case	_	SpaceAfter=No
65	決定	決定	NOUN	NN	_	67	obl	_	SpaceAfter=No
66	と	と	ADP	PS	_	65	case	_	SpaceAfter=No
67	なり	なる	VERB	VV	_	72	advcl	_	SpaceAfter=No
68	、	、	PUNCT	SYM	_	67	punct	_	SpaceAfter=No
69	以後	以後	NOUN	NR	_	72	advmod	_	SpaceAfter=No
70	これら	これら	PRON	NP	_	72	nsubj	_	SpaceAfter=No
71	は	は	ADP	PK	_	70	case	_	SpaceAfter=No
72	遵守	遵守	VERB	VV	_	0	root	_	SpaceAfter=No
73	さ	する	AUX	XV	_	72	aux	_	SpaceAfter=No
74	れ	れる	AUX	AV	_	72	aux	_	SpaceAfter=No
75	た	た	AUX	AV	_	72	aux	_	SpaceAfter=No
76	。	。	PUNCT	SYM	_	72	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 16 dep	color:blue
1	実は	実は	CCONJ	CC	_	27	advmod	_	SpaceAfter=No
2	『	『	PUNCT	SYM	_	3	punct	_	SpaceAfter=No
3	KOF	KOF	PROPN	NNP	_	5	nmod	_	SpaceAfter=No
4	'	'	SYM	SYM	_	3	compound	_	SpaceAfter=No
5	94	94	NUM	CD	NumType=Card	12	obl	_	SpaceAfter=No
6	』	』	PUNCT	SYM	_	5	compound	_	SpaceAfter=No
7	で	で	ADP	PS	_	5	case	_	SpaceAfter=No
8	対戦	対戦	NOUN	NN	_	9	compound	_	SpaceAfter=No
9	格闘	格闘	NOUN	NN	_	12	obl	_	SpaceAfter=No
10	ゲーム	ゲーム	NOUN	NN	_	11	compound	_	SpaceAfter=No
11	デビュー	デビュー	NOUN	NN	_	12	obl	_	SpaceAfter=No
12	する	する	VERB	VV	_	13	acl	_	SpaceAfter=No
13	前	前	NOUN	NB	_	27	iobj	_	SpaceAfter=No
14	に	に	ADP	PS	_	13	case	_	SpaceAfter=No
15	、	、	PUNCT	SYM	_	13	punct	_	SpaceAfter=No
16	『	『	PUNCT	SYM	_	27	dep	_	SpaceAfter=No
17	餓狼伝説	餓狼伝説	PROPN	NNP	_	18	nmod	_	SpaceAfter=No
18	SPECIAL	SPECIAL	PROPN	NNP	_	22	nmod	_	SpaceAfter=No
19	』	』	PUNCT	SYM	_	18	compound	_	SpaceAfter=No
20	の	の	ADP	PN	_	18	case	_	SpaceAfter=No
21	山田	山田	PROPN	NNP	_	22	compound	_	SpaceAfter=No
22	十平衛	十平衛	PROPN	NNP	_	24	nmod	_	SpaceAfter=No
23	の	の	ADP	PN	_	22	case	_	SpaceAfter=No
24	エンディング	エンディング	NOUN	NN	_	27	iobj	_	SpaceAfter=No
25	に	に	ADP	PS	_	24	case	_	SpaceAfter=No
26	カメオ	カメオ	NOUN	NN	_	27	obl	_	SpaceAfter=No
27	登場	登場	VERB	VV	_	0	root	_	SpaceAfter=No
28	し	する	AUX	XV	_	27	aux	_	SpaceAfter=No
29	て	て	SCONJ	PC	_	27	mark	_	SpaceAfter=No
30	い	いる	AUX	AV	_	27	aux	_	SpaceAfter=No
31	た	た	AUX	AV	_	27	aux	_	SpaceAfter=No
32	。	。	PUNCT	SYM	_	27	punct	_	SpaceAfter=No

~~~


