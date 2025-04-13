---
layout: relation
title: 'advmod:neg'
shortdef: 'negation particle'
udver: '2'
---

The `advmod:neg` relation is used to confer negative polarity to any other element than predicate. Most often it is used for negation particle _ne_.

~~~ sdparse
Ne visi kļūst par filozofiem . \n Not everybody becomes a philosopher .
advmod:neg(visi, Ne)
nsubj(kļūst, visi)
case(filozofiem, par)
xcomp(kļūst, filozofiem)
punct(kļūst,.)
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:23 CET -->
