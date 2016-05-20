

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

18650 nodes (3%) are attached to their parents as `aux`.

18484 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5285254691689.

The following 13 pairs of parts of speech are connected with `aux`: [ca-pos/VERB]()-[ca-pos/AUX]() (17278; 93% instances), [ca-pos/NOUN]()-[ca-pos/AUX]() (682; 4% instances), [ca-pos/ADJ]()-[ca-pos/AUX]() (416; 2% instances), [ca-pos/AUX]()-[ca-pos/AUX]() (103; 1% instances), [ca-pos/PRON]()-[ca-pos/AUX]() (49; 0% instances), [ca-pos/NUM]()-[ca-pos/AUX]() (35; 0% instances), [ca-pos/PROPN]()-[ca-pos/AUX]() (30; 0% instances), [ca-pos/ADV]()-[ca-pos/AUX]() (24; 0% instances), [ca-pos/VERB]()-[ca-pos/ADP]() (17; 0% instances), [ca-pos/SYM]()-[ca-pos/AUX]() (10; 0% instances), [ca-pos/ADP]()-[ca-pos/AUX]() (3; 0% instances), [ca-pos/SCONJ]()-[ca-pos/AUX]() (2; 0% instances), [ca-pos/DET]()-[ca-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
1	D'	de	ADP	ADP	AdpType=Prep	3	case	_	_
2	aquestes	aquest	DET	DET	Gender=Fem|Number=Plur|PronType=Dem	3	det	_	_
3	activitats	activitat	NOUN	NOUN	Gender=Fem|Number=Plur	9	nmod	_	_
4	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
5	algunes	algun	PRON	PRON	Gender=Fem|Number=Plur|PronType=Ind	9	nsubj	_	_
6	no	no	ADV	ADV	Negative=Neg	9	neg	_	_
7	s'	es	PRON	PRON	_	9	dobj	_	_
8	han	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	obert	obrir	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
10	a	a	ADP	ADP	AdpType=Prep	12	case	_	_
11	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	públic	públic	NOUN	NOUN	Gender=Masc|Number=Sing	9	dobj	_	_
13	.	.	PUNCT	PUNCT	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	De	de	ADP	ADP	AdpType=Prep	8	advmod	_	MWE=De_fet|MWEPOS=ADV
2	fet	fet	NOUN	NOUN	_	1	mwe	_	_
3	,	,	PUNCT	PUNCT	PunctType=Comm	1	punct	_	_
4	en	en	PRON	PRON	Person=3|PronType=Prs	8	nsubj	_	_
5	va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
6	ser	ser	AUX	AUX	VerbForm=Inf	8	cop	_	_
7	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	progenitor	progenitor	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
9	intel·lectual	intel·lectual	ADJ	ADJ	Number=Sing	8	amod	_	_
10	i	i	CONJ	CONJ	_	9	cc	_	_
11	emocional	emocional	ADJ	ADJ	Number=Sing	9	conj	_	_
12	.	.	PUNCT	PUNCT	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 aux	color:blue
1	A	a	ADP	ADP	AdpType=Prep	4	case	_	_
2	l'	el	DET	DET	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
3	últim	últim	ADJ	ADJ	Gender=Masc|Number=Sing|NumType=Ord	4	amod	_	_
4	partit	partit	NOUN	NOUN	Gender=Masc|Number=Sing	15	nmod	_	_
5	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
6	davant	davant	ADP	ADP	AdpType=Prep	8	case	_	_
7	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Rayo	Rayo	PROPN	PROPN	_	15	nmod	_	_
9	,	,	PUNCT	PUNCT	PunctType=Comm	8	punct	_	_
10	ni	ni	CONJ	CONJ	_	15	advmod	_	MWE=ni_tan_sols|MWEPOS=ADV
11	tan	tan	NOUN	NOUN	_	10	mwe	_	_
12	sols	sols	NOUN	NOUN	_	10	mwe	_	_
13	va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
14	ser	ser	AUX	AUX	VerbForm=Inf	15	cop	_	_
15	convocat	convocat	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
16	.	.	PUNCT	PUNCT	PunctType=Peri	15	punct	_	_

~~~


