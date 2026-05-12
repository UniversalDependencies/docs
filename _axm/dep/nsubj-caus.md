---
layout: relation
title: 'nsubj:caus'
shortdef: 'causative nominal subject'
udver: '2'
---

The `nsubj:caus` relation links the causative verb to the syntactic subject of the sentence (i.e. the causer) in a causative construction.
The infinitive verb governs the causative auxiliary via an [aux:caus]() relation. The true agent of the action described in the sentence is annotated with the [iobj:agent]() relation.

~~~ conllu
# visual-style 6 2 nsubj:caus color:blue
1	այն	այն	DET	_	Deixis=Remt|PronType=Dem	2	det	_	_
2	սավտան	սավտայ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing|Style=Var	6	nsubj:caus	_	_
3	...	...	PUNCT	_	_	6	punct	_	_
4	կերակուր	կերակուր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	6	obj	_	_
5	տայ	տալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Cau	6	aux:caus	_	_
6	ուտել	ուտել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	0	root	_	_
7	եւ	եւ	CCONJ	_	_	10	cc	_	_
8-9	զկերակուրն	_	_	_	_	_	_	_	_
8	զ	զ	ADP	_	AdpType=Prep	9	case	_	_
9	կերակուրն	կերակուր	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	10	obj	_	_
10	մարսել	մարսել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	6	conj	_	_
11	տայ	տալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Cau	10	aux:caus	_	_
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:47:39 CEST -->
