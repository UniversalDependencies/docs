---
layout: relation
title:  'compound:prt'
shortdef : 'phrasal particles'
---

In UD Irish, the subtype `compound:prt` (phrasal particle) is used in connection with phrasal verbs, where the particle is considered an integral part of the verb expression. The governor of the dependency is the verb, and the dependent is the phrasal particle.

### Example

_Na sonraí atá leagtha <b>amach</b> in Airteagal J_  'The details that are laid <b>out</b> in Article J'

~~~ sdparse
Na sonraí atá leagtha amach in Airteagal J \n The details that are laid out in Article J.
compound:prt(leagtha, amach)
~~~

