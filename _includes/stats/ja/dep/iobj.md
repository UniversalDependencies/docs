

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

6645 nodes (2%) are attached to their parents as `iobj`.

6644 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.12340105342363.

The following 25 pairs of parts of speech are connected with `iobj`: [ja-pos/VERB]()-[ja-pos/NOUN]() (5481; 82% instances), [ja-pos/VERB]()-[ja-pos/VERB]() (255; 4% instances), [ja-pos/ADJ]()-[ja-pos/NOUN]() (252; 4% instances), [ja-pos/VERB]()-[ja-pos/PROPN]() (190; 3% instances), [ja-pos/VERB]()-[ja-pos/ADJ]() (179; 3% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (94; 1% instances), [ja-pos/VERB]()-[ja-pos/PRON]() (94; 1% instances), [ja-pos/VERB]()-[ja-pos/NUM]() (18; 0% instances), [ja-pos/VERB]()-[ja-pos/ADV]() (14; 0% instances), [ja-pos/ADJ]()-[ja-pos/PROPN]() (12; 0% instances), [ja-pos/NOUN]()-[ja-pos/PROPN]() (11; 0% instances), [ja-pos/ADJ]()-[ja-pos/VERB]() (10; 0% instances), [ja-pos/ADJ]()-[ja-pos/PRON]() (9; 0% instances), [ja-pos/ADV]()-[ja-pos/NOUN]() (8; 0% instances), [ja-pos/NOUN]()-[ja-pos/VERB]() (3; 0% instances), [ja-pos/VERB]()-[ja-pos/CONJ]() (3; 0% instances), [ja-pos/NOUN]()-[ja-pos/PRON]() (2; 0% instances), [ja-pos/PROPN]()-[ja-pos/NOUN]() (2; 0% instances), [ja-pos/PROPN]()-[ja-pos/PROPN]() (2; 0% instances), [ja-pos/ADJ]()-[ja-pos/ADJ]() (1; 0% instances), [ja-pos/ADJ]()-[ja-pos/CONJ]() (1; 0% instances), [ja-pos/ADV]()-[ja-pos/VERB]() (1; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADJ]() (1; 0% instances), [ja-pos/NOUN]()-[ja-pos/NUM]() (1; 0% instances), [ja-pos/NUM]()-[ja-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 iobj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 iobj	color:blue
1	_	_	NUM	NUM	_	2	nummod	_	Offset=0-1
2	_	_	NOUN	NOUN	_	8	nsubj	_	Offset=1-2
3	_	_	ADP	ADP	_	2	case	_	Offset=2-3
4	_	_	NOUN	NOUN	_	8	dobj	_	Offset=3-5
5	_	_	ADP	ADP	_	4	case	_	Offset=5-6
6	_	_	NOUN	NOUN	_	7	compound	_	Offset=6-8
7	_	_	NOUN	NOUN	_	8	dep	_	Offset=8-10
8	_	為る	VERB	VERB	_	12	iobj	_	Offset=10-11
9	_	_	SCONJ	SCONJ	_	8	mark	_	Offset=11-12
10	_	居る	AUX	AUX	_	8	aux	_	Offset=12-14
11	_	_	ADP	ADP	_	8	case	_	Offset=14-15
12	_	言う	VERB	VERB	_	0	root	_	Offset=15-17
13	_	_	PUNCT	PUNCT	_	12	punct	_	Offset=17-18

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 iobj	color:blue
1	_	_	NOUN	NOUN	_	3	iobj	_	Offset=0-2
2	_	_	ADP	ADP	_	1	case	_	Offset=2-3
3	_	為る	VERB	VERB	_	4	acl	_	Offset=3-5
4	_	事	NOUN	NOUN	_	5	compound	_	Offset=5-7
5	_	_	NOUN	NOUN	_	10	iobj	_	Offset=7-9
6	_	_	ADP	ADP	_	5	case	_	Offset=9-10
7	_	_	ADP	ADP	_	5	case	_	Offset=10-11
8	_	_	NOUN	NOUN	_	10	nsubj	_	Offset=11-13
9	_	_	ADP	ADP	_	8	case	_	Offset=13-14
10	_	無い	ADJ	ADJ	_	0	root	_	Offset=14-16
11	_	_	PUNCT	PUNCT	_	10	punct	_	Offset=16-17

~~~


