---
layout: relation
title: 'foreign'
shortdef: 'foreign words'
---

We use <code>foreign</code> to label sequences of foreign words. These are given a linear analysis: the head is the first token in the foreign phrase. 
In the Italian Treebank, the only cases attested appear with words POS tagged as <code>X</code>.


~~~ sdparse
Dulcis/X in/X fundo/X, il portamento.
foreign(Dulcis, in)
foreign(Dulcis, fundo)
~~~
