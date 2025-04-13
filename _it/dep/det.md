---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The determiner relation holds between a nominal head and its determiner.  
The dependent of a determiner relation is always a word of POS <code>DET</code>. If a POS <code>DET</code> word appears before another determiner, then it is marked as [det:predet]().

~~~ sdparse
Alcune chiamate partirono da il Quirinale . 
det(chiamate, Alcune)
det(Quirinale, il)
~~~
~~~ sdparse
E' finita la guerra ? 
det(guerra, la)
~~~
~~~ sdparse
Casi di questo genere . 
det(genere, questo)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:48 CET -->
