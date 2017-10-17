

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is a language-specific subtype of [acl]().

2457 nodes (1%) are attached to their parents as `acl:relcl`.

2456 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.69027269027269.

The following 31 pairs of parts of speech are connected with `acl:relcl`: [pt-pos/NOUN]()-[pt-pos/VERB]() (1722; 70% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (284; 12% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (206; 8% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (70; 3% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (40; 2% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (36; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (13; 1% instances), [pt-pos/DET]()-[pt-pos/VERB]() (12; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (10; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (8; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (8; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (7; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (6; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/SYM]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/X]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	Cartões	cartão	NOUN	<np-idf>|N|M|P|@NPHR	Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
2	:	:	PUNCT	PU|@PU	_	1	punct	_	_
3	aceita	aceitar	VERB	<mv>|V|PR|3S|IND|@FS-N<PRED	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
4	todos	todo	PRON	<quant>|DET|M|P|@<ACC	Gender=Masc|Number=Plur|PronType=Tot	3	obj	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	A	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	cestinha	cestinha	NOUN	<np-def>|N|F|S|@SC>	Gender=Fem|Number=Sing	0	root	_	_
3	de	de	ADP	<sam->|PRP|@N<	_	5	case	_	_
4	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	jogo	jogo	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	2	nmod	_	_
6	foi	ser	AUX	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	_
7	Hortência	Hortência	PROPN	PROP|F|S|@<SUBJ	Gender=Fem|Number=Sing	2	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	PU|@PU	_	2	punct	_	_
9	que	que	PRON	<rel>|INDP|F|S|@SUBJ>	Gender=Fem|Number=Sing|PronType=Rel	10	nsubj	_	_
10	marcou	marcar	VERB	<mv>|V|PS|3S|IND|@FS-N<PRED	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	acl:relcl	_	_
11	38	38	NUM	<card>|NUM|M|P|@>N	NumType=Card	12	nummod	_	_
12	pontos	ponto	NOUN	<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	E	e	CCONJ	KC|@CO	_	2	cc	_	_
2	era	ser	VERB	<mv>|V|IMPF|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	sempre	sempre	ADV	ADV|@<ADVL	_	2	advmod	_	_
4	ele	ele	PRON	PERS|M|3S|NOM|@<SUBJ	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
5	quem	quem	PRON	<rel>|INDP|M|S|@SUBJ>	Gender=Masc|Number=Sing|PronType=Rel	6	nsubj	_	_
6	ganhava	ganhar	VERB	<mv>|V|IMPF|3S|IND|@FS-N<	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	acl:relcl	_	SpaceAfter=No
7	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is a language-specific subtype of [acl]().
There are also 2 other language-specific subtypes of `acl`: [acl:inf](), [acl:part]().

2893 nodes (1%) are attached to their parents as `acl:relcl`.

2891 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.34116833736606.

The following 29 pairs of parts of speech are connected with `acl:relcl`: [pt-pos/NOUN]()-[pt-pos/VERB]() (2050; 71% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (383; 13% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (206; 7% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (74; 3% instances), [pt-pos/X]()-[pt-pos/VERB]() (50; 2% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (25; 1% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (22; 1% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (16; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (13; 0% instances), [pt-pos/PART]()-[pt-pos/VERB]() (7; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (7; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (7; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (5; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/X]()-[pt-pos/NOUN]() (4; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (2; 0% instances), [pt-pos/PART]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/AUX]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Bom	_	ADJ	ADJ	_	0	root	_	_
2	para	_	ADP	ADP	_	4	case	_	_
3	o	_	DET	DET	_	4	det	_	_
4	RN	_	PROPN	PNOUN	_	1	nmod	_	SpaceAfter=No
5	,	_	PUNCT	.	_	7	punct	_	_
6	que	_	PRON	PRON	_	7	nsubj	_	_
7	passa	_	VERB	VERB	_	4	acl:relcl	_	_
8	por	_	ADP	ADP	_	9	case	_	_
9	problemas	_	NOUN	NOUN	_	7	nmod	_	_
10	financeiros	_	ADJ	ADJ	_	9	amod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	Porém	_	ADV	ADV	_	9	advmod	_	SpaceAfter=No
2	,	_	PUNCT	.	_	1	punct	_	_
3	os	_	PRON	PRON	_	9	nsubj	_	_
4	que	_	PRON	PRON	_	5	nsubj	_	_
5	atendem	_	VERB	VERB	_	3	acl:relcl	_	_
6	en	en	ADP	ADP	_	8	case	_	_
7	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	ponta	_	NOUN	NOUN	_	5	nmod	_	_
9	mostraram	_	VERB	VERB	_	0	root	_	_
10	crescimento	_	NOUN	NOUN	_	9	obj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	9	punct	_	_

~~~


