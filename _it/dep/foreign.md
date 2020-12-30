---
layout: relation
title: 'flat:foreign'
shortdef: 'foreign words'
udver: '1'
---

We use <code>flat:foreign</code> to label sequences of foreign words. These are given a linear analysis: the head is the first token in the foreign phrase. 
In the Italian Treebank, the only cases attested appear with words POS tagged as <code>X</code>. The only exception to that happens when foreign proper names are part of a sequence of foreign words (as in the last example).

~~~ sdparse
Dulcis/X in/X fundo/X, il portamento .
flat:foreign(Dulcis, in)
flat:foreign(Dulcis, fundo)
~~~
~~~ sdparse
Home/X run/X .
flat:foreign(Home, run)
~~~
~~~ sdparse
Il primo disco si chiama Greetings/X from/X Asbury/PROPN Park/PROPN .
flat:foreign(Greetings, from)
flat:foreign(Greetings, Asbury)
flat:foreign(Greetings, Park)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:27 CET 2020 -->
