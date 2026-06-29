---
layout: relation
title: 'acl:cmp'
shortdef: 'comparative adnominal clause modifier'
udver: '2'
---

The `acl:cmp` dependency type is used in the  [UD_Polish-PDB](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [UD_Polish-PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks to annotate comparative adnominal clause modifiers. Comparative adnominal clauses are typically introduced by a comparative conjunction, such as _niż_ ("than") in comparatives of inequality or _jak_, _jakby_ ("like/as") in comparatives of equality.

In Polish, comparative expressions that depend on nouns can also be realised as comparative nominal modifiers [`nmod:cmp`](https://universaldependencies.org/pl/dep/nmod-cmp.html) or adjectival modifiers introducing a comparative clause [`amod:cmp`](https://universaldependencies.org/pl/dep/nmod-cmp.html).

~~~ conllu
# visual-style 8 11 acl:cmp color:blue
1	Siedział	siedzieć	VERB	_	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	odchylony	odchylić	ADJ _	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	1	xcomp	_	_
3	za	za	ADP	_	AdpType=Prep	5	case	_	Case=Ins
4	swoim	swój	DET	_	Case=Ins|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	5	det:poss	_	_
5	biurkiem	biurko	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	1	obl	_	_
6	z	z	ADP _	AdpType=Prep|Variant=Short	8	case	_	Case=Ins
7	taką	taki	DET	_	Case=Ins|Gender=Fem|Number=Sing|PronType=Dem	8	det	_	_
8	miną	mina	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	PunctType=Comm	11	punct	_	_
10	jakby	jakby	SCONJ	_	ConjType=Comp	11	mark	_	_
11	dowodził	dowodzić	VERB	_	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	8	acl:cmp	_	_
12	całą	cały	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
13	policją	policja	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	11	obj	_	SpaceAfter=No
...
~~~

~~~ conllu
1	He sat
2	leaning back
3	behind
4	his
5	desk
6	with
7	an
8	expression on his face
9	,
10	as if
11	he was in charge of
12	the entire
13	police
...
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:43:08 CEST -->
