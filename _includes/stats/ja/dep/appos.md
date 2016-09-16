

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

792 nodes (0%) are attached to their parents as `appos`.

792 instances of `appos` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.26388888888889.

The following 13 pairs of parts of speech are connected with `appos`: [ja-pos/NOUN]()-[ja-pos/NOUN]() (517; 65% instances), [ja-pos/NOUN]()-[ja-pos/PROPN]() (154; 19% instances), [ja-pos/PROPN]()-[ja-pos/NOUN]() (93; 12% instances), [ja-pos/NOUN]()-[ja-pos/NUM]() (10; 1% instances), [ja-pos/NOUN]()-[ja-pos/CONJ]() (3; 0% instances), [ja-pos/NUM]()-[ja-pos/NOUN]() (3; 0% instances), [ja-pos/PROPN]()-[ja-pos/PROPN]() (3; 0% instances), [ja-pos/VERB]()-[ja-pos/NOUN]() (3; 0% instances), [ja-pos/PROPN]()-[ja-pos/NUM]() (2; 0% instances), [ja-pos/ADV]()-[ja-pos/NOUN]() (1; 0% instances), [ja-pos/CONJ]()-[ja-pos/NOUN]() (1; 0% instances), [ja-pos/PRON]()-[ja-pos/NOUN]() (1; 0% instances), [ja-pos/PROPN]()-[ja-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 appos	color:blue
1	_	_	NOUN	NOUN	_	29	nsubj	_	Offset=0-6
2	_	_	ADP	ADP	_	1	case	_	Offset=6-7
3	_	_	NUM	NUM	_	4	nummod	_	Offset=7-8
4	_	_	NOUN	NOUN	_	29	nmod	_	Offset=8-9
5	_	_	PUNCT	PUNCT	_	4	punct	_	Offset=9-10
6	_	_	NOUN	NOUN	_	7	compound	_	Offset=10-12
7	_	_	NOUN	NOUN	_	8	compound	_	Offset=12-13
8	_	_	NOUN	NOUN	_	10	compound	_	Offset=13-15
9	_	_	NOUN	NOUN	_	10	compound	_	Offset=15-17
10	_	_	NOUN	NOUN	_	13	appos	_	Offset=17-19
11	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=19-20
12	_	スーパー-super	NOUN	NOUN	_	13	compound	_	Offset=20-24
13	_	チャンス-chance	NOUN	NOUN	_	26	dobj	_	Offset=24-28
14	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=28-29
15	_	_	CONJ	CONJ	_	13	cc	_	Offset=29-30
16	_	_	PUNCT	PUNCT	_	18	punct	_	Offset=30-31
17	_	トリプル-triple	NOUN	NOUN	_	18	compound	_	Offset=31-35
18	_	チャンス-chance	NOUN	NOUN	_	13	conj	_	Offset=35-39
19	_	_	PUNCT	PUNCT	_	18	punct	_	Offset=39-40
20	_	_	ADP	ADP	_	13	case	_	Offset=40-41
21	_	_	NUM	NUM	_	22	nummod	_	Offset=41-42
22	_	_	NUM	NUM	_	23	nummod	_	Offset=42-43
23	_	_	NUM	NUM	_	24	nummod	_	Offset=43-44
24	_	_	NOUN	NOUN	_	26	nmod	_	Offset=44-45
25	_	_	ADP	ADP	_	24	case	_	Offset=45-47
26	_	_	VERB	VERB	_	29	ccomp	_	Offset=47-49
27	_	為る	AUX	AUX	_	26	aux	_	Offset=49-51
28	_	_	ADP	ADP	_	26	case	_	Offset=51-52
29	_	_	VERB	VERB	_	0	root	_	Offset=52-54
30	_	為る	AUX	AUX	_	29	aux	_	Offset=54-55
31	_	_	AUX	AUX	_	29	aux	_	Offset=55-56
32	_	_	PUNCT	PUNCT	_	29	punct	_	Offset=56-57

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 appos	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 appos	color:blue
1	_	_	NOUN	NOUN	_	23	nsubj	_	Offset=0-3
2	_	_	ADP	ADP	_	1	case	_	Offset=3-4
3	_	センター-center	NOUN	NOUN	_	6	appos	_	Offset=4-8
4	_	_	SYM	SYM	_	3	punct	_	Offset=8-9
5	_	_	NOUN	NOUN	_	6	compound	_	Offset=9-11
6	_	テツジ	PROPN	PROPN	_	14	nmod	_	Offset=11-13
7	_	_	PUNCT	PUNCT	_	6	punct	_	Offset=13-14
8	_	_	NOUN	NOUN	_	9	compound	_	Offset=14-17
9	_	ウイング-wing	NOUN	NOUN	_	11	appos	_	Offset=17-21
10	_	_	SYM	SYM	_	9	punct	_	Offset=21-22
11	_	スズキ	PROPN	PROPN	_	6	conj	_	Offset=22-24
12	_	タカヒト	PROPN	PROPN	_	11	name	_	Offset=24-26
13	_	_	ADP	ADP	_	6	case	_	Offset=26-27
14	_	セット-set	NOUN	NOUN	_	18	nmod	_	Offset=27-30
15	_	_	ADP	ADP	_	14	case	_	Offset=30-31
16	_	_	NOUN	NOUN	_	18	dobj	_	Offset=31-33
17	_	_	ADP	ADP	_	16	case	_	Offset=33-34
18	_	重ねる	VERB	VERB	_	23	advcl	_	Offset=34-36
19	_	_	PUNCT	PUNCT	_	18	punct	_	Offset=36-37
20	_	_	NOUN	NOUN	_	21	compound	_	Offset=37-39
21	_	_	PROPN	PROPN	_	23	dobj	_	Offset=39-41
22	_	_	ADP	ADP	_	21	case	_	Offset=41-42
23	_	_	VERB	VERB	_	0	root	_	Offset=42-45
24	_	_	PUNCT	PUNCT	_	23	punct	_	Offset=45-46

~~~


