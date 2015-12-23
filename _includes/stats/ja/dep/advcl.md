

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

6195 nodes (2%) are attached to their parents as `advcl`.

6195 instances of `advcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 11.9572235673931.

The following 22 pairs of parts of speech are connected with `advcl`: [ja-pos/VERB]()-[ja-pos/VERB]() (4712; 76% instances), [ja-pos/VERB]()-[ja-pos/NOUN]() (766; 12% instances), [ja-pos/VERB]()-[ja-pos/ADJ]() (222; 4% instances), [ja-pos/NOUN]()-[ja-pos/VERB]() (206; 3% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (101; 2% instances), [ja-pos/VERB]()-[ja-pos/ADV]() (53; 1% instances), [ja-pos/ADV]()-[ja-pos/VERB]() (31; 1% instances), [ja-pos/ADJ]()-[ja-pos/VERB]() (30; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADJ]() (27; 0% instances), [ja-pos/VERB]()-[ja-pos/PROPN]() (10; 0% instances), [ja-pos/VERB]()-[ja-pos/PRON]() (7; 0% instances), [ja-pos/ADV]()-[ja-pos/NOUN]() (5; 0% instances), [ja-pos/NOUN]()-[ja-pos/ADV]() (5; 0% instances), [ja-pos/VERB]()-[ja-pos/CONJ]() (5; 0% instances), [ja-pos/ADJ]()-[ja-pos/NOUN]() (4; 0% instances), [ja-pos/ADJ]()-[ja-pos/ADJ]() (3; 0% instances), [ja-pos/PRON]()-[ja-pos/VERB]() (3; 0% instances), [ja-pos/ADV]()-[ja-pos/ADJ]() (1; 0% instances), [ja-pos/INTJ]()-[ja-pos/VERB]() (1; 0% instances), [ja-pos/NOUN]()-[ja-pos/CONJ]() (1; 0% instances), [ja-pos/NOUN]()-[ja-pos/NUM]() (1; 0% instances), [ja-pos/VERB]()-[ja-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 13 advcl	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 11 advcl	color:blue
1	_	_	NOUN	NOUN	_	2	compound	_	Offset=0-2
2	_	_	NOUN	NOUN	_	3	compound	_	Offset=2-4
3	_	_	NOUN	NOUN	_	11	nsubj	_	Offset=4-6
4	_	_	ADP	ADP	_	3	case	_	Offset=6-7
5	_	_	NUM	NUM	_	6	nummod	_	Offset=7-8
6	_	_	NOUN	NOUN	_	11	compound	_	Offset=8-9
7	_	_	NOUN	NOUN	_	10	compound	_	Offset=9-11
8	_	_	NUM	NUM	_	9	nummod	_	Offset=11-12
9	_	_	NUM	NUM	_	10	nummod	_	Offset=12-13
10	_	_	NOUN	NOUN	_	11	compound	_	Offset=13-15
11	_	頃	NOUN	NOUN	_	29	advcl	_	Offset=15-17
12	_	_	ADP	ADP	_	11	case	_	Offset=17-18
13	_	_	PUNCT	PUNCT	_	11	punct	_	Offset=18-19
14	_	_	NOUN	NOUN	_	16	iobj	_	Offset=19-21
15	_	_	ADP	ADP	_	14	case	_	Offset=21-22
16	_	巻き込む	VERB	VERB	_	24	advcl	_	Offset=22-26
17	_	れる	AUX	AUX	_	16	auxpass	_	Offset=26-27
18	_	_	NOUN	NOUN	_	21	compound	_	Offset=27-28
19	_	_	NUM	NUM	_	20	nummod	_	Offset=28-29
20	_	_	NUM	NUM	_	21	nummod	_	Offset=29-30
21	_	_	NOUN	NOUN	_	22	compound	_	Offset=30-31
22	_	_	NOUN	NOUN	_	24	nmod	_	Offset=31-33
23	_	_	ADP	ADP	_	22	case	_	Offset=33-34
24	_	_	VERB	VERB	_	27	acl	_	Offset=34-36
25	_	為る	AUX	AUX	_	24	aux	_	Offset=36-37
26	_	_	AUX	AUX	_	24	aux	_	Offset=37-38
27	_	事	NOUN	NOUN	_	29	nsubj	_	Offset=38-40
28	_	_	ADP	ADP	_	27	case	_	Offset=40-41
29	_	_	VERB	VERB	_	0	root	_	Offset=41-43
30	_	為る	AUX	AUX	_	29	aux	_	Offset=43-44
31	_	_	AUX	AUX	_	29	aux	_	Offset=44-45
32	_	_	PUNCT	PUNCT	_	29	punct	_	Offset=45-46

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 20 advcl	color:blue
1	_	_	NOUN	NOUN	_	2	compound	_	Offset=0-1
2	_	_	NOUN	NOUN	_	10	nmod	_	Offset=1-2
3	_	_	ADP	ADP	_	2	case	_	Offset=2-3
4	_	ヤマハナ	PROPN	PROPN	_	10	appos	_	Offset=3-5
5	_	サダオ	PROPN	PROPN	_	4	name	_	Offset=5-7
6	_	_	SYM	SYM	_	4	punct	_	Offset=7-8
7	_	_	NOUN	NOUN	_	9	compound	_	Offset=8-9
8	_	_	NOUN	NOUN	_	9	compound	_	Offset=9-11
9	_	_	NOUN	NOUN	_	10	compound	_	Offset=11-13
10	_	_	NOUN	NOUN	_	32	nsubj	_	Offset=13-15
11	_	_	ADP	ADP	_	10	case	_	Offset=15-16
12	_	_	NOUN	NOUN	_	32	nmod	_	Offset=16-18
13	_	_	PUNCT	PUNCT	_	12	punct	_	Offset=18-19
14	_	_	PROPN	PROPN	_	15	compound	_	Offset=19-22
15	_	_	NOUN	NOUN	_	18	nmod	_	Offset=22-23
16	_	_	ADP	ADP	_	15	case	_	Offset=23-24
17	_	_	NOUN	NOUN	_	18	compound	_	Offset=24-26
18	_	_	NOUN	NOUN	_	20	nsubj	_	Offset=26-27
19	_	_	ADP	ADP	_	18	case	_	Offset=27-28
20	_	少ない	ADJ	ADJ	_	28	advcl	_	Offset=28-31
21	_	_	SCONJ	SCONJ	_	20	mark	_	Offset=31-32
22	_	_	ADP	ADP	_	20	mark	_	Offset=32-33
23	_	_	NOUN	NOUN	_	24	compound	_	Offset=33-35
24	_	_	NOUN	NOUN	_	28	nmod	_	Offset=35-37
25	_	_	ADP	ADP	_	24	case	_	Offset=37-38
26	_	_	NOUN	NOUN	_	28	dobj	_	Offset=38-40
27	_	_	ADP	ADP	_	26	case	_	Offset=40-41
28	_	_	VERB	VERB	_	30	acl	_	Offset=41-43
29	_	為る	AUX	AUX	_	28	aux	_	Offset=43-45
30	_	_	NOUN	NOUN	_	32	dobj	_	Offset=45-47
31	_	_	ADP	ADP	_	30	case	_	Offset=47-48
32	_	_	VERB	VERB	_	0	root	_	Offset=48-50
33	_	_	PUNCT	PUNCT	_	32	punct	_	Offset=50-51

~~~


