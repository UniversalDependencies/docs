---
layout: relation
title:  'cop'
shortdef : 'copula'
---

Copular clauses receive a special treatment in the SD scheme. The
predicative acts as the head word of the clause, and the copular verb
depends on it using a `cop` (*copula*) dependency. The only copular
verb in Finnish is *olla* "be" (see ISK
[§891](http://scripta.kotus.fi/visk/sisallys.php?p=891)).

<!-- TODO Distinguishing copular structures from other constructs as
well as recognizing the subject and the predicative is discussed in
Section [copulas](#sec-copulas). -->

<!-- fname:cop.pdf -->
~~~ sdparse
Huivi oli punainen . \n The_scarf was red .
nsubj-cop(punainen-3, Huivi-1)
cop(punainen-3, oli-2)
punct(punainen-3, .-4)
~~~

### References

* <http://scripta.kotus.fi/visk/sisallys.php?p=891> (in Finnish)
