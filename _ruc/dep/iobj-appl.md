---
layout: relation
title: 'iobj:appl'
shortdef: 'applied indirect object in applicative construction'
udver: '2'
---

In Ruuli, verbal valency can be increased by the applicative suffix *-ir/-er*. It introduces a new object argument, typically corresponding to a semantic role that would otherwise be expressed as an oblique dependent.

When the base verb is transitive, the applied argument is analyzed as an indirect object and annotated with the `iobj:appl` relation.

~~~ sdparse
Leke basondereku abantu emere . \n So_that they_gather_for people food .
iobj:appl(basondereku, abantu)
iobj:appl(they_gather_for, people)
obj(basondereku, emere)
obj(they_gather_for, food)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:00:57 CEST -->
