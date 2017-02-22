

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

39632 nodes (14%) are attached to their parents as `case`.

39603 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75454178441663.

The following 30 pairs of parts of speech are connected with `case`: [it-pos/NOUN]()-[it-pos/ADP]() (30667; 77% instances), [it-pos/PROPN]()-[it-pos/ADP]() (5271; 13% instances), [it-pos/PRON]()-[it-pos/ADP]() (1523; 4% instances), [it-pos/NUM]()-[it-pos/ADP]() (891; 2% instances), [it-pos/NOUN]()-[it-pos/ADV]() (288; 1% instances), [it-pos/ADJ]()-[it-pos/ADP]() (276; 1% instances), [it-pos/ADV]()-[it-pos/ADP]() (250; 1% instances), [it-pos/VERB]()-[it-pos/ADP]() (114; 0% instances), [it-pos/SYM]()-[it-pos/ADP]() (54; 0% instances), [it-pos/PROPN]()-[it-pos/ADV]() (48; 0% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (33; 0% instances), [it-pos/SCONJ]()-[it-pos/ADP]() (33; 0% instances), [it-pos/PRON]()-[it-pos/ADV]() (32; 0% instances), [it-pos/ADP]()-[it-pos/ADP]() (26; 0% instances), [it-pos/NUM]()-[it-pos/ADV]() (26; 0% instances), [it-pos/X]()-[it-pos/ADP]() (26; 0% instances), [it-pos/PROPN]()-[it-pos/PART]() (24; 0% instances), [it-pos/ADV]()-[it-pos/ADV]() (18; 0% instances), [it-pos/SCONJ]()-[it-pos/ADV]() (9; 0% instances), [it-pos/ADJ]()-[it-pos/ADV]() (6; 0% instances), [it-pos/PROPN]()-[it-pos/DET]() (4; 0% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (3; 0% instances), [it-pos/NOUN]()-[it-pos/PART]() (2; 0% instances), [it-pos/NOUN]()-[it-pos/SCONJ]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/DET]()-[it-pos/ADP]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/SCONJ]() (1; 0% instances), [it-pos/PUNCT]()-[it-pos/VERB]() (1; 0% instances), [it-pos/VERB]()-[it-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Corriere	Corriere	PROPN	SP	_	0	root	_	_
2	Sport	Sport	PROPN	SP	_	1	flat:name	_	_
3	da	da	ADP	E	_	4	case	_	_
4	pagina	pagina	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
5	23	23	NUM	N	NumType=Card	4	nummod	_	_
6	a	a	ADP	E	_	7	case	_	_
7	pagina	pagina	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
8	26	26	NUM	N	NumType=Card	7	nummod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 case	color:blue
1	Alcune	alcuno	DET	DI	Gender=Fem|Number=Plur|PronType=Ind	2	det	_	_
2	chiamate	chiamata	NOUN	S	Gender=Fem|Number=Plur	3	nsubj	_	_
3	partirono	partire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	da	da	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Quirinale	Quirinale	PROPN	SP	_	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 case	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	3	det:predet	_	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	_	ExtraSubj=Yes
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	_	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	di	di	ADP	E	_	9	mark	_	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	_	_
8	essere	essere	AUX	V	VerbForm=Inf	9	cop	_	_
9	più	più	ADV	B	_	5	xcomp	_	_
10	di	di	ADP	E	_	11	case	_	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	obl	_	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is universal.

6216 nodes (15%) are attached to their parents as `case`.

6216 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80389317889318.

The following 18 pairs of parts of speech are connected with `case`: [it-pos/NOUN]()-[it-pos/ADP]() (5029; 81% instances), [it-pos/PROPN]()-[it-pos/ADP]() (615; 10% instances), [it-pos/PRON]()-[it-pos/ADP]() (265; 4% instances), [it-pos/NUM]()-[it-pos/ADP]() (140; 2% instances), [it-pos/ADJ]()-[it-pos/ADP]() (38; 1% instances), [it-pos/ADV]()-[it-pos/ADP]() (26; 0% instances), [it-pos/VERB]()-[it-pos/ADP]() (25; 0% instances), [it-pos/SYM]()-[it-pos/ADP]() (24; 0% instances), [it-pos/X]()-[it-pos/ADP]() (22; 0% instances), [it-pos/SCONJ]()-[it-pos/ADP]() (9; 0% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (7; 0% instances), [it-pos/NOUN]()-[it-pos/ADV]() (6; 0% instances), [it-pos/ADP]()-[it-pos/ADP]() (4; 0% instances), [it-pos/ADJ]()-[it-pos/ADV]() (2; 0% instances), [it-pos/ADV]()-[it-pos/ADV]() (1; 0% instances), [it-pos/PRON]()-[it-pos/ADV]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/ADV]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 case	color:blue
1	Attribuzione	attribuzione	NOUN	S	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	Condividi	condividere	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	flat	_	_
4	a	a	ADP	E	_	7	case	_	_
5	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	stesso	stesso	ADJ	A	Gender=Masc|Number=Sing	7	amod	_	_
7	modo	modo	NOUN	S	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 case	color:blue
1	creazione	creazione	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
2	e	e	CCONJ	CC	_	3	cc	_	_
3	riproduzione	riproduzione	NOUN	S	Gender=Fem|Number=Sing	1	conj	_	_
4	di	di	ADP	E	_	6	case	_	_
5	un'	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	SpaceAfter=No
6	Opera	Opera	PROPN	SP	_	3	nmod	_	_
7	derivata	derivata	NOUN	S	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
8	;	;	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Trova	trovare	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	persone	persona	NOUN	S	Gender=Fem|Number=Plur	1	obj	_	_
3	di	di	ADP	E	_	4	case	_	_
4	cui	cui	PRON	PR	PronType=Rel	5	obl	_	_
5	ricevere	ricevere	VERB	V	VerbForm=Inf	2	acl:relcl	_	_
6	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	aggiornamenti	aggiornamento	NOUN	S	Gender=Masc|Number=Plur	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	_	_

~~~


