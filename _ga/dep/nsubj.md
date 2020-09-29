---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a noun phrase which is the syntactic subject of a clause and which controls the verb contained within the clause. 

### Examples

_Rachaidh <b>sí</b> abhaile_  '<b>She</b> will go home'

~~~ sdparse
Rachaidh sí abhaile \n Will_go she home
nsubj(Rachaidh, sí)
~~~ 

In a copula construction, the `nsubj` is dependent on the predicate (in this case the noun _réitigh_ 'solution').



_Is réitigh sealadacha <b>iad</b>_  '<b>They</b> are temporary solutions'

~~~ sdparse
Is réitigh sealadacha iad \n Is temporary solutions they
nsubj(réitigh, iad)
cop(réitigh, Is)
~~~

The head of an infinitival phrase can also be `nsubj` in a copula construction -- in Irish, the infinitive verb form is a verbal noun.



_Ar mhaith leat teach a <b>cheannach</b> ?_  'Would you like to <b>buy</b> a house?'

~~~ sdparse
Ar mhaith leat teach a cheannach ? \n Would_be good with_you house to buy?
nsubj(mhaith, cheannach)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:37 CEST 2020 -->
