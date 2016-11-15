

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese)

This relation is universal.

1940 nodes (2%) are attached to their parents as `name`.

1940 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.59845360824742.

The following 19 pairs of parts of speech are connected with `name`: [ja-pos/NOUN]()-[ja-pos/NUM]() (807; 42% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (698; 36% instances), [ja-pos/NOUN]()-[ja-pos/CONJ]() (140; 7% instances), [ja-pos/NUM]()-[ja-pos/NOUN]() (137; 7% instances), [ja-pos/NUM]()-[ja-pos/NUM]() (84; 4% instances), [ja-pos/NOUN]()-[ja-pos/VERB]() (16; 1% instances), [ja-pos/NUM]()-[ja-pos/CONJ]() (11; 1% instances), [ja-pos/NOUN]()-[ja-pos/ADJ]() (10; 1% instances), [ja-pos/PRON]()-[ja-pos/NOUN]() (9; 0% instances), [ja-pos/VERB]()-[ja-pos/NOUN]() (6; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADV]() (5; 0% instances), [ja-pos/NOUN]()-[ja-pos/DET]() (4; 0% instances), [ja-pos/NOUN]()-[ja-pos/PRON]() (4; 0% instances), [ja-pos/PRON]()-[ja-pos/NUM]() (3; 0% instances), [ja-pos/VERB]()-[ja-pos/CONJ]() (2; 0% instances), [ja-pos/ADJ]()-[ja-pos/CONJ]() (1; 0% instances), [ja-pos/NUM]()-[ja-pos/ADJ]() (1; 0% instances), [ja-pos/NUM]()-[ja-pos/VERB]() (1; 0% instances), [ja-pos/VERB]()-[ja-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 name	color:blue
1	医学博士	_	NOUN	NOUN	_	0	root	_	_
2	（大阪大学	_	NOUN	NOUN	_	1	conj	_	_
3	、	_	PUNCT	.	_	2	punct	_	_
4	1960年）。	_	NUM	NUM-CL	_	2	name	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 name	color:blue
1	ほとんどは	_	NOUN	NOUN-PRT	_	2	nmod	_	_
2	浅海生だが	_	NOUN	NOUN-VERB-AUX-CONJ	_	9	advcl	_	_
3	、	_	PUNCT	.	_	2	punct	_	_
4	水深	_	NOUN	NOUN	_	6	nmod	_	_
5	数百mほどの	_	NOUN	NOUN-POSTP	_	4	name	_	_
6	深海まで	_	NOUN	NOUN-POSTP	_	7	nmod	_	_
7	生息する	_	VERB	VERB-AUX	_	8	acl:relcl	_	_
8	ものも	_	NOUN	NOUN-POSTP	_	9	nmod	_	_
9	いる。	_	VERB	VERB-AUX	_	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 name	color:blue
1	ジェボムの	_	NOUN	NOUN-POSTP	_	2	nmod	_	_
2	俳優	_	NOUN	NOUN	_	4	cc	_	_
3	および	_	CONJ	CONJ	_	2	name	_	_
4	歌手活動など	_	NOUN	NOUN	_	7	nmod	_	_
5	、	_	PUNCT	.	_	4	punct	_	_
6	芸能活動全般を	_	NOUN	NOUN-PRT	_	4	name	_	_
7	支援する	_	VERB	VERB-AUX	_	8	acl:relcl	_	_
8	見通しだ。	_	NOUN	NOUN-VERB-AUX	_	0	root	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

645 nodes (0%) are attached to their parents as `name`.

645 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `name`: [ja-pos/PROPN]()-[ja-pos/PROPN]() (645; 100% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 name	color:blue
1	_	先駆け	NOUN	NOUN	_	26	nsubj	_	Offset=0-4
2	_	_	ADP	ADP	_	1	case	_	Offset=4-5
3	_	_	NOUN	NOUN	_	26	nmod	_	Offset=5-7
4	_	_	PUNCT	PUNCT	_	3	punct	_	Offset=7-8
5	_	_	NOUN	NOUN	_	6	compound	_	Offset=8-10
6	_	_	NOUN	NOUN	_	9	compound	_	Offset=10-11
7	_	シガ	PROPN	PROPN	_	9	compound	_	Offset=11-13
8	_	_	NOUN	NOUN	_	9	compound	_	Offset=13-15
9	_	_	NOUN	NOUN	_	23	iobj	_	Offset=15-16
10	_	_	ADP	ADP	_	9	case	_	Offset=16-17
11	_	_	PUNCT	PUNCT	_	9	punct	_	Offset=17-18
12	_	_	NOUN	NOUN	_	16	nmod	_	Offset=18-20
13	_	_	ADP	ADP	_	12	case	_	Offset=20-21
14	_	オクムラ	PROPN	PROPN	_	16	compound	_	Offset=21-23
15	_	_	PROPN	PROPN	_	14	name	_	Offset=23-25
16	_	_	NOUN	NOUN	_	23	dobj	_	Offset=25-26
17	_	_	ADP	ADP	_	16	case	_	Offset=26-27
18	_	_	NOUN	NOUN	_	19	compound	_	Offset=27-29
19	_	_	NOUN	NOUN	_	23	nmod	_	Offset=29-31
20	_	_	ADP	ADP	_	19	case	_	Offset=31-32
21	_	為る	VERB	VERB	_	20	mwe	_	Offset=32-33
22	_	_	SCONJ	SCONJ	_	20	mwe	_	Offset=33-34
23	_	_	VERB	VERB	_	26	iobj	_	Offset=34-36
24	_	為る	AUX	AUX	_	23	aux	_	Offset=36-38
25	_	_	ADP	ADP	_	23	case	_	Offset=38-39
26	_	_	VERB	VERB	_	0	root	_	Offset=39-41
27	_	為る	AUX	AUX	_	26	aux	_	Offset=41-42
28	_	_	AUX	AUX	_	26	aux	_	Offset=42-43
29	_	_	PUNCT	PUNCT	_	26	punct	_	Offset=43-44

~~~


