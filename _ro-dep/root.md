---
layout: relation
title: 'root'
shortdef: 'root'
---

The `root` grammatical relation points to the root of the sentence. A fake node "ROOT" is used as the governor. The ROOT node is indexed with "0", since the indexation of real words in the sentence starts at 1. 

~~~ sdparse
ROOT Copilul aleargă . \n ROOT Child-the runs .
root(ROOT-2, aleargă)
root(ROOT-2, runs)
~~~
