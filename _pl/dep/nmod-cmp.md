---
layout: relation
title: 'nmod:cmp'
shortdef: 'comparative nominal modifier'
udver: '2'
---

The `nmod:cmp` relation is used in the [UD_Polish-PDB](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [UD_Polish-PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks to annotate comparative nominal modifiers, e.g., adpositional phrases with the adposition _od_ ("than").
 
In Polish, comparative expressions that depend on nouns can also be realised as comparative adnominal clauses [`acl:cmp`](https://universaldependencies.org/pl/dep/acl-cmp.html) and adjectival modifiers introducing a comparative clause [`amod:cmp`](https://universaldependencies.org/pl/dep/nmod-cmp.html).


~~~ conllu
# visual-style 6 8 nmod:cmp color:blue
1	Gaus	gaus	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	jest	być	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	jednostką	jednostka	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	0	root	_	_
4	indukcji	indukcja	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	3	nmod:arg	_	_
5	magnetycznej	magnetyczny	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
6	mniejszą	mały	ADJ	_	Case=Ins|Degree=Cmp|Gender=Fem|Number=Sing	3	amod	_	_
7	od	od	ADP	_	AdpType=Prep|Variant=Short	8	case	_	Case=Gen
8	tesli	tesla	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	6	nmod:cmp	_	_
9	.	.	PUNCT	_	PunctType=Peri	3	punct	_	_
~~~

~~~ conllu
1	Gauss
2	is
3	a unit
4	of magnetic
5	induction
6	smaller
7	than
8	tesla
9	.
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:44:20 CEST -->
