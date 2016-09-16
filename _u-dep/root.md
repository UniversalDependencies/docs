---
layout: relation
title: 'root'
shortdef: 'root'
---

The `root` grammatical relation points to the root of the sentence. A
fake node `ROOT` is used as the governor. The `ROOT` node is indexed
with 0, since the indexing of real words in the sentence starts at 1.

~~~ sdparse
ROOT I love French fries .
root(ROOT, love)
~~~

<strong>Note: The following rule is not part of the official UD guidelines
version 1. But it has been agreed that it should become part of the future
versions of the standard, and the treebanks since release 1.2 should follow
it.</strong>

There should be just one node with the `root` dependency relation in every
tree. If the main predicate is not present (due to ellipsis) and there are
multiple orphaned dependents, the leftmost dependent should be promoted to
the head (root) position and the other orphans should be attached to it.

~~~ sdparse
ROOT And Robert the fourth place .
root(ROOT, And)
nsubj(And, Robert)
dobj(And, place)
punct(And, .)
amod(place, fourth)
det(place, the)
~~~
