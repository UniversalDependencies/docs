---
layout: relation
title: 'root'
shortdef: 'root'
---

The `root` grammatical relation points to the root of the sentence. A
fake node `ROOT` is used as the governor. The `ROOT` node is indexed
with 0, since the indexing of real words in the sentence starts at 1.

~~~ sdparse
ROOT Miluju indická jídla . \n ROOT I-love Indian food .
root(ROOT-1, Miluju)
root(ROOT-7, I-love)
~~~

In case of
[ellipsis](http://universaldependencies.github.io/docs/cs/overview/specific-syntax.html#ellipsis)
there can be multiple _top nodes_ attached to the `ROOT` node.
This happens with sentence-like segments that lack the main verb:
_A co na to [říká] MF?_
“And what [does] MF [say] to it?”
If there is just one orphaned noun phrase, it is promoted to the top position and its head is
labeled `root`.
However, if there are multiple orphans, each of them is attached to the root and we get multiple top nodes:

~~~ sdparse
ROOT A co na to MF ? \n ROOT And what to it MF ?
root(ROOT-1, A)
root(ROOT-9, And)
root(ROOT-1, co)
root(ROOT-9, what)
root(ROOT-1, to-5)
root(ROOT-9, it)
case(to-5, na)
case(it, to-12)
root(ROOT-1, MF-6)
root(ROOT-9, MF-14)
root(ROOT-1, ?-7)
root(ROOT-9, ?-15)
~~~
