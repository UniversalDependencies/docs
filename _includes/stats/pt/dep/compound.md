

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

767 nodes (0%) are attached to their parents as `compound`.

663 instances of `compound` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.97392438070404.

The following 8 pairs of parts of speech are connected with `compound`: [pt-pos/NOUN]()-[pt-pos/NOUN]() (613; 80% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (133; 17% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (7; 1% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (7; 1% instances), [pt-pos/NOUN]()-[pt-pos/PUNCT]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 compound	color:blue
1	Paulo	Paulo	PROPN	prop|M|S	_	8	nsubj	_	_
2	Pereira	Pereira	PROPN	PROPN	_	1	name	_	_
3	,	,	PUNCT	punc	_	1	punct	_	_
4	vice-presidente	vice-presidente	NOUN	n|M|S	_	1	nmod	_	_
5	do	do	ADP	ADP	AdpType=Prep|Gender=Masc|Number=Sing	6	case	_	_
6	Ippar	Ippar	NOUN	NOUN	_	4	compound	_	_
7	,	,	PUNCT	punc	_	1	punct	_	_
8	acrescenta	acrescentar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	:	:	PUNCT	punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 compound	color:blue
1	Lisboa	Lisboa	PROPN	prop|F|S	Gender=Fem|Number=Sing	0	root	_	_
2	,	,	PUNCT	punc	_	1	punct	_	_
3	18	18	NUM	num|<card>|M|S/P	Gender=Masc|NumType=Card	1	nummod	_	_
4	de	de	ADP	prp	AdpType=Prep	5	case	_	_
5	Fevereiro	fevereiro	NOUN	n|<prop>|M|S	Gender=Masc|Number=Sing	3	nmod	_	_
6	de	de	ADP	prp	AdpType=Prep	7	case	_	_
7	1992	1992	NUM	num|<card>|M|S	Gender=Masc|Number=Sing|NumType=Card	3	compound	_	_
8	.	.	PUNCT	punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound	color:blue
1	Formada	formar	VERB	v-pcp|F|S	Gender=Fem|Number=Sing|VerbForm=Part	16	advcl	_	_
2	por	por	ADP	prp	AdpType=Prep	3	case	_	_
3	técnicos	técnico	NOUN	n|M|P	Gender=Masc|Number=Plur	1	dobj	_	_
4	de	de	ADP	prp|<sam->	AdpType=Prep	6	case	_	_
5	a	o	DET	art|<-sam>|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Fazenda	fazenda	NOUN	n|<prop>|F|S	Gender=Fem|Number=Sing	3	cc	_	_
7	e	e	CONJ	conj-c|<co-postnom>	_	6	cc	_	_
8	de	de	ADP	prp|<sam->	AdpType=Prep	10	case	_	_
9	as	o	DET	art|<-sam>|<artd>|F|P	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	Minas	Minas	NOUN	n|<prop>|F|P	_	6	conj	_	_
11	e	e	CONJ	CONJ	Gender=Fem|Number=Plur	10	compound	_	_
12	Energia	Energia	NOUN	NOUN	_	10	compound	_	_
13	,	,	PUNCT	punc	_	16	punct	_	_
14	a	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	comissão	comissão	NOUN	n|F|S	Gender=Fem|Number=Sing	16	nsubj	_	_
16	tem	ter	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
17	prazo	prazo	NOUN	n|M|S	Gender=Masc|Number=Sing	16	dobj	_	_
18	de	de	ADP	prp	AdpType=Prep	20	case	_	_
19	60	60	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	20	nummod	_	_
20	dias	dia	NOUN	n|M|P	Gender=Masc|Number=Plur	17	nmod	_	_
21	para	para	ADP	prp	AdpType=Prep	22	mark	_	_
22	conluir	conluir	VERB	v-inf	VerbForm=Inf	17	acl	_	_
23	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	trabalho	trabalho	NOUN	n|M|S	Gender=Masc|Number=Sing	22	dobj	_	_
25	.	.	PUNCT	punc	_	16	punct	_	_

~~~


