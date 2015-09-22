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

Since release 1.2 of the Czech UD treebank,
there is just one node with the `root` dependency relation in every
tree. If the main predicate is not present (due to
[ellipsis](http://universaldependencies.github.io/docs/cs/overview/specific-syntax.html#ellipsis))
and there are
multiple orphaned dependents, the leftmost dependent is promoted to
the head (root) position and the other orphans are attached to it.

An example sentence-like segment that lacks the main verb:
_A co na to [říká] MF?_
“And what [does] MF [say] to it?”

~~~ sdparse
ROOT A co na to MF ? \n ROOT And what to it MF ?
root(ROOT-1, A)
root(ROOT-9, And)
dobj(A, co)
dobj(And, what)
nmod(A, to-5)
nmod(And, it)
case(to-5, na)
case(it, to-12)
nsubj(A, MF-6)
nsubj(And, MF-14)
punct(A, ?-7)
punct(And, ?-15)
~~~
