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
Average distance between parent and child is 1.76775027203482.

The following 30 pairs of parts of speech are connected with `case`: [pt-pos/NOUN]()-[pt-pos/ADP]() (21156; 72% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (5503; 19% instances), [pt-pos/NUM]()-[pt-pos/ADP]() (701; 2% instances), [pt-pos/PRON]()-[pt-pos/ADP]() (597; 2% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (491; 2% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (358; 1% instances), [pt-pos/DET]()-[pt-pos/ADP]() (325; 1% instances), [pt-pos/SYM]()-[pt-pos/ADP]() (204; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (24; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (11; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/ADP]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/INTJ]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/X]()-[pt-pos/ADP]() (1; 0% instances).


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
1	Venceu	vencer	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	por	por	ADP	prp	AdpType=Prep	3	case	_	_
3	1	1	NUM	num|M|S	Gender=Masc|Number=Sing	1	advmod	_	_
4	a	a	ADP	prp	AdpType=Prep	5	case	_	_
5	0	0	NUM	num|M|S	Gender=Masc|Number=Sing	3	advmod	_	_
6	.	.	PUNCT	punc	_	1	punct	_	_

~~~


