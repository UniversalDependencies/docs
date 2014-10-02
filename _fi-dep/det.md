---
layout: entry
title:  'det'
shortdef : 'determiner'
---

There are no definite or indefinite articles in the Finnish language, but there are other determiners (see ISK <a href="http://scripta.kotus.fi/visk/sisallys.php?p=1409">§1409</a>). In TDT, mostly pronouns are marked as *determiners* (`det`), because numerals, which can also be analyzed as determiner-like, are marked as *numeral modifiers* <a href="http://universaldependencies.github.io/docs/fi/num.html">num</a>, and genitive modifiers, also determiner-like, are marked with <a href="http://universaldependencies.github.io/docs/fi/poss.html">poss</a>.

<!-- fname:det.pdf -->
~~~ sdparse
Kaikki miehet pudistivat päätään . \n All men shook their_head .
det(miehet-2, Kaikki-1)
nsubj(pudistivat-3, miehet-2)
dobj(pudistivat-3, päätään-4)
punct(pudistivat-3, .-5)
~~~
