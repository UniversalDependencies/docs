---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. A fake node `ROOT` is used as the governor. The `ROOT` node is indexed
with 0, since the indexing of real words in the sentence starts at 1.

~~~ sdparse
ROOT Չէ իրավունք որ թագաւոր անպսակ սիրղով կենայ . \n ROOT It is not lawful (right) for a king to live with a lover without being married ;
root(ROOT-1, իրավունք)
root(ROOT-11, lawful)
~~~

There is just one node with the `root` dependency relation in every tree. If the main predicate is not present (due to
[ellipsis](http://universaldependencies.org/hy/overview/specific-syntax.html))  and there are multiple orphaned dependents, the dependent that is highest in the 
obliqueness hierarchy is promoted to the head (root) position and the other orphans are attached to it.
<!-- Interlanguage links updated St 6. května 2026, 20:48:38 CEST -->
