

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


