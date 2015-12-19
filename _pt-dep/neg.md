---
layout: relation
title: 'neg'
shortdef: 'negation modifier'
---

This document is a placeholder for the language-specific documentation
for `neg`.

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

1248 nodes (1%) are attached to their parents as `neg`.

1237 instances of `neg` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75480769230769.

The following 12 pairs of parts of speech are connected with `neg`: [pt-pos/VERB]()-[pt-pos/ADV]() (1060; 85% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (84; 7% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (71; 6% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (13; 1% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (6; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/VERB]()-[pt-pos/INTJ]() (3; 0% instances), [pt-pos/DET]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/SCONJ]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/AUX]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/INTJ]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/ADV]() (1; 0% instances).

* `VERB-ADV`: _Eu <b>não</b> me <b>associo</b> com moda ._

~~~ conllu
1	Eu	eu	PRON	pron-pers|M|1S|NOM	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	não	não	ADV	adv	_	4	neg	_	_
3	me	eu	PRON	pron-pers|<refl>|M|1S|ACC	Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	4	dobj	_	_
4	associo	associar	VERB	v-fin|PR|1S|IND	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	com	com	ADP	prp	AdpType=Prep	6	case	_	_
6	moda	moda	NOUN	n|F|S	Gender=Fem|Number=Sing	4	iobj	_	_
7	.	.	PUNCT	punc	_	4	punct	_	_
~~~

* `ADJ-ADV`: _R. -- <b>Não</b> sou <b>capaz</b> ._

~~~ conllu
1	R.	R.	NOUN	n|F|S	Gender=Fem|Number=Sing	0	root	_	_
2	--	--	PUNCT	punc	_	1	punct	_	_
3	Não	não	ADV	adv	_	5	neg	_	_
4	sou	ser	VERB	v-fin|PR|1S|IND	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	capaz	capaz	ADJ	adj|M/F|S	Number=Sing	1	parataxis	_	_
6	.	.	PUNCT	punc	_	1	punct	_	_
~~~

* `NOUN-ADV`: _Apaixonou- se por um cego que <b>não</b> era <b>aluno</b> de ele ._

~~~ conllu
1	Apaixonou-	apaixonar	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	se	se	PRON	pron-pers|<refl>|M|3S|ACC	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	1	dobj	_	_
3	por	por	ADP	prp	AdpType=Prep	5	case	_	_
4	um	um	DET	art|<arti>|M|S	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	cego	cego	NOUN	n|M|S	Gender=Masc|Number=Sing	1	iobj	_	_
6	que	que	PRON	pron-indp|<rel>|M|S	Gender=Masc|Number=Sing|PronType=Rel	9	nsubj	_	_
7	não	não	ADV	adv	_	9	neg	_	_
8	era	ser	VERB	v-fin|IMPF|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	cop	_	_
9	aluno	aluno	NOUN	n|M|S	Gender=Masc|Number=Sing	5	acl	_	_
10	de	de	ADP	prp|<sam->	AdpType=Prep	11	case	_	_
11	ele	ele	PRON	pron-pers|<-sam>|M|3S|PIV	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs	9	nmod	_	_
12	.	.	PUNCT	punc	_	1	punct	_	_
~~~


