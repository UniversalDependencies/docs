---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
---

A relative clause is a clause that modifies a noun. Relative clauses
are finite and are introduced with a relative pronoun that refers back to the noun.
`acl:relcl` is a subtype of the [acl]() relation.

~~~ sdparse
Er legt das Buch auf den Tisch , der dort drüben steht . \n Put the book on the table that stands over there .
acl:relcl(Tisch, steht)
nsubj(steht, der)
~~~

~~~ sdparse
Er stellt den Teller auf den Tisch , auf dem schon das Buch liegt . \n Put the plate on the table on which the book lies already .
acl:relcl(Tisch, liegt)
nmod(liegt, dem)
~~~

Extraposed relative clauses often introduce non-projective structures.

~~~ sdparse
Petra hat diese Frau angerufen , die er gestern getroffen hat . \n Petra called this woman who she met yesterday .
acl:relcl(Frau, getroffen)
dobj(angerufen, Frau)
aux(angerufen, hat)
nsubj(getroffen, die)
~~~
