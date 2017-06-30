---
layout: relation
title: 'obl:comp'
shortdef: 'oblique complement'
udver: '2'
---

In FrenchSpoken, the `obl:comp` relation is used for core dependents of a verb (or an adjective), which are introduced by a preposition.

Here is an example from FrenchSpoken :

~~~ sdparse
vous sortez euh de la euh commune de Pontamafrey \n you go out uh of the uh municipality of Pontamafrey
obl:comp(sortez, commune)
case(commune, de)
~~~

For prepositional phrases which are not required by the verb (or the adjective) but modify the verb (or the adjective), we use the [obl:mod]() relation.
For non-core nominal dependents of a verb, we can also use the [obl:periph]() relation.
