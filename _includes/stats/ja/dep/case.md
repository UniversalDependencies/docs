

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

55787 nodes (21%) are attached to their parents as `case`.

55581 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.48507716851596.

The following 26 pairs of parts of speech are connected with `case`: [ja-pos/NOUN]()-[ja-pos/ADP]() (47919; 86% instances), [ja-pos/PROPN]()-[ja-pos/ADP]() (2413; 4% instances), [ja-pos/VERB]()-[ja-pos/ADP]() (2133; 4% instances), [ja-pos/NOUN]()-[ja-pos/PART]() (1328; 2% instances), [ja-pos/PRON]()-[ja-pos/ADP]() (856; 2% instances), [ja-pos/ADJ]()-[ja-pos/ADP]() (249; 0% instances), [ja-pos/PRON]()-[ja-pos/PART]() (220; 0% instances), [ja-pos/VERB]()-[ja-pos/PART]() (157; 0% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (155; 0% instances), [ja-pos/NUM]()-[ja-pos/ADP]() (89; 0% instances), [ja-pos/CONJ]()-[ja-pos/ADP]() (86; 0% instances), [ja-pos/PROPN]()-[ja-pos/PART]() (69; 0% instances), [ja-pos/ADV]()-[ja-pos/ADP]() (35; 0% instances), [ja-pos/ADJ]()-[ja-pos/PART]() (20; 0% instances), [ja-pos/NOUN]()-[ja-pos/PRON]() (11; 0% instances), [ja-pos/ADJ]()-[ja-pos/NOUN]() (9; 0% instances), [ja-pos/CONJ]()-[ja-pos/PART]() (8; 0% instances), [ja-pos/NOUN]()-[ja-pos/PROPN]() (8; 0% instances), [ja-pos/NOUN]()-[ja-pos/VERB]() (5; 0% instances), [ja-pos/INTJ]()-[ja-pos/ADP]() (4; 0% instances), [ja-pos/NUM]()-[ja-pos/PART]() (4; 0% instances), [ja-pos/ADV]()-[ja-pos/PART]() (3; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADJ]() (2; 0% instances), [ja-pos/PROPN]()-[ja-pos/NOUN]() (2; 0% instances), [ja-pos/ADJ]()-[ja-pos/VERB]() (1; 0% instances), [ja-pos/ADV]()-[ja-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 case	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 case	color:blue
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


