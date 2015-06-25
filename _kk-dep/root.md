---
layout: relation
title:  'root'
shortdef : 'root'
---

The `root` grammatical relation points to the root of the sentence. A fake node "ROOT" is used as the governor. The ROOT node is indexed with "0", since the indexation of real words in the sentence starts at 1. 

~~~ sdparse
ROOT I love French fries .
ROOT Айгүл оны ақырын тыңдайды . \n Aygül him carefully searches-for .
root(ROOT, тыңдайды-4)
~~~

~~~ sdparse
ROOT Айгүл студент болған . \n Aygül student was .
root(ROOT, студент-2)
~~~
