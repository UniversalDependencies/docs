---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

A nominal subject is a noun phrase which is the syntactic subject of a clause. 

### Examples

_Rachaidh <b>sí</b> abhaile_ `<b>She</b> will go home'

~~~ sdparse
Rachaidh sí abhaile \n Will_go she home
nsubj(Rachaidh, sí)
~~~ 

In a copula construction, the `nsubj` is dependent on the predicate (in this case the noun _réitigh_ 'solution').

_Is réitigh sealadach <b>iad</b>_ `<b>They</b> are temporary solutions'

~~~ sdparse
Is réitigh sealadach iad \n Is temporary solutions they
nsubj(réitigh, iad)
cop(réitigh, Is)
~~~

The head of an infinitival phrase can also be `nsubj` in a copula construction -- in Irish, the infinitive verb form is a verbal noun.

_Ar mhaith leat teach a <b>cheannach</b> ?_ 'Would you like to buy a house?'

~~~ sdparse
Ar mhaith leat teach a cheannach ? \n Is good with_you house to buy?
nsubj(mhaith, cheannach)
~~~


