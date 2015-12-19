---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "pt/dep/aux.html"
---

This document is a placeholder for the language-specific documentation
for `aux`.

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

433 nodes (0%) are attached to their parents as `aux`.

428 instances of `aux` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30023094688222.

The following 5 pairs of parts of speech are connected with `aux`: [pt-pos/VERB]()-[pt-pos/AUX]() (413; 95% instances), [pt-pos/AUX]()-[pt-pos/AUX]() (14; 3% instances), [pt-pos/PRON]()-[pt-pos/AUX]() (4; 1% instances), [pt-pos/NOUN]()-[pt-pos/AUX]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (1; 0% instances).

* `VERB-AUX`: _Em o projeto não há definição de quantos <b>podem</b> <b>ser</b> construídos ._

~~~ conllu
1	Em	em	ADP	prp|<sam->	AdpType=Prep	3	case	_	_
2	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	projeto	projeto	NOUN	n|M|S	Gender=Masc|Number=Sing	5	nmod	_	_
4	não	não	ADV	adv	_	5	neg	_	_
5	há	haver	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	definição	definição	NOUN	n|F|S	Gender=Fem|Number=Sing	5	dobj	_	_
7	de	de	ADP	prp	AdpType=Prep	9	mark	_	_
8	quantos	quanto	PRON	pron-det|<interr>|M|S	Gender=Masc|Number=Sing|PronType=Int	9	nsubj	_	_
9	podem	poder	VERB	v-fin|PR|3P|IND	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	_
10	ser	ser	AUX	v-inf	VerbForm=Inf	9	aux	_	_
11	construídos	construir	VERB	v-pcp|M|P	Gender=Masc|Number=Plur|VerbForm=Part	10	ccomp	_	_
12	.	.	PUNCT	punc	_	5	punct	_	_
~~~

* `AUX-AUX`: _O cemitério de Sidi_Hammed vai <b>ter</b> de <b>ser</b> alargado --_

~~~ conllu
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	cemitério	cemitério	NOUN	n|M|S	Gender=Masc|Number=Sing	5	nsubj	_	_
3	de	de	ADP	prp	AdpType=Prep	4	case	_	_
4	Sidi_Hammed	Sidi_Hammed	PROPN	prop|M|S	Gender=Masc|Number=Sing	2	nmod	_	_
5	vai	ir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	ter	ter	AUX	v-inf	VerbForm=Inf	5	aux	_	_
7	de	de	ADP	prp	AdpType=Prep	8	mark	_	_
8	ser	ser	AUX	v-inf	VerbForm=Inf	6	aux	_	_
9	alargado	alargar	VERB	v-pcp|M|S	Gender=Masc|Number=Sing|VerbForm=Part	8	ccomp	_	_
10	--	--	PUNCT	punc	_	5	punct	_	_
~~~

* `PRON-AUX`: _Romário <b>é</b> <b>o</b> mais votado por leitores_

~~~ conllu
1	Romário	Romário	PROPN	prop|M|S	Gender=Masc|Number=Sing	3	cop	_	_
2	é	ser	AUX	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	o	o	PRON	pron-det|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	mais	mais	ADV	adv|<quant>|<KOMP>	Degree=Cmp|NumType=Card|PronType=Ind,Neg,Tot	5	advmod	_	_
5	votado	votar	VERB	v-pcp|M|S	Gender=Masc|Number=Sing|VerbForm=Part	3	acl	_	_
6	por	por	ADP	prp	AdpType=Prep	7	case	_	_
7	leitores	leitor	NOUN	n|M|P	Gender=Masc|Number=Plur	3	dobj	_	_
~~~


