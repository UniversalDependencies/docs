---
layout: relation
title: 'mark'
shortdef: 'marker'
---

This document is a placeholder for the language-specific documentation
for `mark`.

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

5193 nodes (2%) are attached to their parents as `mark`.

5156 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.86481802426343.

The following 30 pairs of parts of speech are connected with `mark`: [pt-pos/VERB]()-[pt-pos/ADP]() (2806; 54% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (1734; 33% instances), [pt-pos/NOUN]()-[pt-pos/SCONJ]() (163; 3% instances), [pt-pos/ADJ]()-[pt-pos/SCONJ]() (149; 3% instances), [pt-pos/AUX]()-[pt-pos/ADP]() (82; 2% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (44; 1% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (39; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (36; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (26; 1% instances), [pt-pos/ADV]()-[pt-pos/SCONJ]() (13; 0% instances), [pt-pos/DET]()-[pt-pos/SCONJ]() (13; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (11; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (11; 0% instances), [pt-pos/AUX]()-[pt-pos/SCONJ]() (10; 0% instances), [pt-pos/PROPN]()-[pt-pos/SCONJ]() (10; 0% instances), [pt-pos/PRON]()-[pt-pos/SCONJ]() (9; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (7; 0% instances), [pt-pos/DET]()-[pt-pos/ADV]() (6; 0% instances), [pt-pos/NUM]()-[pt-pos/SCONJ]() (5; 0% instances), [pt-pos/DET]()-[pt-pos/ADP]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/SCONJ]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	PF	PF	PROPN	prop|F|S	Gender=Fem|Number=Sing	2	nsubj	_	_
2	prende	prender	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dois	dois	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	2	dobj	_	_
4	por	por	ADP	prp	AdpType=Prep	5	mark	_	_
5	cobrar	cobrar	VERB	v-inf	VerbForm=Inf	2	advcl	_	_
6	ágio	ágio	NOUN	n|M|S	Gender=Masc|Number=Sing	5	dobj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 mark	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	Mercedes	Mercedes	PROPN	prop|M|S	Gender=Masc|Number=Sing	2	nsubj	_	_
2	diz	dizer	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	conj-s	_	6	mark	_	_
4	começaria	começar	VERB	v-fin|COND|3S	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	6	cop	_	_
5	como	como	ADV	adv|<rel>	PronType=Rel	6	cop	_	_
6	vereadora	vereadora	NOUN	n|F|S	Gender=Fem|Number=Sing	2	ccomp	_	_
7	:	:	PUNCT	punc	_	2	punct	_	_

~~~


