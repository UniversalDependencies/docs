

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

2338 nodes (1%) are attached to their parents as `advcl`.

1831 instances of `advcl` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.90889649272883.

The following 24 pairs of parts of speech are connected with `advcl`: [pt-pos/VERB]()-[pt-pos/VERB]() (1736; 74% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (220; 9% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (133; 6% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (102; 4% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (34; 1% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (34; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (21; 1% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (12; 1% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (8; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (7; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (6; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (5; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/SYM]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/INTJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl	color:blue
1	PF	PF	PROPN	PROP|F|S|@SUBJ>	Gender=Fem|Number=Sing	2	nsubj	_	_
2	prende	prender	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dois	dois	NUM	<card>|NUM|M|P|@<ACC	NumType=Card	2	obj	_	_
4	por	por	ADP	PRP|@<ADVL	_	5	mark	_	_
5	cobrar	cobrar	VERB	<mv>|V|INF|@ICL-P<	VerbForm=Inf	2	advcl	_	_
6	ágio	ágio	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	5	obj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advcl	color:blue
1	Se	se	SCONJ	KS|@SUB	_	2	mark	_	_
2	reagir	reagir	VERB	<mv>|V|FUT|3S|SUBJ|@FS-ADVL>	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	advcl	_	_
3	é	ser	AUX	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	interessante	interessante	ADJ	ADJ|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	_
5	porque	porque	SCONJ	KS|@SUB	_	6	mark	_	_
6	mostrará	mostrar	VERB	<mv>|V|FUT|3S|IND|@FS-<ADVL	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	advcl	_	_
7	que	que	SCONJ	KS|@SUB	_	9	mark	_	_
8	está	estar	AUX	<mv>|V|PR|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	vivo	vivo	ADJ	ADJ|M|S|@<SC	Gender=Masc|Number=Sing	6	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	4	punct	_	SpaceAfter=No
11	»	»	PUNCT	PU|@PU	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 advcl	color:blue
1	É	ser	AUX	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	assim	assim	ADV	<kc>|ADV|@<SC	_	0	root	_	_
3	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	transparência	transparência	NOUN	<np-def>|N|F|S|@<SUBJ	Gender=Fem|Number=Sing	2	nsubj	_	_
5	de	de	ADP	<sam->|PRP|@N<	_	7	case	_	_
6	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Partido	Partido	PROPN	_	Gender=Masc|Number=Sing	4	nmod	_	MWE=Partido_Popular|MWEPOS=PROPN
8	Popular	Popular	PROPN	_	Number=Sing	7	flat:name	_	SpaceAfter=No
9	,	,	PUNCT	PU|@PU	_	10	punct	_	_
10	feita	fazer	VERB	<mv>|V|PCP|F|S|@ICL-A<	Gender=Fem|Number=Sing|VerbForm=Part	2	advcl	_	_
11	de	de	ADP	PRP|@<PIV	_	12	case	_	_
12	recados	recado	NOUN	<np-idf>|N|M|P|@P<	Gender=Masc|Number=Plur	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

2219 nodes (1%) are attached to their parents as `advcl`.

1605 instances of `advcl` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.36277602523659.

The following 20 pairs of parts of speech are connected with `advcl`: [pt-pos/VERB]()-[pt-pos/VERB]() (2005; 90% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (95; 4% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (48; 2% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (24; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (10; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (7; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 advcl	color:blue
1	"	_	PUNCT	.	_	4	punct	_	SpaceAfter=No
2	Não	_	ADV	ADV	Polarity=Neg	4	advmod	_	_
3	podemos	_	AUX	AUX	_	4	aux	_	_
4	fazer	_	VERB	VERB	_	0	root	_	_
5	outra	_	DET	DET	_	6	det	_	_
6	coisa	_	NOUN	NOUN	_	4	obj	_	_
7	que	_	CCONJ	CONJ	_	8	mark	_	_
8	sair	_	VERB	VERB	_	4	advcl	_	_
9	a	a	ADP	ADP	_	11	case	_	_
10	as	o	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	ruas	_	NOUN	NOUN	_	8	nmod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 advcl	color:blue
1	Eu	_	PRON	PRON	_	2	nsubj	_	_
2	brinco	_	NOUN	NOUN	_	0	root	_	_
3	que	_	CCONJ	CONJ	_	4	mark	_	_
4	sou	_	VERB	VERB	_	2	ccomp	_	_
5	amador	_	ADJ	ADJ	_	4	xcomp:adj	_	SpaceAfter=No
6	,	_	PUNCT	.	_	8	punct	_	_
7	porque	_	CCONJ	CONJ	_	8	mark	_	_
8	amo	_	VERB	VERB	_	2	advcl	_	_
9	o	_	PRON	PRON	_	8	obj	_	_
10	que	_	PRON	PRON	_	12	obj	_	_
11	eu	_	PRON	PRON	_	12	nsubj	_	_
12	faço	_	VERB	VERB	_	9	acl:relcl	_	SpaceAfter=No
13	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advcl	color:blue
1	Quando	_	CCONJ	CONJ	_	4	mark	_	_
2	eu	_	PRON	PRON	_	4	nsubj	_	_
3	for	_	VERB	VERB	_	4	cop	_	_
4	mãe	_	NOUN	NOUN	_	6	advcl	_	SpaceAfter=No
5	,	_	PUNCT	.	_	4	punct	_	_
6	quero	_	VERB	VERB	_	0	root	_	_
7	ser	_	VERB	VERB	_	6	xcomp	_	_
8	presente	_	ADJ	ADJ	_	7	xcomp:adj	_	SpaceAfter=No
9	,	_	PUNCT	.	_	10	punct	_	_
10	acompanhar	_	VERB	VERB	_	7	conj	_	SpaceAfter=No
11	,	_	PUNCT	.	_	12	punct	_	_
12	participar	_	VERB	VERB	_	7	conj	_	SpaceAfter=No
13	.	_	PUNCT	.	_	6	punct	_	_

~~~


