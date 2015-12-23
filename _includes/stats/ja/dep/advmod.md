

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

2640 nodes (1%) are attached to their parents as `advmod`.

2640 instances of `advmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.92916666666667.

The following 23 pairs of parts of speech are connected with `advmod`: [ja-pos/VERB]()-[ja-pos/ADV]() (1595; 60% instances), [ja-pos/VERB]()-[ja-pos/ADJ]() (346; 13% instances), [ja-pos/ADJ]()-[ja-pos/ADV]() (317; 12% instances), [ja-pos/NOUN]()-[ja-pos/ADV]() (292; 11% instances), [ja-pos/ADV]()-[ja-pos/ADV]() (26; 1% instances), [ja-pos/VERB]()-[ja-pos/NOUN]() (12; 0% instances), [ja-pos/VERB]()-[ja-pos/CONJ]() (11; 0% instances), [ja-pos/ADJ]()-[ja-pos/ADJ]() (10; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADJ]() (4; 0% instances), [ja-pos/PROPN]()-[ja-pos/ADV]() (4; 0% instances), [ja-pos/VERB]()-[ja-pos/PRON]() (4; 0% instances), [ja-pos/ADJ]()-[ja-pos/CONJ]() (3; 0% instances), [ja-pos/ADJ]()-[ja-pos/NOUN]() (3; 0% instances), [ja-pos/CONJ]()-[ja-pos/ADV]() (2; 0% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (2; 0% instances), [ja-pos/NUM]()-[ja-pos/ADV]() (2; 0% instances), [ja-pos/ADJ]()-[ja-pos/PRON]() (1; 0% instances), [ja-pos/NOUN]()-[ja-pos/CONJ]() (1; 0% instances), [ja-pos/NOUN]()-[ja-pos/NUM]() (1; 0% instances), [ja-pos/PART]()-[ja-pos/ADV]() (1; 0% instances), [ja-pos/PRON]()-[ja-pos/ADV]() (1; 0% instances), [ja-pos/PRON]()-[ja-pos/CONJ]() (1; 0% instances), [ja-pos/VERB]()-[ja-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 advmod	color:blue
1	_	_	NOUN	NOUN	_	2	compound	_	Offset=0-2
2	_	_	NOUN	NOUN	_	22	iobj	_	Offset=2-4
3	_	_	ADP	ADP	_	2	case	_	Offset=4-5
4	_	_	ADP	ADP	_	2	case	_	Offset=5-6
5	_	_	PUNCT	PUNCT	_	12	punct	_	Offset=6-7
6	_	ヤマハナ	PROPN	PROPN	_	7	compound	_	Offset=7-9
7	_	_	NOUN	NOUN	_	8	compound	_	Offset=9-10
8	_	等	NOUN	NOUN	_	12	nsubj	_	Offset=10-11
9	_	_	ADP	ADP	_	8	case	_	Offset=11-12
10	_	_	ADV	ADV	_	12	advmod	_	Offset=12-14
11	_	_	ADP	ADP	_	10	dep	_	Offset=14-15
12	_	_	VERB	VERB	_	20	nmod	_	Offset=15-17
13	_	為る	AUX	AUX	_	12	aux	_	Offset=17-18
14	_	せる	AUX	AUX	_	12	aux	_	Offset=18-20
15	_	_	SCONJ	SCONJ	_	12	mark	_	Offset=20-21
16	_	良い	AUX	AUX	_	12	aux	_	Offset=21-23
17	_	_	PUNCT	PUNCT	_	12	punct	_	Offset=23-24
18	_	_	ADP	ADP	_	12	case	_	Offset=24-25
19	_	_	ADP	ADP	_	12	case	_	Offset=25-26
20	_	_	NOUN	NOUN	_	22	nsubj	_	Offset=26-28
21	_	_	ADP	ADP	_	20	case	_	Offset=28-29
22	_	有る	VERB	VERB	_	26	advcl	_	Offset=29-31
23	_	_	PUNCT	PUNCT	_	22	punct	_	Offset=31-32
24	_	_	NOUN	NOUN	_	26	nsubj	_	Offset=32-34
25	_	_	ADP	ADP	_	24	case	_	Offset=34-35
26	_	_	VERB	VERB	_	0	root	_	Offset=35-37
27	_	為る	AUX	AUX	_	26	aux	_	Offset=37-38
28	_	そう-様態	AUX	AUX	_	26	aux	_	Offset=38-40
29	_	_	AUX	AUX	_	26	aux	_	Offset=40-41
30	_	_	PUNCT	PUNCT	_	26	punct	_	Offset=41-42

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 advmod	color:blue
1	_	又	CONJ	CONJ	_	13	cc	_	Offset=0-2
2	_	_	PROPN	PROPN	_	3	compound	_	Offset=2-7
3	_	_	NOUN	NOUN	_	13	nmod	_	Offset=7-9
4	_	_	ADP	ADP	_	3	case	_	Offset=9-10
5	_	ロシア-Rossiya	PROPN	PROPN	_	6	compound	_	Offset=10-13
6	_	_	NOUN	NOUN	_	13	nsubj	_	Offset=13-14
7	_	_	CONJ	CONJ	_	6	cc	_	Offset=14-15
8	_	ドゥダエフ-外国	PROPN	PROPN	_	9	compound	_	Offset=15-20
9	_	_	NOUN	NOUN	_	10	compound	_	Offset=20-22
10	_	_	NOUN	NOUN	_	6	conj	_	Offset=22-24
11	_	_	ADP	ADP	_	6	case	_	Offset=24-25
12	_	激しい	ADJ	ADJ	_	13	advmod	_	Offset=25-28
13	_	_	VERB	VERB	_	0	root	_	Offset=28-30
14	_	為る	AUX	AUX	_	13	aux	_	Offset=30-31
15	_	_	AUX	AUX	_	13	aux	_	Offset=31-32
16	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=32-33

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	_	未だ	ADV	ADV	_	2	advmod	_	Offset=0-2
2	_	_	ADJ	ADJ	_	0	root	_	Offset=2-5
3	_	_	AUX	AUX	_	2	aux	_	Offset=5-6
4	_	_	PUNCT	PUNCT	_	2	punct	_	Offset=6-7

~~~


