

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

8 nodes (0%) are attached to their parents as `csubjpass`.

7 instances of `csubjpass` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.125.

The following 1 pairs of parts of speech are connected with `csubjpass`: [pt-pos/VERB]()-[pt-pos/VERB]() (8; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 csubjpass	color:blue
1	Cerca	cerca	ADV	adv	_	4	advmod	_	MWE=Cerca_de|MWEPOS=ADV
2	de	de	ADP	ADP	AdpType=Prep	1	mwe	_	_
3	30	30	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	4	nummod	_	_
4	feridos	ferir	VERB	v-pcp|<n>|M|P	Gender=Masc|Number=Plur|VerbForm=Part	7	csubjpass	_	_
5	leves	leve	ADJ	adj|M|P	Gender=Masc|Number=Plur	4	amod	_	_
6	foram	ser	VERB	v-fin|PS/MQP|3P|IND	Mood=Ind|Number=Plur|Person=3|Tense=Imp,Pqp|VerbForm=Fin	7	auxpass	_	_
7	atendidos	atender	VERB	v-pcp|M|P	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
8	em	em	ADP	prp|<sam->	AdpType=Prep	10	case	_	_
9	a	o	DET	art|<-sam>|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Santa	Santa	PROPN	prop|F|S	_	7	nmod	_	MWE=Santa_Casa|MWEPOS=PROPN
11	Casa	Casa	PROPN	PROPN	_	10	name	_	_
12	de	de	ADP	prp|<sam->	AdpType=Prep	14	case	_	_
13	a	o	DET	art|<-sam>|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	cidade	cidade	NOUN	n|F|S	Gender=Fem|Number=Sing	10	nmod	_	_
15	.	.	PUNCT	punc	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

8 nodes (0%) are attached to their parents as `csubjpass`.

6 instances of `csubjpass` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.125.

The following 2 pairs of parts of speech are connected with `csubjpass`: [pt-pos/VERB]()-[pt-pos/VERB]() (7; 88% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 13% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubjpass	color:blue
1	Enfim	_	ADV	ADV	_	4	advmod	_	_
2	,	_	PUNCT	.	_	1	punct	_	_
3	é	_	AUX	AUX	_	4	auxpass	_	_
4	esperado	_	VERB	VERB	_	0	root	_	_
5	para	_	ADP	ADP	_	7	case	_	_
6	um	_	DET	DET	_	7	det	_	_
7	caminhão	_	NOUN	NOUN	_	4	nmod	_	_
8	dirigir	_	VERB	VERB	_	4	csubjpass	_	_
9	cerca	_	ADV	ADV	_	12	advmod	_	_
10	de	_	ADP	ADP	_	9	case	_	_
11	1,2	_	NUM	NUM	NumType=Card	12	nummod	_	_
12	milhões	_	NUM	NUM	NumType=Card	14	nummod	_	_
13	de	_	ADP	ADP	_	14	case	_	_
14	km	_	NOUN	NOUN	_	8	nmod	_	_
15	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubjpass	color:blue
1	"	_	PUNCT	.	_	2	punct	_	_
2	Kiss	_	PROPN	PNOUN	_	8	csubjpass	_	_
3	the	_	PROPN	PNOUN	_	4	det	_	_
4	Stars	_	PROPN	PNOUN	_	2	dobj	_	_
5	"	_	PUNCT	.	_	2	punct	_	_
6	foi	_	AUX	AUX	_	8	auxpass	_	_
7	também	_	ADV	ADV	_	8	advmod	_	_
8	comentada	_	VERB	VERB	_	0	root	_	_
9	na	_	ADP	ADP	_	10	case	_	_
10	crítica	_	NOUN	NOUN	_	8	nmod	_	_
11	de	_	ADP	ADP	_	12	case	_	_
12	Fraser	_	PROPN	PNOUN	_	10	nmod	_	_
13	McAlpine	_	PROPN	PNOUN	_	12	name	_	_
14	,	_	PUNCT	.	_	16	punct	_	_
15	da	_	ADP	ADP	_	16	case	_	_
16	rede	_	NOUN	NOUN	_	12	nmod	_	_
17	BBC	_	PROPN	PNOUN	_	16	appos	_	_
18	,	_	PUNCT	.	_	16	punct	_	_
19	ao	_	ADP	ADP	_	20	case	_	_
20	Young	_	PROPN	PNOUN	_	10	nmod	_	_
21	Foolish	_	PROPN	PNOUN	_	20	conj	_	_
22	Happy	_	PROPN	PNOUN	_	20	conj	_	_
23	,	_	PUNCT	.	_	28	punct	_	_
24	na	_	ADP	ADP	_	25	case	_	_
25	qual	_	PRON	PRON	_	28	nmod	_	_
26	o	_	DET	DET	_	27	det	_	_
27	redator	_	NOUN	NOUN	_	28	nsubj	_	_
28	comparou	_	VERB	VERB	_	10	acl:relcl	_	_
29	-	_	PUNCT	.	_	28	punct	_	_
30	a	_	PRON	PRON	_	28	dobj	_	_
31	com	_	ADP	ADP	_	33	case	_	_
32	"	_	PUNCT	.	_	33	punct	_	_
33	Firework	_	PROPN	PNOUN	_	28	nmod	_	_
34	"	_	PUNCT	.	_	33	punct	_	_
35	.	_	PUNCT	.	_	8	punct	_	_

~~~


