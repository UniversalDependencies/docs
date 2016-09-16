---
layout: relation
title: 'root'
shortdef: 'root'
---

This document is a placeholder for the language-specific documentation
for `root`.

The root grammatical relation points to the root of the sentence. A fake node "ROOT" is used as the governor. The ROOT node is indexed with "0", since the indexation of real words in the sentence starts at 1.

~~~ sdparse
ROOT Me gusta el cine . \n I like the cinema .
root(ROOT, gusta)
~~~

~~~ sdparse
ROOT María es simpática . \n María is friendly .
root(ROOT, es)
~~~
