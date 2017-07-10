---
layout: relation
title: 'obl:mod'
shortdef: 'oblique modifier'
udver: '2'
---

In FrenchSpoken, the `obl:mod` relation is used for nominal adjuncts. They can be (but are not always) introduced by a preposition.

Here is an example from FrenchSpoken :

~~~ sdparse
oui oui je prends le métro le matin à huit heures et demie \n yes i take the underground in the morning at eight thirty
obl:mod(prends, heures)
obl:mod (prends, matin)
~~~

For prepositional phrases which are required by the verb (or the adjective), we use the [obl:comp]() relation.
For non-core nominal dependents of a verb, we can also use the [obl:periph]() relation.
