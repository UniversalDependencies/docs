---
layout: relation
title: 'nsubj:outer'
shortdef: 'outer clause nominal subject'
udver: '2'
---

This relation specifies a nominal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](../overview/complex-syntax.html#predicate-clauses).

~~~ conllu
# visual-style 12 2 nsubj:outer color:blue
# visual-style 11 12 nsubj color:blue
1	եւ	եւ	CCONJ	_	_	2	cc	_	_
2	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	12	nsubj:outer	_	_
3	,	,	PUNCT	_	_	9	punct	_	_
4	որ	որ	SCONJ	_	_	9	mark	_	_
5	ի	ի	ADP	_	AdpType=Prep	8	case	_	_
6-7	յայն	_	_	_	_	_	_	_	_
6	յ	ի	ADP	_	AdpType=Prep	8	case	_	_
7	այն	այն	DET	_	Deixis=Remt|PronType=Dem	8	det	_	_
8	վայրսն	վայր	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Plur	9	obl	_	_
9	շրջի	շրջիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	2	acl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	ոտներն	ոտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	2	nsubj	_	_
12	ուռենայ	ուռենալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_

~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:22:16 CET -->
