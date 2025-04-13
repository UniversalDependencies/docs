---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

`case` relation is used for any case-marking element which is treated as a separate syntactic word, especially, postpositions. Case-marking elements are treated as dependents of the noun they attach to or introduce. The case relation aims at providing a more uniform analysis of nominal elements, postpositions and case: a nominal in an oblique case will receive the same dependency structure as a nominal introduced by a postposition. When case markers are morphemes, they are not divided off the noun as a separate case dependent, but the noun as a whole is analyzed as obl (if dependent on a predicate) or nmod (if dependent on noun).

~~~ sdparse
ოთახში საშინლად ჭყავიან სხვა ბავშვები. /n 'The other children are crying in the room.'
case(ოთახ, ში)
obl(ჭყავიან, ოთახ)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:30 CET -->
