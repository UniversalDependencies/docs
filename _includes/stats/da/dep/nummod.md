

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

1278 nodes (1%) are attached to their parents as `nummod`.

1060 instances of `nummod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.24413145539906.

The following 15 pairs of parts of speech are connected with `nummod`: [da-pos/NOUN]()-[da-pos/NUM]() (1022; 80% instances), [da-pos/VERB]()-[da-pos/NUM]() (85; 7% instances), [da-pos/PROPN]()-[da-pos/NUM]() (46; 4% instances), [da-pos/NOUN]()-[da-pos/NOUN]() (26; 2% instances), [da-pos/ADJ]()-[da-pos/NUM]() (23; 2% instances), [da-pos/PRON]()-[da-pos/NUM]() (22; 2% instances), [da-pos/NOUN]()-[da-pos/ADJ]() (13; 1% instances), [da-pos/ADV]()-[da-pos/NUM]() (11; 1% instances), [da-pos/ADP]()-[da-pos/NUM]() (9; 1% instances), [da-pos/NUM]()-[da-pos/NUM]() (8; 1% instances), [da-pos/SYM]()-[da-pos/NUM]() (6; 0% instances), [da-pos/CONJ]()-[da-pos/NUM]() (2; 0% instances), [da-pos/NOUN]()-[da-pos/PRON]() (2; 0% instances), [da-pos/X]()-[da-pos/NUM]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Kelds	Keld	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	oplæg	oplæg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	nsubjpass	_	_
3	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	auxpass	_	_
4	fulgt	følge	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	9	ccomp	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	procent	procent	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	4	nmod	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	"	"	PUNCT	_	_	4	punct	_	_
9	pointerer	pointere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Susan	Susan	PROPN	_	_	9	nsubj	_	_
11	Mackensie	Mackensie	PROPN	_	_	10	name	_	_
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	I	i	ADP	_	AdpType=Prep	2	case	_	_
2	1972	1972	NUM	_	NumType=Card	3	nummod	_	_
3	fik	få	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	Skjern	Skjern	PROPN	_	_	3	nsubj	_	_
5	sit	sin	DET	_	Gender=Neut|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	7	det	_	_
6	første	første	ADJ	_	Degree=Pos	7	amod	_	_
7	værtshus	værtshus	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	dobj	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	Ivan	Ivan	PROPN	_	_	0	root	_	_
2	Vaarby	Vaarby	PROPN	_	_	1	name	_	_
3	Laursen	Laursen	PROPN	_	_	1	name	_	_
4	,	,	PUNCT	_	_	1	punct	_	_
5	Guldvej	Guldvej	PROPN	_	_	1	list	_	_
6	6	6	NUM	_	NumType=Card	5	nummod	_	_
7	,	,	PUNCT	_	_	5	punct	_	_
8	3060	3060	NUM	_	NumType=Card	9	nummod	_	_
9	Espergærde	Espergærde	PROPN	_	_	5	list	_	_

~~~


