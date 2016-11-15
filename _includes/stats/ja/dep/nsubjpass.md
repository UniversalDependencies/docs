

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

939 nodes (0%) are attached to their parents as `nsubjpass`.

939 instances of `nsubjpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.64110756123536.

The following 5 pairs of parts of speech are connected with `nsubjpass`: [ja-pos/VERB]()-[ja-pos/NOUN]() (911; 97% instances), [ja-pos/VERB]()-[ja-pos/PRON]() (9; 1% instances), [ja-pos/VERB]()-[ja-pos/PROPN]() (9; 1% instances), [ja-pos/VERB]()-[ja-pos/VERB]() (8; 1% instances), [ja-pos/VERB]()-[ja-pos/ADV]() (2; 0% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 nsubjpass	color:blue
1	_	_	NOUN	NOUN	_	3	nmod	_	Offset=0-3
2	_	_	ADP	ADP	_	1	case	_	Offset=3-4
3	_	_	NOUN	NOUN	_	5	iobj	_	Offset=4-6
4	_	_	ADP	ADP	_	3	case	_	Offset=6-7
5	_	言う	VERB	VERB	_	6	acl	_	Offset=7-9
6	_	事	NOUN	NOUN	_	13	advcl	_	Offset=9-11
7	_	_	ADP	ADP	_	6	case	_	Offset=11-12
8	_	_	PRON	PRON	_	13	nsubj	_	Offset=12-14
9	_	_	ADP	ADP	_	8	case	_	Offset=14-15
10	_	_	ADJ	ADJ	_	11	amod	_	Offset=15-18
11	_	_	NOUN	NOUN	_	13	iobj	_	Offset=18-19
12	_	_	ADP	ADP	_	11	case	_	Offset=19-20
13	_	上る	VERB	VERB	_	21	advcl	_	Offset=20-22
14	_	_	AUX	AUX	_	13	aux	_	Offset=22-23
15	_	_	SCONJ	SCONJ	_	13	mark	_	Offset=23-26
16	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=26-27
17	_	未だ	ADV	ADV	_	21	advmod	_	Offset=27-29
18	_	_	ADJ	ADJ	_	19	amod	_	Offset=29-33
19	_	_	NOUN	NOUN	_	21	nsubjpass	_	Offset=33-35
20	_	_	ADP	ADP	_	19	case	_	Offset=35-36
21	_	作る	VERB	VERB	_	0	root	_	Offset=36-38
22	_	れる	AUX	AUX	_	21	auxpass	_	Offset=38-39
23	_	_	SCONJ	SCONJ	_	21	mark	_	Offset=39-40
24	_	居る	AUX	AUX	_	21	aux	_	Offset=40-41
25	_	_	AUX	AUX	_	21	neg	_	Offset=41-43
26	_	_	PUNCT	PUNCT	_	21	punct	_	Offset=43-44

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 5 nsubjpass	color:blue
1	_	_	NOUN	NOUN	_	2	compound	_	Offset=0-2
2	_	アドバイザー-adviser	NOUN	NOUN	_	5	acl	_	Offset=2-8
3	_	だ	AUX	AUX	_	2	cop	_	Offset=8-9
4	_	有る	AUX	AUX	_	2	aux	_	Offset=9-11
5	_	_	PRON	PRON	_	15	nsubjpass	_	Offset=11-13
6	_	_	ADP	ADP	_	5	case	_	Offset=13-14
7	_	_	PUNCT	PUNCT	_	5	punct	_	Offset=14-15
8	_	_	NOUN	NOUN	_	9	compound	_	Offset=15-19
9	_	_	NOUN	NOUN	_	11	nmod	_	Offset=19-21
10	_	_	ADP	ADP	_	9	case	_	Offset=21-22
11	_	為	NOUN	NOUN	_	15	nmod	_	Offset=22-24
12	_	_	ADP	ADP	_	11	case	_	Offset=24-25
13	_	_	NOUN	NOUN	_	15	nmod	_	Offset=25-27
14	_	_	ADP	ADP	_	13	case	_	Offset=27-29
15	_	_	VERB	VERB	_	0	root	_	Offset=29-31
16	_	為る	AUX	AUX	_	15	aux	_	Offset=31-32
17	_	れる	AUX	AUX	_	15	auxpass	_	Offset=32-33
18	_	_	SCONJ	SCONJ	_	15	mark	_	Offset=33-34
19	_	来る	AUX	AUX	_	15	aux	_	Offset=34-35
20	_	_	AUX	AUX	_	15	aux	_	Offset=35-36
21	_	_	PUNCT	PUNCT	_	15	punct	_	Offset=36-37

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 1 nsubjpass	color:blue
1	_	イスラエル-Israel	PROPN	PROPN	_	14	nsubjpass	_	Offset=0-5
2	_	_	PUNCT	PUNCT	_	1	punct	_	Offset=5-6
3	_	インド-India	PROPN	PROPN	_	1	conj	_	Offset=6-9
4	_	_	PUNCT	PUNCT	_	1	punct	_	Offset=9-10
5	_	パキスタン-Pakistan	PROPN	PROPN	_	1	conj	_	Offset=10-15
6	_	_	ADP	ADP	_	1	case	_	Offset=15-16
7	_	_	NOUN	NOUN	_	8	compound	_	Offset=16-18
8	_	_	NOUN	NOUN	_	12	nmod	_	Offset=18-19
9	_	_	ADP	ADP	_	8	case	_	Offset=19-20
10	_	_	NOUN	NOUN	_	12	compound	_	Offset=20-23
11	_	_	NOUN	NOUN	_	12	compound	_	Offset=23-25
12	_	_	NOUN	NOUN	_	14	nmod	_	Offset=25-26
13	_	_	ADP	ADP	_	12	case	_	Offset=26-27
14	_	見る	VERB	VERB	_	22	advcl	_	Offset=27-28
15	_	られる	AUX	AUX	_	14	auxpass	_	Offset=28-30
16	_	_	SCONJ	SCONJ	_	14	mark	_	Offset=30-31
17	_	居る	AUX	AUX	_	14	aux	_	Offset=31-33
18	_	_	SCONJ	SCONJ	_	14	mark	_	Offset=33-34
19	_	_	PUNCT	PUNCT	_	14	punct	_	Offset=34-35
20	_	_	NOUN	NOUN	_	22	iobj	_	Offset=35-38
21	_	_	ADP	ADP	_	20	case	_	Offset=38-39
22	_	_	VERB	VERB	_	0	root	_	Offset=39-41
23	_	為る	AUX	AUX	_	22	aux	_	Offset=41-42
24	_	_	SCONJ	SCONJ	_	22	mark	_	Offset=42-43
25	_	居る	AUX	AUX	_	22	aux	_	Offset=43-44
26	_	_	AUX	AUX	_	22	neg	_	Offset=44-46
27	_	_	PUNCT	PUNCT	_	22	punct	_	Offset=46-47

~~~


