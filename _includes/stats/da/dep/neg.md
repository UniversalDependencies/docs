

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

874 nodes (1%) are attached to their parents as `neg`.

628 instances of `neg` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09153318077803.

The following 10 pairs of parts of speech are connected with `neg`: [da-pos/VERB]()-[da-pos/ADV]() (626; 72% instances), [da-pos/ADJ]()-[da-pos/ADV]() (95; 11% instances), [da-pos/NOUN]()-[da-pos/ADV]() (57; 7% instances), [da-pos/ADV]()-[da-pos/ADV]() (43; 5% instances), [da-pos/PRON]()-[da-pos/ADV]() (17; 2% instances), [da-pos/CONJ]()-[da-pos/ADV]() (12; 1% instances), [da-pos/PART]()-[da-pos/ADV]() (11; 1% instances), [da-pos/PROPN]()-[da-pos/ADV]() (5; 1% instances), [da-pos/ADP]()-[da-pos/ADV]() (4; 0% instances), [da-pos/AUX]()-[da-pos/ADV]() (4; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 neg	color:blue
1	Men	men	CONJ	_	_	6	discourse	_	_
2	man	man	PRON	_	Case=Nom|Gender=Com|PronType=Ind	6	nsubj	_	_
3	ka'	kunne	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
4	sgu'	sgu'	ADV	_	_	6	advmod	_	_
5	ikke	ikke	ADV	_	_	6	neg	_	_
6	undvære	undvære	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
7	dem	de	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	6	dobj	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 neg	color:blue
1	Men	men	CONJ	_	_	5	discourse	_	_
2	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
3	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
4	ikke	ikke	ADV	_	_	5	neg	_	_
5	muligt	mulig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 neg	color:blue
1	Ikke	ikke	ADV	_	_	3	neg	_	_
2	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	3	det	_	_
3	frynse	frynse	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	8	nsubjpass	_	_
4	på	på	ADP	_	AdpType=Prep	6	case	_	_
5	hendes	hendes	DET	_	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	gulvtæppe	gulvtæppe	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	nmod	_	_
7	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	aux	_	_
8	kommet	komme	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	0	root	_	_
9	i	i	ADP	_	AdpType=Prep	10	case	_	_
10	uorden	uorden	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	8	nmod	_	_
11	.	.	PUNCT	_	_	8	punct	_	_

~~~


