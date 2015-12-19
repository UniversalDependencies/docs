---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
---

This document is a placeholder for the language-specific documentation
for `acl`.

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

5638 nodes (3%) are attached to their parents as `acl`.

5484 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.94004966300106.

The following 40 pairs of parts of speech are connected with `acl`: [pt-pos/NOUN]()-[pt-pos/VERB]() (4515; 80% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (446; 8% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (238; 4% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (92; 2% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (89; 2% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (69; 1% instances), [pt-pos/DET]()-[pt-pos/VERB]() (52; 1% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (17; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (15; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (12; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (11; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (10; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (10; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (7; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (7; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (3; 0% instances), [pt-pos/SYM]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/SYM]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (1; 0% instances).


~~~ conllu
1	Ela	ela	PRON	pron-pers|F|3S|NOM	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	tem	ter	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	também	também	ADV	adv	_	2	advmod	_	_
4	textos	texto	NOUN	n|M|P	Gender=Masc|Number=Plur	2	dobj	_	_
5	com	com	ADP	prp	AdpType=Prep	6	case	_	_
6	explicações	explicação	NOUN	n|F|P	Gender=Fem|Number=Plur	4	nmod	_	_
7	sobre	sobre	ADP	prp	AdpType=Prep	9	case	_	_
8	cada	cada	DET	pron-det|<quant>|M|S	Gender=Masc|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot	9	det	_	_
9	item	item	NOUN	n|M|S	Gender=Masc|Number=Sing	6	nmod	_	_
10	pesquisado	pesquisar	VERB	v-pcp|M|S	Gender=Masc|Number=Sing|VerbForm=Part	9	acl	_	_
11	.	.	PUNCT	punc	_	2	punct	_	_

~~~


~~~ conllu
1	A	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	cestinha	cestinha	NOUN	n|F|S	Gender=Fem|Number=Sing	0	root	_	_
3	de	de	ADP	prp|<sam->	AdpType=Prep	5	case	_	_
4	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	jogo	jogo	NOUN	n|M|S	Gender=Masc|Number=Sing	2	nmod	_	_
6	foi	ser	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	_
7	Hortência	Hortência	PROPN	prop|F|S	Gender=Fem|Number=Sing	2	nsubj	_	_
8	,	,	PUNCT	punc	_	7	punct	_	_
9	que	que	PRON	pron-indp|<rel>|F|S	Gender=Fem|Number=Sing|PronType=Rel	10	nsubj	_	_
10	marcou	marcar	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	acl	_	_
11	38	38	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	12	nummod	_	_
12	pontos	ponto	NOUN	n|M|P	Gender=Masc|Number=Plur	10	dobj	_	_
13	.	.	PUNCT	punc	_	2	punct	_	_

~~~


~~~ conllu
1	Isto	isto	PRON	pron-indp|<dem>|M|S	Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
2	no_caso_de	no_caso_de	ADP	prp	AdpType=Prep	6	mark	_	_
3	os	o	DET	art|<artd>|M|P	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
4	dois	dois	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	5	nummod	_	_
5	xadrezistas	xadrezistas	NOUN	n|M|P	Gender=Masc|Number=Plur	6	nsubj	_	_
6	aceitarem	aceitar	VERB	v-inf|3P	Number=Plur|Person=3|VerbForm=Inf	1	acl	_	_
7	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	convite	convite	NOUN	n|M|S	Gender=Masc|Number=Sing	6	dobj	_	_
9	.	.	PUNCT	punc	_	1	punct	_	_

~~~


