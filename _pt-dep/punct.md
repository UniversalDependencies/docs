---
layout: relation
title: 'punct'
shortdef: 'punctuation'
---

This document is a placeholder for the language-specific documentation
for `punct`.

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

29943 nodes (14%) are attached to their parents as `punct`.

23511 instances of `punct` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.38065658083692.

The following 14 pairs of parts of speech are connected with `punct`: [pt-pos/VERB]()-[pt-pos/PUNCT]() (15223; 51% instances), [pt-pos/NOUN]()-[pt-pos/PUNCT]() (8191; 27% instances), [pt-pos/PROPN]()-[pt-pos/PUNCT]() (4322; 14% instances), [pt-pos/ADJ]()-[pt-pos/PUNCT]() (1331; 4% instances), [pt-pos/PRON]()-[pt-pos/PUNCT]() (342; 1% instances), [pt-pos/ADV]()-[pt-pos/PUNCT]() (233; 1% instances), [pt-pos/NUM]()-[pt-pos/PUNCT]() (181; 1% instances), [pt-pos/SYM]()-[pt-pos/PUNCT]() (25; 0% instances), [pt-pos/INTJ]()-[pt-pos/PUNCT]() (23; 0% instances), [pt-pos/DET]()-[pt-pos/PUNCT]() (18; 0% instances), [pt-pos/CONJ]()-[pt-pos/PUNCT]() (17; 0% instances), [pt-pos/AUX]()-[pt-pos/PUNCT]() (14; 0% instances), [pt-pos/SCONJ]()-[pt-pos/PUNCT]() (14; 0% instances), [pt-pos/ADP]()-[pt-pos/PUNCT]() (9; 0% instances).


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
1	Um	um	NUM	num|<card>|M|S	Gender=Masc|Number=Sing|NumType=Card	6	nsubj	_	_
2	de	de	ADP	prp|<sam->	AdpType=Prep	3	case	_	_
3	eles	eles	PRON	pron-pers|<-sam>|M|3P|NOM/PIV	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	1	nmod	_	_
4	era	ser	VERB	v-fin|IMPF|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
5	seu	seu	DET	pron-det|<poss|3S>|M|S	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	filho	filho	NOUN	n|M|S	Gender=Masc|Number=Sing	0	root	_	_
7	,	,	PUNCT	punc	_	6	punct	_	_
8	Sérgio_Fioravanti	Sérgio_Fioravanti	PROPN	prop|M|S	Gender=Masc|Number=Sing	6	appos	_	_
9	.	.	PUNCT	punc	_	6	punct	_	_

~~~


~~~ conllu
1	Pedro_Ivo	Pedro_Ivo	PROPN	prop|M|S	Gender=Masc|Number=Sing	0	root	_	_
2	,	,	PUNCT	punc	_	1	punct	_	_
3	63	63	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	1	nummod	_	_
4	,	,	PUNCT	punc	_	1	punct	_	_
5	tel.	tel.	NOUN	n|M|S	Gender=Masc|Number=Sing	1	nmod	_	_
6	289-3609	289-3609	NUM	num|M|P	Gender=Masc|Number=Plur	5	nummod	_	_
7	)	)	PUNCT	punc	_	1	punct	_	_

~~~


