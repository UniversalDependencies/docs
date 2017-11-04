---
layout: relation
title: 'root'
shortdef: 'root'
---

The `root` grammatical relation points to the root of the sentence. A
fake node `ROOT` is used as the governor. The `ROOT` node is indexed
with 0, since the indexing of real words in the sentence starts at 1.

~~~ sdparse
ROOT Макаревич любить макарони . \n ROOT Makarevych loves pasta .
root(ROOT-1, любить)
root(ROOT-7, loves)
~~~

There is just one node with the `root` dependency relation in every
tree. If the main predicate is not present (due to
[ellipsis](http://universaldependencies.org/uk/overview/specific-syntax.html#ellipsis))
and there are
multiple orphaned dependents, the leftmost dependent is promoted to
the head (root) position and the other orphans are attached to it.

An example sentence-like segment that lacks the main verb:
_А вони що [роблять]? _
“And what [do] they [do]?”

~~~ sdparse
ROOT А вони що ? \n ROOT And they what ?
root(ROOT-1, А)
root(ROOT-6, And)
nsubj(А, вони)
nsubj(And, they)
dobj(А, що)
dobj(And, what)
punct(А, ?-4)
punct(And, ?-10)
~~~

