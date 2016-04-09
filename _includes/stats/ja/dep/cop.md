

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

3450 nodes (1%) are attached to their parents as `cop`.

3449 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.46579710144928.

The following 8 pairs of parts of speech are connected with `cop`: [ja-pos/NOUN]()-[ja-pos/AUX]() (2966; 86% instances), [ja-pos/VERB]()-[ja-pos/AUX]() (299; 9% instances), [ja-pos/ADJ]()-[ja-pos/AUX]() (103; 3% instances), [ja-pos/PROPN]()-[ja-pos/AUX]() (31; 1% instances), [ja-pos/DET]()-[ja-pos/AUX]() (25; 1% instances), [ja-pos/PRON]()-[ja-pos/AUX]() (17; 0% instances), [ja-pos/ADV]()-[ja-pos/AUX]() (5; 0% instances), [ja-pos/NUM]()-[ja-pos/AUX]() (4; 0% instances).


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 32 cop	color:blue
1	_	_	NOUN	NOUN	_	31	nmod	_	Offset=0-4
2	_	_	ADP	ADP	_	1	case	_	Offset=4-5
3	_	因る	VERB	VERB	_	2	mwe	_	Offset=5-7
4	_	_	SCONJ	SCONJ	_	2	mwe	_	Offset=7-8
5	_	_	PUNCT	PUNCT	_	1	punct	_	Offset=8-9
6	_	_	NUM	NUM	_	7	nummod	_	Offset=9-10
7	_	_	NOUN	NOUN	_	13	nmod	_	Offset=10-11
8	_	モスクワ-Moskva	PROPN	PROPN	_	13	nmod	_	Offset=11-15
9	_	_	ADP	ADP	_	8	case	_	Offset=15-16
10	_	_	NOUN	NOUN	_	11	compound	_	Offset=16-18
11	_	_	NOUN	NOUN	_	13	dobj	_	Offset=18-20
12	_	_	ADP	ADP	_	11	case	_	Offset=20-21
13	_	_	VERB	VERB	_	18	acl	_	Offset=21-23
14	_	為る	AUX	AUX	_	13	aux	_	Offset=23-24
15	_	_	AUX	AUX	_	13	aux	_	Offset=24-25
16	_	グラチョフ-外国	PROPN	PROPN	_	18	compound	_	Offset=25-30
17	_	_	NOUN	NOUN	_	18	compound	_	Offset=30-32
18	_	_	NOUN	NOUN	_	28	nsubj	_	Offset=32-33
19	_	_	ADP	ADP	_	18	case	_	Offset=33-34
20	_	モスクワ-Moskva	PROPN	PROPN	_	21	compound	_	Offset=34-38
21	_	_	NOUN	NOUN	_	23	dobj	_	Offset=38-40
22	_	_	ADP	ADP	_	21	case	_	Offset=40-41
23	_	_	VERB	VERB	_	28	advcl	_	Offset=41-43
24	_	為る	AUX	AUX	_	23	aux	_	Offset=43-44
25	_	_	PUNCT	PUNCT	_	23	punct	_	Offset=44-45
26	_	_	NOUN	NOUN	_	28	iobj	_	Offset=45-47
27	_	_	ADP	ADP	_	26	case	_	Offset=47-48
28	_	留まる	VERB	VERB	_	31	acl	_	Offset=48-52
29	_	_	SCONJ	SCONJ	_	28	mark	_	Offset=52-53
30	_	居る	AUX	AUX	_	28	aux	_	Offset=53-55
31	_	_	NOUN	NOUN	_	0	root	_	Offset=55-57
32	_	_	AUX	AUX	_	31	cop	_	Offset=57-58
33	_	_	PUNCT	PUNCT	_	31	punct	_	Offset=58-59

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 cop	color:blue
1	_	_	NOUN	NOUN	_	5	nsubj	_	Offset=0-3
2	_	_	ADP	ADP	_	1	case	_	Offset=3-4
3	_	_	NOUN	NOUN	_	5	dobj	_	Offset=4-6
4	_	_	ADP	ADP	_	3	case	_	Offset=6-7
5	_	_	VERB	VERB	_	12	advcl	_	Offset=7-9
6	_	為る	AUX	AUX	_	5	aux	_	Offset=9-10
7	_	_	PUNCT	PUNCT	_	5	punct	_	Offset=10-11
8	_	_	NOUN	NOUN	_	12	nsubj	_	Offset=11-14
9	_	_	ADP	ADP	_	8	case	_	Offset=14-15
10	_	_	NOUN	NOUN	_	12	iobj	_	Offset=15-17
11	_	_	ADP	ADP	_	10	case	_	Offset=17-18
12	_	_	VERB	VERB	_	0	root	_	Offset=18-20
13	_	為る	AUX	AUX	_	12	aux	_	Offset=20-21
14	_	_	AUX	AUX	_	12	aux	_	Offset=21-22
15	_	_	SCONJ	SCONJ	_	12	mark	_	Offset=22-23
16	_	_	AUX	AUX	_	12	cop	_	Offset=23-24
17	_	_	SCONJ	SCONJ	_	12	mark	_	Offset=24-26
18	_	_	PUNCT	PUNCT	_	12	punct	_	Offset=26-27

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 22 cop	color:blue
1	_	_	NOUN	NOUN	_	5	iobj	_	Offset=0-2
2	_	_	ADP	ADP	_	1	case	_	Offset=2-3
3	_	_	NOUN	NOUN	_	5	dobj	_	Offset=3-4
4	_	_	ADP	ADP	_	3	case	_	Offset=4-5
5	_	_	VERB	VERB	_	8	acl	_	Offset=5-8
6	_	_	NOUN	NOUN	_	7	compound	_	Offset=8-10
7	_	_	NOUN	NOUN	_	8	compound	_	Offset=10-12
8	_	_	NOUN	NOUN	_	18	nsubj	_	Offset=12-13
9	_	_	ADP	ADP	_	8	case	_	Offset=13-14
10	_	_	PUNCT	PUNCT	_	14	punct	_	Offset=14-15
11	_	スーパー-super	NOUN	NOUN	_	13	compound	_	Offset=15-19
12	_	タイラ	PART	PART	_	13	case	_	Offset=19-20
13	_	_	NOUN	NOUN	_	14	compound	_	Offset=20-22
14	_	_	NOUN	NOUN	_	18	nmod	_	Offset=22-24
15	_	_	PUNCT	PUNCT	_	14	punct	_	Offset=24-25
16	_	_	ADP	ADP	_	14	case	_	Offset=25-26
17	_	_	ADP	ADP	_	14	case	_	Offset=26-27
18	_	御洒落	ADJ	ADJ	_	0	root	_	Offset=27-31
19	_	だ	AUX	AUX	_	18	aux	_	Offset=31-32
20	_	無い	AUX	AUX	_	18	neg	_	Offset=32-34
21	_	_	SCONJ	SCONJ	_	18	mark	_	Offset=34-35
22	_	_	AUX	AUX	_	18	cop	_	Offset=35-36
23	_	そう-伝聞	AUX	AUX	_	18	aux	_	Offset=36-38
24	_	_	AUX	AUX	_	18	aux	_	Offset=38-39
25	_	_	PUNCT	PUNCT	_	18	punct	_	Offset=39-40

~~~


