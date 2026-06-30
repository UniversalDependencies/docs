---
layout: relation
title: 'advmod:cmp'
shortdef: 'adverbial modifier with a comparative clause'
udver: '2'
---

The `advmod:cmp` dependency type is used in the [UD_Polish-PDB](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [UD_Polish-PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks to annotate adverbial modifiers such as _tak_ ("so"), _podobnie_ ("similarly"), which function as markers introducing comparative clauses. Similar to coordination, these clauses often involve predicate ellipsis.

In Polish, comparative expressions that depend on predicates can also be realised as comparative oblique nominals [`obl:cmp`](https://universaldependencies.org/pl/dep/obl-cmp.html) or comparative adverbial clause modifiers [`advcl:cmp`](https://universaldependencies.org/pl/dep/advcl-cmp.html). 

~~~ conllu
# visual-style 1 2 advmod:cmp color:blue
1	Szedł	iść	VERB	_	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	tak	tak	ADV	_	Degree=Pos|PronType=Dem	1	advmod:cmp	_	_
3	jak	jak	SCONJ	_	_	6	mark	_	_
4	my	my	PRON	_	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
5	teraz	teraz	ADV	_	_	6	advmod_	_
6	idziemy	iść	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	_	_	SpaceAfter=No
7	.	.	PUNCT	_	PunctType=Peri	1	punct	_	_
~~~

~~~ conllu
1	He walked
2	just
3	as
4	we
5	now
6	are walking
7	.
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:34:05 CEST -->
