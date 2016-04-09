

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

227 nodes (0%) are attached to their parents as `dep`.

153 instances of `dep` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.08810572687225.

The following 46 pairs of parts of speech are connected with `dep`: [fr-pos/VERB]()-[fr-pos/NOUN]() (37; 16% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (20; 9% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (18; 8% instances), [fr-pos/VERB]()-[fr-pos/DET]() (17; 7% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (14; 6% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (12; 5% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (12; 5% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (9; 4% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (8; 4% instances), [fr-pos/VERB]()-[fr-pos/ADP]() (8; 4% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (7; 3% instances), [fr-pos/ADP]()-[fr-pos/DET]() (5; 2% instances), [fr-pos/NOUN]()-[fr-pos/DET]() (5; 2% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (5; 2% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (3; 1% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (3; 1% instances), [fr-pos/PROPN]()-[fr-pos/NUM]() (3; 1% instances), [fr-pos/PROPN]()-[fr-pos/X]() (3; 1% instances), [fr-pos/ADJ]()-[fr-pos/SYM]() (2; 1% instances), [fr-pos/ADP]()-[fr-pos/NOUN]() (2; 1% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (2; 1% instances), [fr-pos/INTJ]()-[fr-pos/PROPN]() (2; 1% instances), [fr-pos/NOUN]()-[fr-pos/SYM]() (2; 1% instances), [fr-pos/NOUN]()-[fr-pos/X]() (2; 1% instances), [fr-pos/PROPN]()-[fr-pos/ADV]() (2; 1% instances), [fr-pos/PROPN]()-[fr-pos/SYM]() (2; 1% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (2; 1% instances), [fr-pos/X]()-[fr-pos/X]() (2; 1% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/X]() (1; 0% instances), [fr-pos/ADP]()-[fr-pos/SYM]() (1; 0% instances), [fr-pos/ADP]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/CONJ]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/DET]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/INTJ]()-[fr-pos/SYM]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/SCONJ]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 dep	color:blue
1	Remarque	_	NOUN	_	_	5	dep	_	_
2	:	_	PUNCT	_	_	1	punct	_	_
3	Chypre	_	PROPN	_	_	5	nsubj	_	_
4	est	_	AUX	_	_	5	aux	_	_
5	entré	_	VERB	_	_	0	root	_	_
6	en	_	ADP	_	_	7	case	_	_
7	zone	_	NOUN	_	_	5	nmod	_	_
8	euro	_	ADJ	_	_	7	amod	_	_
9	le	_	DET	_	_	11	det	_	_
10	1	_	NUM	_	_	11	nummod	_	_
11	janvier	_	NOUN	_	_	5	nmod	_	_
12	2008	_	NUM	_	_	11	nmod	_	_
13	.	_	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep	color:blue
1	En	_	ADP	_	_	2	dep	_	_
2	résumé	_	NOUN	_	_	0	root	_	_
3	:	_	PUNCT	_	_	2	punct	_	_
4	escrocs	_	NOUN	_	_	2	dep	_	_
5	,	_	PUNCT	_	_	4	punct	_	_
6	menteurs	_	NOUN	_	_	4	conj	_	_
7	,	_	PUNCT	_	_	4	punct	_	_
8	voleurs	_	NOUN	_	_	4	conj	_	_
9	,	_	PUNCT	_	_	2	punct	_	_
10	......	_	PUNCT	_	_	2	punct	_	_
11	FUYEZ	_	VERB	_	_	2	parataxis	_	_
12	CE	_	DET	_	_	13	det	_	_
13	GARAGE	_	NOUN	_	_	11	dobj	_	_
14	OU	_	CONJ	_	_	11	cc	_	_
15	VOUS	_	PRON	_	_	17	nsubj	_	_
16	N'	_	ADV	_	_	17	neg	_	_
17	AUREZ	_	VERB	_	_	11	conj	_	_
18	QUE	_	SCONJ	_	_	17	expl	_	_
19	DES	_	DET	_	_	20	det	_	_
20	ENNUIS	_	NOUN	_	_	17	dobj	_	_
21	!	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	S'	_	PRON	_	_	2	dep	_	_
2	agit	_	VERB	_	_	0	root	_	_
3	-il	_	PRON	_	_	2	nsubj	_	_
4	de	_	ADP	_	_	6	case	_	_
5	«	_	PUNCT	_	_	6	punct	_	_
6	correlajas	_	NOUN	_	_	2	nmod	_	_
7	»	_	PUNCT	_	_	6	punct	_	_
8	ou	_	CONJ	_	_	6	cc	_	_
9	de	_	ADP	_	_	11	case	_	_
10	vraies	_	ADJ	_	_	11	amod	_	_
11	corridas	_	NOUN	_	_	6	conj	_	_
12	?	_	PUNCT	_	_	2	punct	_	_

~~~


