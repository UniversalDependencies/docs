---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. A fake node `ROOT` is used as the governor. The `ROOT` node is indexed
with 0, since the indexing of real words in the sentence starts at 1.

~~~ conllu
# visual-style 0 2 root color:blue
1	Չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	իրավունք	իրավունք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing|Style=Var	0	root	_	_
3	որ	որ	SCONJ	_	_	7	mark	_	_
4	թագաւոր	թագաւոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	7	nsubj	_	_
5	անպսակ	անպսակ	ADJ	_	Degree=Pos	4	amod	_	_
6	սիրղով	սիրող	NOUN	_	Animacy=Hum|Case=Ins|Definite=Ind|Number=Sing	7	compound:lvc	_	_
7	կենայ	կենալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	2	acl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~

There is just one node with the `root` dependency relation in every tree. If the main predicate is not present (due to
[ellipsis](http://universaldependencies.org/hy/overview/specific-syntax.html))  and there are multiple orphaned dependents, the dependent that is highest in the 
obliqueness hierarchy is promoted to the head (root) position and the other orphans are attached to it.
<!-- Interlanguage links updated St 6. května 2026, 20:48:38 CEST -->
