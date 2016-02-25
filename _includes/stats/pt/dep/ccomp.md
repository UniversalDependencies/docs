

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

3156 nodes (1%) are attached to their parents as `ccomp`.

2854 instances of `ccomp` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.30766793409379.

The following 17 pairs of parts of speech are connected with `ccomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (2816; 89% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (150; 5% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (141; 4% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (16; 1% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (7; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (5; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/AUX]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (3; 0% instances), [pt-pos/CONJ]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	bombeiro	bombeiro	NOUN	n|M|S	Gender=Masc|Number=Sing	3	nsubj	_	_
3	suspeita	suspeitar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	conj-s	_	7	mark	_	_
5	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	golfinho	golfinho	NOUN	n|M|S	Gender=Masc|Number=Sing	7	nsubj	_	_
7	tenha	ter	VERB	v-fin|PR|3S|SUBJ	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
8	morrido	morrer	VERB	v-pcp	VerbForm=Part	7	ccomp	_	_
9	afogado	afogar	VERB	v-pcp|M|S	Gender=Masc|Number=Sing|VerbForm=Part	8	advcl	_	_
10	.	.	PUNCT	punc	_	3	punct	_	_

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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Achei	achar	VERB	v-fin|PS|1S|IND	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
2	que	que	SCONJ	conj-s	_	4	mark	_	_
3	era	ser	VERB	v-fin|IMPF|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
4	importante	importante	ADJ	adj|M|S	Gender=Masc|Number=Sing	1	ccomp	_	_
5	assumir	assumir	VERB	v-inf	VerbForm=Inf	4	csubj	_	_
6	uma	um	DET	art|<arti>|F|S	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	postura	postura	NOUN	n|F|S	Gender=Fem|Number=Sing	5	dobj	_	_
8	pessoal	pessoal	ADJ	adj|F|S	Gender=Fem|Number=Sing	7	amod	_	_
9	.	.	PUNCT	punc	_	1	punct	_	_

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


