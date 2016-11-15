

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

1977 nodes (1%) are attached to their parents as `ccomp`.

1611 instances of `ccomp` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.3697521497218.

The following 19 pairs of parts of speech are connected with `ccomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (1570; 79% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (179; 9% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (173; 9% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (18; 1% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (7; 0% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/CONJ]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/DET]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 ccomp	color:blue
1	A	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	solução	solução	NOUN	n|F|S	Gender=Fem|Number=Sing	3	nsubj	_	_
3	foi	ser	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	negociar	negociar	VERB	v-inf	VerbForm=Inf	3	ccomp	_	_
5	diretamente	diretamente	ADV	adv	_	4	advmod	_	_
6	com	com	ADP	prp	AdpType=Prep	8	case	_	_
7	os	o	DET	art|<artd>|M|P	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	jogadores	jogador	NOUN	n|M|P	Gender=Masc|Number=Plur	4	dobj	_	_
9	.	.	PUNCT	punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 ccomp	color:blue
1	É	ser	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	uma	um	DET	art|<arti>|F|S	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	situação	situação	NOUN	n|F|S	Gender=Fem|Number=Sing	7	ccomp	_	_
4	absurda	absurdo	ADJ	adj|F|S	Gender=Fem|Number=Sing	3	amod	_	_
5	»	»	PUNCT	punc	_	7	punct	_	_
6	,	,	PUNCT	punc	_	7	punct	_	_
7	disse	dizer	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	Taylor	Taylor	PROPN	prop|M|S	Gender=Masc|Number=Sing	7	nsubj	_	_
9	,	,	PUNCT	punc	_	8	punct	_	_
10	49	49	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	8	nummod	_	_
11	.	.	PUNCT	punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 ccomp	color:blue
1	Enganei	enganar	VERB	v-fin|PS|1S|IND	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
2	-me	eu	PRON	pron-pers|<refl>|M/F|1S|ACC	Case=Acc|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	1	dobj	_	_
3	:	:	PUNCT	punc	_	1	punct	_	_
4	não	não	ADV	adv	_	8	neg	_	_
5	serie	seriar	VERB	v-fin|COND|3S	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	8	cop	_	_
6	nem	nem	CONJ	conj-c|<co-vfin>|<co-fmc>	_	8	cc	_	_
7	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	primeiro	primeiro	ADJ	adj|<n>|<NUM-ord>|M|S	Gender=Masc|Number=Sing|NumType=Ord	13	ccomp	_	_
9	nem	nem	CONJ	conj-c|<co-sc>	_	8	cc	_	_
10	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	último	último	ADJ	adj|<n>|<NUM-ord>|M|S	Gender=Masc|Number=Sing|NumType=Ord	8	conj	_	_
12	,	,	PUNCT	punc	_	13	punct	_	_
13	espero	esperar	VERB	v-fin|PR|1S|IND	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
14	..	..	PUNCT	punc	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

1569 nodes (1%) are attached to their parents as `ccomp`.

1220 instances of `ccomp` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.77310388782664.

The following 16 pairs of parts of speech are connected with `ccomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (1209; 77% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (142; 9% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (137; 9% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (21; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (15; 1% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (12; 1% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (12; 1% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (5; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (3; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (2; 0% instances), [pt-pos/CONJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 4 ccomp	color:blue
1	«	«	PUNCT	PU|@PU	_	4	punct	_	_
2	É	ser	VERB	<mv>|V|PR|3S|IND|@FS-ACC>	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	barco	barco	NOUN	<np-idf>|N|M|S|@<SC	Gender=Masc|Number=Sing	14	ccomp	_	_
5	que	que	PRON	<rel>|INDP|M|S|@SUBJ>	Gender=Masc|Number=Sing|PronType=Rel	8	nsubj	_	_
6	vai	ir	AUX	<aux>|V|PR|3S|IND|@FS-N<	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
7	a	a	ADP	PRP|@PRT-AUX<	_	8	nmod	_	_
8	passar	passar	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	4	acl:relcl	_	_
9	em	em	ADP	<sam->|PRP|@<SA	_	11	case	_	_
10	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	mar	mar	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	8	nmod	_	_
12	»	»	PUNCT	PU|@PU	_	4	punct	_	_
13	,	,	PUNCT	PU|@PU	_	8	punct	_	_
14	murmura	murmurar	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
15	um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	assistente	assistente	NOUN	<np-idf>|N|M|S|@<SUBJ	Gender=Masc|Number=Sing	14	nsubj	_	_
17	.	.	PUNCT	PU|@PU	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 ccomp	color:blue
1	Metade	metade	NOUN	<np-idf>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	6	nsubj	_	_
2	de	de	ADP	PRP|@N<ARG	_	4	case	_	_
3	os	o	DET	<-sam>|<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
4	Estados	estado	NOUN	<prop>|<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	1	nmod	_	_
5	é	ser	VERB	<mv>|V|PR|3S|IND|@FS-ACC>	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	inviável	inviável	ADJ	ADJ|F|S|@<SC	Gender=Fem|Number=Sing	8	ccomp	_	_
7	,	,	PUNCT	PU|@PU	_	6	punct	_	_
8	diz	dizer	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	socióloga	socióloga	NOUN	<np-idf>|N|F|S|@<SUBJ	Gender=Fem|Number=Sing	8	nsubj	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

2360 nodes (1%) are attached to their parents as `ccomp`.

1634 instances of `ccomp` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.49661016949153.

The following 18 pairs of parts of speech are connected with `ccomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (2043; 87% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (234; 10% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (45; 2% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (9; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (8; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/VERB]()-[pt-pos/AUX]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/CONJ]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 ccomp	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	couro	_	NOUN	NOUN	_	6	nsubj	_	_
3	do	_	ADP	ADP	_	4	case	_	_
4	peixe	_	NOUN	NOUN	_	2	nmod	_	_
5	sempre	_	ADV	ADV	_	6	advmod	_	_
6	rende	_	VERB	VERB	_	9	ccomp	_	_
7	"	_	PUNCT	.	_	6	punct	_	_
8	,	_	PUNCT	.	_	9	punct	_	_
9	conta	_	VERB	VERB	_	0	root	_	_
10	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 ccomp	color:blue
1	"	_	PUNCT	.	_	7	punct	_	_
2	Eles	_	PRON	PRON	_	7	nsubjpass	_	_
3	não	_	ADV	ADV	_	7	neg	_	_
4	podem	_	AUX	AUX	_	7	aux	_	_
5	ser	_	AUX	AUX	_	7	auxpass	_	_
6	considerados	_	VERB	VERB	_	7	cop	_	_
7	marginais	_	NOUN	NOUN	_	10	ccomp	_	_
8	"	_	PUNCT	.	_	7	punct	_	_
9	,	_	PUNCT	.	_	10	punct	_	_
10	disse	_	VERB	VERB	_	0	root	_	_
11	ele	_	PRON	PRON	_	10	nsubj	_	_
12	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 ccomp	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	grupo	_	NOUN	NOUN	_	4	nsubj	_	_
3	é	_	VERB	VERB	_	4	cop	_	_
4	esse	_	PRON	PRON	_	10	ccomp	_	_
5	que	_	PRON	PRON	_	6	nsubj	_	_
6	está	_	VERB	VERB	_	4	acl:relcl	_	_
7	aqui	_	ADV	ADV	_	6	advmod	_	_
8	"	_	PUNCT	.	_	4	punct	_	_
9	,	_	PUNCT	.	_	10	punct	_	_
10	declarou	_	VERB	VERB	_	0	root	_	_
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


