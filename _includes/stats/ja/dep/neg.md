

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

1811 nodes (1%) are attached to their parents as `neg`.

1811 instances of `neg` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.16841524019879.

The following 6 pairs of parts of speech are connected with `neg`: [ja-pos/VERB]()-[ja-pos/AUX]() (1589; 88% instances), [ja-pos/NOUN]()-[ja-pos/AUX]() (133; 7% instances), [ja-pos/ADJ]()-[ja-pos/AUX]() (78; 4% instances), [ja-pos/ADV]()-[ja-pos/AUX]() (6; 0% instances), [ja-pos/PRON]()-[ja-pos/AUX]() (3; 0% instances), [ja-pos/PROPN]()-[ja-pos/AUX]() (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 neg	color:blue
1	_	_	NUM	NUM	_	2	nummod	_	Offset=0-1
2	_	_	NOUN	NOUN	_	3	nmod	_	Offset=1-3
3	_	経つ	VERB	VERB	_	8	advcl	_	Offset=3-5
4	_	_	SCONJ	SCONJ	_	3	mark	_	Offset=5-6
5	_	_	ADP	ADP	_	3	dep	_	Offset=6-7
6	_	引き取る	VERB	VERB	_	8	advcl	_	Offset=7-11
7	_	_	ADP	ADP	_	6	dep	_	Offset=11-12
8	_	来る	VERB	VERB	_	10	acl	_	Offset=12-13
9	_	_	AUX	AUX	_	8	neg	_	Offset=13-15
10	_	為	NOUN	NOUN	_	17	nmod	_	Offset=15-17
11	_	_	PUNCT	PUNCT	_	10	punct	_	Offset=17-18
12	_	_	NOUN	NOUN	_	13	compound	_	Offset=18-20
13	_	_	NOUN	NOUN	_	17	nsubj	_	Offset=20-21
14	_	_	ADP	ADP	_	13	case	_	Offset=21-22
15	_	_	NOUN	NOUN	_	17	iobj	_	Offset=22-25
16	_	_	ADP	ADP	_	15	case	_	Offset=25-26
17	_	届ける	VERB	VERB	_	0	root	_	Offset=26-28
18	_	_	SCONJ	SCONJ	_	17	mark	_	Offset=28-29
19	_	居る	AUX	AUX	_	17	aux	_	Offset=29-30
20	_	_	AUX	AUX	_	17	aux	_	Offset=30-31
21	_	_	PUNCT	PUNCT	_	17	punct	_	Offset=31-32

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 neg	color:blue
1	_	_	NOUN	NOUN	_	2	compound	_	Offset=0-2
2	_	_	NOUN	NOUN	_	4	acl	_	Offset=2-3
3	_	だ	AUX	AUX	_	2	cop	_	Offset=3-4
4	_	_	NOUN	NOUN	_	6	nsubj	_	Offset=4-6
5	_	_	ADP	ADP	_	4	case	_	Offset=6-7
6	_	_	ADJ	ADJ	_	12	advcl	_	Offset=7-10
7	_	_	SCONJ	SCONJ	_	6	mark	_	Offset=10-11
8	_	_	PUNCT	PUNCT	_	12	punct	_	Offset=11-12
9	_	_	NUM	NUM	_	10	nummod	_	Offset=12-13
10	_	_	NOUN	NOUN	_	12	dep	_	Offset=13-14
11	_	_	ADP	ADP	_	10	case	_	Offset=14-16
12	_	_	NOUN	NOUN	_	0	root	_	Offset=16-18
13	_	_	PUNCT	PUNCT	_	12	punct	_	Offset=18-19
14	_	くらい	PART	PART	_	12	mark	_	Offset=19-22
15	_	_	ADP	ADP	_	12	dep	_	Offset=22-23
16	_	_	ADP	ADP	_	12	dep	_	Offset=23-24
17	_	無い	AUX	AUX	_	12	neg	_	Offset=24-27
18	_	うー	AUX	AUX	_	12	aux	_	Offset=27-28
19	_	_	PART	PART	_	12	mark	_	Offset=28-29
20	_	_	PUNCT	PUNCT	_	12	punct	_	Offset=29-30

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 neg	color:blue
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


