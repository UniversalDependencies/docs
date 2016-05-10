

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

586 nodes (0%) are attached to their parents as `appos`.

583 instances of `appos` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.50170648464164.

The following 32 pairs of parts of speech are connected with `appos`: [pt-pos/NOUN]()-[pt-pos/PROPN]() (317; 54% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (106; 18% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (39; 7% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (21; 4% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (13; 2% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (12; 2% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (11; 2% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (7; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (6; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (6; 1% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (5; 1% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (5; 1% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (4; 1% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (4; 1% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (3; 1% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (3; 1% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (2; 0% instances), [pt-pos/NUM]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 appos	color:blue
1	Um	um	NUM	num|<card>|M|S	Gender=Masc|Number=Sing|NumType=Card	6	nsubj	_	_
2	de	de	ADP	prp|<sam->	AdpType=Prep	3	case	_	_
3	eles	eles	PRON	pron-pers|<-sam>|M|3P|NOM/PIV	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	1	nmod	_	_
4	era	ser	VERB	v-fin|IMPF|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
5	seu	seu	DET	pron-det|<poss|3S>|M|S	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	filho	filho	NOUN	n|M|S	Gender=Masc|Number=Sing	0	root	_	_
7	,	,	PUNCT	punc	_	6	punct	_	_
8	Sérgio	Sérgio	PROPN	prop|M|S	_	6	appos	_	MWE=Sérgio_Fioravanti|MWEPOS=PROPN
9	Fioravanti	Fioravanti	PROPN	PROPN	_	8	name	_	_
10	.	.	PUNCT	punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Vocação	vocação	NOUN	n|F|S	Gender=Fem|Number=Sing	0	root	_	_
2	:	:	PUNCT	punc	_	1	punct	_	_
3	albergue	albergue	NOUN	n|M|S	Gender=Masc|Number=Sing	1	appos	_	_
4	político	político	ADJ	adj|M|S	Gender=Masc|Number=Sing	3	amod	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 19 appos	color:blue
1	Por	por	ADP	prp|<sam->	AdpType=Prep	3	case	_	_
2	as	o	DET	art|<-sam>|<artd>|P	Definite=Def|Number=Plur|PronType=Art	3	det	_	_
3	rádios	rádio	NOUN	n|M|P	Gender=Masc|Number=Plur	7	nmod	_	_
4	,	,	PUNCT	punc	_	7	punct	_	_
5	entretanto	entretanto	ADV	adv|<kc>	_	7	advmod	_	_
6	,	,	PUNCT	punc	_	7	punct	_	_
7	roda	rodar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	já	já	ADV	adv	_	7	advmod	_	_
9	«	«	PUNCT	punc	_	19	punct	_	_
10	Entre	Entre	ADP	prop|M/F|S	AdpType=Prep	19	case	_	MWE=Entre_o_Céu_e_o_Medo|MWEPOS=PROPN
11	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Céu	Céu	PROPN	PROPN	_	7	nsubj	_	_
13	e	e	CONJ	CONJ	_	12	cc	_	_
14	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	Medo	Medo	PROPN	PROPN	_	12	conj	_	_
16	»	»	PUNCT	punc	_	19	punct	_	_
17	,	,	PUNCT	punc	_	19	punct	_	_
18	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	single	single	NOUN	n|M|S	Gender=Masc|Number=Sing	12	appos	_	_
20	promocional	promocional	ADJ	adj|M|S	Gender=Masc|Number=Sing	19	amod	_	_
21	.	.	PUNCT	punc	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

6082 nodes (2%) are attached to their parents as `appos`.

6074 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.40825386386057.

The following 41 pairs of parts of speech are connected with `appos`: [pt-pos/NOUN]()-[pt-pos/PROPN]() (2511; 41% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1229; 20% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (767; 13% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (576; 9% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (284; 5% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (274; 5% instances), [pt-pos/PART]()-[pt-pos/PROPN]() (90; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (84; 1% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (38; 1% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (38; 1% instances), [pt-pos/NOUN]()-[pt-pos/X]() (30; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (22; 0% instances), [pt-pos/PROPN]()-[pt-pos/PART]() (18; 0% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (17; 0% instances), [pt-pos/NOUN]()-[pt-pos/PART]() (15; 0% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (11; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (9; 0% instances), [pt-pos/PROPN]()-[pt-pos/X]() (9; 0% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (6; 0% instances), [pt-pos/ADP]()-[pt-pos/PROPN]() (6; 0% instances), [pt-pos/PART]()-[pt-pos/NOUN]() (6; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (6; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (6; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/NUM]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/X]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/X]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PUNCT]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/X]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/X]()-[pt-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	As	_	DET	DET	_	2	det	_	_
2	informações	_	NOUN	NOUN	_	3	nsubj	_	_
3	são	_	VERB	VERB	_	0	root	_	_
4	do	_	ADP	ADP	_	5	case	_	_
5	jornal	_	NOUN	NOUN	_	3	nmod	_	_
6	O	_	DET	DET	_	7	det	_	_
7	Estado	_	PROPN	PNOUN	_	5	appos	_	_
8	de	_	ADP	ADP	_	9	case	_	_
9	S.	_	PROPN	PNOUN	_	7	nmod	_	_
10	Paulo	_	PROPN	PNOUN	_	9	name	_	_
11	.	_	PUNCT	.	_	3	punct	_	_

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
7	(	_	PUNCT	.	_	8	punct	_	_
8	UFMT	_	PROPN	PNOUN	_	2	appos	_	_
9	)	_	PUNCT	.	_	8	punct	_	_
10	já	_	ADV	ADV	_	11	advmod	_	_
11	integra	_	VERB	VERB	_	0	root	_	_
12	o	_	DET	DET	_	13	det	_	_
13	Sisu	_	PROPN	PNOUN	_	11	dobj	_	_
14	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	Marca	_	VERB	VERB	_	0	root	_	_
2	e	_	CONJ	CONJ	_	1	cc	_	_
3	embalagem	_	NOUN	NOUN	_	1	conj	_	_
4	:	_	PUNCT	.	_	1	punct	_	_
5	administração	_	NOUN	NOUN	_	1	parataxis	_	_
6	e	_	CONJ	CONJ	_	5	cc	_	_
7	conceito	_	NOUN	NOUN	_	5	conj	_	_
8	produto	_	NOUN	NOUN	_	7	appos	_	_
9	.	_	PUNCT	.	_	1	punct	_	_

~~~


