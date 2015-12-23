

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

683 nodes (1%) are attached to their parents as `nsubjpass`.

676 instances of `nsubjpass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.43631039531479.

The following 18 pairs of parts of speech are connected with `nsubjpass`: [da-pos/VERB]()-[da-pos/NOUN]() (303; 44% instances), [da-pos/VERB]()-[da-pos/PRON]() (263; 39% instances), [da-pos/VERB]()-[da-pos/PROPN]() (53; 8% instances), [da-pos/VERB]()-[da-pos/ADJ]() (17; 2% instances), [da-pos/ADJ]()-[da-pos/NOUN]() (8; 1% instances), [da-pos/ADJ]()-[da-pos/PRON]() (8; 1% instances), [da-pos/NOUN]()-[da-pos/NOUN]() (6; 1% instances), [da-pos/NOUN]()-[da-pos/PRON]() (5; 1% instances), [da-pos/ADJ]()-[da-pos/ADV]() (3; 0% instances), [da-pos/VERB]()-[da-pos/ADV]() (3; 0% instances), [da-pos/VERB]()-[da-pos/NUM]() (3; 0% instances), [da-pos/NOUN]()-[da-pos/ADV]() (2; 0% instances), [da-pos/NOUN]()-[da-pos/PROPN]() (2; 0% instances), [da-pos/VERB]()-[da-pos/VERB]() (2; 0% instances), [da-pos/VERB]()-[da-pos/X]() (2; 0% instances), [da-pos/ADV]()-[da-pos/PRON]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/PRON]() (1; 0% instances), [da-pos/VERB]()-[da-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubjpass	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubjpass	color:blue
1	Men	men	CONJ	_	_	9	discourse	_	_
2	i	i	ADP	_	AdpType=Prep	6	case	_	_
3	de	den	DET	_	Number=Plur|PronType=Dem	6	det	_	_
4	sidste	sidste	ADJ	_	Degree=Pos	6	amod	_	_
5	to	to	NUM	_	NumType=Card	6	nummod	_	_
6	år	år	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	9	nmod	_	_
7	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
8	alting	alting	PRON	_	Gender=Neut|Number=Sing|PronType=Ind	9	nsubjpass	_	_
9	gået	gå	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	0	root	_	_
10	skævt	skævt	ADV	_	Degree=Pos	9	amod	_	_
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubjpass	color:blue
1	Rom	Rom	PROPN	_	_	4	nsubjpass	_	_
2	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	auxpass	_	_
3	ikke	ikke	ADV	_	_	4	neg	_	_
4	bygget	bygge	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	0	root	_	_
5	på	på	ADP	_	AdpType=Prep	7	case	_	_
6	én	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	7	det	_	_
7	dag	dag	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	4	nmod	_	_
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


