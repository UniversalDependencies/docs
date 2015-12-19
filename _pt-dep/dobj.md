---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

This document is a placeholder for the language-specific documentation
for `dobj`.

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

11416 nodes (5%) are attached to their parents as `dobj`.

10102 instances of `dobj` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.53985634197617.

The following 46 pairs of parts of speech are connected with `dobj`: [pt-pos/VERB]()-[pt-pos/NOUN]() (8170; 72% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1983; 17% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (812; 7% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (88; 1% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (66; 1% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (44; 0% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (41; 0% instances), [pt-pos/AUX]()-[pt-pos/NOUN]() (33; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (28; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (22; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (16; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (12; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (8; 0% instances), [pt-pos/AUX]()-[pt-pos/PROPN]() (7; 0% instances), [pt-pos/AUX]()-[pt-pos/PRON]() (6; 0% instances), [pt-pos/SCONJ]()-[pt-pos/NOUN]() (6; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (6; 0% instances), [pt-pos/ADV]()-[pt-pos/PROPN]() (5; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (5; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (5; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (4; 0% instances), [pt-pos/SYM]()-[pt-pos/SYM]() (4; 0% instances), [pt-pos/VERB]()-[pt-pos/INTJ]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (3; 0% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/SYM]() (1; 0% instances).


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
1	Cartões	cartão	NOUN	n|M|P	Gender=Masc|Number=Plur	0	root	_	_
2	:	:	PUNCT	punc	_	1	punct	_	_
3	aceita	aceitar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl	_	_
4	todos	todo	PRON	pron-det|<quant>|M|P	Gender=Masc|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot	3	dobj	_	_

~~~


~~~ conllu
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	governo	governo	NOUN	n|M|S	Gender=Masc|Number=Sing	3	nsubj	_	_
3	vai	ir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	ccomp	_	_
4	usar	usar	VERB	v-inf	VerbForm=Inf	3	xcomp	_	_
5	a	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	URV	URV	PROPN	prop|F|S	Gender=Fem|Number=Sing	4	dobj	_	_
7	para	para	ADP	prp	AdpType=Prep	8	mark	_	_
8	corrigir	corrigir	VERB	v-inf	VerbForm=Inf	4	advcl	_	_
9	impostos	imposto	NOUN	n|M|P	Gender=Masc|Number=Plur	8	dobj	_	_
10	,	,	PUNCT	punc	_	11	punct	_	_
11	garantiu	garantir	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	FHC	FHC	PROPN	prop|M|S	Gender=Masc|Number=Sing	11	nsubj	_	_
13	.	.	PUNCT	punc	_	11	punct	_	_

~~~


