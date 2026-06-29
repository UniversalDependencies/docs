---
layout: relation
title: 'amod:cmp'
shortdef: 'adjective modifier with a comparative clause'
udver: '2'
---

The `amod:cmp` dependency type is used in the [UD_Polish-PDB](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [UD_Polish-PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks to annotate adjective modifiers such as _taki_ ("such"), which function as markers introducing comparative clauses. Similar to coordination, these clauses often involve predicate ellipsis.

In Polish, comparative expressions that depend on nouns can also be realised as comparative adnominal clauses [`acl:cmp`](https://universaldependencies.org/pl/dep/acl-cmp.html) and comparative nominal modifiers [`nmod:cmp`](https://universaldependencies.org/pl/dep/nmod-cmp.html).


~~~ conllu
# visual-style 3 4 amod:cmp color:blue
1	Pracowicie	pracowicie	ADV	_	Degree=Pos	2	advmod	_	_
2	wyodrębnił	wyodrębnić	VERB	_	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	pojęcia	pojęcie	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	2	obj	_	_
4	takie	taki	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	3	amod:cmp	_	_
5	jak	jak	SCONJ	_	_	6	mark	_	_
6	ból	ból	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	ccomp	_	SpaceAfter=No
7	,	,	PUNCT	_	PunctType=Comm	8	punct	_	_
8	smutek	smutek	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	conj	_	SpaceAfter=No
9	,	,	PUNCT	_	PunctType=Comm	10	punct	_	_
10	rozpacz	rozpacz	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	conj	_	SpaceAfter=No
11	,	,	PUNCT	_	PunctType=Comm	12	punct	_	_
12	cierpienie	cierpienie	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	6	conj	_	SpaceAfter=No
13	,	,	PUNCT	_	PunctType=Comm	14	punct	_	_
14	żal	żal	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	conj	_	SpaceAfter=No
15	.	.	PUNCT	_	PunctType=Peri	2	punct	_	_
~~~

~~~ conllu
1	carefully
2	he distinguished
3	concepts
4	such
5	as
6	pain
7	,
8	sadness
9	,
10	dispair
11	,
12	suffering
13	,
14	regret
15	.
~~~
<!-- Interlanguage links updated Po 29. června 2026, 18:11:45 CEST -->
