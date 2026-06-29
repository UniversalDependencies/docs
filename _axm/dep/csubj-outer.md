---
layout: relation
title: 'csubj:outer'
shortdef: 'outer clause clausal subject'
udver: '2'
---

This relation specifies a clausal subject of a copular clause whose predicate is itself a clause, to signal that it is not the subject of the nested clause.

~~~ conllu
# visual-style 9 14 csubj:outer color:blue
1	Զընդանելն	զընդանել	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Style=Var|Subcat=Tran|VerbForm=Inf|Voice=Act	5	csubj	_	_
2	ըստ	ըստ	ADP	_	AdpType=Prep	4	case	_	_
3	թագաւորին	թագաւոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	4	nmod:npmod	_	_
4	կամացն	կամ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	5	obl	_	_
5	լինի	լինիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	9	punct	_	_
7	զի	զի	SCONJ	_	_	9	mark	_	_
8	այս	այս	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	9	nsubj	_	_
9	թագաւորին	թագաւոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	5	advcl	_	_
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	SpaceAfter=No
11	՝	՝	PUNCT	_	_	14	punct	_	_
12	որ	որ	SCONJ	_	_	14	mark	_	_
13	ինքն	ինք	PRON	_	Case=Nom|Number=Sing|Person[psor]=3|PronType=Emp	14	nsubj	_	_
14	դատէ	դատել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	9	csubj:outer	_	SpaceAfter=No
15	.	.	PUNCT	_	_	5	punct	_	_

~~~


The nominal counterpart of this relation is [nsubj:outer]().

The `:outer` subtype is *not* intended for most clausal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [csubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ conllu
# visual-style 2 5 csubj color:blue
1	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	պատեհ	պատեհ	ADJ	_	Degree=Pos	0	root	_	_
3	այլ	այլ	DET	_	PronType=Ind	4	det	_	_
4	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	5	obj	_	_
5	սպաննել	սպաննել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	2	csubj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:43:52 CEST -->
