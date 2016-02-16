

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

6 nodes (0%) are attached to their parents as `csubjpass`.

6 instances of `csubjpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.83333333333333.

The following 2 pairs of parts of speech are connected with `csubjpass`: [ja-pos/VERB]()-[ja-pos/VERB]() (5; 83% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (1; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 5 csubjpass	color:blue
1	_	_	PROPN	PROPN	_	3	nmod	_	Offset=0-2
2	_	_	ADP	ADP	_	1	case	_	Offset=2-3
3	_	_	NOUN	NOUN	_	5	iobj	_	Offset=3-5
4	_	_	ADP	ADP	_	3	case	_	Offset=5-6
5	_	当たる	VERB	VERB	_	12	csubjpass	_	Offset=6-9
6	_	_	SCONJ	SCONJ	_	5	mark	_	Offset=9-10
7	_	_	ADP	ADP	_	5	case	_	Offset=10-11
8	_	_	PUNCT	PUNCT	_	5	punct	_	Offset=11-12
9	_	_	NOUN	NOUN	_	10	compound	_	Offset=12-13
10	_	_	NOUN	NOUN	_	12	iobj	_	Offset=13-15
11	_	_	ADP	ADP	_	10	case	_	Offset=15-16
12	_	言う	VERB	VERB	_	24	advcl	_	Offset=16-18
13	_	れる	AUX	AUX	_	12	auxpass	_	Offset=18-19
14	_	_	PUNCT	PUNCT	_	18	punct	_	Offset=19-20
15	_	めでたい	ADJ	ADJ	_	16	amod	_	Offset=20-23
16	_	_	NOUN	NOUN	_	18	nsubj	_	Offset=23-24
17	_	_	ADP	ADP	_	16	case	_	Offset=24-25
18	_	_	NOUN	NOUN	_	23	iobj	_	Offset=25-26
19	_	くらい	PART	PART	_	18	case	_	Offset=26-29
20	_	なり-断定	AUX	AUX	_	18	cop	_	Offset=29-31
21	_	_	PUNCT	PUNCT	_	18	punct	_	Offset=31-32
22	_	_	ADP	ADP	_	18	case	_	Offset=32-33
23	_	言う	VERB	VERB	_	24	acl	_	Offset=33-35
24	_	_	NOUN	NOUN	_	0	root	_	Offset=35-38
25	_	だ	AUX	AUX	_	24	cop	_	Offset=38-39
26	_	有る	AUX	AUX	_	24	aux	_	Offset=39-41
27	_	_	PUNCT	PUNCT	_	24	punct	_	Offset=41-42

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 1 csubjpass	color:blue
1	_	_	NOUN	NOUN	_	34	csubjpass	_	Offset=0-2
2	_	だ	AUX	AUX	_	1	cop	_	Offset=2-3
3	_	_	SCONJ	SCONJ	_	1	mark	_	Offset=3-4
4	_	_	ADP	ADP	_	1	case	_	Offset=4-5
5	_	_	NOUN	NOUN	_	9	nsubj	_	Offset=5-7
6	_	_	ADP	ADP	_	5	case	_	Offset=7-8
7	_	グローバル-global	ADJ	ADJ	_	8	amod	_	Offset=8-13
8	_	_	NOUN	NOUN	_	9	dep	_	Offset=13-14
9	_	為る	VERB	VERB	_	13	case	_	Offset=14-16
10	_	_	SCONJ	SCONJ	_	9	mark	_	Offset=16-17
11	_	_	ADP	ADP	_	9	case	_	Offset=17-18
12	_	_	ADP	ADP	_	9	case	_	Offset=18-19
13	_	_	NOUN	NOUN	_	32	nmod	_	Offset=19-20
14	_	だ	AUX	AUX	_	13	cop	_	Offset=20-21
15	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=21-22
16	_	_	ADJ	ADJ	_	17	amod	_	Offset=22-24
17	_	_	NOUN	NOUN	_	19	nmod	_	Offset=24-25
18	_	_	ADP	ADP	_	17	case	_	Offset=25-26
19	_	_	NOUN	NOUN	_	23	nsubj	_	Offset=26-28
20	_	_	ADP	ADP	_	19	case	_	Offset=28-29
21	_	_	NOUN	NOUN	_	23	iobj	_	Offset=29-32
22	_	_	ADP	ADP	_	21	case	_	Offset=32-33
23	_	成る	VERB	VERB	_	32	advcl	_	Offset=33-35
24	_	_	PUNCT	PUNCT	_	23	punct	_	Offset=35-36
25	_	_	NOUN	NOUN	_	26	compound	_	Offset=36-38
26	_	_	NOUN	NOUN	_	30	nmod	_	Offset=38-39
27	_	_	ADP	ADP	_	26	case	_	Offset=39-40
28	_	_	ADP	ADP	_	26	case	_	Offset=40-41
29	_	_	NOUN	NOUN	_	30	compound	_	Offset=41-43
30	_	_	NOUN	NOUN	_	32	nsubjpass	_	Offset=43-45
31	_	_	ADP	ADP	_	30	case	_	Offset=45-46
32	_	脅かす	VERB	VERB	_	34	acl	_	Offset=46-49
33	_	_	AUX	AUX	_	32	auxpass	_	Offset=49-51
34	_	事	NOUN	NOUN	_	0	root	_	Offset=51-53
35	_	_	AUX	AUX	_	34	cop	_	Offset=53-54
36	_	_	PUNCT	PUNCT	_	34	punct	_	Offset=54-55

~~~


