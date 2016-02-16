

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

1243 nodes (0%) are attached to their parents as `ccomp`.

1243 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.34593724859212.

The following 13 pairs of parts of speech are connected with `ccomp`: [ja-pos/VERB]()-[ja-pos/VERB]() (885; 71% instances), [ja-pos/VERB]()-[ja-pos/NOUN]() (213; 17% instances), [ja-pos/VERB]()-[ja-pos/ADJ]() (98; 8% instances), [ja-pos/NOUN]()-[ja-pos/VERB]() (12; 1% instances), [ja-pos/ADJ]()-[ja-pos/VERB]() (11; 1% instances), [ja-pos/VERB]()-[ja-pos/ADV]() (5; 0% instances), [ja-pos/ADJ]()-[ja-pos/NOUN]() (4; 0% instances), [ja-pos/VERB]()-[ja-pos/NUM]() (4; 0% instances), [ja-pos/ADJ]()-[ja-pos/ADJ]() (3; 0% instances), [ja-pos/VERB]()-[ja-pos/INTJ]() (3; 0% instances), [ja-pos/VERB]()-[ja-pos/PRON]() (3; 0% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (1; 0% instances), [ja-pos/VERB]()-[ja-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 ccomp	color:blue
1	_	_	NUM	NUM	_	2	nummod	_	Offset=0-1
2	_	_	NUM	NUM	_	4	nummod	_	Offset=1-2
3	_	_	NUM	NUM	_	4	nummod	_	Offset=2-3
4	_	_	NUM	NUM	_	6	iobj	_	Offset=3-4
5	_	_	ADP	ADP	_	4	dep	_	Offset=4-5
6	_	行く	VERB	VERB	_	9	ccomp	_	Offset=5-7
7	_	_	AUX	AUX	_	6	aux	_	Offset=7-9
8	_	_	ADP	ADP	_	6	case	_	Offset=9-10
9	_	_	VERB	VERB	_	0	root	_	Offset=10-12
10	_	為る	AUX	AUX	_	9	aux	_	Offset=12-13
11	_	_	SCONJ	SCONJ	_	9	mark	_	Offset=13-14
12	_	居る	AUX	AUX	_	9	aux	_	Offset=14-16
13	_	_	PUNCT	PUNCT	_	9	punct	_	Offset=16-17

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 27 ccomp	color:blue
1	_	_	PUNCT	PUNCT	_	27	punct	_	Offset=0-1
2	_	_	NOUN	NOUN	_	6	dobj	_	Offset=1-3
3	_	_	ADP	ADP	_	2	case	_	Offset=3-4
4	_	_	NOUN	NOUN	_	6	iobj	_	Offset=4-6
5	_	_	ADP	ADP	_	4	case	_	Offset=6-7
6	_	為る	VERB	VERB	_	8	acl	_	Offset=7-9
7	_	_	NOUN	NOUN	_	8	compound	_	Offset=9-11
8	_	_	NOUN	NOUN	_	10	nsubj	_	Offset=11-13
9	_	_	ADP	ADP	_	8	case	_	Offset=13-14
10	_	_	ADJ	ADJ	_	27	dep	_	Offset=14-16
11	_	_	SCONJ	SCONJ	_	10	mark	_	Offset=16-17
12	_	_	PUNCT	PUNCT	_	10	punct	_	Offset=17-18
13	_	_	NOUN	NOUN	_	27	nmod	_	Offset=18-20
14	_	_	ADP	ADP	_	13	case	_	Offset=20-21
15	_	_	NUM	NUM	_	16	nummod	_	Offset=21-22
16	_	_	NOUN	NOUN	_	20	dep	_	Offset=22-23
17	_	_	ADP	ADP	_	16	case	_	Offset=23-24
18	_	_	NUM	NUM	_	19	nummod	_	Offset=24-25
19	_	_	NUM	NUM	_	20	nummod	_	Offset=25-26
20	_	_	NOUN	NOUN	_	25	nsubj	_	Offset=26-27
21	_	_	ADP	ADP	_	20	case	_	Offset=27-28
22	_	_	NOUN	NOUN	_	23	compound	_	Offset=28-29
23	_	_	NOUN	NOUN	_	25	iobj	_	Offset=29-31
24	_	_	ADP	ADP	_	23	case	_	Offset=31-32
25	_	成る	VERB	VERB	_	27	acl	_	Offset=32-34
26	_	_	AUX	AUX	_	25	neg	_	Offset=34-36
27	_	_	NOUN	NOUN	_	30	ccomp	_	Offset=36-38
28	_	_	PUNCT	PUNCT	_	27	punct	_	Offset=38-39
29	_	_	ADP	ADP	_	27	case	_	Offset=39-40
30	_	_	VERB	VERB	_	0	root	_	Offset=40-42
31	_	為る	AUX	AUX	_	30	aux	_	Offset=42-44
32	_	_	PUNCT	PUNCT	_	30	punct	_	Offset=44-45

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 ccomp	color:blue
1	_	_	NOUN	NOUN	_	3	compound	_	Offset=0-1
2	_	_	NOUN	NOUN	_	3	compound	_	Offset=1-3
3	_	_	NOUN	NOUN	_	13	nsubj	_	Offset=3-5
4	_	_	ADP	ADP	_	3	case	_	Offset=5-6
5	_	_	PUNCT	PUNCT	_	10	punct	_	Offset=6-7
6	_	_	NOUN	NOUN	_	10	nmod	_	Offset=7-8
7	_	_	ADP	ADP	_	6	case	_	Offset=8-10
8	_	_	NOUN	NOUN	_	10	nsubj	_	Offset=10-12
9	_	_	ADP	ADP	_	8	case	_	Offset=12-13
10	_	_	ADJ	ADJ	_	13	ccomp	_	Offset=13-15
11	_	_	PUNCT	PUNCT	_	10	punct	_	Offset=15-16
12	_	_	ADP	ADP	_	10	case	_	Offset=16-17
13	_	_	VERB	VERB	_	0	root	_	Offset=17-19
14	_	為る	AUX	AUX	_	13	aux	_	Offset=19-20
15	_	_	AUX	AUX	_	13	aux	_	Offset=20-21
16	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=21-22

~~~


