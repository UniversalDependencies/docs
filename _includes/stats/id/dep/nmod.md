

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Indonesian)

This relation is universal.

4028 nodes (4%) are attached to their parents as `nmod`.

3907 instances of `nmod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.6708043694141.

The following 36 pairs of parts of speech are connected with `nmod`: [id-pos/NOUN]()-[id-pos/NOUN]() (2047; 51% instances), [id-pos/NOUN]()-[id-pos/PROPN]() (1013; 25% instances), [id-pos/PROPN]()-[id-pos/PROPN]() (313; 8% instances), [id-pos/PROPN]()-[id-pos/NOUN]() (224; 6% instances), [id-pos/ADJ]()-[id-pos/NOUN]() (182; 5% instances), [id-pos/ADJ]()-[id-pos/PROPN]() (61; 2% instances), [id-pos/NOUN]()-[id-pos/PRON]() (23; 1% instances), [id-pos/ADV]()-[id-pos/NOUN]() (20; 0% instances), [id-pos/SYM]()-[id-pos/NOUN]() (19; 0% instances), [id-pos/ADP]()-[id-pos/NOUN]() (18; 0% instances), [id-pos/NUM]()-[id-pos/NOUN]() (15; 0% instances), [id-pos/PRON]()-[id-pos/NOUN]() (13; 0% instances), [id-pos/ADJ]()-[id-pos/PRON]() (10; 0% instances), [id-pos/NOUN]()-[id-pos/SYM]() (9; 0% instances), [id-pos/SYM]()-[id-pos/PROPN]() (8; 0% instances), [id-pos/ADV]()-[id-pos/PROPN]() (7; 0% instances), [id-pos/CCONJ]()-[id-pos/NOUN]() (7; 0% instances), [id-pos/NUM]()-[id-pos/PROPN]() (6; 0% instances), [id-pos/NOUN]()-[id-pos/VERB]() (5; 0% instances), [id-pos/DET]()-[id-pos/NOUN]() (4; 0% instances), [id-pos/PRON]()-[id-pos/PROPN]() (4; 0% instances), [id-pos/ADP]()-[id-pos/PROPN]() (3; 0% instances), [id-pos/PROPN]()-[id-pos/SYM]() (3; 0% instances), [id-pos/NOUN]()-[id-pos/CCONJ]() (2; 0% instances), [id-pos/ADJ]()-[id-pos/SYM]() (1; 0% instances), [id-pos/ADP]()-[id-pos/VERB]() (1; 0% instances), [id-pos/CCONJ]()-[id-pos/PROPN]() (1; 0% instances), [id-pos/DET]()-[id-pos/PRON]() (1; 0% instances), [id-pos/NOUN]()-[id-pos/ADP]() (1; 0% instances), [id-pos/NOUN]()-[id-pos/ADV]() (1; 0% instances), [id-pos/NOUN]()-[id-pos/NUM]() (1; 0% instances), [id-pos/PRON]()-[id-pos/PRON]() (1; 0% instances), [id-pos/PROPN]()-[id-pos/VERB]() (1; 0% instances), [id-pos/PUNCT]()-[id-pos/NOUN]() (1; 0% instances), [id-pos/SCONJ]()-[id-pos/NOUN]() (1; 0% instances), [id-pos/X]()-[id-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod	color:blue
1	Film	_	NOUN	_	_	3	nsubj:pass	_	_
2	ini	_	DET	_	_	1	det	_	_
3	terdiri	_	VERB	_	_	0	root	_	_
4	dari	_	ADP	_	_	6	case	_	_
5	6	_	NUM	_	NumType=Card	6	nummod	_	_
6	musim	_	NOUN	_	_	3	obl	_	_
7	dengan	_	ADP	_	_	9	case	_	_
8	137	_	NUM	_	NumType=Card	9	nummod	_	_
9	episiode	_	NOUN	_	_	6	nmod	_	SpaceAfter=No
10	.	_	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nmod	color:blue
1	Fuyo	_	PROPN	_	_	3	det	_	_
2	Group	_	PROPN	_	_	1	flat	_	_
3	jejak	_	NOUN	_	_	0	root	_	_
4	sejarahnya	_	NOUN	_	_	3	compound	_	_
5	sejauh	_	ADP	_	_	6	case	_	_
6	zaibatsu	_	PROPN	_	_	3	nmod	_	_
7	Yasuda	_	PROPN	_	_	6	flat	_	_
8	lama	_	ADJ	_	_	6	amod	_	SpaceAfter=No
9	.	_	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod	color:blue
1	Marquis	_	PROPN	_	_	14	nsubj	_	_
2	Wu	_	PROPN	_	_	1	flat	_	_
3	dari	_	ADP	_	_	4	case	_	_
4	Cai	_	PROPN	_	_	1	nmod	_	_
5	(	_	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	蔡武侯	_	PROPN	_	_	4	appos	_	SpaceAfter=No
7	)	_	PUNCT	_	_	6	punct	_	_
8	(	_	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	wafat	_	VERB	_	_	1	appos	_	_
10	837	_	NUM	_	NumType=Card	11	nummod	_	_
11	SM	_	PROPN	_	_	9	obl	_	SpaceAfter=No
12	)	_	PUNCT	_	_	9	punct	_	SpaceAfter=No
13	,	_	PUNCT	_	_	1	punct	_	_
14	lahir	_	VERB	_	_	0	root	_	_
15	sebagai	_	ADP	_	_	16	case	_	_
16	Ji	_	PROPN	_	_	14	obl	_	SpaceAfter=No
17	?	_	PUNCT	_	_	14	punct	_	_

~~~


