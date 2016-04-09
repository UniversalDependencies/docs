

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese-KTC)

This relation is universal.

21450 nodes (8%) are attached to their parents as `aux`.

21450 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.72965034965035.

The following 9 pairs of parts of speech are connected with `aux`: [ja-pos/VERB]()-[ja-pos/AUX]() (18321; 85% instances), [ja-pos/ADJ]()-[ja-pos/AUX]() (1980; 9% instances), [ja-pos/NOUN]()-[ja-pos/AUX]() (1079; 5% instances), [ja-pos/ADV]()-[ja-pos/AUX]() (51; 0% instances), [ja-pos/PROPN]()-[ja-pos/AUX]() (11; 0% instances), [ja-pos/NUM]()-[ja-pos/AUX]() (3; 0% instances), [ja-pos/PRON]()-[ja-pos/AUX]() (3; 0% instances), [ja-pos/INTJ]()-[ja-pos/AUX]() (1; 0% instances), [ja-pos/PART]()-[ja-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 aux	color:blue
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


