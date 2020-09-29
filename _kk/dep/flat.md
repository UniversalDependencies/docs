---
layout: relation
title: 'flat'
redirect_from: "kk/dep/name.html"
shortdef : 'name'
---

Proper names constituted of more than one word are annotated using the dependency type `flat`. The last (rightmost) word is the head, and the other words are direct dependents of the head. The last word is chosen to be the head because in Kazakh the last word carries the inflectional information of the whole structure.

The `flat` dependency relation is used in cases where the multi-word name does not have an obvious internal syntactic structure, as is the case with for instance names of people (**).

If a name has an obvious internal structure, as is often the case in names of books and movies for instance, this structure is marked instead. 

~~~ sdparse
Соғыстан кейін Федор Федорович Қарағандыда тұрды . \n War-from after Fëdor Fëdorovič Qarağandı-in stood .
name(Федорович-4, Федор-3)
nsubj(тұрды-6, Федорович-4)
~~~

## Diffs

Contrary to the general UD definition of [u-dep/name](), in
UD Kazakh the last word of the multi-word name expression is
considered the head.
<!-- Interlanguage links updated Út zář 29 20:31:53 CEST 2020 -->
