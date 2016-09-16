

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

492 nodes (0%) are attached to their parents as `csubj`.

492 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.72764227642277.

The following 14 pairs of parts of speech are connected with `csubj`: [ja-pos/NOUN]()-[ja-pos/VERB]() (289; 59% instances), [ja-pos/ADJ]()-[ja-pos/VERB]() (63; 13% instances), [ja-pos/VERB]()-[ja-pos/VERB]() (51; 10% instances), [ja-pos/NOUN]()-[ja-pos/ADJ]() (34; 7% instances), [ja-pos/ADV]()-[ja-pos/VERB]() (26; 5% instances), [ja-pos/PROPN]()-[ja-pos/VERB]() (13; 3% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (4; 1% instances), [ja-pos/ADJ]()-[ja-pos/ADJ]() (3; 1% instances), [ja-pos/ADJ]()-[ja-pos/NOUN]() (2; 0% instances), [ja-pos/VERB]()-[ja-pos/ADJ]() (2; 0% instances), [ja-pos/VERB]()-[ja-pos/NOUN]() (2; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADV]() (1; 0% instances), [ja-pos/NUM]()-[ja-pos/VERB]() (1; 0% instances), [ja-pos/PRON]()-[ja-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 csubj	color:blue
1	_	_	NOUN	NOUN	_	3	nmod	_	Offset=0-1
2	_	_	NOUN	NOUN	_	3	nmod	_	Offset=1-3
3	_	行く	VERB	VERB	_	10	csubj	_	Offset=3-5
4	_	_	AUX	AUX	_	3	neg	_	Offset=5-7
5	_	_	SCONJ	SCONJ	_	3	mark	_	Offset=7-8
6	_	_	ADP	ADP	_	3	case	_	Offset=8-9
7	_	_	PUNCT	PUNCT	_	3	punct	_	Offset=9-10
8	_	曖昧	ADJ	ADJ	_	10	acl	_	Offset=10-14
9	_	だ	AUX	AUX	_	8	aux	_	Offset=14-15
10	_	_	NOUN	NOUN	_	0	root	_	Offset=15-17
11	_	_	AUX	AUX	_	10	cop	_	Offset=17-18
12	_	_	PUNCT	PUNCT	_	10	punct	_	Offset=18-19

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 csubj	color:blue
1	_	_	NOUN	NOUN	_	3	nsubj	_	Offset=0-3
2	_	_	ADP	ADP	_	1	case	_	Offset=3-4
3	_	_	NOUN	NOUN	_	5	iobj	_	Offset=4-6
4	_	_	ADP	ADP	_	3	case	_	Offset=6-7
5	_	言う	VERB	VERB	_	8	csubj	_	Offset=7-9
6	_	_	SCONJ	SCONJ	_	5	mark	_	Offset=9-10
7	_	_	ADP	ADP	_	5	case	_	Offset=10-11
8	_	_	ADJ	ADJ	_	11	iobj	_	Offset=11-14
9	_	_	ADP	ADP	_	8	mark	_	Offset=14-15
10	_	_	ADP	ADP	_	8	case	_	Offset=15-16
11	_	_	VERB	VERB	_	0	root	_	Offset=16-18
12	_	_	CONJ	CONJ	_	11	cc	_	Offset=18-22
13	_	_	PUNCT	PUNCT	_	11	punct	_	Offset=22-23

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 9 csubj	color:blue
1	_	_	NOUN	NOUN	_	2	compound	_	Offset=0-2
2	_	_	NOUN	NOUN	_	3	compound	_	Offset=2-4
3	_	_	NOUN	NOUN	_	9	nmod	_	Offset=4-6
4	_	_	ADP	ADP	_	3	case	_	Offset=6-7
5	_	_	PUNCT	PUNCT	_	3	punct	_	Offset=7-8
6	_	_	ADJ	ADJ	_	7	amod	_	Offset=8-11
7	_	_	NOUN	NOUN	_	9	iobj	_	Offset=11-12
8	_	_	ADP	ADP	_	7	case	_	Offset=12-13
9	_	成る	VERB	VERB	_	23	csubj	_	Offset=13-15
10	_	そう-様態	AUX	AUX	_	9	aux	_	Offset=15-17
11	_	だ	AUX	AUX	_	9	aux	_	Offset=17-18
12	_	_	SCONJ	SCONJ	_	9	mark	_	Offset=18-19
13	_	_	ADP	ADP	_	9	case	_	Offset=19-20
14	_	_	NOUN	NOUN	_	19	nmod	_	Offset=20-22
15	_	_	CONJ	CONJ	_	14	cc	_	Offset=22-23
16	_	_	NOUN	NOUN	_	17	compound	_	Offset=23-25
17	_	_	NOUN	NOUN	_	14	conj	_	Offset=25-26
18	_	_	ADP	ADP	_	14	case	_	Offset=26-27
19	_	_	NOUN	NOUN	_	23	dobj	_	Offset=27-29
20	_	_	ADP	ADP	_	19	case	_	Offset=29-30
21	_	何処	PRON	PRON	_	23	nmod	_	Offset=30-32
22	_	_	PART	PART	_	21	case	_	Offset=32-34
23	_	_	VERB	VERB	_	28	nmod	_	Offset=34-36
24	_	為る	AUX	AUX	_	23	aux	_	Offset=36-38
25	_	_	PART	PART	_	23	mark	_	Offset=38-39
26	_	_	ADP	ADP	_	23	dep	_	Offset=39-40
27	_	言う	VERB	VERB	_	26	mwe	_	Offset=40-42
28	_	_	NOUN	NOUN	_	0	root	_	Offset=42-43
29	_	_	AUX	AUX	_	28	cop	_	Offset=43-44
30	_	_	PUNCT	PUNCT	_	28	punct	_	Offset=44-45

~~~


