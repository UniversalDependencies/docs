---
layout: relation
title: 'det'
shortdef: 'determiner'
---

The determiner relation holds between a nominal head and its determiner.  
The dependent of a determiner relation is always a word of POS <code>DET</code>. If a POS <code>DET</code> word appears before another determiner, than it's better to mark it as [det:predet](). See below for the description of this relation.

~~~ sdparse
Alcune chiamate partirono da il Quirinale. 
acl(chiamate, Alcune)
acl(Quirinale, il)
~~~
~~~ sdparse
E' finita la guerra? 
acl(guerra, la)
~~~
~~~ sdparse
Casi di questo genere. 
acl(genere, questo)
~~~
