---
layout: relation
title: 'root'
shortdef: 'root'
---

The `root` grammatical relation points to the root of the sentence. A
fake node `ROOT` is used as the governor. The `ROOT` node is indexed
with 0, since the indexing of real words in the sentence starts at 1.
This relation is universal.

~~~ sdparse
Eu quero viver !
root(ROOT, quero)
~~~

There should be just one node with the `root` dependency relation in every
tree. If the main predicate is not present (due to ellipsis) and there are
multiple orphaned dependents, the leftmost dependent should be promoted to
the head (root) position and the other orphans should be attached to it.

~~~ sdparse
ROOT PT no governo .
root(ROOT, PT)
case(governo, em)
nmod(PT, governo)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:39 CET 2020 -->
