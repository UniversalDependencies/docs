---
layout: relation
title: 'flat'
shortdef : 'non-first element in a flat structure'
udver: '2'
---

Proper names consisting of more than one word are annotated using the dependency type `flat`. The first (leftmost) word is the head, and the other words are direct dependents of the head.
Although in Kazakh the last word carries the inflectional information of the whole structure, using `flat` in UD v2 implicates that the first word must be used as a technical head.

The `flat` dependency relation is used in cases where the multi-word name does not have an obvious internal syntactic structure, as is the case with for instance names of people (**).

If a name has an obvious internal structure, as is often the case in names of books and movies for instance, this structure is marked instead.

~~~ sdparse
Соғыстан кейін Федор Федорович Қарағандыда тұрды . \n War-from after Fëdor Fëdorovič Qarağandı-in stood .
nsubj(тұрды-6, Федор-3)
flat(Федор-3, Федорович-4)
obl(тұрды-6, Қарағандыда-5)
~~~

<!-- Interlanguage links updated St lis 3 20:58:54 CET 2021 -->
