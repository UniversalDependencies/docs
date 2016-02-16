

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

1929 nodes (1%) are attached to their parents as `amod`.

1929 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50855365474339.

The following 5 pairs of parts of speech are connected with `amod`: [ja-pos/NOUN]()-[ja-pos/ADJ]() (1819; 94% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (100; 5% instances), [ja-pos/PROPN]()-[ja-pos/ADJ]() (8; 0% instances), [ja-pos/PROPN]()-[ja-pos/NOUN]() (1; 0% instances), [ja-pos/VERB]()-[ja-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 amod	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 amod	color:blue
1	_	其の	DET	DET	_	2	det	_	Offset=0-2
2	_	_	NOUN	NOUN	_	14	advcl	_	Offset=2-6
3	_	だ	AUX	AUX	_	2	cop	_	Offset=6-7
4	_	_	PUNCT	PUNCT	_	2	punct	_	Offset=7-8
5	_	_	NOUN	NOUN	_	6	nmod	_	Offset=8-10
6	_	纏める	VERB	VERB	_	10	acl	_	Offset=10-13
7	_	_	AUX	AUX	_	6	aux	_	Offset=13-14
8	_	_	NOUN	NOUN	_	10	nmod	_	Offset=14-16
9	_	_	ADP	ADP	_	8	case	_	Offset=16-17
10	_	_	NOUN	NOUN	_	14	nsubj	_	Offset=17-19
11	_	_	ADP	ADP	_	10	case	_	Offset=19-20
12	_	_	NOUN	NOUN	_	14	amod	_	Offset=20-22
13	_	だ	AUX	AUX	_	12	cop	_	Offset=22-23
14	_	_	NOUN	NOUN	_	0	root	_	Offset=23-27
15	_	_	AUX	AUX	_	14	cop	_	Offset=27-28
16	_	_	PUNCT	PUNCT	_	14	punct	_	Offset=28-29

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	_	_	ADJ	ADJ	_	18	advmod	_	Offset=0-2
2	_	だ	AUX	AUX	_	1	aux	_	Offset=2-3
3	_	_	PUNCT	PUNCT	_	1	punct	_	Offset=3-4
4	_	此れ	PRON	PRON	_	7	nmod	_	Offset=4-6
5	_	_	PART	PART	_	4	case	_	Offset=6-8
6	_	_	ADP	ADP	_	4	case	_	Offset=8-9
7	_	トレンド-trend	NOUN	NOUN	_	9	dobj	_	Offset=9-13
8	_	_	ADP	ADP	_	7	case	_	Offset=13-14
9	_	_	VERB	VERB	_	18	advcl	_	Offset=14-16
10	_	_	SCONJ	SCONJ	_	9	mark	_	Offset=16-17
11	_	_	ADJ	ADJ	_	12	amod	_	Offset=17-21
12	_	ミカタ	PROPN	PROPN	_	14	nsubj	_	Offset=21-23
13	_	_	ADP	ADP	_	12	case	_	Offset=23-24
14	_	_	VERB	VERB	_	16	acl	_	Offset=24-26
15	_	為る	AUX	AUX	_	14	aux	_	Offset=26-28
16	_	_	NOUN	NOUN	_	18	nsubj	_	Offset=28-30
17	_	_	ADP	ADP	_	16	case	_	Offset=30-31
18	_	有る	VERB	VERB	_	0	root	_	Offset=31-33
19	_	_	PUNCT	PUNCT	_	18	punct	_	Offset=33-34

~~~


