

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Korean-Sejong)

This relation is universal.

1258 nodes (1%) are attached to their parents as `nummmod`.

1133 instances of `nummmod` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.05564387917329.

The following 9 pairs of parts of speech are connected with `nummmod`: [ko-pos/NOUN]()-[ko-pos/NUM]() (962; 76% instances), [ko-pos/NUM]()-[ko-pos/NUM]() (162; 13% instances), [ko-pos/VERB]()-[ko-pos/NUM]() (74; 6% instances), [ko-pos/X]()-[ko-pos/NUM]() (17; 1% instances), [ko-pos/PROPN]()-[ko-pos/NUM]() (15; 1% instances), [ko-pos/ADJ]()-[ko-pos/NUM]() (12; 1% instances), [ko-pos/PUNCT]()-[ko-pos/NUM]() (9; 1% instances), [ko-pos/ADV]()-[ko-pos/NUM]() (4; 0% instances), [ko-pos/PART]()-[ko-pos/NUM]() (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummmod	color:blue
1	_	_	NOUN	_	_	2	nmod	_	_
2	_	_	NOUN	_	_	11	advcl	_	_
3	_	_	NUM	_	_	4	nummmod	_	_
4	_	_	NOUN	_	_	11	advcl	_	_
5	_	_	ADP	_	_	4	case	_	_
6	_	_	PART	_	_	5	case	_	_
7	_	_	NOUN	_	_	9	acl	_	_
8	_	_	PART	_	_	7	case	_	_
9	_	_	NOUN	_	_	11	nsubj	_	_
10	_	_	PART	_	_	9	case	_	_
11	_	_	NOUN	_	_	0	root	_	_
12	_	_	PART	_	_	11	case	_	_
13	_	_	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummmod	color:blue
1	_	_	NUM	_	_	3	nummmod	_	_
2	_	_	NUM	_	_	1	nummmod	_	_
3	_	_	NOUN	_	_	5	nmod	_	_
4	_	_	NOUN	_	_	5	nmod	_	_
5	_	_	NOUN	_	_	7	dobj	_	_
6	_	_	PART	_	_	5	case	_	_
7	_	_	NOUN	_	_	13	amod	_	_
8	_	_	PART	_	_	7	case	_	_
9	_	_	PART	_	_	8	case	_	_
10	_	_	NOUN	_	_	11	compound	_	_
11	_	_	NOUN	_	_	13	nsubj	_	_
12	_	_	PART	_	_	11	case	_	_
13	_	_	NOUN	_	_	0	root	_	_
14	_	_	PART	_	_	13	case	_	_
15	_	_	PART	_	_	14	case	_	_
16	_	_	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 nummmod	color:blue
1	_	_	VERB	_	_	3	advmod	_	_
2	_	_	PART	_	_	1	case	_	_
3	_	_	NOUN	_	_	11	advcl	_	_
4	_	_	PRON	_	_	5	advmod	_	_
5	_	_	ADV	_	_	11	advmod	_	_
6	_	_	NOUN	_	_	11	advmod	_	_
7	_	_	PART	_	_	6	case	_	_
8	_	_	PART	_	_	7	case	_	_
9	_	_	NUM	_	_	11	nummmod	_	_
10	_	_	PART	_	_	9	case	_	_
11	_	_	VERB	_	_	0	root	_	_
12	_	_	PART	_	_	11	case	_	_
13	_	_	PUNCT	_	_	12	punct	_	_

~~~


