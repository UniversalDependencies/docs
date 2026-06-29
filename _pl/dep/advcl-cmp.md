---
layout: relation
title: 'advcl:cmp'
shortdef: 'comparative adverbial clause modifier'
udver: '2'
---

The `advcl:cmp` dependency type is used in the [UD_Polish-PDB](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [UD_Polish-PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks to annotate comparative adverbial clauses. Comparative adverbial clauses are typically introduced by a comparative conjunction, such as _niż_ ("than") in comparatives of inequality or e.g. _jak_ ("like/as") in comparatives of equality. Similar to coordination, these clauses often involve predicate ellipsis.

In Polish, comparative expressions that depend on predicates can also be realised as comparative oblique nominals [`obl:cmp`](https://universaldependencies.org/pl/dep/obl-cmp.html) or adverbial modifiers introducing comparative clauses [`advmod:cmp`](https://universaldependencies.org/pl/dep/advmod-cmp.html).

~~~ conllu
# visual-style 1 10 advcl:cmp color:blue
1	Wolę	woleć	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	kreskówki	kreskówka	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	1	iobj	_	_
3	z	z	ADP	_	AdpType=Prep|Variant=Short	7	case	7:case	Case=Ins
4	"	"	PUNCT	_	PunctType=Quot	5	punct	_	SpaceAfter=No
5	Bolkiem	Bolek	PROPN	_	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	2	nmod	_	_
6	i	i	CCONJ	_	_	7	cc	_	_
7	Lolkiem	Lolek	PROPN	_	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	5	conj	2:nmod	SpaceAfter=No
8	"	"	PUNCT	_	PunctType=Quot	5	punct	_	_
9	niż	niż	SCONJ	_	ConjType=Cmpr	10	mark	_	_
10	kochać	kochać	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	1	advcl:cmp	_	_
11	się	się	PRON	_	PronType=Prs|Reflex=Yes	10	expl:pv	_	_
12	z	z	ADP	_	AdpType=Prep|Variant=Short	13	case	_	Case=Ins
13	tobą	ty	PRON	_	Case=Ins|Gender=Fem|Number=Sing|Person=2|PronType=Prs	10	obl:arg	_	SpaceAfter=No
14	.	.	PUNCT	_	PunctType=Peri	1	punct	_	_
~~~

~~~ conllu
1	I
2	prefer
3	cartoons
4	with
5	"
6	Bolek
7	and
8	Lolek
9	"
10	than
11	make
12	love
13	with
14	you
15	.
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:43:13 CEST -->
