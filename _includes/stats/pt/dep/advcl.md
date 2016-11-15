

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

2956 nodes (1%) are attached to their parents as `advcl`.

2226 instances of `advcl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.39817320703654.

The following 30 pairs of parts of speech are connected with `advcl`: [pt-pos/VERB]()-[pt-pos/VERB]() (2240; 76% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (230; 8% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (124; 4% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (117; 4% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (54; 2% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (51; 2% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (22; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (22; 1% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (11; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (11; 0% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (11; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (8; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (7; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (7; 0% instances), [pt-pos/CONJ]()-[pt-pos/VERB]() (6; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (6; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/AUX]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl	color:blue
1	PF	PF	PROPN	prop|F|S	Gender=Fem|Number=Sing	2	nsubj	_	_
2	prende	prender	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dois	dois	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	2	dobj	_	_
4	por	por	ADP	prp	AdpType=Prep	5	mark	_	_
5	cobrar	cobrar	VERB	v-inf	VerbForm=Inf	2	advcl	_	_
6	ágio	ágio	NOUN	n|M|S	Gender=Masc|Number=Sing	5	dobj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 advcl	color:blue
1	«	«	PUNCT	punc	_	4	punct	_	_
2	Era	ser	VERB	v-fin|IMPF|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
3	um	um	DET	art|<arti>|M|S	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	miserável	miserável	ADJ	adj|M|S	Gender=Masc|Number=Sing	0	root	_	_
5	quando	quando	ADV	adv|<rel>|<ks>	PronType=Rel	6	advmod	_	_
6	chegou	chegar	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	advcl	_	_
7	.	.	PUNCT	punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 advcl	color:blue
1	A	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	energia	energia	NOUN	n|F|S	Gender=Fem|Number=Sing	5	nsubjpass	_	_
3	nuclear	nuclear	ADJ	adj|F|S	Gender=Fem|Number=Sing	2	amod	_	_
4	é	ser	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	auxpass	_	_
5	usada	usar	VERB	v-pcp|F|S	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
6	só	só	ADV	adv	_	5	advmod	_	_
7	para	para	ADP	prp	AdpType=Prep	6	case	_	_
8	movimentar	movimentar	VERB	v-inf	VerbForm=Inf	6	advcl	_	_
9	a	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	embarcação	embarcação	NOUN	n|F|S	Gender=Fem|Number=Sing	8	dobj	_	_
11	.	.	PUNCT	punc	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

2445 nodes (1%) are attached to their parents as `advcl`.

1919 instances of `advcl` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.83640081799591.

The following 23 pairs of parts of speech are connected with `advcl`: [pt-pos/VERB]()-[pt-pos/VERB]() (1849; 76% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (202; 8% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (143; 6% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (103; 4% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (37; 2% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (33; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (22; 1% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (12; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (8; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (6; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (5; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/SYM]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/INTJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 advcl	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 advcl	color:blue
1	«	«	PUNCT	PU|@PU	_	5	punct	_	_
2	A	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	aula	aula	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	5	nsubj	_	_
4	é	ser	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	boa	bom	ADJ	ADJ|F|S|@<SC	Gender=Fem|Number=Sing	0	root	_	_
6	porque	porque	SCONJ	KS|@SUB	_	10	mark	_	_
7	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	professor	professor	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	10	nsubj	_	_
9	jamais	jamais	ADV	ADV|@ADVL>	_	10	advmod	_	_
10	impõe	impor	VERB	<mv>|V|PR|3S|IND|@FS-<ADVL	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	advcl	_	_
11	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	opinião	opinião	NOUN	<np-def>|N|F|S|@<ACC	Gender=Fem|Number=Sing	10	dobj	_	_
13	de	de	ADP	<sam->|PRP|@N<	_	14	case	_	_
14	ele	ele	PRON	<-sam>|PERS|M|3S|NOM/PIV|@P<	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nmod	_	_
15	.	.	PUNCT	PU|@PU	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 advcl	color:blue
1	«	«	PUNCT	PU|@PU	_	3	punct	_	_
2	Nunca	nunca	ADV	ADV|@ADVL>	_	3	advmod	_	_
3	tive	ter	VERB	<mv>|V|PS|1S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
4	muito	muito	DET	<quant>|DET|M|S|@>N	Gender=Masc|Number=Sing	5	det	_	_
5	interesse	interesse	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	3	dobj	_	_
6	,	,	PUNCT	PU|@PU	_	11	punct	_	_
7	apesar	apesar	ADV	ADV|@<ADVL	_	3	advmod	_	MWE:apesar=de
8	de	de	ADP	PRP|@A<	_	11	mark	_	_
9	já	já	ADV	ADV|@ADVL>	_	11	advmod	_	_
10	ter	ter	AUX	<aux>|V|INF|@ICL-P<	VerbForm=Inf	11	aux	_	_
11	experimentado	experimentar	VERB	<mv>|V|PCP|@ICL-AUX<	VerbForm=Part	7	advcl	_	_
12	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

2488 nodes (1%) are attached to their parents as `advcl`.

1788 instances of `advcl` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.78456591639871.

The following 22 pairs of parts of speech are connected with `advcl`: [pt-pos/VERB]()-[pt-pos/VERB]() (2243; 90% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (110; 4% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (52; 2% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (25; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (11; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (10; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (9; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (7; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 advcl	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 advcl	color:blue
1	Eu	_	PRON	PRON	_	2	nsubj	_	_
2	brinco	_	NOUN	NOUN	_	0	root	_	_
3	que	_	CONJ	CONJ	_	4	mark	_	_
4	sou	_	VERB	VERB	_	2	ccomp	_	_
5	amador	_	ADJ	ADJ	_	4	xcomp:adj	_	_
6	,	_	PUNCT	.	_	8	punct	_	_
7	porque	_	CONJ	CONJ	_	8	mark	_	_
8	amo	_	VERB	VERB	_	2	advcl	_	_
9	o	_	PRON	PRON	_	8	dobj	_	_
10	que	_	PRON	PRON	_	12	dobj	_	_
11	eu	_	PRON	PRON	_	12	nsubj	_	_
12	faço	_	VERB	VERB	_	9	acl:relcl	_	_
13	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advcl	color:blue
1	Quando	_	CONJ	CONJ	_	4	mark	_	_
2	eu	_	PRON	PRON	_	4	nsubj	_	_
3	for	_	VERB	VERB	_	4	cop	_	_
4	mãe	_	NOUN	NOUN	_	6	advcl	_	_
5	,	_	PUNCT	.	_	4	punct	_	_
6	quero	_	VERB	VERB	_	0	root	_	_
7	ser	_	VERB	VERB	_	6	xcomp	_	_
8	presente	_	ADJ	ADJ	_	7	xcomp:adj	_	_
9	,	_	PUNCT	.	_	7	punct	_	_
10	acompanhar	_	VERB	VERB	_	7	conj	_	_
11	,	_	PUNCT	.	_	7	punct	_	_
12	participar	_	VERB	VERB	_	7	conj	_	_
13	.	_	PUNCT	.	_	6	punct	_	_

~~~


