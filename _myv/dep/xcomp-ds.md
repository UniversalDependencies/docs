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
Атятне кадызь Миколонь оймсеме,... \n The old men left Mikol to rest,...
nsubj(кадызь-2, Атятне-1)
obj(кадызь-2, Миколонь-3)
xcomp:ds(кадызь-2, оймсеме-4)
~~~
<!-- Interlanguage links updated St lis 3 20:59:11 CET 2021 -->
