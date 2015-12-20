---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---

This document is a placeholder for the language-specific documentation
for `cc`.

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

5409 nodes (2%) are attached to their parents as `cc`.

4744 instances of `cc` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.31410611943058.

The following 37 pairs of parts of speech are connected with `cc`: [pt-pos/NOUN]()-[pt-pos/CONJ]() (1831; 34% instances), [pt-pos/VERB]()-[pt-pos/CONJ]() (1736; 32% instances), [pt-pos/PROPN]()-[pt-pos/CONJ]() (699; 13% instances), [pt-pos/ADJ]()-[pt-pos/CONJ]() (534; 10% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (195; 4% instances), [pt-pos/NUM]()-[pt-pos/CONJ]() (93; 2% instances), [pt-pos/ADV]()-[pt-pos/CONJ]() (79; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (49; 1% instances), [pt-pos/DET]()-[pt-pos/CONJ]() (41; 1% instances), [pt-pos/AUX]()-[pt-pos/CONJ]() (29; 1% instances), [pt-pos/PRON]()-[pt-pos/CONJ]() (23; 0% instances), [pt-pos/SYM]()-[pt-pos/CONJ]() (16; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (13; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (12; 0% instances), [pt-pos/ADP]()-[pt-pos/ADP]() (9; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (9; 0% instances), [pt-pos/ADP]()-[pt-pos/CONJ]() (8; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/DET]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/SCONJ]()-[pt-pos/CONJ]() (2; 0% instances), [pt-pos/SYM]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/INTJ]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	Para	para	ADP	prp	AdpType=Prep	2	case	_	_
2	mim	eu	PRON	pron-pers|M|1S|PIV	Case=Acc|Gender=Masc|Number=Sing|Person=1|PrepCase=Pre|PronType=Prs	7	nmod	_	_
3	roupa	roupa	NOUN	n|F|S	Gender=Fem|Number=Sing	7	nsubj	_	_
4	e	e	CONJ	conj-c|<co-subj>	_	3	cc	_	_
5	moda	moda	NOUN	n|F|S	Gender=Fem|Number=Sing	3	conj	_	_
6	são	ser	VERB	v-fin|PR|3P|IND	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	coisas	coisa	NOUN	n|F|P	Gender=Fem|Number=Plur	0	root	_	_
8	diferentes	diferente	ADJ	adj|F|P	Gender=Fem|Number=Plur	7	amod	_	_
9	»	»	PUNCT	punc	_	7	punct	_	_
10	.	.	PUNCT	punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cc	color:blue
1	É	ser	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	também	também	ADV	adv	_	3	advmod	_	_
3	primo	primo	NOUN	n|M|S	Gender=Masc|Number=Sing	0	root	_	_
4	de	de	ADP	prp	AdpType=Prep	5	case	_	_
5	Curica	Curica	PROPN	prop|M|S	Gender=Masc|Number=Sing	3	nmod	_	_
6	e	e	CONJ	conj-c|<co-postnom>	_	5	cc	_	_
7	de	de	ADP	prp	AdpType=Prep	8	case	_	_
8	Floriano	Floriano	PROPN	prop|M|S	Gender=Masc|Number=Sing	5	conj	_	_
9	Graça	Graça	PROPN	PROPN	Gender=Masc|Number=Sing	8	name	_	_
10	.	.	PUNCT	punc	_	3	punct	_	_

~~~


