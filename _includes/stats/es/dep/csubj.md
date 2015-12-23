

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

701 nodes (0%) are attached to their parents as `csubj`.

640 instances of `csubj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.25249643366619.

The following 22 pairs of parts of speech are connected with `csubj`: [es-pos/VERB]()-[es-pos/VERB]() (275; 39% instances), [es-pos/ADJ]()-[es-pos/VERB]() (158; 23% instances), [es-pos/NOUN]()-[es-pos/VERB]() (145; 21% instances), [es-pos/PRON]()-[es-pos/VERB]() (28; 4% instances), [es-pos/VERB]()-[es-pos/ADJ]() (19; 3% instances), [es-pos/VERB]()-[es-pos/NOUN]() (19; 3% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (14; 2% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (9; 1% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (7; 1% instances), [es-pos/VERB]()-[es-pos/PRON]() (5; 1% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (4; 1% instances), [es-pos/VERB]()-[es-pos/PROPN]() (4; 1% instances), [es-pos/ADV]()-[es-pos/VERB]() (3; 0% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (3; 0% instances), [es-pos/NOUN]()-[es-pos/ADP]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/ADV]() (1; 0% instances), [es-pos/PRON]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/PRON]()-[es-pos/DET]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/VERB]() (1; 0% instances), [es-pos/VERB]()-[es-pos/X]() (1; 0% instances), [es-pos/X]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/X]()-[es-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	Quizás	quizás	ADV	_	_	2	advmod	_	_
2	sale	salir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	más	más	ADV	_	Degree=Cmp	4	advmod	_	_
4	rentable	rentable	ADJ	_	Number=Sing	2	xcomp	_	_
5	ir	ir	VERB	_	VerbForm=Inf	2	csubj	_	_
6	en	en	ADP	_	_	7	case	_	_
7	grupo	grupo	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	necesario	necesario	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
3	que	que	SCONJ	_	_	4	mark	_	_
4	habilite	habilitar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	csubj	_	_
5	JavaScript	javascript	PROPN	_	_	4	dobj	_	_
6	para	para	SCONJ	_	_	7	mark	_	_
7	leer	leer	VERB	_	VerbForm=Inf	4	advcl	_	_
8	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	comentarios	comentario	NOUN	_	Gender=Masc|Number=Plur	7	dobj	_	_
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 csubj	color:blue
1	Ir	ir	VERB	_	VerbForm=Inf	10	csubj	_	_
2	a	a	ADP	_	_	4	case	_	_
3	este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	colegio	colegio	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	_
5	,	,	PUNCT	_	_	10	punct	_	_
6	para	para	ADP	_	_	7	case	_	_
7	mí	yo	PRON	_	Case=Acc|Number=Sing|Person=1|PrepCase=Pre|PronType=Prs	10	nmod	_	_
8	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	peor	peor	ADJ	_	Degree=Cmp|Number=Sing	10	amod	_	_
10	experiencia	experiencia	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
11	de	de	ADP	_	_	13	case	_	_
12	mi	mi	DET	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	13	det	_	_
13	vida	vida	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	_
14	.	.	PUNCT	_	_	10	punct	_	_

~~~


