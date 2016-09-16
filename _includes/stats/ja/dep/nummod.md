

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

10405 nodes (4%) are attached to their parents as `nummod`.

10404 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05362806343104.

The following 7 pairs of parts of speech are connected with `nummod`: [ja-pos/NOUN]()-[ja-pos/NUM]() (5261; 51% instances), [ja-pos/NUM]()-[ja-pos/NUM]() (5124; 49% instances), [ja-pos/NUM]()-[ja-pos/NOUN]() (12; 0% instances), [ja-pos/VERB]()-[ja-pos/NUM]() (4; 0% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (2; 0% instances), [ja-pos/PRON]()-[ja-pos/NUM]() (1; 0% instances), [ja-pos/PROPN]()-[ja-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
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
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 nummod	color:blue
1	_	_	NOUN	NOUN	_	2	compound	_	Offset=0-2
2	_	_	NOUN	NOUN	_	19	nsubj	_	Offset=2-4
3	_	_	ADP	ADP	_	2	case	_	Offset=4-5
4	_	三	NUM	NUM	_	5	nummod	_	Offset=5-6
5	_	一	NUM	NUM	_	6	nummod	_	Offset=6-7
6	_	_	NUM	NUM	_	7	nummod	_	Offset=7-8
7	_	九	NUM	NUM	_	8	nummod	_	Offset=8-9
8	_	五	NUM	NUM	_	9	nummod	_	Offset=9-10
9	_	七	NUM	NUM	_	10	nummod	_	Offset=10-11
10	_	九	NUM	NUM	_	11	nummod	_	Offset=11-12
11	_	_	NUM	NUM	_	12	nummod	_	Offset=12-13
12	_	円-助数詞	NOUN	NOUN	_	19	nmod	_	Offset=13-14
13	_	_	ADP	ADP	_	12	case	_	Offset=14-15
14	_	_	NOUN	NOUN	_	19	compound	_	Offset=15-16
15	_	二	NUM	NUM	_	16	nummod	_	Offset=16-17
16	_	_	NOUN	NOUN	_	17	nummod	_	Offset=17-18
17	_	八	NUM	NUM	_	18	nummod	_	Offset=18-19
18	_	パーセント-percent	NOUN	NOUN	_	19	compound	_	Offset=19-20
19	_	_	NOUN	NOUN	_	0	root	_	Offset=20-21
20	_	だ	AUX	AUX	_	19	cop	_	Offset=21-23
21	_	_	AUX	AUX	_	19	aux	_	Offset=23-24
22	_	_	PUNCT	PUNCT	_	19	punct	_	Offset=24-25

~~~


