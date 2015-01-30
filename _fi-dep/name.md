---
layout: relation
title:  'name'
shortdef : 'name'
---

Proper names constituted of more than one word are annotated using the dependency type `name`. The first (leftmost) word is the head, and the other words are direct dependents of the head.

The `name` dependency relation is used in cases where the multi-word name does not have an obvious internal syntactic structure, as is the case with for instance names of people (*Matti Virtanen*) or cities (*New York*).

If a name has an obvious internal structure, as is often the case in names of books and movies for instance, this structure is marked instead. (Note that by constrast to TDT, the no "secondary" `name` annotation is created in these cases.)

<!-- fname:name.pdf -->
~~~ sdparse
Jumalat juhlivat öisin on Donna Tarttin esikoisteos . \n Gods celebrate by_night is Donna Tartt's first_work .
nsubj(juhlivat-2, Jumalat-1)
nmod(juhlivat-2, öisin-3)
nsubj:cop(esikoisteos-7, juhlivat-2)
cop(esikoisteos-7, on-4)
punct(esikoisteos-7, .-8)
name(Tarttin-6, Donna-5)
nmod:poss(esikoisteos-7, Tarttin-6)
~~~

## Diffs

### Turku Dependency Treebank

Contrary to the general UD definition of [u-dep/name](), in
UD Finnish the last word multi-word name is
considered the head.
