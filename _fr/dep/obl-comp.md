---
layout: relation
title: 'obl:comp'
shortdef: 'oblique complement'
udver: '2'
---

FrenchSpoken uses the `obl:comp` relation for core dependents of a verb (or an adjective), which are introduced by a preposition.

Here is an example from FrenchSpoken :

~~~ sdparse
vous sortez euh de la euh commune de Pontamafrey \n you go out uh of the uh municipality of Pontamafrey
obl:comp(sortez, commune)
case(commune, de)
~~~

For prepositional phrases which are not required by the verb (or the adjective) but modify the verb (or the adjective), the [obl:mod]() relation is used.
For non-core nominal dependents of a verb not governed by their head, the [obl:periph]() relation is used.
