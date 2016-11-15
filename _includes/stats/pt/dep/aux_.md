

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

848 nodes (0%) are attached to their parents as `aux`.

842 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70283018867925.

The following 7 pairs of parts of speech are connected with `aux`: [pt-pos/VERB]()-[pt-pos/VERB]() (422; 50% instances), [pt-pos/VERB]()-[pt-pos/AUX]() (420; 50% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/AUX]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux	color:blue
1	Em	em	ADP	prp|<sam->	AdpType=Prep	3	case	_	_
2	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	projeto	projeto	NOUN	n|M|S	Gender=Masc|Number=Sing	5	nmod	_	_
4	não	não	ADV	adv	_	5	neg	_	_
5	há	haver	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	definição	definição	NOUN	n|F|S	Gender=Fem|Number=Sing	5	dobj	_	_
7	de	de	ADP	prp	AdpType=Prep	11	mark	_	_
8	quantos	quanto	PRON	pron-det|<interr>|M|S	Gender=Masc|Number=Sing|PronType=Int	11	nsubjpass	_	_
9	podem	poder	AUX	v-fin|PR|3P|IND	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
10	ser	ser	VERB	v-inf	VerbForm=Inf	11	auxpass	_	_
11	construídos	construir	VERB	v-pcp|M|P	Gender=Masc|Number=Plur|VerbForm=Part	6	acl	_	_
12	.	.	PUNCT	punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 aux	color:blue
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	francês	francês	NOUN	n|M|S	Gender=Masc|Number=Sing	3	nsubj	_	_
3	conseguiu	conseguir	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	dez	dez	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	5	nummod	_	_
5	ases	ás	NOUN	n|M|P	Gender=Masc|Number=Plur	3	dobj	_	_
6	em	em	ADP	prp|<sam->	AdpType=Prep	8	case	_	_
7	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	encontro	encontro	NOUN	n|M|S	Gender=Masc|Number=Sing	3	nmod	_	_
9	,	,	PUNCT	punc	_	3	punct	_	_
10	contra	contra	ADP	prp	AdpType=Prep	11	case	_	_
11	17	17	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	5	nummod	_	_
12	de	de	ADP	prp|<sam->	AdpType=Prep	14	case	_	_
13	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	croata	croata	NOUN	n|M|S	Gender=Masc|Number=Sing	11	nmod	_	_
15	,	,	PUNCT	punc	_	14	punct	_	_
16	que	que	PRON	pron-indp|<rel>|M|S	Gender=Masc|Number=Sing|PronType=Rel	17	aux	_	_
17	está	estar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	acl	_	_
18	perto	perto	NOUN	prp	_	20	mark	_	MWE=perto_de|MWEPOS=ADP
19	de	de	ADP	ADP	AdpType=Prep	18	mwe	_	_
20	atingir	atingir	VERB	v-inf	VerbForm=Inf	17	advcl	_	_
21	a	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
22	incrível	incrível	ADJ	adj|F|S	Gender=Fem|Number=Sing	23	amod	_	_
23	marca	marca	NOUN	n|F|S	Gender=Fem|Number=Sing	20	dobj	_	_
24	de	de	ADP	prp	AdpType=Prep	26	case	_	_
25	mil	mil	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	26	nummod	_	_
26	ases	ás	NOUN	n|M|P	Gender=Masc|Number=Plur	23	nmod	_	_
27	este	este	DET	pron-det|<dem>|M|S	Gender=Masc|Number=Sing|PronType=Dem	28	det	_	_
28	ano	ano	NOUN	n|M|S	Gender=Masc|Number=Sing	26	nmod	_	_
29	.	.	PUNCT	punc	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

2443 nodes (1%) are attached to their parents as `aux`.

2426 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86819484240688.

The following 9 pairs of parts of speech are connected with `aux`: [pt-pos/VERB]()-[pt-pos/AUX]() (2272; 93% instances), [pt-pos/NOUN]()-[pt-pos/AUX]() (83; 3% instances), [pt-pos/ADJ]()-[pt-pos/AUX]() (64; 3% instances), [pt-pos/PRON]()-[pt-pos/AUX]() (13; 1% instances), [pt-pos/NUM]()-[pt-pos/AUX]() (4; 0% instances), [pt-pos/ADV]()-[pt-pos/AUX]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/AUX]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/AUX]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	«	«	PUNCT	PU|@PU	_	4	punct	_	_
2	Mas	mas	CONJ	KC|@CO	_	4	cc	_	_
3	vou	ir	AUX	<aux>|V|PR|1S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	receber	receber	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	0	root	_	_
5	atestado	atestado	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	4	dobj	_	_
6	de	de	ADP	PRP|@N<	_	7	case	_	_
7	idoneidade	idoneidade	NOUN	<np-idf>|N|F|S|@P<	Gender=Fem|Number=Sing	5	nmod	_	_
8	moral	moral	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	7	amod	_	_
9	.	.	PUNCT	PU|@PU	_	4	punct	_	_
10	»	»	PUNCT	PU|@PU	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Carnaval	carnaval	NOUN	<np-idf>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	5	nsubj	_	_
2	devia	dever	AUX	<aux>|V|IMPF|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	aux	_	_
3	ser	ser	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	5	cop	_	_
4	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	ano	ano	NOUN	<np-def>|N|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	_
6	todo	todo	DET	<quant>|DET|M|S|@N<	Gender=Masc|Number=Sing	5	det	_	_
7	.	.	PUNCT	PU|@PU	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 aux	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	crítico	crítico	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	11	nsubj	_	_
3	(	(	PUNCT	PU|@PU	_	4	punct	_	_
4	é	ser	VERB	<first-cjt>|<mv>|V|PR|3S|IND|@FS-QUE	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	/	/	CONJ	KC|@CO	_	4	punct	_	_
6	deve	dever	AUX	<cjt>|<aux>|V|PR|3S|IND|@FS-QUE	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
7	ser	ser	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	11	cop	_	_
8	)	)	PUNCT	PU|@PU	_	4	punct	_	_
9	,	,	PUNCT	PU|@PU	_	11	punct	_	_
10	um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	insolente	insolente	ADJ	<n>|<np-idf>|ADJ|M|S|@<SC	Gender=Masc|Number=Sing	4	parataxis	_	_
12	de	de	ADP	<sam->|PRP|@N<	_	14	case	_	_
13	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	razão	razão	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	11	nmod	_	_
15	?	?	PUNCT	PU|@PU	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

2806 nodes (1%) are attached to their parents as `aux`.

2800 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52031361368496.

The following 7 pairs of parts of speech are connected with `aux`: [pt-pos/VERB]()-[pt-pos/AUX]() (2693; 96% instances), [pt-pos/NOUN]()-[pt-pos/AUX]() (73; 3% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (12; 0% instances), [pt-pos/PRON]()-[pt-pos/AUX]() (11; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (9; 0% instances), [pt-pos/PROPN]()-[pt-pos/AUX]() (7; 0% instances), [pt-pos/AUX]()-[pt-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	mimo	_	NOUN	NOUN	_	7	nsubj	_	_
3	em	_	ADP	ADP	_	4	case	_	_
4	questão	_	NOUN	NOUN	_	2	nmod	_	_
5	foi	_	VERB	VERB	_	7	cop	_	_
6	o	_	DET	DET	_	7	det	_	_
7	CD	_	NOUN	NOUN	_	0	root	_	_
8	"	_	PUNCT	.	_	10	punct	_	_
9	Deixa	_	PROPN	PNOUN	_	10	aux	_	_
10	clarear	_	PROPN	PNOUN	_	7	parataxis	_	_
11	"	_	PUNCT	.	_	10	punct	_	_
12	,	_	PUNCT	.	_	14	punct	_	_
13	de	_	ADP	ADP	_	14	case	_	_
14	Zeca	_	PROPN	PNOUN	_	7	nmod	_	_
15	Pagodinho	_	PROPN	PNOUN	_	14	name	_	_
16	.	_	PUNCT	.	_	7	punct	_	_

~~~


