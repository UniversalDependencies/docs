---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. A fake node "ROOT" is used as the governor. The ROOT node is indexed with "0", since the indices of real words in the sentence start at 1. 

~~~ sdparse
ROOT Jag älskar pommes frites . \n ROOT I love French fries .
root(ROOT, älskar)
~~~

~~~ sdparse
ROOT Bill är en ärlig man \n ROOT Bill is an honest man
root(ROOT, man-6)
~~~
<!-- Interlanguage links updated Út zář 29 20:32:02 CEST 2020 -->
