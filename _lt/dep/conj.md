---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a coordinating conjunction, such as _ir (and), o, bet (but)_ or a comma or other punctuation. We treat coordination asymmetrically. The head of the relation is the first conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ sdparse
Jis mėgo dainuoti ir groti . \n He liked to-sing and play .
conj(dainuoti, groti)
conj(to-sing, play)
~~~

~~~ sdparse
Lukas yra atviras , geras ir nuoširdus . \n Lukas is open , kind and sincere .
conj(atviras, geras)
conj(atviras, nuoširdus)
conj(open, kind)
conj(open, sincere)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Aš geriu arbatą , o jis skaito knygą . \n I am-drinking tea , and she is-reading a-book .
conj(geriu, skaito)
conj(am-drinking, is-reading)
~~~

Linking words (_ir taip toliau, ir panašiai / and so on, and so forth_) and abbreviations (_ir t. t., ir pan. / etc._) are tagged [cc]() (_ir_ and ADV (_taip, toliau, panašiai, t. t., pan. / and, so on, and so forth,_ etc.), because their main element is an adverb; yet they are still attached as `conj` to the head of the coordination:

~~~ sdparse
Lukas turi žemuogių , aviečių , mėlynių ir taip toliau . \n Lukas has strawberries , raspberries , blueberries , and so on .
conj(žemuogių, toliau)
advmod(toliau, taip)
conj(strawberries, on)
advmod(on, so)
~~~

~~~ sdparse
Prie jūros galima valgyti ledus , degintis , skaityti knygą ir t. t. \n At the-seaside you-can eat ice-cream, sunbathe, read a-book , and so on .
conj(valgyti, t.-13 )
advmod(t.-13, t.-12 )
conj(eat, on)
advmod(on, so)
~~~

In Lithuanian “so on” is an abbreviation.

For more on the relation between a conjunct and the coordinating conjunction, see the [cc]() relation.
<!-- Interlanguage links updated Út 30. června 2026, 10:34:26 CEST -->
