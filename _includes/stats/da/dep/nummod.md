

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

1140 nodes (1%) are attached to their parents as `nummod`.

948 instances of `nummod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.01491228070175.

The following 15 pairs of parts of speech are connected with `nummod`: [da-pos/NOUN]()-[da-pos/NUM]() (929; 81% instances), [da-pos/VERB]()-[da-pos/NUM]() (74; 6% instances), [da-pos/PROPN]()-[da-pos/NUM]() (39; 3% instances), [da-pos/ADJ]()-[da-pos/NUM]() (18; 2% instances), [da-pos/PRON]()-[da-pos/NUM]() (18; 2% instances), [da-pos/NOUN]()-[da-pos/NOUN]() (15; 1% instances), [da-pos/NOUN]()-[da-pos/ADJ]() (12; 1% instances), [da-pos/ADP]()-[da-pos/NUM]() (8; 1% instances), [da-pos/ADV]()-[da-pos/NUM]() (8; 1% instances), [da-pos/NUM]()-[da-pos/NUM]() (8; 1% instances), [da-pos/SYM]()-[da-pos/NUM]() (5; 0% instances), [da-pos/NOUN]()-[da-pos/PRON]() (2; 0% instances), [da-pos/X]()-[da-pos/NUM]() (2; 0% instances), [da-pos/DET]()-[da-pos/NUM]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Kelds	Keld	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	oplæg	oplæg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
3	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	fulgt	følge	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	9	ccomp	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	procent	procent	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	4	obl	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	"	"	PUNCT	_	_	4	punct	_	_
9	pointerer	pointere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Susan	Susan	PROPN	_	_	9	nsubj	_	_
11	Mackensie	Mackensie	PROPN	_	_	10	flat	_	_
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 nummod	color:blue
1	opus	opus	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
2	VII	VII	NUM	_	NumType=Card	1	nmod	_	_
3	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	hørt	høre	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	af	af	ADP	_	AdpType=Prep	6	case	_	_
6	offentligeheden	offentligeheden	X	_	_	4	advmod	_	_
7	første	første	ADJ	_	Degree=Pos	8	amod	_	_
8	gang	gang	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	4	obl	_	_
9	i	i	ADP	_	AdpType=Prep	10	case	_	_
10	1720	1720	NUM	_	NumType=Card	4	nummod	_	_
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	K.	K.	PROPN	_	_	0	root	_	_
2	J.	J.	PROPN	_	_	1	flat	_	_
3	Philipsen	Philipsen	PROPN	_	_	1	flat	_	_
4	,	,	PUNCT	_	_	1	punct	_	_
5	Hasselvej	Hasselvej	PROPN	_	_	1	list	_	_
6	6	6	NUM	_	NumType=Card	5	nummod	_	_
7	,	,	PUNCT	_	_	5	punct	_	_
8	3790	3790	NUM	_	NumType=Card	9	nummod	_	_
9	Hasle	Hasle	PROPN	_	_	1	list	_	_

~~~


