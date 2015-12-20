---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
---

This document is a placeholder for the language-specific documentation
for `nummod`.

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

3307 nodes (2%) are attached to their parents as `nummod`.

2449 instances of `nummod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41941336558815.

The following 13 pairs of parts of speech are connected with `nummod`: [pt-pos/NOUN]()-[pt-pos/NUM]() (2893; 87% instances), [pt-pos/SYM]()-[pt-pos/NUM]() (181; 5% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (150; 5% instances), [pt-pos/ADJ]()-[pt-pos/NUM]() (36; 1% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (15; 0% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (13; 0% instances), [pt-pos/PRON]()-[pt-pos/NUM]() (7; 0% instances), [pt-pos/DET]()-[pt-pos/NUM]() (5; 0% instances), [pt-pos/ADV]()-[pt-pos/NUM]() (3; 0% instances), [pt-pos/ADP]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Ele	ele	PRON	pron-pers|M|3S|NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	estava	estar	VERB	v-fin|IMPF|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	acompanhados	acompanhar	VERB	v-pcp|M|P	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
4	de	de	ADP	prp	AdpType=Prep	6	case	_	_
5	três	três	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	6	nummod	_	_
6	agentes	agente	NOUN	n|M|P	Gender=Masc|Number=Plur	3	dobj	_	_
7	de	de	ADP	prp|<sam->	AdpType=Prep	9	case	_	_
8	a	o	DET	art|<-sam>|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	PF	PF	PROPN	prop|F|S	Gender=Fem|Number=Sing	6	nmod	_	_
10	.	.	PUNCT	punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	BRIZOLA	BRIZOLA	PROPN	prop|M|S	Gender=Masc|Number=Sing	4	nsubj	_	_
2	É	ser	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	3º	3º	ADJ	adj|<NUM-ord>|<n>|<Eg>|M|S	Gender=Masc|Number=Sing|NumType=Ord	0	root	_	_
5	Em	em	ADP	prp|<sam->	AdpType=Prep	7	case	_	_
6	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Rio	Rio	PROPN	prop|M|S	Gender=Masc|Number=Sing	4	nmod	_	_
8	,	,	PUNCT	punc	_	4	punct	_	_
9	com	com	ADP	prp	AdpType=Prep	11	case	_	_
10	13	13	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	11	nummod	_	_
11	%	%	SYM	n|M|P	Gender=Masc|Number=Plur	4	advmod	_	_
12	.	.	PUNCT	punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nummod	color:blue
1	Pedro_Ivo	Pedro_Ivo	PROPN	prop|M|S	Gender=Masc|Number=Sing	0	root	_	_
2	,	,	PUNCT	punc	_	1	punct	_	_
3	63	63	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	1	nummod	_	_
4	,	,	PUNCT	punc	_	1	punct	_	_
5	tel.	tel.	NOUN	n|M|S	Gender=Masc|Number=Sing	1	nmod	_	_
6	289-3609	289-3609	NUM	num|M|P	Gender=Masc|Number=Plur	5	nummod	_	_
7	)	)	PUNCT	punc	_	1	punct	_	_

~~~


