

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

10905 nodes (4%) are attached to their parents as `nsubj`.

10905 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.05621274644658.

The following 35 pairs of parts of speech are connected with `nsubj`: [ja-pos/VERB]()-[ja-pos/NOUN]() (7287; 67% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (1325; 12% instances), [ja-pos/ADJ]()-[ja-pos/NOUN]() (1264; 12% instances), [ja-pos/VERB]()-[ja-pos/PROPN]() (426; 4% instances), [ja-pos/VERB]()-[ja-pos/PRON]() (152; 1% instances), [ja-pos/NOUN]()-[ja-pos/PRON]() (72; 1% instances), [ja-pos/NOUN]()-[ja-pos/PROPN]() (63; 1% instances), [ja-pos/ADV]()-[ja-pos/NOUN]() (52; 0% instances), [ja-pos/NOUN]()-[ja-pos/VERB]() (44; 0% instances), [ja-pos/NUM]()-[ja-pos/NOUN]() (26; 0% instances), [ja-pos/VERB]()-[ja-pos/VERB]() (23; 0% instances), [ja-pos/PROPN]()-[ja-pos/NOUN]() (22; 0% instances), [ja-pos/ADJ]()-[ja-pos/PRON]() (21; 0% instances), [ja-pos/VERB]()-[ja-pos/CONJ]() (18; 0% instances), [ja-pos/ADJ]()-[ja-pos/PROPN]() (17; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADJ]() (15; 0% instances), [ja-pos/NOUN]()-[ja-pos/NUM]() (12; 0% instances), [ja-pos/PRON]()-[ja-pos/NOUN]() (11; 0% instances), [ja-pos/ADJ]()-[ja-pos/VERB]() (10; 0% instances), [ja-pos/VERB]()-[ja-pos/ADJ]() (8; 0% instances), [ja-pos/VERB]()-[ja-pos/NUM]() (8; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADV]() (5; 0% instances), [ja-pos/VERB]()-[ja-pos/ADV]() (5; 0% instances), [ja-pos/ADJ]()-[ja-pos/ADV]() (3; 0% instances), [ja-pos/CONJ]()-[ja-pos/NOUN]() (3; 0% instances), [ja-pos/INTJ]()-[ja-pos/PRON]() (2; 0% instances), [ja-pos/NOUN]()-[ja-pos/CONJ]() (2; 0% instances), [ja-pos/PART]()-[ja-pos/NOUN]() (2; 0% instances), [ja-pos/ADJ]()-[ja-pos/INTJ]() (1; 0% instances), [ja-pos/ADV]()-[ja-pos/PROPN]() (1; 0% instances), [ja-pos/ADV]()-[ja-pos/VERB]() (1; 0% instances), [ja-pos/NUM]()-[ja-pos/PRON]() (1; 0% instances), [ja-pos/NUM]()-[ja-pos/VERB]() (1; 0% instances), [ja-pos/PRON]()-[ja-pos/PRON]() (1; 0% instances), [ja-pos/PROPN]()-[ja-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj	color:blue
1	_	_	NOUN	NOUN	_	2	compound	_	Offset=0-3
2	_	_	NOUN	NOUN	_	6	nsubj	_	Offset=3-4
3	_	_	ADP	ADP	_	2	case	_	Offset=4-5
4	_	_	ADJ	ADJ	_	6	iobj	_	Offset=5-8
5	_	だ	AUX	AUX	_	4	aux	_	Offset=8-9
6	_	為る	VERB	VERB	_	0	root	_	Offset=9-10
7	_	_	AUX	AUX	_	6	aux	_	Offset=10-11
8	_	_	PUNCT	PUNCT	_	6	punct	_	Offset=11-12

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 nsubj	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj	color:blue
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


