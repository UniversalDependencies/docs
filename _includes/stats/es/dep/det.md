

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

61212 nodes (14%) are attached to their parents as `det`.

61009 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12827550153565.

The following 41 pairs of parts of speech are connected with `det`: [es-pos/NOUN]()-[es-pos/DET]() (50876; 83% instances), [es-pos/PROPN]()-[es-pos/DET]() (6256; 10% instances), [es-pos/NUM]()-[es-pos/DET]() (967; 2% instances), [es-pos/PRON]()-[es-pos/DET]() (820; 1% instances), [es-pos/SYM]()-[es-pos/DET]() (682; 1% instances), [es-pos/NOUN]()-[es-pos/PRON]() (265; 0% instances), [es-pos/VERB]()-[es-pos/DET]() (222; 0% instances), [es-pos/X]()-[es-pos/DET]() (219; 0% instances), [es-pos/ADJ]()-[es-pos/DET]() (205; 0% instances), [es-pos/PRON]()-[es-pos/PRON]() (177; 0% instances), [es-pos/SCONJ]()-[es-pos/DET]() (165; 0% instances), [es-pos/SCONJ]()-[es-pos/PRON]() (121; 0% instances), [es-pos/ADV]()-[es-pos/DET]() (84; 0% instances), [es-pos/ADP]()-[es-pos/DET]() (53; 0% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (20; 0% instances), [es-pos/ADJ]()-[es-pos/PRON]() (11; 0% instances), [es-pos/ADV]()-[es-pos/PRON]() (8; 0% instances), [es-pos/NOUN]()-[es-pos/X]() (8; 0% instances), [es-pos/PROPN]()-[es-pos/PRON]() (8; 0% instances), [es-pos/PROPN]()-[es-pos/X]() (6; 0% instances), [es-pos/NOUN]()-[es-pos/ADP]() (5; 0% instances), [es-pos/CONJ]()-[es-pos/DET]() (4; 0% instances), [es-pos/AUX]()-[es-pos/DET]() (3; 0% instances), [es-pos/NOUN]()-[es-pos/VERB]() (3; 0% instances), [es-pos/ADP]()-[es-pos/PRON]() (2; 0% instances), [es-pos/DET]()-[es-pos/DET]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/SYM]() (2; 0% instances), [es-pos/PROPN]()-[es-pos/ADP]() (2; 0% instances), [es-pos/VERB]()-[es-pos/PRON]() (2; 0% instances), [es-pos/X]()-[es-pos/X]() (2; 0% instances), [es-pos/ADP]()-[es-pos/ADV]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/PRON]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/ADV]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/NUM]() (1; 0% instances), [es-pos/NUM]()-[es-pos/SYM]() (1; 0% instances), [es-pos/PRON]()-[es-pos/PART]() (1; 0% instances), [es-pos/PUNCT]()-[es-pos/DET]() (1; 0% instances), [es-pos/SYM]()-[es-pos/PRON]() (1; 0% instances), [es-pos/X]()-[es-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Aun	aun	ADV	_	_	2	advmod	_	_
2	hay	haber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	otros	otro	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	2	dobj	_	_
4	reclutados	reclutado	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	3	acl	_	_
5	por	por	ADP	_	_	7	case	_	_
6	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Ejército	ejército	NOUN	_	_	4	nmod	_	_
8	Blanco	blanco	PROPN	_	_	7	amod	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	12	12	NUM	_	NumType=Card	9	nmod	_	_
3	de	de	ADP	_	_	4	case	_	_
4	noviembre	noviembre	PROPN	_	_	2	nmod	_	_
5	,	,	PUNCT	_	_	2	punct	_	_
6	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	CNT	cnt	PROPN	_	_	9	nsubj	_	_
8	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	9	iobj	_	_
9	retira	retirar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	de	de	ADP	_	_	12	case	_	_
11	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	comités	comités	NOUN	_	Gender=Masc|Number=Plur	9	nmod	_	_
13	de	de	ADP	_	_	15	case	_	_
14	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	FPA	fpa	PROPN	_	_	12	nmod	_	_
16	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	12	12	NUM	_	NumType=Card	9	nmod	_	_
3	de	de	ADP	_	_	4	case	_	_
4	noviembre	noviembre	PROPN	_	_	2	nmod	_	_
5	,	,	PUNCT	_	_	2	punct	_	_
6	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	CNT	cnt	PROPN	_	_	9	nsubj	_	_
8	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	9	iobj	_	_
9	retira	retirar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	de	de	ADP	_	_	12	case	_	_
11	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	comités	comités	NOUN	_	Gender=Masc|Number=Plur	9	nmod	_	_
13	de	de	ADP	_	_	15	case	_	_
14	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	FPA	fpa	PROPN	_	_	12	nmod	_	_
16	.	.	PUNCT	_	_	9	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is universal.

84266 nodes (15%) are attached to their parents as `det`.

83127 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16980751429995.

The following 34 pairs of parts of speech are connected with `det`: [es-pos/NOUN]()-[es-pos/DET]() (66662; 79% instances), [es-pos/PROPN]()-[es-pos/DET]() (9771; 12% instances), [es-pos/VERB]()-[es-pos/DET]() (1597; 2% instances), [es-pos/NUM]()-[es-pos/DET]() (1593; 2% instances), [es-pos/PRON]()-[es-pos/DET]() (1469; 2% instances), [es-pos/ADJ]()-[es-pos/DET]() (1354; 2% instances), [es-pos/DET]()-[es-pos/DET]() (1311; 2% instances), [es-pos/SYM]()-[es-pos/DET]() (317; 0% instances), [es-pos/ADV]()-[es-pos/DET]() (74; 0% instances), [es-pos/AUX]()-[es-pos/DET]() (23; 0% instances), [es-pos/AUX]()-[es-pos/NOUN]() (18; 0% instances), [es-pos/ADP]()-[es-pos/DET]() (15; 0% instances), [es-pos/AUX]()-[es-pos/PROPN]() (11; 0% instances), [es-pos/AUX]()-[es-pos/VERB]() (8; 0% instances), [es-pos/PRON]()-[es-pos/ADV]() (6; 0% instances), [es-pos/CONJ]()-[es-pos/DET]() (5; 0% instances), [es-pos/NOUN]()-[es-pos/NUM]() (5; 0% instances), [es-pos/PRON]()-[es-pos/NUM]() (5; 0% instances), [es-pos/VERB]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (2; 0% instances), [es-pos/PRON]()-[es-pos/PRON]() (2; 0% instances), [es-pos/X]()-[es-pos/DET]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/PRON]() (1; 0% instances), [es-pos/AUX]()-[es-pos/PRON]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/VERB]() (1; 0% instances), [es-pos/NUM]()-[es-pos/PRON]() (1; 0% instances), [es-pos/PART]()-[es-pos/DET]() (1; 0% instances), [es-pos/PRON]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/PRON]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/PRON]()-[es-pos/VERB]() (1; 0% instances), [es-pos/PUNCT]()-[es-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	error	error	NOUN	NOUN	Gender=Masc|Number=Sing	6	nsubj	_	_
3	fue	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
4	haber	haber	AUX	AUX	VerbForm=Inf	6	aux	_	_
5	lo	él	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	dobj	_	_
6	comprado	comprar	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	en	en	ADP	ADP	AdpType=Prep	8	case	_	_
8	rebajas	rebaja	NOUN	NOUN	Gender=Fem|Number=Plur	6	nmod	_	_
9	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Para	para	ADP	ADP	AdpType=Prep	2	mark	_	_
2	abreviar	abreviar	VERB	VERB	VerbForm=Inf	6	advcl	_	_
3	,	,	PUNCT	PUNCT	PunctType=Comm	2	punct	_	_
4	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Real	Real	PROPN	PROPN	_	6	nsubj	_	_
6	marcó	marcar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	-	-	PUNCT	PUNCT	PunctType=Dash	8	punct	_	_
8	de	de	ADP	ADP	AdpType=Prep	6	advmod	_	MWE=de_churro|MWEPOS=ADV
9	churro	churro	NOUN	NOUN	_	8	mwe	_	_
10	-	-	PUNCT	PUNCT	PunctType=Dash	8	punct	_	_
11	y	y	CONJ	CONJ	_	8	cc	_	_
12	de	de	ADP	ADP	AdpType=Prep	13	case	_	_
13	penalti	penalti	NOUN	NOUN	Gender=Masc|Number=Sing	8	conj	_	_
14	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 det	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
2	que	que	PRON	PRON	PronType=Rel	4	nsubj	_	_
3	nos	yo	PRON	PRON	Number=Plur|Person=1|PronType=Prs	4	dobj	_	_
4	niega	negar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	csubj	_	_
5	nos	yo	PRON	PRON	Number=Plur|Person=1|PronType=Prs	6	dobj	_	_
6	afirma	afirmar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	condicionalmente	condicionalmente	ADV	ADV	_	6	advmod	_	_
8	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


