

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is a language-specific subtype of [advmod]().

117 nodes (0%) are attached to their parents as `advmod:emph`.

114 instances of `advmod:emph` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.83760683760684.

The following 15 pairs of parts of speech are connected with `advmod:emph`: [pt-pos/NOUN]()-[pt-pos/ADV]() (68; 58% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (20; 17% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (10; 9% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (3; 3% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (3; 3% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (2; 2% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (2; 2% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (2; 2% instances), [pt-pos/ADP]()-[pt-pos/ADV]() (1; 1% instances), [pt-pos/DET]()-[pt-pos/ADV]() (1; 1% instances), [pt-pos/NUM]()-[pt-pos/ADV]() (1; 1% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 1% instances), [pt-pos/PRON]()-[pt-pos/DET]() (1; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (1; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 advmod:emph	color:blue
1	Um	um	NUM	num|<card>|M|S	Gender=Masc|Number=Sing|NumType=Card	2	nummod	_	_
2	talento	talento	NOUN	n|M|S	Gender=Masc|Number=Sing	0	root	_	_
3	que	que	PRON	pron-indp|<rel>|M|S	Gender=Masc|Number=Sing|PronType=Rel	8	nsubj	_	_
4	,	,	PUNCT	punc	_	8	punct	_	_
5	por	por	ADP	prp	AdpType=Prep	6	case	_	_
6	norma	norma	NOUN	n|F|S	Gender=Fem|Number=Sing	8	nmod	_	_
7	,	,	PUNCT	punc	_	8	punct	_	_
8	cabe	caber	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
9	apenas	apenas	ADV	adv	_	12	advmod:emph	_	_
10	a	a	ADP	prp|<sam->	AdpType=Prep	12	case	_	_
11	os	o	DET	art|<-sam>|<artd>|M|P	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	poetas	poeta	NOUN	n|M|P	Gender=Masc|Number=Plur	8	dobj	_	_
13	.	.	PUNCT	punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advmod:emph	color:blue
1	A	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	revista	revista	NOUN	n|F|S	Gender=Fem|Number=Sing	5	nsubj	_	_
3	começou	começar	AUX	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux	_	_
4	a	a	ADP	prp	AdpType=Prep	5	mark	_	_
5	ser	ser	VERB	v-inf	VerbForm=Inf	0	root	_	_
6	feita	fazer	VERB	v-pcp|F|S	Gender=Fem|Number=Sing|VerbForm=Part	5	ccomp	_	_
7	exclusivamente	exclusivamente	ADV	adv	_	6	advmod:emph	_	_
8	por	por	ADP	prp	AdpType=Prep	7	case	_	_
9	Lourdes	Lourdes	PROPN	prop|F|S	_	7	cc	_	_
10	Castro	Castro	PROPN	PROPN	_	9	name	_	_
11	e	e	CONJ	conj-c|<co-prparg>	_	9	cc	_	_
12	René	René	PROPN	prop|M|S	_	9	conj	_	_
13	Bertholo	Bertholo	PROPN	PROPN	_	12	name	_	_
14	.	.	PUNCT	punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 advmod:emph	color:blue
1	Muita	muito	PRON	pron-det|<quant>|F|S	Gender=Fem|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot	6	nsubj	_	_
2	de	de	ADP	prp|<sam->	AdpType=Prep	4	case	_	_
3	essa	esse	DET	pron-det|<-sam>|<dem>|F|S	Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	desertificação	desertificação	NOUN	n|F|S	Gender=Fem|Number=Sing	1	nmod	_	_
5	tem	ter	AUX	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	sido	ser	VERB	v-pcp	VerbForm=Part	0	root	_	_
7	disfarçada	disfarçar	VERB	v-pcp|F|S	Gender=Fem|Number=Sing|VerbForm=Part	6	ccomp	_	_
8	com	com	ADP	prp	AdpType=Prep	10	case	_	_
9	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	uso	uso	NOUN	n|M|S	Gender=Masc|Number=Sing	7	nmod	_	_
11	crescente	crescente	ADJ	adj|M|S	Gender=Masc|Number=Sing	10	amod	_	_
12	de	de	ADP	prp	AdpType=Prep	13	case	_	_
13	adubos	adubo	NOUN	n|M|P	Gender=Masc|Number=Plur	10	nmod	_	_
14	,	,	PUNCT	punc	_	10	punct	_	_
15	não	não	ADV	adv	_	16	advmod	_	_
16	tanto	tanto	ADV	adv|<quant>|<KOMP>	Degree=Cmp|NumType=Card|PronType=Ind,Neg,Tot	18	advmod:emph	_	_
17	em	em	ADP	prp	AdpType=Prep	18	case	_	_
18	África	África	PROPN	prop|F|S	Gender=Fem|Number=Sing	10	nmod	_	_
19	como	como	ADV	adv|<rel>|<prp>	PronType=Rel	18	advmod	_	_
20	em	em	ADP	prp|<sam->	AdpType=Prep	22	case	_	_
21	a	o	DET	art|<-sam>|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	Índia	Índia	PROPN	prop|F|S	Gender=Fem|Number=Sing	19	cc	_	_
23	e	e	CONJ	conj-c	_	22	cc	_	_
24	em	em	ADP	prp|<sam->	AdpType=Prep	26	case	_	_
25	outros	outro	DET	pron-det|<-sam>|<diff>|M|P	Gender=Masc|Number=Plur	26	det	_	_
26	sítios	sítio	NOUN	n|M|P	Gender=Masc|Number=Plur	22	conj	_	_
27	.	.	PUNCT	punc	_	6	punct	_	_

~~~


