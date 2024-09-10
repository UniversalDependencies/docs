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
ROOT Люблю индийскую еду . \n ROOT I-love Indian food .
root(ROOT-1, Люблю)
root(ROOT-7, I-love)
~~~

There is just one node with the `root` dependency relation in every
tree. 

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:48 CEST -->
