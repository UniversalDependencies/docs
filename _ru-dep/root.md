---
layout: relation
title: 'root'
shortdef: 'root'
---

The `root` grammatical relation points to the root of the sentence. A
fake node `ROOT` is used as the governor. The `ROOT` node is indexed
with 0, since the indexing of real words in the sentence starts at 1.

~~~ sdparse
ROOT Люблю индийскую еду . \n ROOT I-love Indian food .
root(ROOT-1, Люблю)
root(ROOT-7, I-love)
~~~

There is just one node with the `root` dependency relation in every
tree. If the main predicate is not present (due to
[ellipsis](http://universaldependencies.org/cs/overview/specific-syntax.html#ellipsis))
and there are
multiple orphaned dependents, the leftmost dependent is promoted to
the head (root) position and the other orphans are attached to it.

An example sentence-like segment that lacks the main verb:
_И что на это MF?_
“And what [does] MF [say] to it?”

~~~ sdparse
ROOT И что на это MF ? \n ROOT And what to it MF ?
root(ROOT-1, И)
root(ROOT-9, And)
dobj(И, что)
dobj(And, what)
nmod(И, это-5)
nmod(And, it)
case(это-5, на)
case(it, to-12)
nsubj(И, MF-6)
nsubj(And, MF-14)
punct(И, ?-7)
punct(And, ?-15)
~~~

