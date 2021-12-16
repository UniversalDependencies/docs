---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement of a predicate is
a predicative or clausal complement without its own subject.
The reference of the subject is necessarily determined
by an argument external to the xcomp
(normally by the object of the next higher clause, if there is one,
or else by the subject of the next higher clause).
These complements are always non-finite,
and they are complements (arguments of the higher predicate)
rather than adjuncts/modifiers, such as a purpose clause.

In majority of the cases, we use `xcomp` for the verbal nouns
formed by the suffix _-mAk_.

~~~ sdparse
Okumak istiyor . \n He wants to read
xcomp(istiyor, Okumak)
~~~

In addition, we also use `xcomp` for secondary predicates, 
or in general, what Göksel & Kerslake (2005) calls "small clauses".
The decision between a secondary predicate or adverb analysis is often diffcult,
since most adjectives also function as adverbs.

~~~ sdparse
Ali çayını soğuk içer . \n Ali drinks his tea cold
xcomp(içer, soğuk)
~~~

~~~ sdparse
Bu kitap bir baş yapıt sayılır . \n This book is considered a master piece
xcomp(sayılır, yapıt)
~~~

~~~ sdparse
Onu İstanbul'da sanıyordum . \n I tought he\/she was in Istanbul
xcomp(sanıyordum, İstanbul'da)
~~~

### References
Aslı Göksel and Celia Kerslake. _Turkish: A Comprehensive Grammar_.
London: Routledge, 2005.
<!-- Interlanguage links updated St lis 3 20:59:11 CET 2021 -->
