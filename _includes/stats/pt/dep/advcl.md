

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

2810 nodes (1%) are attached to their parents as `advcl`.

2111 instances of `advcl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.1711743772242.

The following 31 pairs of parts of speech are connected with `advcl`: [pt-pos/VERB]()-[pt-pos/VERB]() (2140; 76% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (215; 8% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (122; 4% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (108; 4% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (48; 2% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (46; 2% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (23; 1% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (21; 1% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (10; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (10; 0% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (9; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (7; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (7; 0% instances), [pt-pos/CONJ]()-[pt-pos/VERB]() (6; 0% instances), [pt-pos/AUX]()-[pt-pos/VERB]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (5; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (4; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/AUX]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (1; 0% instances).


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
2	energia	energia	NOUN	n|F|S	Gender=Fem|Number=Sing	4	nsubj	_	_
3	nuclear	nuclear	ADJ	adj|F|S	Gender=Fem|Number=Sing	2	amod	_	_
4	é	ser	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	usada	usar	VERB	v-pcp|F|S	Gender=Fem|Number=Sing|VerbForm=Part	4	ccomp	_	_
6	só	só	ADV	adv	_	5	advmod	_	_
7	para	para	ADP	prp	AdpType=Prep	6	case	_	_
8	movimentar	movimentar	VERB	v-inf	VerbForm=Inf	6	advcl	_	_
9	a	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	embarcação	embarcação	NOUN	n|F|S	Gender=Fem|Number=Sing	8	dobj	_	_
11	.	.	PUNCT	punc	_	4	punct	_	_

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


