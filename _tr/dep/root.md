---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence.
A fake node "ROOT" is used as the governor.
The ROOT node is indexed with "0", since the indexation of real words in the sentence starts at 1.
<!-- Interlanguage links updated Čt lis 12 09:43:39 CET 2020 -->

~~~ sdparse
ROOT Neslihan okula gelmiş .
root(ROOT, gelmiş)
~~~

~~~ sdparse
ROOT Aslı yemek yemek istiyor .
root(ROOT, istiyor)
~~~
