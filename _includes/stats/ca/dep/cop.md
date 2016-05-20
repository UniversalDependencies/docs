

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

5310 nodes (1%) are attached to their parents as `cop`.

5069 instances of `cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27080979284369.

The following 36 pairs of parts of speech are connected with `cop`: [ca-pos/NOUN]()-[ca-pos/AUX]() (1616; 30% instances), [ca-pos/ADJ]()-[ca-pos/AUX]() (1170; 22% instances), [ca-pos/ADJ]()-[ca-pos/VERB]() (867; 16% instances), [ca-pos/NOUN]()-[ca-pos/VERB]() (521; 10% instances), [ca-pos/VERB]()-[ca-pos/AUX]() (407; 8% instances), [ca-pos/PRON]()-[ca-pos/AUX]() (173; 3% instances), [ca-pos/VERB]()-[ca-pos/VERB]() (107; 2% instances), [ca-pos/PROPN]()-[ca-pos/AUX]() (102; 2% instances), [ca-pos/PRON]()-[ca-pos/VERB]() (54; 1% instances), [ca-pos/NUM]()-[ca-pos/AUX]() (52; 1% instances), [ca-pos/ADV]()-[ca-pos/AUX]() (51; 1% instances), [ca-pos/PROPN]()-[ca-pos/VERB]() (29; 1% instances), [ca-pos/NOUN]()-[ca-pos/DET]() (25; 0% instances), [ca-pos/ADV]()-[ca-pos/VERB]() (24; 0% instances), [ca-pos/NUM]()-[ca-pos/VERB]() (24; 0% instances), [ca-pos/SYM]()-[ca-pos/AUX]() (18; 0% instances), [ca-pos/ADP]()-[ca-pos/VERB]() (12; 0% instances), [ca-pos/PROPN]()-[ca-pos/DET]() (10; 0% instances), [ca-pos/SCONJ]()-[ca-pos/AUX]() (9; 0% instances), [ca-pos/VERB]()-[ca-pos/DET]() (6; 0% instances), [ca-pos/ADP]()-[ca-pos/AUX]() (5; 0% instances), [ca-pos/AUX]()-[ca-pos/AUX]() (5; 0% instances), [ca-pos/SYM]()-[ca-pos/VERB]() (4; 0% instances), [ca-pos/DET]()-[ca-pos/AUX]() (3; 0% instances), [ca-pos/SCONJ]()-[ca-pos/VERB]() (3; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADP]() (2; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADV]() (2; 0% instances), [ca-pos/ADJ]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/ADJ]()-[ca-pos/PRON]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/CONJ]() (1; 0% instances), [ca-pos/NUM]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/ADP]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/PROPN]()-[ca-pos/ADV]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/ADV]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cop	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	camí	camí	NOUN	NOUN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	és	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	ple	ple	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
5	d'	de	ADP	ADP	AdpType=Prep	6	case	_	_
6	entrebancs	entrebanc	NOUN	NOUN	Gender=Masc|Number=Plur	4	nmod	_	_
7	que	que	PRON	PRON	PronType=Rel	11	dobj	_	_
8	hem	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	11	aux	_	_
9	d'	de	ADP	ADP	AdpType=Prep	11	mark	_	_
10	anar	anar	AUX	AUX	VerbForm=Inf	11	aux	_	_
11	superant	superar	VERB	VERB	VerbForm=Ger	6	acl	_	_
12	.	.	PUNCT	PUNCT	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	No	no	ADV	ADV	Negative=Neg	4	neg	_	_
2	ens	jo	PRON	PRON	Number=Plur|Person=1|PronType=Prs	4	dobj	_	_
3	sembla	semblar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	just	just	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
5	.	.	PUNCT	PUNCT	PunctType=Peri	4	punct	_	_

~~~


