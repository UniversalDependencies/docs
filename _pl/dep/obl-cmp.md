---
layout: relation
title: 'obl:cmp'
shortdef: 'comparative oblique nominal'
udver: '2'
---

The `obl:cmp` dependency type is used in the [UD_Polish-PDB](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [UD_Polish-PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) to annotate comparative oblique nominals, e.g., adpositional phrases with the adposition _od_ ("than") or the complex adposition _w porówaniu z_ ("in comparison with").

In Polish, comparative expressions that depend on predicates can also be realised as comparative adverbial clause modifiers [`advcl:cmp`](https://universaldependencies.org/pl/dep/advcl-cmp.html) or adverbial modifiers introducing comparative clauses [`advmod:cmp`](https://universaldependencies.org/pl/dep/advmod-cmp.html).


~~~ conllu
# visual-style 1 12 obl:cmp color:blue
1	Gwarantuje	gwarantować	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	ona	on	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	1	nsubj	_	_
3	bardziej	bardzo	ADV	_	Degree=Cmp	4	advmod	_	_
4	sprawiedliwe	sprawiedliwy	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	5	amod	_	_
5	warunki	warunki	NOUN	_	Case=Acc|Gender=Neut|Number=Ptan	1	obj	_	_
6	dla	dla	ADP	_	AdpType=Prep	7	case	_	Case=Gen
7	muzyków	muzyk	NOUN	_	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	_
8	sesyjnych	sesyjny	ADJ	_	Animacy=Hum|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	_
9	w	w	ADP	_	AdpType=Prep|ExtPos=ADP|Variant=Short	12	case	_	Case=Loc
10	porównaniu	porównanie	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	9	fixed	_	_
11	z	z	ADP	_	AdpType=Prep|Variant=Short	9	fixed	_	Case=Ins
12	solistami	solista	NOUN	_	Animacy=Hum|Case=Ins|Gender=Masc|Number=Plur	1	obl:cmp	_	SpaceAfter=No
13	.	.	PUNCT	_	PunctType=Peri	1	punct	_	_
~~~

~~~ conllu
# text = It guarantees more equitable conditions for session musicians in comparison with soloists.
1	guarantees
2	it
3	more
4	equitable
5	conditions
6	for
7	musicians
8	session
9	in
10	comparison
11	with
12	soloists
13	.
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:35:06 CEST -->
