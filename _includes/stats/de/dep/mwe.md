

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

158 nodes (0%) are attached to their parents as `mwe`.

129 instances of `mwe` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.65189873417722.

The following 40 pairs of parts of speech are connected with `mwe`: [de-pos/ADV]()-[de-pos/ADV]() (22; 14% instances), [de-pos/NOUN]()-[de-pos/ADP]() (18; 11% instances), [de-pos/ADP]()-[de-pos/ADP]() (13; 8% instances), [de-pos/ADV]()-[de-pos/ADP]() (12; 8% instances), [de-pos/NOUN]()-[de-pos/PART]() (9; 6% instances), [de-pos/NOUN]()-[de-pos/ADV]() (8; 5% instances), [de-pos/PROPN]()-[de-pos/ADP]() (8; 5% instances), [de-pos/ADV]()-[de-pos/CONJ]() (6; 4% instances), [de-pos/CONJ]()-[de-pos/ADV]() (6; 4% instances), [de-pos/ADP]()-[de-pos/ADV]() (5; 3% instances), [de-pos/VERB]()-[de-pos/ADP]() (5; 3% instances), [de-pos/PROPN]()-[de-pos/PART]() (4; 3% instances), [de-pos/ADV]()-[de-pos/PART]() (3; 2% instances), [de-pos/PRON]()-[de-pos/PART]() (3; 2% instances), [de-pos/ADJ]()-[de-pos/ADP]() (2; 1% instances), [de-pos/ADP]()-[de-pos/CONJ]() (2; 1% instances), [de-pos/ADP]()-[de-pos/PRON]() (2; 1% instances), [de-pos/NOUN]()-[de-pos/PRON]() (2; 1% instances), [de-pos/NUM]()-[de-pos/ADP]() (2; 1% instances), [de-pos/NUM]()-[de-pos/PART]() (2; 1% instances), [de-pos/PRON]()-[de-pos/ADP]() (2; 1% instances), [de-pos/SCONJ]()-[de-pos/ADV]() (2; 1% instances), [de-pos/VERB]()-[de-pos/ADV]() (2; 1% instances), [de-pos/VERB]()-[de-pos/PRON]() (2; 1% instances), [de-pos/ADJ]()-[de-pos/ADV]() (1; 1% instances), [de-pos/ADJ]()-[de-pos/CONJ]() (1; 1% instances), [de-pos/ADP]()-[de-pos/ADJ]() (1; 1% instances), [de-pos/ADP]()-[de-pos/PROPN]() (1; 1% instances), [de-pos/ADV]()-[de-pos/ADJ]() (1; 1% instances), [de-pos/ADV]()-[de-pos/DET]() (1; 1% instances), [de-pos/ADV]()-[de-pos/PRON]() (1; 1% instances), [de-pos/CONJ]()-[de-pos/ADP]() (1; 1% instances), [de-pos/CONJ]()-[de-pos/CONJ]() (1; 1% instances), [de-pos/DET]()-[de-pos/ADJ]() (1; 1% instances), [de-pos/NUM]()-[de-pos/DET]() (1; 1% instances), [de-pos/PRON]()-[de-pos/PRON]() (1; 1% instances), [de-pos/PROPN]()-[de-pos/ADV]() (1; 1% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (1; 1% instances), [de-pos/SCONJ]()-[de-pos/CONJ]() (1; 1% instances), [de-pos/VERB]()-[de-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mwe	color:blue
1	Bin	_	VERB	_	_	6	cop	_	_
2	nach	_	ADP	_	_	6	case	_	_
3	wie	_	ADV	_	_	2	mwe	_	_
4	vor	_	ADV	_	_	3	mwe	_	_
5	sehr	_	ADV	_	_	6	advmod	_	_
6	zufrieden	_	ADJ	_	_	0	root	_	_
7	.	_	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mwe	color:blue
1	Auf	_	ADP	_	_	3	case	_	_
2	Brittas	_	PROPN	_	_	3	det	_	_
3	Wunsch	_	NOUN	_	_	5	nmod	_	_
4	hin	_	ADP	_	_	3	mwe	_	_
5	halten	_	VERB	_	_	0	root	_	_
6	beide	_	PRON	_	_	5	nsubj	_	_
7	ihre	_	DET	_	_	8	nmod:poss	_	_
8	Beziehung	_	NOUN	_	_	5	dobj	_	_
9	jedoch	_	ADV	_	_	5	advmod	_	_
10	geheim	_	ADV	_	_	5	mark	_	_
11	.	_	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	Bis	_	ADP	_	_	3	advmod	_	_
2	zu	_	ADP	_	_	1	mwe	_	_
3	200	_	NUM	_	_	4	nummod	_	_
4	Menschen	_	NOUN	_	_	5	nsubj	_	_
5	starben	_	VERB	_	_	0	root	_	_
6	während	_	ADP	_	_	8	case	_	_
7	der	_	DET	_	_	8	det	_	_
8	Razzia	_	NOUN	_	_	5	nmod	_	_
9	.	_	PUNCT	_	_	5	punct	_	_

~~~


