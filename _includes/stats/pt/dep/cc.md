

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

5063 nodes (2%) are attached to their parents as `cc`.

4801 instances of `cc` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.81453683586806.

The following 31 pairs of parts of speech are connected with `cc`: [pt-pos/VERB]()-[pt-pos/CCONJ]() (1812; 36% instances), [pt-pos/NOUN]()-[pt-pos/CCONJ]() (1774; 35% instances), [pt-pos/PROPN]()-[pt-pos/CCONJ]() (641; 13% instances), [pt-pos/ADJ]()-[pt-pos/CCONJ]() (435; 9% instances), [pt-pos/NUM]()-[pt-pos/CCONJ]() (92; 2% instances), [pt-pos/PRON]()-[pt-pos/CCONJ]() (80; 2% instances), [pt-pos/ADV]()-[pt-pos/CCONJ]() (53; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (37; 1% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (27; 1% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (21; 0% instances), [pt-pos/ADP]()-[pt-pos/CCONJ]() (18; 0% instances), [pt-pos/DET]()-[pt-pos/CCONJ]() (17; 0% instances), [pt-pos/SYM]()-[pt-pos/CCONJ]() (15; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (7; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (6; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/X]()-[pt-pos/CCONJ]() (3; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/CCONJ]()-[pt-pos/CCONJ]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/CCONJ]() (1; 0% instances), [pt-pos/INTJ]()-[pt-pos/CCONJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 cc	color:blue
1	Ou	ou	CCONJ	_	_	15	cc	_	MWE=ou_seja|MWEPOS=CCONJ
2	seja	ser	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	por	por	ADP	<cjt>|<sam->|PRP|@<ADVL	_	6	case	_	_
5	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	média	média	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	2	obl	_	_
7	real	real	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	6	amod	_	_
8	de	de	ADP	PRP|@N<	_	12	case	_	_
9	os	o	DET	<-sam>|<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
10	últimos	último	ADJ	<NUM-ord>|ADJ|M|P|@>N	Gender=Masc|Number=Plur|NumType=Ord	12	amod	_	_
11	quatro	quatro	NUM	<card>|NUM|M|P|@>N	NumType=Card	12	nummod	_	_
12	meses	mês	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	6	nmod	_	SpaceAfter=No
13	»	»	PUNCT	PU|@PU	_	15	punct	_	SpaceAfter=No
14	,	,	PUNCT	PU|@PU	_	2	punct	_	_
15	disse	dizer	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
16	.	.	PUNCT	PU|@PU	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Para	para	ADP	PRP|@ADVL>	_	2	case	_	_
2	mim	eu	PRON	PERS|M|1S|PIV|@P<	Gender=Masc|Number=Sing|Person=1|PronType=Prs	7	nmod	_	_
3	roupa	roupa	NOUN	<first-cjt>|<np-idf>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	7	nsubj	_	_
4	e	e	CCONJ	<co-subj>|KC|@CO	_	5	cc	_	_
5	moda	moda	NOUN	<cjt>|<np-idf>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	3	conj	_	_
6	são	ser	AUX	<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	coisas	coisa	NOUN	<np-idf>|N|F|P|@<SC	Gender=Fem|Number=Plur	0	root	_	_
8	diferentes	diferente	ADJ	ADJ|F|P|@N<	Gender=Fem|Number=Plur	7	amod	_	SpaceAfter=No
9	»	»	PUNCT	PU|@PU	_	7	punct	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Os	o	DET	<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	jogadores	jogador	NOUN	<first-cjt>|<np-def>|N|M|P|@SUBJ>	Gender=Masc|Number=Plur	6	nsubj	_	_
3	e	e	CCONJ	<co-subj>|KC|@CO	_	4	cc	_	_
4	Parreira	Parreira	PROPN	<cjt>|PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	2	conj	_	_
5	não	não	ADV	_	Polarity=Neg	6	advmod	_	_
6	falaram	falar	VERB	<mv>|V|PS/MQP|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
7	com	com	ADP	PRP|@<PIV	_	9	case	_	_
8	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	imprensa	imprensa	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

7019 nodes (2%) are attached to their parents as `cc`.

6945 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.20686707508192.

The following 26 pairs of parts of speech are connected with `cc`: [pt-pos/VERB]()-[pt-pos/CCONJ]() (2629; 37% instances), [pt-pos/NOUN]()-[pt-pos/CCONJ]() (2485; 35% instances), [pt-pos/PROPN]()-[pt-pos/CCONJ]() (1189; 17% instances), [pt-pos/ADJ]()-[pt-pos/CCONJ]() (325; 5% instances), [pt-pos/NUM]()-[pt-pos/CCONJ]() (163; 2% instances), [pt-pos/PRON]()-[pt-pos/CCONJ]() (73; 1% instances), [pt-pos/ADV]()-[pt-pos/CCONJ]() (55; 1% instances), [pt-pos/PART]()-[pt-pos/CCONJ]() (26; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (17; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (16; 0% instances), [pt-pos/DET]()-[pt-pos/CCONJ]() (6; 0% instances), [pt-pos/X]()-[pt-pos/CCONJ]() (6; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/AUX]()-[pt-pos/CCONJ]() (3; 0% instances), [pt-pos/ADP]()-[pt-pos/CCONJ]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/CCONJ]()-[pt-pos/CCONJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/X]()-[pt-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 cc	color:blue
1	Dois	_	NUM	NUM	NumType=Card	2	nummod	_	_
2	anos	_	NOUN	NOUN	_	3	nmod	_	_
3	depois	_	ADV	ADV	_	7	advmod	_	SpaceAfter=No
4	,	_	PUNCT	.	_	3	punct	_	_
5	ele	_	PRON	PRON	_	7	nsubj:pass	_	_
6	foi	_	AUX	AUX	_	7	aux:pass	_	_
7	preso	_	VERB	VERB	_	0	root	_	_
8	--	_	PUNCT	.	_	13	punct	_	_
9	e	_	CCONJ	CONJ	_	13	cc	_	_
10	eu	_	PRON	PRON	_	13	nsubj	_	_
11	nunca	_	ADV	ADV	_	13	advmod	_	_
12	o	_	PRON	PRON	_	13	obj	_	_
13	vi	_	VERB	VERB	_	7	conj	_	_
14	novamente	_	ADV	ADV	_	13	advmod	_	SpaceAfter=No
15	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 cc	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	jogo	_	NOUN	NOUN	_	3	nsubj	_	_
3	começou	_	VERB	VERB	_	0	root	_	_
4	movimentado	_	ADJ	ADJ	_	3	xcomp:adj	_	_
5	e	_	CCONJ	CONJ	_	8	cc	_	_
6	em	_	ADP	ADP	_	8	case	_	_
7	alta	_	ADJ	ADJ	_	8	amod	_	_
8	velocidade	_	NOUN	NOUN	_	4	conj	_	SpaceAfter=No
9	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
1	Com	_	ADP	ADP	_	3	case	_	_
2	menor	_	ADJ	ADJ	_	3	amod	_	_
3	índice	_	NOUN	NOUN	_	5	nmod	_	SpaceAfter=No
4	,	_	PUNCT	.	_	3	punct	_	_
5	Piauí	_	PROPN	PNOUN	_	0	root	_	SpaceAfter=No
6	,	_	PUNCT	.	_	7	punct	_	_
7	Santa	_	PROPN	PNOUN	_	5	conj	_	_
8	Catarina	_	PROPN	PNOUN	_	7	flat	_	_
9	e	_	CCONJ	CONJ	_	10	cc	_	_
10	Alagoas	_	PROPN	PNOUN	_	5	conj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	5	punct	_	_

~~~


