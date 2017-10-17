

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

16682 nodes (4%) are attached to their parents as `aux`.

16488 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5290732526076.

The following 13 pairs of parts of speech are connected with `aux`: [ca-pos/VERB]()-[ca-pos/AUX]() (15491; 93% instances), [ca-pos/NOUN]()-[ca-pos/AUX]() (621; 4% instances), [ca-pos/ADJ]()-[ca-pos/AUX]() (373; 2% instances), [ca-pos/AUX]()-[ca-pos/AUX]() (51; 0% instances), [ca-pos/PRON]()-[ca-pos/AUX]() (39; 0% instances), [ca-pos/NUM]()-[ca-pos/AUX]() (29; 0% instances), [ca-pos/PROPN]()-[ca-pos/AUX]() (29; 0% instances), [ca-pos/ADV]()-[ca-pos/AUX]() (22; 0% instances), [ca-pos/VERB]()-[ca-pos/ADP]() (16; 0% instances), [ca-pos/SYM]()-[ca-pos/AUX]() (5; 0% instances), [ca-pos/ADP]()-[ca-pos/AUX]() (3; 0% instances), [ca-pos/SCONJ]()-[ca-pos/AUX]() (2; 0% instances), [ca-pos/DET]()-[ca-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
1	D'	de	ADP	ADP	AdpType=Prep	3	case	_	SpaceAfter=No
2	aquestes	aquest	DET	DET	Gender=Fem|Number=Plur|PronType=Dem	3	det	_	_
3	activitats	activitat	NOUN	NOUN	Gender=Fem|Number=Plur	9	obl	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
5	algunes	algun	PRON	PRON	Gender=Fem|Number=Plur|PronType=Ind	9	nsubj	_	_
6	no	no	ADV	ADV	Polarity=Neg	9	advmod	_	_
7	s'	es	PRON	PRON	_	9	obj	_	SpaceAfter=No
8	han	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	obert	obrir	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
10	al	al	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	11	case	_	_
11	públic	públic	NOUN	NOUN	Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	De	de	ADP	ADP	AdpType=Prep	8	advmod	_	MWE=De_fet|MWEPOS=ADV
2	fet	fet	NOUN	NOUN	_	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	PunctType=Comm	1	punct	_	_
4	en	en	PRON	PRON	Person=3|PronType=Prs	8	nsubj	_	_
5	va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
6	ser	ser	AUX	AUX	VerbForm=Inf	8	cop	_	_
7	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	progenitor	progenitor	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
9	intel·lectual	intel·lectual	ADJ	ADJ	Number=Sing	8	amod	_	_
10	i	i	CCONJ	CCONJ	_	11	cc	_	_
11	emocional	emocional	ADJ	ADJ	Number=Sing	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 aux	color:blue
1	A	a	ADP	ADP	AdpType=Prep	4	case	_	_
2	l'	el	DET	DET	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
3	últim	últim	ADJ	ADJ	Gender=Masc|Number=Sing|NumType=Ord	4	amod	_	_
4	partit	partit	NOUN	NOUN	Gender=Masc|Number=Sing	15	obl	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
6	davant	davant	ADP	ADP	AdpType=Prep	8	case	_	_
7	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Rayo	Rayo	PROPN	PROPN	_	15	obl	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	PunctType=Comm	8	punct	_	_
10	ni	ni	CCONJ	CCONJ	_	15	advmod	_	MWE=ni_tan_sols|MWEPOS=ADV
11	tan	tan	NOUN	NOUN	_	10	fixed	_	_
12	sols	sols	NOUN	NOUN	_	10	fixed	_	_
13	va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
14	ser	ser	AUX	AUX	VerbForm=Inf	15	cop	_	_
15	convocat	convocat	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	PunctType=Peri	15	punct	_	_

~~~


