---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence.
A fake node `ROOT` is used as the governor.
The `ROOT` node is indexed with 0, since the indexing of real words in the sentence starts at 1.
There should only be one node with the `root` dependency relation in every tree.

~~~ sdparse
ROOT J' aime les frites . \n I love French fries .
root(ROOT, aime)
~~~

~~~ sdparse
ROOT Il est grand . \n He is tall .
root(ROOT, grand)
~~~

Some examples from **UD_French-Spoken**:

~~~ sdparse
ROOT ils ont discuté \n they chatted
root(ROOT,discuté)
~~~

~~~ sdparse
ROOT tu prends la grande rue \n you take the big street
root(ROOT,prends)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:21 CEST 2021 -->
