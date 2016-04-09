

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

8370 nodes (3%) are attached to their parents as `acl`.

8370 instances of `acl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.98996415770609.

The following 26 pairs of parts of speech are connected with `acl`: [ja-pos/NOUN]()-[ja-pos/VERB]() (6816; 81% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (643; 8% instances), [ja-pos/NOUN]()-[ja-pos/ADJ]() (630; 8% instances), [ja-pos/PROPN]()-[ja-pos/VERB]() (161; 2% instances), [ja-pos/PROPN]()-[ja-pos/NOUN]() (20; 0% instances), [ja-pos/NOUN]()-[ja-pos/DET]() (19; 0% instances), [ja-pos/VERB]()-[ja-pos/VERB]() (14; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADV]() (12; 0% instances), [ja-pos/NOUN]()-[ja-pos/PROPN]() (11; 0% instances), [ja-pos/PRON]()-[ja-pos/VERB]() (8; 0% instances), [ja-pos/PROPN]()-[ja-pos/ADJ]() (7; 0% instances), [ja-pos/CONJ]()-[ja-pos/VERB]() (6; 0% instances), [ja-pos/NUM]()-[ja-pos/VERB]() (5; 0% instances), [ja-pos/CONJ]()-[ja-pos/NOUN]() (4; 0% instances), [ja-pos/VERB]()-[ja-pos/NOUN]() (3; 0% instances), [ja-pos/ADJ]()-[ja-pos/VERB]() (1; 0% instances), [ja-pos/CONJ]()-[ja-pos/ADJ]() (1; 0% instances), [ja-pos/NOUN]()-[ja-pos/CONJ]() (1; 0% instances), [ja-pos/NOUN]()-[ja-pos/NUM]() (1; 0% instances), [ja-pos/NOUN]()-[ja-pos/PART]() (1; 0% instances), [ja-pos/NOUN]()-[ja-pos/PRON]() (1; 0% instances), [ja-pos/PRON]()-[ja-pos/ADJ]() (1; 0% instances), [ja-pos/PRON]()-[ja-pos/NOUN]() (1; 0% instances), [ja-pos/PROPN]()-[ja-pos/CONJ]() (1; 0% instances), [ja-pos/PROPN]()-[ja-pos/PROPN]() (1; 0% instances), [ja-pos/VERB]()-[ja-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 acl	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 acl	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl	color:blue
1	_	_	ADJ	ADJ	_	2	amod	_	Offset=0-3
2	_	_	NOUN	NOUN	_	4	nsubj	_	Offset=3-5
3	_	_	ADP	ADP	_	2	case	_	Offset=5-6
4	_	_	ADJ	ADJ	_	5	acl	_	Offset=6-8
5	_	_	NOUN	NOUN	_	7	nmod	_	Offset=8-10
6	_	_	ADP	ADP	_	5	case	_	Offset=10-11
7	_	_	NOUN	NOUN	_	9	nsubj	_	Offset=11-12
8	_	_	ADP	ADP	_	7	case	_	Offset=12-13
9	_	勝つ	VERB	VERB	_	18	iobj	_	Offset=13-15
10	_	_	PUNCT	PUNCT	_	9	punct	_	Offset=15-16
11	_	_	NOUN	NOUN	_	13	nsubj	_	Offset=16-18
12	_	_	ADP	ADP	_	11	case	_	Offset=18-19
13	_	_	ADJ	ADJ	_	14	acl	_	Offset=19-21
14	_	_	NOUN	NOUN	_	16	dep	_	Offset=21-23
15	_	_	PART	PART	_	14	case	_	Offset=23-25
16	_	_	VERB	VERB	_	9	conj	_	Offset=25-28
17	_	_	ADP	ADP	_	9	case	_	Offset=28-29
18	_	_	VERB	VERB	_	0	root	_	Offset=29-31
19	_	_	PUNCT	PUNCT	_	18	punct	_	Offset=31-32

~~~


