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
Average distance between parent and child is 1.45660719685516.

The following 12 pairs of parts of speech are connected with `nummod`: [pt-pos/NOUN]()-[pt-pos/NUM]() (2757; 83% instances), [pt-pos/SYM]()-[pt-pos/NUM]() (318; 10% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (149; 5% instances), [pt-pos/ADJ]()-[pt-pos/NUM]() (36; 1% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (15; 0% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (13; 0% instances), [pt-pos/DET]()-[pt-pos/NUM]() (12; 0% instances), [pt-pos/ADV]()-[pt-pos/NUM]() (3; 0% instances), [pt-pos/ADP]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (1; 0% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	E	e	CONJ	conj-c	_	4	cc	_	_
2	alguns	algum	DET	pron-det|<quant>|M|P	Gender=Masc|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot	3	nsubj	_	_
3	vão	ir	VERB	v-fin|PR|3P|IND	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ter	ter	VERB	v-inf	VerbForm=Inf	3	xcomp	_	_
5	de	de	ADP	prp	AdpType=Prep	7	case	_	_
6	30	30	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	7	nummod	_	_
7	$%	%	SYM	n|M|P	Gender=Masc|Number=Plur	4	dobj	_	_
8	»	»	PUNCT	punc	_	3	punct	_	_
9	.	.	PUNCT	punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nummod	color:blue
1	Pedro	Pedro	PROPN	prop|M|S	Gender=Masc|Number=Sing	0	root	_	_
2	Ivo	Ivo	PROPN	PROPN	Gender=Masc|Number=Sing	1	name	_	_
3	,	,	PUNCT	punc	_	1	punct	_	_
4	63	63	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	1	nummod	_	_
5	,	,	PUNCT	punc	_	1	punct	_	_
6	tel.	tel.	NOUN	n|M|S	Gender=Masc|Number=Sing	1	nmod	_	_
7	289-3609	289-3609	NUM	num|M|P	Gender=Masc|Number=Plur	6	nummod	_	_
8	)	)	PUNCT	punc	_	1	punct	_	_

~~~


