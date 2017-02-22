

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

4110 nodes (1%) are attached to their parents as `advcl`.

3381 instances of `advcl` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.71362530413625.

The following 38 pairs of parts of speech are connected with `advcl`: [es-pos/VERB]()-[es-pos/VERB]() (2203; 54% instances), [es-pos/NOUN]()-[es-pos/VERB]() (1057; 26% instances), [es-pos/ADJ]()-[es-pos/VERB]() (387; 9% instances), [es-pos/VERB]()-[es-pos/ADJ]() (120; 3% instances), [es-pos/VERB]()-[es-pos/NOUN]() (98; 2% instances), [es-pos/PRON]()-[es-pos/VERB]() (41; 1% instances), [es-pos/ADV]()-[es-pos/VERB]() (39; 1% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (18; 0% instances), [es-pos/PROPN]()-[es-pos/VERB]() (17; 0% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (15; 0% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (15; 0% instances), [es-pos/ADP]()-[es-pos/VERB]() (12; 0% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (12; 0% instances), [es-pos/DET]()-[es-pos/VERB]() (11; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (11; 0% instances), [es-pos/VERB]()-[es-pos/PRON]() (11; 0% instances), [es-pos/NUM]()-[es-pos/VERB]() (8; 0% instances), [es-pos/VERB]()-[es-pos/PROPN]() (5; 0% instances), [es-pos/AUX]()-[es-pos/VERB]() (3; 0% instances), [es-pos/VERB]()-[es-pos/AUX]() (3; 0% instances), [es-pos/VERB]()-[es-pos/CCONJ]() (3; 0% instances), [es-pos/X]()-[es-pos/VERB]() (3; 0% instances), [es-pos/ADV]()-[es-pos/NOUN]() (2; 0% instances), [es-pos/SYM]()-[es-pos/VERB]() (2; 0% instances), [es-pos/ADV]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/AUX]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/CCONJ]()-[es-pos/VERB]() (1; 0% instances), [es-pos/NUM]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/PRON]()-[es-pos/ADV]() (1; 0% instances), [es-pos/PRON]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/SCONJ]()-[es-pos/VERB]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADP]() (1; 0% instances), [es-pos/VERB]()-[es-pos/DET]() (1; 0% instances), [es-pos/VERB]()-[es-pos/NUM]() (1; 0% instances), [es-pos/VERB]()-[es-pos/SYM]() (1; 0% instances), [es-pos/VERB]()-[es-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 advcl	color:blue
1	Es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	necesario	necesario	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
3	que	que	SCONJ	_	_	4	mark	_	_
4	habilite	habilitar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	csubj	_	_
5	JavaScript	javascript	PROPN	_	_	4	obj	_	_
6	para	para	SCONJ	_	_	7	mark	_	_
7	leer	leer	VERB	_	VerbForm=Inf	4	advcl	_	_
8	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	comentarios	comentario	NOUN	_	Gender=Masc|Number=Plur	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 advcl	color:blue
1	Gracias	gracia	NOUN	_	Gender=Fem|Number=Plur	0	root	_	_
2	Lupe	lupe	PROPN	_	_	1	dep	_	_
3	y	y	CCONJ	_	_	4	cc	_	_
4	Ana	ana	PROPN	_	_	2	conj	_	_
5	por	por	ADP	_	_	6	mark	_	_
6	hacer	hacer	VERB	_	VerbForm=Inf	1	advcl	_	_
7	me	yo	PRON	_	Case=Acc,Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	6	iobj	_	_
8	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	vida	vida	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	_
10	más	más	ADV	_	Degree=Cmp	11	advmod	_	_
11	fácil	fácil	ADJ	_	Number=Sing	6	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advcl	color:blue
1	Cuando	cuando	SCONJ	_	_	2	mark	_	_
2	camina	camina	VERB	_	Gender=Fem|Number=Sing|VerbForm=Fin	5	advcl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	parece	parecer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	lento	lento	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
6	y	y	CCONJ	_	_	7	cc	_	_
7	cuidadoso	cuidadoso	ADJ	_	Gender=Masc|Number=Sing	5	conj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is universal.

7763 nodes (2%) are attached to their parents as `advcl`.

6548 instances of `advcl` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.3311863970115.

The following 74 pairs of parts of speech are connected with `advcl`: [es-pos/VERB]()-[es-pos/VERB]() (5457; 70% instances), [es-pos/ADJ]()-[es-pos/VERB]() (500; 6% instances), [es-pos/ADV]()-[es-pos/VERB]() (327; 4% instances), [es-pos/VERB]()-[es-pos/ADJ]() (242; 3% instances), [es-pos/NOUN]()-[es-pos/VERB]() (231; 3% instances), [es-pos/VERB]()-[es-pos/NOUN]() (216; 3% instances), [es-pos/AUX]()-[es-pos/VERB]() (144; 2% instances), [es-pos/VERB]()-[es-pos/AUX]() (133; 2% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (48; 1% instances), [es-pos/NUM]()-[es-pos/VERB]() (47; 1% instances), [es-pos/CCONJ]()-[es-pos/VERB]() (34; 0% instances), [es-pos/ADJ]()-[es-pos/AUX]() (29; 0% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (28; 0% instances), [es-pos/PRON]()-[es-pos/VERB]() (26; 0% instances), [es-pos/SCONJ]()-[es-pos/VERB]() (26; 0% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (23; 0% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (23; 0% instances), [es-pos/ADP]()-[es-pos/VERB]() (21; 0% instances), [es-pos/VERB]()-[es-pos/PRON]() (14; 0% instances), [es-pos/AUX]()-[es-pos/ADJ]() (12; 0% instances), [es-pos/AUX]()-[es-pos/AUX]() (12; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (12; 0% instances), [es-pos/NOUN]()-[es-pos/AUX]() (11; 0% instances), [es-pos/ADJ]()-[es-pos/PRON]() (10; 0% instances), [es-pos/ADV]()-[es-pos/NOUN]() (9; 0% instances), [es-pos/AUX]()-[es-pos/NOUN]() (8; 0% instances), [es-pos/PROPN]()-[es-pos/VERB]() (8; 0% instances), [es-pos/SCONJ]()-[es-pos/NOUN]() (8; 0% instances), [es-pos/CCONJ]()-[es-pos/NOUN]() (7; 0% instances), [es-pos/ADV]()-[es-pos/ADJ]() (6; 0% instances), [es-pos/ADV]()-[es-pos/AUX]() (5; 0% instances), [es-pos/ADP]()-[es-pos/ADJ]() (4; 0% instances), [es-pos/DET]()-[es-pos/VERB]() (4; 0% instances), [es-pos/NOUN]()-[es-pos/ADV]() (4; 0% instances), [es-pos/NUM]()-[es-pos/ADJ]() (4; 0% instances), [es-pos/PRON]()-[es-pos/ADJ]() (4; 0% instances), [es-pos/ADJ]()-[es-pos/ADV]() (3; 0% instances), [es-pos/ADV]()-[es-pos/ADV]() (3; 0% instances), [es-pos/AUX]()-[es-pos/PRON]() (3; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (3; 0% instances), [es-pos/NUM]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/PRON]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/VERB]()-[es-pos/NUM]() (3; 0% instances), [es-pos/VERB]()-[es-pos/PROPN]() (3; 0% instances), [es-pos/ADJ]()-[es-pos/ADP]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/PROPN]() (2; 0% instances), [es-pos/ADP]()-[es-pos/AUX]() (2; 0% instances), [es-pos/ADP]()-[es-pos/NOUN]() (2; 0% instances), [es-pos/CCONJ]()-[es-pos/ADJ]() (2; 0% instances), [es-pos/NUM]()-[es-pos/AUX]() (2; 0% instances), [es-pos/PRON]()-[es-pos/AUX]() (2; 0% instances), [es-pos/PRON]()-[es-pos/PRON]() (2; 0% instances), [es-pos/SYM]()-[es-pos/VERB]() (2; 0% instances), [es-pos/VERB]()-[es-pos/SYM]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/DET]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/NUM]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/X]() (1; 0% instances), [es-pos/AUX]()-[es-pos/ADV]() (1; 0% instances), [es-pos/AUX]()-[es-pos/NUM]() (1; 0% instances), [es-pos/AUX]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/AUX]()-[es-pos/SCONJ]() (1; 0% instances), [es-pos/CCONJ]()-[es-pos/AUX]() (1; 0% instances), [es-pos/DET]()-[es-pos/AUX]() (1; 0% instances), [es-pos/DET]()-[es-pos/PRON]() (1; 0% instances), [es-pos/INTJ]()-[es-pos/AUX]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/ADP]() (1; 0% instances), [es-pos/NUM]()-[es-pos/NUM]() (1; 0% instances), [es-pos/NUM]()-[es-pos/PRON]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/SCONJ]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/SCONJ]()-[es-pos/PRON]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advcl	color:blue
1	Cuando	cuando	SCONJ	SCONJ	_	4	mark	_	_
2	alguien	alguien	PRON	PRON	Number=Sing|PronType=Ind	4	nsubj	_	_
3	se	él	PRON	PRON	Person=3	4	obj	_	_
4	asomaba	asomar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	advcl	_	_
5	se	él	PRON	PRON	Person=3	6	obj	_	_
6	quedaba	quedar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
7	enganchado	enganchado	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl	color:blue
1	Todo	todo	PRON	PRON	Gender=Masc|Number=Sing|PronType=Ind	3	nsubj	_	_
2	es	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	nuevo	nuevo	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
5	todo	todo	PRON	PRON	Gender=Masc|Number=Sing|PronType=Ind	6	nsubj	_	_
6	está	estar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	_
7	por	por	ADP	ADP	AdpType=Prep	8	mark	_	_
8	organizar	organizar	VERB	VERB	VerbForm=Inf	6	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 advcl	color:blue
1	Antes	antes	ADV	ADV	_	0	root	_	_
2	de	de	ADP	ADP	AdpType=Prep	3	case	_	_
3	nada	nada	PRON	PRON	Number=Sing|PronType=Ind	1	obl	_	SpaceAfter=No
4	:	:	PUNCT	PUNCT	PunctType=Colo	5	punct	_	_
5	amo	amar	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	advcl	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	PunctType=Comm	9	punct	_	_
7	admiro	admirar	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	advcl	_	_
8	y	y	CCONJ	CCONJ	_	9	cc	_	_
9	respeto	respetar	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	conj	_	_
10	a	a	ADP	ADP	AdpType=Prep	11	case	_	_
11	Cayetana	Cayetana	PROPN	PROPN	_	5	obj	_	MWE=Cayetana_de_Alba|MWEPOS=PROPN
12	de	de	ADP	ADP	AdpType=Prep	13	case	_	_
13	Alba	Alba	PROPN	PROPN	_	11	flat	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


