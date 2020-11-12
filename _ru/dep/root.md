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
_И что он на это ?_
“And what [does] he [say] to it?”

~~~ sdparse
ROOT И что он на это ? \n ROOT And what he to it ?
root(ROOT-1, И)
root(ROOT-9, And)
obj(И, что)
obj(And, what)
nmod(И, это)
nmod(And, it)
case(это, на)
case(it, to)
nsubj(И, он)
nsubj(And, he)
punct(И, ?-7)
punct(And, ?-15)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:39 CET 2020 -->
