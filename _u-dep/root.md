---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. A fake node `ROOT` is used as the governor. The `ROOT` node is indexed with 0, since the indexing of real words in the sentence starts at 1. (The `ROOT` node is not represented
explicitly in CoNLL-U.)

~~~ sdparse
ROOT I love French fries .
root(ROOT, love)
~~~

**New from v2:** There should be just one node with the `root` dependency relation in every tree. 
If the main predicate is not present (due to ellipsis) and there are multiple orphaned dependents, 
one of these is promoted to the head (root) position and the other orphans are attached to it.
(This rule has in practice been followed since release v1.2 but was not explicitly stated in the
original v1 guidelines.)

~~~ sdparse
ROOT And Robert the fourth place .
root(ROOT, Robert)
cc(Robert, And)
orphan(Robert, place)
punct(Robert, .)
amod(place, fourth)
det(place, the)
~~~
