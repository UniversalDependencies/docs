

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

5643 nodes (2%) are attached to their parents as `acl`.

5490 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.3117136275031.

The following 43 pairs of parts of speech are connected with `acl`: [pt-pos/NOUN]()-[pt-pos/VERB]() (4502; 80% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (437; 8% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (237; 4% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (97; 2% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (90; 2% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (69; 1% instances), [pt-pos/DET]()-[pt-pos/VERB]() (61; 1% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (16; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (15; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (12; 0% instances), [pt-pos/SYM]()-[pt-pos/VERB]() (12; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (11; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (11; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (10; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (7; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (7; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/SYM]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/CONJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl	color:blue
1	Ela	ela	PRON	pron-pers|F|3S|NOM	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	tem	ter	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	também	também	ADV	adv	_	2	advmod	_	_
4	textos	texto	NOUN	n|M|P	Gender=Masc|Number=Plur	2	dobj	_	_
5	com	com	ADP	prp	AdpType=Prep	6	case	_	_
6	explicações	explicação	NOUN	n|F|P	Gender=Fem|Number=Plur	4	nmod	_	_
7	sobre	sobre	ADP	prp	AdpType=Prep	9	case	_	_
8	cada	cada	DET	pron-det|<quant>|M|S	Gender=Masc|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot	9	det	_	_
9	item	item	NOUN	n|M|S	Gender=Masc|Number=Sing	6	nmod	_	_
10	pesquisado	pesquisar	VERB	v-pcp|M|S	Gender=Masc|Number=Sing|VerbForm=Part	9	acl	_	_
11	.	.	PUNCT	punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl	color:blue
1	A	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	cestinha	cestinha	NOUN	n|F|S	Gender=Fem|Number=Sing	0	root	_	_
3	de	de	ADP	prp|<sam->	AdpType=Prep	5	case	_	_
4	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	jogo	jogo	NOUN	n|M|S	Gender=Masc|Number=Sing	2	nmod	_	_
6	foi	ser	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	_
7	Hortência	Hortência	PROPN	prop|F|S	Gender=Fem|Number=Sing	2	nsubj	_	_
8	,	,	PUNCT	punc	_	7	punct	_	_
9	que	que	PRON	pron-indp|<rel>|F|S	Gender=Fem|Number=Sing|PronType=Rel	10	nsubj	_	_
10	marcou	marcar	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	acl	_	_
11	38	38	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	12	nummod	_	_
12	pontos	ponto	NOUN	n|M|P	Gender=Masc|Number=Plur	10	dobj	_	_
13	.	.	PUNCT	punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 acl	color:blue
1	Isto	isto	PRON	pron-indp|<dem>|M|S	Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
2	em	em	ADP	prp|<sam->	AdpType=Prep	9	mark	_	_
3	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
4	caso	caso	NOUN	NOUN	_	2	mwe	_	_
5	de	de	ADP	ADP	AdpType=Prep	3	mwe	_	_
6	os	o	DET	art|<artd>|M|P	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
7	dois	dois	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	8	nummod	_	_
8	xadrezistas	xadrezistas	NOUN	n|M|P	Gender=Masc|Number=Plur	9	nsubj	_	_
9	aceitarem	aceitar	VERB	v-inf|3P	Number=Plur|Person=3|VerbForm=Inf	1	acl	_	_
10	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	convite	convite	NOUN	n|M|S	Gender=Masc|Number=Sing	9	dobj	_	_
12	.	.	PUNCT	punc	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

2937 nodes (1%) are attached to their parents as `acl`.

2791 instances of `acl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.07252298263534.

The following 9 pairs of parts of speech are connected with `acl`: [pt-pos/NOUN]()-[pt-pos/VERB]() (2679; 91% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (137; 5% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (40; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (29; 1% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (24; 1% instances), [pt-pos/DET]()-[pt-pos/VERB]() (13; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (7; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/SYM]()-[pt-pos/VERB]() (4; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl	color:blue
1	Alternativa	alternativa	NOUN	<np-idf>|N|F|S|@NPHR	Gender=Fem|Number=Sing	0	root	_	_
2	prevista	prever	VERB	<mv>|V|PCP|F|S|@ICL-N<	Gender=Fem|Number=Sing|VerbForm=Part	1	acl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	«	«	PUNCT	PU|@PU	_	2	punct	_	_
2	Mundiais	Mundial	PROPN	PROP|M|P|@NPHR	Gender=Masc|Number=Plur	0	root	_	_
3	»	»	PUNCT	PU|@PU	_	2	punct	_	_
4	de	de	ADP	PRP|@N<	_	5	case	_	_
5	atletismo	atletismo	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	2	nmod	_	_
6	confirmados	confirmar	VERB	<mv>|V|PCP|M|P|@ICL-N<	Gender=Masc|Number=Plur|VerbForm=Part	2	acl	_	_
7	para	para	ADP	PRP|@<ADVL	_	8	case	_	_
8	Estugarda	Estugarda	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	6	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	FHC	FHC	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	4	nsubj	_	_
2	foi	ser	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
3	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	primeiro	primeiro	ADJ	<NUM-ord>|<n>|<np-def>|ADJ|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	_
5	a	a	ADP	PRP|@N<	_	6	mark	_	_
6	tirar	tirar	VERB	<mv>|V|INF|@ICL-P<	VerbForm=Inf	4	acl	_	_
7	consequências	consequência	NOUN	<np-idf>|N|F|P|@<ACC	Gender=Fem|Number=Plur	6	dobj	_	_
8	de	de	ADP	PRP|@<PIV	_	10	case	_	_
9	tal	tal	DET	<diff>|<KOMP>|DET|M|S|@>N	Gender=Masc|Number=Sing	10	det	_	_
10	estudo	estudo	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	6	nmod	_	_
11	.	.	PUNCT	PU|@PU	_	4	punct	_	_

~~~


