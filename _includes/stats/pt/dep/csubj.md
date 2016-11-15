

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

342 nodes (0%) are attached to their parents as `csubj`.

240 instances of `csubj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.26315789473684.

The following 16 pairs of parts of speech are connected with `csubj`: [pt-pos/ADJ]()-[pt-pos/VERB]() (148; 43% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (121; 35% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (44; 13% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (7; 2% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (5; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (3; 1% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (3; 1% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (3; 1% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	Mais	mais	ADV	adv|<quant>	NumType=Card|PronType=Ind,Neg,Tot	2	advmod	_	_
2	inesperado	inesperado	ADJ	adj|M|S	Gender=Masc|Number=Sing	0	root	_	_
3	ainda	ainda	ADV	adv	_	2	advmod	_	_
4	é	ser	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
5	encontrar	encontrar	VERB	v-inf	VerbForm=Inf	2	csubj	_	_
6	uma	um	DET	art|<arti>|F|S	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	criança	criança	NOUN	n|F|S	Gender=Fem|Number=Sing	5	dobj	_	_
8	assassina	assassino	ADJ	adj|F|S	Gender=Fem|Number=Sing	7	amod	_	_
9	.	.	PUNCT	punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	Quem	quem	PRON	pron-indp|<rel>|M/F|S	Number=Sing|PronType=Rel	2	nsubj	_	_
2	quiser	querer	VERB	v-fin|FUT|3S|SUBJ	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	csubj	_	_
3	,	,	PUNCT	punc	_	4	punct	_	_
4	vai	ir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	em	em	ADP	prp	AdpType=Prep	6	case	_	_
6	excursão	excursão	NOUN	n|F|S	Gender=Fem|Number=Sing	4	dobj	_	_
7	até	até	ADP	prp	AdpType=Prep	9	case	_	_
8	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	resort	resort	NOUN	n|M|S	Gender=Masc|Number=Sing	4	nmod	_	_
10	local	local	ADJ	adj|M|S	Gender=Masc|Number=Sing	9	amod	_	_
11	,	,	PUNCT	punc	_	9	punct	_	_
12	Casa	Casa	PROPN	prop|M|S	_	9	appos	_	MWE=Casa_de_Campo|MWEPOS=PROPN
13	de	de	ADP	ADP	AdpType=Prep	14	case	_	_
14	Campo	Campo	PROPN	PROPN	_	12	name	_	_
15	.	.	PUNCT	punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Pena	pena	NOUN	n|F|S	Gender=Fem|Number=Sing	0	root	_	_
2	não	não	ADV	adv	_	3	neg	_	_
3	ter	ter	VERB	v-inf|3S	Number=Sing|Person=3|VerbForm=Inf	1	csubj	_	_
4	mais	mais	DET	pron-det|<quant>|M|S	Gender=Masc|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot	5	det	_	_
5	tempo	tempo	NOUN	n|M|S	Gender=Masc|Number=Sing	3	dobj	_	_
6	para	para	ADP	prp	AdpType=Prep	7	mark	_	_
7	ir	ir	VERB	v-inf	VerbForm=Inf	5	acl	_	_
8	a	a	ADP	prp|<sam->	AdpType=Prep	10	case	_	_
9	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	teatro	teatro	NOUN	n|M|S	Gender=Masc|Number=Sing	7	nmod	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

377 nodes (0%) are attached to their parents as `csubj`.

273 instances of `csubj` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.85145888594164.

The following 16 pairs of parts of speech are connected with `csubj`: [pt-pos/ADJ]()-[pt-pos/VERB]() (140; 37% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (131; 35% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (47; 12% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (21; 6% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (20; 5% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (4; 1% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (2; 1% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (2; 1% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (2; 1% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (2; 1% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 csubj	color:blue
1	Eu	eu	PRON	PERS|M|1S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	também	também	ADV	ADV|@ADVL>	_	3	advmod	_	_
3	acho	achar	VERB	<first-cjt>|<mv>|V|PR|1S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	,	,	PUNCT	PU|@PU	_	3	punct	_	_
5	mas	mas	CONJ	<co-fcl>|<co-fmc>|<co-vfin>|KC|@CO	_	3	cc	_	_
6	é	ser	VERB	<cjt>|<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	preciso	preciso	ADJ	ADJ|M|S|@<SC	Gender=Masc|Number=Sing	3	conj	_	_
8	avisar	avisar	VERB	<mv>|V|INF|@ICL-<SUBJ	VerbForm=Inf	7	csubj	_	_
9	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	pessoal	pessoal	NOUN	<np-def>|N|M|S|@<ACC	Gender=Masc|Number=Sing	8	dobj	_	_
11	de	de	ADP	<sam->|PRP|@N<	_	13	case	_	_
12	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	PT	PT	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	10	nmod	_	_
14	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	Afinal	afinal	ADV	ADV|@ADVL>	_	3	advmod	_	_
2	,	,	PUNCT	PU|@PU	_	1	punct	_	_
3	parece	parecer	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	KS|@SUB	_	6	mark	_	_
5	consumir	consumir	VERB	<mv>|V|INF|@ICL-SUBJ>	VerbForm=Inf	6	csubj	_	_
6	fura	furar	VERB	<mv>|V|PR|3S|IND|@FS-<SUBJ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	csubj	_	_
7	os	o	DET	<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	tímpanos	tímpano	NOUN	<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	6	dobj	_	_
9	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj	color:blue
1	Os	o	DET	<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	culpados	culpar	VERB	<mv>|<n>|V|PCP|M|P|@ICL-SUBJ>	Gender=Masc|Number=Plur|VerbForm=Part	7	csubj	_	_
3	são	ser	VERB	<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
4	quase	quase	ADV	<quant>|ADV|@>A	_	5	advmod	_	_
5	sempre	sempre	ADV	ADV|@<ADVL	_	7	advmod	_	_
6	os	o	DET	<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	pais	pai	NOUN	<np-def>|N|M|P|@<SC	Gender=Masc|Number=Plur	0	root	_	_
8	.	.	PUNCT	PU|@PU	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

658 nodes (0%) are attached to their parents as `csubj`.

548 instances of `csubj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.290273556231.

The following 11 pairs of parts of speech are connected with `csubj`: [pt-pos/VERB]()-[pt-pos/VERB]() (343; 52% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (243; 37% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (37; 6% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (9; 1% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (8; 1% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (6; 1% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (4; 1% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (4; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	É	_	VERB	VERB	_	0	root	_	_
2	possível	_	ADJ	ADJ	_	1	xcomp:adj	_	_
3	acabar	_	VERB	VERB	_	1	csubj	_	_
4	com	_	ADP	ADP	_	6	case	_	_
5	essa	_	DET	DET	_	6	det	_	_
6	história	_	NOUN	NOUN	_	3	nmod	_	_
7	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Outra	_	DET	DET	_	2	det	_	_
2	dica	_	NOUN	NOUN	_	0	root	_	_
3	é	_	VERB	VERB	_	2	cop	_	_
4	prestar	_	VERB	VERB	_	2	csubj	_	_
5	atenção	_	NOUN	NOUN	_	4	dobj	_	_
6	ao	_	ADP	ADP	_	7	case	_	_
7	tipo	_	NOUN	NOUN	_	4	nmod	_	_
8	de	_	ADP	ADP	_	9	case	_	_
9	tinta	_	NOUN	NOUN	_	7	nmod	_	_
10	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	"	_	PUNCT	.	_	2	punct	_	_
2	O	_	PRON	PRON	_	0	root	_	_
3	que	_	PRON	PRON	_	6	dobj	_	_
4	nós	_	PRON	PRON	_	6	nsubj	_	_
5	vamos	_	AUX	AUX	_	6	aux	_	_
6	fazer	_	VERB	VERB	_	2	acl:relcl	_	_
7	agora	_	ADV	ADV	_	6	advmod	_	_
8	é	_	VERB	VERB	_	2	cop	_	_
9	responder	_	VERB	VERB	_	2	csubj	_	_
10	aos	_	ADP	ADP	_	11	case	_	_
11	termos	_	NOUN	NOUN	_	9	nmod	_	_
12	da	_	ADP	ADP	_	13	case	_	_
13	ação	_	NOUN	NOUN	_	11	nmod	_	_
14	.	_	PUNCT	.	_	2	punct	_	_

~~~


