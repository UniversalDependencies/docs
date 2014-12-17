---
layout: relation
title:  'xcomp:ds'
shortdef : 'clausal complement with different subject'
---

The dependency type `xcomp:ds`, which stands for *clausal
complement with different subject*, is a subtype of [xcomp]() (*open clausal complement*).
It is used for clausal complements where the subject of the complement clause is inherited from the higher clause, but it's not a subject of the governing clause (if it is a subject, [xcomp]() is used instead). Basically, this means that the subject of the complementing clause must be the object of the complemented clause. These complements are always non-finite.

Note that this subtype represents a departure from the general UD
taxonomy approach in differentiating between inherited subject and object
(see [Syntax: General Principles](http://universaldependencies.github.io/docs/u/overview/syntax.html#clausal-dependents)).

<!-- TODO The differences between types of verbal dependents, such as
`xcomp:ds`, are thoroughly discussed in Section
[verbal](#sec-verbal). -->

<!-- fname:iccomp.pdf -->
~~~ sdparse
Sain hänet itkemään . \n I_made him cry .
xcomp:ds(Sain-1, itkemään-3)
nsubj(itkemään-3, hänet-2)
punct(Sain-1, .-4)
~~~
