

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

5796 nodes (6%) are attached to their parents as `amod`.

5027 instances of `amod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86404416839199.

The following 22 pairs of parts of speech are connected with `amod`: [da-pos/NOUN]()-[da-pos/ADJ]() (4395; 76% instances), [da-pos/NOUN]()-[da-pos/VERB]() (438; 8% instances), [da-pos/VERB]()-[da-pos/ADJ]() (427; 7% instances), [da-pos/PROPN]()-[da-pos/ADJ]() (198; 3% instances), [da-pos/ADJ]()-[da-pos/ADJ]() (97; 2% instances), [da-pos/VERB]()-[da-pos/ADV]() (81; 1% instances), [da-pos/NOUN]()-[da-pos/X]() (44; 1% instances), [da-pos/PRON]()-[da-pos/ADJ]() (33; 1% instances), [da-pos/ADV]()-[da-pos/ADJ]() (29; 1% instances), [da-pos/CONJ]()-[da-pos/ADJ]() (22; 0% instances), [da-pos/X]()-[da-pos/ADJ]() (13; 0% instances), [da-pos/VERB]()-[da-pos/VERB]() (5; 0% instances), [da-pos/ADP]()-[da-pos/ADJ]() (2; 0% instances), [da-pos/AUX]()-[da-pos/ADJ]() (2; 0% instances), [da-pos/AUX]()-[da-pos/ADV]() (2; 0% instances), [da-pos/NOUN]()-[da-pos/NOUN]() (2; 0% instances), [da-pos/ADV]()-[da-pos/VERB]() (1; 0% instances), [da-pos/NOUN]()-[da-pos/ADV]() (1; 0% instances), [da-pos/NUM]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/X]() (1; 0% instances), [da-pos/VERB]()-[da-pos/ADP]() (1; 0% instances), [da-pos/VERB]()-[da-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 amod	color:blue
1	H.L.	H.L.	PROPN	_	_	8	nsubj	_	_
2	Hansen	Hansen	PROPN	_	_	1	name	_	_
3	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
4	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	8	det	_	_
5	udsædvanlig	udsædvanlig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	8	amod	_	_
6	og	og	CONJ	_	_	5	cc	_	_
7	frodig	frodig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	conj	_	_
8	personlighed	personlighed	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Resten	rest	NOUN	_	Definite=Def|Gender=Com|Number=Sing	3	nsubj	_	_
2	skal	skulle	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	komme	komme	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
4	fra	fra	ADP	_	AdpType=Prep	7	case	_	_
5	et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	7	det	_	_
6	forventet	forvente	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	7	amod	_	_
7	mersalg	mersalg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	nmod	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 amod	color:blue
1	Lars	Lars	PROPN	_	_	2	nsubj	_	_
2	mumlede	mumle	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	noget	nogen	PRON	_	Gender=Neut|Number=Sing|PronType=Ind	2	dobj	_	_
4	om	om	ADP	_	AdpType=Prep	9	mark	_	_
5	,	,	PUNCT	_	_	9	punct	_	_
6	at	at	SCONJ	_	_	9	mark	_	_
7	klokken	klokke	NOUN	_	Definite=Def|Gender=Com|Number=Sing	9	nsubj	_	_
8	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
9	mange	mange	ADJ	_	Degree=Pos|Number=Plur	2	amod	_	_
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


