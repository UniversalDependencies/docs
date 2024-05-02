---
layout: relation
title:  'advcl:relcl'
shortdef : 'relative clause modifier of a clause'
udver: '2'
---

The `advcl:relcl` relation is used for relative clauses modifying
a clause. The relation points from the head of the clause to the
head of the relative clause. Relative clauses are always finite in Swedish.
A relative pronoun is obligatory for this type of relative clause and the
most commonly used form is 'vilket'.

~~~ sdparse
Jag försökte förklara mig, vilket var en dålig idé \n I tried to explain myself, which was a bad idea
advcl:relcl(försökte-2, idé)
nsubj(idé, vilket)
~~~

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:19 CET -->
