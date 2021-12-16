---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The root grammatical relation points to the root of the sentence. A fake node "ROOT" is used as the governor. The ROOT node is indexed with "0", since the indexation of real words in the sentence starts at 1.

~~~ sdparse
ROOT Me gusta el cine . \n I like the cinema .
root(ROOT, gusta)
~~~

~~~ sdparse
ROOT María es simpática . \n María is friendly .
root(ROOT, es)
~~~
<!-- Interlanguage links updated St lis 3 20:59:10 CET 2021 -->
