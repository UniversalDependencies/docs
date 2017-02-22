

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese)

This relation is universal.

585 nodes (0%) are attached to their parents as `cc`.

585 instances of `cc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07692307692308.

The following 5 pairs of parts of speech are connected with `cc`: [ja-pos/NOUN]()-[ja-pos/ADP]() (487; 83% instances), [ja-pos/PROPN]()-[ja-pos/ADP]() (87; 15% instances), [ja-pos/NUM]()-[ja-pos/ADP]() (5; 1% instances), [ja-pos/VERB]()-[ja-pos/ADP]() (4; 1% instances), [ja-pos/PRON]()-[ja-pos/ADP]() (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cc	color:blue
1	建設	建設	VERB	_	_	2	amod	_	SpaceAfter=No
2	中	中	NOUN	_	_	7	nmod	_	SpaceAfter=No
3	や	や	ADP	_	_	2	cc	_	SpaceAfter=No
4	計画	計画	VERB	_	_	5	amod	_	SpaceAfter=No
5	中	中	NOUN	_	_	7	nmod	_	SpaceAfter=No
6	の	の	ADP	_	_	5	case	_	SpaceAfter=No
7	ライン	ライン	NOUN	_	_	12	nsubj	_	SpaceAfter=No
8	が	が	ADP	_	_	7	case	_	SpaceAfter=No
9	さらに	さらに	ADV	_	_	12	advmod	_	SpaceAfter=No
10	8	8	NUM	_	NumType=Card	12	nummod	_	SpaceAfter=No
11	つ	つ	NOUN	_	_	10	mark	_	SpaceAfter=No
12	ある	ある	VERB	_	_	14	acl	_	SpaceAfter=No
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
5	1	1	NUM	_	NumType=Card	16	nummod	_	SpaceAfter=No
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




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

1861 nodes (1%) are attached to their parents as `cc`.

1120 instances of `cc` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.16818914562063.

The following 8 pairs of parts of speech are connected with `cc`: [ja-pos/NOUN]()-[ja-pos/CONJ]() (1176; 63% instances), [ja-pos/VERB]()-[ja-pos/CONJ]() (567; 30% instances), [ja-pos/ADJ]()-[ja-pos/CONJ]() (88; 5% instances), [ja-pos/PROPN]()-[ja-pos/CONJ]() (18; 1% instances), [ja-pos/ADV]()-[ja-pos/CONJ]() (8; 0% instances), [ja-pos/NUM]()-[ja-pos/CONJ]() (2; 0% instances), [ja-pos/PRON]()-[ja-pos/CONJ]() (1; 0% instances), [ja-pos/VERB]()-[ja-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cc	color:blue
1	_	又	CONJ	CONJ	_	13	cc	_	Offset=0-2
2	_	_	PROPN	PROPN	_	3	compound	_	Offset=2-7
3	_	_	NOUN	NOUN	_	13	nmod	_	Offset=7-9
4	_	_	ADP	ADP	_	3	case	_	Offset=9-10
5	_	ロシア-Rossiya	PROPN	PROPN	_	6	compound	_	Offset=10-13
6	_	_	NOUN	NOUN	_	13	nsubj	_	Offset=13-14
7	_	_	CONJ	CONJ	_	6	cc	_	Offset=14-15
8	_	ドゥダエフ-外国	PROPN	PROPN	_	9	compound	_	Offset=15-20
9	_	_	NOUN	NOUN	_	10	compound	_	Offset=20-22
10	_	_	NOUN	NOUN	_	6	conj	_	Offset=22-24
11	_	_	ADP	ADP	_	6	case	_	Offset=24-25
12	_	激しい	ADJ	ADJ	_	13	advmod	_	Offset=25-28
13	_	_	VERB	VERB	_	0	root	_	Offset=28-30
14	_	為る	AUX	AUX	_	13	aux	_	Offset=30-31
15	_	_	AUX	AUX	_	13	aux	_	Offset=31-32
16	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=32-33

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 cc	color:blue
1	_	然し	CONJ	CONJ	_	13	cc	_	Offset=0-3
2	_	_	PUNCT	PUNCT	_	1	punct	_	Offset=3-4
3	_	_	NOUN	NOUN	_	4	compound	_	Offset=4-5
4	_	_	NOUN	NOUN	_	8	nsubj	_	Offset=5-8
5	_	_	ADP	ADP	_	4	case	_	Offset=8-9
6	_	_	NOUN	NOUN	_	8	iobj	_	Offset=9-12
7	_	_	ADP	ADP	_	6	case	_	Offset=12-13
8	_	_	VERB	VERB	_	11	acl	_	Offset=13-15
9	_	為る	AUX	AUX	_	8	aux	_	Offset=15-16
10	_	_	AUX	AUX	_	8	aux	_	Offset=16-17
11	_	事	NOUN	NOUN	_	13	nsubj	_	Offset=17-19
12	_	_	ADP	ADP	_	11	case	_	Offset=19-20
13	_	有る	VERB	VERB	_	25	advcl	_	Offset=20-22
14	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=22-23
15	_	クボ	PROPN	PROPN	_	16	compound	_	Offset=23-25
16	_	_	NOUN	NOUN	_	25	nsubj	_	Offset=25-26
17	_	_	ADP	ADP	_	16	case	_	Offset=26-27
18	_	先駆け	NOUN	NOUN	_	21	nmod	_	Offset=27-31
19	_	_	ADP	ADP	_	18	case	_	Offset=31-32
20	_	_	ADP	ADP	_	18	case	_	Offset=32-33
21	_	_	NOUN	NOUN	_	25	iobj	_	Offset=33-35
22	_	_	ADP	ADP	_	21	case	_	Offset=35-36
23	_	_	NOUN	NOUN	_	25	dobj	_	Offset=36-38
24	_	_	ADP	ADP	_	23	case	_	Offset=38-39
25	_	持つ	VERB	VERB	_	0	root	_	Offset=39-41
26	_	_	SCONJ	SCONJ	_	25	mark	_	Offset=41-42
27	_	居る	AUX	AUX	_	25	aux	_	Offset=42-44
28	_	_	PUNCT	PUNCT	_	25	punct	_	Offset=44-45

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 1 cc	color:blue
1	_	_	CONJ	CONJ	_	16	cc	_	Offset=0-2
2	_	_	PUNCT	PUNCT	_	1	punct	_	Offset=2-3
3	_	_	NOUN	NOUN	_	5	nmod	_	Offset=3-5
4	_	_	ADP	ADP	_	3	case	_	Offset=5-6
5	_	_	NOUN	NOUN	_	7	dep	_	Offset=6-9
6	_	_	PART	PART	_	5	case	_	Offset=9-11
7	_	押し殺す	VERB	VERB	_	13	advcl	_	Offset=11-15
8	_	_	SCONJ	SCONJ	_	7	mark	_	Offset=15-16
9	_	_	NUM	NUM	_	10	nummod	_	Offset=16-17
10	_	_	NOUN	NOUN	_	11	dep	_	Offset=17-18
11	_	_	NOUN	NOUN	_	13	iobj	_	Offset=18-20
12	_	_	ADP	ADP	_	11	case	_	Offset=20-21
13	_	成る	VERB	VERB	_	14	acl	_	Offset=21-23
14	_	事	NOUN	NOUN	_	16	nsubj	_	Offset=23-25
15	_	_	ADP	ADP	_	14	case	_	Offset=25-26
16	_	無い	ADJ	ADJ	_	0	root	_	Offset=26-28
17	_	_	PUNCT	PUNCT	_	16	punct	_	Offset=28-29

~~~


