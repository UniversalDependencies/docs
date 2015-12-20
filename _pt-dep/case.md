---
layout: relation
title: 'case'
shortdef: 'case marking'
---

This document is a placeholder for the language-specific documentation
for `case`.

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

29408 nodes (14%) are attached to their parents as `case`.

29062 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76771626768226.

The following 29 pairs of parts of speech are connected with `case`: [pt-pos/NOUN]()-[pt-pos/ADP]() (21266; 72% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (5503; 19% instances), [pt-pos/PRON]()-[pt-pos/ADP]() (811; 3% instances), [pt-pos/NUM]()-[pt-pos/ADP]() (701; 2% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (491; 2% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (358; 1% instances), [pt-pos/DET]()-[pt-pos/ADP]() (111; 0% instances), [pt-pos/SYM]()-[pt-pos/ADP]() (94; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (24; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/ADP]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/INTJ]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/X]()-[pt-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 case	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 case	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
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


