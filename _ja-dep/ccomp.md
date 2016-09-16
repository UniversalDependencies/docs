---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
---

Clausal complements are typically introduced by a postpositional particle と / *to* "that".
The head of the dependency `ccomp` is the main verb of the main clause, and
the dependant is the main predicate of the complement.

~~~ sdparse
きれい だ と 思う 。 \n beautiful AUX that think .
ccomp(思う, きれい)
aux(きれい, だ)
case(きれい, と)
punct(思う, 。)
~~~
