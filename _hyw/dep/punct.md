---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This relation is used for any piece of punctuation in a clause.  Note that symbols are not punctuation and cannot be attached via the `punct` relation (see [SYM]()).

~~~ conllu
# visual-style 2 1 punct color:blue
# visual-style 2 3 punct color:blue
# visual-style 2 4 punct color:blue
1	–	–	PUNCT	_	_	2	punct	_	Translit=–|LTranslit=–
2-3	Եկո՛ւր	_	_	_	_	_	_	_	Translit=Eko՛wr|SpaceAfter=No
2	Եկուր	գալ	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Subcat=Intr|VerbForm=Fin|Voice=Mid	0	root	_	Translit=Ekowr|LTranslit=gal
3	՛	՛	PUNCT	_	_	2	punct	_	Translit=՛|LTranslit=՛
4	…	…	PUNCT	_	_	2	punct	_	Translit=…|LTranslit=…
~~~

Tokens with the relation `punct` always attach to content words (except in cases of ellipsis) and can never have dependents.
Since `punct` is not a normal dependency relation, the usual criteria for determining the head word do not apply.
Instead, we use the following principles:

1. A punctuation mark separating coordinated units is attached to the following conjunct.
2. A punctuation mark preceding or following a subordinated unit is attached to this unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

<!-- Interlanguage links updated Út 30. června 2026, 11:00:43 CEST -->
