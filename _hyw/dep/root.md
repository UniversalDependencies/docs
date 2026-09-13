---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. A fake node `ROOT` is used as the governor. The `ROOT` node is indexed with 0, since the indexing of real words in the sentence starts at 1.

~~~ conllu

~~~

There is just one node with the `root` dependency relation in every tree. If the main predicate is not present (due to [ellipsis](http://universaldependencies.org/hy/overview/specific-syntax.html))
and there are multiple orphaned dependents, the dependent that is highest in the obliqueness hierarchy is promoted to the head (root) position and the other orphans are attached to it.

An example 

~~~ conllu

~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:43 CEST -->
