---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. A
fake node `ROOT` is used as the governor. The `ROOT` node is indexed
with 0, since the indexing of real words in the sentence starts at 1.

~~~ sdparse
ROOT Նախընտրում եմ արաբական խոհանոց ։ \n ROOT I prefer Arab cuisine .
root(ROOT-1, Նախընտրում)
root(ROOT-8, prefer)
~~~

There is just one node with the `root` dependency relation in every
tree. If the main predicate is not present (due to
[ellipsis](http://universaldependencies.org/hy/overview/specific-syntax.html))
and there are
multiple orphaned dependents, the dependent that is highest in the obliqueness hierarchy is promoted to
the head (root) position and the other orphans are attached to it.

An example sentence-like segment that lacks the main verb:
_Եվ Ռոբերտը՝ չորրորդ հորիզոնականը (Իսկ Ռոբերտը [գրավեց] չորրորդ հորիզոնականը)։_
“And Robert - the-fourth place. (And Robert [won] the-fourth place.)”

~~~ sdparse
ROOT Իսկ Ռոբերտը ՝ չորրորդ հորիզոնականը ։ \n ROOT And Robert - the-fourth place .
root(ROOT-1, Ռոբերտը)
root(ROOT-9, Robert)
cc(Ռոբերտը, Իսկ)
cc(Robert, And)
orphan(Ռոբերտը, հորիզոնականը)
orphan(Robert, place)
punct(Ռոբերտը, ՝)
punct(Robert, -)
amod(հորիզոնականը, չորրորդ)
amod(place, the-fourth)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:27 CEST 2020 -->
