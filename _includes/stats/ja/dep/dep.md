

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese)

This relation is universal.

20 nodes (0%) are attached to their parents as `dep`.

20 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.6.

The following 7 pairs of parts of speech are connected with `dep`: [ja-pos/VERB]()-[ja-pos/ADP]() (12; 60% instances), [ja-pos/NOUN]()-[ja-pos/ADP]() (3; 15% instances), [ja-pos/NOUN]()-[ja-pos/PART]() (1; 5% instances), [ja-pos/NOUN]()-[ja-pos/PUNCT]() (1; 5% instances), [ja-pos/NOUN]()-[ja-pos/SCONJ]() (1; 5% instances), [ja-pos/PART]()-[ja-pos/SCONJ]() (1; 5% instances), [ja-pos/SCONJ]()-[ja-pos/AUX]() (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 dep	color:blue
1	右	右	NOUN	_	_	3	iobj	_	SpaceAfter=No
2	に	に	ADP	_	_	1	case	_	SpaceAfter=No
3	ある	ある	VERB	_	_	5	acl	_	SpaceAfter=No
4	[	[	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	表示	表示	NOUN	_	_	8	obl	_	SpaceAfter=No
6	]	]	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	を	を	ADP	_	_	8	dep	_	SpaceAfter=No
8	クリック	クリック	VERB	_	_	12	acl	_	SpaceAfter=No
9	する	する	AUX	_	_	8	aux	_	SpaceAfter=No
10	と	と	SCONJ	_	_	8	mark	_	SpaceAfter=No
11	一覧	一覧	NOUN	_	_	12	obl	_	SpaceAfter=No
12	表示	表示	VERB	_	_	0	root	_	SpaceAfter=No
13	さ	する	AUX	_	_	12	aux	_	SpaceAfter=No
14	れる	れる	AUX	_	_	12	aux	_	SpaceAfter=No
15	。	。	PUNCT	_	_	12	punct	_	SpaceAfter=No

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
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 52	bgColor:blue
# visual-style 52	fgColor:white
# visual-style 52 39 dep	color:blue
1	この	この	ADJ	_	_	2	det	_	SpaceAfter=No
2	事件	事件	NOUN	_	_	95	obl	_	SpaceAfter=No
3	について	について	ADP	_	_	2	case	_	SpaceAfter=No
4	、	、	PUNCT	_	_	2	punct	_	SpaceAfter=No
5	朝日新聞	朝日新聞	PROPN	_	_	8	nmod	_	SpaceAfter=No
6	の	の	ADP	_	_	5	case	_	SpaceAfter=No
7	鵜飼	鵜飼	PROPN	_	_	8	compound	_	SpaceAfter=No
8	啓	啓	PROPN	_	_	95	nsubj	_	SpaceAfter=No
9	は	は	ADP	_	_	8	case	_	SpaceAfter=No
10	、	、	PUNCT	_	_	8	punct	_	SpaceAfter=No
11	外国人登録証	外国人登録証	NOUN	_	_	14	nmod	_	SpaceAfter=No
12	の	の	ADP	_	_	11	case	_	SpaceAfter=No
13	不正	不正	NOUN	_	_	14	compound	_	SpaceAfter=No
14	更新	更新	NOUN	_	_	16	nmod	_	SpaceAfter=No
15	による	による	ADP	_	_	14	case	_	SpaceAfter=No
16	書類送検	書類送検	NOUN	_	_	18	nmod	_	SpaceAfter=No
17	、	、	PUNCT	_	_	16	punct	_	SpaceAfter=No
18	書記官	書記官	NOUN	_	_	20	nmod	_	SpaceAfter=No
19	と	と	ADP	_	_	18	case	_	SpaceAfter=No
20	軍	軍	NOUN	_	_	23	nmod	_	SpaceAfter=No
21	と	と	ADP	_	_	20	case	_	SpaceAfter=No
22	の	の	PART	_	_	20	case	_	SpaceAfter=No
23	関係	関係	NOUN	_	_	29	nmod	_	SpaceAfter=No
24	、	、	PUNCT	_	_	23	punct	_	SpaceAfter=No
25	「	「	PUNCT	_	_	26	punct	_	SpaceAfter=No
26	おかしな	おかしな	ADJ	_	_	27	amod	_	SpaceAfter=No
27	金	金	NOUN	_	_	29	nmod	_	SpaceAfter=No
28	の	の	ADP	_	_	27	case	_	SpaceAfter=No
29	動き	動き	NOUN	_	_	32	iobj	_	SpaceAfter=No
30	」	」	PUNCT	_	_	29	compound	_	SpaceAfter=No
31	に	に	ADP	_	_	29	case	_	SpaceAfter=No
32	触れ	触れる	VERB	_	_	34	acl	_	SpaceAfter=No
33	た	た	AUX	_	_	32	aux	_	SpaceAfter=No
34	上	上	NOUN	_	_	95	obl	_	SpaceAfter=No
35	で	で	ADP	_	_	34	case	_	SpaceAfter=No
36	、	、	PUNCT	_	_	34	punct	_	SpaceAfter=No
37	「	「	PUNCT	_	_	39	punct	_	SpaceAfter=No
38	だ	だ	AUX	_	_	39	dep	_	SpaceAfter=No
39	が	が	SCONJ	_	_	52	dep	_	SpaceAfter=No
40	、	、	PUNCT	_	_	39	punct	_	SpaceAfter=No
41	違法	違法	ADJ	_	_	44	acl	_	SpaceAfter=No
42	な	だ	AUX	_	_	41	aux	_	SpaceAfter=No
43	情報	情報	NOUN	_	_	44	compound	_	SpaceAfter=No
44	収集	収集	NOUN	_	_	46	nsubj	_	SpaceAfter=No
45	は	は	ADP	_	_	44	case	_	SpaceAfter=No
46	確認	確認	VERB	_	_	52	acl	_	SpaceAfter=No
47	でき	できる	AUX	_	_	46	aux	_	SpaceAfter=No
48	ず	ない	AUX	_	_	46	aux	_	SpaceAfter=No
49	、	、	PUNCT	_	_	46	punct	_	SpaceAfter=No
50	果たして	果たして	ADV	_	_	52	advmod	_	SpaceAfter=No
51	「	「	PUNCT	_	_	52	punct	_	SpaceAfter=No
52	スパイ	スパイ	NOUN	_	_	56	obl	_	SpaceAfter=No
53	」	」	PUNCT	_	_	52	compound	_	SpaceAfter=No
54	と	と	ADP	_	_	52	case	_	SpaceAfter=No
55	まで	まで	ADP	_	_	52	case	_	SpaceAfter=No
56	言える	言える	VERB	_	_	61	acl	_	SpaceAfter=No
57	の	の	PART	_	_	56	mark	_	SpaceAfter=No
58	か	か	PART	_	_	56	mark	_	SpaceAfter=No
59	」	」	PUNCT	_	_	56	compound	_	SpaceAfter=No
60	と	と	ADP	_	_	56	case	_	SpaceAfter=No
61	弁じ	弁じる	VERB	_	_	95	acl	_	SpaceAfter=No
62	、	、	PUNCT	_	_	61	punct	_	SpaceAfter=No
63	「	「	PUNCT	_	_	64	punct	_	SpaceAfter=No
64	それ	それ	PRON	_	_	71	obl	_	SpaceAfter=No
65	で	で	ADP	_	_	64	case	_	SpaceAfter=No
66	も	も	ADP	_	_	64	case	_	SpaceAfter=No
67	一部	一部	NOUN	_	_	71	obl	_	SpaceAfter=No
68	で	で	ADP	_	_	67	case	_	SpaceAfter=No
69	大々的	大々的	ADJ	_	_	71	acl	_	SpaceAfter=No
70	に	だ	AUX	_	_	69	aux	_	SpaceAfter=No
71	報じ	報じる	VERB	_	_	86	acl	_	SpaceAfter=No
72	られ	られる	AUX	_	_	71	aux	_	SpaceAfter=No
73	、	、	PUNCT	_	_	71	punct	_	SpaceAfter=No
74	日本	日本	PROPN	_	_	76	nmod	_	SpaceAfter=No
75	の	の	ADP	_	_	74	case	_	SpaceAfter=No
76	政治家	政治家	NOUN	_	_	86	nsubj	_	SpaceAfter=No
77	は	は	ADP	_	_	76	case	_	SpaceAfter=No
78	中国	中国	PROPN	_	_	84	nmod	_	SpaceAfter=No
79	の	の	ADP	_	_	78	case	_	SpaceAfter=No
80	訪問	訪問	NOUN	_	_	81	compound	_	SpaceAfter=No
81	団	団	NOUN	_	_	84	nmod	_	SpaceAfter=No
82	と	と	ADP	_	_	81	case	_	SpaceAfter=No
83	の	の	PART	_	_	81	case	_	SpaceAfter=No
84	面会	面会	NOUN	_	_	86	iobj	_	SpaceAfter=No
85	に	に	ADP	_	_	84	case	_	SpaceAfter=No
86	及び腰	及び腰	ADJ	_	_	91	acl	_	SpaceAfter=No
87	に	だ	AUX	_	_	86	aux	_	SpaceAfter=No
88	なっ	なる	AUX	_	_	86	aux	_	SpaceAfter=No
89	た	た	AUX	_	_	86	aux	_	SpaceAfter=No
90	」	」	PUNCT	_	_	86	compound	_	SpaceAfter=No
91	とそ	とそ	NOUN	_	_	93	nmod	_	SpaceAfter=No
92	の	の	ADP	_	_	91	case	_	SpaceAfter=No
93	影響	影響	NOUN	_	_	95	obj	_	SpaceAfter=No
94	を	を	ADP	_	_	93	case	_	SpaceAfter=No
95	指摘	指摘	VERB	_	_	0	root	_	SpaceAfter=No
96	し	する	AUX	_	_	95	aux	_	SpaceAfter=No
97	た	た	AUX	_	_	95	aux	_	SpaceAfter=No
98	。	。	PUNCT	_	_	95	punct	_	SpaceAfter=No

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

5087 nodes (3%) are attached to their parents as `dep`.

2785 instances of `dep` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.7253784155691.

The following 80 pairs of parts of speech are connected with `dep`: [ja-pos/VERB]()-[ja-pos/ADP]() (848; 17% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (640; 13% instances), [ja-pos/VERB]()-[ja-pos/NOUN]() (590; 12% instances), [ja-pos/NOUN]()-[ja-pos/ADP]() (470; 9% instances), [ja-pos/NOUN]()-[ja-pos/VERB]() (269; 5% instances), [ja-pos/ADJ]()-[ja-pos/VERB]() (255; 5% instances), [ja-pos/NUM]()-[ja-pos/NOUN]() (222; 4% instances), [ja-pos/ADV]()-[ja-pos/ADP]() (206; 4% instances), [ja-pos/ADJ]()-[ja-pos/NOUN]() (193; 4% instances), [ja-pos/VERB]()-[ja-pos/VERB]() (173; 3% instances), [ja-pos/NOUN]()-[ja-pos/AUX]() (164; 3% instances), [ja-pos/ADP]()-[ja-pos/ADP]() (90; 2% instances), [ja-pos/NOUN]()-[ja-pos/PRON]() (90; 2% instances), [ja-pos/NUM]()-[ja-pos/ADP]() (78; 2% instances), [ja-pos/ADV]()-[ja-pos/AUX]() (67; 1% instances), [ja-pos/ADV]()-[ja-pos/NOUN]() (57; 1% instances), [ja-pos/VERB]()-[ja-pos/ADJ]() (55; 1% instances), [ja-pos/ADV]()-[ja-pos/PART]() (48; 1% instances), [ja-pos/NOUN]()-[ja-pos/ADJ]() (44; 1% instances), [ja-pos/VERB]()-[ja-pos/PRON]() (41; 1% instances), [ja-pos/ADV]()-[ja-pos/VERB]() (40; 1% instances), [ja-pos/ADJ]()-[ja-pos/ADJ]() (38; 1% instances), [ja-pos/ADJ]()-[ja-pos/ADP]() (37; 1% instances), [ja-pos/VERB]()-[ja-pos/AUX]() (35; 1% instances), [ja-pos/NOUN]()-[ja-pos/PROPN]() (30; 1% instances), [ja-pos/VERB]()-[ja-pos/ADV]() (24; 0% instances), [ja-pos/NOUN]()-[ja-pos/PART]() (21; 0% instances), [ja-pos/DET]()-[ja-pos/AUX]() (20; 0% instances), [ja-pos/NOUN]()-[ja-pos/NUM]() (19; 0% instances), [ja-pos/ADJ]()-[ja-pos/AUX]() (17; 0% instances), [ja-pos/CONJ]()-[ja-pos/ADP]() (16; 0% instances), [ja-pos/VERB]()-[ja-pos/CONJ]() (16; 0% instances), [ja-pos/NUM]()-[ja-pos/NUM]() (12; 0% instances), [ja-pos/PROPN]()-[ja-pos/AUX]() (10; 0% instances), [ja-pos/NUM]()-[ja-pos/PROPN]() (9; 0% instances), [ja-pos/PROPN]()-[ja-pos/VERB]() (9; 0% instances), [ja-pos/AUX]()-[ja-pos/AUX]() (8; 0% instances), [ja-pos/CONJ]()-[ja-pos/NOUN]() (8; 0% instances), [ja-pos/PROPN]()-[ja-pos/ADP]() (8; 0% instances), [ja-pos/PROPN]()-[ja-pos/NOUN]() (8; 0% instances), [ja-pos/VERB]()-[ja-pos/PART]() (8; 0% instances), [ja-pos/NOUN]()-[ja-pos/CONJ]() (7; 0% instances), [ja-pos/PRON]()-[ja-pos/ADP]() (7; 0% instances), [ja-pos/PROPN]()-[ja-pos/PROPN]() (7; 0% instances), [ja-pos/ADJ]()-[ja-pos/PRON]() (6; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADV]() (6; 0% instances), [ja-pos/PRON]()-[ja-pos/NOUN]() (5; 0% instances), [ja-pos/ADJ]()-[ja-pos/ADV]() (4; 0% instances), [ja-pos/ADV]()-[ja-pos/ADJ]() (4; 0% instances), [ja-pos/INTJ]()-[ja-pos/ADP]() (4; 0% instances), [ja-pos/VERB]()-[ja-pos/PROPN]() (4; 0% instances), [ja-pos/ADV]()-[ja-pos/PRON]() (3; 0% instances), [ja-pos/CONJ]()-[ja-pos/PRON]() (3; 0% instances), [ja-pos/NUM]()-[ja-pos/VERB]() (3; 0% instances), [ja-pos/PRON]()-[ja-pos/PART]() (3; 0% instances), [ja-pos/ADV]()-[ja-pos/ADV]() (2; 0% instances), [ja-pos/INTJ]()-[ja-pos/INTJ]() (2; 0% instances), [ja-pos/INTJ]()-[ja-pos/NOUN]() (2; 0% instances), [ja-pos/ADJ]()-[ja-pos/CONJ]() (1; 0% instances), [ja-pos/ADJ]()-[ja-pos/NUM]() (1; 0% instances), [ja-pos/ADJ]()-[ja-pos/PART]() (1; 0% instances), [ja-pos/ADJ]()-[ja-pos/PROPN]() (1; 0% instances), [ja-pos/ADV]()-[ja-pos/INTJ]() (1; 0% instances), [ja-pos/ADV]()-[ja-pos/PROPN]() (1; 0% instances), [ja-pos/AUX]()-[ja-pos/ADP]() (1; 0% instances), [ja-pos/CONJ]()-[ja-pos/ADV]() (1; 0% instances), [ja-pos/CONJ]()-[ja-pos/CONJ]() (1; 0% instances), [ja-pos/CONJ]()-[ja-pos/VERB]() (1; 0% instances), [ja-pos/INTJ]()-[ja-pos/ADV]() (1; 0% instances), [ja-pos/INTJ]()-[ja-pos/AUX]() (1; 0% instances), [ja-pos/INTJ]()-[ja-pos/VERB]() (1; 0% instances), [ja-pos/NUM]()-[ja-pos/ADJ]() (1; 0% instances), [ja-pos/NUM]()-[ja-pos/ADV]() (1; 0% instances), [ja-pos/NUM]()-[ja-pos/AUX]() (1; 0% instances), [ja-pos/NUM]()-[ja-pos/PRON]() (1; 0% instances), [ja-pos/PART]()-[ja-pos/AUX]() (1; 0% instances), [ja-pos/PRON]()-[ja-pos/ADJ]() (1; 0% instances), [ja-pos/PRON]()-[ja-pos/AUX]() (1; 0% instances), [ja-pos/PROPN]()-[ja-pos/ADJ]() (1; 0% instances), [ja-pos/VERB]()-[ja-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 dep	color:blue
1	_	タケムラ	PROPN	PROPN	_	2	compound	_	Offset=0-2
2	_	_	NOUN	NOUN	_	23	nsubj	_	Offset=2-3
3	_	_	ADP	ADP	_	2	case	_	Offset=3-4
4	_	_	NOUN	NOUN	_	13	nmod	_	Offset=4-7
5	_	_	PUNCT	PUNCT	_	4	punct	_	Offset=7-8
6	_	クボ	PROPN	PROPN	_	7	compound	_	Offset=8-10
7	_	_	NOUN	NOUN	_	13	iobj	_	Offset=10-11
8	_	_	ADP	ADP	_	7	case	_	Offset=11-12
9	_	_	ADP	ADP	_	7	case	_	Offset=12-13
10	_	トウキョウ	PROPN	PROPN	_	11	compound	_	Offset=13-15
11	_	_	NOUN	NOUN	_	13	nmod	_	Offset=15-17
12	_	_	ADP	ADP	_	11	case	_	Offset=17-18
13	_	_	VERB	VERB	_	23	advcl	_	Offset=18-20
14	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=20-21
15	_	_	ADJ	ADJ	_	17	amod	_	Offset=21-25
16	_	_	NOUN	NOUN	_	17	compound	_	Offset=25-27
17	_	_	NOUN	NOUN	_	19	dep	_	Offset=27-29
18	_	_	ADP	ADP	_	19	dep	_	Offset=29-30
19	_	つく	VERB	VERB	_	23	advcl	_	Offset=30-32
20	_	_	SCONJ	SCONJ	_	19	mark	_	Offset=32-33
21	_	_	NOUN	NOUN	_	22	compound	_	Offset=33-35
22	_	_	NOUN	NOUN	_	23	dep	_	Offset=35-37
23	_	為る	VERB	VERB	_	0	root	_	Offset=37-38
24	_	_	AUX	AUX	_	23	aux	_	Offset=38-39
25	_	_	PUNCT	PUNCT	_	23	punct	_	Offset=39-40

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 14 dep	color:blue
1	_	_	NOUN	NOUN	_	3	nmod	_	Offset=0-2
2	_	_	ADP	ADP	_	1	case	_	Offset=2-3
3	_	_	NOUN	NOUN	_	23	nmod	_	Offset=3-5
4	_	_	PUNCT	PUNCT	_	3	punct	_	Offset=5-6
5	_	_	NOUN	NOUN	_	8	dep	_	Offset=6-8
6	_	_	NOUN	NOUN	_	8	nsubj	_	Offset=8-10
7	_	_	ADP	ADP	_	6	case	_	Offset=10-11
8	_	無い	ADJ	ADJ	_	21	dep	_	Offset=11-13
9	_	_	PUNCT	PUNCT	_	8	punct	_	Offset=13-14
10	_	_	NUM	NUM	_	11	nummod	_	Offset=14-15
11	_	_	NOUN	NOUN	_	14	nsubj	_	Offset=15-16
12	_	_	ADP	ADP	_	11	case	_	Offset=16-17
13	_	_	NOUN	NOUN	_	14	compound	_	Offset=17-19
14	_	_	NOUN	NOUN	_	21	dep	_	Offset=19-20
15	_	_	PUNCT	PUNCT	_	14	punct	_	Offset=20-21
16	_	_	NUM	NUM	_	17	nummod	_	Offset=21-22
17	_	_	NOUN	NOUN	_	21	nsubj	_	Offset=22-23
18	_	_	ADP	ADP	_	17	case	_	Offset=23-24
19	_	_	NOUN	NOUN	_	20	compound	_	Offset=24-25
20	_	_	NOUN	NOUN	_	21	compound	_	Offset=25-27
21	_	_	NOUN	NOUN	_	23	nmod	_	Offset=27-28
22	_	_	ADP	ADP	_	21	dep	_	Offset=28-29
23	_	分かる	VERB	VERB	_	0	root	_	Offset=29-32
24	_	_	AUX	AUX	_	23	aux	_	Offset=32-33
25	_	_	PUNCT	PUNCT	_	23	punct	_	Offset=33-34

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 dep	color:blue
1	_	タケムラ	PROPN	PROPN	_	2	compound	_	Offset=0-2
2	_	_	NOUN	NOUN	_	23	nsubj	_	Offset=2-3
3	_	_	ADP	ADP	_	2	case	_	Offset=3-4
4	_	_	NOUN	NOUN	_	13	nmod	_	Offset=4-7
5	_	_	PUNCT	PUNCT	_	4	punct	_	Offset=7-8
6	_	クボ	PROPN	PROPN	_	7	compound	_	Offset=8-10
7	_	_	NOUN	NOUN	_	13	iobj	_	Offset=10-11
8	_	_	ADP	ADP	_	7	case	_	Offset=11-12
9	_	_	ADP	ADP	_	7	case	_	Offset=12-13
10	_	トウキョウ	PROPN	PROPN	_	11	compound	_	Offset=13-15
11	_	_	NOUN	NOUN	_	13	nmod	_	Offset=15-17
12	_	_	ADP	ADP	_	11	case	_	Offset=17-18
13	_	_	VERB	VERB	_	23	advcl	_	Offset=18-20
14	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=20-21
15	_	_	ADJ	ADJ	_	17	amod	_	Offset=21-25
16	_	_	NOUN	NOUN	_	17	compound	_	Offset=25-27
17	_	_	NOUN	NOUN	_	19	dep	_	Offset=27-29
18	_	_	ADP	ADP	_	19	dep	_	Offset=29-30
19	_	つく	VERB	VERB	_	23	advcl	_	Offset=30-32
20	_	_	SCONJ	SCONJ	_	19	mark	_	Offset=32-33
21	_	_	NOUN	NOUN	_	22	compound	_	Offset=33-35
22	_	_	NOUN	NOUN	_	23	dep	_	Offset=35-37
23	_	為る	VERB	VERB	_	0	root	_	Offset=37-38
24	_	_	AUX	AUX	_	23	aux	_	Offset=38-39
25	_	_	PUNCT	PUNCT	_	23	punct	_	Offset=39-40

~~~


