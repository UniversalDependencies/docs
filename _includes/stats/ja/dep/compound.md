

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

30633 nodes (11%) are attached to their parents as `compound`.

30633 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3477948617504.

The following 21 pairs of parts of speech are connected with `compound`: [ja-pos/NOUN]()-[ja-pos/NOUN]() (25931; 85% instances), [ja-pos/NOUN]()-[ja-pos/PROPN]() (4001; 13% instances), [ja-pos/PROPN]()-[ja-pos/NOUN]() (345; 1% instances), [ja-pos/PROPN]()-[ja-pos/PROPN]() (111; 0% instances), [ja-pos/CONJ]()-[ja-pos/PROPN]() (83; 0% instances), [ja-pos/NUM]()-[ja-pos/NOUN]() (57; 0% instances), [ja-pos/NOUN]()-[ja-pos/NUM]() (35; 0% instances), [ja-pos/NUM]()-[ja-pos/PROPN]() (23; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADJ]() (13; 0% instances), [ja-pos/VERB]()-[ja-pos/PROPN]() (5; 0% instances), [ja-pos/NOUN]()-[ja-pos/CONJ]() (4; 0% instances), [ja-pos/NOUN]()-[ja-pos/VERB]() (4; 0% instances), [ja-pos/PRON]()-[ja-pos/NOUN]() (4; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADV]() (3; 0% instances), [ja-pos/NOUN]()-[ja-pos/PRON]() (3; 0% instances), [ja-pos/PROPN]()-[ja-pos/NUM]() (3; 0% instances), [ja-pos/ADJ]()-[ja-pos/NOUN]() (2; 0% instances), [ja-pos/ADJ]()-[ja-pos/PROPN]() (2; 0% instances), [ja-pos/VERB]()-[ja-pos/NOUN]() (2; 0% instances), [ja-pos/ADV]()-[ja-pos/PROPN]() (1; 0% instances), [ja-pos/NUM]()-[ja-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	_	_	ADV	ADV	_	12	advmod	_	Offset=0-2
2	_	_	NOUN	NOUN	_	3	compound	_	Offset=2-3
3	_	_	PROPN	PROPN	_	4	compound	_	Offset=3-5
4	_	_	NOUN	NOUN	_	8	dobj	_	Offset=5-7
5	_	_	ADP	ADP	_	4	case	_	Offset=7-8
6	_	_	NOUN	NOUN	_	8	nmod	_	Offset=8-10
7	_	_	ADP	ADP	_	6	case	_	Offset=10-12
8	_	作る	VERB	VERB	_	9	acl	_	Offset=12-15
9	_	積り	NOUN	NOUN	_	12	acl	_	Offset=15-18
10	_	だ	AUX	AUX	_	9	cop	_	Offset=18-20
11	_	_	AUX	AUX	_	9	aux	_	Offset=20-21
12	_	訳	NOUN	NOUN	_	0	root	_	Offset=21-23
13	_	_	ADP	ADP	_	12	case	_	Offset=23-24
14	_	_	ADP	ADP	_	12	dep	_	Offset=24-25
15	_	無い	AUX	AUX	_	12	dep	_	Offset=25-27
16	_	_	PUNCT	PUNCT	_	12	punct	_	Offset=27-28

~~~


