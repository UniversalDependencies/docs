

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

7464 nodes (2%) are attached to their parents as `iobj`.

5716 instances of `iobj` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4981243301179.

The following 24 pairs of parts of speech are connected with `iobj`: [es-pos/VERB]()-[es-pos/PRON]() (6582; 88% instances), [es-pos/VERB]()-[es-pos/NOUN]() (565; 8% instances), [es-pos/VERB]()-[es-pos/PROPN]() (216; 3% instances), [es-pos/AUX]()-[es-pos/PRON]() (47; 1% instances), [es-pos/NOUN]()-[es-pos/PRON]() (17; 0% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (5; 0% instances), [es-pos/PROPN]()-[es-pos/PRON]() (5; 0% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (4; 0% instances), [es-pos/X]()-[es-pos/PRON]() (4; 0% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (3; 0% instances), [es-pos/VERB]()-[es-pos/X]() (3; 0% instances), [es-pos/ADJ]()-[es-pos/PRON]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/PRON]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/PRON]()-[es-pos/PRON]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/ADP]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (1; 0% instances), [es-pos/VERB]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/VERB]()-[es-pos/DET]() (1; 0% instances), [es-pos/VERB]()-[es-pos/NUM]() (1; 0% instances), [es-pos/VERB]()-[es-pos/SYM]() (1; 0% instances), [es-pos/VERB]()-[es-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 iobj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 iobj	color:blue
1	Lumine	lumine	PROPN	_	_	2	nsubj	_	_
2	pertenece	pertenecer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	a	ADP	_	_	5	case	_	_
4	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	conjunto	conjunto	NOUN	_	Gender=Masc|Number=Sing	2	iobj	_	_
6	de	de	ADP	_	_	7	case	_	_
7	empresas	empresa	NOUN	_	Gender=Fem|Number=Plur	5	nmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	La	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Caixa	caixa	PROPN	_	_	7	nmod	_	_
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 iobj	color:blue
1	Esto	este	PRON	_	Number=Sing|PronType=Dem	2	nsubj	_	_
2	permitió	permitir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	a	a	ADP	_	_	4	case	_	_
4	Smart	smart	PROPN	_	_	2	iobj	_	_
5	asistir	asistir	VERB	_	VerbForm=Inf	2	xcomp	_	_
6	a	a	ADP	_	_	8	case	_	_
7	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Pembroke	pembroke	PROPN	_	_	5	nmod	_	_
9	College	college	PROPN	_	_	8	name	_	_
10	de	de	ADP	_	_	11	case	_	_
11	Cambridge	cambridge	PROPN	_	_	8	nmod	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is universal.

1771 nodes (0%) are attached to their parents as `iobj`.

927 instances of `iobj` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.53359683794466.

The following 12 pairs of parts of speech are connected with `iobj`: [es-pos/VERB]()-[es-pos/PRON]() (826; 47% instances), [es-pos/VERB]()-[es-pos/NOUN]() (511; 29% instances), [es-pos/VERB]()-[es-pos/PROPN]() (255; 14% instances), [es-pos/VERB]()-[es-pos/ADJ]() (152; 9% instances), [es-pos/VERB]()-[es-pos/ADV]() (10; 1% instances), [es-pos/VERB]()-[es-pos/ADP]() (4; 0% instances), [es-pos/VERB]()-[es-pos/NUM]() (4; 0% instances), [es-pos/AUX]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/AUX]()-[es-pos/ADJ]() (2; 0% instances), [es-pos/AUX]()-[es-pos/PRON]() (2; 0% instances), [es-pos/VERB]()-[es-pos/SCONJ]() (1; 0% instances), [es-pos/VERB]()-[es-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 iobj	color:blue
1	Y	y	CONJ	CONJ	_	11	advmod	_	_
2	tú	tú	PRON	PRON	Case=Nom|Number=Sing|Person=2|PronType=Prs	11	nsubj	_	_
3	con	con	ADP	ADP	AdpType=Prep	5	case	_	_
4	tus	tu	DET	DET	Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	5	det	_	_
5	caras	cara	NOUN	NOUN	Gender=Fem|Number=Plur	11	nmod	_	_
6	y	y	CONJ	CONJ	_	5	cc	_	_
7	tus	tu	DET	DET	Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	8	det	_	_
8	nombres	nombre	NOUN	NOUN	Gender=Masc|Number=Plur	5	conj	_	_
9	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
10	nos	yo	PRON	PRON	Number=Plur|Person=1|PronType=Prs	11	iobj	_	_
11	dejaste	dejar	VERB	VERB	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	0	root	_	_
12	tutear	tutear	VERB	VERB	VerbForm=Inf	11	xcomp	_	_
13	te	tú	PRON	PRON	Number=Plur|Person=2|PronType=Prs	12	dobj	_	_
14	.	.	PUNCT	PUNCT	PunctType=Peri	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 iobj	color:blue
1	La	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	placa	placa	NOUN	NOUN	Gender=Fem|Number=Sing	4	iobj	_	_
3	la	él	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	dobj	_	_
4	forman	formar	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	cuatro	cuatro	NUM	NUM	Number=Plur|NumType=Card	6	nummod	_	_
6	plafones	plafón	NOUN	NOUN	Gender=Masc|Number=Plur	4	nsubj	_	_
7	.	.	PUNCT	PUNCT	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 iobj	color:blue
1	Lo	él	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	dobj	_	_
2	anuncian	anunciar	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	en	en	ADP	ADP	AdpType=Prep	5	case	_	_
4	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	tele	tele	NOUN	NOUN	Gender=Fem|Number=Sing	2	nmod	_	_
6	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
7	en	en	ADP	ADP	AdpType=Prep	9	case	_	_
8	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	prensa	prensa	NOUN	NOUN	Gender=Fem|Number=Sing	5	conj	_	_
10	Ford	Ford	PROPN	PROPN	_	2	iobj	_	MWE=Ford_Mondeo|MWEPOS=PROPN
11	Mondeo	Mondeo	PROPN	PROPN	_	10	name	_	_
12	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


