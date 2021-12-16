---
layout: relation
title:  'xcomp:ds'
shortdef : 'clausal complement with different subject'
udver: '2'
---

The dependency type `xcomp:ds`, which stands for *clausal
complement with different subject*, is a subtype of [xcomp]() (*open clausal complement*).
It is used for clausal complements where the subject of the complement clause is inherited from the higher clause, but it's not a subject of the governing clause (if it is a subject, [xcomp]() is used instead). Basically, this means that the subject of the complementing clause must be the object of the complemented clause. These complements are always non-finite.

Note that this subtype represents a departure from the general UD
taxonomy approach in differentiating between inherited subject and object
(see [Syntax: General Principles](http://universaldependencies.org/u/overview/syntax.html#clausal-dependents)).

~~~ sdparse
Сія ӧвтыштіс мелань кинас, тшӧктіс онмӧссьыны и муніс керку бокӧ,... \n He wave a hand at me, had me go to sleep and went over next to the house,...
nsubj(ӧвтыштіс-2, Сія-1)
obl(ӧвтыштіс-2, мелань-3)
obl(ӧвтыштіс-2, кинас-4)
punct(тшӧктіс-6, ,-5)
xcomp:ds(тшӧктіс-6, онмӧссьыны-7)
conj(ӧвтыштіс-2, тшӧктіс-6)
~~~
<!-- Interlanguage links updated St lis 3 20:59:11 CET 2021 -->
