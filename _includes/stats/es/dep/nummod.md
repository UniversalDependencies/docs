

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

7075 nodes (2%) are attached to their parents as `nummod`.

5777 instances of `nummod` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1583038869258.

The following 35 pairs of parts of speech are connected with `nummod`: [es-pos/NOUN]()-[es-pos/NUM]() (4030; 57% instances), [es-pos/SYM]()-[es-pos/NUM]() (1030; 15% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (841; 12% instances), [es-pos/PROPN]()-[es-pos/NUM]() (474; 7% instances), [es-pos/X]()-[es-pos/NUM]() (185; 3% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (164; 2% instances), [es-pos/NUM]()-[es-pos/NUM]() (107; 2% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (107; 2% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (23; 0% instances), [es-pos/VERB]()-[es-pos/NUM]() (22; 0% instances), [es-pos/ADJ]()-[es-pos/NUM]() (16; 0% instances), [es-pos/NOUN]()-[es-pos/X]() (12; 0% instances), [es-pos/PRON]()-[es-pos/NUM]() (9; 0% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (8; 0% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (7; 0% instances), [es-pos/SYM]()-[es-pos/NOUN]() (5; 0% instances), [es-pos/SYM]()-[es-pos/X]() (5; 0% instances), [es-pos/X]()-[es-pos/ADJ]() (4; 0% instances), [es-pos/ADP]()-[es-pos/NUM]() (3; 0% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/PROPN]()-[es-pos/X]() (3; 0% instances), [es-pos/X]()-[es-pos/X]() (3; 0% instances), [es-pos/ADV]()-[es-pos/NUM]() (2; 0% instances), [es-pos/ADV]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/DET]()-[es-pos/NUM]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/DET]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (1; 0% instances), [es-pos/NUM]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/NUM]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/PUNCT]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/SYM]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/VERB]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/VERB]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/X]()-[es-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Durante	durante	ADP	_	_	3	case	_	_
2	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	temporada	temporada	NOUN	_	Gender=Fem|Number=Sing	4	obl	_	_
4	promedió	promeder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	5	5	NUM	_	NumType=Card	6	nummod	_	_
6	puntos	punto	NOUN	_	Gender=Masc|Number=Plur	4	obj	_	_
7	y	y	CCONJ	_	_	9	cc	_	_
8	2.4	2.4	NUM	_	NumType=Card	9	nummod	_	_
9	rebotes	rebote	NOUN	_	Gender=Masc|Number=Plur	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	Palabra	palabra	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	clave	clave	NOUN	_	Gender=Fem|Number=Sing	1	appos	_	SpaceAfter=No
3	:	:	PUNCT	_	_	8	punct	_	_
4	desplazamiento	desplazamiento	NOUN	_	Gender=Masc|Number=Sing	1	appos	_	_
5	=	=	SYM	_	_	4	appos	_	_
6	0	0	NUM	_	NumType=Card	5	nummod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	tamaño	tamaño	NOUN	_	Gender=Masc|Number=Sing	1	conj	_	_
9	=	=	SYM	_	_	8	appos	_	_
10	2	2	NUM	_	NumType=Card	9	nummod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Incluido	incluir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	en	en	ADP	_	_	5	case	_	_
3	su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	det	_	_
4	primer	primero	ADJ	_	Gender=Masc|Number=Sing|NumType=Ord	5	nummod	_	_
5	disco	disco	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	_
6	como	como	ADP	_	_	9	case	_	_
7	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	segundo	segundo	ADJ	_	Gender=Masc|Number=Sing|NumType=Ord	9	nummod	_	_
9	corte	corte	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is universal.

5085 nodes (1%) are attached to their parents as `nummod`.

3713 instances of `nummod` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27531956735497.

The following 12 pairs of parts of speech are connected with `nummod`: [es-pos/NOUN]()-[es-pos/NUM]() (3972; 78% instances), [es-pos/DET]()-[es-pos/NUM]() (686; 13% instances), [es-pos/PROPN]()-[es-pos/NUM]() (176; 3% instances), [es-pos/ADV]()-[es-pos/NUM]() (164; 3% instances), [es-pos/ADJ]()-[es-pos/NUM]() (47; 1% instances), [es-pos/PRON]()-[es-pos/NUM]() (20; 0% instances), [es-pos/NUM]()-[es-pos/NUM]() (11; 0% instances), [es-pos/ADP]()-[es-pos/NUM]() (4; 0% instances), [es-pos/NOUN]()-[es-pos/ADP]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/X]() (1; 0% instances), [es-pos/VERB]()-[es-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Anthoney	Anthoney	PROPN	PROPN	_	3	nsubj	_	MWE=Anthoney_Mngani|MWEPOS=PROPN
2	Mngani	Mngani	PROPN	PROPN	_	1	flat	_	_
3	tenía	tener	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	29	29	NUM	NUM	NumForm=Digit	5	nummod	_	_
5	años	año	NOUN	NOUN	Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Y	y	CCONJ	CCONJ	_	7	advmod	_	_
2	a	a	ADP	ADP	AdpType=Prep	5	case	_	_
3	los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
4	dos	dos	NUM	NUM	Number=Plur|NumType=Card	3	nummod	_	_
5	días	día	NOUN	NOUN	Gender=Masc|Number=Plur	7	obl	_	_
6	la	él	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	desmienten	desmentir	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 nummod	color:blue
1	Helio	Helio	PROPN	PROPN	_	0	root	_	MWE=Helio_Castro_Neves|MWEPOS=PROPN
2	Castro	Castro	PROPN	PROPN	_	1	flat	_	_
3	Neves	Neves	PROPN	PROPN	_	1	flat	_	_
4	(	(	PUNCT	PUNCT	PunctSide=Ini|PunctType=Brck	5	punct	_	SpaceAfter=No
5	Reynard/Honda	Reynard/Honda	PROPN	PROPN	_	1	flat	_	SpaceAfter=No
6	)	)	PUNCT	PUNCT	PunctSide=Fin|PunctType=Brck	5	punct	_	_
7	2	2	NUM	NUM	NumForm=Digit	1	nummod	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


