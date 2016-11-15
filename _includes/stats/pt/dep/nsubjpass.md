

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

929 nodes (0%) are attached to their parents as `nsubjpass`.

782 instances of `nsubjpass` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.26803013993541.

The following 7 pairs of parts of speech are connected with `nsubjpass`: [pt-pos/VERB]()-[pt-pos/NOUN]() (673; 72% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (154; 17% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (76; 8% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (10; 1% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (6; 1% instances), [pt-pos/VERB]()-[pt-pos/DET]() (6; 1% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (4; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubjpass	color:blue
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	anúncio	anúncio	NOUN	n|M|S	Gender=Masc|Number=Sing	5	nsubjpass	_	_
3	oficial	oficial	ADJ	adj|M|S	Gender=Masc|Number=Sing	2	amod	_	_
4	será	ser	VERB	v-fin|FUT|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	auxpass	_	_
5	feito	fazer	VERB	v-pcp|M|S	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
6	após	após	ADP	prp	AdpType=Prep	8	case	_	_
7	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	dia	dia	NOUN	n|M|S	Gender=Masc|Number=Sing	5	nmod	_	_
9	20	20	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	8	nummod	_	_
10	.	.	PUNCT	punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubjpass	color:blue
1	Ele	ele	PRON	pron-pers|M|3S|NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubjpass	_	_
2	é	ser	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	auxpass	_	_
3	acusado	acusar	VERB	v-pcp|M|S	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	de	de	ADP	prp	AdpType=Prep	5	case	_	_
5	vandalismo	vandalismo	NOUN	n|M|S	Gender=Masc|Number=Sing	3	dobj	_	_
6	.	.	PUNCT	punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubjpass	color:blue
1	Conferência	Conferência	PROPN	prop|F|S	_	6	nsubjpass	_	MWE=Conferência_de_Paz|MWEPOS=PROPN
2	de	de	ADP	ADP	AdpType=Prep	3	case	_	_
3	Paz	Paz	PROPN	PROPN	_	1	name	_	_
4	vai	ir	AUX	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	ser	ser	VERB	v-inf	VerbForm=Inf	6	auxpass	_	_
6	reatada	reatar	VERB	v-pcp|F|S	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

1 nodes (0%) are attached to their parents as `nsubjpass`.

1 instances of `nsubjpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 14.

The following 1 pairs of parts of speech are connected with `nsubjpass`: [pt-pos/VERB]()-[pt-pos/NOUN]() (1; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 nsubjpass	color:blue
1	Peças	peça	NOUN	<np-idf>|N|F|P|@SUBJ>	Gender=Fem|Number=Plur	15	nsubjpass	_	_
2	de	de	ADP	PRP|@N<	_	3	case	_	_
3	mobiliário	mobiliário	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	1	nmod	_	_
4	feito	fazer	VERB	<mv>|V|PCP|M|S|@ICL-N<	Gender=Masc|Number=Sing|VerbForm=Part	3	acl	_	_
5	a	a	ADP	<sam->|PRP|@<ADVL	_	7	case	_	_
6	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	mão	mão	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	4	nmod	_	_
8	,	,	PUNCT	PU|@PU	_	9	punct	_	_
9	usadas	usar	VERB	<mv>|V|PCP|F|P|@ICL-N<PRED	Gender=Fem|Number=Plur|VerbForm=Part	1	acl	_	_
10	em	em	ADP	PRP|@<ADVL	_	11	case	_	_
11	decoração	decoração	NOUN	<np-idf>|N|F|S|@P<	Gender=Fem|Number=Sing	9	nmod	_	_
12	,	,	PUNCT	PU|@PU	_	9	punct	_	_
13	podem	poder	AUX	<aux>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
14	ser	ser	AUX	<aux>|V|INF|@ICL-AUX<	VerbForm=Inf	15	auxpass	_	_
15	encontradas	encontrar	VERB	<mv>|V|PCP2|PAS|F|P|@ICL-AUX<	Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
16	em	em	ADP	PRP|@<ADVL	_	17	case	_	_
17	leilão	leilão	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	15	nmod	_	_
18	por	por	ADP	PRP|@<ADVL	_	20	case	_	_
19	até	até	ADV	ADV|@>N	_	20	advmod	_	_
20	US$	US$	NOUN	<np-idf>|N|M|P|@P<	Gender=Masc|Number=Plur	15	nmod	_	_
21	15	15	NUM	<card>|NUM|M|P|@>N	_	22	nummod	_	_
22	mil	mil	NUM	<card>|<np-def>|NUM|M|P|@N<	_	20	nummod	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

2011 nodes (1%) are attached to their parents as `nsubjpass`.

1750 instances of `nsubjpass` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.24067628045748.

The following 16 pairs of parts of speech are connected with `nsubjpass`: [pt-pos/VERB]()-[pt-pos/NOUN]() (1455; 72% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (309; 15% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (186; 9% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (26; 1% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (8; 0% instances), [pt-pos/VERB]()-[pt-pos/PART]() (6; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/AUX]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubjpass	color:blue
1	Os	_	DET	DET	_	2	det	_	_
2	cuidados	_	NOUN	NOUN	_	7	nsubjpass	_	_
3	de	_	ADP	ADP	_	4	mark	_	_
4	sempre	_	ADV	ADV	_	2	nmod	_	_
5	estão	_	AUX	AUX	_	7	aux	_	_
6	sendo	_	AUX	AUX	_	7	auxpass	_	_
7	tomados	_	VERB	VERB	_	0	root	_	_
8	pelo	_	ADP	ADP	_	9	case	_	_
9	consumidor	_	NOUN	NOUN	_	7	nmod	_	_
10	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubjpass	color:blue
1	Dois	_	NUM	NUM	NumType=Card	2	nummod	_	_
2	anos	_	NOUN	NOUN	_	3	nmod	_	_
3	depois	_	ADV	ADV	_	7	advmod	_	_
4	,	_	PUNCT	.	_	3	punct	_	_
5	ele	_	PRON	PRON	_	7	nsubjpass	_	_
6	foi	_	AUX	AUX	_	7	auxpass	_	_
7	preso	_	VERB	VERB	_	0	root	_	_
8	--	_	PUNCT	.	_	7	punct	_	_
9	e	_	CONJ	CONJ	_	7	cc	_	_
10	eu	_	PRON	PRON	_	13	nsubj	_	_
11	nunca	_	ADV	ADV	_	13	advmod	_	_
12	o	_	PRON	PRON	_	13	dobj	_	_
13	vi	_	VERB	VERB	_	7	conj	_	_
14	novamente	_	ADV	ADV	_	13	advmod	_	_
15	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubjpass	color:blue
1	No	_	ADP	ADP	_	2	case	_	_
2	hospital	_	NOUN	NOUN	_	6	nmod	_	_
3	,	_	PUNCT	.	_	2	punct	_	_
4	Carmen	_	PROPN	PNOUN	_	6	nsubjpass	_	_
5	será	_	AUX	AUX	_	6	auxpass	_	_
6	levada	_	VERB	VERB	_	0	root	_	_
7	para	_	ADP	ADP	_	9	case	_	_
8	a	_	DET	DET	_	9	det	_	_
9	mesa	_	NOUN	NOUN	_	6	nmod	_	_
10	de	_	ADP	ADP	_	11	case	_	_
11	cirurgia	_	NOUN	NOUN	_	9	nmod	_	_
12	.	_	PUNCT	.	_	6	punct	_	_

~~~


