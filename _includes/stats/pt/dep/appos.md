

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

3071 nodes (1%) are attached to their parents as `appos`.

3069 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.84890915011397.

The following 44 pairs of parts of speech are connected with `appos`: [pt-pos/NOUN]()-[pt-pos/PROPN]() (1285; 42% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (516; 17% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (502; 16% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (397; 13% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (71; 2% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (71; 2% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (36; 1% instances), [pt-pos/NOUN]()-[pt-pos/SYM]() (32; 1% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (17; 1% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (16; 1% instances), [pt-pos/SYM]()-[pt-pos/SYM]() (13; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (12; 0% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (11; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (9; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (7; 0% instances), [pt-pos/PROPN]()-[pt-pos/SYM]() (6; 0% instances), [pt-pos/SYM]()-[pt-pos/NOUN]() (6; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (4; 0% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/X]()-[pt-pos/NOUN]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/SYM]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/DET]() (3; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/NUM]()-[pt-pos/DET]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/X]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/X]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 appos	color:blue
1	Um	um	NUM	<card>|NUM|M|S|@SUBJ>	NumType=Card	6	nsubj	_	_
2	de	de	ADP	<sam->|PRP|@N<	_	3	case	_	_
3	eles	eles	PRON	<-sam>|PERS|M|3P|NOM/PIV|@P<	Gender=Masc|Number=Plur|Person=3|PronType=Prs	1	nmod	_	_
4	era	ser	AUX	<mv>|V|IMPF|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
5	seu	seu	DET	<poss>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Prs	6	det	_	_
6	filho	filho	NOUN	<np-def>|N|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	PU|@PU	_	8	punct	_	_
8	Sérgio	Sérgio	PROPN	_	Gender=Masc|Number=Sing	6	appos	_	MWE=Sérgio_Fioravanti|MWEPOS=PROPN
9	Fioravanti	Fioravanti	PROPN	_	Number=Sing	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 appos	color:blue
1	Pedro	Pedro	PROPN	_	Gender=Masc|Number=Sing	0	root	_	MWE=Pedro_Ivo|MWEPOS=PROPN
2	Ivo	Ivo	PROPN	_	Number=Sing	1	flat:name	_	SpaceAfter=No
3	,	,	PUNCT	PU|@PU	_	4	punct	_	_
4	63	63	NUM	<card>|NUM|M|P|@N<PRED	NumType=Card	1	appos	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	4	punct	_	_
6	tel.	tel.	NOUN	<np-idf>|N|M|S|@N<PRED	Gender=Masc|Number=Sing	1	appos	_	_
7	289-3609	289-3609	NUM	NUM|M|P|@N<	NumType=Card	6	nummod	_	SpaceAfter=No
8	)	)	PUNCT	PU|@PU	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 appos	color:blue
1	A	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	chegada	chegada	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	6	nsubj	_	_
3	a	a	ADP	<sam->|PRP|@N<	_	5	case	_	_
4	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	hotel	hotel	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	2	nmod	_	_
6	foi	ir	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	a	a	ADP	<sam->|PRP|@<ADVL	_	9	case	_	_
8	as	o	DET	<-sam>|<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	_
9	12h10	12h10	NOUN	<np-def>|N|F|P|@P<	Gender=Fem|Number=Plur	6	obl	_	_
10	(	(	PUNCT	PU|@PU	_	11	punct	_	SpaceAfter=No
11	16h10	16h10	NOUN	<np-idf>|N|F|P|@N<PRED	Gender=Fem|Number=Plur	9	appos	_	_
12	em	em	ADP	PRP|@N<	_	13	case	_	_
13	Brasília	Brasília	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	)	)	PUNCT	PU|@PU	_	11	punct	_	SpaceAfter=No
15	.	.	PUNCT	PU|@PU	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

5526 nodes (2%) are attached to their parents as `appos`.

5518 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.60007238508867.

The following 40 pairs of parts of speech are connected with `appos`: [pt-pos/NOUN]()-[pt-pos/PROPN]() (2277; 41% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1127; 20% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (702; 13% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (514; 9% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (249; 5% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (246; 4% instances), [pt-pos/PART]()-[pt-pos/PROPN]() (82; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (79; 1% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (37; 1% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (34; 1% instances), [pt-pos/NOUN]()-[pt-pos/X]() (29; 1% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (20; 0% instances), [pt-pos/PROPN]()-[pt-pos/PART]() (18; 0% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (15; 0% instances), [pt-pos/NOUN]()-[pt-pos/PART]() (14; 0% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (10; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (9; 0% instances), [pt-pos/PROPN]()-[pt-pos/X]() (9; 0% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (6; 0% instances), [pt-pos/PART]()-[pt-pos/NOUN]() (6; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (6; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (6; 0% instances), [pt-pos/ADP]()-[pt-pos/PROPN]() (5; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/X]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PUNCT]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/X]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/X]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/X]()-[pt-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 appos	color:blue
1	As	_	DET	DET	_	2	det	_	_
2	informações	_	NOUN	NOUN	_	3	nsubj	_	_
3	são	_	VERB	VERB	_	0	root	_	_
4	de	de	ADP	ADP	_	6	case	_	_
5	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	jornal	_	NOUN	NOUN	_	3	nmod	_	_
7	O	_	DET	DET	_	8	det	_	_
8	Estado	_	PROPN	PNOUN	_	6	appos	_	_
9	de	_	ADP	ADP	_	10	case	_	_
10	S.	_	PROPN	PNOUN	_	8	nmod	_	_
11	Paulo	_	PROPN	PNOUN	_	10	flat	_	SpaceAfter=No
12	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 appos	color:blue
1	A	_	DET	DET	_	2	det	_	_
2	Universidade	_	PROPN	PNOUN	_	11	nsubj	_	_
3	Federal	_	PROPN	PNOUN	_	2	amod	_	_
4	de	_	ADP	ADP	_	5	case	_	_
5	Mato	_	PROPN	PNOUN	_	2	nmod	_	_
6	Grosso	_	PROPN	PNOUN	_	5	amod	_	_
7	(	_	PUNCT	.	_	8	punct	_	SpaceAfter=No
8	UFMT	_	PROPN	PNOUN	_	2	appos	_	SpaceAfter=No
9	)	_	PUNCT	.	_	8	punct	_	_
10	já	_	ADV	ADV	_	11	advmod	_	_
11	integra	_	VERB	VERB	_	0	root	_	_
12	o	_	DET	DET	_	13	det	_	_
13	Sisu	_	PROPN	PNOUN	_	11	obj	_	SpaceAfter=No
14	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	Marca	_	VERB	VERB	_	0	root	_	_
2	e	_	CCONJ	CONJ	_	3	cc	_	_
3	embalagem	_	NOUN	NOUN	_	1	conj	_	SpaceAfter=No
4	:	_	PUNCT	.	_	1	punct	_	_
5	administração	_	NOUN	NOUN	_	1	parataxis	_	_
6	e	_	CCONJ	CONJ	_	7	cc	_	_
7	conceito	_	NOUN	NOUN	_	5	conj	_	_
8	produto	_	NOUN	NOUN	_	7	appos	_	SpaceAfter=No
9	.	_	PUNCT	.	_	1	punct	_	_

~~~


