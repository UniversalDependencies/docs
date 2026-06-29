---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

A marker is the subordinating conjunction introducing a finite clause subordinate to another clause.
The `mark` is a dependent of the subordinate clause head.

~~~ conllu
# visual-style 10 9 mark color:blue
# visual-style 15 12 mark color:blue
1	եւ	եւ	CCONJ	_	_	15	cc	_	_
2	երբ	երբ	SCONJ	_	_	7	mark	_	_
4	իր	իր	DET	_	Case=Nom|Number=Sing|Person=3|PronType=Poss	6	det:poss	_	_
5	խիստ	խիստ	ADJ	_	Degree=Pos	6	amod	_	_
6	ողորմութիւն	ողորմութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	compound:lvc	_	_
7	այնէ	այնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	15	advcl	_	SpaceAfter=No
8	՝	՝	PUNCT	_	_	10	punct	_	_
9	որ	որ	SCONJ	_	_	10	mark	_	_
10	չմեռնի	մեռնիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	7	advcl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	նա	նա	SCONJ	_	_	15	mark	_	_
13-14	զաչսն	_	_	_	_	_	_	_	_
13	զ	զ	ADP	_	AdpType=Prep	14	case	_	_
14	աչսն	աչք	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Plur	15	obj	_	_
15	հանէ	հանել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	_	_
~~~

Note that the subordinating conjunction should not be confused with relative pronouns and adverbs.
These fill a valency slot in the frame of the subordinate predicate, and are labeled according to their role in the frame, they are not `mark`:

~~~ conllu
# visual-style 6 4 advmod color:blue
1	եւ	եւ	CCONJ	_	_	13	cc	_	_
2	այս	այս	DET	_	Deixis=Prox|PronType=Dem	3	det	_	_
3	օձս	օձ	NOUN	_	Animacy=Nhum|Case=Nom|Deixis[psor]=Prox|Number=Sing	6	nsubj	_	_
4	յորժամ	յորժամ	ADV	_	_	6	advmod	_	_
5	ի	ի	ADP	_	AdpType=Prep	6	case	_	_
6	գնալն	գնալ	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	13	advcl	_	_
7	լինի	լինիլ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Tense=Pres|VerbForm=Fin	6	aux	_	SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	_
9	նայ	նայ	SCONJ	_	Style=Var	13	mark	_	_
10-11	զգլուխն	_	_	_	_	_	_	_	_
10	զ	զ	ADP	_	AdpType=Prep	11	case	_	_
11	գլուխն	զգլուխ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	13	nsubj	_	_
12	բարձր	բարձր	ADJ	_	_	13	advcl	_	_
13	կենայ	կենալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	2	conj	_	_
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:44:15 CEST -->
