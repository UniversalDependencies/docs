

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

5114 nodes (2%) are attached to their parents as `mark`.

5076 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.10559249120063.

The following 38 pairs of parts of speech are connected with `mark`: [pt-pos/VERB]()-[pt-pos/ADP]() (2838; 55% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (1658; 32% instances), [pt-pos/NOUN]()-[pt-pos/SCONJ]() (153; 3% instances), [pt-pos/ADJ]()-[pt-pos/SCONJ]() (144; 3% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (95; 2% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (36; 1% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (36; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (25; 0% instances), [pt-pos/PRON]()-[pt-pos/SCONJ]() (14; 0% instances), [pt-pos/VERB]()-[pt-pos/DET]() (14; 0% instances), [pt-pos/ADV]()-[pt-pos/SCONJ]() (12; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (11; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (10; 0% instances), [pt-pos/PRON]()-[pt-pos/DET]() (8; 0% instances), [pt-pos/PROPN]()-[pt-pos/SCONJ]() (7; 0% instances), [pt-pos/PRON]()-[pt-pos/ADP]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (5; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (4; 0% instances), [pt-pos/ADP]()-[pt-pos/SCONJ]() (4; 0% instances), [pt-pos/DET]()-[pt-pos/SCONJ]() (4; 0% instances), [pt-pos/NUM]()-[pt-pos/SCONJ]() (4; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (3; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/AUX]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	PF	PF	PROPN	prop|F|S	Gender=Fem|Number=Sing	2	nsubj	_	_
2	prende	prender	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dois	dois	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	2	dobj	_	_
4	por	por	ADP	prp	AdpType=Prep	5	mark	_	_
5	cobrar	cobrar	VERB	v-inf	VerbForm=Inf	2	advcl	_	_
6	ágio	ágio	NOUN	n|M|S	Gender=Masc|Number=Sing	5	dobj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 mark	color:blue
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	bombeiro	bombeiro	NOUN	n|M|S	Gender=Masc|Number=Sing	3	nsubj	_	_
3	suspeita	suspeitar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	conj-s	_	8	mark	_	_
5	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	golfinho	golfinho	NOUN	n|M|S	Gender=Masc|Number=Sing	8	nsubj	_	_
7	tenha	ter	VERB	v-fin|PR|3S|SUBJ	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	morrido	morrer	VERB	v-pcp	VerbForm=Part	3	ccomp	_	_
9	afogado	afogar	VERB	v-pcp|M|S	Gender=Masc|Number=Sing|VerbForm=Part	8	advcl	_	_
10	.	.	PUNCT	punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	Mercedes	Mercedes	PROPN	prop|M|S	Gender=Masc|Number=Sing	2	nsubj	_	_
2	diz	dizer	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	conj-s	_	6	mark	_	_
4	começaria	começar	VERB	v-fin|COND|3S	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	6	cop	_	_
5	como	como	ADV	adv|<rel>	PronType=Rel	6	cop	_	_
6	vereadora	vereadora	NOUN	n|F|S	Gender=Fem|Number=Sing	2	ccomp	_	_
7	:	:	PUNCT	punc	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

4721 nodes (2%) are attached to their parents as `mark`.

4695 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.55539080703241.

The following 31 pairs of parts of speech are connected with `mark`: [pt-pos/VERB]()-[pt-pos/ADP]() (2321; 49% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (1659; 35% instances), [pt-pos/NOUN]()-[pt-pos/SCONJ]() (190; 4% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (168; 4% instances), [pt-pos/ADJ]()-[pt-pos/SCONJ]() (157; 3% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (39; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (35; 1% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (33; 1% instances), [pt-pos/PRON]()-[pt-pos/SCONJ]() (18; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (15; 0% instances), [pt-pos/ADP]()-[pt-pos/ADP]() (13; 0% instances), [pt-pos/PROPN]()-[pt-pos/SCONJ]() (12; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (9; 0% instances), [pt-pos/ADV]()-[pt-pos/SCONJ]() (7; 0% instances), [pt-pos/NUM]()-[pt-pos/SCONJ]() (6; 0% instances), [pt-pos/VERB]()-[pt-pos/DET]() (6; 0% instances), [pt-pos/DET]()-[pt-pos/SCONJ]() (5; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (5; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/ADP]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/NUM]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 mark	color:blue
1	Já	Já	ADP	PRP|@ADVL>	_	2	case	_	MWE:Já=não
2	não	não	NOUN	N|M|S|@P<	Gender=Masc|Number=Sing	3	nmod	_	_
3	há	haver	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	império	império	NOUN	<np-def>|N|M|S|@<ACC	Gender=Masc|Number=Sing	3	dobj	_	_
6	de	de	ADP	<sam->|PRP|@N<	_	8	case	_	_
7	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	mal	mal	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	5	nmod	_	_
9	para	para	ADP	PRP|@<ADVL	_	10	mark	_	_
10	combater	combater	VERB	<mv>|V|INF|@ICL-P<	VerbForm=Inf	3	advcl	_	_
11	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark	color:blue
1	Reis	Reis	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
2	não	não	ADV	ADV|@ADVL>	_	3	neg	_	_
3	quis	querer	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	dizer	dizer	VERB	<mv>|V|INF|@ICL-<ACC	VerbForm=Inf	3	xcomp	_	_
5	se	se	SCONJ	KS|@SUB	_	7	mark	_	_
6	também	também	ADV	ADV|@ADVL>	_	7	advmod	_	_
7	abandonará	abandonar	VERB	<mv>|V|FUT|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	ccomp	_	_
8	Esperidião	Esperidião	PROPN	PROP|M|S|@<ACC	Gender=Masc|Number=Sing	7	dobj	_	MWE:Esperidião=Amin
9	Amin	Amin	PROPN	PROP|@N<	Number=Sing	8	name	_	_
10	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 mark	color:blue
1	Quem	quem	PRON	<interr>|INDP|M/F|S|@SUBJ>	Gender=Unsp|Number=Sing|PronType=Int	2	nsubj	_	_
2	disse	dizer	VERB	<mv>|V|PS|3S|IND|@FS-QUE	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	KS|@SUB	_	10	mark	_	_
4	as	o	DET	<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	transferências	transferência	NOUN	<np-def>|N|F|P|@SUBJ>	Gender=Fem|Number=Plur	10	nsubj	_	_
6	eram	ser	VERB	<mv>|V|IMPF|3P|IND|@FS-<ACC	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
7	só	só	ADV	ADV|@>P	_	10	advmod	_	_
8	em	em	ADP	<sam->|PRP|@<SC	_	10	case	_	_
9	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	defeso	defeso	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	2	ccomp	_	_
11	?	?	PUNCT	PU|@PU	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

7029 nodes (2%) are attached to their parents as `mark`.

7021 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.95120216246977.

The following 34 pairs of parts of speech are connected with `mark`: [pt-pos/VERB]()-[pt-pos/ADP]() (3234; 46% instances), [pt-pos/VERB]()-[pt-pos/CONJ]() (2600; 37% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (333; 5% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (263; 4% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (204; 3% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (122; 2% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (75; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (36; 1% instances), [pt-pos/VERB]()-[pt-pos/DET]() (30; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (23; 0% instances), [pt-pos/PRON]()-[pt-pos/CONJ]() (19; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (14; 0% instances), [pt-pos/PROPN]()-[pt-pos/CONJ]() (12; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (9; 0% instances), [pt-pos/PRON]()-[pt-pos/ADP]() (9; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (6; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (5; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/AUX]()-[pt-pos/CONJ]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/PART]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/X]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/X]() (1; 0% instances), [pt-pos/X]()-[pt-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark	color:blue
1	"	_	PUNCT	.	_	4	punct	_	_
2	Não	_	ADV	ADV	_	4	neg	_	_
3	podemos	_	AUX	AUX	_	4	aux	_	_
4	fazer	_	VERB	VERB	_	0	root	_	_
5	outra	_	DET	DET	_	6	det	_	_
6	coisa	_	NOUN	NOUN	_	4	dobj	_	_
7	que	_	CONJ	CONJ	_	8	mark	_	_
8	sair	_	VERB	VERB	_	4	advcl	_	_
9	às	_	ADP	ADP	_	10	case	_	_
10	ruas	_	NOUN	NOUN	_	8	nmod	_	_
11	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
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


