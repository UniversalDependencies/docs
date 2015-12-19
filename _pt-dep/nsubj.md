---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

This document is a placeholder for the language-specific documentation
for `nsubj`.

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

12096 nodes (6%) are attached to their parents as `nsubj`.

10395 instances of `nsubj` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.47065145502645.

The following 53 pairs of parts of speech are connected with `nsubj`: [pt-pos/VERB]()-[pt-pos/NOUN]() (5149; 43% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (2935; 24% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (2100; 17% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (375; 3% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (355; 3% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (151; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (145; 1% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (118; 1% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (108; 1% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (103; 1% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (84; 1% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (83; 1% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (60; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (40; 0% instances), [pt-pos/ADV]()-[pt-pos/PROPN]() (33; 0% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (30; 0% instances), [pt-pos/SCONJ]()-[pt-pos/NOUN]() (30; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (18; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (18; 0% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (14; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (13; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (12; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (10; 0% instances), [pt-pos/SCONJ]()-[pt-pos/PRON]() (10; 0% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (10; 0% instances), [pt-pos/DET]()-[pt-pos/PRON]() (9; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (8; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (8; 0% instances), [pt-pos/SYM]()-[pt-pos/NOUN]() (8; 0% instances), [pt-pos/NUM]()-[pt-pos/PRON]() (6; 0% instances), [pt-pos/SCONJ]()-[pt-pos/PROPN]() (6; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (5; 0% instances), [pt-pos/ADJ]()-[pt-pos/NUM]() (4; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (4; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/ADV]()-[pt-pos/NUM]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/NUM]() (3; 0% instances), [pt-pos/AUX]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/SCONJ]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/SYM]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/INTJ]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (1; 0% instances).


~~~ conllu
1	Audiência	audiência	NOUN	n|F|S	Gender=Fem|Number=Sing	8	nsubj	_	_
2	em	em	ADP	prp|<sam->	AdpType=Prep	4	case	_	_
3	a	o	DET	art|<-sam>|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Justiça	justiça	NOUN	n|<prop>|F|S	Gender=Fem|Number=Sing	1	nmod	_	_
5	de	de	ADP	prp|<sam->	AdpType=Prep	7	case	_	_
6	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Pará	Pará	PROPN	prop|M|S	Gender=Masc|Number=Sing	4	nmod	_	_
8	discute	discutir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	diploma	diploma	NOUN	n|M|S	Gender=Masc|Number=Sing	8	dobj	_	_

~~~


~~~ conllu
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
1	PF	PF	PROPN	prop|F|S	Gender=Fem|Number=Sing	2	nsubj	_	_
2	prende	prender	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dois	dois	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	2	dobj	_	_
4	por	por	ADP	prp	AdpType=Prep	5	mark	_	_
5	cobrar	cobrar	VERB	v-inf	VerbForm=Inf	2	advcl	_	_
6	ágio	ágio	NOUN	n|M|S	Gender=Masc|Number=Sing	5	dobj	_	_

~~~


