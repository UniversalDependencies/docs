

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

31679 nodes (15%) are attached to their parents as `case`.

31528 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74017487925755.

The following 15 pairs of parts of speech are connected with `case`: [pt-pos/NOUN]()-[pt-pos/ADP]() (22045; 70% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (6820; 22% instances), [pt-pos/PRON]()-[pt-pos/ADP]() (1010; 3% instances), [pt-pos/NUM]()-[pt-pos/ADP]() (688; 2% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (395; 1% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (386; 1% instances), [pt-pos/SYM]()-[pt-pos/ADP]() (191; 1% instances), [pt-pos/ADP]()-[pt-pos/ADP]() (77; 0% instances), [pt-pos/X]()-[pt-pos/ADP]() (31; 0% instances), [pt-pos/DET]()-[pt-pos/ADP]() (20; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (10; 0% instances), [pt-pos/AUX]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/SCONJ]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/INTJ]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 case	color:blue
1	Audiência	audiência	NOUN	<np-idf>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	8	nsubj	_	_
2	em	em	ADP	<sam->|PRP|@N<	_	4	case	_	_
3	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Justiça	justiça	NOUN	<prop>|<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	1	nmod	_	_
5	de	de	ADP	<sam->|PRP|@N<	_	7	case	_	_
6	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Pará	Pará	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	4	nmod	_	_
8	discute	discutir	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	diploma	diploma	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	8	obj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 case	color:blue
1	Audiência	audiência	NOUN	<np-idf>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	8	nsubj	_	_
2	em	em	ADP	<sam->|PRP|@N<	_	4	case	_	_
3	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Justiça	justiça	NOUN	<prop>|<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	1	nmod	_	_
5	de	de	ADP	<sam->|PRP|@N<	_	7	case	_	_
6	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Pará	Pará	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	4	nmod	_	_
8	discute	discutir	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	diploma	diploma	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	8	obj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
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




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

43575 nodes (15%) are attached to their parents as `case`.

43054 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.73666092943201.

The following 49 pairs of parts of speech are connected with `case`: [pt-pos/NOUN]()-[pt-pos/ADP]() (27871; 64% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (11904; 27% instances), [pt-pos/NUM]()-[pt-pos/ADP]() (1746; 4% instances), [pt-pos/PRON]()-[pt-pos/ADP]() (768; 2% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (493; 1% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (222; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (164; 0% instances), [pt-pos/PART]()-[pt-pos/ADP]() (81; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (68; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (56; 0% instances), [pt-pos/ADP]()-[pt-pos/ADP]() (35; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (33; 0% instances), [pt-pos/X]()-[pt-pos/ADP]() (23; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (18; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (16; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (7; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (6; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (6; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (5; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (4; 0% instances), [pt-pos/X]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/DET]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/CCONJ]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/X]() (2; 0% instances), [pt-pos/X]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/CCONJ]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/CCONJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/X]() (1; 0% instances), [pt-pos/PUNCT]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/X]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Ver	_	VERB	VERB	_	0	root	_	_
2	também	_	ADV	ADV	_	1	advmod	_	_
3	a	_	DET	DET	_	4	det	_	_
4	lista	_	NOUN	NOUN	_	1	obj	_	_
5	de	_	ADP	ADP	_	6	case	_	_
6	entidades	_	NOUN	NOUN	_	4	nmod	_	_
7	que	_	PRON	PRON	_	9	nsubj	_	_
8	tenham	_	AUX	AUX	_	9	aux	_	_
9	emitido	_	VERB	VERB	_	6	acl:relcl	_	_
10	selos	_	NOUN	NOUN	_	9	obj	_	_
11	postais	_	ADJ	ADJ	_	10	amod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	grupo	_	NOUN	NOUN	_	7	nsubj:pass	_	_
3	de	de	ADP	ADP	_	5	case	_	_
4	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Araxá	_	PROPN	PNOUN	_	2	nmod	_	_
6	foi	_	AUX	AUX	_	7	aux:pass	_	_
7	dividido	_	VERB	VERB	_	0	root	_	_
8	em	_	ADP	ADP	_	9	case	_	_
9	dois	_	NUM	NUM	NumType=Card	7	nmod	_	SpaceAfter=No
10	.	_	PUNCT	.	_	7	punct	_	_

~~~


