

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

30269 nodes (13%) are attached to their parents as `punct`.

23760 instances of `punct` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.0282136839671.

The following 46 pairs of parts of speech are connected with `punct`: [pt-pos/VERB]()-[pt-pos/PUNCT]() (15349; 51% instances), [pt-pos/NOUN]()-[pt-pos/PUNCT]() (8039; 27% instances), [pt-pos/PROPN]()-[pt-pos/PUNCT]() (4189; 14% instances), [pt-pos/ADJ]()-[pt-pos/PUNCT]() (1297; 4% instances), [pt-pos/PRON]()-[pt-pos/PUNCT]() (348; 1% instances), [pt-pos/ADV]()-[pt-pos/PUNCT]() (204; 1% instances), [pt-pos/NUM]()-[pt-pos/PUNCT]() (180; 1% instances), [pt-pos/SYM]()-[pt-pos/PUNCT]() (91; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (88; 0% instances), [pt-pos/DET]()-[pt-pos/PUNCT]() (83; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (65; 0% instances), [pt-pos/ADP]()-[pt-pos/PUNCT]() (61; 0% instances), [pt-pos/CONJ]()-[pt-pos/PUNCT]() (33; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (32; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (26; 0% instances), [pt-pos/INTJ]()-[pt-pos/PUNCT]() (23; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (19; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (19; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (17; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (14; 0% instances), [pt-pos/AUX]()-[pt-pos/PUNCT]() (13; 0% instances), [pt-pos/SCONJ]()-[pt-pos/PUNCT]() (13; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (9; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (9; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (6; 0% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (4; 0% instances), [pt-pos/ADV]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (4; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/NUM]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/PUNCT]()-[pt-pos/PUNCT]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 punct	color:blue
1	Ele	ele	PRON	pron-pers|M|3S|NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	estava	estar	VERB	v-fin|IMPF|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	acompanhados	acompanhar	VERB	v-pcp|M|P	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
4	de	de	ADP	prp	AdpType=Prep	6	case	_	_
5	três	três	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	6	nummod	_	_
6	agentes	agente	NOUN	n|M|P	Gender=Masc|Number=Plur	3	dobj	_	_
7	de	de	ADP	prp|<sam->	AdpType=Prep	9	case	_	_
8	a	o	DET	art|<-sam>|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	PF	PF	PROPN	prop|F|S	Gender=Fem|Number=Sing	6	nmod	_	_
10	.	.	PUNCT	punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 punct	color:blue
1	Um	um	NUM	num|<card>|M|S	Gender=Masc|Number=Sing|NumType=Card	6	nsubj	_	_
2	de	de	ADP	prp|<sam->	AdpType=Prep	3	case	_	_
3	eles	eles	PRON	pron-pers|<-sam>|M|3P|NOM/PIV	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	1	nmod	_	_
4	era	ser	VERB	v-fin|IMPF|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
5	seu	seu	DET	pron-det|<poss|3S>|M|S	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	filho	filho	NOUN	n|M|S	Gender=Masc|Number=Sing	0	root	_	_
7	,	,	PUNCT	punc	_	6	punct	_	_
8	Sérgio	Sérgio	PROPN	prop|M|S	_	6	appos	_	_
9	Fioravanti	Fioravanti	PROPN	PROPN	_	8	name	_	_
10	.	.	PUNCT	punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 punct	color:blue
1	Pedro	Pedro	PROPN	prop|M|S	_	0	root	_	_
2	Ivo	Ivo	PROPN	PROPN	_	1	name	_	_
3	,	,	PUNCT	punc	_	1	punct	_	_
4	63	63	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	1	nummod	_	_
5	,	,	PUNCT	punc	_	1	punct	_	_
6	tel.	tel.	NOUN	n|M|S	Gender=Masc|Number=Sing	1	nmod	_	_
7	289-3609	289-3609	NUM	num|M|P	Gender=Masc|Number=Plur	6	nummod	_	_
8	)	)	PUNCT	punc	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

42027 nodes (14%) are attached to their parents as `punct`.

28191 instances of `punct` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.19344706974088.

The following 14 pairs of parts of speech are connected with `punct`: [pt-pos/VERB]()-[pt-pos/PUNCT]() (18924; 45% instances), [pt-pos/NOUN]()-[pt-pos/PUNCT]() (10455; 25% instances), [pt-pos/PROPN]()-[pt-pos/PUNCT]() (7640; 18% instances), [pt-pos/NUM]()-[pt-pos/PUNCT]() (1637; 4% instances), [pt-pos/ADV]()-[pt-pos/PUNCT]() (1229; 3% instances), [pt-pos/ADJ]()-[pt-pos/PUNCT]() (866; 2% instances), [pt-pos/PRON]()-[pt-pos/PUNCT]() (667; 2% instances), [pt-pos/PART]()-[pt-pos/PUNCT]() (376; 1% instances), [pt-pos/X]()-[pt-pos/PUNCT]() (120; 0% instances), [pt-pos/CONJ]()-[pt-pos/PUNCT]() (47; 0% instances), [pt-pos/ADP]()-[pt-pos/PUNCT]() (45; 0% instances), [pt-pos/AUX]()-[pt-pos/PUNCT]() (11; 0% instances), [pt-pos/PUNCT]()-[pt-pos/PUNCT]() (6; 0% instances), [pt-pos/DET]()-[pt-pos/PUNCT]() (4; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 12 punct	color:blue
1	Ver	_	VERB	VERB	_	0	root	_	_
2	também	_	ADV	ADV	_	1	advmod	_	_
3	a	_	DET	DET	_	4	det	_	_
4	lista	_	NOUN	NOUN	_	1	dobj	_	_
5	de	_	ADP	ADP	_	6	case	_	_
6	entidades	_	NOUN	NOUN	_	4	nmod	_	_
7	que	_	PRON	PRON	_	9	nsubj	_	_
8	tenham	_	AUX	AUX	_	9	aux	_	_
9	emitido	_	VERB	VERB	_	6	acl:relcl	_	_
10	selos	_	NOUN	NOUN	_	9	dobj	_	_
11	postais	_	ADJ	ADJ	_	10	amod	_	_
12	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 punct	color:blue
1	A	_	DET	DET	_	2	det	_	_
2	Nina	_	PROPN	PNOUN	_	5	nsubj	_	_
3	é	_	VERB	VERB	_	5	cop	_	_
4	a	_	DET	DET	_	5	det	_	_
5	chance	_	NOUN	NOUN	_	0	root	_	_
6	de	_	ADP	ADP	_	8	mark	_	_
7	ele	_	PRON	PRON	_	8	nsubj	_	_
8	ser	_	VERB	VERB	_	5	nmod	_	_
9	feliz	_	ADJ	ADJ	_	8	xcomp:adj	_	_
10	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Com	_	ADP	ADP	_	3	case	_	_
2	menor	_	ADJ	ADJ	_	3	amod	_	_
3	índice	_	NOUN	NOUN	_	5	nmod	_	_
4	,	_	PUNCT	.	_	3	punct	_	_
5	Piauí	_	PROPN	PNOUN	_	0	root	_	_
6	,	_	PUNCT	.	_	5	punct	_	_
7	Santa	_	PROPN	PNOUN	_	5	conj	_	_
8	Catarina	_	PROPN	PNOUN	_	7	name	_	_
9	e	_	CONJ	CONJ	_	5	cc	_	_
10	Alagoas	_	PROPN	PNOUN	_	5	conj	_	_
11	.	_	PUNCT	.	_	5	punct	_	_

~~~


