

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

5523 nodes (2%) are attached to their parents as `cc`.

4871 instances of `cc` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.50914358138693.

The following 43 pairs of parts of speech are connected with `cc`: [pt-pos/NOUN]()-[pt-pos/CONJ]() (1829; 33% instances), [pt-pos/VERB]()-[pt-pos/CONJ]() (1761; 32% instances), [pt-pos/PROPN]()-[pt-pos/CONJ]() (805; 15% instances), [pt-pos/ADJ]()-[pt-pos/CONJ]() (537; 10% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (163; 3% instances), [pt-pos/NUM]()-[pt-pos/CONJ]() (102; 2% instances), [pt-pos/ADV]()-[pt-pos/CONJ]() (66; 1% instances), [pt-pos/PRON]()-[pt-pos/CONJ]() (47; 1% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (42; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (40; 1% instances), [pt-pos/DET]()-[pt-pos/CONJ]() (21; 0% instances), [pt-pos/SYM]()-[pt-pos/CONJ]() (16; 0% instances), [pt-pos/ADP]()-[pt-pos/CONJ]() (15; 0% instances), [pt-pos/NOUN]()-[pt-pos/SYM]() (12; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (7; 0% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (6; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/AUX]()-[pt-pos/CONJ]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/PART]() (3; 0% instances), [pt-pos/NUM]()-[pt-pos/SYM]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/SYM]() (2; 0% instances), [pt-pos/SCONJ]()-[pt-pos/CONJ]() (2; 0% instances), [pt-pos/SYM]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/PART]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/INTJ]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	Para	para	ADP	prp	AdpType=Prep	2	case	_	_
2	mim	eu	PRON	pron-pers|M|1S|PIV	Case=Acc|Gender=Masc|Number=Sing|Person=1|PrepCase=Pre|PronType=Prs	7	nmod	_	_
3	roupa	roupa	NOUN	n|F|S	Gender=Fem|Number=Sing	7	nsubj	_	_
4	e	e	CONJ	conj-c|<co-subj>	_	3	cc	_	_
5	moda	moda	NOUN	n|F|S	Gender=Fem|Number=Sing	3	conj	_	_
6	são	ser	VERB	v-fin|PR|3P|IND	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	coisas	coisa	NOUN	n|F|P	Gender=Fem|Number=Plur	0	root	_	_
8	diferentes	diferente	ADJ	adj|F|P	Gender=Fem|Number=Plur	7	amod	_	_
9	»	»	PUNCT	punc	_	7	punct	_	_
10	.	.	PUNCT	punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	E	e	CONJ	conj-c	_	4	cc	_	_
2	alguns	algum	PRON	pron-det|<quant>|M|P	Gender=Masc|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot	3	nsubj	_	_
3	vão	ir	VERB	v-fin|PR|3P|IND	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ter	ter	VERB	v-inf	VerbForm=Inf	3	xcomp	_	_
5	de	de	ADP	prp	AdpType=Prep	7	case	_	_
6	30	30	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	7	nummod	_	_
7	$%	%	SYM	n|M|P	Gender=Masc|Number=Plur	4	dobj	_	_
8	»	»	PUNCT	punc	_	3	punct	_	_
9	.	.	PUNCT	punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cc	color:blue
1	É	ser	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	também	também	ADV	adv	_	3	advmod	_	_
3	primo	primo	NOUN	n|M|S	Gender=Masc|Number=Sing	0	root	_	_
4	de	de	ADP	prp	AdpType=Prep	5	case	_	_
5	Curica	Curica	PROPN	prop|M|S	Gender=Masc|Number=Sing	3	nmod	_	_
6	e	e	CONJ	conj-c|<co-postnom>	_	5	cc	_	_
7	de	de	ADP	prp	AdpType=Prep	8	case	_	_
8	Floriano	Floriano	PROPN	prop|M|S	_	5	conj	_	MWE=Floriano_Graça|MWEPOS=PROPN
9	Graça	Graça	PROPN	PROPN	_	8	name	_	_
10	.	.	PUNCT	punc	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

5198 nodes (2%) are attached to their parents as `cc`.

4712 instances of `cc` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.44574836475568.

The following 21 pairs of parts of speech are connected with `cc`: [pt-pos/NOUN]()-[pt-pos/CONJ]() (1877; 36% instances), [pt-pos/VERB]()-[pt-pos/CONJ]() (1774; 34% instances), [pt-pos/PROPN]()-[pt-pos/CONJ]() (706; 14% instances), [pt-pos/ADJ]()-[pt-pos/CONJ]() (536; 10% instances), [pt-pos/NUM]()-[pt-pos/CONJ]() (99; 2% instances), [pt-pos/ADV]()-[pt-pos/CONJ]() (56; 1% instances), [pt-pos/PRON]()-[pt-pos/CONJ]() (52; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (46; 1% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (19; 0% instances), [pt-pos/DET]()-[pt-pos/CONJ]() (9; 0% instances), [pt-pos/SYM]()-[pt-pos/CONJ]() (6; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/CONJ]()-[pt-pos/CONJ]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/INTJ]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/PUNCT]()-[pt-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	É	ser	VERB	<mv>|<first-cjt>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	continente	continente	NOUN	<np-idf>|N|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	_
4	e	e	CONJ	<co-fcl>|<co-fmc>|<co-vfin>|KC|@CO	_	3	cc	_	_
5	é	ser	VERB	<mv>|<cjt>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	país	país	NOUN	<np-idf>|N|M|S|@<SC	Gender=Masc|Number=Sing	3	conj	_	_
8	de	de	ADP	PRP|@N<	_	9	case	_	_
9	Terceiro	Terceiro	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	7	nmod	_	MWE:Terceiro=Mundo
10	Mundo	Mundo	PROPN	PROP|@N<	Number=Sing	9	name	_	_
11	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 cc	color:blue
1	Até	até	ADV	ADV|@>A	_	3	advmod	_	_
2	em	em	ADP	PRP|@ADVL>	_	3	case	_	_
3	Hollywood	Hollywood	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	5	nmod	_	_
4	,	,	PUNCT	PU|@PU	_	3	punct	_	_
5	há	haver	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	pessoas	pessoa	NOUN	<np-idf>|N|F|P|@<ACC	Gender=Fem|Number=Plur	5	dobj	_	_
7	como	como	ADP	<com>|PRP|@N<	_	8	case	_	_
8	Sonia	Sonia	PROPN	<first-cjt>|PROP|F|S|@P<	Gender=Fem|Number=Sing	6	nmod	_	MWE:Sonia=Braga
9	Braga	Braga	PROPN	PROP|@N<	Number=Sing	8	name	_	_
10	e	e	CONJ	KC|@CO	_	8	cc	_	_
11	Andy	Andy	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	6	nmod	_	MWE:Andy=Garcia
12	Garcia	Garcia	PROPN	PROP|@N<	Number=Sing	11	name	_	_
13	.	.	PUNCT	PU|@PU	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

7780 nodes (3%) are attached to their parents as `cc`.

7386 instances of `cc` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.01413881748072.

The following 26 pairs of parts of speech are connected with `cc`: [pt-pos/VERB]()-[pt-pos/CONJ]() (2933; 38% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (2653; 34% instances), [pt-pos/PROPN]()-[pt-pos/CONJ]() (1392; 18% instances), [pt-pos/ADJ]()-[pt-pos/CONJ]() (411; 5% instances), [pt-pos/NUM]()-[pt-pos/CONJ]() (178; 2% instances), [pt-pos/PRON]()-[pt-pos/CONJ]() (67; 1% instances), [pt-pos/ADV]()-[pt-pos/CONJ]() (37; 0% instances), [pt-pos/PART]()-[pt-pos/CONJ]() (22; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (19; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (17; 0% instances), [pt-pos/DET]()-[pt-pos/CONJ]() (8; 0% instances), [pt-pos/X]()-[pt-pos/CONJ]() (7; 0% instances), [pt-pos/AUX]()-[pt-pos/CONJ]() (5; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/ADP]()-[pt-pos/CONJ]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/PROPN]()-[pt-pos/X]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 cc	color:blue
1	Dois	_	NUM	NUM	NumType=Card	2	nummod	_	_
2	anos	_	NOUN	NOUN	_	3	nmod	_	_
3	depois	_	ADV	ADV	_	7	advmod	_	_
4	,	_	PUNCT	.	_	3	punct	_	_
5	ele	_	PRON	PRON	_	7	nsubjpass	_	_
6	foi	_	AUX	AUX	_	7	auxpass	_	_
7	preso	_	VERB	VERB	_	0	root	_	_
8	--	_	PUNCT	.	_	7	punct	_	_
9	e	_	CONJ	CONJ	_	7	cc	_	_
10	eu	_	PRON	PRON	_	13	nsubj	_	_
11	nunca	_	ADV	ADV	_	13	advmod	_	_
12	o	_	PRON	PRON	_	13	dobj	_	_
13	vi	_	VERB	VERB	_	7	conj	_	_
14	novamente	_	ADV	ADV	_	13	advmod	_	_
15	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 cc	color:blue
1	Foi	_	VERB	VERB	_	4	cop	_	_
2	um	_	DET	DET	_	4	det	_	_
3	grande	_	ADJ	ADJ	_	4	amod	_	_
4	jogador	_	NOUN	NOUN	_	0	root	_	_
5	,	_	PUNCT	.	_	4	punct	_	_
6	mas	_	CONJ	CONJ	_	4	cc	_	_
7	o	_	DET	DET	_	8	det	_	_
8	que	_	PRON	PRON	_	9	nsubj	_	_
9	ganhou	_	VERB	VERB	_	4	conj	_	_
10	como	_	ADP	ADP	_	11	case	_	_
11	técnico	_	NOUN	NOUN	_	9	nmod	_	_
12	?	_	PUNCT	.	_	4	punct	_	_
13	"	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 cc	color:blue
1	Com	_	ADP	ADP	_	3	case	_	_
2	menor	_	ADJ	ADJ	_	3	amod	_	_
3	índice	_	NOUN	NOUN	_	5	nmod	_	_
4	,	_	PUNCT	.	_	3	punct	_	_
5	Piauí	_	PROPN	PNOUN	_	0	root	_	_
6	,	_	PUNCT	.	_	5	punct	_	_
7	Santa	_	PROPN	PNOUN	_	5	conj	_	_
8	Catarina	_	PROPN	PNOUN	_	7	name	_	_
9	e	_	CONJ	CONJ	_	5	cc	_	_
10	Alagoas	_	PROPN	PNOUN	_	5	conj	_	_
11	.	_	PUNCT	.	_	5	punct	_	_

~~~


