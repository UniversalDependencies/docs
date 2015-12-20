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

The following 6 pairs of parts of speech are connected with `aux`: [pt-pos/VERB]()-[pt-pos/AUX]() (413; 95% instances), [pt-pos/AUX]()-[pt-pos/AUX]() (14; 3% instances), [pt-pos/PRON]()-[pt-pos/AUX]() (3; 1% instances), [pt-pos/DET]()-[pt-pos/AUX]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/AUX]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 aux	color:blue
1	Em	em	ADP	prp|<sam->	AdpType=Prep	3	case	_	_
2	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	projeto	projeto	NOUN	n|M|S	Gender=Masc|Number=Sing	5	nmod	_	_
4	não	não	ADV	adv	_	5	neg	_	_
5	há	haver	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	definição	definição	NOUN	n|F|S	Gender=Fem|Number=Sing	5	dobj	_	_
7	de	de	ADP	prp	AdpType=Prep	9	mark	_	_
8	quantos	quanto	DET	pron-det|<interr>|M|S	Gender=Masc|Number=Sing|PronType=Int	9	nsubj	_	_
9	podem	poder	VERB	v-fin|PR|3P|IND	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	_
10	ser	ser	AUX	v-inf	VerbForm=Inf	9	aux	_	_
11	construídos	construir	VERB	v-pcp|M|P	Gender=Masc|Number=Plur|VerbForm=Part	10	ccomp	_	_
12	.	.	PUNCT	punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 aux	color:blue
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	cemitério	cemitério	NOUN	n|M|S	Gender=Masc|Number=Sing	6	nsubj	_	_
3	de	de	ADP	prp	AdpType=Prep	4	case	_	_
4	Sidi	Sidi	PROPN	prop|M|S	Gender=Masc|Number=Sing	2	nmod	_	_
5	Hammed	Hammed	PROPN	PROPN	Gender=Masc|Number=Sing	4	name	_	_
6	vai	ir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	ter	ter	AUX	v-inf	VerbForm=Inf	6	aux	_	_
8	de	de	ADP	prp	AdpType=Prep	9	mark	_	_
9	ser	ser	AUX	v-inf	VerbForm=Inf	7	aux	_	_
10	alargado	alargar	VERB	v-pcp|M|S	Gender=Masc|Number=Sing|VerbForm=Part	9	ccomp	_	_
11	--	--	PUNCT	punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 aux	color:blue
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	francês	francês	NOUN	n|M|S	Gender=Masc|Number=Sing	3	nsubj	_	_
3	conseguiu	conseguir	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	dez	dez	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	5	nummod	_	_
5	ases	ás	NOUN	n|M|P	Gender=Masc|Number=Plur	3	dobj	_	_
6	em	em	ADP	prp|<sam->	AdpType=Prep	8	case	_	_
7	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	encontro	encontro	NOUN	n|M|S	Gender=Masc|Number=Sing	3	nmod	_	_
9	,	,	PUNCT	punc	_	3	punct	_	_
10	contra	contra	ADP	prp	AdpType=Prep	11	case	_	_
11	17	17	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	5	nummod	_	_
12	de	de	ADP	prp|<sam->	AdpType=Prep	14	case	_	_
13	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	croata	croata	NOUN	n|M|S	Gender=Masc|Number=Sing	11	nmod	_	_
15	,	,	PUNCT	punc	_	14	punct	_	_
16	que	que	PRON	pron-indp|<rel>|M|S	Gender=Masc|Number=Sing|PronType=Rel	14	nmod	_	_
17	está	estar	AUX	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux	_	_
18	perto_de	perto_de	ADP	prp	AdpType=Prep	19	mark	_	_
19	atingir	atingir	VERB	v-inf	VerbForm=Inf	16	advcl	_	_
20	a	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
21	incrível	incrível	ADJ	adj|F|S	Gender=Fem|Number=Sing	22	amod	_	_
22	marca	marca	NOUN	n|F|S	Gender=Fem|Number=Sing	19	dobj	_	_
23	de	de	ADP	prp	AdpType=Prep	25	case	_	_
24	mil	mil	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	25	nummod	_	_
25	ases	ás	NOUN	n|M|P	Gender=Masc|Number=Plur	22	nmod	_	_
26	este	este	DET	pron-det|<dem>|M|S	Gender=Masc|Number=Sing|PronType=Dem	27	det	_	_
27	ano	ano	NOUN	n|M|S	Gender=Masc|Number=Sing	25	nmod	_	_
28	.	.	PUNCT	punc	_	3	punct	_	_

~~~


