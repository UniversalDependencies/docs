---
layout: relation
title: 'parataxis:obj'
shortdef: 'parataxis object'
udver: '2'
---

In FrencSpoken, the `parataxis:obj` relation is used for direct speech when it is governed by a verb. 

~~~ sdparse
Ma mère m'a dit tu dois ranger ta chambre. \n My mother told me you have to clean your room.
parataxis:obj(dit, dois)
~~~

In the previous example, we can see that _Ma mère m'a dit_ cannot constitute a core sentence without the phrase _tu dois ranger ta chambre_. 
This clearly shows that _tu dois ranger ta chambre_ is an object of _dit_, that is why the `parataxis:obj` relation is used.

Here is an example from FrenchSpoken:

~~~ sdparse
on m'a dit tu as l'antenne un mois \n they told me you have the antenna for one month
parataxis:obj(dit, as)
~~~

There are five more subrelations that FrenchSpoken uses: [parataxis:discourse](), [parataxis:dislocated](), [parataxis:insert](), [parataxis:parenth]() and [parataxis:conj]().
