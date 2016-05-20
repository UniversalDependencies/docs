

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

6323 nodes (1%) are attached to their parents as `cop`.

5927 instances of `cop` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84706626601297.

The following 38 pairs of parts of speech are connected with `cop`: [es-pos/NOUN]()-[es-pos/VERB]() (3401; 54% instances), [es-pos/ADJ]()-[es-pos/VERB]() (2121; 34% instances), [es-pos/PRON]()-[es-pos/VERB]() (345; 5% instances), [es-pos/PROPN]()-[es-pos/VERB]() (222; 4% instances), [es-pos/VERB]()-[es-pos/VERB]() (45; 1% instances), [es-pos/DET]()-[es-pos/VERB]() (38; 1% instances), [es-pos/NUM]()-[es-pos/VERB]() (24; 0% instances), [es-pos/X]()-[es-pos/VERB]() (21; 0% instances), [es-pos/ADV]()-[es-pos/VERB]() (14; 0% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (13; 0% instances), [es-pos/SYM]()-[es-pos/VERB]() (13; 0% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (12; 0% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (6; 0% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (4; 0% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (4; 0% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (4; 0% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (4; 0% instances), [es-pos/CONJ]()-[es-pos/VERB]() (3; 0% instances), [es-pos/NOUN]()-[es-pos/X]() (3; 0% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/ADJ]()-[es-pos/ADP]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/PROPN]() (2; 0% instances), [es-pos/ADP]()-[es-pos/VERB]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/AUX]() (2; 0% instances), [es-pos/NUM]()-[es-pos/PROPN]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/PRON]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/SYM]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/X]() (1; 0% instances), [es-pos/ADV]()-[es-pos/ADP]() (1; 0% instances), [es-pos/ADV]()-[es-pos/AUX]() (1; 0% instances), [es-pos/DET]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/AUX]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/X]() (1; 0% instances), [es-pos/PUNCT]()-[es-pos/PRON]() (1; 0% instances), [es-pos/PUNCT]()-[es-pos/VERB]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/VERB]()-[es-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	gentilicio	gentilicio	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
3	es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	Chinonais	chinonais	PROPN	_	_	2	nsubj	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Ambos	ambos	PRON	_	Gender=Masc|Number=Plur|NumType=Card|PronType=Tot	4	nsubj	_	_
2	son	ser	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	químicamente	químicamente	ADV	_	_	4	advmod	_	_
4	idénticos	idéntico	ADJ	_	Gender=Masc|Number=Plur	0	root	_	_
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 cop	color:blue
1	Lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	0	root	_	_
2	que	que	SCONJ	_	_	5	mark	_	_
3	tenéis	tenéis	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	que	que	CONJ	_	_	3	mwe	_	_
5	hacer	hacer	VERB	_	VerbForm=Inf	1	acl:relcl	_	_
6	es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
7	pagar	pagar	VERB	_	VerbForm=Inf	1	csubj	_	_
8	a	a	ADP	_	_	10	case	_	_
9	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	gente	gente	NOUN	_	Gender=Fem|Number=Sing	7	iobj	_	_
11	y	y	CONJ	_	_	7	cc	_	_
12	no	no	ADV	_	_	13	neg	_	_
13	engañar	engañar	VERB	_	VerbForm=Inf	7	conj	_	_
14	tanto	tanto	PRON	_	NumType=Card|PronType=Dem	13	nmod	_	_
15	.	.	PUNCT	_	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is universal.

6428 nodes (1%) are attached to their parents as `cop`.

6213 instances of `cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25808960796515.

The following 43 pairs of parts of speech are connected with `cop`: [es-pos/NOUN]()-[es-pos/AUX]() (2248; 35% instances), [es-pos/ADJ]()-[es-pos/AUX]() (1742; 27% instances), [es-pos/ADJ]()-[es-pos/VERB]() (823; 13% instances), [es-pos/VERB]()-[es-pos/AUX]() (554; 9% instances), [es-pos/PRON]()-[es-pos/AUX]() (261; 4% instances), [es-pos/NOUN]()-[es-pos/VERB]() (235; 4% instances), [es-pos/PROPN]()-[es-pos/AUX]() (126; 2% instances), [es-pos/VERB]()-[es-pos/VERB]() (77; 1% instances), [es-pos/ADV]()-[es-pos/VERB]() (65; 1% instances), [es-pos/ADV]()-[es-pos/AUX]() (63; 1% instances), [es-pos/NUM]()-[es-pos/AUX]() (40; 1% instances), [es-pos/PRON]()-[es-pos/VERB]() (31; 0% instances), [es-pos/ADP]()-[es-pos/VERB]() (27; 0% instances), [es-pos/NOUN]()-[es-pos/DET]() (24; 0% instances), [es-pos/AUX]()-[es-pos/AUX]() (14; 0% instances), [es-pos/PROPN]()-[es-pos/DET]() (13; 0% instances), [es-pos/SYM]()-[es-pos/AUX]() (10; 0% instances), [es-pos/VERB]()-[es-pos/DET]() (9; 0% instances), [es-pos/ADP]()-[es-pos/AUX]() (8; 0% instances), [es-pos/DET]()-[es-pos/AUX]() (7; 0% instances), [es-pos/NUM]()-[es-pos/VERB]() (7; 0% instances), [es-pos/PROPN]()-[es-pos/VERB]() (6; 0% instances), [es-pos/NOUN]()-[es-pos/ADV]() (5; 0% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (4; 0% instances), [es-pos/SCONJ]()-[es-pos/AUX]() (4; 0% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/PRON]() (2; 0% instances), [es-pos/AUX]()-[es-pos/VERB]() (2; 0% instances), [es-pos/SCONJ]()-[es-pos/VERB]() (2; 0% instances), [es-pos/SYM]()-[es-pos/VERB]() (2; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/ADV]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/DET]()-[es-pos/VERB]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/ADP]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/NUM]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (1; 0% instances), [es-pos/PRON]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/PRON]()-[es-pos/DET]() (1; 0% instances), [es-pos/VERB]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/X]()-[es-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cop	color:blue
1	Y	y	CONJ	CONJ	_	7	advmod	_	_
2	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
3	única	único	ADJ	ADJ	Gender=Fem|Number=Sing	4	amod	_	_
4	causa	causa	NOUN	NOUN	Gender=Fem|Number=Sing	7	nsubj	_	_
5	era	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
6	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	campo	campo	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
8	gravitatorio	gravitatorio	ADJ	ADJ	Gender=Masc|Number=Sing	7	amod	_	_
9	terrestre	terrestre	ADJ	ADJ	Number=Sing	7	amod	_	_
10	.	.	PUNCT	PUNCT	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Resultaban	resultar	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	demasiado	demasiado	ADV	ADV	_	3	advmod	_	_
3	baratos	barato	ADJ	ADJ	Gender=Masc|Number=Plur	1	dobj	_	_
4	para	para	ADP	ADP	AdpType=Prep	6	mark	_	_
5	ser	ser	AUX	AUX	VerbForm=Inf	6	cop	_	_
6	buenos	buen	ADJ	ADJ	Gender=Masc|Number=Plur	1	advcl	_	_
7	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	Estamos	estar	VERB	VERB	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	preparadas	preparado	ADJ	ADJ	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	_
3	y	y	CONJ	CONJ	_	2	cc	_	_
4	no	no	ADV	ADV	Negative=Neg	5	neg	_	_
5	tenemos	tener	VERB	VERB	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	conj	_	_
6	miedo	miedo	NOUN	NOUN	Gender=Masc|Number=Sing	5	dobj	_	_
7	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


