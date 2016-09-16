

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

9995 nodes (4%) are attached to their parents as `root`.

9995 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 23.9631815907954.

The following 10 pairs of parts of speech are connected with `root`: [ja-pos/ROOT]()-[ja-pos/VERB]() (6940; 69% instances), [ja-pos/ROOT]()-[ja-pos/NOUN]() (2163; 22% instances), [ja-pos/ROOT]()-[ja-pos/ADJ]() (716; 7% instances), [ja-pos/ROOT]()-[ja-pos/ADV]() (85; 1% instances), [ja-pos/ROOT]()-[ja-pos/PROPN]() (57; 1% instances), [ja-pos/ROOT]()-[ja-pos/NUM]() (18; 0% instances), [ja-pos/ROOT]()-[ja-pos/PRON]() (10; 0% instances), [ja-pos/ROOT]()-[ja-pos/CONJ]() (3; 0% instances), [ja-pos/ROOT]()-[ja-pos/INTJ]() (2; 0% instances), [ja-pos/ROOT]()-[ja-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
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
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 32 root	color:blue
1	_	又	CONJ	CONJ	_	32	cc	_	Offset=0-2
2	_	_	PUNCT	PUNCT	_	1	punct	_	Offset=2-3
3	_	オウシュウ-外国	PROPN	PROPN	_	4	compound	_	Offset=3-5
4	_	_	NOUN	NOUN	_	5	compound	_	Offset=5-6
5	_	スポークスマン-spokesman	NOUN	NOUN	_	23	nmod	_	Offset=6-13
6	_	_	ADP	ADP	_	5	case	_	Offset=13-14
7	_	因る	VERB	VERB	_	6	mwe	_	Offset=14-16
8	_	_	SCONJ	SCONJ	_	6	mwe	_	Offset=16-17
9	_	_	PUNCT	PUNCT	_	5	punct	_	Offset=17-18
10	_	ドイツ-Duits	PROPN	PROPN	_	16	appos	_	Offset=18-21
11	_	_	PUNCT	PUNCT	_	10	punct	_	Offset=21-22
12	_	フランス-France	PROPN	PROPN	_	10	conj	_	Offset=22-26
13	_	_	PUNCT	PUNCT	_	10	punct	_	Offset=26-27
14	_	スペイン-Spain	PROPN	PROPN	_	10	conj	_	Offset=27-31
15	_	_	NUM	NUM	_	16	nummod	_	Offset=31-32
16	_	箇国	NOUN	NOUN	_	18	nmod	_	Offset=32-34
17	_	_	ADP	ADP	_	16	case	_	Offset=34-35
18	_	_	NOUN	NOUN	_	23	nsubj	_	Offset=35-37
19	_	_	ADP	ADP	_	18	case	_	Offset=37-38
20	_	_	NOUN	NOUN	_	23	nmod	_	Offset=38-40
21	_	ロシア-Rossiya	PROPN	PROPN	_	23	dobj	_	Offset=40-43
22	_	_	ADP	ADP	_	21	case	_	Offset=43-44
23	_	_	VERB	VERB	_	32	advcl	_	Offset=44-46
24	_	_	PUNCT	PUNCT	_	23	punct	_	Offset=46-47
25	_	チェチェン-Chechen	PROPN	PROPN	_	26	compound	_	Offset=47-52
26	_	_	NOUN	NOUN	_	30	iobj	_	Offset=52-54
27	_	_	ADP	ADP	_	26	case	_	Offset=54-55
28	_	つく	VERB	VERB	_	27	mwe	_	Offset=55-57
29	_	_	SCONJ	SCONJ	_	27	mwe	_	Offset=57-58
30	_	_	VERB	VERB	_	32	acl	_	Offset=58-60
31	_	為る	AUX	AUX	_	30	aux	_	Offset=60-62
32	_	_	NOUN	NOUN	_	0	root	_	Offset=62-65
33	_	_	AUX	AUX	_	32	cop	_	Offset=65-66
34	_	_	PUNCT	PUNCT	_	32	punct	_	Offset=66-67

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 10 root	color:blue
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


