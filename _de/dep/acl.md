---
udver: '2'
layout: relation
title: 'acl'
shortdef: 'adjectival clause'
---

`acl` marks finite and non-finite clauses that modify a noun.

~~~ sdparse
Haben Sie den Eindruck , daß das Licht heller geworden ist ? \n Do you have the impression that the light got brighter ?
acl(Eindruck, heller)
~~~

~~~ sdparse
Tatsächlich gibt es Bestrebungen , den Straßenverkehr sicherer zu machen . \n There are indeed efforts to make the traffic safer .
acl(Bestrebungen, machen)
~~~

The relation also encompasses relative clauses. A relative clause is a clause that modifies a noun. 
Relative clauses are finite and are introduced with a relative pronoun that refers back to the noun.

~~~ sdparse
Er legt das Buch auf den Tisch , der dort drüben steht . \n Put the book on the table that stands over there .
acl(Tisch, steht)
nsubj(steht, der)
~~~

~~~ sdparse
Er stellt den Teller auf den Tisch , auf dem schon das Buch liegt . \n Put the plate on the table on which the book lies already .
acl(Tisch, liegt)
nmod(liegt, dem)
~~~

Extraposed relative clauses often introduce non-projective structures.

~~~ sdparse
Petra hat diese Frau angerufen , die sie gestern getroffen hat . \n Petra called this woman whom she met yesterday .
acl(Frau, getroffen)
obj(angerufen, Frau)
aux(angerufen, hat)
nsubj(getroffen, die)
~~~

<!-- Interlanguage links updated Út zář 29 20:23:14 CEST 2020 -->
