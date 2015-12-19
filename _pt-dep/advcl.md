---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
---

This document is a placeholder for the language-specific documentation
for `advcl`.

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

2949 nodes (1%) are attached to their parents as `advcl`.

2221 instances of `advcl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.75720583248559.

The following 30 pairs of parts of speech are connected with `advcl`: [pt-pos/VERB]()-[pt-pos/VERB]() (2232; 76% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (230; 8% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (127; 4% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (116; 4% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (54; 2% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (51; 2% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (24; 1% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (22; 1% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (11; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (11; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (8; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (8; 0% instances), [pt-pos/AUX]()-[pt-pos/VERB]() (6; 0% instances), [pt-pos/CONJ]()-[pt-pos/VERB]() (6; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (6; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (6; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (1; 0% instances).


~~~ conllu
1	PF	PF	PROPN	prop|F|S	Gender=Fem|Number=Sing	2	nsubj	_	_
2	prende	prender	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dois	dois	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	2	dobj	_	_
4	por	por	ADP	prp	AdpType=Prep	5	mark	_	_
5	cobrar	cobrar	VERB	v-inf	VerbForm=Inf	2	advcl	_	_
6	ágio	ágio	NOUN	n|M|S	Gender=Masc|Number=Sing	5	dobj	_	_

~~~


~~~ conllu
1	«	«	PUNCT	punc	_	4	punct	_	_
2	Era	ser	VERB	v-fin|IMPF|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
3	um	um	DET	art|<arti>|M|S	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	miserável	miserável	ADJ	adj|M|S	Gender=Masc|Number=Sing	0	root	_	_
5	quando	quando	ADV	adv|<rel>|<ks>	PronType=Rel	6	advmod	_	_
6	chegou	chegar	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	advcl	_	_
7	.	.	PUNCT	punc	_	4	punct	_	_

~~~


~~~ conllu
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


