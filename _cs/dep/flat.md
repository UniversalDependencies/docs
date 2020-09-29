---
layout: relation
title: 'flat'
redirect_from: "cs/dep/name.html"
shortdef: 'personal name'
udver: '2'
---

`flat` is one of the relations for compounding in UD.
In Czech it is used to join the first (or middle) and the last name of a person.

The leftmost name is always the head and the other name(s) are attached to it.
In most cases this is the opposite to PDT where family names are heads and given names are dependents,
and the family name is usually the last name.

The relation is not used to attach adjectives to nouns within multi-word names of places, organizations etc.
(e.g. _Český Krumlov_).

~~~ sdparse
Prezident Václav Havel včera navštívil Český Krumlov . \n President Václav Havel yesterday visited Český Krumlov .
flat(Václav-2, Havel-3)
flat(Václav-11, Havel-12)
nmod(Václav-2, Prezident)
nmod(Václav-11, President)
amod(Krumlov-7, Český-6)
amod(Krumlov-16, Český-15)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:31 CEST 2020 -->
