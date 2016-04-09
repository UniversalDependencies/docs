

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

9 nodes (0%) are attached to their parents as `discourse`.

9 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.88888888888889.

The following 3 pairs of parts of speech are connected with `discourse`: [ja-pos/VERB]()-[ja-pos/INTJ]() (6; 67% instances), [ja-pos/NOUN]()-[ja-pos/INTJ]() (2; 22% instances), [ja-pos/ADJ]()-[ja-pos/INTJ]() (1; 11% instances).


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 24 discourse	color:blue
1	_	_	PUNCT	PUNCT	_	26	punct	_	Offset=0-1
2	_	_	NOUN	NOUN	_	4	nmod	_	Offset=1-3
3	_	_	ADP	ADP	_	2	case	_	Offset=3-4
4	_	_	NOUN	NOUN	_	6	nmod	_	Offset=4-6
5	_	_	ADP	ADP	_	4	case	_	Offset=6-7
6	_	為	NOUN	NOUN	_	16	nmod	_	Offset=7-9
7	_	_	PUNCT	PUNCT	_	6	punct	_	Offset=9-10
8	_	_	ADJ	ADJ	_	9	amod	_	Offset=10-12
9	_	_	NOUN	NOUN	_	11	iobj	_	Offset=12-14
10	_	_	ADP	ADP	_	9	case	_	Offset=14-15
11	_	有る	VERB	VERB	_	12	acl	_	Offset=15-17
12	_	_	NOUN	NOUN	_	16	nsubj	_	Offset=17-18
13	_	_	ADP	ADP	_	12	case	_	Offset=18-19
14	_	_	NOUN	NOUN	_	16	iobj	_	Offset=19-21
15	_	_	ADP	ADP	_	14	case	_	Offset=21-22
16	_	成る	VERB	VERB	_	21	dep	_	Offset=22-24
17	_	_	SCONJ	SCONJ	_	16	mark	_	Offset=24-25
18	_	良い	AUX	AUX	_	16	aux	_	Offset=25-27
19	_	_	SCONJ	SCONJ	_	16	mark	_	Offset=27-28
20	_	_	PART	PART	_	16	case	_	Offset=28-29
21	_	_	ADV	ADV	_	26	dep	_	Offset=29-31
22	_	_	PART	PART	_	21	dep	_	Offset=31-32
23	_	_	PUNCT	PUNCT	_	21	punct	_	Offset=32-33
24	_	ううん	INTJ	INTJ	_	26	discourse	_	Offset=33-36
25	_	_	PUNCT	PUNCT	_	24	punct	_	Offset=36-37
26	_	迷う	VERB	VERB	_	0	root	_	Offset=37-39
27	_	_	AUX	AUX	_	26	aux	_	Offset=39-40
28	_	_	PART	PART	_	26	mark	_	Offset=40-41
29	_	_	PUNCT	PUNCT	_	26	punct	_	Offset=41-42

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	_	ねえ	INTJ	INTJ	_	3	discourse	_	Offset=0-2
2	_	_	PUNCT	PUNCT	_	1	punct	_	Offset=2-3
3	_	_	NOUN	NOUN	_	0	root	_	Offset=3-7
4	_	_	PUNCT	PUNCT	_	3	punct	_	Offset=7-8

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 22 discourse	color:blue
1	_	ツツイ	PROPN	PROPN	_	2	compound	_	Offset=0-2
2	_	_	NOUN	NOUN	_	19	nsubj	_	Offset=2-4
3	_	_	ADP	ADP	_	2	case	_	Offset=4-5
4	_	_	PUNCT	PUNCT	_	16	punct	_	Offset=5-6
5	_	_	NOUN	NOUN	_	7	nmod	_	Offset=6-7
6	_	_	ADP	ADP	_	5	case	_	Offset=7-8
7	_	_	NOUN	NOUN	_	16	nmod	_	Offset=8-10
8	_	_	ADP	ADP	_	7	case	_	Offset=10-11
9	_	_	ADP	ADP	_	7	case	_	Offset=11-12
10	_	_	NOUN	NOUN	_	11	compound	_	Offset=12-14
11	_	_	NOUN	NOUN	_	14	nmod	_	Offset=14-16
12	_	_	ADP	ADP	_	11	case	_	Offset=16-17
13	_	_	ADJ	ADJ	_	14	amod	_	Offset=17-19
14	_	_	NOUN	NOUN	_	16	nsubj	_	Offset=19-20
15	_	_	ADP	ADP	_	14	case	_	Offset=20-21
16	_	無い	ADJ	ADJ	_	19	nmod	_	Offset=21-23
17	_	_	PUNCT	PUNCT	_	16	punct	_	Offset=23-24
18	_	_	ADP	ADP	_	16	mark	_	Offset=24-25
19	_	言う	VERB	VERB	_	28	advcl	_	Offset=25-27
20	_	_	PUNCT	PUNCT	_	19	punct	_	Offset=27-28
21	_	_	PUNCT	PUNCT	_	28	punct	_	Offset=28-29
22	_	まあ	INTJ	INTJ	_	28	discourse	_	Offset=29-30
23	_	_	PUNCT	PUNCT	_	22	punct	_	Offset=30-31
24	_	_	NOUN	NOUN	_	26	dobj	_	Offset=31-33
25	_	_	ADP	ADP	_	24	case	_	Offset=33-34
26	_	遣る	VERB	VERB	_	28	nmod	_	Offset=34-36
27	_	_	PART	PART	_	26	mark	_	Offset=36-38
28	_	無い	ADJ	ADJ	_	0	root	_	Offset=38-40
29	_	です	AUX	AUX	_	28	aux	_	Offset=40-43
30	_	うう	AUX	AUX	_	28	aux	_	Offset=43-44
31	_	_	PUNCT	PUNCT	_	28	punct	_	Offset=44-45
32	_	_	NOUN	NOUN	_	44	nsubj	_	Offset=45-47
33	_	_	ADP	ADP	_	32	case	_	Offset=47-48
34	_	_	NOUN	NOUN	_	36	nmod	_	Offset=48-50
35	_	_	ADP	ADP	_	34	case	_	Offset=50-51
36	_	為る	VERB	VERB	_	39	nmod	_	Offset=51-52
37	_	_	SCONJ	SCONJ	_	36	mark	_	Offset=52-53
38	_	_	ADP	ADP	_	36	dep	_	Offset=53-54
39	_	_	NOUN	NOUN	_	41	dobj	_	Offset=54-56
40	_	_	ADP	ADP	_	39	case	_	Offset=56-57
41	_	見る	VERB	VERB	_	44	acl	_	Offset=57-58
42	_	_	SCONJ	SCONJ	_	41	mark	_	Offset=58-59
43	_	頂く	AUX	AUX	_	41	aux	_	Offset=59-63
44	_	_	NOUN	NOUN	_	28	dep	_	Offset=63-64
45	_	_	AUX	AUX	_	44	cop	_	Offset=64-66
46	_	_	PUNCT	PUNCT	_	28	punct	_	Offset=66-67
47	_	_	PUNCT	PUNCT	_	28	punct	_	Offset=67-68

~~~


