

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

23010 nodes (5%) are attached to their parents as `amod`.

17011 instances of `amod` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26088657105606.

The following 51 pairs of parts of speech are connected with `amod`: [es-pos/NOUN]()-[es-pos/ADJ]() (18919; 82% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (2614; 11% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (420; 2% instances), [es-pos/VERB]()-[es-pos/ADJ]() (253; 1% instances), [es-pos/PRON]()-[es-pos/ADJ]() (165; 1% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (124; 1% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (95; 0% instances), [es-pos/X]()-[es-pos/ADJ]() (65; 0% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (53; 0% instances), [es-pos/SYM]()-[es-pos/ADJ]() (53; 0% instances), [es-pos/NOUN]()-[es-pos/X]() (40; 0% instances), [es-pos/SYM]()-[es-pos/SYM]() (34; 0% instances), [es-pos/NUM]()-[es-pos/ADJ]() (30; 0% instances), [es-pos/X]()-[es-pos/X]() (18; 0% instances), [es-pos/ADP]()-[es-pos/ADJ]() (13; 0% instances), [es-pos/DET]()-[es-pos/ADJ]() (12; 0% instances), [es-pos/ADV]()-[es-pos/ADJ]() (11; 0% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (11; 0% instances), [es-pos/PROPN]()-[es-pos/X]() (8; 0% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (7; 0% instances), [es-pos/NOUN]()-[es-pos/PART]() (6; 0% instances), [es-pos/ADJ]()-[es-pos/PART]() (5; 0% instances), [es-pos/NOUN]()-[es-pos/VERB]() (5; 0% instances), [es-pos/SYM]()-[es-pos/NOUN]() (4; 0% instances), [es-pos/NOUN]()-[es-pos/SYM]() (3; 0% instances), [es-pos/NUM]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/PRON]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/PROPN]()-[es-pos/ADV]() (3; 0% instances), [es-pos/SCONJ]()-[es-pos/ADJ]() (3; 0% instances), [es-pos/X]()-[es-pos/SYM]() (3; 0% instances), [es-pos/NOUN]()-[es-pos/ADV]() (2; 0% instances), [es-pos/PRON]()-[es-pos/PROPN]() (2; 0% instances), [es-pos/PROPN]()-[es-pos/PART]() (2; 0% instances), [es-pos/SYM]()-[es-pos/X]() (2; 0% instances), [es-pos/VERB]()-[es-pos/PROPN]() (2; 0% instances), [es-pos/VERB]()-[es-pos/VERB]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/X]() (1; 0% instances), [es-pos/AUX]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/ADP]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/NUM]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (1; 0% instances), [es-pos/NUM]()-[es-pos/PART]() (1; 0% instances), [es-pos/NUM]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/PRON]()-[es-pos/X]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/NUM]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/VERB]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (1; 0% instances), [es-pos/VERB]()-[es-pos/PRON]() (1; 0% instances), [es-pos/X]()-[es-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Real	real	PROPN	_	Number=Sing	2	amod	_	_
2	Academia	academia	PROPN	_	Gender=Fem|Number=Sing	0	root	_	_
3	de	de	ADP	_	_	5	case	_	_
4	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Historia	historia	PROPN	_	_	2	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	ácido	ácido	PROPN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
3	aristolóquico	aristolóquico	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
4	es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	nefrotóxico	nefrotóxico	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
6	y	y	CONJ	_	_	5	cc	_	_
7	carcinogénico	carcinogénico	ADJ	_	Gender=Masc|Number=Sing	5	conj	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is universal.

29514 nodes (5%) are attached to their parents as `amod`.

21305 instances of `amod` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.39564274581555.

The following 16 pairs of parts of speech are connected with `amod`: [es-pos/NOUN]()-[es-pos/ADJ]() (27336; 93% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (1144; 4% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (282; 1% instances), [es-pos/PRON]()-[es-pos/ADJ]() (227; 1% instances), [es-pos/NUM]()-[es-pos/ADJ]() (220; 1% instances), [es-pos/VERB]()-[es-pos/ADJ]() (152; 1% instances), [es-pos/DET]()-[es-pos/ADJ]() (86; 0% instances), [es-pos/SCONJ]()-[es-pos/ADJ]() (24; 0% instances), [es-pos/ADV]()-[es-pos/ADJ]() (20; 0% instances), [es-pos/SYM]()-[es-pos/ADJ]() (11; 0% instances), [es-pos/AUX]()-[es-pos/ADJ]() (6; 0% instances), [es-pos/ADP]()-[es-pos/ADJ]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/ADP]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/X]()-[es-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Desde	desde	ADP	ADP	AdpType=Prep	2	case	_	_
2	entonces	entonces	ADV	ADV	_	3	advmod	_	_
3	entró	entrar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	en	en	ADP	ADP	AdpType=Prep	5	case	_	_
5	silencio	silencio	NOUN	NOUN	Gender=Masc|Number=Sing	3	nmod	_	_
6	absoluto	absoluto	ADJ	ADJ	Gender=Masc|Number=Sing	5	amod	_	_
7	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	secretario	secretario	NOUN	NOUN	Gender=Masc|Number=Sing	8	nsubj	_	_
3	general	general	ADJ	ADJ	Number=Sing	2	amod	_	_
4	de	de	ADP	ADP	AdpType=Prep	6	case	_	_
5	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	PP	PP	PROPN	PROPN	_	2	nmod	_	_
7	gallego	gallego	ADJ	ADJ	Gender=Masc|Number=Sing	6	amod	_	_
8	dimite	dimitir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	oficialmente	oficialmente	ADV	ADV	_	8	advmod	_	_
10	.	.	PUNCT	PUNCT	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 amod	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	penalti	penalti	NOUN	NOUN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	fue	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
4	justo	justo	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
5	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
6	inesperado	inesperado	ADJ	ADJ	Gender=Masc|Number=Sing	4	amod	_	_
7	y	y	CONJ	CONJ	_	4	cc	_	_
8	atemorizador	atemorizador	ADJ	ADJ	Gender=Masc|Number=Sing	4	conj	_	_
9	.	.	PUNCT	PUNCT	PunctType=Peri	4	punct	_	_

~~~


